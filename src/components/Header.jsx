import React from "react";
import {Link, Routes, Route} from "react-router-dom";
import NoteControl from "./NoteControl";
import {Icon} from "@iconify/react";
import Logo from "./Logo"

function Header(props){

    return(
        <header className="App-header">
            <Routes>
                <Route path='/notebook-app/' element={<Logo />} />
                <Route path='/notebook-app/note/*' element={
                    <>
                        <Link data-testid="main-return-button" className="return-button" to={'/notebook-app/'}><Icon icon="uiw:caret-left" /></Link>
                        <NoteControl 
                        setDescription={props.setDescription}
                        setName={props.setName}
                        saveNote={props.saveNote} 
                        cancelEdit={props.cancelEdit}
                        editedNote={props.editedNote} 
                        />
                    </>
                }/>
            </Routes>
        </header>
    )
    
}

export default Header