import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Files = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "files" } }) {
        edges {
          node {
            publicURL
            relativePath
            ctime (fromNow: true)
          }
        }
      }
    }
  `)

  return (
        <div>
          <p className="text-gray-700 text-base">
            <ul>
              {data.allFile.edges.map((file, index) => {
                return (
                  <li>
                    <a href={file.node.publicURL} download>
                      {file.node.relativePath}     ({file.node.ctime})
                    </a>
                  </li>
                )
              })}
            </ul>
          </p>
        </div>
  )
}
export default Files
