import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      /*  <footer className="page-footer blue "> 
 
     <div className=" text-center ">© 2020 Copyright:
         <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
     </div>
 
 </footer> */

      <footer className="page-footer  bg-light text-white mt-5">
        <div className=" blockquote-footer text-center ">© 2020 Copyright:
          <img src="/logo.png" width="30" height="30" alt="Logo" />
          &nbsp;
          Diego matheus Lenz
        </div>




      </footer>
    )
  }
}
export default Footer