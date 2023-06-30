import React from 'react'
import Header from './components/Header'
import UsersList from './components/UsersList'
import { Button } from './components/Button'
import { dummyUsers } from './api'
import { useDispatch } from 'react-redux'
import { addUser, clearUsers } from './store/slices/UserSlice'
const App = () => {
  const dispatch = useDispatch();

  const addNewUser = (payload)=> {
      dispatch(addUser(payload));
  }

  const deleteAll = ()=> {
    dispatch(clearUsers())
  }


  return (
    <main className='container'>
      <Header/>
      <Button text={"Add User"} onClick={()=> addNewUser(dummyUsers())}/>
      <UsersList/>
      <Button text={"clear all"} onClick={()=> deleteAll()}/>
    </main>
  )
}

export default App