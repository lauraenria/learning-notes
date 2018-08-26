

* Why React
* Rendering UI with React
* State management
* Render UI with External Data
* Managing App Location with React Router
* MyReads: A Book Tracking App
* Getting Started with APIs
* Understanding API Services
* Using the APIs in Practice
* Neghborhood Map (React) - Project

# Lesson 1 Why React?

* [Compositional model](https://en.wikipedia.org/wiki/Function_composition_(computer_science))
    * Remember that composition is just combining simple functions together to create complex functions. This is the key recipe: composition is built from simple functions!
    * [video](https://youtu.be/F0erKLsfCMk)
* declarative nature
* the way data flows throught a component
* React is just Javascript
* **DOT** rule: **Do One Thing**

### Composition Recap
Composition occurs when *simple* functions are combined together to create more complex functions. Think of each function as a single building block that does one thing (DOT). When you combine these simple functions together to form a more complex function, this is composition.

### Further Research
* [Compose me That: Function Composition in JavaScript](https://www.linkedin.com/pulse/compose-me-function-composition-javascript-kevin-greene)
* [Functional JavaScript: Function Composition For Every Day Use](https://hackernoon.com/javascript-functional-composition-for-every-day-use-22421ef65a10)

### Declarative Code Recap
*Imperative* code instructs JavaScript on *how* it should perform each step. With *declarative* code, we tell JavaScript *what* we want to be done, and let JavaScript take care of performing the steps.

React is declarative because we write the code that we *want*, and React is in charge of taking our declared code and performing all of the JavaScript/DOM steps to get us to our desired result.

### Further Research
* Tyler's [Imperative vs Declarative Programming blog post](https://tylermcginnis.com/imperative-vs-declarative-programming/)
* [Difference between declarative and imperative in React.js?](https://stackoverflow.com/questions/33655534/difference-between-declarative-and-imperative-in-react-js)from StackOverflow

## [Unidirectional Data Flow](https://youtu.be/TmhAf3bAc1Q)

### Data-Binding In Other Frameworks

Front-end frameworks like Angular and Ember make use of two-way data bindings. In two-way data binding, the data is kept in sync throughout the app no matter where it is updated. If a model changes the data, then the data updates in the view. Alternatively, if the user changes the data in the view, then the data is updated in the model. Two-way data binding sounds really powerful, but it can make the application harder to reason about and know where the data is actually being updated.

### Further Research
* [Angular's two-way data binding](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#two-way)
* [Ember's two-way data binding](https://guides.emberjs.com/v2.13.0/object-model/bindings/)

## React's Data-flow

In React, the data flows from the parent component to a child component.

[!reacts-data-flow](images/nreacts-data-flow.png)

*Data flows down from parent component to child component. Data updates are sent to the parent component where the parent performs the actual change.*

* a parent component
* a child component

The data lives in the parent component and is passed down to the child component. Even though the data lives in the parent component, both the parent and the child components can use the data. However, if the data must be updated, then only the parent component should perform the update. If the child component needs to make a change to the data, then it would send the updated data to the parent component where the change will actually be made. 

### Data-flow In React Recap
In React, data flows in only one direction, from parent to child. If data is shared between sibling child components, then the data should be stored in the parent component and passed to both of the child components that need it.

### [React Is "Just JavaScript"](https://youtu.be/FTSYIXx2R10)

For further reading, feel free to check out the following:

* [Virtual DOM](https://facebook.github.io/react/docs/optimizing-performance.html#avoid-reconciliation) from the React Docs. The Virtual DOM reflects a tree in which each node is an HTML element. React is able to traverse and carry out operations on this Virtual DOM, saving our app from having "costly" activity on the actual DOM.

* [The Diffing Algorithm](https://facebook.github.io/react/docs/reconciliation.html#the-diffing-algorithm) from the React Docs. Diffing determines how to make efficient changes to the DOM. With diffing, old DOM nodes are taken out and replaced only when necessary. This way, our app doesn't perform any unnecessary operations to figure out when to render content.


* [Rendering UI Intro](https://youtu.be/H8zoSVe_CL8)


## Creating Elements and JSX

```javascript
React.createElement( /* type */, /* props */, /* content */ );
```

Let's break down what each item can be:

* ```type``` – either a string or a React Component

    * This can be a string of any existing HTML element (e.g. ```'p'```, ```'span'```, or ```'header'```) or you could pass a React component (we'll be creating components with JSX, in just a moment).

* ```props``` – either ```null``` or an object

    * This is an object of HTML attributes and custom data about the element.

* ```content``` – ```null```, a string, a React Element, or a React Component

* [Trying Out React Code 💡](https://youtu.be/B3VKTJNx7xQ)

Apps built with React typically have a single root DOM node. For example, an HTML file may contain a <div> with the following:

```javascript

<div id='root'></div>

```

ps.React's ```.createElement()``` method takes in a description of an element and returns a plain JavaScript object.


[createElement explanation](https://youtu.be/MTXIx7859P0)

* [all supported HTML attributes](https://facebook.github.io/react/docs/dom-elements.html#all-supported-html-attributes)

* [nesting](https://youtu.be/JRkpQamCWxI)

* [nesting-2](https://youtu.be/PDT3A1L1sPs)

* dont forget to assign a prop key**

* [jsx](https://youtu.be/9kyaEeKDUGE0) + [example](https://youtu.be/h_rHa8mVyBk)

JSX Returns One Root Element, Too.
When writing JSX, keep in mind that it must only return a single element. This element may have any number of descendants, but there must be a single root element wrapping your overall JSX (typically a ```<div>``` or a ```<span>```.

 when we have two sibling elements that are both at the root level (i.e. ```<h1>``` and ```<ul>```) . This won't work and will give the error:

```Syntax error: Adjacent JSX elements must be wrapped in an enclosing tag```

Since we know that JSX is really just a syntax extension for ```.createElement()```, this makes sense; ```.createElement()``` takes in only one tag name (as a string) as its first argument.

* [render()](https://youtu.be/qHjr2ndg2UA)

A great mindset to have when building React apps is to [think in components](https://facebook.github.io/react/docs/thinking-in-react.html). Components represent the modularity and reusability of React. You can think of your component classes as factories that produce instances of components. These component classes should follow the [single responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle) and just "do one thing". If it manages too many different tasks, it may be a good idea to decompose your component into smaller subcomponents.

Further Research:

* [Rendering Elements](https://facebook.github.io/react/docs/rendering-elements.html) from the React docs

## [Create React App](https://youtu.be/dSl0d0jcrSU)

### Scaffolding Your React App
JSX is awesome, but it does need to be transpiled into regular JavaScript before reaching the browser. We typically use a transpiler like [Babel](https://youtu.be/dSl0d0jcrSU) to accomplish this for us. We can run Babel through a build tool, like [Webpack](https://github.com/facebookincubator/create-react-app) which helps bundle all of our assets (JavaScript files, CSS, images, etc.) for web projects.

To streamline these initial configurations, we can use Facebook's Create React App package to manage all the setup

install Create React App (through the command-line with [npm](nstall Create React App (through the command-line with npm))

```
npm install -g create-react-app
```

[error](https://youtu.be/CgHOAYV70Vw)

If you're seeing errors when trying to install a package globally, feel free to check out [this article](https://docs.npmjs.com/getting-started/fixing-npm-permissions) in the npm documentation. Note that to find out where global packages are installed, you can run npm list -g in your console (more information [here](https://stackoverflow.com/questions/5926672/where-does-npm-install-packages)).

*The Yarn Package Manager*
Both in the following video and in the output of create-react-app, we're told to use ```yarn start``` to start the development server. If you haven't heard about it yet, [Yarn](https://yarnpkg.com/) is a package manager that's similar to NPM. Yarn was created from the ground up by Facebook to improve on some key aspects that are slow or lacking in NPM.

[video](https://youtu.be/WmYSd7OEjMM)

**create-react-app Recap**
Facebook's create-react-app is a command-line tool that scaffolds a React application. Using this, there is no need to install or configure module bundlers like Webpack, or transpilers like Babel. These come preconfigured (and hidden) with create-react-app, so you can jump right into building your app!

Check out these links for more info about create-react-app:

* [create-react-app](https://github.com/facebookincubator/create-react-app) on GitHub

* [create-react-app Release Post](https://github.com/facebookincubator/create-react-app) from the React blog

* [Updates to create-react-app](https://facebook.github.io/react/blog/2017/05/18/whats-new-in-create-react-app.html) from the React blog

* [Composing with Components](https://youtu.be/PtospOO4qrs)

*Favor Composition Over Inheritance*

* [reactnd-contacts-complete](https://github.com/udacity/reactnd-contacts-complete)
checkout the ```starter-files-added``` branch to have it all done for you.

the server is just a simple Node/Express app. The repo for the project is [here](https://github.com/udacity/reactnd-contacts-server).

# State Management

* [introduction](https://youtu.be/W8kNdGxfS8A)

1. props

2. functional components

3. controll components

we can access a component's props with ```this.props``` (or props in stateless functional components).

```<clock currentTime= {new Date().getTime()}/>>```

for the most part, when passing in a prop, you just type out the name of the prop as if it's a regular HTML attribute.

[video](https://youtu.be/mnIuUk9cexA)

You pass in props individually just as you would with any other HTML attributes.

**Passing Data With Props Recap**

A ```prop``` is any input that you pass to a React component. Just like an HTML attribute, a ```prop``` name and value are added to the Component.

```html
// passing a prop to a component
<LogoutButton text='Wanna log out?' />

```
In the code above, ```text``` is the ```prop``` and the string ```'Wanna log out?'``` is the value.

All props are stored on the ```this.props``` object. So to access this ```text prop``` from inside the component, we'd use ```this.props.text```:

```javascript
// access the prop inside the component
...
render() {
    return <div>{this.props.text}</div>
}
...

```
**Further Research**

* [Components and Props](https://facebook.github.io/react/docs/components-and-props.html) from the React Docs

## [Stateless Functional Components](https://youtu.be/tTxLxl_Bk3Y)

Stateless Functional Components Recap
If your component does not keep track of internal state (i.e., all it really has is just a ```render()``` method), you can declare the component as a Stateless Functional Component.

Remember that at the end of the day, React components are really just JavaScript functions that return HTML for rendering. As such, the following two examples of a simple Email component are equivalent:

```javascript
class Email extends React.Component {
  render() {
    return (
      <div>
        {this.props.text}
      </div>
    );
  }
};
const Email = (props) => (
  <div>
    {props.text}
  </div>
);

```
In the latter example (written as an ES6 function with an implicit return), rather than accessing ```props``` from ```this.props```, we can pass in props directly as an argument to the function itself. In turn, this regular JavaScript function can serve as the Email component's ```render()``` method.

If a component is only using a render method to display content, then it can be converted into a Stateless Functional Component.

**Further Research**
* [Functional Components vs. Stateless Functional Components vs. Stateless Components](https://tylermcginnis.com/functional-components-vs-stateless-functional-components-vs-stateless-components/) from Tyler



Add State To A Component

 props refer to attributes from parent components. In the end, props represent "read-only" data that are immutable.

 A component's state, on the other hand, represents mutable data that ultimately affects what is rendered on the page. State is managed internally by the component itself and is meant to change over time, commonly due to user input (e.g., clicking on a button on the page).

[video](https://youtu.be/W-udVlRApio)

💡 Class Fields 💡

we put the state object directly inside the class...not in a constructor() method.

```javascript

js class User extends React.Component { state = { username: 'Tyler' } }

```

// rather than
```javascript
class User extends React.Component { constructor(props) { super(props); this.state = { username: 'Tyler' } } } `

```

Facebook's [Setting the Initial State docs](https://facebook.github.io/react/docs/react-without-es6.html#setting-the-initial-state)


Having state outside the constructor() means it is a [class field](https://github.com/tc39/proposal-class-fields), which is a proposal for a new change to the language. It currently isn't supported by JavaScript, but thanks to Babel's fantastic powers of transpiling, we can use it!

[video](https://youtu.be/RyO7B5KLXVY)



**⚠️ Props in Initial State ⚠️**

When defining a component's initial state, avoid initializing that state with ```props```. This is an error-prone anti-pattern, since state will only be initialized with ```prop```s when the component is first created.

```javascript

this.state = {
  user: props.user
}

```

In the above example, if props are ever updated, the current state will not change unless the component is "refreshed." Using props to produce a component's initial state also leads to duplication of data, deviating from a dependable "source of truth."


State Recap
By having a component manage its own state, any time there are changes made to that state, React will know and *automatically* make the necessary updates to the page.

This is one of the key benefits of using React to build UI components: when it comes to re-rendering the page, we just have to think about updating state. We don't have to keep track of exactly which parts of the page change each time there are updates. We don't need to decide how we will efficiently re-render the page. React compares the previous output and new output, determines what has changed, and makes these decisions for us. This process of determining what has changed in the previous and new outputs is called ```Reconciliation```.

Further Research
* [Identify Where Your State Should Live](https://facebook.github.io/react/docs/thinking-in-react.html#step-4-identify-where-your-state-should-live)


## Update State with setState

* [setState explanation](https://youtu.be/TU1GGjogtbo)
* [setState example](https://youtu.be/d3UNPA863f4)


**How State is Set**

Earlier in this lesson, we saw how we can define a component's state at the time of initialization. Since state reflects *mutable* information that ultimately affects rendered output, a component may also update its state throughout its lifecycle using ```this.setState()```. As we've learned, every time local state changes, React will trigger a re-render of the component by calling its ```render()``` method.

There are two ways to use ```setState()```. The first is to merge state updates. Consider a snippet of the following component:

```javascript

class Email extends React.Component {
  state = {
    subject: '',
    message: ''
  }
  // ...
});

```

Though the initial state of this component contains two properties (```subject``` and ```message```), they can be updated independently. For example:

```javascript

this.setState({
  subject: 'Hello! This is a new subject'
})

```
This way, we can leave this.state.message as-is, but replace this.state.subject with a new value.

The second way we can use ```setState()``` is by passing in a function rather than an object. For example:

```javascript
this.setState((prevState) => ({
  count: prevState.count + 1
}))

```

Here, the function passed in takes a single ```prevState``` argument. When a component's new state depends on the previous state (i.e., we are incrementing count in the previous state by 1), we want to use the functional ```setState()```.



etState() Recap
While a component can set its state when it initializes, we expect that state to change over time, usually due to user input. The component is able to change its own internal state using this.setState(). Each time state is changed, React knows and will call render() to re-render the component. This allows for fast, efficient updates to your app's UI.

Further Research
* [Using State Correctly](https://facebook.github.io/react/docs/state-and-lifecycle.html) from the React Docs

## Type checking a Component's Props with PropTypes

As we implement additional features into our app, we may soon find ourselves debugging our components more frequently. For example, what if the ```props``` that we pass to our components end up being an unintended data type (e.g. an object instead of an array)? PropTypes is a package that lets us define the data type we want to see right from the get-go and warn us during development if the prop that's passed to the component doesn't match what is expected.

To use PropTypes in our app, we need to install [prop-types](https://facebook.github.io/react/docs/typechecking-with-proptypes.html):
```
npm install --save prop-types
```
Alternatively, if you have been using [yarn](https://www.npmjs.com/package/yarn) to manage packages, feel free to use it as well to install:

```
yarn add prop-types
```

[video](https://youtu.be/jorS3jX3ngo)


## PropTypes Recap
All in all, PropTypes is a great way to validate intended data types in our React app. Type checking our data with PropTypes helps us identify these bugs during development to ensure a smooth experience for our app's users.

### Further Research
* [prop-types](https://www.npmjs.com/package/prop-types) library from npm
* [Typechecking With Proptypes](https://facebook.github.io/react/docs/typechecking-with-proptypes.html) from the React Docs


[Controlled Components](https://youtu.be/ayxG2cTb8q4)



[React Developer Tools](https://youtu.be/1Tkb9SGkOgI) allows you to inspect your component hierarchy along with their respective props and states. Once you install the [Chrome extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en-US), open the Chrome console and check out the React tab. For a detailed overview, feel free to check out the [official documentation](https://github.com/facebook/react-devtools).


[Controlled Component](https://facebook.github.io/react/docs/forms.html#controlled-components)

To recap how user input affects the ListContacts component's own state:

1. The user enters text into the input field.
2. An event listener invokes the ```updateQuery()``` function on every onChange event.
3. ```updateQuery()``` then calls ```setState()```, merging in the new state to update the component's internal state.
4. Because its state has changed, the ```ListContacts``` component re-renders.


Let's see how we can leverage this updated state to filter our contacts! To help us with our filtering we'll need the following packages:

* [escape-string-regexp](https://www.npmjs.com/package/escape-string-regexp)
* [sort-by](https://www.npmjs.com/package/sort-by)

```npm install --save escape-string-regexp sort-by```

[video](https://youtu.be/xIlkBGmRq0g)

Check out what MDN has to say about [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions). Also, check out how the String [```.match()```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) method uses Regular expressions to verify patterns of text.


[object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) process of unpacking

[video](https://youtu.be/ut3jxLunZz0)

### Showing The Displayed Contacts Count

[video](https://youtu.be/ykZMChM_Uu8)


### Controlled Components Recap
Controlled components refer to components that render a form, but the "source of truth" for that form state lives inside of the component state rather than inside of the DOM. The benefits of Controlled Components are:

* instant input validation
* conditionally disable/enable buttons
* enforce input formats


Putting it All Into Perspective
When it comes to keeping track of data in your app, think about what will be done with that data, and what that data will look like as your user interfaces with your app. If you want your component to store mutable local data, consider using state to hold this information. Many times, it is state that will be used to manage controlled form elements in your components.

On the other hand, if some information isn't expected to change over time, and is generally designed to be "read-only" throughout your app, consider using props instead. Both state and props will generally be in the form of an object, and changes in either will trigger a re-render of the component, but they each play very different roles in your app.


* [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)

* [Functional Components vs. Stateless Functional Components vs. Stateless Components](https://tylermcginnis.com/functional-components-vs-stateless-functional-components-vs-stateless-components/)

* [Controlled Components](https://facebook.github.io/react/docs/forms.html)



# Lesson 4 [Render UI with External Data](https://youtu.be/5UbhHLY25iY)

**data should not be fetched in the render method**

 A component's render() method should only be used to render that component; it should not make any HTTP requests, fetch data that's used to display the content, or alter the DOM. The render() method also shouldn't call any other functions that do any of these things, either.

we put the code that should handle things like Ajax requests in what React calls **lifecycle events.**

**```Lifecylce ```**: are specially named methods in a component. These methods are automatically bound to the component instance, and React will call these methods naturally at certain times during the life of a component. There are a number of different lifecycle events, but here are the most commonly used ones.


* ```componentWillMount()```: invoked immediately before the component is inserted into the DOM

* ```componentDidMount()```: invoked immediately after the component is inserted into the DOM

* ```componentWillUnmount()```: invoked immediately before a component is removed from the DOM

* ```componentWillReceiveProps()```: invoked whenever the component is about to receive brand new props

To use one of these, you'd just create a method in your component with the name and React will call it. It's an easy way to hook into different parts of the lifecycle of React components.

The lifecycle event that we'll be looking at (and will be using a lot in our app!) is the ```componentDidMount()``` lifecycle event.


## Lesson 4.2  [componentDidMount Lifecycle Event](https://youtu.be/r4mMii8NTAQ)

### How ```componentDidMount()```Works

componentDidMount() is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. Setting state in this method will trigger a re-rendering.

⚠️ Required API File ⚠️
At the beginning of the program, we gave you the option to clone our starter project or to start from scratch using [create-react-app](https://github.com/facebookincubator/create-react-app). If you used create-react-app to build your project, then you'll need [the ContactsAPI file](https://github.com/udacity/reactnd-contacts-complete/blob/master/src/utils/ContactsAPI.js) for the following [video](https://youtu.be/DoDbW-DlwlI).

Remove Contacts

* [video](https://youtu.be/vHj2BqAW7jA)

componentDidMount() Recap
componentDidMount() is one of a number of lifecycle events that React offers. componentDidMount() gets called after the component is "mounted" (which means after it is rendered). If you need to dynamically fetch data or run an Ajax request, you should do it in componentDidMount().

## Further Research

* [componentDidMount()](https://facebook.github.io/react/docs/react-component.html#componentdidmount) from the React Docs

Lesson summary

To recap, lifecycle events are special methods that React provides that allow us to hook into different points in a component's life to run some code. Now there are a number of different lifecycle events and they will run at different points, but we can break them down into three distinct categories:

Adding to the DOM
These lifecycle events are called when a component is being added to the DOM:

constructor()
componentWillMount()
render()
componentDidMount()
Re-rendering
These lifecycle events are called when a component is re-rendered to the DOM

* componentWillReceiveProps()
shouldComponentUpdate()
* componentWillUpdate()
render()
* componentDidUpdate()
Removing from the DOM
This lifecycle event is called when a component is being removed from the DOM

* componentWillUnmount()
It's easier to tell where all of these fit together with the following graphic:


The React Lifecycle Events listed out where they fall in a component's life.

Starting from the top left of the image, everything starts when ReactDOM renders the component.

As you can see, between the list and this graphic there are a number of different lifecycle events. However, the most commonly used ones are componentDidMount(), componentWillMount(), componentWillUnmount(), and componentWillReceiveProps().

## Further Research
* [componentWillMount()](https://facebook.github.io/react/docs/react-component.html#componentwillmount)from the React Docs

* [componentDidMount()](https://facebook.github.io/react/docs/react-component.html#componentdidmount) from the React Docs

* [componentWillUnmount()](https://facebook.github.io/react/docs/react-component.html#componentwillunmount) from the React Docs

* [componentWillReceiveProps](https://facebook.github.io/react/docs/react-component.html#componentwillreceiveprops) from the React Docs

* [Component Lifecycles](https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle)from the React Docs


# Lesson 5  Managing App Location with React Router

* [ introduction](https://youtu.be/johndWAT08Y)

**Single-Page Apps** can work in different ways:

* One way is by downloading the entire site's contents all at once (everything is already available to the browser, and it doesn't need to refresh the page).

* by downloading everything that's needed to render the page the user requested. Then when the user navigates to a new page, asynchronous JavaScript requests are made for just the content that was requested.

* URL controls the page content. Single-page applications are highly interactive, and users want to be able to get back to a certain state using just the URL. It's important for bookmarkability.


**React Router** turns React projects into single-page applications. It does this by providing a number of specialized components that manage the creation of links, manage the app's URL, provide transitions when navigating between different URL locations, and so much more.

React Router is a collection of **navigational components** that compose declaratively with your application.

If you're interested, feel free to check out the website at [here](https://reacttraining.com/react-router/)

In the next section, we'll dynamically render content to the page based on a value in the project's this.state object. We'll use this basic example as an idea of how React Router works by controlling what's being seen via state. Then we'll switch over to using React Router. We'll walk you through installing React Router, adding it to the project, and hooking everything together so it can manage your links and URLs.


* [Dynamically Render Pages](https://youtu.be/5ySqH5Uag2M)

We packed quite a bit of important changes in this little video! We created the CreateContact component that'll be in charge of the form to create new contacts. In staying with the general React theme of favoring composition, we created this as a standalone component and used composition by adding it to the render() method in the App component.

In an attempt to do an extremely simple recreation of how React Router works, we added a screen property to this.state, and used this property to control what content should display on the screen. If this.state.screen is list then we'll show the list of all existing contacts. If this.state.screen is create then we'll show the CreateContact component.

Short-circuit Evaluation Syntax
In this video and when we created the "Now showing" from earlier section, we used a somewhat odd looking syntax:

```javascript

{this.state.screen === 'list' && (
  <ListContacts
    contacts={this.state.contacts}
    onDeleteContact={this.removeContact}
  />
)}

```
and

```javascript

{this.state.screen === 'create' && (
  <CreateContact />
)}

```
This can be a little confusing with both the JSX code for a component and the code to run an expression. But this is really just the logical expression &&:

expression && expression
What we're using here is a JavaScript technique called short-circuit evaluation. If the first expression evaluates to true, then the second expression is run. However, if the first expression evaluates to false, then the second expression is skipped. We're using this as a guard to first verify the value of this.state.screen before displaying the correct component.

For a deeper dive into this, check out the [short-circuit evaluation info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Short-circuit_evaluation) on MDN.

Add A Button
Right now we have to manually change the state to get the app to display the different screens. We want the user to be able to control that in the app itself, so let's add a button!

* [video](https://youtu.be/aOfohwGbL-A)

## The BrowserRouter Component

As we've just seen, when the user presses the 'back' button in the browser, they will probably have to refresh the page to see the proper content at that location. This isn't the best experience for our user! When we update location, we can update the app as well using JavaScript. This is where React Router comes in.

Install React Router
To use React Router in our app, we need to install react-router-dom.

```npm install --save react-router-dom```

* [video](https://youtu.be/5535bLCBGxc)

## [BrowserRouter](https://youtu.be/KX22H1m_F9k)

* [video](https://youtu.be/Re8n-hmkWlY)

What's nice about React Router is that everything is just a component. This makes using it nice, but it also makes diving into the code more convenient as well. Let's take a look at what exactly BrowserRouter is doing under the hood.

Here is the code straight from the React Router repository.

```javascript

class BrowserRouter extends React.Component {
  static propTypes = {
    basename: PropTypes.string,
    forceRefresh: PropTypes.bool,
    getUserConfirmation: PropTypes.func,
    keyLength: PropTypes.number,
    children: PropTypes.node
  }

  history = createHistory(this.props)

  render() {
    return <Router history={this.history} children={this.props.children}  />
  }
}

```
When you use BrowserRouter, what you're really doing is rendering a Router component and passing it a history prop. Wait, what is history? history comes from the history library (also built by React Training). The whole purpose of this library is it abstracts away the differences in various environments and provides a minimal API that lets you manage the history stack, navigate, confirm navigation, and persist state between sessions.

### BrowserRouter Component Recap
In summary, for React Router to work properly, you need to wrap your whole app in a BrowserRouter component. Also, BrowserRouter wraps the history library which makes it possible for your app to be made aware of changes in the URL.

### Further Research
* [history](https://github.com/reacttraining/history)


## [The Link Component](https://youtu.be/qbP07LypkN8)

* [video](https://youtu.be/V3kc4Sz1GII)

As you've seen, Link is a straightforward way to provide declarative, accessible navigation around your application. By passing a to property to the Link component, you tell your app which path to route to.

```javascript

<Link to="/about">About</Link>

```

If you're experienced with routing on the web, you'll know that sometimes our links need to be a little more complex than just a string. For example, you can pass along query parameters or link to specific parts of a page. What if you wanted to pass state to the new route? To account for these scenarios, instead of passing a string to Links to prop, you can pass it an object like this,

```javascript

<Link to={{
  pathname: '/courses',
  search: '?sort=name',
  hash: '#the-hash',
  state: { fromDashboard: true }
}}>
  Courses
</Link>

```


You won't need to use this feature all of the time, but it's good to know it exists. You can read more information about Link in the [official docs](https://reacttraining.com/react-router/web/api/Link).


## Link Recap
React Router provides a Link component which allows you to add declarative, accessible navigation around your application. You'll use it in place of anchor tags (a) as you're typically used to. React Router's <Link> component is a great way to make navigation through your app accessible for users. Passing a to prop to your link, for example, helps guide your users to an absolute path (e.g., /about):

```javascript

<Link to="/about">About</Link>

```
Since the <Link> component fully renders a proper anchor tag (```<a>```) with the appropriate href, you can expect it to behave how a normal link on the web behaves.

## Further Research

* ```<Link>``` at React Training
* [Source Code](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/modules/Link.js)

# [The Route Component](https://youtu.be/NlHLfRb6T_E)

* [video](https://youtu.be/NlHLfRb6T_E) 

## Route Component Recap
The main takeaway from this section is that with a Route component if you want to be able to pass props to a specific component that the router is going to render, you'll need to use Route's render prop. As you saw, render puts you in charge of rendering the component which in turn allows you to pass any props to the rendered component as you'd like.

In summary, the Route component is a critical piece of building an application with React Router because it's the component which is going to decide which components are rendered based on the current URL path.

##  Finishing The Contact Form

⚠️ Required File ⚠️
At the beginning of the program, we gave you the option to clone our starter project or to start from scratch using create-react-app. If you haven't added it yet, you'll need the [ImageInput.js](https://github.com/udacity/reactnd-contacts-complete/blob/master/src/ImageInput.js) file for the following video.

* [video](https://youtu.be/8JjYl5r3wLk)

## Serialize The Form Data

At this point, our form will serialize the values from user input (i.e., the name and email), adding them as a query string to the URL. We can add some additional functionality by having our app serialize these form fields on its own. After all, we want the app to ultimately handle creating the contact and saving it to the state.

To accomplish this, we'll use the [form-serialize](https://www.npmjs.com/package/form-serialize) package to output this information as a regular JavaScript object for the app to use.

```npm install --save form-serialize```

* [Let's see it all in action!](https://youtu.be/nf17fXAaRVs)

* [Update Server With New Contact](https://youtu.be/hRTQp9pFr_c)

## [Lesson Summary](https://youtu.be/_tQZiFzaC3k)

### Further Learning
If you're interested in learning more about React Router, we recommend these two resources. First, [Build your own React Router v4](https://tylermcginnis.com/build-your-own-react-router-v4/) will walk through how to implement your own mini version of React Router to better understand its implementation details. Next, is React Training's [official documentation](https://reacttraining.com/react-router/web/guides/philosophy) for React Router. Feel free to also check out Tyler McGinnis's React [Router course](https://tylermcginnis.com/courses/react-router/) as well!

Course Outro

Check out the following resources to up your skills:

* [the React Docs](https://facebook.github.io/react/docs/hello-world.html)
* [Tyler's Blog](https://tylermcginnis.com/)

### People to Follow

Whether it be popular blog posts or developers to follow on Twitter, a large part of getting everything out of a new technology is utilizing existing community resources. So we want to share with you with our favorite resources from the React community that we've found helpful over the last few years. Hopefully you'll find them helpful as well.

* [Dan Abramov](https://twitter.com/dan_abramov)
* [Ryan Florence](https://twitter.com/ryanflorence)
* [Michael Jackson](https://twitter.com/mjackson)
* [Sebastian Markbåge](https://twitter.com/sebmarkbage)
* [Henry Zhu](https://twitter.com/left_pad)
* [Preethi Kasireddy](https://twitter.com/iam_preethi)
* [Merrick Christensen](https://twitter.com/iammerrick)
* [Christopher Chedeau](https://twitter.com/vjeux)
* [React](https://twitter.com/reactjs)
* [Tyler McGinnis](https://twitter.com/tylermcginnis33)

### Blog posts to read
* [You're missing the point of React](https://medium.com/@dan_abramov/youre-missing-the-point-of-react-a20e34a51e1a)
* [React "Aha" Moments](https://tylermcginnis.com/react-aha-moments/)
* [9 Things every React.js Beginner should know](https://camjackson.net/post/9-things-every-reactjs-beginner-should-know)
* [React Elements vs React Components](https://tylermcginnis.com/react-elements-vs-react-components/)

If you want to learn more advanced topics in React, you can check out [React Training's "Advanced React"](https://reacttraining.com/online/advanced-react) course.


# [Lesson 7 The JavaScript API Overview](https://youtu.be/2mWonkVa5Cs)

Load a Google Map into your site adding :

```javascript

<script async defer src="https://maps.googleapis.com/maps/js?key=MYAPIKEY&v=3&callback=initMap"></script>

// or

<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
    async defer></script>


```

* script line into HTML line to load the API
* we are loading asynchronously which means that the rest of the page will render while the JavaScript API lads, and then our call bacj function will execute when the API is done loading.

* maps.googleapis.com is our *endpoint*

* the paramater v=3 indicates that we're calling version 3 of the API

* next you must include the API KEY
  * alternatively, you can use the client ID if you're a Max API Premium Plan costumer

* Next you need a div element in our html body with the id="map"

```html
<div id="map"></div>
```

* css: #map {height: 100%;}

```css

#map {height: 100%;}

```

* js to load the map

```javascript

var map;

function initMao() {
    //constructor creates a new map - only center and zoom are required.

    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.7413549,
            lng: -73.9980244
        }
        zoom: 13
    });

}

```


The full reference guide for the JavaScript API is available [here](https://developers.google.com/maps/documentation/javascript/reference).

If you need help, see the getting started documentation [here!](https://developers.google.com/maps/documentation/javascript/tutorial)

To get coordinates of a specific location, try visiting [this page](https://google-developers.appspot.com/maps/documentation/utils/geocoder/)!


## [Making your Mark](https://youtu.be/Dzw4e5pYTj8)

* Icon called **marker**: are objects which can be constructed either in the initiazed function or upon an action (eg. clicking a button)

```javascript

let rome = {lat: , lng: };

let marker = google.maps.Marker({
  position: rome,
  map: map,
  title: 'First Maker!'
})

```

See our developer site for more information on [markers](https://developers.google.com/maps/documentation/javascript/markers) and [infowindows](https://developers.google.com/maps/documentation/javascript/infowindows)

[Window Shopping Part 1](https://youtu.be/TBBmxnIHbBc)

```javascript

let infoWindow = new google.maps.InfoWindow({
    content: 'Do you ever feel like an infoWindow?'
});
marker.addListener('click', function() {
    infoWindow.open(map, marker);
});

```

[Window Shopping Part 2]()

For rendering data onto your map, you can use a [Layer](https://developers.google.com/maps/documentation/javascript/layers) such as a [Data Layer](https://developers.google.com/maps/documentation/javascript/datalayer) or a [Fusion Tables layer](https://developers.google.com/maps/documentation/javascript/fusiontableslayer).


## Getting Started with APIs

### [Being Stylish](https://youtu.be/tNwxEiIQ20Q)


```javascript

 map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7413549, lng: -73.9980244},
          zoom: 13,
          styles: styles,
          mapTypeControl: false
        });

```

```javascript

var map;

function initMao() {
    //constructor creates a new map - only center and zoom are required.

    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.7413549,
            lng: -73.9980244
        }
        zoom: 13
        styles: styles;
        mapTypeControl: false
    });

}

```

mapTypeControl: parameter that allows the user to change the map type to road, terrain, satellite, etc. You can disable by setting it to false.

```javascript

// This function takes in a COLOR, and then creates a new marker
      // icon of that color. The icon will be 21 px wide by 34 high, have an origin
      // of 0, 0 and be anchored at 10, 34).
      function makeMarkerIcon(markerColor) {
        var markerImage = new google.maps.MarkerImage(
          'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
          '|40|_|%E2%80%A2',
          new google.maps.Size(21, 34),
          new google.maps.Point(0, 0),
          new google.maps.Point(10, 34),
          new google.maps.Size(21,34));
        return markerImage;
      }


```

* [styled maps](https://developers.google.com/maps/documentation/javascript/styling)

* [map types](https://developers.google.com/maps/documentation/javascript/styling#creating_a_styledmaptype)

* [Snazzy Maps](https://snazzymaps.com/)

* [google.maps.MapTypeStyleFeatureType](https://developers.google.com/maps/documentation/javascript/reference#MapTypeStyleFeatureType)

* [example](https://developers.google.com/maps/documentation/javascript/examples/maptype-styled-complex)


































