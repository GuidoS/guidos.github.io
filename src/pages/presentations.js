import * as React from "react"

import Layout from "../components/layout"
import { Seo } from "../components/seo"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    presentationsToml {
      links {
        title
        link
        date
        location
        description
      }
    }
  }
`

const presentations = ({ data }) => {
  return (
    <Layout>
      <div className="container  my-5">
        <div className="container">
          <h1>Presentations</h1>
          {data.presentationsToml.links.map(node => (
            <div>
              <h2>
                <a href={node.link}>{node.title}</a>
              </h2>
              <p>
                {`${[node.date, node.location].filter(n => n).join(", ")}`}{" "}
                <br />
                {node.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default presentations

export const Head = () => <Seo title="About Gatsby Bootsrap 5 starter" />
