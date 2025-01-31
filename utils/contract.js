import { ethers } from "ethers";
import CustomDexABI from "../utils/CustomDex.json";
import CustomTokenABI from "../utils/CustomToken.json";

export const tokenContract = async (address) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const { ethereum } = window;
    if(ethereum) {
        const signer = provider.getSigner();
        const contractReader = new ethers.Contract(
            address,
            CustomTokenABI.abi,
            signer
        );
        return contractReader;
    }
};

export const contract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const {ethereum} = window;
    if(ethereum) {
        const signer = provider.getSigner();
        const contractReader = new ethers.Contract(
            "0x78Ab08dF42320D8BB121e20543F1870193C14a42",
            CustomDexABI.abi,
            signer
        );
        return contractReader;
    }
};