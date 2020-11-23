import React from 'react';
import Header from './Header';
import Playground from './Playground';
import ResultsList from './ResultsList';

const App = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-9 mb-5 mb-lg-0">
            <Playground />
          </div>
          <div className="col-12 col-lg-3">
            <ResultsList />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
