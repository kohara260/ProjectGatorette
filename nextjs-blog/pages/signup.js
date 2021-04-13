import Head from 'next/head'
import Link from 'next/link'

export default function SignUp() {
  return (
    <div className="container">
        <div className="main">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            <div className="left-logo">
                <Link href="/"><img className="logo" className="logo" src="/logo.jpg" alt=""></img></Link>
            </div>
            <h1 className="title">Sign Up</h1>
            <p className="instructions">Fill out this form to create an account</p>

            <form action="/loggedhome">
                <div className="holder">
                    <label for="fname"><b>First Name</b></label>
                    <input type="text" placeholder="First Name" name="fname" required></input>
                    <label for="lname"><b>Last Name</b></label>
                    <input type="text" placeholder="Last Name" name="lname" required></input>
                    <label for="email"><b>Email</b></label>
                    <input type="email" placeholder="Email" name="email" required></input>
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Username" name="uname" required></input>
                    <label for="password"><b>Enter Password</b></label>
                    <input id="password" name="password" type="password" pattern="^\S{6,}$" onchange="this.setCustomValidity(this.validity.patternMismatch ? 'Must have at least 6 characters' : ''); if(this.checkValidity()) form.password_two.pattern = this.value;" placeholder="Password" required></input>
                    <label for="password_rpt"><b>Enter Password</b></label>
                    <input id="password_rpt" name="password_rpt" type="password" pattern="^\S{6,}$" onchange="this.setCustomValidity(this.validity.patternMismatch ? 'Please enter the same Password as above' : '');" placeholder="Verify Password" required></input>
                    <button type="submit" className="signupbtn">Sign Up</button>
                </div><br></br>
            </form>
        </div>

        <style jsx>{`

        form{
            background-color: #5CB3FF;
        }

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
            margin-top: 100px;
            margin-bottom: 10px;
            font-size: 35px;
            color: #f37021;
            -webkit-text-stroke-width: 0.5px;
            -webkit-text-stroke-color: #00529b;
        }

        .instructions{
            margin-top: 0px;
            text-align: center;
            font-size: 18px;
        }

        .logo{
            max-width: 80px;
        }

        .logo:hover{
            cursor: pointer;
        }

        .left-logo{
            position: absolute;
            top: 0;
            left: 0;
            float: left;
        } 

        input[type=text], input[type=email], input[type=password] {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0 10px;
            display: inline-block;
            border: 1px;
            box-sizing: border-box;
        }
        
        button {
            margin-top: 10px;
            margin-bottom: 10px;
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
            border: solid;
            margin-top: 9px;
            margin-left: 100px;
            margin-right: 100px;
            margin-bottom: 100px;
            padding: 30px;
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
                margin-top: 9px;
                margin-left: 50px;
                margin-right: 50px;
                margin-bottom: 30px;
                padding: 16px;
            }
          }

        `}</style>
    </div>
  )
}
