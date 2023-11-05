import Link from "next/link";

import {usePathname } from 'next/navigation';

export default function Sidebar(){
    const pathname  = usePathname()

    return (

    <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
            <Link href="/dashboard">
            <div className={`nav-link  ${pathname === '/dashboard' ? '' : 'collapsed'}`}>
                <i className="bi bi-grid" />
                <span>Dashboard</span>
            </div>
            </Link>
        </li>
        {/* End Dashboard Nav */}
        <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-shop" />
            <span>Campaign UMKM</span>
            <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
                <Link href="/campaign/list-campaign" className={`${pathname === '/campaign/list-campaign' ? 'active' : ''}`}>
                <i className="bi bi-circle" />
                <span>Daftar Campaign UMKM</span>
                </Link>
            </li>
            <li>
                <Link href="/campaign/preview" className={`${pathname === '/campaign/preview' ? 'active' : ''}`}>
                <i className="bi bi-circle" />
                <span>Preview Campaign</span>
                </Link>
            </li>
            </ul>
        </li>
        {/* End Daftar Campaign UMKM Nav */}
        <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#reviewer-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-pen" />
                    <span>Review UMKM</span>
                <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul id="reviewer-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
                <Link href="/review/create-review" className={`${pathname === '/review/create-review' ? 'active' : ''}`}>
                <i className="bi bi-circle" />
                <span>Buat Review Anda</span>
                </Link>
            </li>
            <li>
                <Link href="/review/list-review" className={`${pathname === '/review/list-review' ? 'active' : ''}`}>
                <i className="bi bi-circle" />
                <span>Daftar Review Anda</span>
                </Link>
            </li>
            </ul>
        </li>
        {/* End Tables Nav */}
        <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-graph-up-arrow" />
                    <span>Profit Reviewer</span>
                <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
                <Link href="/profit/profit-reviewer" className={`${pathname === '/profit/profit-reviewer' ? 'active' : ''}`}>
                <i className="bi bi-circle" />
                <span>Profit Review UMKM</span>
                </Link>
            </li>
            </ul>
        </li>
        {/* End Tables Nav */}
        <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#admin-nav" data-bs-toggle="collapse" href="#" >
                <i className="bi bi-app-indicator" />
                    <span>Notifikasi Admin</span>
                <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul id="admin-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
                <Link href="/notify/notify-admin" className={`${pathname === '/notify/notify-admin' ? 'active' : ''}`}>
                <i className="bi bi-circle" />
                <span>Notif Admin</span>
                </Link>
            </li>
            <li>
                <Link href="/notify/notify-report" className={`${pathname === '/notify/notify-report' ? 'active' : ''}`}>
                <i className="bi bi-circle" />
                <span>Lapor Admin</span>
                </Link>
            </li>
            </ul>
        </li>
        {/* End Tables Nav */}
        <li className="nav-heading">Pages</li>
        <li className="nav-item">
            <Link href="/information/profile">
            <div className={`nav-link  ${pathname === '/information/profile' ? '' : 'collapsed'}`}>
                <i className="bi bi-person" />
                <span>Profile</span>
            </div>
            </Link>
        </li>
        {/* End Profile Page Nav */}
        <li className="nav-item">
              <Link  href="/information/faq">
                <div className={`nav-link  ${pathname === '/information/faq' ? '' : 'collapsed'}`}>
                <i className="bi bi-question-circle" />
                <span>F.A.Q</span>
                </div>
              </Link>
            </li>
        {/* End F.A.Q Page Nav */}
        </ul>
    </aside>


    )
}