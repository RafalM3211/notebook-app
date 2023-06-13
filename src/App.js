import './App.css';
import Header from './components/Header';
import HomeView from './components/HomeView';
import NoteView from './components/NoteVIew/NoteView';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import {getNotes} from './Utitity/RestFunctions';
import {updateObject, getIndexById} from './Utitity/other';

import {setFavourite, saveNote, setName, setDescription, deleteNote} from './Utitity/EditFunctions'

const emptyNote={
  id: 0,
  title: "",
  description: "",
  content: "",
  isFavourite: false,
  isEdited: false
}
function App() {
  const [notes, setNotes]=useState([]);
  const [editedNote, setEditedNote]=useState(emptyNote);
  const [isLoading, setLoading]=useState(true);

  function cancelEdit(){
    const index=getIndexById(editedNote.id, notes);
    const originalContent=notes[index].content;
    const newEditedNote=updateObject(editedNote, {content: originalContent, isEdited: false});
    setEditedNote(newEditedNote)
  }

  function deleteNoteShortened(id){
    deleteNote(id, notes, setNotes);
  }

  function setNameShortened(id, value){
    const newEditedNote=updateObject(editedNote, {title: value});
    setEditedNote(newEditedNote);
    setName(newEditedNote, notes, setNotes);
  }

  function setDescriptionShortened(value){
    const newEditedNote=updateObject(editedNote, {description: value});
    setEditedNote(newEditedNote);
    setDescription(newEditedNote, notes, setNotes);
  }

  function saveNoteShortened(editedNote){
    saveNote(editedNote, notes, setNotes);
  }

  function setFavouriteShortened(id, value){
    setFavourite(id, value, notes, setNotes);
    const newEditedNote=updateObject(editedNote, {isFavourite: value});
    setEditedNote(newEditedNote);
  }

  useEffect(()=>{
      setLoading(true)
      getNotes().then(res=>{
          setNotes(res);
          setLoading(false);
      });
  },[]);

  return (
    <Router>
      <div className="App">
        <Header
         setDescription={setDescriptionShortened}
         setName={setNameShortened} 
         saveNote={saveNoteShortened} 
         cancelEdit={cancelEdit}
         editedNote={editedNote}
        />
        <main>
          <Routes>
           <Route path='/notebook-app/note/*' element={
            <NoteView
             setEditedNote={setEditedNote}
             editedNote={editedNote}
             setFavourite={setFavouriteShortened}
             notes={notes} />
            }>
           </Route>
           <Route path='/notebook-app/' element={
            <HomeView 
            deleteNote={deleteNoteShortened}
            setFavourite={setFavouriteShortened} 
            notes={notes} 
            isLoading={isLoading}/>}>
           </Route>
           <Route path='/' element={
            <Navigate to='/notebook-app/' replace={true} />
           }></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
