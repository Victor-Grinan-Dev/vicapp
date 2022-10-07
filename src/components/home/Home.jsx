import React, { useEffect, useState } from 'react';
import { getDataArr, getDatabase, getDataObj, getDataStr } from '../services/datbase';


const Home = () => {
    const [data, setData] = useState({});
    const [dataStr, setDataStr] = useState("");
    const [dataArr, setDataArr] = useState("");
    const [dataObj, setDataObj] = useState("");

    
    useEffect(() => {
        
        getDatabase().then(res => {
            setData(res)
        });

        getDataStr().then(res => {
            setDataStr(res)
        });

        getDataArr().then(res => {
            setDataArr(res)
        });

        getDataObj().then(res => {
            setDataObj(res)
        });

    }, []);

  return (
    <div>

        <div >Database: {JSON.stringify(data)}</div>
        <div>Data 1: {dataStr} {/*data.dataStr*/}</div>        
        <div>Data 2: {dataArr[0]} {/*data.dataArr[0]*/}</div>    
        <div>Data 3: {dataArr[1]} {/*data.dataArr[1]*/}</div>     
        <div>Data 4: {dataArr[2]} {/*data.dataArr[2]*/}</div>     
        <div>Data 5: {dataObj.data5} {/*data.data5*/}</div>  
        <div>Data 6: {dataObj.data6} {/*data.data6*/}</div>  
        <div>Data 7: {dataObj.data7} {/*data.data7*/}</div>  

    </div>
  )
}

export default Home;