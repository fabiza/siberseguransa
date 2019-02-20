import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Seguransa Cyber no privasidade dadus sempre tópiku ida nebe manas bainhira ita koalia kona-ba. Sira iha fatin barak iha fatin neʼebé ema bele hetan liafuan interesante, análize, komentáriu no hetan informasaun kona-ba ameasa ikus no oinsá atu lida ho sira ho efisiénsia. Husi developers ba seguransa peskizador, empreza software website seguransa no magazines ema hotu-hotu iha opiniaun ida kona-ba. Ida nee la fasil atu halo diferensa entre sira no kuandu imi buka seguransa online blog/liafuan imi sei sai ema rihun ba rihun.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
