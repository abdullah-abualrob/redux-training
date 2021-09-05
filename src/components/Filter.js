import React from 'react'
import FilterItems from './FilterItems';

import style from '../styles/Filter.module.css'
import FilteredUsers from './FilteredUsers';

function Filter() {
    return (
        <div className={style.container}>
            <FilterItems />
            <FilteredUsers />
        </div>
    )
}

export default Filter;
