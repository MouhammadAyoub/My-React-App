import React, {Component} from "react";
import Rating from '@mui/material/Rating';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple
} from "mdb-react-ui-kit";
import "../styles/dashboard.css";
import 'bootstrap/dist/css/bootstrap.css';

export default class Dashboard extends Component {

  constructor(props) {

    super(props);

    this.state = {
        items: [],
        DataIsLoaded: false
    };

  }

  componentDidMount() {

    fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((json) => {

        this.setState({
          items: json,
          DataIsLoaded: true
        });

      })
  }

  render() {

    const { DataIsLoaded, items } = this.state;

    if (!DataIsLoaded) return (

      <div className="loader-container">
      	  <div className="spinner"></div>
      </div>

    );

    return (

      <MDBContainer fluid>

        {
        
          items.map((item) => (

            <MDBRow className="justify-content-center mb-0">
              <MDBCol md="12" xl="8">
                <MDBCard className="shadow-0 border rounded-3 mt-3 mb-2">
                  <MDBCardBody>

                    <MDBRow>
                      
                      <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                        <MDBRipple rippleColor="light" rippleTag="div" className="bg-image rounded hover-zoom hover-overlay">
                          <MDBCardImage src={item.image} fluid className="w-100"/>
                          <a href="#!"> <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div> </a>
                        </MDBRipple>
                      </MDBCol>

                      <MDBCol md="6">
                        <h5>{item.title}</h5>
                        <div className="d-flex flex-row">
                          <Rating name="read-only" value={item.rating.rate} defaultValue={2.5} precision={0.5} readOnly />
                        </div>
                        <div className="mt-1 mb-0 text-muted small">
                          <span className="text-primary"> • </span>
                          <span>{item.category}</span>
                        </div>
                        <p className="mb-4 mt-4 mb-md-0">
                          {item.description}
                        </p>
                      </MDBCol>

                      <MDBCol md="6" lg="3" className="border-sm-start-none border-start">
                        <div className="d-flex flex-row align-items-center mb-1">
                          <h4 className="mb-1 me-1">${item.price}</h4>
                          <span className="text-danger">
                            <s>${Math.round(item.price*1.3 * 100) / 100}</s>
                          </span>
                        </div>
                        <h6 className="text-success">Free shipping</h6>
                        <div className="d-flex flex-column mt-4">
                          <button class="btn btn-primary mb-2" color="primary" size="sm">
                            Details
                          </button>
                          <button class="btn btn-success" color="primary" size="sm">
                            Add to wish list
                          </button>
                        </div>
                      </MDBCol>

                    </MDBRow>

                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          ))
    
        }

        <br/>

      </MDBContainer>

    );

  }

}
