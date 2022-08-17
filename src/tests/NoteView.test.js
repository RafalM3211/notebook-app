import * as ReactRouter from 'react-router';
import NoteView from "../components/NoteView/NoteView";
import {render, screen, getByText} from "@testing-library/react";
import {wrappedRender} from "./testUtils";

it("displays data correct", ()=>{
    //arrange
    const setEditedNote=jest.fn();
    const editedNote=jest.fn();
    const setFavouriteShortened=jest.fn();
    const notes=[{
        "id": 1,
        "title": "test1",
        "content": "test1 content here",
        "isFavourite": false,
        "description": "description test"
      },
      {
        "id": 2,
        "title": "example",
        "content": "exaple example",
        "isFavourite": false,
        "description": "example note"
    }];

    //act

    jest.spyOn(ReactRouter, 'useParams').mockReturnValue({"*": 1});

    wrappedRender(
        <NoteView 
         setEditedNote={setEditedNote}
         editedNote={editedNote}
         setFavourite={setFavouriteShortened}
         notes={notes}
        />
    )
    //assert
})