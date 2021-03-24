import Link from 'next/link'

export default function OurTeam() {
  return (
    <div className="container">
        <div className="main">
            <div className="left-logo">
                <Link href="/"><img className="logo" className="logo" src="/logo.jpg" alt=""></img></Link>
            </div>
            <h1 className="title">Gatorettes</h1>
            <h2 className="year">- 2020-2021 -</h2>
            <p className="body">Need to include images and the members' name and year from client</p>
        </div>

        <style jsx>{`

            .main{
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                height: 100%;
                width: 100%;
                background-color: #FDD7E4;
            }

            .title{
                text-align: center;
                margin-left: auto;
                margin-right: auto;
                font-size: 50px;
                color: #f37021;
                margin: 0 auto;
                -webkit-text-stroke-width: 0.5px;
                -webkit-text-stroke-color: black;
            }

            .year{
                text-align: center;
                margin-left: auto;
                margin-right: auto;
                font-size: 22px;
                color: #f37021;
                margin: 0 auto;
                -webkit-text-stroke-width: 0.5px;
                -webkit-text-stroke-color: black;
            }

            .logo{
                max-width: 75px;
            }
            
            .left-logo{
                display:flex;
                width: auto;
            }
            
            .body{
                text-align: center;
            }

        `}</style>
    </div>
  )
}


