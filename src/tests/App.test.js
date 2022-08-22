import App from "../App";
import {screen, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as RestFunctions from "../Utitity/RestFunctions";
import {resetRoute} from "./testUtils";

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
    "content": "exaple note content",
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

afterEach(()=>{
    resetRoute();
})

it("renders correctly",async()=>{
    //arrange
    RestFunctions.getNotes=jest.fn().mockResolvedValue(notesReturned);

    //act
    render(<App />);

    //assert
    expect(await screen.findByText("test1")).toBeInTheDocument(); 
});

it("opens correct note", async()=>{
    //arrange
    RestFunctions.getNotes=jest.fn().mockResolvedValue(notesReturned);
    const user=userEvent.setup();

    //act
    render(<App/>);

    //assert
    const note1=await screen.findByText("test1");
    await user.click(note1);
    expect(screen.getByDisplayValue("test1 content here")).toBeInTheDocument();
    
    await user.click(screen.getByTestId("main-return-button"));
    const otherNote=screen.getByText("example3");
    await user.click(otherNote);
    expect(screen.getByDisplayValue("exaple3 example3")).toBeInTheDocument();
 
});

it("note content doesn't save without pressing save button", async()=>{
    //arrange
    RestFunctions.getNotes=jest.fn().mockResolvedValue(notesReturned);
    const user=userEvent.setup();

    //act
    render(<App/>);
    await user.click(await screen.findByText("example"));
    await user.type(screen.getByDisplayValue("exaple note content"), " additional content");

    //assert
    expect(screen.getByDisplayValue("exaple note content additional content")).toBeInTheDocument();
    await user.click(screen.getByTestId("main-return-button"));
    await user.click(screen.getByText("example"));
    expect(screen.getByDisplayValue("exaple note content")).toBeInTheDocument();
    
});