import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import { Seo } from '../components/seo'

const IndexPage = () => (
  <Layout>
    <section className='py-5 text-center container'>
      <div className='row py-lg-5'>
        <div className='col-lg-6 col-md-8 mx-auto'>
          <h1 className='fw-bold'>Guido Stein</h1>
          <p className='lead text-muted'> I like to share with everyone</p>
          <StaticImage
            src='../images/guido-lighthouse.jpg'
            width={300}
            quality={95}
            formats={['AUTO', 'WEBP']}
            alt='A portrait of Guido Stein'
            className='img-fluid'
          />
        </div>
      </div>
      <div className='row'>
        <Link to='/presentations/' className='btn btn-primary my-2'>
          Presentations
        </Link>
        <Link to='/page-2/' className='btn btn-secondary my-2'>
          Go to page 2
        </Link>
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const Head = () => <Seo />
