import {MemoryRouter} from "react-router-dom";
import {render} from "@testing-library/react";
import { useState } from "react";

export function wrapWithAppState(Comp){
    return function(props){
        const [editedNote, setEditedNote]=useState({});
        const setFavouriteShortened=jest.fn();
        const notes=[{
            "id": 1,
            "title": "test1",
            "content": "test1 content here",
            "isFavourite": true,
            "description": "description test"
        },
        {
            "id": 2,
            "title": "example",
            "content": "exaple example",
            "isFavourite": false,
            "description": "example note"
        }];

        return <Comp
                setEditedNote={setEditedNote}
                editedNote={editedNote}
                setFavourite={setFavouriteShortened}
                notes={notes}
                {...props}
             />
    }
}

function RenderWrapper(props){
    return(
        <MemoryRouter>
            {props.children}
        </MemoryRouter>
    )
}

export function wrappedRender(element, options){
    render(element, {wrapper: RenderWrapper, ...options});
}

