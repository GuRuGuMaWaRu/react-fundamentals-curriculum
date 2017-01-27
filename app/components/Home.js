import React from 'react';
import '../styles/Home.css';

class Home extends React.Component{
  render() {
    return (
      <div className="background flex">
        <h1>Enter a City and State</h1>
        <div className="col-sm-4 col-sm-offset-4">
          <form onSubmit={null}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="California, Los Angeles"/>
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                className="btn btn-block btn-success">
                Get Weather
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default Home;
