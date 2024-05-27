"use client";

import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import abi from '../contractABI';
import { toast } from 'react-toastify';

const contractAddress = 'YOUR_POLYGON_CONTRACT_ADDRESS'; // Replace with your Polygon contract address

function Dashboard({ provider, signer }) {
  const [contract, setContract] = useState(null);
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    if (provider && signer) {
      const contract = new ethers.Contract(contractAddress, abi, signer);
      setContract(contract);
      loadOwnedNFTs(signer, contract);
    }
  }, [provider, signer]);

  async function loadOwnedNFTs(signer, contract) {
    if (!signer || !contract) return;
    try {
      console.log('Loading owned NFTs...');
      const address = await signer.getAddress();
      const balance = await contract.balanceOf(address);
      let ownedNfts = [];
      for (let i = 0; i < balance; i++) {
        const tokenId = await contract.tokenOfOwnerByIndex(address, i);
        const tokenURI = await contract.tokenURI(tokenId);
        const metadata = await fetch(tokenURI).then((response) => response.json());
        ownedNfts.push(metadata.image);
      }
      console.log('Owned NFTs:', ownedNfts);
      setNfts(ownedNfts);
    } catch (error) {
      console.error('Error loading owned NFTs:', error);
    }
  }

  return (
    <div>
      <h1>Your NFTs</h1>
      {nfts.length === 0 ? (
        <p>Your Wallet is currently empty.</p>
      ) : (
        <div>
          {nfts.map((nft, index) => (
            <img key={index} src={nft} alt="NFT" style={{ width: 100, height: 100, margin: 10 }} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;