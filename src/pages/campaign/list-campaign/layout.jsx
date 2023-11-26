import Head from 'next/head'

export default function ListCampaignLayout({ children }) {
    return (
      <>
        <Head>
            <title>Daftar Campaign UMKM | Reviewer Mode</title>
            <meta name="description" content="Daftar UMKM yang ada saat ini."/>
        </Head>
        {children}
      </>
    );
  }
  