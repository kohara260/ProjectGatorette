import Link from 'next/link'

export default function AboutUs() {
  return (
    <div className="container">
        <div className="main">
            <div className="left-logo">
                <Link href="/"><img className="logo" className="logo" src="/logo.jpg" alt=""></img></Link>
            </div>
            <h1 className="title">About Us</h1>
            <p className="body">The UF Gatorettes are eight-time national champions and a division of the Pride of the Sunshine Marching Band! . . .</p>
        </div>
        <div className="bottomhalf">
        </div>

        <style jsx>{`

            .main{
                position: absolute;
                top: 0;
                bottom: 50%;
                left: 0;
                right: 0;
                height: 60vh;
                width: 100%;
                background-color: #E3E4FA;
            }

            .title{
                text-align: center;
                margin-left: auto;
                margin-right: auto;
                font-size: 30px;
                color: #f37021;
                margin: 0 auto;
                -webkit-text-stroke-width: 0.5px;
                -webkit-text-stroke-color: black;
            }

            .body{
                text-align: center;
                font-size: 15px;
                margin-left: 20px;
                margin-right: 20px;
            }

            .logo{
                max-width: 75px;
            }
            
            .left-logo{
                display:flex;
                width: auto;
            }

            .bottomhalf{
                background-image: url("/aboutus_pic.jpg");
                height: 50vh;
                background-size: cover;
                background-position-y: 40%;
                background-repeat: no-repeat;
                margin-top: 60vh;
              }
              
              @media screen and (max-width:1024px){
                .bottomhalf{
                  background-position-y: 40%;
                }
              }
              
              @media screen and (max-width:900px){
                .bottomhalf{
                  background-position-y: 40%;
                }
              }

        `}</style>
    </div>
  )
}


