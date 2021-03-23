import Link from 'next/link'

export default function OurTeam() {
  return (
    <div className="container">
        <div className="left-logo">
            <img className="logo" className="logo" src="/logo.jpg" alt=""></img>
            <h1 className="title">Gatorettes</h1>
        </div>

        <style jsx>{`
        .title{
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            font-size: 60px;
            color: #f37021;
            margin: 0 auto;
          }

        .logo{
            max-width: 75px;
          }
          
        .left-logo{
            display:flex;
            width: auto;
            } 
        `}</style>
    </div>
  )
}


