## Intro to React

**React router**
* A starter library in react that helps you manage client-side routing

**Redux**
* A way to manage state in JS applications

### What is react?
* A view library that helps you create & manage the UI in an application
* Handles interactions when a user interacts with elements
* Can involve grabbing data from server and displaying it immediately
* Still uses normal HTML, CSS and stuff
* Challenges best practise ie. adding HTML with JS
* Great with building complex things
* "Guides you to do the right thing" (apparently) as opposed to other frameworks that feel like you go against your insitncts
* Opensource, hyooge community

### Why choose react?
* More control about how you arrange the different pieces
* Dynamic configuration
* 'less opinionated' compared to other frameworks

## React starter

**JSX**
* A language built around JS which adds 'template tags' that call functions but written in a style that looks like HTML
* Similar to react's component model where:
    * you use HTML structures
    * that compile down to function calls
    * that build react components

**Components**
* Mainly concerned with returning the HTML that you put on your page
* A collection of UI elements - buttons, paragraph, links, cards
* You can pass in props to these components
* Props modify/change how the components look and behave
* You can use them umpteenth times on the same page
* When a user goes to your app, they will be shown index.html which serves the bundle.js file what contains all your scripts
* You can also declare which elements you show in your app in index.html

**Elements**
* What you use to generate the HTML that the component returns

**Props**
* Data that you can pass into your components
* In order to influence the behaviour or appearance of a component

### File structure

**app/components/[componentname].jsx**
* Here's where you define all your components with JSX
* Depending on complexity of app, where you also add data

**app/app.jsx**
* This file tells react wehre to put your components/elements

        const React = require('react');
        const ReactDOM = require('react-dom');

        /* Import Components */
        const HelloWorld = require('./components/HelloWorld');

        ReactDOM.render(<HelloWorld/>, document.getElementById('main'));
