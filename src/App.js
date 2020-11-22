import React from 'react';
import Header from './components/Header';
import Playground from './components/Playground';
import ResultsList from './components/ResultsList';

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-9 mb-5 mb-sm-0">
            <Playground />
          </div>
          <div className="col-12 col-sm-3">
            <ResultsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
