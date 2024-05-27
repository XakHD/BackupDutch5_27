"use client";

import React, { useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';
import Breadcrumb from "@/components/Common/Breadcrumb";
import NewsLatter from "@/components/Newslatter";
import Video from "@/components/Video";
import AboutStyleThree from "@/components/AboutStyleThree";
import WalletButton from "@/components/AboutStyleThree/index"; // Direct import

const AboutPageClient = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      signIn();
    }
  }, [status]);

  if (status === 'loading') {
    return <div>Loading...</div>; // You can add a loading spinner here
  }

  if (status === 'unauthenticated') {
    return null;
  }

  return (
    <>
      <Breadcrumb
        pageName="Dashboard"
        description="Your Wallet is currently empty, this stores your NFT and purchase packages"
      />
      <AboutStyleThree />
      <Video />
      <div className="py-16 md:py-20 lg:py-24">
        <NewsLatter />
      </div>
    </>
  );
};

export default AboutPageClient;