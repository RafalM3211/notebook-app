
function getIndexById(id, notes){
    let res=null;
    notes.forEach((element, index) => {
        if(element.id==id) res=index;
    });
    return res
}

function getNoteById(id, notes){
    for(const note of notes){
        if(note.id==id) return note;
    }
    return null;
}

function updateObject(orginalObject, update){
    const updatedObject={...orginalObject};
    for(const key of Object.keys(update)){
        updatedObject[key]=update[key];
    }
    return updatedObject
}

function createEmptyNote(){
    return {
        "id": undefined,
        "title": "",
        "content": "",
        "isFavourite": false,
        "description": ""
      }
}

export {updateObject, getNoteById, getIndexById, createEmptyNote}