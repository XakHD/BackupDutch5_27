"use client";

import React, { useState } from 'react';
import Breadcrumb from "@/components/Common/Breadcrumb";
import NewsLatter from "@/components/Newslatter";
import Video from "@/components/Video";
import { ethers } from 'ethers';
import WalletButton from "@/components/AboutStyleThree/index";
import Dashboard from "@/components/Dashboard";

const AboutPageClient: React.FC = () => {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner | null>(null);

  const handleProviderChange = (newProvider: ethers.providers.Web3Provider | null, newSigner: ethers.providers.JsonRpcSigner | null) => {
    setProvider(newProvider);
    setSigner(newSigner);
  };

  return (
    <>
      <Breadcrumb
        pageName="Dashboard"
        description="Your Wallet is currently empty, this stores your nft and purchase packages"
      />
      <WalletButton setProvider={handleProviderChange} /> {/* Pass setProvider */}
      <Video />
      <div className="py-16 md:py-20 lg:py-24">
        <NewsLatter />
      </div>
      {provider && signer && <Dashboard provider={provider} signer={signer} />}
    </>
  );
};

export default AboutPageClient;