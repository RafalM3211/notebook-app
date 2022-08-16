import { useParams } from "react-router-dom";
import { updateObject } from "../Utitity/other";


function FavouriteStar(props){
    const note=props.note
    const noteId=note.id;
    const pathVariable=useParams()["*"];

    let setFavourite;
    if(pathVariable==="add"){
        setFavourite=(id, val)=>{
            const updatedNote=updateObject(note, {isFavourite: val});
            props.changeNote(updatedNote);
        }
    }
    else setFavourite=props.setFavourite;

    return <div
     onClick={()=>{setFavourite(noteId, !note.isFavourite)}} 
     className={`favourite-star ${note.isFavourite?"on":""}`}>
    🟊</div>
}

export default FavouriteStar