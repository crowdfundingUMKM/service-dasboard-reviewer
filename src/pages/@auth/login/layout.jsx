import Head from 'next/head'


export default function LoginLayout({ children }) {
    return (
      <>
        <Head>
            <title>Login Akun | Reviewer Mode</title>
            <meta name="description" content="Silahkan login sebagai konsultan Crowdfunding UMKM"/>
        </Head>
        {children}
      </>
    );
  }
  
  