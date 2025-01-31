import React from "react";
import { useAccount } from "wagmi";

// Internal imports
import SingleCard from "./SingleCard";

const Card = () => {
  const { address } = useAccount();

  const tokenData = [
    { index: 1, name: "Tether USD" },
    { index: 2, name: "BNB" },
    { index: 3, name: "USD Coin" },
    { index: 4, name: "stETH" },
    { index: 5, name: "TRON" },
    { index: 6, name: "Matic Token" },
    { index: 7, name: "SHIBA INU" },
    { index: 8, name: "Uniswap" },
  ];

  return (
    <section className="py-6 sm:py-12 bg-[#1A1A1A] text-gray-100">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">All Listed Tokens For Sale</h2>
          <p className="font-serif text-sm text-gray-400">
            Discover our exclusive tokens available for sale.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {tokenData.map((token) => (
            <SingleCard
              key={token.index}
              index={token.index}
              name={token.name}
              walletAddress={address}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
