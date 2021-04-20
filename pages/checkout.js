// Referenced https://dev.to/clairecodes/how-to-create-a-polka-dot-background-with-css-23m0
// for implementing polka dot background

import Link from 'next/link'

export default function CheckOut() {
  return (
    <div className="container">
        
        <div className="main">
            <div className="left-logo">
                <Link href="/"><img className="logo" className="logo" src="/logo.jpg" alt=""></img></Link>
            </div>
            <div className="titleholder">
                <h1 className="title">Stay Updated</h1>
            </div>
            <p>Follow us on social media to stay up-to-date with all things Gatorettes!</p>
            <div className="fb">
                <a href="https://www.facebook.com/uf.gatorettes.7" target="_blank"><img className="fblogo" src="/facebook-logo.png"></img></a> 
                <p>Follow us on Facebook</p>
            </div>
            <br></br>
            <div className="ig">
                <a href="https://www.instagram.com/uf_gatorettes/" target="_blank"><img className="iglogo" src="/instagram-logo.png"></img></a>
                <p>Follow us on Instagram</p>
            </div>
        </div>

        <style jsx>{`

            .main{
                position: absolute;
                top: 0;
                bottom: 60%;
                left: 0;
                right: 0;
                height: 100vh;
                width: 100%;
                background-image: radial-gradient(#FFFAF0 15%, transparent 15%), radial-gradient(#DCDCDC 15%, transparent 5%);
                background-color: #FFF0F5;
                background-position: 0 0, 50px 50px;
                background-size: 100px 100px;
                height: 100vh;
                width: 100%;
            }

            .logo{
                max-width: 80px;
            }

            .fblogo{
                max-width: 150px;
            }

            .iglogo{
                max-width: 90px;
            }

            .logo:hover{
                cursor: pointer;
            }   

            .left-logo{
                position: relative;
                top: 0;
                left: 0;
            } 
                     
            .titleholder{
                border-bottom: solid;
                border-color: #00529b; 
                max-width: 20%;
                margin: auto;
                margin-top: -20px;
            }

            .title{
                text-align: center;
                margin-left: auto;
                margin-right: auto;
                font-size: 35px;
                color: #f37021;
                margin: 10px auto;
                margin-bottom: 2px;
                -webkit-text-stroke-width: 0.5px;
                -webkit-text-stroke-color: black;
            }

            p{
                text-align: center;
                font-size: 20px;
                margin-top: 20px;
            }

            .fb, .ig{
                width: 300px;
                margin: auto; 
            }

            .fblogo, .iglogo{
                display: block;
                margin: 0 auto;
            }

        `}</style>
    </div>
  )
}
