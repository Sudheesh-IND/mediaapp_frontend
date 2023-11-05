import React, { useEffect, useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import View from '../components/View'
import Category from '../components/Category'
import { getVideo } from '../Services/allAPI';


function Home() {

  const [video,setVideo]=useState([])

  //getting the video list
  const getVideoList=async()=>{
    const {data}=await getVideo()

    console.log(data)
    setVideo(data)
  }

  useEffect(()=>{
    getVideoList()
  },[])

  return (
    <div>
      <div style={{minHeight:'100vh',maxHeight:'100%'}} className="container">
        <div className="row">
          <div className="col-md-6">

          <Add/>

          </div>
          <div className="col-md-6">
 
              
            <div style={{marginTop:'100px'}} className='text-center d-flex align-items-center justify-content-center'>
             
             <Link to={'/history'}>
             <button className='btn btn-danger'>Watch History</button>
             </Link>
             
            </div>
          </div>
        </div>
        <Row style={{marginTop:'60px'}}>
          <Col className='text-center'>

          <h4>View All Videos</h4>
          <View videos={video}/>

          </Col>
          <Col className='text-center'>

          
          <Category/>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Home