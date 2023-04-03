import Link from "next/link";
import { FC, useState } from "react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { ConnectWallet } from "components";
import styles from "./index.module.css";

import { CreateTokenButton } from '../../utils/CreateTokenButton';
import { MetaplexFileTag, toMetaplexFileFromBrowser } from "@metaplex-foundation/js";

const walletPublicKey = "";

export const SPLTokenView: FC = ({ }) => {
  const { connection } = useConnection();
  const wallet = useWallet();
  const [walletToParsePublicKey, setWalletToParsePublicKey] =
    useState<string>(walletPublicKey);
  const { publicKey } = useWallet();

  const onUseWalletClick = () => {
    if (publicKey) {
      setWalletToParsePublicKey(publicKey?.toBase58());
    }
  };

  const [quantity, setQuantity] = useState(0);
  const [decimals, setDecimals] = useState(9);
  const [tokenName, setTokenName] = useState('')
  const [symbol, setSymbol] = useState('')
  const [metadataURL, setMetadataURL] = useState('')
  const [isChecked, setIsChecked] = useState(false);
  const [metadataMethod, setMetadataMethod] = useState('url')
  const [tokenDescription, setTokenDescription] = useState('')
  const [file, setFile] = useState<Readonly<{
    buffer: Buffer;
    fileName: string;
    displayName: string;
    uniqueName: string;
    contentType: string | null;
    extension: string | null;
    tags: MetaplexFileTag[];
  }>>()
  const [fileName, setFileName] = useState('')

  const handleFileChange = async (event: any) => {
    const browserFile = event.target.files[0];
    const _file = await toMetaplexFileFromBrowser(browserFile);
    setFile(_file);
    setFileName(_file.fileName)
  }

  return (
    <div className="bg-[#ADDDE1] p-8 2xl:px-00">
      <div className={styles.container}>
        <div className="navbar mb-2 shadow-lg bg-[#E9E0D7] text-neutral-content rounded-box flex justify-around">
        <img className="w-10 h-10 object-contain top-px " src='https://i.postimg.cc/fL5M7z5X/cool-cats-gif.png'alt="main_banner"/>
          <div className="flex-1 px-2">
            <div className="text-sm breadcrumbs">
              <ul className="text-xs sm:text-xl text-[#34488A] font-bold">
                <li>
                  <Link href="/">
                    <a>NOT A UTILITY</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-none">
            <WalletMultiButton className="btn btn-ghost" />
            <ConnectWallet onUseWalletClick={onUseWalletClick} />
          </div>
        </div>

        <div className="text-center pt-2">
          <div className="hero min-h-16 p-0 pt-10">
            <div className="text-center hero-content w-full">
              <div className="w-full">
                <h1 className="mb-5 text-5xl font-bold text-[#B33F48]">
                  Create SPL token
                </h1>

                <div className="md:w-[600px] mx-auto">
                  <div className="md:w-[480px] flex flex-col m-auto">

                    <div className="my-2 uppercase underline flex font-bold text-2xl text-[#B33F48]">Token infos</div>
                    <label className="underline flex font-bold text-[#B33F48]">Token Name</label>
                    <input className="my-[1%] md:w-[480px] text-left text-black pl-1 border-2 rounded-2xl border-black text-[#B33F48]"
                      type="text"
                      placeholder="Token Name"
                      onChange={(e) => setTokenName(e.target.value)}
                    />

                    <label className="underline flex font-bold text-[#B33F48]">Symbol</label>
                    <input className="my-[1%] md:w-[480px] text-left text-black pl-1 border-2 rounded-2xl border-black"
                      type="text"
                      placeholder="Symbol"
                      onChange={(e) => setSymbol(e.target.value)}
                    />

                    <label className="underline flex font-bold text-[#B33F48]">Number of tokens to mint</label>
                    <input className="my-[1%] md:w-[480px] text-left text-black pl-1 border-2 rounded-2xl border-black"
                      type="number"
                      min="0"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                    />

                    <label className="underline flex font-bold text-[#B33F48]">Number of decimals</label>
                    <input className="my-[1%] md:w-[480px] text-left text-black pl-1 border-2 rounded-2xl border-black "
                      type="number"
                      min="0"
                      value={decimals}
                      onChange={(e) => setDecimals(parseInt(e.target.value))}
                    />


                    <div className="mt-5 mb-2 uppercase underline flex font-bold text-2xl text-[#B33F48]">Metadatas</div>
                    <div className="flex justify-center">
                      {metadataMethod == 'url' ?
                        <button className="text-white mx-2  font-semibold bg-[#343e4f] md:w-[280px] rounded-full shadow-xl border text-[#B33F48]">Use an existing medatata URL</button>
                        : <button className="text-white mx-2  font-semibold bg-[#667182] md:w-[280px] rounded-full shadow-xl border" onClick={() => { setMetadataMethod('url'), setTokenDescription('') }}>Use an existing medatata URL</button>
                      }
                      {metadataMethod == 'upload' ?
                        <button className="text-white mx-2 font-semibold bg-[#343e4f] md:w-[200px] rounded-full shadow-xl border text-[#B33F48]">Create the metadata</button>
                        : <button className="text-white mx-2 font-semibold bg-[#667182] md:w-[200px] rounded-full shadow-xl border text-[#B33F48]" onClick={() => { setMetadataMethod('upload'), setMetadataURL(''), setFile(undefined), setFileName('') }}>Create the metadata</button>}
                    </div>

                    {metadataMethod == 'url' &&
                      <div>
                        <div>
                          <label className="underline mt-2 flex font-bold text-[#B33F48]">Metadata Url</label>
                          <input className="my-[1%] md:w-[480px] text-left text-black pl-1 border-2 rounded-2xl border-black"
                            type="text"
                            placeholder="Metadata Url"
                            onChange={(e) => setMetadataURL(e.target.value)}
                          />
                        </div>

                      </div>
                    }

                    {metadataMethod == 'upload' &&
                      <div>
                        <div>
                          <label className="underline mt-2 flex font-bold text-[#B33F48]">Description</label>
                          <input className="my-[1%] md:w-[480px] text-left text-black pl-1 border-2 rounded-2xl border-black"
                            type="text"
                            placeholder="Description of the token/project"
                            onChange={(e) => setTokenDescription(e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="underline mt-2 flex font-bold text-[#B33F48]">Image</label>
                          <label htmlFor="file" className="text-white font-semibold rounded-full shadow-xl bg-[#414e63] border px-2 py-1 h-[40px] uppercase hover:bg-[#2C3B52] hover:cursor-pointer text-[#B33F48]">
                            Upload image
                            <input
                              id="file"
                              type="file"
                              name="file"
                              accept="image/*, video/*"
                              onChange={handleFileChange}
                              style={{ display: 'none' }} />
                          </label>
                          {fileName != '' && <div className="mt-2" >{fileName}</div>}
                        </div>
                      </div>
                    }

                    <div className="mt-5 mb-2 uppercase underline flex font-bold text-2xl text-[#B33F48]">Authority</div>
                    <div className="flex justify-center mb-4">
                      <label className="mx-2 text-[#B33F48]">Enable freeze authority</label>
                      <input className="mx-2"
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(!isChecked)}
                      />
                    </div>
                  </div>
                  <CreateTokenButton connection={connection} publicKey={publicKey} wallet={wallet} quantity={quantity} decimals={decimals} isChecked={isChecked} tokenName={tokenName} symbol={symbol} metadataURL={metadataURL} description={tokenDescription} file={file} metadataMethod={metadataMethod}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};