import React, { useEffect, useState } from 'react';
import { getData1, getData2, getDatabase } from '../services/datbaseConn';


const Home = () => {
    const [data, setData] = useState({});
    
    useEffect(() => {
       getDatabase().then(res => {
        setData(res)
    });

    }, []);

  return (
    <div>
        <div>{JSON.stringify(data)}</div>
        <div>{JSON.stringify(data.data1)}</div>
        <div>{JSON.stringify(data.data2)}</div>
    </div>
  )
}

export default Home;