import * as React from "react"
import Seo from "../components/seo"
import "../holding.css"

const IndexPage = () => (
  <main className="holding">
    <Seo
      title="Entrepreneur, engineer"
      description="Daniel Volynkin — entrepreneur, engineer."
      meta={[{ name: "theme-color", content: "#faf9f6" }]}
    />
    <div className="holding-copy">
      <h1>Daniel Volynkin</h1>
      <p>Entrepreneur, engineer.</p>
      <nav>
        <a href="https://github.com/dvvolynkin">GitHub</a>
        <a href="https://x.com/dvvolynkin">Twitter</a>
        <a href="https://t.me/dvvolynkin">Telegram</a>
        <a href="https://www.instagram.com/dvvolynkin">Instagram</a>
      </nav>
    </div>
  </main>
)

export default IndexPage
