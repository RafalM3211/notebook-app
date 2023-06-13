import {patchFavourite, sendNote, sendDeletion} from "./RestFunctions";
import {getNoteById, getIndexById} from "./other"


function prepareNoteForSend(note){
    const preparedNote={...note};
    delete preparedNote.isEdited;
    return preparedNote;
}

function updateNotes(id, value, notes, setNotesState, key){
    const index=getIndexById(id, notes);
    const updatedNotes=[...notes];
    const targetNote=updatedNotes[index];
    targetNote[key]=value;
    targetNote.isEdited=false;
    updatedNotes.splice(index, 1, targetNote);
    setNotesState(updatedNotes)
}

function checkIfNoteIsNew(id, notes){
    if(!getIndexById(id, notes)) return true
    return false
}



function addNote(note, notes, setNotesState){
    const updatedNotes=[...notes];
    updatedNotes.push(note);
    setNotesState(updatedNotes);
}

function deleteNote(id, notes, setNotesState){
    const index=getIndexById(id, notes);
    const updatedNotes=[...notes];
    updatedNotes.splice(index, 1);
    setNotesState(updatedNotes);
    sendDeletion(id);
}

function saveNote(note, notes, setNotesState){
    note.isEdited=false;
    const isNoteNew=checkIfNoteIsNew(note.id, notes);
    if(isNoteNew) addNote(note, notes, setNotesState);
    else updateNotes(note.id, note.content, notes, setNotesState, "content");
    const preparedNote=prepareNoteForSend(note);
    sendNote(preparedNote, note.id, isNoteNew);
}

function setDescription(note, notes, setNotesState){
    const {id, description}=note;
    const isNoteNew=checkIfNoteIsNew(id, notes);
    if(!isNoteNew) {
        updateNotes(id, description, notes, setNotesState, "description");
        const preparedNote=prepareNoteForSend(note);
        sendNote(preparedNote, note.id, isNoteNew);
    }
}


let debounceOpen=true;
let buffer;

function debounceNameSend(value, isNoteNew){
    buffer=value;
    if(debounceOpen){
        sendNote(value, isNoteNew);
        debounceOpen=false
        setTimeout(()=>{
            debounceOpen=true;
        },500);
    }
}

function setName(note, notes, setNotesState){
    const {id, title}=note
    const isNoteNew=checkIfNoteIsNew(id, notes);
    if(!isNoteNew) {
        updateNotes(id, title, notes, setNotesState, "title");
        /* console.log(note); */
        /* debounceNameSend(note);
            todo: narawic debounce
        */
        const preparedNote=prepareNoteForSend(note);
        sendNote(preparedNote, note.id, isNoteNew);
    }
}

function setFavourite(id, value, notes, setNotesState){
    updateNotes(id, value, notes, setNotesState, "isFavourite");
    patchFavourite(id, value);
}

export {setFavourite, saveNote, setName, setDescription, deleteNote}