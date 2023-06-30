import React from 'react'
import { Button } from './Button'
import { removeUser } from '../store/slices/UserSlice'
import { useDispatch } from 'react-redux'
const User = ({ data }) => {
    const dispatch = useDispatch();
    const deleteUser = (id) => {
        dispatch(removeUser(id))
      }
    return (
        <>
        {data.map((name, id) => (
            <li key={id}>
                {name}
                <Button text={"x"} onClick={()=> deleteUser(id)}/>
            </li>
        ))}
        </>
    )
}

export default User