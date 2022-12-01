import './home.scss';
import List from '../../components/list/List';
import NavBar from '../../components/navbar/Navbar';
import React, { useEffect, useState } from 'react';
import data from '../../data.json'

const Home = (props) => {
  const [title, setTitle ] = useState('List');
  const [type, setType ] = useState('List');
  const [nav, setNav ] = useState(['List']);
  const [listData, setListData ] = useState([...new Set(data.results.map(item => item.name))]);

  const setList = (value) => {
    setTitle(value)
    setNav(['List', value])
    setType('Reference')
    const refs = data.results.filter( res => res.name == value )
    setListData(refs)
  }

  return(
    <div
      className="home__container"
      data-test="component-home"
    >
      <div className="topBar">
        <NavBar data={nav} />
      </div>

      <div className='view'>
        <h1>{ title }</h1>
        <List 
          data={listData} 
          type={type} 
          callback= { 
            type == 'List' && setList 
          }
        />
      </div>
    </div>
  )
}

export default Home