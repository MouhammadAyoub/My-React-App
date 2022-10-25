import React from 'react';
import { CDBFooter, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import myLogo from '../images/logo-react-icon.png';
import '../styles/footer.css';
import 'bootstrap/dist/css/bootstrap.css';

export const Footer = () => {

  return (

    <CDBFooter className="shadow">

      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-3 flex-wrap"
        style={{ width: '80%' }} >

        <CDBBox display="flex" alignItems="center">
          <img  alt="logo"
                src={myLogo}
                width="30px" />
          &nbsp; &nbsp; 
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <span className="ml-4 h5 mb-0 font-weight-bold">MyReactApp</span>
          </a>
        </CDBBox>

        <CDBBox>
          <small className="ml-2">&copy; MyReactApp, 2022. All rights reserved.</small>
        </CDBBox>

        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>

      </CDBBox>
    </CDBFooter>
  );
};