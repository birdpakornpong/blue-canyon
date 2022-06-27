import React from "react";
import ButtonHoverComponent from "./ButtonCustoms/ButtonHoverComponent";
import "./ConnectMetamark.css";
import { ethers } from "ethers";
import { useState, useEffect } from "react";

export default function ConnectMetamark() {
  const [provider, setProvider] = useState(undefined);
  const [signer, setSigner] = useState(undefined);
  const [signerAddress, setSignerAddress] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const provider = await new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);
    };

    init();
  }, []);

  const getSigner = async (provider) => {
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

    signer.getAddress().then((address) => {
      setSignerAddress(address);
    });

    return signer;
  };

  const connect = () => {
    getSigner(provider).then((signer) => {
      setSigner(signer);
    });
  };
  return (
    <article>
      <ButtonHoverComponent
        slide="up"
        message="connect metamark"
        onClick={connect}
      />
      <p>{signerAddress}</p>
    </article>
  );
}
