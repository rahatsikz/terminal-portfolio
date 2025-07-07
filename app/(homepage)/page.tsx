import React from "react";
import Terminal from "./_components/terminal";
import { EtherealShadow } from "./_components/etheral-shadow";

export default function Homepage() {
  // return <Terminal />;
  return (
    <div className='flex w-full h-screen justify-center items-center'>
      <EtherealShadow
        color='rgb(17, 145, 47)'
        animation={{ scale: 100, speed: 90 }}
        noise={{ opacity: 1, scale: 1.2 }}
        sizing='fill'
      >
        <Terminal />
      </EtherealShadow>
    </div>
  );
}
