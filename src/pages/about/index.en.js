/* Vendor imports */
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
/* App imports */
import { aboutPropTypes, imageListPropTypes, iconsNameMap } from './index'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Utils from '../../utils'
import style from './index.module.less'

class About extends React.Component {
  static propTypes = aboutPropTypes

  render() {
    let { profilePhoto, flagEn, skillIcons, toolIcons } = this.props.data
    return (
      <Layout>
        <SEO
          title="About"
          description="A basic summary about this blog"
          path="about"
        />
        <div className={style.container}>
          <div className={style.photo}>
            <Img fluid={profilePhoto.childImageSharp.fluid} />
          </div>
          <div className={style.content}>
            <h1>Hi, I'm Fptbb!</h1>
            <h2>Software Developer</h2>
            <p>Para a versão em portugues clique aqui</p>
            <a href={Utils.resolvePageUrl('../', '../', 'about')}>
              <Img
                fixed={flagEn.childImageSharp.fixed}
                style={{ display: 'block', margin: 'auto' }}
              />
            </a>
            <p>
            This blog was created for my publications, my projects, ideas, studies, etc., using Gatsby, and hosted on Github Pages, I also used a template as a base, and modified it, follow the links of the template framework and tools used.<br/>
              <a href='https://pages.github.com/'>Github Pages</a><br/>
              <a href='https://www.gatsbyjs.com/'>Gatsby</a><br/>
              <a href='https://github.com/lgcolella/gatsby-starter-developer-blog'>Template</a><br/>
            </p>
          </div> 
        </div>
      </Layout>
    )
  }
}

class ImageList extends React.Component {
  static propTypes = imageListPropTypes

  render = () => (
    <div className={style.iconsContainer}>
      {this.props.edges
        .sort((edgeA, edgeB) =>
          edgeA.node.name.toLowerCase() > edgeB.node.name.toLowerCase() ? 1 : -1
        )
        .map(({ node: { name, childImageSharp } }) => (
          <div className={style.iconWrapper} key={name}>
            <Img
              fixed={childImageSharp.fixed}
              alt={name + ' logo'}
              title={name}
            />
            <label>
              {iconsNameMap[name] ? iconsNameMap[name] : Utils.capitalize(name)}
            </label>
          </div>
        ))}
    </div>
  )
}

export const query = graphql`
  {
    profilePhoto: file(name: { eq: "profile-photo" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    flagEn: file(name: { eq: "flag-en" }) {
      childImageSharp {
        fixed(width: 50) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    skillIcons: allFile(filter: { dir: { regex: "/about/skills$/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 50) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
    toolIcons: allFile(filter: { dir: { regex: "/about/tools$/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 50) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default About
