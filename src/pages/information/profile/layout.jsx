import Head from 'next/head'

export default function ProfileLayout({ children }) {
    return (
      <>
        <Head>
            <title>Profile User | Reviewer Mode</title>
        </Head>
        {children}
      </>
    );
  }
  