import React from 'react'
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div className='grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]'>
      <div className='bg-secondary-0'>appHeader</div>
      <div className='bg-secondary-0 row-start-1 col-span-2'>appSideBar</div>
      <div  className='bg-secondary-200 overflow-y-auto'><Outlet/></div>
    </div>
  );
}

export default AppLayout