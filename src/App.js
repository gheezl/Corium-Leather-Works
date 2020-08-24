import React, { Fragment, lazy, Suspense } from 'react';

import './App.css';

const Header = lazy(() => import("./components/header/header.jsx"))
const ShopPage = lazy(() => import("./pages/shop-page/shop-page.jsx"))



const App = () => {
  return (
    <Fragment>
      <Suspense fallback="Loading">
        <Header />
        <ShopPage />
      </Suspense>
    </Fragment>
  )
}

export default App;
