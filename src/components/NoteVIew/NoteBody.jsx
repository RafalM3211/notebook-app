import { useEffect } from "react"

function NoteBody(props){

    return <textarea 
     onChange={(e)=>{props.handleNoteContentChange(e.target.value)}}
     value={props.content}
     className="note-body" 
     placeholder="edit your note">
    </textarea>
}

export default NoteBody