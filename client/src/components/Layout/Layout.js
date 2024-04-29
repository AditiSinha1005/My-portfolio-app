import React,{useState} from 'react'
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Menus from './Menus';
import Home from '../Home';
const Layout = () => {
  const [toggle,setoggle]=useState(true);
  const handlechange=()=>{
    setoggle(!toggle)
  }
  return (
    <>
        <div className='sidebar-section'>
            <div className={toggle ? 'sidebar-toggle sidebar' : 'sidebar'}>
            <div className='sidebar-toggle-icons'>
             <p onClick={handlechange}>{
              toggle ? (<AiOutlineDoubleLeft size={30}/>) : (<AiOutlineDoubleRight size={30} />) 
             }
            </p>
            </div>
            <Menus toggle={toggle}/>
            </div>
            <div className='container'>
              <Home/>
            </div>


        </div>
    </>
  )
}

export default Layout
