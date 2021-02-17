import GlobalStyles from '../styles/GlobalStyles'
import React from 'react'

function MyApp ({ Component, pageProps }): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
