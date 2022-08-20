import App from "../App";
import {screen, render} from "@testing-library/react";

it("renders correctly",async ()=>{
    //arrange
    const notesReturned=[{
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
    const getNotes=jest.fn().mockResolvedValue(notesReturned);
    console.log(getNotes());
    //act
    render(<App />);

    //assert
    expect(await screen.findByText("test1")).toBeInTheDocument(); 
})