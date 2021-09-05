import React from 'react'
import {useDispatch} from 'react-redux'

import style from '../styles/FilterItems.module.css'

function FilterItems() {

    const dispatch = useDispatch();
    const onClick = (value) => {
        dispatch({
            type: 'CHANGE_FILTER',
            payload: value
        })
    }

    return (
        <div className={style.container}>
            <button onClick={() => onClick('viewer')}>viewer</button>
            <button onClick={() => onClick('editor')}>editor</button>
            <button onClick={() => onClick('admin')}>admin</button>
        </div>
    )
}

export default FilterItems;