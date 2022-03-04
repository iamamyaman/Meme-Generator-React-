import React from "react"

export default function Meme(){
    const [meme,setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    });

    const [allMemes,setAllMemes] = React.useState([]);
    
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    },[])
    

    function getRandomImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        console.log(url)
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage:url
            }))

    }

    function handleChange(event){
         const{name,value} = event.target
         setMeme(prevMeme=>
             ({
                 ...prevMeme,
                 [name]:value
            })
         )
    }


    return(
        <div className="meme--box">
                <div class ="input--area">
                    <input 
                      type ="text"
                      placeholder="Top Text" 
                      name ="topText" 
                      className="top--text"
                      value={meme.topText}
                      onChange={handleChange}
                      />

                    <input 
                      type ="text"
                      placeholder="Bottom Text" 
                      name ="bottomText"
                      className ="bottom--text"
                      value={meme.bottomText}
                      onChange={handleChange}
                      />

                    <button 
                      onClick={getRandomImage}
                      id ="submit" 
                      type ="submit">
                          Change image
                      </button>
                </div>
                <div className="meme--image">
                    <img src={meme.randomImage} className ="meme--image"></img>
                    <h1 className ="meme--text top">{meme.topText}</h1>
                    <h1 className ="meme--text bottom">{meme.bottomText}</h1>
                </div>
        </div>
    )
}