import Link from 'next/link'

export default function LoggedHome() {
  return (
    <div className="container">
        <div className="main">
            <div className="left-logo">
                <img className="logo" className="logo" src="/logo.jpg" alt=""></img>
                <Link href="/"><a className="button">Sign Out</a></Link>
            </div>
            <div className="titleholder">
                <h1 className="title">Welcome</h1>
            </div>
            <div className="options">
                <div className="comms"> 
                    <Link href="/communication"><a id="button">Posts and <br></br>Tricks Blog</a></Link>
                </div>
                <div className="calendar">
                    <a id="button">Calendar and Practice Sign Up</a>
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
                padding: 8px;
                border-radius: 10px;
                float: right;
            }

            .comms{
                margin-left: 100px;   
                margin-right: 50px;     
                text-align: center;
            }

            .calendar{   
                margin-left: 50px;
                margin-right: 100px;    
                text-align: center;
            }


            #button{
                text-decoration: none;
                color: #fff;
                background-color: #4c87b5;
                margin-top: 20px;
                marg
                margin-right: 2px;
                padding: 10px;
                border-radius: 10px;
                float: right;
                width: 100%;
            }

            .button:hover{
                background-color: #00529b;
                cursor: pointer;
            }

            .logo{
                max-width: 80px;
            }
            
            .left-logo{
                position: relative;
                top: 0;
                left: 0;
            } 
                     
            .titleholder{
                border-bottom: solid;
                border-color: #00529b; 
                max-width: 40%;
                margin: auto;
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

            .options{
                display: grid;
                grid-template-columns: 1fr 1fr;
                justify-content: space-evenly;
                justify-items: center;
                align-content: space-evenly;
                align-items: center;
            }

        `}</style>
    </div>
  )
}


