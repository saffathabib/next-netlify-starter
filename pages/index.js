import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>nexbing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2> nexbing </h2>
      </main>

      <Footer />
    </div>
  )
}
