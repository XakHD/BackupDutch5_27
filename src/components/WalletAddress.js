"use client";

import React, { useState, useEffect } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "Web3Modal Example",
      rpc: {
        137: "https://polygon-rpc.com",
      },
      chainId: 137,
    }
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        137: "https://polygon-rpc.com",
      },
      chainId: 137,
    }
  },
  metamask: {
    package: true,
  },
};

function WalletAddress() {
  const [address, setAddress] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      console.log('MetaMask is installed');
    } else {
      console.error('MetaMask not detected');
      alert('Please install MetaMask to use this application.');
    }
  }, []);

  async function connectWallet() {
    try {
      let web3Modal = new Web3Modal({
        cacheProvider: true,
        providerOptions,
      });
      const web3ModalInstance = await web3Modal.connect();
      const web3ModalProvider = new ethers.providers.Web3Provider(web3ModalInstance);

      // Get the signer and address
      const signer = web3ModalProvider.getSigner();
      const userAddress = await signer.getAddress();
      setAddress(userAddress);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
      {address && <p>Your Polygon Address: {address}</p>}
    </div>
  );
}

export default WalletAddress;
