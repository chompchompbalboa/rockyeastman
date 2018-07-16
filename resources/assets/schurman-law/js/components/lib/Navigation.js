//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import {  } from 'prop-types'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'

import colors from '../../styles/colors'
import layout from '../../styles/layout'

import NavigationMobile from './NavigationMobile'
import NavigationDesktop from './NavigationDesktop'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Navigation = (props) => {
  const links = [
    {text: "Home", slug: ""},
    {text: "Domestic Violence", slug: "domestic-violence"},
    {text: "Drug Crimes", slug: "drug-crimes"},
    {text: "DUI/Vehicular Crimes", slug: "vehicular-crimes"},
    {text: "About Eric Schurman", slug: "about"},
  ]
  return (
    <React.Fragment>
      <MediaQuery maxDeviceWidth={layout.breakpoints.tabletUp - 1}>
        <NavigationMobile 
          backgroundColor={colors.primary}
          height={layout.navigationHeightMobile}
          links={links}/>
      </MediaQuery>
      <MediaQuery minDeviceWidth={layout.breakpoints.tabletUp}>
        <NavigationDesktop
          backgroundColor={colors.primary} 
          height={layout.navigationHeightDesktop}
          links={links}/>
      </MediaQuery>
    </React.Fragment>
  )
}

export default Navigation