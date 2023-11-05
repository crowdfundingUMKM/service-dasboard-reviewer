import ProfitLayout from '@/pages/profit/profit-reviewer/layout';
import Link from 'next/link';

import DataTable from '@/components/utils/DataTable';

export default function ProfitReviewer() {

    return (

        <ProfitLayout>
            <main id="main" className="main">
                <div className="pagetitle">
                <h1>Profit Konsultan</h1>
                <nav>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/dashboard">Home</Link>
                    </li>
                    <li className="breadcrumb-item">Profit Reviewer</li>
                    <li className="breadcrumb-item active">&gt;Profit Reviewer UMKM</li>
                    </ol>
                </nav>
                </div>
                {/* End Page Title */}
                <section className="section">
                <div className="row">
                    <div className="col">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Profit Konsultan UMKM</h5>
                        {/* Table with hoverable rows */}
                        <DataTable>
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nama</th>
                                <th scope="col">Campign Yang Di review</th>
                                <th scope="col">Total pendapatan</th>
                                <th scope="col">Status Request</th>
                                <th scope="col">Status Permintaan</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Rudi Salamender</td>
                                <td>
                                <a href="">Coffe Shop By Dynamic</a>
                                </td>
                                <td>Rp. 150.000</td>
                                <td>
                                <div className="badge bg-primary">
                                    <i className="bi bi-check-circle" />
                                    <span>Diterima</span>
                                </div>
                                </td>
                                <td>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-sm"
                                    disabled=""
                                >
                                    Request
                                </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Sofyan Alwan</td>
                                <td>
                                <a href="">Coffe Shop By Dynamic</a>
                                </td>
                                <td>Rp. 150.000</td>
                                <td>
                                <div className="badge bg-warning">
                                    <i className="bi bi-clock-history" />
                                    <span>Waiting</span>
                                </div>
                                </td>
                                <td>
                                <button type="button" className="btn btn-primary btn-sm">
                                    Request
                                </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Alex Ander</td>
                                <td>
                                <a href="">Coffe Shop By Dynamic</a>
                                </td>
                                <td>Rp. 150.000</td>
                                <td>
                                <div className="badge bg-danger">
                                    <i className="bi bi-x-circle" />
                                    <span>Ditolak</span>
                                </div>
                                </td>
                                <td>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-sm"
                                    disabled=""
                                >
                                    Request
                                </button>
                                </td>
                            </tr>
                            </tbody>
                        </DataTable>
                        {/* End Table with hoverable rows */}
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </main>

        </ProfitLayout>
    )
}