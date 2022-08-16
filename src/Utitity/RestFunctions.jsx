const URL="http://localhost:3000";

async function getNotes(){
    try{
        const notes=await fetch(`${URL}/notes`).then(res=>res.json());
        return notes
    }
    catch(err){
        console.error(err);
        return Promise.reject(err);
    }
}

async function sendDeletion(id){
    try{
        await fetch(`${URL}/notes/${id}`,{
            method: "DELETE"
        })
    }
    catch(err){
        console.error(err);
        return Promise.reject(err);
    }
}

async function sendNote(note, id, isNoteNew){
    const protocol=isNoteNew? "POST":"PUT";
    try{
        await fetch(`${URL}/notes/${isNoteNew?"":id}`, {
            method: protocol,
            headers:{
                "Content-Type": "application/json"
            },
            body: note
        })
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
        await fetch(`${URL}/notes/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: dataToSend
        });
    }
    catch(err){
        console.error(err);
        return Promise.reject(err);
    }
}


export { getNotes, patchFavourite, sendNote, sendDeletion }