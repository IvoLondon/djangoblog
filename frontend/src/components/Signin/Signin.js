import React from 'react'

const Signin = () => {
  return (
    <form>
        <h5>Please, sign in...</h5>
        <input type="text" name="username" value="username" />
        <input type="password" name="password" value="password" />
        <input type="submit" value="submit" /> Or
        
    </form>
  )
}

export default Signin
