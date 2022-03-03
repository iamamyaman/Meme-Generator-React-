import React from "react"

export default function Meme(){
    return(
        <div className="meme--box">
            <div className="meme--text">
                <input type ="text" placeholder="Top Text" name ="toptext" id ="top--text"></input>
                <input type ="text" placeholder="Bottom Text" name ="bottomtext" id ="bottom--text"></input>
                <button id ="submit" type ="submit">Change image</button>
            </div>
            <div className="meme--image"></div>
        </div>
    )
}