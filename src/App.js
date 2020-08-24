import React, { Fragment, lazy, Suspense } from 'react';

import './App.css';

const Header = lazy(() => import("./components/header/header.jsx"))



const App = () => {
  return (
    <Fragment>
      <Suspense fallback="Loading">
        <Header />
      </Suspense>
    </Fragment>
  )
}

export default App;
