import Head from 'next/head'

export default function PreviewCampaignLayout({ children }) {
    return (
      <>
        <Head>
            <title>Preview Campaign UMKM | Reviewer Mode</title>
        </Head>
        {children}
      </>
    );
  }
  