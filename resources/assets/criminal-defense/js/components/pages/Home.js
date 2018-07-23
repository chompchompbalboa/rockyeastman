//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { object } from 'prop-types'
import styled from 'styled-components'

import About from '../lib/About'
import Contact from '../lib/Contact'
import FAQs from '../lib/FAQs'
import Footer from '../lib/Footer'
import PracticeAreas from '../lib/PracticeAreas'
import Splash from '../lib/Splash'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Home = ({ seed }) => {
  const { 
    blocks: {
      footer
    },
    config,
    pages: {
      home: {
        splash,
        practiceAreas,
        about,
        faqs,
        contact
      }
    },
    styles
  } = seed

  return (
    <React.Fragment>
      <Splash
        styles={styles} 
        splash={splash}/>
      <PracticeAreas
        config={config}
        styles={styles}
        practiceAreas={practiceAreas} />
      <About 
        config={config}
        styles={styles}
        about={about}/>
      <FAQs 
        config={config}
        styles={styles}
        faqs={faqs}/>
      <Contact 
        config={config}
        styles={styles}
        contact={contact}/>
      <Footer 
        config={config}
        styles={styles}
        footer={footer}/>
    </React.Fragment>
  )
}
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
Home.propTypes = {
  seed: object
}

export default Home