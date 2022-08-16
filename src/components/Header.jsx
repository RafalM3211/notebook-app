import React from "react";
import {Link, Routes, Route} from "react-router-dom";
import NoteControl from "./NoteControl";
import {Icon} from "@iconify/react";
import Logo from "./Logo"

function Header(props){

    return(
        <header className="App-header">
            <Link className="return-button" to={'/'}><Icon icon="uiw:caret-left" /></Link>
            <Routes>
                <Route path='/' element={<Logo />} />
                <Route path='note/*' element={
                    <NoteControl 
                     setDescription={props.setDescription}
                     setName={props.setName}
                     saveNote={props.saveNote} 
                     cancelEdit={props.cancelEdit}
                     editedNote={props.editedNote} 
                    />
                }/>
            </Routes>
        </header>
    )
    
}

export default Header