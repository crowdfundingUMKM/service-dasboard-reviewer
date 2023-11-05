import Image from "next/image";
import Link from "next/link";

export default function ProfileDropdown(){
    return(
        <li className="nav-item dropdown pe-3">
            <a  href="#" className="nav-link nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown" >
            <Image
                src="/assets/img/profile-img.jpg"
                alt="Profile"
                className="rounded-circle"
                width={40}
                height={40}
            />
            <span className="d-none d-md-block dropdown-toggle ps-2">
                K. Anderson
            </span>
            </a>
            {/* End Profile Iamge Icon */}
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li className="dropdown-header">
                <h6>Kevin Anderson</h6>
                <span>Konsultan CrowdFunding</span>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>
            <li>
                <a href="users-profile.html" className="dropdown-item d-flex align-items-center">
                <i className="bi bi-person" />
                <span>My Profile</span>
                </a>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>
            <li>
                <Link href="/notify/notify-report" className="dropdown-item d-flex align-items-center" >
                <i className="bi bi-question-circle" />
                <span>Need Help?</span>
                </Link>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>
            <li>
                <a className="dropdown-item d-flex align-items-center" href="#">
                <i className="bi bi-box-arrow-right" />
                <span>Sign Out</span>
                </a>
            </li>
            </ul>
            {/* End Profile Dropdown Items */}
        </li>

    );
}