// Path: src/components/ContentSide.js 
import Image from 'next/image';
import Link from 'next/link';

export default function ContentSide() {

    return (
        <>
  {/* Right side columns */}
  <div className="col-lg-4">
    {/* Recent Activity */}
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          Aktifitas User <span>| Awal Mula</span>
        </h5>
        <div className="activity">
          <div className="activity-item d-flex">
            <div className="activite-label">Langkah 1</div>
            <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
            <div className="activity-content">
              Lakukan Update pada{" "}
              <a href="users-profile.html" className="fw-bold text-dark">
                profile anda
              </a>{" "}
              sehingga dapat user lain dapat mengenal anda.
            </div>
          </div>
          {/* End activity item*/}
          <div className="activity-item d-flex">
            <div className="activite-label">Langkah 2</div>
            <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
            <div className="activity-content">
              Anda dapat mengecek{" "}
              <a href="campaign-list-umkm.html" className="fw-bold text-dark">
                Daftar Campaign UMKM
              </a>{" "}
              untuk melihat campaign yang sedang berjalan.
            </div>
          </div>
          {/* End activity item*/}
          <div className="activity-item d-flex">
            <div className="activite-label">Langkah 3</div>
            <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
            <div className="activity-content">
              Anda dapat mengaktifkan campaign yang belum aktif dengan cara{" "}
              <a href="campaign-list-umkm.html" className="fw-bold text-dark">
                mengaktifkan campaign
              </a>{" "}
              yang anda inginkan.
            </div>
          </div>
          {/* End activity item*/}
          <div className="activity-item d-flex">
            <div className="activite-label">Langkah 4</div>
            <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
            <div className="activity-content">
              Anda dapat{" "}
              <a href="reviewer-make-review.html" className="fw-bold text-dark">
                membuat review
              </a>{" "}
              agar campaign dapat masukan dan feedback dari anda.
            </div>
          </div>
          {/* End activity item*/}
          <div className="activity-item d-flex">
            <div className="activite-label">Langkah 5</div>
            <i className="bi bi-circle-fill activity-badge text-warning align-self-start" />
            <div className="activity-content">
              Anda juga bisa melakukan update pada review yang telah di buat dan
              juga dapat menghapus review tersebut.
            </div>
          </div>
          {/* End activity item*/}
          <div className="activity-item d-flex">
            <div className="activite-label">Langkah 6</div>
            <i className="bi bi-circle-fill activity-badge text-danger align-self-start" />
            <div className="activity-content">
              Anda dapat juga melaporkan kepada admin jika ada hal yang
              berhubungan dengan pelanggaran pada{" "}
              <a href="pages-lapor-admin.html" className="fw-bold text-dark">
                Lapor admin.
              </a>
            </div>
          </div>
          {/* End activity item*/}
        </div>
      </div>
    </div>
    {/* End Recent Activity */}
    {/* News & Updates Traffic */}
    <div className="card">
        <div className="card-body pb-0">
            <h5 className="card-title">
            Campaign UMKM &amp; Update <span>| Campaign</span>
            </h5>
            <div className="news">
            <div className="post-item clearfix">
                <Image src="/assets/img/news-1.jpg" alt="" width={80} height={60} />
                <h4>
                <Link href="#">Nihil blanditiis at in nihil autem</Link>
                </h4>
                <p>
                Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed
                ut harum...
                </p>
            </div>
            <div className="post-item clearfix">
                <Image src="/assets/img/news-2.jpg" alt="" width={80} height={60} />
                <h4>
                <Link href="#">Quidem autem et impedit</Link>
                </h4>
                <p>
                Illo nemo neque maiores vitae officiis cum eum turos elan dries
                werona nande...
                </p>
            </div>
            <div className="post-item clearfix">
                <Image src="/assets/img/news-3.jpg" alt="" width={80} height={60}/>
                <h4>
                <Link href="#">Id quia et et ut maxime similique occaecati ut</Link>
                </h4>
                <p>
                Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam
                et totam...
                </p>
            </div>
            <div className="post-item clearfix">
                <Image src="/assets/img/news-4.jpg" alt="" width={80} height={60}/>
                <h4>
                <Link href="#">Laborum corporis quo dara net para</Link>
                </h4>
                <p>
                Qui enim quia optio. Eligendi aut asperiores enim repellendusvel
                rerum cuder...
                </p>
            </div>
            <div className="post-item clearfix">
                <Image src="/assets/img/news-5.jpg" alt="" width={80} height={60}/>
                <h4>
                <Link href="#">Et dolores corrupti quae illo quod dolor</Link>
                </h4>
                <p>
                Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae
                dignissimos eius...
                </p>
            </div>
            </div>
            {/* End sidebar recent posts*/}
        </div>
      </div>
    {/* End News & Updates */}
  </div>
  {/* End Right side columns */}

        </>
    );
}