import React, { Fragment, lazy, Suspense } from 'react';

import './App.css';

import Loader from "./components/loader/loader.jsx"

const Header = lazy(() => import("./components/header/header.jsx"))
const ShopPage = lazy(() => import("./pages/shop-page/shop-page.jsx"))
const About = lazy(() => import("./pages/about/about.jsx"))
const Footer = lazy(() => import("./components/footer/footer.jsx"))



const App = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Header />
        <About />
        <ShopPage />
        <Footer />
      </Suspense>
    </Fragment>
  )
}

export default App;
