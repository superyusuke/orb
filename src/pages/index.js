import React from "react"

import Layout from "../components/layout"
import imagePath from "../images/lesson-samne.png"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>バンドごっこの店</h1>
    <p>
      『ORB』は楽器のある『ダイニングバー』。
      <br />
      ふらっと集まったお客さん同士で語ったり、JPOP
      を演奏したり、もちろんお酒を飲んだり！
      <br />
      楽器ができなくても、歌が好きな方であれば絶対楽しめます。
    </p>
    <p>まずは気軽にのみにいらっしゃってください！</p>
    <p></p>
    <h2>お店のシステム</h2>
    <p>
      <li>チャージ 500円</li>
      <li>ソフトドリンク 500円〜</li>
      <li>アルコール 600円〜</li>
      <li>フード 250円〜</li>
      <li>各自 Uber 等の出前注文は自由！</li>
      <li>Tax 10%</li>
      <li>一曲歌うといくら、的な料金はありません。</li>
    </p>
    <h2>楽器、はじめませんか？</h2>
    <a href="https://www.youtube.com/channel/UC2tJTRynLlP5ke7GwWsUzYw">
      <h3>ついに Orb 発信の初心者講座を Youtube で開講！今すぐチェック！</h3>
      <img
        src={imagePath}
        alt=""
        style={{
          display: "block",
          width: "100%",
          maxWidth: "400px",
          margin: "0 auto",
          paddingBottom: "20px",
        }}
      />
    </a>
    <p>
      ORB では皆様にバンドごっこにご参加いただけますよう、毎日 18:00〜21:00
      まで（月曜定休日除く）初心者のための音楽教室を始めました。
    </p>
    <p>ギター・ベース・ピアノ・ドラム、教えます。</p>
    <p>
      レッスン料はいただきません。
      <br />
      飲食料金のみでレッスンいたします。
    </p>
    <p>
      何か楽器を始めたいと考えていた方、楽譜が苦手な方、大歓迎です！
      <br />
      昔ピアノを習っていたけどコードってよくわからないあという方、昔バンドをやっていたけどずっとご無沙汰だなあという方などなど、ぜひ！
      <br />
      もちろん習ったことのないって方…！
    </p>
    <p>詳しくは、ORB忍者まで！</p>
  </Layout>
)

export default IndexPage
