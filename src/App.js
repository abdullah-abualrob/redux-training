import { useEffect, useState } from 'react'
import Userlist from './components/Userlist';
import Filter from './components/Filter';
import { useSelector, useDispatch } from 'react-redux';


import style from './App.module.css';
import { FETCH_USERS } from './actions/types';
import * as allUsers from './users.json'

function App() {
  
  let usersData;
  let users = [];
  const dispatch = useDispatch();
  
  usersData = allUsers.default.users;
  
  useEffect(() => {
    usersData.map(user => {
      user = {...user, role: 'viewer'}
      users.push(user)
    })

    dispatch({type: FETCH_USERS, payload: users})
  }, []);

  return (
    <div className={style.App}>
      <Userlist usersData = {users} displayAll={true}/>
      <Filter />
    </div>
  );
}

export default App;
