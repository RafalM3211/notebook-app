import { getIndexById } from "./other";

const URL="http://localhost:3000";

const mockedNotes=[
    {
      "id": 1,
      "title": "hello",
      "content": "asfasf",
      "isFavourite": false,
      "description": "description test"
    },
    {
      "id": 2,
      "title": "bye",
      "content": "asasffadfgf",
      "isFavourite": false,
      "description": "example note"
    },
    {
      "id": 3,
      "title": "third note",
      "content": "asasdasd asd d",
      "isFavourite": false,
      "description": "description here"
    },
    {
      "id": 4,
      "title": "testchujsjd",
      "content": "testchuj",
      "isFavourite": "",
      "description": "hghgvhjv"
    }
  ]

async function getNotes(){
    try{
        const notes=localStorage.getItem("notes");
        //const notes=await fetch(`${URL}/notes`).then(res=>res.json());
        return JSON.parse(notes)||[]
    }
    catch(err){
        console.error(err);
        return Promise.reject(err);
    }
}

async function sendDeletion(id){
    try{
        /* await fetch(`${URL}/notes/${id}`,{
            method: "DELETE"
        }) */
    }
    catch(err){
        console.error(err);
        return Promise.reject(err);
    }
}

async function sendNote(note, id, isNoteNew){
    const protocol=isNoteNew? "POST":"PUT";
    try{
        const notes=JSON.parse(localStorage.getItem("notes"))||[];
        const sendedNote={id, ...note};
        const noteIndex=getIndexById(id, notes);
        if(!noteIndex){
            notes.push(sendedNote);
        }
        else{
            notes[noteIndex]=sendedNote;
        }
        
        localStorage.setItem("notes", JSON.stringify(notes));
        /* await fetch(`${URL}/notes/${isNoteNew?"":id}`, {
            method: protocol,
            headers:{
                "Content-Type": "application/json"
            },
            body: note
        }) */
    }
    catch(err){
        console.error(err);
        return Promise.reject(err);
    }
}

async function patchFavourite(id, value){
    try{
         const dataToSend=JSON.stringify({
            isFavourite: value
        })
        /*await fetch(`${URL}/notes/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: dataToSend
        }); */
    }
    catch(err){
        console.error(err);
        return Promise.reject(err);
    }
}


export { getNotes, patchFavourite, sendNote, sendDeletion }