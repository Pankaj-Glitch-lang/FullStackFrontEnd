import React from 'react'

const Login = () => {

  const handleClick=()=>{

  }
  return (
    <div>
      <form onClick={handleClick}>
      <input type="email" placeholder='Enter your email' />
        <input type="password" placeholder='Enter your password' />
        <input type="submit" value={'Login'} />

      </form>
     


    </div>
  )
}

export default Login