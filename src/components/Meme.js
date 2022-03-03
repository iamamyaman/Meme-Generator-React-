import React from "react"

export default function Meme(){
    return(
        <div className="meme--box">
                <div class ="input--area">
                    <input 
                      type ="text"
                      placeholder="Top Text" 
                      name ="toptext" 
                      className="top--text"
                      />
                    <input 
                      type ="text"
                      placeholder="Bottom Text" 
                      name ="bottomtext"
                      id ="bottom--text"
                      />
                    <button 
                      id ="submit" 
                      type ="submit">
                          Change image
                      </button>
                </div>
                <div className="meme--image">
                    <img src="http://i.imgflip.com/1bij.jpg"></img>
                </div>
        </div>
    )
}