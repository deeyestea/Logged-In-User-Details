import React, { useEffect, useState } from 'react'
import './Listpage.css';
import image from './img-wave.png'
import axios from 'axios';
import { Link, Redirect, useNavigate, Routes, Route } from 'react-router-dom';
import Individualpage from './Individualpage';

const Listpage = () => {

    const [usersList, setUsersList] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getUseDetails()
    }, [])

    const getUseDetails = () => {
        axios.get('https://panorbit.in/api/users.json').then((response) => {
            setUsersList(response.data.users)
            console.log(response.data)
        })
    }

    return (
        <div className="container">
            <div className="demo">
                <img src={image} />
            </div>
            <div className="dropdown">
                <h4 className="heading">Select an account</h4>
                <ul className="dropdown-menu" id='style-7'>
                    {
                        !!usersList && usersList.length > 0 && usersList.map(user => {
                            return (
                                <>
                                    <Link to={{ pathname: "Individual", state: user }} className="user-item">
                                        <img src={user.profilepicture} alt="user_profile" width="40px" height="40px" />
                                        <p>{user.name}</p>
                                    </Link>
                                    <hr style={{ marginLeft: 15, marginRight: 15 }} />
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Listpage