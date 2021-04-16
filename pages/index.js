import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Project Gatorette</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="main">
          <div className="header">
            <div className="left-logo">
              <img className="logo" className="logo" src="/logo.jpg" alt=""></img>
            </div>
            <div className="right-menu">
              <Link href="/about-us"><a className="button">About Us</a></Link>
              <Link href="/our-team"><a className="button">Our Team</a></Link>
              <Link href="/login"><a className="button">Login/Signup</a></Link>
            </div>
          </div>
        </div>
        <div className="bottomhalf">
          <h1 className="title">University of Florida <br></br> Gatorettes</h1>
        </div>
      </main>

      <style jsx>{`

        .button{
          text-decoration: none;
          color: #fff;
          background-color: #4c87b5;
          margin-top: 5px;
          margin-bottom: 5px;
          padding: 10px;
          border-radius: 10px;
        }

        .button:hover{
          background-color: #00529b;
        }

        .header{
          background-color: #f37021;
          position: fixed;
          top: 0;
          width: 100%;
        }

        .logo{
          max-width: 80px;
        }
        
        .left-logo{
          width: auto;
        }
        
        .right-menu{
          width: 80%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          margin: 0 auto;
        }
        
        .header, .left-logo{
          display: flex;
        }
        
        .main{
          background-image: url("/homepage_pic.jpg");
          background-position-y: 58%;
          height: 50vh;
          background-size: cover;
          background-repeat: no-repeat;
          margin-top: 75px
        }
             
        .bottomhalf{
          height: 50vh;
          display: flex;
          align-items: center;
          background-color: #C0C0C0; 
        }
        
        .bottomhalf .title{
          text-align: center;
          margin-left: auto;
          margin-right: auto;
          font-size: 60px;
          color: #f37021;
          font-style: bold;
          -webkit-text-stroke-width: 0.5px;
          -webkit-text-stroke-color: black;
        }

         @media screen and (max-width:1024px){
          .main{
            background-position-y: 58%;
          }
        }

        @media screen and (max-width:900px){
          .main{
            background-position-y: 58%;
          }

          .bottomhalf, .title{
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            font-size: 30px;
            color: #f37021;
            font-style: bold;
            -webkit-text-stroke-width: 0.5px;
            -webkit-text-stroke-color: black;
          }
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
