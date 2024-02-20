import React, { useState, useEffect } from 'react';
import Progress from './Loading';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { TableBody } from '@mui/material';

function JsonTest(props){
    return(
      <Paper>
        <Table style = {{backgroundColor: " #00001234"}}>

          <TableHead>
            <TableRow>
              <TableCell>아이디</TableCell>
              <TableCell>비밀번호(해싱)</TableCell>
              <TableCell>이름</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {props.data.map(d=>(
              <TableRow id = {d.id}>
                <TableCell>{d.id}</TableCell>
                <TableCell>{d.pswd}</TableCell>
                <TableCell>{d.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>      
      </Paper> 

    )
}

const UserData = () => {
  const [data, setData] = useState(null); // 빈 배열이 아닌 null로 해야 Progress 컴포넌트 렌더링

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => { // Progress 컴포넌트 확인용 딜레이
      fetch('/api/getUserData')  //await?
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response error');
        }
        return res.json();
      })
      .then(body=>setData(body))
      .catch(err=>console.error('Error fetching data:', err));
      }, 2000); // 2초 딜레이
    };
    fetchData();
  }, []);

  return (
    <>
      <h3>USER DB 확인</h3>
      {data ? <JsonTest data = {data}></JsonTest> : <Progress/>}
    </>
  );
};

export default UserData;
