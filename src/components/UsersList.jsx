import React from 'react'
import { Button } from './Button'
import { useSelector } from 'react-redux'
import User from './User';

const UsersList = () => {
  const data = useSelector((state)=> {
    return state.user
  });
  return (
    <ul>
        <User data={data}/>
    </ul>
  )
}

export default UsersList