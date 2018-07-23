//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { arrayOf, number, object, shape, string } from 'prop-types'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'

import NavigationMobile from './NavigationMobile'
import NavigationDesktop from './NavigationDesktop'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Navigation = ({ config, styles, nav }) => {
  return (
    <React.Fragment>
      <MediaQuery maxDeviceWidth={styles.layout.breakpoints.tabletUp - 1}>
        <NavigationMobile 
          config={config}
          styles={styles}
          logo={nav.logo}
          links={nav.links}/>
      </MediaQuery>
      <MediaQuery minDeviceWidth={styles.layout.breakpoints.tabletUp}>
        <NavigationDesktop
          config={config}
          styles={styles}
          logo={nav.logo}
          links={nav.links}/>
      </MediaQuery>
    </React.Fragment>
  )
}
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
Navigation.propTypes = {
  config: shape({
    urlPath: string
  }),
  styles: shape({
    colors: shape({
      primary: string
    }),
    layout: shape({
      navigationHeightDesktop: number,
      navigationHeightMobile: number
    })
  }),
  nav: shape({
    links: arrayOf(shape({
      text: string,
      slug: string
    }))
  })
}
export default Navigation