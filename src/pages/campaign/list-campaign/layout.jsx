import Head from 'next/head'

export default function ListCampaignLayout({ children }) {
    return (
      <>
        <Head>
            <title>Daftar Campaign UMKM | Reviewer Mode</title>
        </Head>
        {children}
      </>
    );
  }
  