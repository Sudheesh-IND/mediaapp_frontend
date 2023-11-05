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



function Category() {
  const [staticModal, setStaticModal] = useState(false);

  const toggleShow = () => setStaticModal(!staticModal);
  return (
    <div>
    <button style={{marginTop:'30px'}} className='btn btn-success ' onClick={toggleShow}>Add Category</button>

      <MDBModal staticBackdrop tabIndex='-1' show={staticModal} setShow={setStaticModal}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Add Video</MDBModalTitle>
              <MDBBtn className='btn-close' color='danger' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div><MDBInput className='mt-2' label='Category Id' id='form1' type='text' /></div>
              <div><MDBInput  className='mt-4' label='Category Name' id='form1' type='text' /></div>
              

            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>Upload</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  )
}

export default Category