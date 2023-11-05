import ListReviewLayout from '@/pages/review/list-review/layout';
import Link from 'next/link';
import Image from 'next/image';

export default function ListReview() {

    return (
        <ListReviewLayout>
            <main id="main" className="main">
                <div className="pagetitle">
                <h1>Daftar Review UMKM</h1>
                <nav>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/dashboard">Home</Link>
                    </li>
                    <li className="breadcrumb-item">Review UMKM</li>
                    <li className="breadcrumb-item active">Daftar Review UMKM</li>
                    </ol>
                </nav>
                </div>
                {/* End Page Title */}
                <section className="section">
                <div className="col-lg">
                    <div
                    className="alert alert-info alert-dismissible fade show"
                    role="alert"
                    >
                    <h5 className="alert-heading">Tentang Daftar Review UMKM</h5>
                    <p>
                        Anda akan menemukan daftar UMKM yang telah Anda review sebagai
                        konsultan. Anda memiliki kontrol penuh atas ulasan yang Anda
                        berikan, termasuk kemampuan untuk melakukan pembaruan jika
                        diperlukan. Halaman ini memberikan akses cepat ke semua UMKM yang
                        telah Anda tinjau, dan Anda juga dapat menghapus review yang tidak
                        lagi relevan atau perlu diperbarui. Ini adalah langkah penting dalam
                        membantu UMKM berkembang dan memastikan ulasan Anda selalu akurat
                        dan bermanfaat.
                    </p>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                    />
                    </div>
                </div>
                {/* content */}
                <div className="conrainer">
                    <div className="col">
                    {/* Card Campaign */}
                    <div className="row">
                        <div className="col-4">
                        {/* Default Card */}
                        <div className="card">
                            <Image
                            src="/assets/img/card.jpg"
                            className="card-img-top"
                            alt="..."
                            width={600}
                            height={400}
                            />
                            <div className="card-body">
                            <div className="pt-4">
                                <p className="mb-3">
                                14 Mar, 2020 -{" "}
                                <strong className="badge bg-primary">Active</strong>
                                </p>
                                {/*  bar loan*/}
                                <div className="progress mb-2">
                                <div
                                    className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                    role="progressbar"
                                    aria-valuenow={75}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ width: "75%" }}
                                >
                                    75%
                                </div>
                                </div>
                                <div className="row d-flex justify-content-between pb-2">
                                <div className="col">Rp.600000</div>
                                </div>
                                <h2 className="h4">
                                <a
                                    className="text-black shorten-text-card"
                                    href="blog-details.html"
                                >
                                    Cheerful Loving Couple Bakers Drinking Coffee
                                </a>
                                </h2>
                                <p className="shorten-text-card">
                                It’s no secret that the digital industry is booming. Lorem
                                ipsum dolor sit amet, consectetur adipisicing elit.
                                Architecto reprehenderit praesentium facere quo voluptatem
                                aliquam rerum quibusdam adipisci quis illum.
                                </p>
                                {/* Button for preview */}
                                <div className="col m-1">
                                <a href="list-campaign-umkm-preview.html">
                                    <button className="btn btn-primary w-100" type="button">
                                    <i className="bi-info-circle" />
                                    Preview
                                    </button>
                                </a>
                                </div>
                                {/* Button for delete review */}
                                <div className="col m-1">
                                <a href="#">
                                    <button className="btn btn-danger w-100" type="button">
                                    <i className="bi-x-circle" />
                                    Delete Review
                                    </button>
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* End Default Card */}
                        </div>
                        {/* Campaign Review */}
                        <div className="col-8">
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">Review Campaign</h5>
                            <h4>Nama Reviewer 1</h4>
                            <p>
                                Sunt est soluta temporibus accusantium neque nam maiores
                                cumque temporibus. Tempora libero non est unde veniam est
                                qui dolor. Ut sunt iure rerum quae quisquam autem eveniet
                                perspiciatis odit. Fuga sequi sed ea saepe at unde.
                            </p>
                            <div id="rating_review">
                                <p>Review UMKM: ⭐⭐⭐⭐4/5 </p>
                            </div>
                            <hr />
                            {/* General Form Elements */}
                            <h5 className="card-title">Update Review</h5>
                            <form className="needs-validation" noValidate="">
                                <div className="row mb-3">
                                <label
                                    htmlFor="inputText"
                                    className="col-sm-2 col-form-label"
                                >
                                    Nama
                                </label>
                                <div className="col-sm-10">
                                    <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="yourName"
                                    disabled=""
                                    />
                                </div>
                                </div>
                                <div className="row mb-3">
                                <label
                                    htmlFor="inputEmail"
                                    className="col-sm-2 col-form-label"
                                >
                                    Email
                                </label>
                                <div className="col-sm-10">
                                    <input
                                    type="email"
                                    className="form-control"
                                    defaultValue="youremail@userReviewer.com"
                                    disabled=""
                                    />
                                </div>
                                </div>
                                <div className="row mb-3">
                                <label
                                    htmlFor="inputDeskripsi"
                                    className="col-sm-2 col-form-label"
                                >
                                    Deskripsi Info
                                </label>
                                <div className="col-sm-10">
                                    <textarea
                                    className="form-control"
                                    style={{ height: 100 }}
                                    placeholder="ini harus diisi"
                                    required=""
                                    defaultValue={"Ini informasi tentang review campaign"}
                                    />
                                </div>
                                </div>
                                <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Skor</label>
                                <div className="col-sm-10">
                                    <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    >
                                    <option value={1}>⭐</option>
                                    <option value={2}>⭐⭐</option>
                                    <option value={3}>⭐⭐⭐</option>
                                    <option value={4}>⭐⭐⭐⭐</option>
                                    <option value={5}>⭐⭐⭐⭐⭐</option>
                                    </select>
                                </div>
                                </div>
                                <div className="col-12">
                                <div className="form-check">
                                    <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="gridCheck"
                                    required=""
                                    />
                                    <label className="form-check-label" htmlFor="gridCheck">
                                    Benar dan sesuai
                                    </label>
                                    <div className="invalid-feedback">
                                    Tolong, Checklist ini sebelum mengirimkan!
                                    </div>
                                </div>
                                </div>
                                <br />
                                <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Submit</label>
                                <div className="col-sm-10">
                                    <button type="submit" className="btn btn-primary">
                                    Simpan
                                    </button>
                                </div>
                                </div>
                            </form>
                            {/* End General Form Elements */}
                            </div>
                        </div>
                        </div>
                        {/* End Campaign Review */}
                    </div>
                    <div className="row">
                        <div className="col-4">
                        {/* Default Card */}
                        <div className="card">
                            <Image
                            src="/assets/img/card.jpg"
                            className="card-img-top"
                            alt="..."
                            width={600}
                            height={400}
                            />
                            <div className="card-body">
                            <div className="pt-4">
                                <p className="mb-3">
                                14 Mar, 2020 -{" "}
                                <strong className="badge bg-primary">Active</strong>
                                </p>
                                {/*  bar loan*/}
                                <div className="progress mb-2">
                                <div
                                    className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                    role="progressbar"
                                    aria-valuenow={75}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ width: "75%" }}
                                >
                                    75%
                                </div>
                                </div>
                                <div className="row d-flex justify-content-between pb-2">
                                <div className="col">Rp.600000</div>
                                </div>
                                <h2 className="h4">
                                <a
                                    className="text-black shorten-text-card"
                                    href="blog-details.html"
                                >
                                    Cheerful Loving Couple Bakers Drinking Coffee
                                </a>
                                </h2>
                                <p className="shorten-text-card">
                                It’s no secret that the digital industry is booming. Lorem
                                ipsum dolor sit amet, consectetur adipisicing elit.
                                Architecto reprehenderit praesentium facere quo voluptatem
                                aliquam rerum quibusdam adipisci quis illum.
                                </p>
                                {/* Button for preview */}
                                <div className="col m-1">
                                <a href="list-campaign-umkm-preview.html">
                                    <button className="btn btn-primary w-100" type="button">
                                    <i className="bi-info-circle" />
                                    Preview
                                    </button>
                                </a>
                                </div>
                                {/* Button for delete review */}
                                <div className="col m-1">
                                <a href="#">
                                    <button className="btn btn-danger w-100" type="button">
                                    <i className="bi-x-circle" />
                                    Delete Review
                                    </button>
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* End Default Card */}
                        </div>
                        {/* Campaign Review */}
                        <div className="col-8">
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">Review Campaign</h5>
                            <h4>Nama Reviewer 1</h4>
                            <p>
                                Sunt est soluta temporibus accusantium neque nam maiores
                                cumque temporibus. Tempora libero non est unde veniam est
                                qui dolor. Ut sunt iure rerum quae quisquam autem eveniet
                                perspiciatis odit. Fuga sequi sed ea saepe at unde.
                            </p>
                            <div id="rating_review">
                                <p>Review UMKM: ⭐⭐⭐⭐4/5 </p>
                            </div>
                            <hr />
                            {/* General Form Elements */}
                            <h5 className="card-title">Update Review</h5>
                            <form className="needs-validation" noValidate="">
                                <div className="row mb-3">
                                <label
                                    htmlFor="inputText"
                                    className="col-sm-2 col-form-label"
                                >
                                    Nama
                                </label>
                                <div className="col-sm-10">
                                    <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="yourName"
                                    disabled=""
                                    />
                                </div>
                                </div>
                                <div className="row mb-3">
                                <label
                                    htmlFor="inputEmail"
                                    className="col-sm-2 col-form-label"
                                >
                                    Email
                                </label>
                                <div className="col-sm-10">
                                    <input
                                    type="email"
                                    className="form-control"
                                    defaultValue="youremail@userReviewer.com"
                                    disabled=""
                                    />
                                </div>
                                </div>
                                <div className="row mb-3">
                                <label
                                    htmlFor="inputDeskripsi"
                                    className="col-sm-2 col-form-label"
                                >
                                    Deskripsi Info
                                </label>
                                <div className="col-sm-10">
                                    <textarea
                                    className="form-control"
                                    style={{ height: 100 }}
                                    placeholder="ini harus diisi"
                                    required=""
                                    defaultValue={"Ini informasi tentang review campaign"}
                                    />
                                </div>
                                </div>
                                <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Skor</label>
                                <div className="col-sm-10">
                                    <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    >
                                    <option value={1}>⭐</option>
                                    <option value={2}>⭐⭐</option>
                                    <option value={3}>⭐⭐⭐</option>
                                    <option value={4}>⭐⭐⭐⭐</option>
                                    <option value={5}>⭐⭐⭐⭐⭐</option>
                                    </select>
                                </div>
                                </div>
                                <div className="col-12">
                                <div className="form-check">
                                    <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="gridCheck"
                                    required=""
                                    />
                                    <label className="form-check-label" htmlFor="gridCheck">
                                    Benar dan sesuai
                                    </label>
                                    <div className="invalid-feedback">
                                    Tolong, Checklist ini sebelum mengirimkan!
                                    </div>
                                </div>
                                </div>
                                <br />
                                <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Submit</label>
                                <div className="col-sm-10">
                                    <button type="submit" className="btn btn-primary">
                                    Simpan
                                    </button>
                                </div>
                                </div>
                            </form>
                            {/* End General Form Elements */}
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* End Campaign Review */}
                    <div className="row">
                        <div className="col-4">
                        {/* Default Card */}
                        <div className="card">
                            <Image
                            src="/assets/img/card.jpg"
                            className="card-img-top"
                            alt="..."
                            width={600}
                            height={400}
                            />
                            <div className="card-body">
                            <div className="pt-4">
                                <p className="mb-3">
                                14 Mar, 2020 -{" "}
                                <strong className="badge bg-primary">Active</strong>
                                </p>
                                {/*  bar loan*/}
                                <div className="progress mb-2">
                                <div
                                    className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                    role="progressbar"
                                    aria-valuenow={75}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ width: "75%" }}
                                >
                                    75%
                                </div>
                                </div>
                                <div className="row d-flex justify-content-between pb-2">
                                <div className="col">Rp.600000</div>
                                </div>
                                <h2 className="h4">
                                <a
                                    className="text-black shorten-text-card"
                                    href="blog-details.html"
                                >
                                    Cheerful Loving Couple Bakers Drinking Coffee
                                </a>
                                </h2>
                                <p className="shorten-text-card">
                                It’s no secret that the digital industry is booming. Lorem
                                ipsum dolor sit amet, consectetur adipisicing elit.
                                Architecto reprehenderit praesentium facere quo voluptatem
                                aliquam rerum quibusdam adipisci quis illum.
                                </p>
                                {/* Button for preview */}
                                <div className="col m-1">
                                <a href="list-campaign-umkm-preview.html">
                                    <button className="btn btn-primary w-100" type="button">
                                    <i className="bi-info-circle" />
                                    Preview
                                    </button>
                                </a>
                                </div>
                                {/* Button for delete review */}
                                <div className="col m-1">
                                <a href="#">
                                    <button className="btn btn-danger w-100" type="button">
                                    <i className="bi-x-circle" />
                                    Delete Review
                                    </button>
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* End Default Card */}
                        </div>
                        {/* Campaign Review */}
                        <div className="col-8">
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">Review Campaign</h5>
                            <h4>Nama Reviewer 1</h4>
                            <p>
                                Sunt est soluta temporibus accusantium neque nam maiores
                                cumque temporibus. Tempora libero non est unde veniam est
                                qui dolor. Ut sunt iure rerum quae quisquam autem eveniet
                                perspiciatis odit. Fuga sequi sed ea saepe at unde.
                            </p>
                            <div id="rating_review">
                                <p>Review UMKM: ⭐⭐⭐⭐4/5 </p>
                            </div>
                            <hr />
                            {/* General Form Elements */}
                            <h5 className="card-title">Update Review</h5>
                            <form className="needs-validation" noValidate="">
                                <div className="row mb-3">
                                <label
                                    htmlFor="inputText"
                                    className="col-sm-2 col-form-label"
                                >
                                    Nama
                                </label>
                                <div className="col-sm-10">
                                    <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="yourName"
                                    disabled=""
                                    />
                                </div>
                                </div>
                                <div className="row mb-3">
                                <label
                                    htmlFor="inputEmail"
                                    className="col-sm-2 col-form-label"
                                >
                                    Email
                                </label>
                                <div className="col-sm-10">
                                    <input
                                    type="email"
                                    className="form-control"
                                    defaultValue="youremail@userReviewer.com"
                                    disabled=""
                                    />
                                </div>
                                </div>
                                <div className="row mb-3">
                                <label
                                    htmlFor="inputDeskripsi"
                                    className="col-sm-2 col-form-label"
                                >
                                    Deskripsi Info
                                </label>
                                <div className="col-sm-10">
                                    <textarea
                                    className="form-control"
                                    style={{ height: 100 }}
                                    placeholder="ini harus diisi"
                                    required=""
                                    defaultValue={"Ini informasi tentang review campaign"}
                                    />
                                </div>
                                </div>
                                <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Skor</label>
                                <div className="col-sm-10">
                                    <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    >
                                    <option value={1}>⭐</option>
                                    <option value={2}>⭐⭐</option>
                                    <option value={3}>⭐⭐⭐</option>
                                    <option value={4}>⭐⭐⭐⭐</option>
                                    <option value={5}>⭐⭐⭐⭐⭐</option>
                                    </select>
                                </div>
                                </div>
                                <div className="col-12">
                                <div className="form-check">
                                    <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="gridCheck"
                                    required=""
                                    />
                                    <label className="form-check-label" htmlFor="gridCheck">
                                    Benar dan sesuai
                                    </label>
                                    <div className="invalid-feedback">
                                    Tolong, Checklist ini sebelum mengirimkan!
                                    </div>
                                </div>
                                </div>
                                <br />
                                <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Submit</label>
                                <div className="col-sm-10">
                                    <button type="submit" className="btn btn-primary">
                                    Simpan
                                    </button>
                                </div>
                                </div>
                            </form>
                            {/* End General Form Elements */}
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* End Campaign Review */}
                    </div>
                </div>
                </section>
            </main>


        </ListReviewLayout>
    );
}