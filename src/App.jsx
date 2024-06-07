import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mainfooter'>
      <div>
          <h2>Laxmi Devi Institute of Engineering & Technology</h2>
          <br />
          <p>Alwar-Tijara-Delhi Highway
              Chikani, Alwar, Rajasthan
              India –  301028</p>
              <br />
      <h3>+91-7073477274</h3>
      <br />
      <h3>+91-9829103101</h3>
      <br />
      <a href="">director@lietalwar.org</a>
      
      </div>
      <div className='firstfooter'>
      <h2>Quick Links</h2>
      <br />
      <a href="">about us</a>
      <br />
      <a href="">admission</a>
      <br />
      <a href="">Apply@</a><br />
      <a href=''>Board of Management</a><br />
      <a href=''>Grievance Redressal</a><br />
      </div>
      <div className='secondfooter'>
      <h2>Courses</h2><br />
      <a href="">B. Tech.</a><br />
      <a href="">M. Tech.</a><br />
      <a href="">MBA</a><br />
      <a href="">Polytechnic</a><br />
      </div>
      <div className='thirdfooter'>
        <h2>External Links</h2><br />
        <a href="">AICTE</a><br />
        <a href="">BTU</a><br />
        <a href="">BTER</a><br />
        <a href="">DELNET</a><br />

      </div>
    
    </div>
    </>
  )
}

export default App
