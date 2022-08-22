import React, {  useState } from "react";
import {Icon} from "@iconify/react"
import NoteInfo from "./NoteInfo";

function NoteControl(props){
    const [isInfoOpen, setInfoOpen]=useState(false);
    const {id, title, description, isEdited}=props.editedNote;

    return(
    <>
        <div className="note-info">
            <div className="description-icon">
                <Icon onClick={()=>{setInfoOpen(true)}}  icon="fluent:clipboard-note-20-regular"/>
                {isInfoOpen? 
                 <NoteInfo
                  setDescription={props.setDescription}
                  description={description} 
                  closeInfo={()=>{setInfoOpen(false)}}
                  />:
                <></>}
            </div>
            <input value={title} onChange={(e)=>{props.setName(id, e.target.value)}} className="note-name" type="text"/>
        </div>
        <div className={"control-buttons"} >
            <button 
             disabled={!isEdited}
             onClick={()=>{props.saveNote(props.editedNote)}}
             className="save-button">
                &#10004;
            </button>
            <button
             disabled={!isEdited}
             onClick={props.cancelEdit} 
             className="cancel-button">
                &#10007;
            </button>
        </div>
    </>
    )
}

export default NoteControl