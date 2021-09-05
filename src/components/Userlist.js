import React from 'react'
import User from './User';
import { useSelector } from 'react-redux';

import style from '../styles/Userlist.module.css'

function Userlist({ displayAll }) {

    const state = useSelector(state => state.users)
    const filterValue = useSelector(state => state.Filter)
    
    return (
        <div className={style.container}>
            <div className={style.wide}>
                <h4>users</h4>
            </div>
            {
                displayAll ? 
                (state.users).map( user => {
                    return(<User name = {user.name} id={user.id} key={user.id} role={user.role}/>)
                })
                : 
                (state.users.filter(user => user.role === filterValue.value)).map( user => {
                    return(<User name = {user.name} id={user.id} key={user.id} role={user.role}/>)
                })
            }
        </div>
    )
}

export default Userlist;
