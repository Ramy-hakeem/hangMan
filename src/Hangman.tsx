import { useEffect } from 'react'
import useStore from "./useStore"

function Hangman() {
    const { bodyParts } = useStore()
    useEffect(() => {
        console.log(bodyParts)
    }, bodyParts)
    return (
        <div className='hangman'>
            <div className='body'>
                <div className='stand1' ></div>
                <div className='stand2' ></div>
                <div className='stand3' ></div>
                <div className='stand4' ></div>
                <div className='head' style={{ visibility: bodyParts[0] }}></div>
                <div className='back' style={{ visibility: bodyParts[1] }}></div>
                <div className='hand1' style={{ visibility: bodyParts[2] }}></div>
                <div className='hand2' style={{ visibility: bodyParts[3] }}></div>
                <div className='leg1' style={{ visibility: bodyParts[4] }}></div>
                <div className='leg2' style={{ visibility: bodyParts[5] }}></div>

            </div>
        </div >
    )
}

export default Hangman