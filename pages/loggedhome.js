// Referenced https://coder-coder.com/display-divs-side-by-side/ for help on how to 
// place two divs side-by-side 

import Link from 'next/link'

export default function LoggedHome() {
  return (
    <div className="container">
        <head>
            <title>Welcome</title>
        </head>
        <div className="main">
            <div className="left-logo">
                <img className="logo" className="logo" src="/logo.jpg" alt=""></img>
                <Link href="/"><a className="button signout">Sign Out</a></Link>
            </div>
            <h1 className="title">Welcome!</h1>        
            <div className="holder">                
                <div className="half holder1">
                    <Link href="/communication"><a className="button button1">Posts and <br></br> Tricks Blog</a></Link>
                </div>
                <div className="half holder2">
                    <a className="button button2">Practice Calendar  <br></br> and Sign Up</a>
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
                padding: 10px;
                border: solid;
                border-radius: 10px;
                float: right;
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
                        
            .title{
                text-align: center;
                margin-left: auto;
                margin-right: auto;
                font-size: 45px;
                border-bottom: solid;
                border-color: #00529b;
                max-width: 25%;
                color: #f37021;
                margin: 1px auto;
                -webkit-text-stroke-width: 0.5px;
                -webkit-text-stroke-color: black;
            }

            .holder{
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                margin-top:30px;
            }

            .half{
                width: 50%;
                border: dotted;
                border-width: medium;
                border-color: #f37021;
            }
    
            .holder1{
                background: url("/comm_pic.jpg") no-repeat;
                background-size: cover;
                text-align: center;
                max-width: 300px;
                float: left;
                height: 300px;  
                margin-right: 75px;            
             }
            
            .holder2{
                background: url("/practice_pic.jpg") no-repeat;
                background-size: cover;
                text-align: center;
                max-width: 300px;
                float: right;
                height: 300px;
                margin-left: 75px;
            }

             .signout{
                padding: 12px;
                font-size: 18px;
                margin-top: 4px;
                margin-right: 4px;
            }

            .button1{
                transform: translate(-91px, 22px);
            }

            .button2{
                transform: translate(-70px, 22px);
            }            

        `}</style>
    </div>
  )
}
