import React from "react";
import {Link} from "react-router-dom";
import FavouriteStar from "./FavouriteStar";
import {Icon} from "@iconify/react";

//todo: przekaz id i po kliknieciu dopiero pobierz kontent

function Note(props){
    const {id, title, description}=props.noteData;

    function shortenDescription(text, threshold){
        if(text.length>threshold){
            text=text.slice(0, threshold);
            text+="...";
        }
        return text
    }

    return(
            <div className="note">
                <Link  className="note-link" to={`/note/${id}`}>
                <p data-testid="name" className="note-name">{title}</p>
                <p className="note-description">{shortenDescription(description, 70)}</p>
                </Link>
                <div onClick={()=>{props.deleteNote(id)}} className="delete">
                    <Icon icon="fa6-regular:trash-can" />
                </div>
                <FavouriteStar setFavourite={props.setFavourite} note={props.noteData} />
            </div>
    )
}

export default Note