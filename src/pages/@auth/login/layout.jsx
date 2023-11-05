import Head from 'next/head'


export default function LoginLayout({ children }) {
    return (
      <>
        <Head>
            <title>Login Akun | Reviewer Mode</title>
        </Head>
        {children}
      </>
    );
  }
  
  