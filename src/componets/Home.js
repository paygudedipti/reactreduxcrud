import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Action from '../redux/action/action';
import Forms from './Forms';


const Home = () => {
  const dispatch = useDispatch();
  const responseData = useSelector(state => state.reducer.details)

  console.log(responseData)

  useEffect(() => {
    dispatch(Action())
  }, [dispatch])

  // const result=responseData.map((data,ind)=>
  // {
  //     return (
  //         <>
  //         
  //         </>
  //     )
  // })
  return (
    <>
      <h1 className='text-center py-3'>REACT REDUX CRUD | OPERATION</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">phone</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {/* {result} */}
          {
            responseData.map((data, ind) => {

              return (
                <>
                  <tr key={ind}>
                    <th scope="row" >{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>{data.address.city}</td>
                  </tr>
                </>
              )


            })
          }


        </tbody>
      </table>
    </>
  )
}

export default Home