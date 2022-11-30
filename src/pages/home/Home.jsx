import './home.scss';
import List from '../../components/list/List';
import NavBar from '../../components/navbar/Navbar';
import React, { useEffect, useState } from 'react';

const Home = (props) => {
  return(
    <div
      className="home__container"
      data-test="component-home"
    >
      <div className="topBar">
        <NavBar />
      </div>

      <div className='view'>
        <h1>CA-123456</h1>
        <List />
      </div>
    </div>
  )
}

export default Home