# Getting Started with Create React App

This project is using React, tailwindcss and pokeAPI

## What I have done throughout this project?

### install React and put the main components

I start with remove all the files that I won't use it in this folder and then add the main ones.
I'd checked if tailwindcss worked or not and It works.
After I finished I push the project into my github account.


### display the data from 'utils' into the SideNav and make it stylish and add btn for switch the color mode

I got the data from the 'utils' and put it in pretty manner in the SidNav.
Thought I would be cool to add a btn for switching mood it's my first time to add and i was exiting I faced some problems like how to handle the state outside of its component but i passed it throughout the the App component as a props so if I need it in the future i can get it more easily. 

### Working in PokeCard component and fetch the pokemon data from pokeAPI

I got the data from the api and made sure that everything worked fine.
One of the tricky parts was how to pass an object that has an object that has property as a props from PokeCard to TypeCard cuz React doesn't accept that kinda props.

### Add a folder for the pokemon images 

I added a folder for the pokemon images and render to the project 'still not stylish'.

### Display the data form pokeAPI in PokeCard

I started with adding the data first to the page and then I styled'em to made'em more suitable for dark and light mode.


### Add some style for the SideNav's scrollbar

Thought iit'd be butter to change the default style.


### Add functionality to Moves btns in PokeCard

I made every btn when you click on it display description of that move and its name so you can understand what every move for.

### Debugging and finished PokeCard component

I spent almost the entire day trying to figure it out in my code, and I finally did it in the first line of useEffect in PokeCard, where I'd written if the (data === true) return, but thank goodness it's all done now.


### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
