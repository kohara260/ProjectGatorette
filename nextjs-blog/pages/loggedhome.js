import Link from 'next/link'

export default function LoggedHome() {
  return (
    <div className="container">
        <div className="left-logo">
            <img className="logo" className="logo" src="/logo.jpg" alt=""></img>
            <Link href="/"><a className="button">Sign Out</a></Link>
        </div>
        <h1 className="title">Welcome</h1>

        <style jsx>{`
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
            }

        `}</style>
    </div>
  )
}


