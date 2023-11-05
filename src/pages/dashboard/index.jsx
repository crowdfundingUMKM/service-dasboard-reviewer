import Image from 'next/image'
import Link from 'next/link'


import ContentSide from '@/components/ContentSide'
// import layotu from this folder
import DashboardLayout from '@/pages/dashboard/layout'


import DataTable from '@/components/utils/DataTable';

export default function Home() {
  return (

    <DashboardLayout>
        <main id="main" className="main">
            <div className="pagetitle">
            <h1>Dashboard</h1>
            <nav>
                <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
                </ol>
            </nav>
            </div>
            {/* End Page Title */}
            <section className="section dashboard">
            <div className="row">
                {/* Left side columns */}
                <div className="col-lg-8">
                <div className="row">
                    {/* Sales Card */}
                    <div className="col-xxl-6 col-md-6">
                    <div className="card info-card sales-card">
                        <div className="card-body">
                        <h5 className="card-title">
                            Review Anda<span>| Total</span>
                        </h5>
                        <div className="d-flex align-items-center">
                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-cart" />
                            </div>
                            <div className="ps-3">
                            <h6>145</h6>
                            <span className="text-success small pt-1 fw-bold">
                                12%
                            </span>{" "}
                            <span className="text-muted small pt-2 ps-1">
                                increase
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* End Sales Card */}
                    {/* Revenue Card */}
                    <div className="col-xxl-6 col-md-6">
                    <div className="card info-card revenue-card">
                        <div className="card-body">
                        <h5 className="card-title">
                            Campaign UMKM<span>| Total</span>
                        </h5>
                        <div className="d-flex align-items-center">
                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-currency-dollar" />
                            </div>
                            <div className="ps-3">
                            <h6>13</h6>
                            <span className="text-success small pt-1 fw-bold">
                                8%
                            </span>{" "}
                            <span className="text-muted small pt-2 ps-1">
                                increase
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* End Revenue Card */}
                    {/* Top Campign */}
                    <div className="col-12">
                    <div className="card top-selling overflow-auto">
                        <div className="card-body pb-0">
                        <h5 className="card-title">
                            Top Campaign UMKM <span>| Tahun ini</span>
                        </h5>
                        <table className="table table-borderless">
                            <thead>
                            <tr>
                                <th scope="col">Preview Campaign</th>
                                <th scope="col">Campaign UMKM</th>
                                <th scope="col">Harga</th>
                                <th scope="col">Banyak Kontributor</th>
                                <th scope="col">Suku Bunga</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">
                                <a href="#">
                                    <img src="assets/img/product-1.jpg" alt="" />
                                </a>
                                </th>
                                <td>
                                <a href="#" className="text-primary fw-bold">
                                    Ut inventore ipsa voluptas nulla
                                </a>
                                </td>
                                <td>Rp. 31.000.000</td>
                                <td className="fw-bold">124</td>
                                <td>%2</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                <a href="#">
                                    <img src="assets/img/product-2.jpg" alt="" />
                                </a>
                                </th>
                                <td>
                                <a href="#" className="text-primary fw-bold">
                                    Exercitationem similique doloremque
                                </a>
                                </td>
                                <td>$46</td>
                                <td className="fw-bold">98</td>
                                <td>$4,508</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                <a href="#">
                                    <img src="assets/img/product-3.jpg" alt="" />
                                </a>
                                </th>
                                <td>
                                <a href="#" className="text-primary fw-bold">
                                    Doloribus nisi exercitationem
                                </a>
                                </td>
                                <td>$59</td>
                                <td className="fw-bold">74</td>
                                <td>$4,366</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                <a href="#">
                                    <img src="assets/img/product-4.jpg" alt="" />
                                </a>
                                </th>
                                <td>
                                <a href="#" className="text-primary fw-bold">
                                    Officiis quaerat sint rerum error
                                </a>
                                </td>
                                <td>$32</td>
                                <td className="fw-bold">63</td>
                                <td>$2,016</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                <a href="#">
                                    <img src="assets/img/product-5.jpg" alt="" />
                                </a>
                                </th>
                                <td>
                                <a href="#" className="text-primary fw-bold">
                                    Sit unde debitis delectus repellendus
                                </a>
                                </td>
                                <td>$79</td>
                                <td className="fw-bold">41</td>
                                <td>$3,239</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                    {/* End Top Campaign */}
                </div>
                </div>
                {/* End Left side columns */}
                <ContentSide />
                {/* End Right side columns */}
            </div>
            </section>
        </main>

    </DashboardLayout>
    );
}