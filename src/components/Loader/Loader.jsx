import React from 'react'
import { ClipLoader } from 'react-spinners'
import './Loader.css'

const Loader = () => {
    return (
        <div className='loader-container'>
            <ClipLoader size={39} />
        </div>
    )
}

export default Loader