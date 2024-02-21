import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import axios from 'axios';

function SelectChapter() {
  const location = useLocation();
  const difficulty = location.pathname.split("/")[2];
  
  useEffect(async ()=>{
    // awiat axios.
  });

  return (
    <>
    <Link to = '/study'><h1>Chapter 1</h1></Link>
    <><h1>Chapter 2</h1></>
    <><h1>...</h1></>
    </>
  )
}

export default SelectChapter