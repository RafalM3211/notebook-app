import { getIndexById } from "./other";

const URL="http://localhost:3000";

function getNotesFromLocalstorage(){
    const notes=JSON.parse(localStorage.getItem("notes"))||[];
    return notes
}

async function getNotes(){
    try{
        const notes=getNotesFromLocalstorage();
        return notes
    }
    catch(err){
        console.error(err);
        return Promise.reject(err);
    }
}

async function sendDeletion(id){
    try{
        const notes=getNotesFromLocalstorage();
        const noteIndex=getIndexById(id, notes);
        if(noteIndex){
            notes.splice(noteIndex, 1);
            localStorage.setItem("notes", JSON.stringify(notes));
        }        
    }
    catch(err){
        console.error(err);
        return Promise.reject(err);
    }
}

async function sendNote(note, id, isNoteNew){
    const protocol=isNoteNew? "POST":"PUT";
    try{
        const notes=getNotesFromLocalstorage();
        const sendedNote={id, ...note};
        const noteIndex=getIndexById(id, notes);
        if(!noteIndex){
            notes.push(sendedNote);
        }
        else{
            notes[noteIndex]=sendedNote;
        }
        localStorage.setItem("notes", JSON.stringify(notes));

    }
    catch(err){
        console.error(err);
        return Promise.reject(err);
    }
}

async function patchFavourite(id, value){
    try{
        const notes=getNotesFromLocalstorage();
        const noteIndex=getIndexById(id, notes);
        if(noteIndex){
            notes[noteIndex].isFavourite=value;
            localStorage.setItem("notes", JSON.stringify(notes));
        }  
    }
    catch(err){
        console.error(err);
        return Promise.reject(err);
    }
}


export { getNotes, patchFavourite, sendNote, sendDeletion }