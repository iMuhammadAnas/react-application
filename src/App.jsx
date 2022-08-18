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
    }, 0);
  }

  render() {
    return (
      <div className='major'>
        {!!this.state.users.length ? this.state.users.map((el) =>
          <div className='row' key={el.id} >
            <div className="colum">
              <div className='card'>
                  <img className='img1' src={el.image} alt="" />
                  <p><b>Name : </b>{el.firstName} {el.lastName}</p>
                  <p><b>Email : </b>{el.email}</p>
                  <p><b>Phone : </b>{el.phone}</p>
                  <p><b>age : </b>{el.age}</p>
                  <p><b>Gender : </b>{el.gender}</p>
                  <button>Show More</button>
              </div>
            </div>
          </div>) : 'Loading...!'}
      </div>
    );
  }
}

export default Mainpage;