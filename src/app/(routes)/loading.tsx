import React from 'react';

function LoadingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="border rounded p-3 my-1">
        <h1 className="tertiary__font italic text-3xl">Loading...</h1>
      </div>
    </div>
  );
}

export default LoadingPage;
