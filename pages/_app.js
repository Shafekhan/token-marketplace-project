import "../styles/globals.css";
import merge from "lodash/merge";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { sepolia } from "wagmi/chains";

const {chains, provider} = configureChains(
  [sepolia],
  [
    infuraProvider({
      apiKey: "f0267a8d7d5642caa8735db53507eefd",
      priority: 1,
    }),
    jsonRpcProvider({
      rpc: () => ({
        http: [`https://sepolia.infura.io/v3/66ddc88ad64b44dc8057d17c8ca6d6d4`],
      }),
    }),
  ]
);

const {connectors} = getDefaultWallets({
  appName: "Custom Dex",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const myTheme = merge(midnightTheme(), {
  colors: {
    accentColor: "#18181b",
    accentColorForeground: "#fff",
  },
});

function myApp({Component, pageProps}) {
  return (
    <WagmiConfig client = {wagmiClient}>
      <RainbowKitProvider chains = {chains} theme={myTheme}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default myApp;
