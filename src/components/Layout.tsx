import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Footer } from './Footer/Footer'
import Header from './Header'
import { Box } from '@chakra-ui/react'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <Header></Header>
    {/* <Box sx={{ position: 'sticky', top: '0', zIndex: 99999}} boxShadow="base">
    </Box> */}
    {/* <header>
      <nav>
        
      </nav>
    </header> */}
    {children}
    {/* <footer>
    </footer> */}
    <Footer></Footer>
  </div>
)

export default Layout
