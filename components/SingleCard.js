import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import toast from "react-hot-toast";

// Internal imports
import { getTokenAddress, getTokenBalance } from "../utils/context";
import { ClipboardIcon, ClipboardCheckIcon } from "@heroicons/react/outline";

const SingleCard = ({ index, name, walletAddress }) => {
  const [balance, setBalance] = useState("-");
  const [tokenAddress, setTokenAddress] = useState("");
  const [copyIcon, setCopyIcon] = useState(ClipboardIcon);

  const notifyError = (msg) => toast.error(msg, { duration: 6000 });
  const notifySuccess = (msg) => toast.success(msg, { duration: 6000 });

  useEffect(() => {
    if (name && walletAddress) {
      fetchTokenData();
    } else {
      setBalance("-");
    }
  }, [name, walletAddress]);

  const fetchTokenData = async () => {
    try {
      const bal = await getTokenBalance(name, walletAddress);
      const formattedBalance = ethers.utils.formatUnits(bal.toString(), 18);
      setBalance(formattedBalance);

      const address = await getTokenAddress(name);
      setTokenAddress(address);
    } catch (error) {
      notifyError("Failed to fetch token data. Please try again.");
    }
  };

  const handleCopyAddress = () => {
    if (tokenAddress) {
      navigator.clipboard.writeText(tokenAddress);
      setCopyIcon(ClipboardCheckIcon);
      notifySuccess("Token address copied to clipboard!");
    } else {
      notifyError("Token address is not available.");
    }
  };

  return (
    <article className="flex flex-col bg-[#212429] rounded-lg shadow-md">
      <img
        alt={`${name} Token`}
        className="object-cover w-full h-62 bg-gray-500 rounded-t-lg"
        src={`img/${index}.png`}
        onError={(e) => (e.target.src = "img/default.png")}
      />
      <div className="flex flex-col flex-1 p-6">
        <p className="text-xs tracking-wide uppercase hover:underline text-[#7765F3]">
          {name} 10M supply
        </p>
        <h3 className="flex-1 py-2 text-lg font-semibold">
          Get {name} token, limited supply available
        </h3>

        <div className="flex mx-2 pt-4">
          <div className="flex items-center bg-zinc-900 text-zinc-300 w-fit p-2 px-3 rounded-l-lg">
            <p className="text-sm">{name}</p>
            <p className="bg-zinc-800 p-0.5 px-3 pl-3 rounded-lg text-zinc-100">
              {balance}
            </p>
          </div>
          <div
            className="flex items-center p-2 px-2 bg-[#7765F3] rounded-r-lg cursor-pointer"
            onClick={handleCopyAddress}
          >
            <copyIcon className="h-6" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleCard;
