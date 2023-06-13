import React, { useEffect } from "react";
import {useParams} from "react-router-dom";
import EditNote from "./EditNote";
import FavouriteStar from "../FavouriteStar";
import {getIndexById, createEmptyNote} from "../../Utitity/other";

function NoteView(props){
    const noteId=useParams()["*"];
    
    useEffect(()=>{
        if(noteId==="add") {
            const lastNote=props.notes[props.notes.length-1];
            const newNote=createEmptyNote();
            newNote.id=lastNote? lastNote.id+1:1;
            props.setEditedNote(newNote);
        }
        else {
            const note=props.notes[getIndexById(noteId, props.notes)];
            props.setEditedNote(note);
        }
    },[])

    return(
        <div className="note-view">
            <div className="note-view-favourite-container">
                <FavouriteStar setFavourite={props.setFavourite} changeNote={props.setEditedNote} note={props.editedNote} />
            </div>
            <EditNote
             changeNote={props.setEditedNote}
             note={props.editedNote} 
            />
                
        </div>
    )
}

export default NoteView