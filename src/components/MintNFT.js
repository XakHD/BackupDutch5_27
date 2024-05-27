"use client";

import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import abi from '../contractABI';
import { toast } from 'react-toastify';

const contractAddress = 'YOUR_POLYGON_CONTRACT_ADDRESS';

function MintNFT({ provider, signer }) {
  const [contract, setContract] = useState(null);
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    if (provider && signer) {
      const contract = new ethers.Contract(contractAddress, abi, signer);
      setContract(contract);
      loadOwnedNFTs(signer, contract);
    }
  }, [provider, signer]);

  async function handlePurchase() {
    try {
      console.log('Handling purchase...');
      if (!signer) {
        toast.error('Please connect your wallet.');
        return;
      }

      await mintNFT();
      toast.success('NFT successfully minted and added to your wallet!');
    } catch (error) {
      console.error('Error during purchase or minting:', error);
      toast.error('There was an error processing your purchase.');
    }
  }

  async function mintNFT() {
    if (!contract) return;
    try {
      console.log('Minting NFT...');
      const address = await signer.getAddress();
      console.log(`Address: ${address}`);
      const tx = await contract.mint(1);
      console.log('Transaction sent:', tx);
      await tx.wait();
      console.log('Transaction confirmed');
      loadOwnedNFTs(signer, contract);
    } catch (error) {
      console.error('Error minting NFT:', error);
      toast.error('Error minting NFT');
    }
  }

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
      <h1>Mint NFTs</h1>
      <button onClick={handlePurchase}>Mint NFT</button>
      <h2>Your NFTs</h2>
      <div>
        {nfts.map((nft, index) => (
          <img key={index} src={nft} alt="NFT" style={{ width: 100, height: 100, margin: 10 }} />
        ))}
      </div>
    </div>
  );
}

export default MintNFT;