import React from "react";
import Note from "./Note";
import {useState, useEffect} from "react";
import NoteSkeleton from "./NoteSkeleton";
import {getIndexById} from "../Utitity/other"

function sortNotes(notes){
    const sortedNotes=[...notes];
    for(const note of notes){
        if(note.isFavourite) {
            const index=getIndexById(note.id, notes);
            sortedNotes.splice(index, 1);
            sortedNotes.unshift(note);
        }
    }
    return sortedNotes
}

function NotesList(props){
    const notes=sortNotes(props.notes);

    return <>
        {props.isLoading?
        <><NoteSkeleton />
        <NoteSkeleton />
        <NoteSkeleton /></>
        :notes.map(note=>{
            return <Note 
            deleteNote={props.deleteNote}
            setEditedNote={props.setEditedNote} 
            setFavourite={props.setFavourite} 
            key={note.id} 
            noteData={note} />
        })}
    </>
}


export default NotesList