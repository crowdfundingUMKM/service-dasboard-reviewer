import NotificationDropdown from '@/components/NotificationDropdown';
import ProfileDropdown from '@/components/ProfileDropdown';
import ReloadButton from '@/components/button/ReloadButton';

import Link from 'next/link'
import Image from 'next/image'
// import Image from 'next/image'
// import dynamic from 'next/dynamic';



// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function HeaderComponent() {
    return (
        <>
  {/* ======= Header ======= */}
  <header id="header" className="header fixed-top d-flex align-items-center">
    <div className="d-flex align-items-center justify-content-between">
      <Link href="/dashboard" className="logo d-flex align-items-center">
        <Image src="/assets/img/logo.png" alt="Logo" height={100} width={100} priority={false}/>
        <span className="d-none d-lg-block">Reviewer</span>
      </Link>
      <i className="bi bi-list toggle-sidebar-btn" />
    </div>
    {/* End Logo */}
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
      <ReloadButton />
      <NotificationDropdown />

      {/* End Notify Dropdown */}

      {/* Profile Dropdown */}
      <ProfileDropdown  />  

      </ul>
    </nav>
    {/* End Icons Navigation */}
  </header>
</>

    );
}