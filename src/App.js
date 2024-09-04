import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Projects from './pages/experience'
import Home from './pages/Home'
import Nav from './components/nav/Nav'
import Contact from './pages/contact/contact'
import page from './css/page.scss'

class App extends Component {
  render() {
    return (
      <div className="page">
        <script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
          <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
          <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"></link>
          <Router >
            <Nav />
            <Home />
            <Projects />
            <Contact />
            <Routes>
              {/*  <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} /> */}
              {/*  <Route path="/" element={<About />} /> */}
              {/* <Route render={(props) => <ProductSearch />} path="/products" element={<ProductSearch />} />
            <Route render={(props) => <ProductManager {...props} url='/products/manager' />} exact path="/products/manager" element={<ProductManager />} />
            <Route render={(props) => <ProductManager {...props} url='/products/manager/:id' />} exact path="/products/manager/:id" element={<ProductManager />} />
 */}
            </Routes>
          </Router>
      </div>
    )
  }
}
export default App