import React, { useState } from 'react'
import memesData from '../../memesData'



export default function Form() {
    

    const memeArray = memesData.data.memes;
    
    const [memeImage, setMemeImage] = useState(memeArray[10].url)
    const [topText, setTopText] = useState()
    const [bottomText, setBottomText] = useState()
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        imgSrc: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData.data.memes)

    function loadMeme() {
        let index = Math.floor(Math.random()*100);
        console.log(index);
        setMeme(prev => {
            return {
                ...prev,
                imgSrc: allMemeImages[index].url
            }
        })
    }



    return (
        <>
        <div className='form--el'>
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
        </div>
        <div className='meme'>
            <p className='top-text-image'>{topText}</p>
            <img src={meme.imgSrc} className='meme-image' alt='meme' />
            <p className='bottom-text-image'>{bottomText}</p>
        </div>
        </>
    )
}