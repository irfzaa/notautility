import Link from "next/link";
import { FC, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { ConnectWallet } from "components";
import styles from "./index.module.css";

const walletPublicKey = "";

export const HomeView: FC = ({ }) => {
  const { publicKey } = useWallet();
  const [walletToParsePublicKey, setWalletToParsePublicKey] =
    useState<string>(walletPublicKey);

  const onUseWalletClick = () => {
    if (publicKey) {
      setWalletToParsePublicKey(publicKey?.toBase58());
    }
  };

  return (
    <div className="bg-[#ADDDE1] p-8 2xl:px-0">
      <div className={styles.container}>
        <div className="navbar mb-2 shadow-lg bg-[#E9E0D7] text-neutral-content rounded-box flex justify-around">
        <img className="w-10 h-10 object-contain top-px " src='https://i.postimg.cc/fL5M7z5X/cool-cats-gif.png'alt="main_banner"/>
          <div className="flex-1 px-2">
            <div className="text-sm breadcrumbs">
              <ul className="box-decoration-clone text-xs sm:text-xl text-[#34488A] font-bold">
                <li>
                  <Link href="/">
                    <a>NOT A UTILITY</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-none ">
            <WalletMultiButton className="btn btn-ghost bg-[#ADDDE1] shadow-black rounded-box" />
            <ConnectWallet onUseWalletClick={onUseWalletClick} />
          </div>
        </div>

        <div className="text-center pt-2">
          <div className="hero min-h-16 py-4">
            <div className="text-center hero-content">
              <div className="max-w-lg">
              <img className="w-auto h-auto drop-shadow-xl p-[32px]" src='https://i.postimg.cc/fL5M7z5X/cool-cats-gif.png'alt="main_banner"/>
                <h1 className="mb-5 text-5xl font-bold text-[#B33F48]">
                  NOT A UTILITY
                </h1>
                <p className="mb-2">
                  
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* <h1 className="mb-2 pb-8 text-5xl">Available tools :</h1> */}
            <ul className="text-left leading-10">
              <li className="mb-8">
                <Link href="/burnNFT">
                  <div className="text-center p-2 hover:border border-[#B33F48] bg-[#E9E0D7] rounded-2xl">
                    <a className="text-4xl font-bold mb-5 text-[#B33F48]">
                      Burn NFT
                    </a>
                    </div>
                </Link>

              </li>
              <li className="mb-5">
                <Link href="/burnSPL">
                  <div className="text-center p-2 hover:border border-[#B33F48] bg-[#E9E0D7] rounded-2xl">
                    <a className="text-4xl font-bold mb-5 text-[#B33F48]">
                       Burn SPL token
                    </a>
                    </div>
                </Link>

              </li>
              <li className="mb-5">
                <Link href="/closeaccount">
                  <div className="text-center p-2 hover:border border-[#B33F48] bg-[#E9E0D7] rounded-2xl">
                    <a className="text-4xl font-bold mb-5 text-[#B33F48]">
                      Claim Sol Back
                    </a>
                    </div>
                </Link>

              </li>
              <li className="mb-5">
                <Link href="/spltoken">
                  <div className="text-center p-2 hover:border border-[#B33F48] bg-[#E9E0D7] rounded-2xl">
                    <a className="mb-5 text-4xl font-bold text-[#B33F48]">
                       SPL Token Creator
                    </a>
                   
                  </div>
                </Link>
              </li>
              <li className="mb-5">
                <Link href="/createNFTcollection">
                  <div className="text-center p-2 hover:border border-[#B33F48] bg-[#E9E0D7] rounded-2xl">
                    <a className="mb-5 text-4xl font-bold text-[#B33F48]">
                      Create NFT Collection
                    </a>
                    
                  </div>
                </Link>
              </li>
              <li className="mb-5">
                <Link href="/multisender">
                  <div className="text-center p-2 hover:border border-[#B33F48] bg-[#E9E0D7] rounded-2xl">
                    <a className="mb-5 text-4xl font-bold text-[#B33F48]">
                      Mass Sender Token / SOL
                    </a>
                    
                  </div>
                </Link>
              </li>
              <li className="mb-5">
                <Link href="/updateNFTmetadata">
                  <div className="text-center p-2 hover:border border-[#B33F48] bg-[#E9E0D7] rounded-2xl">
                    <a className="mb-5 text-4xl font-bold text-[#B33F48]">
                     Update NFT metadata
                    </a>
                   
                  </div>
                </Link>
              </li>
              <li className="mb-5">
                <Link href="/upload">
                  <div className="text-center p-2 hover:border border-[#B33F48] bg-[#E9E0D7] rounded-2xl">
                    <a className="mb-5 text-4xl font-bold text-[#B33F48]">
                      Upload Image to Arweave
                    </a>
                    
                  </div>
                </Link>
              </li>
              <li className="mb-5">
                <Link href="/suatmm">
                  <div className="text-center p-2 hover:border border-[#B33F48] bg-[#E9E0D7] rounded-2xl">
                    <a className="text-4xl font-bold mb-5 text-[#B33F48]">
                      Send NFT message
                    </a>
                    
                  </div>
                </Link>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};