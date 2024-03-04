import React, { useState } from 'react';



const App = () => {

  const [fullName, setFullName] = useState({

    fName: "",
    lName: "",
    email: "",
    phone: ""

  });


  const inputEvent = (event) => {

    //  console.log(event.target.name);
    //  console.log(event.target.placeholder);

    const {value, name } = event.target;



    setFullName((preValue) => {

      if (name === 'fName') {
        return {
          fName: value,
          lName: preValue.lName,
          email: preValue.email,
          phone: preValue.phone
        };
      } else if (name === 'lName') {
        return {
          fName: preValue.fName,
          lName: value,
          email: preValue.email,
          phone: preValue.phone
        };
      }else if (name === 'email') {
        return {
          fName: preValue.fName,
          lName: preValue.lName,
          email: value,
          phone: preValue.phone
        };
      }else if (name === 'phone') {
        return {
          fName: preValue.fName,
          lName: preValue.lName,
          email: preValue.email,
          phone: value
        };
      }

      

    });

  };

  return (

    <>

      <div id="container">

        <div className="heading">


          <h1> <span>Hello,</span> {fullName.fName} {fullName.lName}</h1>
          <p>{fullName.email}</p>
          <p>{fullName.phone}</p>

        </div>

        <div className="info">
          <input type="text"
            placeholder='Enter your first name'
            name="fName"
            onChange={inputEvent}
            value={fullName.fName}
            autoComplete='off'

          />


          <input type="text"
            placeholder='Enter your last name'
            name="lName"
            onChange={inputEvent}
            value={fullName.lName}

          />

          <input type="text"
            placeholder='Enter your email'
            name="email"
            onChange={inputEvent}
            value={fullName.email}

          />

          <input type="text"
            placeholder='Enter your mobile number'
            name="phone"
            onChange={inputEvent}
            value={fullName.phone}

          />

        </div>

      </div>



    </>

  );


};

export default App;