import Link from 'next/link'

export default function LoggedHome() {
  return (
    <div className="container">
        <div className="main">
            <div className="left-logo">
                <img className="logo" className="logo" src="/logo.jpg" alt=""></img>
                <Link href="/"><a className="button">Sign Out</a></Link>
            </div>
            <h1 className="title">Welcome</h1>
        </div>

        <style jsx>{`

            .main{
                position: absolute;
                top: 0;
                bottom: 50%;
                left: 0;
                right: 0;
                height: 100vh;
                width: 100%;
                background-color: #FFF8DC;
            }

            .button{
                text-decoration: none;
                color: #fff;
                background-color: #4c87b5;
                margin-top: 2px;
                margin-right: 2px;
                padding: 10px;
                border-radius: 10px;
                float: right;
            }

            .button:hover{
                background-color: #00529b;
            }

            .logo{
                max-width: 75px;
            }
            
            .left-logo{
                position: relative;
                top: 0;
                left: 0;
            } 
                        
            .title{
                text-align: center;
                margin-left: auto;
                margin-right: auto;
                font-size: 45px;
                color: #f37021;
                margin: 10px auto;
                -webkit-text-stroke-width: 0.5px;
                -webkit-text-stroke-color: black;
            }

        `}</style>
    </div>
  )
}


