import React from 'react'
import get from 'lodash/get'
import { Link, graphql } from 'gatsby'

import '../fonts/fonts-post.css'
import Bio from '../components/Bio'
import SEO from '../components/seo'
import Form from '../components/Form'
import Panel from '../components/Panel'
import Layout from '../components/Layout'
import { rhythm, scale } from '../utils/typography'
import { formatReadingTime } from '../utils/helpers'
import {
  codeToLanguage,
  createLanguageLink,
  loadFontsForCode,
} from '../utils/i18n'

const GITHUB_USERNAME = 'studioo'
const GITHUB_REPO_NAME = 'voluntascientia-gatsby'
const systemFont = `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif`

class Translations extends React.Component {
  render() {
    let { translations, lang, languageLink, editUrl } = this.props

    let readerTranslations = translations.filter(lang => lang !== 'ru')
    let hasRussianTranslation = translations.indexOf('ru') !== -1

    return (
      <div className="translations">
        <Panel style={{ fontFamily: systemFont }}>
          {translations.length > 0 && (
            <span>
              {hasRussianTranslation && (
                <span>
                  Originally written in:{' '}
                  {'en' === lang
                    ? <b>{codeToLanguage('en')}</b>
                    : (
                      <Link to={languageLink('en')}>
                        English
                      </Link>)}

                  {' • '}

                  {'ru' === lang
                    ? <b>Русский</b>
                    : (
                      <Link to={languageLink('ru')}>
                        Русский
                      </Link>)}

                  {readerTranslations && 
                    readerTranslations.length > 0 && 
                      <><br /><br /></>}

                </span>
              )}

              {readerTranslations &&
                readerTranslations.length > 0 && 
                  <span>Translated by readers into: </span>}

              {readerTranslations.map((l, i) => (
                <React.Fragment key={l}>
                  {l === lang
                    ? <b>{codeToLanguage(l)}</b>
                    : (
                      <Link to={languageLink(l)}>{codeToLanguage(l)}</Link>
                    )}
                  {i === readerTranslations.length - 1 ? '' : ' • '}
                </React.Fragment>
              ))}
            </span>
          )}
          {lang !== 'en' && (
            <>
              <br />
              <br />
              {lang !== 'ru' && (
                <>
                  <Link to={languageLink('en')}>Read the original</Link>
                  {' • '}
                  <a href={editUrl} target="_blank" rel="noopener noreferrer">
                    Improve this translation
                      </a>
                  {' • '}
                </>
              )}
              <Link to={`/${lang}`}>View all translated posts</Link>{' '}
            </>
          )}
        </Panel>
      </div>
    )
  }
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    let {
      previous,
      next,
      slug,
      translations,
    } = this.props.pageContext
    const lang = post.fields.langKey
    let html = post.html

    translations = translations.slice()
    translations.sort((a, b) => {
      return codeToLanguage(a) < codeToLanguage(b) ? -1 : 1
    })

    loadFontsForCode(lang)
    const languageLink = createLanguageLink(slug, lang)
    const enSlug = languageLink('en')
    const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/src/pages/${enSlug.slice(
      1,
      enSlug.length - 1
    )}/index${lang === 'en' ? '' : '.' + lang}.md`

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          lang={lang}
          slug={post.fields.slug}
          title={post.frontmatter.title}
          description={post.frontmatter.spoiler}
        />
        <main>
          <article>
            <header>
              <h1>{post.frontmatter.title}</h1>
              <p
                style={{
                  ...scale(-1 / 5),
                  display: `block`,
                  marginBottom: rhythm(1),
                  marginTop: rhythm(-1),
                }}
              >
                {post.frontmatter.date}
                {` • ${formatReadingTime(post.timeToRead)}`}
              </p>
              {translations.length > 0 && (
                <Translations
                  lang={lang}
                  editUrl={editUrl}
                  languageLink={languageLink}
                  translations={translations}
                />
              )}
            </header>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <footer>
            <p>
              <a
                href={editUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Edit on GitHub
              </a>
            </p>
            </footer>
          </article>
        </main>
        <aside>
          <div
            style={{
              margin: '80px 0 40px 0',
              fontFamily: systemFont,
            }}
          >
            <Form
              method={'post'}
              buttonTitle={'Subscribe'}
              title={'Join the Newsletter'}
              description={'Subscribe to get the latest content by email.'}
              info={`I won't send you spam.<br /> Unsubscribe at any time.`}
              endpoint={'https://p5psezx8c9.execute-api.eu-west-1.amazonaws.com/prod/subscribe'}
            />
          </div>
          <hr style={{ marginBottom: rhythm(1) }} />
          <h3
            style={{
              fontFamily: 'Montserrat, sans-serif',
              marginTop: rhythm(0.25),
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: '#62a835',
              }}
              to={'/'}
            >
              Voluntascientia
            </Link>
          </h3>
          <Bio />
          <nav>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </aside>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        spoiler
      }
      fields {
        slug
        langKey
      }
    }
  }
`
