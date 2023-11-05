import React, { useState } from 'react'
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import {uploadVideo} from '../Services/allAPI'

function Add() {

  const [staticModal, setStaticModal] = useState(false);

  const toggleShow = () => setStaticModal(!staticModal);

  //to hold the video details
  const [video,setVideo]=useState({
    id:'',
    caption:'',
    url:'',
    embedLink:''

  })
  console.log(video)

  const getEmbedLink=(e)=>{

    const {value}=e.target
    console.log(value.slice(-11))
    if(value){
      const link=`https://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({...video,embedLink:link})
    }else{
      setVideo({...video,embedLink:''})
    }

  }

  const addVideo=async()=>{
     const {id,caption,url,embedLink}=video

     if(!id||!caption||!url||!embedLink){
      alert('Please enter valid details')
     }else{
      //api call for add video

      const response=await uploadVideo(video)
      console.log(response)

      if(response.status>=200 && response.status<=300){
        alert(`${response.data.caption} added successfully`)
        toggleShow()
      }else{
        alert('Please provide another id')
      }

     }


  }



  return (
    <div>
      <div style={{marginTop:'100px'}} className='text-center d-flex align-items-center justify-content-center'>
              <h4>Upload Video</h4>
              <button className='btn btn-success ms-2' onClick={toggleShow}><i class="fa-solid fa-plus"></i></button>
            </div>
            <MDBModal staticBackdrop tabIndex='-1' show={staticModal} setShow={setStaticModal}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Add Video</MDBModalTitle>
              <MDBBtn className='btn-close' color='danger' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div><MDBInput onChange={(e)=>{setVideo({...video,id:e.target.value})}} className='mt-2' label='Video Id' id='form1' type='text' /></div>
              <div><MDBInput onChange={(e)=>{setVideo({...video,caption:e.target.value})}}  className='mt-4' label='Video Caption' id='form1' type='text' /></div>
              <div><MDBInput onChange={(e)=>{setVideo({...video,url:e.target.value})}} className='mt-4' label='Video Image' id='form1' type='text' /></div>
              <div><MDBInput onChange={getEmbedLink} className='mt-4' label='Youtube Video Link' id='form1' type='text' /></div>

            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn  color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn onClick={addVideo} type='button'>Upload</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  )
}

export default Add