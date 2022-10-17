import React, { useState } from 'react'

const Forms = () => {

     const [dataName,setDataName] = useState('');
    //  const [user,setUserName] = useState('');
    //  const [email,setEmail] = useState('');
    //  const [address,setAddress] = useState('');
    //  const [phone,setPhone] = useState('');
const dataHandaler = (e) =>{
     console.log(e)
}

  return (
    <>
    <div className='container'>
    <form onSubmit={dataHandaler}>
 <div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4">Name</label>
      <input type="text" className="form-control" id="inputEmail4" placeholder="Name"  onChange={(e)=>setDataName(e.target.value)}/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4">UserName</label>
      <input type="text" className="form-control" id="inputPassword4" placeholder="Username" onChange={(e)=>setDataName(e.target.value)} />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">email</label>
    <input type="email" className="form-control" id="inputAddress" placeholder="Email"  onChange={(e)=>setDataName(e.target.value)}/>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress2">Address</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="City" onChange={(e)=>setDataName(e.target.value)} />
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity">Phone Number</label>
      <input type="number" className="form-control" id="inputCity" placeholder="Phone number" onChange={(e)=>setDataName(e.target.value)} />
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Sign in</button>

</div>
</form>

    </div>
    
       
    </>
  )
}

export default Forms