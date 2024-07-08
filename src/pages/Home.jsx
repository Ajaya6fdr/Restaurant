import React from 'react'
import Layout from '../Layout'
import { Link } from 'react-router-dom'
import Banner from '../images/banner.jpeg'
import './Home.css'
const Home = () => {
  return (
    <Layout>
       <div className='home' style={{backgroundImage:`url(${Banner})`}}>
          <div className='headerContainer'>
             <h1>Food Website</h1>
             <p>Best Food in India</p>
             <Link to="/Restaurant/menu">
                <button >
                  Order NOW
                </button>
             </Link>
          </div>  
       </div>
    </Layout>
  )
}

export default Home