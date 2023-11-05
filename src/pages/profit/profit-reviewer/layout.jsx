import Head from 'next/head'

export default function ProfitLayout({ children }) {
    return (
      <>
        <Head>
            <title>Profit Konsultan | Reviewer Mode</title>
        </Head>
        {children}
      </>
    );
  }
  