import React, { useState } from 'react';
import './App.css'

export default function App() {
  const [email, setEmail] = useState('')
  const [input, setInput] = useState([])

  const enter = () => {
    if (email.includes('@gmail.com')) {
      alert('Email is valid!')

      const newEmail = {
        id: input.length + 1,
        title: email,

      };
      setInput([...input, newEmail])
      setEmail('')

    }
    else if (email.includes(' ')) {
      alert('Email is invalid!')
      setEmail('')
    }
    else {
      alert('Email is invalid!')
      setEmail('')
    }

  }

  const deleteEmail = (id) => {
    setInput(input.filter((input) => input.id !== id))
  }

  return (
    <div>
      <div className='container'>
        <div className='heading'>Add candidate</div>
        <div className='box'>
          <div className='output'>
            <div className='result'>
              <ul className='list'>
                {
                  input.map((email) => (
                    <li key={email.id} >
                      <span> {email.title} </span>
                      <button onClick={() => deleteEmail(email.id)}>X</button>
                    </li>
                  ))
                }

              </ul>

            </div>

          </div>
          <div>

            <input type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className='Enter'><button onClick={enter}>Enter</button></div>
      </div>
    </div>
  )

}