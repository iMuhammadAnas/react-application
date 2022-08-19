import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';


class Mainpage extends Component {
  state = {
    users: [],
  }

  componentDidMount() {
    setTimeout(async () => {
      const f = await fetch('https://dummyjson.com/users');
      const data = await f.json();
      this.setState({ users: data.users });
    }, 2000);
  }

  render() {
    return (
      <div className='major1'>
        {!!this.state.users.length ? this.state.users.map((el) =>
          <div className='row1' key={el.id} >
            <div className="colum1">
              <div className='card1'>
                <img className='img1' src={el.image} alt="" />
                <p><b>Name : </b>{el.firstName} {el.lastName}</p>
                <p><b>Email : </b>{el.email}</p>
                <p><b>Phone : </b>{el.phone}</p>
                <p><b>age : </b>{el.age}</p>
                <p><b>Gender : </b>{el.gender}</p>
                <button data-bs-toggle="modal" data-bs-target={"#staticBackdrop" + el.id} >More About {el.firstName}</button>
              </div>
            </div>

            <div className="modal fade" id={"staticBackdrop" + el.id} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">{el.firstName}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <p><b>Name : </b>{el.firstName}</p>
                    <p><b>Full Name : </b>{el.firstName} {el.lastName}</p>
                    <p><b>age : </b>{el.age}</p>
                    <p><b>Phone : </b>{el.phone}</p>
                    <p><b>Email : </b>{el.email}</p>
                    <p><b>Gender : </b>{el.gender}</p>
                    <p><b>Birth date : </b>{el.birthDate}</p>
                    <p><b>Address : </b>{el.address.address}</p>
                    <p><b>City : </b>{el.address.city}</p>
                  </div>
                  <div className="modal-footer mf">
                    <button type="button" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        ) :
          <div className="loading">
            <div className="loader">Loading...</div>
          </div>
        }
      </div>
    );
  }
}

export default Mainpage;