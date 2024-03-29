import { useState } from 'react'
import { useCookies } from 'react-cookie'

const Auth = () => {

  const [cookies, setCookie] = useCookies(null);
  const [isLogIn, setIsLogIn] = useState(true);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, SetConfirmPassword] = useState(null);
  const [error, setError] = useState(null);
  
  const viewLogin = (status) => {
    setError(null);
    setIsLogIn(status);
  }

  const handleSubmit = async(e, endPoint) => {
    e.preventDefault();
    if(!isLogIn && password !== confirmPassword) {
      setError('Make sure passwords match!');
      return
    }

    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/${endPoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email, password})
    });
    const data = await response.json();
    if(data.detail) {
      setError(data.detail)
    } else {
      setCookie('Email', data.email); 
      setCookie('AuthToken', data.token); 

      window.location.reload();
    }
  }

  return (
    <div className='auth-container'>
      <div className='auth-container-box'>
        <form>
          <h2>{isLogIn ? 'Pease log in' : 'Please sign up'}</h2>
          <input 
            type='email' 
            placeholder='email' 
            onChange={(e) => setEmail(e.target.value)}/>
          <input 
            type='password' 
            placeholder='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          {!isLogIn && <input 
            type='password' 
            placeholder='confirm password'
            onChange={(e) => SetConfirmPassword(e.target.value)}
            />}
          <input 
            type='submit' 
            className='create' 
            onClick={(e) => handleSubmit(e, isLogIn ? 'login' : 'signup')}/>
          {error && <p>{error}</p>}
        </form>
        <div className='auth-options'>
          <button 
            onClick={() => viewLogin(false)}
            style={{backgroundColor: !isLogIn ? 'rgb(255, 255, 255)' : 'rgb(188, 188, 188'}}
            >Sing Up</button>
          <button 
            onClick={() => viewLogin(true)}
            style={{backgroundColor: isLogIn ? 'rgb(255, 255, 255)' : 'rgb(188, 188, 188'}}
            >Login</button>
        </div>
      </div>
    </div>
  )
}

export default Auth