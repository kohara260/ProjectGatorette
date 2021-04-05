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
            <div className="mems"> 
                <div className="member">
                    <img src="/jl.jpg"></img>
                    <p className="name">Julia-Love</p>
                    <p>Captain</p>
                </div>
                <div className="member">
                    <img src="/tara.jpg"></img>
                    <p className="name">Tara</p>
                    <p>Captain</p>
                </div>
                <div className="member">
                    <img src="/pay.jpg"></img>
                    <p className="name">Payton</p>
                    <p>Captain</p>
                </div>
                <div className="member">
                    <img src="/care.jpg"></img>
                    <p className="name">Caroline</p>
                    <p>Captain</p>
                </div>
                <div className="member">
                    <img src="/hann.jpg"></img>
                    <p className="name">Hannah</p>
                </div>
                <div className="member">
                    <img src="/bethany.jpg"></img>
                    <p className="name">Bethany</p>
                </div>
                <div className="member">
                    <img src="/morgan.jpg"></img>
                    <p className="name">Morgan</p>
                </div>
                <div className="member">
                    <img src="/tay.jpg"></img>
                    <p className="name">Taylor</p>
                </div>
                <div className="member">
                    <img src="/mack.jpg"></img>
                    <p className="name">Mackenzie</p>
                </div>
                <div className="member">
                    <img src="/lynds.jpg"></img>
                    <p className="name">Lyndsey</p>
                </div>
                <div className="member">
                    <img src="/kirsten.jpg"></img>
                    <p className="name">Kirsten</p>
                </div>
                <div className="member">
                    <img src="/mo.jpg"></img>
                    <p className="name">Morgan</p>
                </div>
                <div className="member">
                    <img src="/kat.jpg"></img>
                    <p className="name">Katriana</p>
                </div>
                <div className="member">
                    <img src="/zoe.jpg"></img>
                    <p className="name">Zoe</p>
                </div>
                <div className="member">
                    <img src="/liz.jpg"></img>
                    <p className="name">Elizabeth</p>
                </div>
                <div className="member">
                    <img src="/haylee.jpg"></img>
                    <p className="name">Haylee</p>
                </div>
                <div className="member">
                </div>
                <div className="member">
                    <img src="/julia.jpg"></img>
                    <p className="name">Julia</p>
                </div>
                <div className="member">
                    <img src="/mika.jpg"></img>
                    <p className="name">Mika</p>
                </div>
                <div className="member">
                </div>
            </div>
        </div>

        <style jsx>{`

            .main{
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
            
            .mems{
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                justify-content: space-evenly;
                justify-items: center;
                align-content: space-evenly;
                align-items: center;
            }

            .member p{
                text-align: center;
                font-family: "Lucida Handwriting", cursive;
                margin-top: 0px;
            }

            .name{
                font-size: 20px;
                margin-bottom: 0px;
            }

            .member img{
                max-width: 150px;
                margin-top: 25px;
            }

        `}</style>
    </div>
  )
}


