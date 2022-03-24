import React from "react"
import domtoimage from 'dom-to-image';


export default function Meme(){
    const [meme,setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/265k.jpg"
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
    

    function downloadImage(e){
    e.preventDefault()
    domtoimage.toJpeg(document.getElementById('meme--image'), { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'dogex-meme';
        link.href = dataUrl;
        link.click();
    });
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
                      <button id="download" onClick={downloadImage}>Download</button>
                </div>
                <div className="meme--image" id ="meme--image">
                    <img src={meme.randomImage} className ="meme--img" id ="meme--img"></img>
                    <h1 className ="meme--text top">{meme.topText}</h1>
                    <h1 className ="meme--text bottom">{meme.bottomText}</h1>
                </div>
        </div>
    )
}