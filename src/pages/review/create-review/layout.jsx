import Head from 'next/head'

export default function CreateReviewLayout({ children }) {
    return (
      <>
        <Head>
            <title>Buat Review | Reviewer Mode</title>
            <meta name="description" content="Buat review untuk campaign UMKM"/>
        </Head>
        {children}
      </>
    );
  }
  