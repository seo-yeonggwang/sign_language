import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function StudySelect() {
  return (
    <>
    <Link to = '/study'><h1>Chapter 1</h1></Link>
    <><h1>Chapter 2</h1></>
    <><h1>...</h1></>
    </>
  )
}

export default StudySelect