import { MemoryRouter } from "react-router-dom";
import Note from "../components/Note";
import {render, screen, getByText} from "@testing-library/react";
import {wrappedRender} from "./testUtils";


it("shows correct data", ()=>{
    //arrange
    
    const deleteNote=jest.fn();
    const setEditedNote=jest.fn();
    const setFavourite=jest.fn();

    const note={
        id: 1,
        title: "name",
        description: "description",
        content: "content",
        isFavourite: false,
    }

    //act
    wrappedRender(
        <Note
         deleteNote={deleteNote}
         setEditedNote={setEditedNote} 
         setFavourite={setFavourite} 
         key={1} 
         noteData={note}
    />)

    //assert
    expect(screen.getByTestId("name")).toHaveTextContent("name");
    expect(screen.getByText("🟊")).not.toHaveClass("on");


})