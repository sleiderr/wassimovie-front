import axios from 'axios';
import { useRouter } from 'next/navigation';
import { JSX, useEffect, useState } from 'react';

const withAuth = (WrappedComponent) => {
  return () => {
    const router = useRouter();
    const [user, setUser] = useState({})
    // Perform the authentication check here using the JWT token

    useEffect(() => {
      // Check if the user is authenticated
      axios
        .get(`${process.env.backURL}/user/me`,{ headers: {Authorization: `Bearer ${localStorage.getItem("jwtToken")}`}})
        .then(setUser)
        .catch(() => {
          router.replace('/login')
        })
      // If the user is not authenticated, redirect to the login page
    }, []);

    // Render the wrapped component if authenticated, or null if not
    return user ? <WrappedComponent/> : null;
  };
};

export default withAuth;