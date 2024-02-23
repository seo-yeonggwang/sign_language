import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
// import TableHead from '@mui/material/TableHead';
import { TableBody } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Loading from '../Loading';
import axios from 'axios';


function SelectChapter() {
  const [chapters, setChapters] = useState(null);
  const location = useLocation();
  const l_id = location.pathname.split("/")[2]; // 1 || 2 || 3
  
  useEffect(()=>{
    const getChapter = async ()=>{
      await axios.get(`/api/getChapter/?level=${l_id}`)
      .then(res=> setChapters(res.data))
      .catch(err=>console.error("Error: ", err));
    };
    getChapter();
  }, []);

  return (
    <>
    <Paper>
      <Table>
        {/* <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
        {chapters? chapters.map( c =>(
          <Link to = {'/study/' + c.id} style={{textDecoration: "none", color:"black", display:"flex"}}>
          <TableRow id = {c.id}>
            <TableCell>
              <h1>Chapter{c.id}</h1>
            </TableCell>
            <TableCell>
              <h4>{c.title}</h4>
            </TableCell>
            <TableCell>
              <h4>{c.detail}</h4>
            </TableCell>
          </TableRow>
          </Link>
        )):<Loading></Loading>}
        </TableBody>
      </Table>
    </Paper>

    </>
  )
}

export default SelectChapter