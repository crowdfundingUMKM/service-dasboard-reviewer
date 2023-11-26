import Head from 'next/head'

export default function BlankLayout({ children }) {
    return (
      <>
        <Head>
            <title>Not Have Data | Reviewer Mode</title>
            <meta name="description" content="Data Not Found"/>
        </Head>
        {children}
      </>
    );
  }
  