import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import '../../assets/css/header.scss'

const Header = () => {
    return (
        <div className="flex justifyEnd">
            <WalletMultiButton />
        </div>
    )
}

export default Header