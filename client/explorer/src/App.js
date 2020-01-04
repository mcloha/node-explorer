import React, { useEffect, useState } from 'react';
import Item from './components/Item';

// TODO ...
export default function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPath, setcurrentPath] = useState('client');

  useEffect(() => {
    console.log('rendering');

    getItems('client');
    return () => {

    };
  }, []);

  const getItems = async path => {
    setLoading(true);

    const res = await fetch(`http://127.0.0.1:4000/dir?path=${path}`);
    const resItems = await res.json();

    setcurrentPath(path);
    setItems(resItems);
    setLoading(false);
  }

  const renderFolder = () => {
    return items.map((item, i) => <button className='btn' key={i} onClick={() => itemClick(item)}><Item type={item.type} name={item.name} /></button>)
  }

  const renderSpinner = () => {
    return <div className='spinner-border' role='status'><span className='sr-only'></span></div>;
  }

  const itemClick = item => {
    const { path, type } = item;

    type === 'directory' && getItems(path);
  }

  const getPrevPath = path => {
    const index = path.lastIndexOf('\\');

    return path.substring(0, index);
  }

  const backButtonClick = () => {
    const previosPath = getPrevPath(currentPath);

    previosPath !== '' && getItems(previosPath);
  }

  return (
    <div className='container p-4 d-flex flex-column'>
      <div className='container d-flex justify-content-between'>
        <h2>{loading ? renderSpinner() : currentPath}</h2>
        <button className='btn' onClick={() => backButtonClick()}><i className='fa fa-undo fa-lg' /></button>
      </div>
      <div className='d-flex p-4 flex-wrap align-content-center'>
        {renderFolder()}
      </div>
    </div>
  )
}
