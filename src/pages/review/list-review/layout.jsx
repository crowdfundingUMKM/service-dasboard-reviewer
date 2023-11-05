import Head from 'next/head'

export default function ListReviewLayout({ children }) {
    return (
      <>
        <Head>
            <title>Daftar Review Anda | Reviewer Mode</title>
        </Head>
        {children}
      </>
    );
  }
  