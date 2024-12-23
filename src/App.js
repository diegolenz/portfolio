import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Projects from './pages/experience'
import Home from './pages/Home'
import Form from './pages/form.js'
import Nav from './components/nav/Nav'
import Contact from './pages/contact/contact'
import page from './css/page.scss'
import AboutPage from './pages/about/about';
import EconomySection from './components/apresentation/apresentation';

class App extends Component {
  render() {
    return (
      <div className="">

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"></link>
        <Router >


          <Home />
          {/*   <Form /> */}
          {/* <AboutPage /> */}
          {/*  <Form />
            <EconomySection /> */}

          {/*  <Projects />
            <Contact /> */}
          <Routes>
            {/*  <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} /> */}
            {/*  <Route path="/" element={<About />} /> */}

            {/* <Route render={(props) => <ProductSearch />} path="/products" element={<ProductSearch />} />
            <Route render={(props) => <ProductManager {...props} url='/products/manager' />} exact path="/products/manager" element={<ProductManager />} />
            <Route render={(props) => <ProductManager {...props} url='/products/manager/:id' />} exact path="/products/manager/:id" element={<ProductManager />} />
 */}
          </Routes>
          {/* <Footer/> */}
        </Router>
      </div>
    )
  }
}
export default App