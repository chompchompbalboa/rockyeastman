//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import AboutEditor from './AboutEditor'
import ConsultationEditor from './ConsultationEditor'
import ContactEditor from './ContactEditor'
import FAQsEditor from './FAQsEditor'
import HighlightEditor from './HighlightEditor'
import NavigationEditor from './NavigationEditor'
import PracticeAreasEditor from './PracticeAreasEditor'
import PreviewData from './PreviewData'
import SplashEditor from './SplashEditor'
import StylesEditor from './StylesEditor'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const CriminalDefenseEditor = ({ preview, seed, update }) => {
  return (
    <React.Fragment>
      <PreviewData
        startOpen
        preview={preview}
        seed={seed}
        update={update}/>
      <StylesEditor
        styles={seed.styles}
        update={update}/>
      <NavigationEditor
        startOpen
        nav={seed.blocks.nav}
        update={update}/>
      <SplashEditor
        splash={seed.pages.home.splash}
        update={update}/>
      <PracticeAreasEditor
        practiceAreas={seed.pages.home.practiceAreas}
        update={update}/>
      <ConsultationEditor
        consultation={seed.pages.home.practiceAreas.consultation}
        update={update}/>
      <AboutEditor
        about={seed.pages.home.about}
        update={update}/>
      <HighlightEditor
        highlight={seed.pages.home.about.highlight}
        update={update}/>
      <FAQsEditor
        faqs={seed.pages.home.faqs}
        update={update}/>
      <ContactEditor
        contact={seed.pages.home.contact}
        update={update}/>
    </React.Fragment>
  )
}

export default CriminalDefenseEditor
