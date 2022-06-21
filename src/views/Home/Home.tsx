import React, { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Player } from '@lottiefiles/react-lottie-player';
import { useMediaQuery } from "react-responsive";
import '../../assets/css/home.scss'

const Home = () => {
    const ismobile = useMediaQuery({
        query: '(max-width: 600px)'
    })
    const { publicKey } = useWallet();
    const [inputValue, setInputValue] = useState("")
    const [gifList, setGifList] = useState<string[]>([])
    const TEST_GIFS = [
        'https://raw.githubusercontent.com/yeshealer/buildspace-solana-react/main/public/test_img/1.png',
        'https://raw.githubusercontent.com/yeshealer/buildspace-solana-react/main/public/test_img/2.png',
        'https://raw.githubusercontent.com/yeshealer/buildspace-solana-react/main/public/test_img/3.jpg',
        'https://raw.githubusercontent.com/yeshealer/buildspace-solana-react/main/public/test_img/4.png'
    ]

    const onInputChange = (event: any) => {
        const { value } = event.target;
        setInputValue(value)
    }
    const sendGif = async () => {
        if (inputValue.length > 0) {
            console.log('Gif link:', inputValue)
            setGifList([...gifList, inputValue])
            setInputValue('')
        } else {
            console.log('Empty input. Try again')
        }
    }
    useEffect(() => {
        if (publicKey) {
            console.log('Fetching GIF list...')
            setGifList(TEST_GIFS);
        }
    }, [publicKey])

    return (
        <div className="flex justifyCenter">
            <div className="page flex justifyCenter alignCenter">
                {publicKey?.toString() ? (
                    <div>
                        <div className="animationCard flexColumn alignCenter m-0 mb-10">
                            <div className="font-30 bold">🖼 GIF Portal</div>
                            <div className="font-20 mt-10 pb-10">View your GIF collection in the metaverse ✨</div>
                        </div>
                        <div className="flex justifyCenter">
                            <form
                                onSubmit={(event) => {
                                    event.preventDefault();
                                    sendGif()
                                }}
                            >
                                <div className="flex alignCenter">
                                    <input type="url" placeholder="Enter gif link!" size={ismobile ? 30 : 70} className="input" style={{ marginTop: '3px' }} value={inputValue} onChange={onInputChange} />
                                    <button className="wallet-adapter-button wallet-adapter-button-trigger m-0 ml-10">Confirm</button>
                                </div>
                            </form>
                        </div>
                        <div className="gif-grid-container mt-10">
                            {gifList.map(gif => (
                                <div className="gif-item" key={gif}>
                                    <img src={gif} alt={gif} className="gif-image" />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="animationCard flexColumn alignCenter">
                        <div className="font-20 bold">Connect your wallet</div>
                        <Player
                            autoplay
                            loop
                            src="https://assets5.lottiefiles.com/packages/lf20_zjihqths.json"
                            style={{ height: '250px', width: '250px' }}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home