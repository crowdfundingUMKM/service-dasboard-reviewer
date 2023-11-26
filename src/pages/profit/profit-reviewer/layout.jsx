import Head from 'next/head'

export default function ProfitLayout({ children }) {
    return (
      <>
        <Head>
            <title>Profit Konsultan | Reviewer Mode</title>
            <meta name="description" content="Profit yang diterima konsultan UMKM"/>
        </Head>
        {children}
      </>
    );
  }
  