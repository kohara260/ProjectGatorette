import Link from 'next/link'

export default function AboutUs() {
  return (
    <div className="container">
        <div className="main">
            <div className="left-logo">
                <Link href="/"><img className="logo" className="logo" src="/logo.jpg" alt=""></img></Link>
            </div>
            <h1 className="title">About Us</h1>
            <p className="body">The University of Florida Gatorettes are eight-time national champions and a division of the Pride of the Sunshine Marching Band! <br></br> They perform for the community at a variety of events like Gator football games, pep rallies, and competitions.</p>
        </div>
        <div className="bottomhalf">
        </div>

        <style jsx>{`

            .main{
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                height: 45vh;
                width: 100%;
                background-color: #E3E4FA;
            }

            .title{
                text-align: center;
                margin-left: auto;
                margin-right: auto;
                font-size: 35px;
                color: #f37021;
                margin: 0 auto;
                margin-top: 10px;
                -webkit-text-stroke-width: 0.5px;
                -webkit-text-stroke-color: black;
            }

            .body{
                text-align: center;
                font-size: 14.7px;
                font-family: "Verdana", sans-serif;
                margin-left: 100px;
                margin-right: 100px;
                margin-top: 26px;
            }

            .logo{
                max-width: 80px;
            }

            .logo:hover{
                cursor: pointer;
            }
            
            .left-logo{
                display:flex;
                width: auto;
            }

            .bottomhalf{
                background: url("/aboutus1.jpg") bottom left no-repeat, url("/aboutus2.jpg") bottom center no-repeat, url("/aboutus3.jpg") bottom right no-repeat;
                background-color: #E3E4FA;
                background-size: 33.3%, 33.5%, 33.3%;
                background-position-y: 90%, 50%, 55%;
                margin-top: 45vh;
                height: 55vh;                
              }
              
              @media screen and (max-width:1024px){
                .bottomhalf{
                  background-position-y: 40%;
                }
              }
              
              @media screen and (max-width:900px){
                .main{
                  height: 50vh;
                }

                .title{
                  margin-top: 22px;
                }

                .body{
                  margin-top: 14px;
                  font-size: 14px;
                  margin-left: 30px;
                  margin-right: 30px;
                }

                .bottomhalf{
                  background-image: url("/aboutus_pic.jpg");
                  height: 50vh;
                  background-size: cover;
                  background-repeat: no-repeat;
                  margin-top: 50vh;
                  background-position-y: 24%;
                }
              }

        `}</style>
    </div>
  )
}


