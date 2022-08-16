import React, {useState} from "react";

function NoteInfo(props){

    const [descriptionContent, setDescriptionContent]=useState(props.description);

    function handleDescriptionChange(e){
        const value=e.target.value;
        setDescriptionContent(value);
    }


    function handleExit(){
        props.closeInfo();
        props.setDescription(descriptionContent);
    }

    return (
        <>
            <div onClick={handleExit} className="overlay"></div>
            <div className="note-info-container">
                <button onClick={handleExit} className="close-button">&#10006;</button>
                <label>
                    <p className="info-label">Description</p>
                    <textarea 
                     value={descriptionContent}
                     onChange={handleDescriptionChange}
                     placeholder="Edit note description"
                     className="description-text info-input">
                    </textarea>
                </label>
            </div>
        </>
    )
}

export default NoteInfo