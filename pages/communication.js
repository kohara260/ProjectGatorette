import Link from 'next/link'

export default function Communication() {
  return (
    <div className="container">
        <div className="main">
            <div className="left-logo">
                <Link href="/loggedhome"><img className="logo" className="logo" src="/logo.jpg" alt=""></img></Link>
            </div>
            <div className="titleholder">
                <h1 className="title">Share Your Tricks Here</h1>
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
                background-color: #87CEFA;
            }

            .logo{
                max-width: 80px;
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
                max-width: 30%;
                margin: auto;
                margin-top: -60.5px;
            }

            .title{
                text-align: center;
                margin-left: auto;
                margin-right: auto;
                font-size: 30px;
                color: #f37021;
                margin: 10px auto;
                margin-bottom: 2px;
                -webkit-text-stroke-width: 0.5px;
                -webkit-text-stroke-color: black;
            }

        `}</style>
    </div>
  )
}
