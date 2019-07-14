import React from 'react'
import Header from './header.js'
import './layoutCss.sass'

const Layout = props => (
  <React.Fragment>
    <Header />
    {props.children}
  </React.Fragment>
)

export default Layout