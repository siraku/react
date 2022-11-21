import logo from './logo.svg'

function ShowTime(){
  const date= new Date().getDate()
  // const hour= date.getHours() %12

  return (
    <h2>Today is {date}</h2>)
}

export default function Head(){
    return (
      <div>
        <h1> My navigation </h1>
        <ShowTime/>
      <img src={logo} className='App-logo' />
      </div>
    )
  }