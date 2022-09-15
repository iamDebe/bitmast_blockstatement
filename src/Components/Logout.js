import React, {useEffect} from 'react'
import {useCookies} from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const [cookies, setCookies] = useCookies(['user']);
    const navigate = useNavigate();
        document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; 
    useEffect(() => {
        navigate('/login')
    }, [])

  return (
    <div>Logout</div>
  )
}

export default Logout