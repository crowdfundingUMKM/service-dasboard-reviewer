import Head from 'next/head'


export default function RegisterLayout({ children }) {
    return (
      <>
        <Head>
            <title>Register Akun | Reviewer Mode</title>
            <meta name="description" content="Silahkan Register sebagai konsultan Crowdfunding UMKM"/>
        </Head>
        {children}
      </>
    );
  }


  
  