import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Eco briket</title>
        <meta property="og:title" content="Bossy Minor Hedgehog" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text thq-link thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text001 thq-link thq-body-small">Media</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text002 thq-link thq-body-small">About</span>
          </Fragment>
        }
        
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text014 thq-body-small">Beli Sekarang</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text015 thq-body-small">
              Pelajari Lebih Lanjut
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="home-text016 thq-body-large">
            Eco briket merupakan inovasi pembuatan briket dengan bahan bakar 
            padat ramah lingkungan yang terbuat dari kotoran sapi yang dipadatkan yang
            menjadikannya alternatif yang menarik dibandingkan bahan bakar fosil konvensional.
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h1 className="home-text017 thq-heading-1">
              Eco Briket
            </h1>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <h2 className="home-text018 thq-heading-2">
              Bahan baku yang melimpah
            </h2>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <h2 className="home-text019 thq-heading-2">Efisien dan Praktis</h2>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <h2 className="home-text020 thq-heading-2">
              Mudah dan Murah
            </h2>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text021 thq-body-small">
              Ketersediaan bahan baku yang melimpah dan mudah didapatkan serta tidak berasap
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text022 thq-body-small">Praktis dan mudah digunakan
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text023 thq-body-small">
              Proses pembuatan yang mudah dan tidak memakan
              biaya produksi yang besar
            </span>
          </Fragment>
        }
      ></Features24>
      <Features25
        feature1Title={
          <Fragment>
            <h2 className="home-text027 thq-heading-2">Ramah Lingkungan</h2>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <h2 className="home-text028 thq-heading-2">Panas yang Efisien</h2>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <h2 className="home-text029 thq-heading-2">Minim Resiko</h2>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text030 thq-body-small">
              Eco briket terbuat dari kotoran sapi yang merupakan bahan bakar
              ramah lingkungan.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text031 thq-body-small">
            Panas yang dihasilkan tinggi dan kontinu yang berarti sangat baik jika digunakan untuk proses pembakaran dengan waktu yang relatif lama
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text032 thq-body-small">
            Tidak memiliki risiko meledak atau terbakar seperti
            kompor gas konvensional.
            </span>
          </Fragment>
        }
      ></Features25>
      <Steps2/>

      <Footer4
        link1={
          <Fragment>
            <span className="home-text114 thq-body-small">Tentang Kami</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text115 thq-body-small">Produk</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text116 thq-body-small">Media</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text117 thq-body-small">Kontak</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text118 thq-body-small">FAQ</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text119 thq-body-small">
              Ketentuan Penggunaan
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text120 thq-body-small">
              Kebijakan Cookie
            </span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text121 thq-body-small">
              Kebijakan Privasi
            </span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
