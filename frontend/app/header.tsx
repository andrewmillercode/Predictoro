"use client"
export default function Header() {
  return (
    <header>
        
            <button id='headerTitle'onClick={()=>{}}>
            Predictoro
            </button>
        
        <div style={{gap:'0.75em',display:'flex'}}>
            <button className='headerButton'onClick={()=>{}}>Fighter Stats</button>
            <button className='headerButton'onClick={()=>{}}>Predict Event</button>
            <button className='headerButton' onClick={()=>{}}>Predict Matchup</button>
        </div>
        <div style={{gap:'0.75em',display:'flex'}}>
        <button className='loginBtn'onClick={()=>{}}>Log in</button>
        <button className='signupBtn' onClick={()=>{}}>Sign up</button>
        </div>
    </header>
  );
}
