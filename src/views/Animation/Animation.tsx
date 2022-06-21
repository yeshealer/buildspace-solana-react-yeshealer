import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import { useMediaQuery } from "react-responsive";
import '../../assets/css/animation.scss'

const Animation = () => {
    const ismobile = useMediaQuery({ query: '(max-width: 600px)' })
    return (
        <div>
            <div className="animation_1">
                <Player
                    autoplay
                    loop
                    src="https://assets1.lottiefiles.com/packages/lf20_mcsambjj.json"
                    style={ismobile ? { height: '100px', width: '100px' } : { height: '200px', width: '200px' }}
                />
            </div>
            <div className="animation_2">
                <Player
                    autoplay
                    loop
                    src="https://assets4.lottiefiles.com/packages/lf20_lazb726c.json"
                    style={ismobile ? { height: '100px', width: '100px' } : { height: '180px', width: '180px' }}
                />
            </div>
        </div>
    )
}

export default Animation