import React from 'react';
import InputForm from './InputForm';
import '../styles/Home.css';

class Home extends React.Component{
  render() {
    const css = {
      main: 'col-sm-2 col-sm-offset-5',
      button: 'col-sm-6 col-sm-offset-3'
    };

    return (
      <div className="background flex">
        <h1 className="home-title">Enter a City and State</h1>
        <InputForm css={css} />
      </div>
    );
  }
};

export default Home;
