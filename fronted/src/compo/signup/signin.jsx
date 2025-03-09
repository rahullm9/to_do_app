import React from 'react'
import Headcomp from "./headcomp";

const signin = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-left column col-lg-4 d-flex justify-content-center align-items-center">
          <Headcomp first="Sign" second="In"/>
          </div>

          <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className="signup-form d-flex flex-column w-100 p-5 ">
              <input type="text" className="username" placeholder='Enter username or Email' />
              
              <input type="password" className="password" placeholder='Enter password' />
              <button className="btn-signup p-2 ">Sign In</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default signin
