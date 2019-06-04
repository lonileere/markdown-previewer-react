import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div className="container">
  <div className="row">
    <div className="col-md-12">
      <div className="jumbotron">
        <h1 className="display-4">Markdown Previewer</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention
          to featured content or information.</p>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6 offset-md-3">
      <textarea type="text" className="form-control" rows="10" ></textarea>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6 col-offset-md-3">

    </div>
  </div>
</div>
  );
}

export default App;
