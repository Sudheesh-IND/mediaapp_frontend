import React, { useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import {

  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput
} from 'mdb-react-ui-kit';


function Videocard() {

  
  const [staticModal, setStaticModal] = useState(false);

  const toggleShow = () => setStaticModal(!staticModal);

  

  return (
    <div>
    
          <MDBCard style={{margin:'10px',width:'300px'}}>
      <MDBRipple onClick={toggleShow} rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage  src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle></MDBCardTitle>
     
        <MDBBtn href='#'><i class="fa-solid fa-trash"></i></MDBBtn>
      </MDBCardBody>
    </MDBCard>
       
      
    <MDBModal staticBackdrop tabIndex='-1' show={staticModal} setShow={setStaticModal}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Play Video</MDBModalTitle>
              <MDBBtn className='btn-close' color='danger' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <iframe width="450" height="315" src="https://www.youtube.com/embed/34Na4j8AVgA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </MDBModalBody>
            
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    <div>
    
    </div>
    </div>
  )
}

export default Videocard