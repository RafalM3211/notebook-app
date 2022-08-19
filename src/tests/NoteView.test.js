import * as ReactRouter from 'react-router';
import NoteView from "../components/NoteView/NoteView";
import { screen, fireEvent, getByPlaceholderText } from "@testing-library/react";
import {wrappedRender, wrapWithAppState} from "./testUtils";
import React from 'react';
import userEvent from "@testing-library/user-event";

const StateWrappedNoteView=wrapWithAppState(NoteView);

beforeEach(()=>{
    jest.spyOn(ReactRouter, 'useParams').mockReturnValue({"*": 1});
})

it("displays data correctly", ()=>{
    //arrange

    //act
    wrappedRender(
        <StateWrappedNoteView />
    )
    const favouriteStar=screen.getByText("🟊");

    //assert
    expect(screen.getByRole("textbox")).toHaveTextContent("test1 content here");
    expect(favouriteStar).toHaveClass("on");

    ReactRouter.useParams.mockRestore();
});

it("sets note favourite", ()=>{
    //arrange

    //act
    wrappedRender(
        <StateWrappedNoteView />
    )
    const favouriteStar=screen.getByText("🟊");

    //assert
    expect(favouriteStar).toHaveClass("on");
    fireEvent(favouriteStar, new MouseEvent('click', {bubbles: true}));
    expect(favouriteStar).not.toHaveClass("on");

    ReactRouter.useParams.mockRestore();
});

it("lets writing note", ()=>{
    //arrange
    const user=userEvent.setup();
    
    //act
    wrappedRender(
        <StateWrappedNoteView />
    )

    //assert
    const noteBody=screen.getByPlaceholderText("edit your note");
    expect(noteBody).toHaveTextContent("test1 content here");
    fireEvent.change(noteBody, {target: {value: "asdf"}});
    expect(noteBody).toHaveTextContent("asdf")

    ReactRouter.useParams.mockRestore();
})