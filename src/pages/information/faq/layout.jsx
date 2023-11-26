import Head from 'next/head'

export default function FaqLayout({ children }) {
    return (
      <>
        <Head>
            <title>F.A.Q | Reviewer Mode</title>
            <meta name="description" content="F.A.Q Informasi Seputar Crowdfunding UMKM"/>
        </Head>
        {children}
      </>
    );
  }
  