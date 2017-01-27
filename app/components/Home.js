import React from 'react';
import '../styles/Home.css';

class Home extends React.Component{
  render() {
    return (
      <div className="background flex">
        <h1 className="home-title">Enter a City and State</h1>
        <div className="col-sm-2 col-sm-offset-5">
          <form onSubmit={null}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="California, Los Angeles"/>
            </div>
            <div className="form-group col-sm-6 col-sm-offset-3">
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
