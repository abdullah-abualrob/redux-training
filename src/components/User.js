import React from 'react'
import { useDispatch } from 'react-redux'

import styles from '../styles/User.module.css'

function User({name, id, role}) {
    
    const dispatch = useDispatch()
    
    const onChange = (role) => {
        dispatch({
            type: 'CHANGE_ROLE',
            payload: {role, id:id-1},
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.pad}>
                <h5>{name} + {id}</h5>
                <select value={role} onChange={(e) => onChange(e.target.value)}>
                    <option value='editor'>
                        editor
                    </option>
                    <option value='viewer'>
                        viewer
                    </option>
                    <option value='admin'>
                        admin
                    </option>
                </select>
            </div>
        </div>
    )
}

export default User;
