# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Problem 
    Create a modal Component which will be consume by the other components it can accept Custom header and accept Esc key Event.

## Learning 
    Dealing with event Behaviour 
    As we know events in react SyntheticEvent is always accept event to bubble. the Obvious challenge is when 
    event bubble up to modal-backdrop is will close the modal ,this is not the expected behavour we want.
    Why this is issue is raised ?
    because event attached to the backdrop will be call as any onclick event occur ,to prevent it from that 
    we are adding stopPropagation at event content so it should not close the modal.
    or we can add another logic which is to check event.target and event.currentTarget 
    ``const stopEventPropagationTry = (event) => {
        if (event.target === event.currentTarget) {
            event.stopPropagation();
        }
    }``  

    Obervation - 
    The event which are added using addEventListner will behave like the javascript event.
    ``
    event.target <button>​Open Modal​</button>​ 
    event.currentTarget #document
    ``
    
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
