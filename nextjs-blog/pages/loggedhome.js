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
            <div className="holdsplit">
                <div className="flex-child tricks"> 
                    Posts and Tricks Blog
                </div>
                <div className="flex-child schedule">
                    Practice Schedule and Sign Up
                </div>
            </div>
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
                max-width: 80px;
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

            .holdsplit{
                display: flex;
                position: relative;
                top: 10%;
            }

            .flex-child{
                flex: 1;
                border: 2px solid blue;
                text-align: center;
            }

            .tricks{
                margin-left: 50px;
                margin-right: 20px;
            }

            .schedule{
                margin-right: 50px;
            }

        `}</style>
    </div>
  )
}


