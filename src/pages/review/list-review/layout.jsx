import Head from 'next/head'

export default function ListReviewLayout({ children }) {
    return (
      <>
        <Head>
            <title>Daftar Review Anda | Reviewer Mode</title>
            <meta name="description" content="Daftar review yang telah Anda buat."/>
        </Head>
        {children}
      </>
    );
  }
  