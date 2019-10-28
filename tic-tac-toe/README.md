# TTT TIL

**27 October 2019**
- In React, it’s conventional to use on[Event] names for props which represent events and handle[Event] for the methods which handle the events.
- There are generally two approaches to changing data. The first approach is to mutate the data by directly changing the data’s values. The second approach is to replace the data with a new copy which has the desired changes.

*Data Change with Mutation*
    var player = {score: 1, name: 'Jeff'};
    player.score = 2;
    // Now player is {score: 2, name: 'Jeff'}

*Data Change without Mutation*
    var player = {score: 1, name: 'Jeff'};

    var newPlayer = Object.assign({}, player, {score: 2});
    // Now player is unchanged, but newPlayer is {score: 2, name: 'Jeff'}

*Mutation = bad, immutability = good*
- Immutability makes complex features much easier to implement.
- Detecting changes in immutable objects is considerably easier. If the immutable object that is being referenced is different than the previous one, then the object has changed.
- The main benefit of immutability is that it helps you build pure components in React. 
- Immutable data can easily determine if changes have been made which helps to determine when a component requires re-rendering.
    - Future learnings [learn more about shouldComponentUpdate()](https://reactjs.org/docs/optimizing-performance.html#examples)

**Function Components**
- They are a simpler way to write components that only contain a render method and don’t have their own state
- Instead of defining a class which extends React.Component, we can write a function that takes props as input and returns what should be rendered
- Function components are less tedious to write than classes, and many components can be expressed this way

- [Where you left it - taking turns](https://reactjs.org/tutorial/tutorial.html#taking-turns)

**21 October 2019**
- In JavaScript classes, you need to always call *super* when defining the constructor of a subclass
- Subclass: when you create a class based off another class
- All React component classes that have a constructor should start it with a super(props) call.
- [Where you left it](https://reactjs.org/tutorial/tutorial.html#making-an-interactive-component)

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
