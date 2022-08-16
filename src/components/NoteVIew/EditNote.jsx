import React, { useEffect, useState } from "react";
import NoteBody from "./NoteBody";
import { updateObject } from "../../Utitity/other";

function EditNote(props){

    function handleNoteContentChange(newContent){
        const updatedNote=updateObject(props.note, {content: newContent, isEdited: true});
        props.changeNote(updatedNote);
    }

    return(
    <div><NoteBody content={props.note.content} handleNoteContentChange={handleNoteContentChange} /></div>
    )
}

export default EditNote