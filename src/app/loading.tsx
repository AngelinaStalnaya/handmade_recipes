'use client';

import { CircularProgress } from "@heroui/react";

const LoadingPage = () => {

  return (
    <div className='flex flex-col items-center justify-center'>
      <CircularProgress aria-label="Loading..." color="secondary" />
      <div className='text-3xl font-bold text-secondary'>Loading...</div>
    </div>
  )
}

export default LoadingPage;
