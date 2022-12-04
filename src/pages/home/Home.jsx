import './home.scss';
import List from '../../components/list/List';
import NavBar from '../../components/navbar/Navbar';
import { useEffect, useState } from 'react';

const Home = (props) => {
  const [title, setTitle ] = useState('List');
  const [type, setType ] = useState('List');
  const [nav, setNav ] = useState(['List']);
  const [listData, setListData ] = useState([]);
  const [data, setData ] = useState();

  useEffect(()=>{
    const getData = async () => {
      try {
        let res = await fetch('data.json');
        let json = await res.json();
        setData(json);
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  },[])

  useEffect(()=>{
    if(data?.results)
      setListData([...new Set(data.results.map(item => item.name))])
  },[data])

  const setList = (value) => {
    setTitle(value);
    setNav(['List', value]);
    setType('Reference');
    const refs = data.results.filter( res => res.name == value );
    setListData(refs);
  }

  const setRef = (value) => {
    setTitle(value?.ref);
    setNav(['List', value?.name, value?.ref]);
    setType('Tasks');
    const indx = data?.results?.findIndex( res => ((res.ref == value?.ref) && (res.name == value?.name)));
    setListData(data?.results?.[indx]?.tasks);
  }

  const handleNavClicks = (type) => {
    if(type == 'home') {
      setTitle('List');
      setNav(['List']);
      setType('List');
      setListData([...new Set(data.results.map(item => item.name))])
    } else {
      setList(type);
    }
  }

  return(
    <div
      className="home__container"
      data-test="component-home"
    >
      <div className="topBar">
        <NavBar data={nav} callback={handleNavClicks} />
      </div>

      <div className='view'>
        <h1>{ title }</h1>
        <List 
          data={listData} 
          type={type} 
          callback={ 
            type == 'List' 
            ?
            setList
            :
            type == 'Reference'
            &&
            setRef
          }
        />
      </div>
    </div>
  )
}

export default Home