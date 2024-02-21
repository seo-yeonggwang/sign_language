import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { TableBody } from '@mui/material';
import axios from 'axios';

const ClassData = () => {
  const [data, setData] = useState(null); // 빈 배열이 아닌 null로 해야 Loading 컴포넌트 렌더링
  
  let difficulty = ""; // CLASS 데이터 추가 시 사용
  let URL = ""; 

  const handleSubmit = async e => { // CLASS 데이터 추가 시 사용
    e.preventDefault();
    if (difficulty==="" || URL==="") {alert("필수 항목을 모두 입력해주세요."); return;}
    
    await axios.post('/api/postClassData', {
      difficulty: difficulty,
      URL: URL
    })
    .then(res=>{
      window.location.reload(); // 새로고침
    })
    .catch(err=> console.error('Error: ', err));
  };


  useEffect(() => {
    const fetchData = async () => {
      await fetch('/api/getClassData')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response error');
        }
        return res.json();
      })
      .then(body=>setData(body))
      .catch(err=>console.error('Error fetching data:', err));
    };
    fetchData();
  }, []);
  
  // DB CLASS TABLE 쉽게 확인하는 용도의 임시 컴포넌트
  function JsonTest(props){
      return(
        <form onSubmit={handleSubmit}>

        <Paper>
          <Table style = {{backgroundColor: " #00001234"}}>
  
            <TableHead>
              <TableRow>
                <TableCell>primary key</TableCell>
                <TableCell>난이도</TableCell>
                <TableCell>URL(학습 자료 영상 유튜브 URL id)</TableCell>
              </TableRow>
            </TableHead>
  
            <TableBody>
              {props.data.map(d=>(
                <TableRow id = {d.id}>
                  <TableCell>{d.id}</TableCell>
                  <TableCell>{d.difficulty}</TableCell>
                  <TableCell>{d.URL}</TableCell>
                </TableRow>
              ))}
              {/* 데이터 추가 */}
              <TableRow>
                <TableCell>
                  id: 자동할당
                </TableCell>
                <TableCell>
                  <input 
                    type="text"
                    placeholder='난이도'
                    onChange={(e) => difficulty=(e.target.value)}
                  ></input>
                </TableCell>
                <TableCell>
                  <input 
                    type="text"
                    placeholder='URL'
                    onChange={(e) => URL=(e.target.value)}
                  ></input>
                  <button type="submit">CLASS tuple 추가</button>
                </TableCell>
              </TableRow>
            </TableBody>
  
          </Table>      

          
              
        </Paper> 
        </form>

      )
  }
  return (
    <>
      <h3>CLASS DB 확인</h3>
      {data ? <JsonTest data = {data}></JsonTest> : <Loading/>}
    </>
  );
};

export default ClassData;
