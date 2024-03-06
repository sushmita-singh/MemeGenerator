import React, { useState } from 'react'
import memesData from '../../memesData'



export default function Form() {
    

    const memeArray = memesData.data.memes;
    
    const [meme, setMeme] = useState(memeArray[0].url)

    function loadMeme() {
        let index = Math.floor(Math.random()*100);
        console.log(index);
        setMeme(memesData[index].url);
        document.getElementsByClassName('top-text-image');
    }



    return (
        <form className='form--el'>
            <div className='form--data'>
                <div className='top-text-el'>
                    <label htmlFor="top-text">Top text</label>
                    <input id='top-text' type='text' />
                </div>
                <div className='bottom-text-el'>
                    <label htmlFor="bottom-text">Bottom text</label>
                    <input id='bottom-text' type='text' />
                </div>
            </div>
            <button className='submit-btn' onClick={loadMeme}>Get a new meme image 🖼</button>
            <div className='meme'>
                <p className='top-text-image'>Shut up</p>
                <img src={meme} className='meme-image' alt='meme' />
                {console.log(meme)}
                <p className='bottom-text-image'>Take all my money</p>
            </div>
        </form>
    )
}