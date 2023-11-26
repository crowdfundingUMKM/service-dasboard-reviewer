import Head from 'next/head'

export default function ProfileLayout({ children }) {
    return (
      <>
        <Head>
            <title>Profile User | Reviewer Mode</title>
            <meta name="description" content="Profile anda pada Crowdfunding."/>
        </Head>
        {children}
      </>
    );
  }
  