import Head from 'next/head'
import Link from 'next/link'

export default function Login() {
  return (
    <div className="container">
        <div className="main">
            <Head>
                <script type="text/javascript" src="/js/main.js"></script>
            </Head>
            <div className="left-logo">
                <Link href="/"><img className="logo" className="logo" src="/logo.jpg" alt=""></img></Link>
            </div>
            <div className="box">
                <div className="content columns">
                    <div className="content-tabs-row">
                        <div className="row">
                            <div className="content-tabs-row-inner">
                                <button className="content-tab-activate active" id="button1" data-content-tab="overview">Login<i className="fas fa-caret-down small-margin-left"></i></button>
                                <button className="content-tab-activate" id="button2" data-content-tab="representative-experience">Sign Up<i className="fas fa-caret-down small-margin-left"></i></button>
                            </div>
                        </div>
                    </div>


                    <div className="content-tab one active" data-content-tab="overview">
                        <div>
                            <form action="/loggedhome" className="form login">
                                <label for="username">Username</label>
                                <input type="text" name="username"></input>
                                <label for="password">Password</label>
                                <input type="password" name="password"></input>
                                <input type="submit" value="Submit"></input>
                            </form>
                        </div>
                    </div>

                    <div className="content-tab two" data-content-tab="representative-experience">
                            <form action="/loggedhome" className="form signup">
                            <label for="fname">First Name</label>
                                <input type="text" name="fname"></input>

                                <label for="lname">Last Name</label>
                                <input type="text" name="lname"></input>
                                
                                <label for="email">Email</label>
                                <input type="email" name="email"></input>
                                
                                <label for="username2">Username</label>
                                <input type="text" name="username2"></input>

                                <label for="password2">Password</label>
                                <input type="password" name="password2"></input>

                                <input type="submit" value="Submit"></input>
                            </form>
                    </div>
                </div>
            </div>
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

        .box{
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-style: solid; 
        }

        .logo{
            max-width: 80px;
        }

        .left-logo{
            position: fixed;
            top: 0;
            left: 0;
        } 

        .content-tabs-row{
            padding: 0 50px; 
            padding-top: 20px;         
        }

        .content-tab{
            display: none;
            padding: 0 50px;
        }

        .content-tab.active{
            display: block;
        }

        .form{
            display: flex;
            flex-wrap: wrap;
        }

        label{
            margin: 15px 0 5px;
        }

        label, input{
            width: 99%;
        }

        input[type='submit']{
            margin-top: 20px;
            margin-bottom: 20px;
            outline: none;
            border: none; 
            background-color: #f37021;
            color: #fff;
            padding: 10px 0;
            border-radius: 5px;
        }

        input[type='submit']:hover{
            background-color: #00529b;
            cursor: pointer;
        }

        #button1,#button2{
            border: none;
            border-radius: 5px;
            background-color: #f37021;
            color: #fff;
            margin-right: 10px;
            padding: 5px 10px;
        }

        #button1:hover, #button2:hover{
            background-color: #00529b;
            cursor: pointer;
        }

        `}</style>
    </div>
  )
}