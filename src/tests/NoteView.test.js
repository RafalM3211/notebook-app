import * as ReactRouter from 'react-router';
import NoteView from "../components/NoteView/NoteView";
import {render, screen, getByText} from "@testing-library/react";
import {wrappedRender, wrapWithAppState} from "./testUtils";
import React, { Children, useState } from 'react';





it("displays data correct", ()=>{
    //arrange

    const StateWrappedNoteView=wrapWithAppState(NoteView);

    //act
    jest.spyOn(ReactRouter, 'useParams').mockReturnValue({"*": 1});
    wrappedRender(
        <StateWrappedNoteView />
    )

    //assert
    expect(screen.getByRole("textbox")).toHaveTextContent("test1 content here");
})