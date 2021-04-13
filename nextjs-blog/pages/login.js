import Head from 'next/head'
import Link from 'next/link'

export default function Login() {
  return (
    <div className="container">
        <div className="main">
            <Head>
            <   meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            <div className="left-logo">
                <Link href="/"><img className="logo" className="logo" src="/logo.jpg" alt=""></img></Link>
            </div>
            <h1 className="title">Log In</h1>
            <form action="/loggedhome" method="post">
                <div className="holder">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required></input>
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required></input> 
                    <button type="submit">Login</button>
                    <div className="signup">
                        <a>Don't have an account? <Link href="/signup">Sign Up</Link></a>
                    </div>
                </div>
            </form>
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
            background-color: #5CB3FF;
        }

        .title{
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            font-size: 35px;
            color: #f37021;
            margin-top: 90px;
            -webkit-text-stroke-width: 0.5px;
            -webkit-text-stroke-color: #00529b;
        }

        .logo{
            max-width: 80px;
        }

        .left-logo{
            position: fixed;
            top: 0;
            left: 0;
        }   

        input[type=text], input[type=password] {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0 16px;
            display: inline-block;
            border: 1px;
            box-sizing: border-box;
        }

        button {
            margin-top: 10px;
            margin-bottom: 20px;
            outline: none;
            border: none; 
            background-color: #f37021;
            color: #fff;
            padding: 10px 0;
            border-radius: 5px;
            width: 100%;
        }

        button:hover {
            background-color: #00529b;
            cursor: pointer;
        }

        .holder {
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -35%);
            border-style: solid; 
            padding: 30px;
        }

        .signup{
            text-align: center;
        }

        span.psw {
            float: right;
            padding-top: 16px;
        }

        @media screen and (max-width:900px){
            .title{
                text-align: center;
                margin-left: auto;
                margin-right: auto;
                margin-top: 90px;
                margin-botttom: 0px;
                font-size: 30px;
                color: #f37021;
                -webkit-text-stroke-width: 0.5px;
                -webkit-text-stroke-color: #00529b;
            }
            
            .holder{
                border: solid;
                margin-top: -10px;
                margin-left: -10px;
                margin-right: -10px;
                margin-bottom: 30px;
                padding: 16px;
            }
          }

        `}</style>
    </div>
  )
}