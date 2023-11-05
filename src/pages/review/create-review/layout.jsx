import Head from 'next/head'

export default function CreateReviewLayout({ children }) {
    return (
      <>
        <Head>
            <title>Buat Review | Reviewer Mode</title>
        </Head>
        {children}
      </>
    );
  }
  