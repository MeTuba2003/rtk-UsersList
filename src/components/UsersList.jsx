import React from 'react'
import { Button } from './Button'
import { useDispatch, useSelector } from 'react-redux'
import User from './User';
import { removeUser } from '../store/slices/UserSlice';

const UsersList = () => {
  // const dispatch = useDispatch();
  // const deleteAll = ()=> {
  //   dispatch(removeUser())
  // }

  const data = useSelector((state)=> {
    return state.user
  });
  return (
    <>
    <ul>
        <User data={data}/>
        {/* <Button text={"clear all"} onClick={()=> deleteAll()}/> */}
    </ul>
    </>
  )
}

export default UsersList