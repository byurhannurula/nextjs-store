import Head from 'next/head'
import { Container } from 'semantic-ui-react'
import Header from '../components/Header'

export default ({ children, title = '' }) => (
  <React.Fragment> 
    <Head>
      <title>{ title } &mdash; NextJS Store</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css' />
    </Head>
    <Header />
    <Container text style={{paddingTop: '7em'}}>
      { children }
    </Container>
  </React.Fragment>
)