import { React, useLayoutEffect, useState } from 'react';
import './Home.css'
import Icons from '../Icons/Icons'


const Home = () => {

  //CUSTOM HOOK TO LISTEN WINDOW SIZE
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  useLayoutEffect(() => {
    const textCursor = document.getElementById("textCursor");

    const fullName = 'sTheoRadiculpkxz'
    let runTime = 200;
    for (let i = 0; i < fullName.length; i++) {
      const letter = document.getElementById(fullName[i]);
      setTimeout(() => letter.style.display= "block", runTime)
      runTime +=120;
    }
    
    function show(){
      textCursor.style.visibility = "visible"
      setTimeout(hide, 500)
    }
    
    function hide(){
      textCursor.style.visibility = "hidden"
      setTimeout(show, 500)
    }
    setTimeout(hide, 2000)
  }, [])

    const [width, height] = useWindowSize();

    const marginRight = width > 724 ? 10 : 5
  return (
    <div className='mainContainer'>

      <div className='name'>
        <span style={{marginRight: marginRight}} id='s'>{width > 349 && '<'}</span>
        <span style={{marginRight: marginRight}} id='T'>T</span>
        <span style={{marginRight: marginRight}} id='h'>h</span>
        <span style={{marginRight: marginRight}} id='e'>e</span>
        <span style={{marginRight: width > 724 ? 30 : 15}} id='o'>o</span>
        <span style={{marginRight: marginRight}} id='R'>R</span>
        <span style={{marginRight: marginRight}} id='a'>a </span>
        <span style={{marginRight: marginRight}} id='d'>d </span>
        <span style={{marginRight: marginRight}} id='i'>i </span>
        <span style={{marginRight: marginRight}} id='c'>c </span>
        <span style={{marginRight: marginRight}} id='u'>e </span>
        <span style={{marginRight: marginRight}} id='l'>l </span>
        <span style={{marginRight: marginRight}} id='p'>l </span>
        <span style={{marginRight: marginRight}} id='k'>a </span>
        <span style={{marginRight: marginRight}} id='x'>{width > 349 && '/'}</span>
        <span id='z'>{width > 349 && '>'}</span>
        <span id='textCursor'>{'|'}</span>
      </div>
      <span className='paragraph'>Full Stack Developer, continuously learning.</span>
      <span className='paragraph'>Currently working full-time developing amazing projects for <a href='https://www.clevertech.biz/'>Clevertech</a>.</span>
      <Icons />
    </div>
  )
}


export default Home