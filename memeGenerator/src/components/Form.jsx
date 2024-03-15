import React, { useState } from 'react'



export default function Form() {
    
    /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        imgSrc: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState()

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    function loadMeme() {
        let index = Math.floor(Math.random()*100);
        setMeme(prev => {
            return {
                ...prev,
                imgSrc: allMemes[index].url
            }
        })
    }

    function handleClick(event) {
        const {name, value} = event.target
        console.log(meme)
        setMeme(prevValue => ({
            ...prevValue,
            [name]: value
        }))
        document.getElementById('topText').innerHTML = meme.topText
        document.getElementById('bottomText').innerHTML = meme.bottomText
    }

    return (
        <>
        <div className='form--el'>
            <div className='form--data'>
                <div className='top-text-el'>
                    <label htmlFor="top-text">Top text</label>
                    <input 
                        id='top-text' 
                        type='text' 
                        name='topText'
                        value={meme.topText}
                        onChange={handleClick}
                    />
                </div>
                <div className='bottom-text-el'>
                    <label htmlFor="bottom-text">Bottom text</label>
                    <input 
                        id='bottom-text' 
                        type='text' 
                        name='bottomText'
                        value={meme.bottomText}
                        onChange={handleClick}
                    />
                </div>
            </div>
            <button className='submit-btn' onClick={loadMeme}>Get a new meme image 🖼</button>
        </div>
        <div className='meme'>
            <p className='top-text-image' id='topText'>{meme.topText}</p>
            <img src={meme.imgSrc} className='meme-image' alt='meme' />
            <p className='bottom-text-image' id='bottomText'>{meme.bottomText}</p>
        </div>
        </>
    )
}