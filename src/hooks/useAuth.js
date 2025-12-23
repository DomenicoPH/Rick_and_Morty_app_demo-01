import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useAuth() {

    const navigate = useNavigate()
    const [access, setAccess] = useState(false);
    const [demoUser, setDemoUser] = useState(null)

    const DEMO_CREDENTIALS = {
      username: 'rick@morty.com',
      password: 'earth-c137',
    };

    const useDemoCredentials = () => { setDemoUser(DEMO_CREDENTIALS) };

    function login(userData){
       if(userData.username !== DEMO_CREDENTIALS.username) return 'Invalid username'
       if(userData.password !== DEMO_CREDENTIALS.password) return 'Invalid password'
       setAccess(true);
       navigate('/home');
       return null;
    };

    function logout(){
       setAccess(false);
       navigate('/')
    };

    // Automatic logout
    useEffect(() => {
       !access && navigate('/');
    }, [access]);

    return {
        login,
        logout,
        demoUser,
        useDemoCredentials,
        DEMO_CREDENTIALS
    }
}
