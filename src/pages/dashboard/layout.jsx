import Head from 'next/head'

export default function DashboardLayout({ children }) {
    return (
      <>
        <Head>
            <title>Dashboard | Reviewer Mode</title>
        </Head>
        {children}
      </>
    );
  }
  