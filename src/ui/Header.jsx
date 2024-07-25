import React from 'react'
import useUser from '../features/Auth/useUser';

const Header = () => {
    const { data, isPending, isError, asyn } = useUser();
  return <div className="bg-secondary-0">Header</div>;
}

export default Header