import React, { useEffect, useState, Suspense } from "react";
import NotesList from "./NotesList";
import {Link} from "react-router-dom"

function HomeView(props){
    return(
        <div className="home-view">
            <h2 className="home-header">your notes</h2>
            <div className="notes-container">
            <NotesList 
             deleteNote={props.deleteNote}
             /* setEditedNote={props.setEditedNote}  */
             setFavourite={props.setFavourite} 
             notes={props.notes} 
             isLoading={props.isLoading} />
            <div className="note add-note">
                <Link className="note-link" to="/note/add"><p className="plus-icon">+</p></Link>
            </div>
        </div>
            
        </div>
    )
    
}

export default HomeView