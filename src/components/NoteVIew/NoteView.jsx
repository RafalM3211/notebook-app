import React, { useEffect } from "react";
import {Routes, Route, useRouteMatch, useParams, useLocation} from "react-router-dom";
import EditNote from "./EditNote";
import FavouriteStar from "../FavouriteStar";
import {getIndexById} from "../../Utitity/other";

function NoteView(props){
    const noteId=useParams()["*"];
    
    useEffect(()=>{
        if(noteId==="add") {
            const lastNote=props.notes[props.notes.length-1];
            const newNote={};
            for(const key of Object.keys(lastNote)){
                newNote[key]="";
            }
            newNote.id=lastNote.id+1;
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