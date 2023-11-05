import Head from 'next/head'

export default function FaqLayout({ children }) {
    return (
      <>
        <Head>
            <title>F.A.Q | Reviewer Mode</title>
        </Head>
        {children}
      </>
    );
  }
  