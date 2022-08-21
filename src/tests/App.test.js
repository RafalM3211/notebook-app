import App from "../App";
import {screen, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as RestFunctions from "../Utitity/RestFunctions";

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
},
{
    "id": 4,
    "title": "example2",
    "content": "exaple2 example2",
    "isFavourite": true,
    "description": "example note2"
},
{
    "id": 5,
    "title": "example3",
    "content": "exaple3 example3",
    "isFavourite": false,
    "description": "example note3"
}];


it("renders correctly",async()=>{
    //arrange
    RestFunctions.getNotes=jest.fn().mockResolvedValue(notesReturned);

    //act
    render(<App />);

    //assert
    expect(await screen.findByText("test1")).toBeInTheDocument(); 
})

it("opens correct note", async()=>{
    //arrange
    RestFunctions.getNotes=jest.fn().mockResolvedValue(notesReturned);
    const user=userEvent.setup();

    //act
    render(<App/>);

    //assert
    const note1=await screen.findByText("test1");
    user.click(note1);
    expect(await screen.findByPlaceholderText("edit your note")).toHaveTextContent("test1 content here");
    user.click(screen.getByTestId("main-return-button"));
    const otherNote=await screen.findByText("example3");
    user.click(otherNote);
    expect(await screen.findByPlaceholderText("edit your note")).toHaveTextContent("exaple3 example3");
})