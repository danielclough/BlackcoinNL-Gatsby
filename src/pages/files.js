import React from 'react'
import Layout from '../components/layout'
import Files from "../components/Files"

const FilesPage = () => (
  <Layout>
    <div title="BlackcoinNL Files">
      <p>
      👋 Public files can be found at <b> https://blackcoin.nl/files/some-file </b>
      </p>  
      <p>
       📚 If you need support, contact a BlackcoinNL admin on one of the officially supported 
        {` `}
        <a className="underline text-blue-500" href="https://www.blackcoin.nl/blackcoin-social-media/">
          BlackcoinNL social media accounts
        </a>
        .
      </p>
      <br/>
    </div>
    <Files />
  </Layout>
)
export default FilesPage
