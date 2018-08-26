# FRONT-END APPLICATIONS

## INDEX

*  1 Changing Expectations : structured code is vitally important

* Refactoring

* Creating Promises

* Chaining Promises

* Ajax with XHR

* Ajax with Jquery

* Ajax with Fetc

* Features of Single Page Apps

* Examine Framework's Source

* Angular

* Ember

* The beneficts of Offline First

* Introducing the Service Worker

* Project: Restaurant Reviews App Stage 1


# Lesson 1 Changing Expectations

## 1.1 Project Cat Clicker

**Remind:**

If you're writing Cat Clicker with vanilla JS (no jQuery), you'll be adding the "click" event with elem.addEventListener().

```javascript
var elem = document.getElementById('my-elem');
elem.addEventListener('click', function(){
  //the element has been clicked... do stuff here
}, false);

```

If you're using jQuery, you'll be adding the "click" event listener with jQuery.click().


```javascript
$('#my-elem').click(function(e) {
  //the element has been clicked... do stuff here
});

```

## 1.2 Closures and Event Listeners

```javascript
var nums = [1,2,3];

for (var i = 0; i < nums.length; i++) {

    // This variable keeps changing every time we iterate!
    //  It's first value is 1, then 2, then finally 3.
    var num = nums[i];

    // On click...
    elem.addEventListener('click', function() {

        // ... alert num's value at the moment of the click!
        alert(num);

        // Specifically, we're alerting the num variable 
        // that's defined outside of this inner function.
        // Each of these inner functions are pointing to the
        // same `num` variable... the one that changes on
        // each iteration, and which equals 3 at the end of 
        // the for loop.  Whenever the anonymous function is
        // called on the click event, the function will
        //  reference the same `num` (which now equals 3).

    });

};

```

The solution involves utilizing closures. We're going to create an inner scope to hold the value of num at the **exact moment we add the event listener**. 

```javascript

var num = nums[i];

elem.addEventListener('click', function() {

    alert(num);

});


elem.addEventListener('click', (function(numCopy) {
    return function() {
        alert(numCopy)
    };
})(num));


```
* IIFE (Immediately-Invoked Function Expression, pronounced like "iffy"): method of wrapping an anonymous function in parentheses and calling it right away.

## 1.3 The Final Version

```javascript

// clear the screen for testing
document.body.innerHTML = '';

var nums = [1,2,3];

// Let's loop over the numbers in our array
for (var i = 0; i < nums.length; i++) {

    // This is the number we're on...
    var num = nums[i];

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = num;

    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', (function(numCopy) {
        return function() {
            alert(numCopy);
        };
    })(num));

    document.body.appendChild(elem);
};

```

Quality of a good projet

* stable bug-free
* cleanly written
* scale well
* extensible

## 1.4 [Introduction to MVO - Model Octopus View](https://classroom.udacity.com/nanodegrees/nd001/parts/e4e4c31c-2348-4382-826f-caac197d6f5f/modules/4db0b091-fc81-40c2-b7f0-a4ded06480e1/lessons/3417188540/concepts/33740985660923)

* Model is where all of the data is stored (data form the server and the user)

* Octopus connect the Model and the View (functionality)

* View (DOM elements, inputs, buttons and images) user's interface of your application, both for reading your application data and for reading data - It something that the user sees and interacts with (no data or functionality)

acronyms like 
* **MVC** Model View Controller
* **MVVM** Model View View Model
* **MVP** Model View Presenter
* **MV*** Model View Whatever

[quiz](https://youtu.be/juPqC4hnmeQ)

[quiz](https://youtu.be/lZWV5qvA4vM)



## 1.5 What Is the Model in Our Code

[video 1](https://youtu.be/Y_OG0y45slI)

[video 2](https://youtu.be/DgUi2YCUVF0)

[video 3](https://youtu.be/vhSBVX_CEEE)


* Link to the [Pizza Repository](https://github.com/udacity/ud989-pizzamvo)

[video 4](https://youtu.be/EGZci21y9dw)

Repository for [Udacity Retain](https://github.com/udacity/ud989-retain)

Take a few minutes to explore the organization of Udacity Retain.

* How is it organized?
    * Does the model ever talk to the view directly?
    * How about the view to the model?
* Add comments to the code if you'd like.

[video 5](https://youtu.be/aAP2GQb1mlA)

[video 6](https://youtu.be/RhnqbWxtG8U)

* **localStorage.clear()**

[quiz](https://youtu.be/eYyLBvE3sFA)

[quiz - Identify Model and View](https://youtu.be/by16pN39cc8)

[video 7 - Review Model and View for CC Premium](https://youtu.be/W1280ms4mdA)

[video 9 - Identify Octopus](https://youtu.be/KbWalBpacaY)

[video 10 - Andy’s Code 1](https://youtu.be/Yjj1MTIineA)

[quiz Andy’s Code 1](https://youtu.be/HIidMQJ3J3s)

[quiz Andy’s Code 2](https://youtu.be/laXNA7xyumI)

[quiz](https://youtu.be/UO0y7CAx_wo)

## 1.6 Refactor Spaghetti Code

* [Interview with Nic](https://youtu.be/LOAnZInn1jI)

Refactoring is the process which you take a piace of code and make it more readable and more maintanable without changing its functionality.

So that means you might want to break up large functions or complicated function without changing the way they're acced by the outside world or the other components of your application.


* [Interview with Jacques](https://youtu.be/PU0CwUqrDkY)

* [Request next Exercise](https://youtu.be/W4RoPqW2Zsg)
    * [School Attendance Application](https://github.com/udacity/ud989-school-attendance)


Lesson 3 Creating Promises

Sounds used courtesy of Freesound Project, creative commons license: [Tristan Lohengrin](https://freesound.org/people/Tristan_Lohengrin/)

## Lesson 3.1

[Callbacks vs Promises](https://youtu.be/9nwPenviboM)

[Callbacks vs Thens](https://youtu.be/RR0MoEoHb9U)

Callbacks are the default Javascript technique for asynchronous work. Pass the function to another function, 
and the call the callback function at some later time when some conditions have beeb met.

* How do you handle arrors?
    * it's best pratice to assume that any operation could fail at any time. eg. Network requests.
* if an error occurs here should you still execute the call back?




```javascript

var sequence = get('example.json')
.then(doSomething)
.then(doSomethingElse)

```
[Course Map](https://youtu.be/CEwQLIsmGCM)

* Wrapping 
* Thening
* Catching
* Chaining

4 Fase

* **Fulfilled (Resolved)**: (```It worked```) means that action related to the promises succeded. This state is also known as *resolved*.

* Rejected: (```It didn't work```) means that action related to the promises failed. 

* Pending: (```Still waiting```)  means that has not yet fulfilled or rejected. 

Setteld: (```Something happened```) which means that the promises has either fulfilled or rejected. 

[JavaScript Promises - Jake Archibald](http://www.html5rocks.com/en/tutorials/es6/promises/)

```javascript
var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});

promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"
});

```

[Promise Timeline](https://youtu.be/SCuo55DgIwk)

[quiz Async Scenarios](https://youtu.be/xSvYvK7MwYE)


* [Syntax](https://youtu.be/ikoar93RWe4)

```javascript

new Promise(function(resolve) {
  console.log('first');
  resolve();
  console.log('second');
}).then(function() {
  console.log('third');
});

```

The values themselves they're being passed to the functions called by ```.then``` or ```.catch```.

* [Write Your First Promise](https://youtu.be/8CxHueAZM3s)

* [Write Your First Promise Solution](https://youtu.be/VK9Nyvmx5lY)


* [Wrapping readyState](https://youtu.be/85UkGKKZUxs) and [solution](https://youtu.be/64aRzZgFJsQ)



To Read 

* [**6 Reasons Why JavaScript’s Async/Await Blows Promises Away (Tutorial)**](https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9)

* [hrottling the Network in Chrome DevTools](https://css-tricks.com/throttling-the-network/)

* Open DevTools
* Click the ‘Network’ tab
* Select which type of connection you want to imitate
* Reload the page to see assets downloading at that connection speed

* ![imag](images/network-tab.gif)

* [Document.readyState](https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState)

* [network throttling](https://developers.google.com/web/tools/chrome-devtools/network-performance/network-conditions)
* [Simulate network throttling for up-to-date information](https://developers.google.com/web/tools/chrome-devtools/network-performance/reference#throttling)

## 3.2 IMPORTANT! Working w/Exoplanet Explorer

**What is this?**

You'll be working with a stripped down version of the [Exoplanet Explorer](http://www.exoplanetexplorer.com/) to complete all of the programming quizzes for the rest of the course. So, you need to install it.

**Installation**

I built the Exoplanet Explorer from the [Polymer](https://www.polymer-project.org/1.0/) [Starter Kit](https://developers.google.com/web/tools/polymer-starter-kit/?hl=en). I'm copying most of the rest of these instructions from the README written by the Polymer team. If you ever need help, check out the README.

**Clone the repo first (for everyone)**

Here's the link to the repo.

You should be on the ```hr-start branch```. If not, then ```git checkout xhr-start``` or ```git checkout origin xhr-start```.

**Quick-start (for experienced users)**

With Node.js installed, run the following one liner from the root of your Exoplanet Explorer download:

```npm install -g gulp bower && npm install && bower install```

**Prerequisites (for everyone)**

The full starter kit requires the following major dependencies:

* Node.js, used to run JavaScript tools from the command line.
* npm, the node package manager, installed with Node.js and used to install Node.js packages.
* gulp, a Node.js-based build tool.
* bower, a Node.js-based package manager used to install front-end packages (like Polymer).

**To install dependencies:**

1) Check your Node.js version.

```
node --version
```
The version should be at or above 0.12.x.


2) If you don't have Node.js installed, or you have a lower version, go to [nodejs.org](https://nodejs.org/) and click on the big green Install button.

3) Install ```gulp``` and ```bower``` globally.

```
npm install -g gulp bower
```

This lets you run ```gulp``` and ```bower``` from the command line.

4) Install the starter kit's local ```npm``` and ```bower``` dependencies.

```
cd exoplanet-explorer && npm install && bower install
```
This installs the element sets (Paper, Iron, Platinum) and tools the starter kit requires to build and serve apps.

**NOTE! INSTALLATION MAY TAKE A LONG TIME!**
 There are many dependencies to download and install.

**Post-Installation and Workflow**

For every quiz, you'll be given a branch to checkout. You can always find it in the instructor notes. All of your work will be done in:

```
app/scripts/app.js
```
**Serve / watch**

```
gulp serve
```

* use ```ctrl + c``` to log out from the serve in bash

This outputs an IP address you can use to locally test and another that can be used on devices connected to your network.

It's recommended to use Chrome, as non-vulcanized Polymer projects will load fastest on Chrome.

**Build & Vulcanize**

```
gulp
```

Build and optimize the current project, ready for deployment. This includes linting as well as vulcanization, image, script, stylesheet and HTML optimization and minification.

**Troubleshooting**

See [this bug](https://github.com/nodejs/node-gyp/issues/695) if you get the following error from Gyp:

```
"Error: self signed certificate in certificate chain"
```

[Source how to fix: ](https://github.com/udacity/exoplanet-explorer/issues/12)

```
Failed to load resource: net::ERR_FILE_NOT_FOUND    webcomponents-lite.js:1

index.html:1 Access to Imported resource at 'file:///C:/Users/Laura/Documents/GitHub/exoplanet-explorer/app/elements/elements.html' from origin 'null' has been blocked by CORS policy: Invalid response. Origin 'null' is therefore not allowed access.
```

First off follow the installation guide in the README then run these commands.
```
npm install -g npm-check-updates
ncu -u // you may ignore this one
npm install
bower install
I was also having a issue with jshint so run this if necessary
npm install --save-dev jshint gulp-jshint
```

The go to

* bower.json and change ```"test-fixture": "PolymerElements/test-fixture#^3.0.0"``` the number with the number ```3``` with the last version.


DO NOT FORGET ON BASH 

```
gulp serve
```


## [Wrap an XHR - Solution](https://youtu.be/cWqEP9ZBDvk)


**Instructions** 

1. If you haven't already, read this and follow the instructions on working with the Exoplanet Explorer repo.

2. Checkout the ```xhr-start``` branch and navigate to ```app/scripts/app.js```.

3. Wrap the XHR in a Promise in the get() function. See [XHR documentation](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) for more information.

4. Resolve on load and reject on error.

5. If the XHR resolves, use ```addSearchHeader()``` to add the search header to the page.

6. If the XHR fails, ```console.log()``` the error and pass ```'unknown'``` to ```addSearchHeader()```.

Checkout ```xhr-solution``` to see my solution.


[**solution XHR**](https://youtu.be/cWqEP9ZBDvk)

**END PROJECT SETUP**

## 3.3 [Web Technologies](https://youtu.be/yzIpks4kTI4)

**Issues with jQuery Promises:**

* **10 June 2016 update!** [With the 3.0 release, jQuery promises now satisfy Promises/A+ compliance!](https://blog.jquery.com/2016/06/09/jquery-3-0-final-released/)

* You're Missing the [Point of Promises - Domenic Denicola](https://blog.domenic.me/youre-missing-the-point-of-promises/) (Pre-jQuery 3.0)
* [jQuery Deferred Broken - Valerio Gheri](https://thewayofcode.wordpress.com/tag/jquery-deferred-broken/) (Pre-jQuery 3.0)

**Q Style Promises**

* They're an implementation of the [Promises/A+ spec](https://promisesaplus.com/).
* [$q service Documentation](https://goo.gl/J1K2iv).

**Browser Implementation**
* [Can I Use... - Promises](http://caniuse.com/#search=promises)

* [ES2015 Promises Polyfill](https://github.com/jakearchibald/es6-promise)

* [Q Library](https://github.com/kriskowal/q)
* [Bluebird Promises](https://github.com/petkaantonov/bluebird)

**APIs that Use Promises**

* [Service Worker API](http://www.html5rocks.com/en/tutorials/service-worker/introduction/)
* [Fetch API](https://davidwalsh.name/fetch)


## XHR

```javascript
var request;
if (window.XMLHttpRequest) { // Mozilla, Safari, ...
  request = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE
  try {
    request = new ActiveXObject('Msxml2.XMLHTTP');
  } 
  catch (e) {
    try {
      request = new ActiveXObject('Microsoft.XMLHTTP');
    } 
    catch (e) {}
  }
}`

request.open('GET', 'https://davidwalsh.name/ajax-endpoint', true);
request.send(null);


request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
```
**Request Callbacks**
```javascript
// state changes
request.onreadystatechange = function() {
	if(request.readyState === 4) { // done
		if(request.status === 200) { // complete	
			console.log(request.responseText)
		}
	}
};

// addEventListener
function callbackFn(e) {
	// Handle each event
}
request.addEventListener("progress", callbackFn, false);
request.addEventListener("load", callbackFn, false);
request.addEventListener("error", callbackFn, false);
request.addEventListener("abort", callbackFn, false);

```

* [
Basic AJAX Request: XMLHttpRequest](https://davidwalsh.name/xmlhttprequest)


## [Fetch API Exercise](https://youtu.be/2fFfekIljRI)

**Instructions**
1. If you haven't already, read this and follow the instructions on working with the Exoplanet Explorer repo.

2. Checkout the ```fetch-start``` branch and navigate to ```app/scripts/app.js```.

3. Rewrite ```get``` with the Fetch API: https://davidwalsh.name/fetch

4. Finish the ```getJSON()``` method, which should take a URL and return the parsed JSON response.
    * ```getJSON()``` needs to return a Promise!

5. Test by logging the response and by passing the query string from ```getJSON()``` to ```addSearchHeader()```.

6. Handle errors by passing ```'unknown'``` to ```addSearchHeader()``` and logging them.

[Fetch API Walkthrough](https://davidwalsh.name/fetch)

* [What Happens Next?](https://youtu.be/uKXGJW2_2I0)
    * ["Thenable" used in context of promises on MDN.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Methods)

[**solution**](https://youtu.be/2fFfekIljRI)

## Lesson 4 Chaining Promises 

[Fetch and Show First Planet](https://youtu.be/HsnJn9KcTjI)

**Instructions** 
1 If you haven't already, read this and follow the instructions on working with the Exoplanet Explorer repo.
2 Checkout the ```first-thumb-start``` branch and navigate to ```app/scripts/app.js```.
3 Get the planet data and add the search header.
4 Create the first thumbnail with ```createPlanetThumb(data)```.
5 Handle errors!
  * Pass ```'unknown'``` to the search header.
  * Log the error.
Follow me online!
@cwpittman

Checkout the ```first-thumb-solution``` branch to see my code!

**[Error Handling Stragies](https://youtu.be/N1GK3oSo6xY)**

```javascript
get('example.json')
    .then(resolveFunc)
    .catch(rejectFunc);
    //shortcut
```

```javascript
get('example.json')
    .then(resolveFunc)
    .then(undefine, rejectFunc);

```

```javascript
get('example.json')
    .then(resolveFunc, rejectFunc);

```

[soluction](https://youtu.be/4XfLON4SXOM)
[solution2](https://youtu.be/N1GK3oSo6xY)

[Promises: Resolve Is Not the Opposite of Reject - Jake Archibald](https://jakearchibald.com/2014/resolve-not-opposite-of-reject/)

[Quiz solution](https://youtu.be/SsEcnNRDks8);


* [Series vs Parallel Requests](https://youtu.be/XAxs5IynkQQ)
* [Series vs Parallel Requests  solution](https://youtu.be/YmwhSgOC5Wk)


* [Array Methods and Promises](https://youtu.be/RGRxW4Lz1dQ)


* [Promises with .forEach quiz](https://youtu.be/0ob3r8QswGs)


* [Promises with .forEach solution](https://youtu.be/loLkm6bboGY)


* [Promises with .map](https://youtu.be/JkmwpsCCdwY)


* [Promises with .map - solution](https://youtu.be/ieyzYs6wN7Y)

* [All Promises](https://youtu.be/B6YCz2z02qE)


* [All Promises - solution](https://youtu.be/e24lQluE_-s)

[Documentation for Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)


## Lesson 5 Ajax with XHR

* [Course Intro](https://youtu.be/UGk5BPaytiA)

**Ajax** is the concept of asynchronously requesting data

[Client Server Demonstration](https://youtu.be/nozbz6J3_4w)


**Vocabulary**

**GET Request**: An internet request for data. Sent from a client to a server.

**Response**: A server's response to a request. Sent from a server to a client. A response to a GET request will usually include data that the client needs to load the page's content.


* [Ajax Definition & Examples](https://youtu.be/7nufhg4DMuc)

* [ Jesse James Garrett coined the term AJAX](https://web.archive.org/web/20080702075113/http://www.adaptivepath.com/ideas/essays/archives/000385.php) mean “Asynchronous Javascript and XML

* [XMLHTTPRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) to fetch data and then modify the current page.

## 5.1 **APIs**

 where is this data coming from? And how do we get access to it? How will our app know how to retrieve that data?

The acronym "API" stands for:

**A**pplication
**P**rogramming
**I**nterface


[Google's APIs
](https://developers.google.com/apis-explorer/) All the Google services you can imagine.

[Giant database of APIs](http://www.programmableweb.com/apis/directory)

 [Udacity API](https://www.udacity.com/public-api/v1/catalog)


 ## 5.2 The XHR Object

 Just like how the ```document``` is provided by the JavaScript engine, the JavaScript engine also provides a way for us to make asynchronous HTTP requests. We do that with an ```XMLHttpRequest``` object. We can create these objects with the provided ```XMLHttpRequest``` constructor function.

One of the best ways to learn is to get your hands dirty and try things out! So go to [Unsplash](https://unsplash.com/), open up the developer tools, and run the following on the console:

```javascript
const asyncRequestObject = new XMLHttpRequest();
```

```XMLHttpRequests``` (commonly abbreviated as XHR or xhr) can be used to request any file type (e.g. plain text files, HTML files, JSON files, image files, etc.) or data from an API.

**Note**: We'll be digging into the XMLHttpRequest object. We'll look at how to create it, what methods and properties need to be used, and how to actually send asynchronous requests. For even more info on using the XHR object to make async requests, check out these links:

* MDN's docs - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
* WHATWG Spec - https://xhr.spec.whatwg.org/
* W3C Spec - https://www.w3.org/TR/XMLHttpRequest/

## 5.3 XHR's .open() method

```javascript
asyncRequestObject.open();
```

* [open method](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open)

  * .open() takes a number of parameters, but the most important are its **first two**: ```the HTTP method URL to send the request```

  If we want to asynchronously request the homepage from the popular high-res image site, Unsplash, we'd use a ```GET``` request and provide the URL:

  ```javascript

  asyncRequestObject.open('GET', 'https://unsplash.com');

  ```

  The main HTTP methods you will use are :

  * ```GET``` - to retrieve data
  * ```POST``` - to send data

  For more info, check out the course on [HTTP & Web Servers](https://classroom.udacity.com/courses/ud303)!

  **Warning**: For security reasons, you can only make requests for assets and data on the same domain as the site that will end up loading the data. For example, to asynchronously request data from google.com your browser needs to be on google.com. This is known as the [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy). This might seem extremely limiting, and it is!

The reason for this is because JavaScript has control over so much information on the page. It has access to all cookies and can determine passwords since it can track what keys are pressed. However, the web wouldn't be what it is today if all information was bordered off in its own silos. The way to circumvent the same-origin policy is with [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) (Cross-Origin Resource Sharing). CORS must a technology that is implemented on the server. Services that provide APIs use CORS to allow developers to circumvent the same-origin policy and access their information.

```javascript

const req = new XMLHttpRequest();
req.open('GET', 'https://www.google.com/');

```
The XHR's .open() method does not actually send the request. It sets the stage and gives the object the info it will need when the request is actually sent.

``` javascript
const myAsyncRequest = new XMLHttpRequest();
myAsyncRequest.open('GET', 'https://udacity.com/', false);
```

Passing false as the third option makes the XHR request become a synchronous one. This will cause the JavaScript engine to pause and wait until the request is returned before continuing - this "pause and wait" is also called "blocking". This is a terrible idea and completely defeats the purpose for having an asynchronous behavior. Make sure you never set your XHR objects this way! Instead, either pass true as the 3rd argument or leave it blank (which makes it default to true).'

## 5.4 XHR's .send() method

[.send() method](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send)

![send-xhr-request-1.gif](/images\send-xhr-request-1.gif)

[The XHR request is sent, but we don''t see anything!](https://youtu.be/m9C0LJoWhOE)

**Handling Success**

To handle the successful response of an XHR request, we set the [onload property](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget/onload) on the object to a function that will handle it:

```javascript
function handleSuccess () {
    // in the function, the `this` value is the XHR object
    // this.responseText holds the response from the server

    console.log( this.responseText ); // the HTML of https://unsplash.com/
}

asyncRequestObject.onload = handleSuccess;
// onload is called when the response is successful
```

**Handling Errors**

 If something happens with the request and it can't be fulfilled, then we need to use the onerror property:

 ```javascript

function handleError () {
    // in the function, the `this` value is the XHR object
    console.log( 'An error occurred :(' );
}

asyncRequestObject.onerror = handleError;

```
 As with ```onload```, if ```onerror``` isn't set and an error occurs, that error will just fail silently and your code (and your user!) won't have any idea what's wrong or any way to recover.

 ## 5.5 A Full Request

 Here's the full code that we've built up that creates the XHR object, tells it what info to request, sets up handlers for a success or error, and then actually sends the request:

```javascript

function handleSuccess () { 
  console.log( this.responseText ); 
// the HTML of https://unsplash.com/}
function handleError () { 
  console.log( 'An error occurred \uD83D\uDE1E' );
}
const asyncRequestObject = new XMLHttpRequest();
asyncRequestObject.open('GET', 'https://unsplash.com');
asyncRequestObject.onload = handleSuccess;
asyncRequestObject.onerror = handleError;
asyncRequestObject.send();

```


## 5.5 APIs and JSON

When making a request from an API that returns JSON, all we need to do is convert that JSON response into a JavaScript object. We can do that with ```JSON.parse();```. Let's tweak the onload function to handle a JSON response:

```javascript

function handleSuccess () {
const data = JSON.parse( this.responseText ); // convert data from JSON to a JavaScript object
console.log( data );
}

asyncRequestObject.onload = handleSuccess;

```

## 5.6 [Project Initial Walkthrough](https://youtu.be/-LG9wKufSjg)

**Download the Starter Code**

The starter project is on GitHub: [Here](https://github.com/udacity/course-ajax). 

You can clone the project by running the following Git command in your terminal:

```
git clone https://github.com/udacity/course-ajax.git
```
Once you've cloned the project, you'll notice that it has three separate folders:

1 ```lesson-1-async-w-xhr```
2 ```lesson-2-async-w-jQuery```
3 ```lesson-3-async-w-fetch```


**Create Your Accounts**

To complete these final steps, you'll need accounts with Unsplash and The New York Times.

**Unsplash**

* Create a developer account here - https://unsplash.com/developers

* Next, create an application here - https://unsplash.com/oauth/applications
  * this will give you an "Application ID" that you'll need to make requests

**The New York Times**
* Create a developer account here - https://developer.nytimes.com/
* They'll email you your api-key (you'll need this to make requests)

**Unsplash Request**

In our app, the variable ```searchedForText``` contains the text we're interested in, and we'll set the ```onload``` property to a function called ```addImage``` (which is a do-nothing function that we'll flesh out in a moment). If we temporarily set ```searchedForText``` to "hippos", the code for the XHR call to Unsplash is:

```javascript
function addImage(){}
const searchedForText = 'hippos';
const unsplashRequest = new XMLHttpRequest();

unsplashRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
unsplashRequest.onload = addImage;

unsplashRequest.send()
// you get an error
```

## 5.7 Setting a Request Header

* [setRequestHeader](setRequestHeader.)

```javascript
const searchedForText = 'hippos';
const unsplashRequest = new XMLHttpRequest();

unsplashRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
unsplashRequest.onload = addImage;
unsplashRequest.setRequestHeader('Authorization', 'Client-ID <your-client-id>');
unsplashRequest.send();

function addImage(){
}

```

[video](https://youtu.be/rgupp3Tk5tw)

```javascript

const img


```


```javascript

function addArticles () {}
const articleRequest = new XMLHttpRequest();
articleRequest.onload = addArticles;
articleRequest.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=<your-API-key-goes-here>`);
articleRequest.send();

```
fill in the URL above with the API key you received in an email from the New York Times after signing up as a developer.

[solution Setting a Request Header](https://youtu.be/V3zRuIqdUuU)

[Project Final Walkthrough
](https://youtu.be/eumAZ9Wo9i0)

## 5.8 XHR Recap

**XHR Usage Review**
There are a number of steps you need to take to send an HTTP request asynchronously with JavaScript.

**To Send An Async Request**
* create an XHR object with the XMLHttpRequest constructor function

* use the .open() method - set the HTTP method and the URL of the resource to be fetched

* set the .onload property - set this to a function that will run upon a successful fetch

* set the .onerror property - set this to a function that will run when an error occurs

* use the .send() method - send the request

**To Use The Response**
* use the .responseText property - holds the text of the async request's response

**Note**: The original XHR specification was created in 2006. This was version 1 of the specification. A number of years with minimal changes to the spec.

In 2012, work was started on a version 2 of the XHR specification. In 2014, the XHR2 spec was merged into the XHR1 spec so that there wouldn't be diverging standards. There are still references to XHR2, but the XHR specification now fully incorporates XHR2.

Check out this HTML5Rocks article for info on the [new tricks in XHR2](http://www.html5rocks.com/en/tutorials/file/xhr2/) that are now in the XHR spec.


## Lesson 6.1 The jQuery Library & Ajax

[jQuery CDN – Latest Stable Versions](https://code.jquery.com/)

[Intro to jQuery](https://eu.udacity.com/course/intro-to-jquery--ud245)


The .ajax() method is at the heart of all asynchronous requests for the entire jQuery library. There are a couple of ways you can call the .ajax() method:

```javascript
$.ajax(<url-to-fetch>, <a-configuration-object>);

// or 

$.ajax(<just a configuration object>);
```
**What's a "configuration object"?**
A configuration object is just a plain ol' JavaScript object that's used to configure something.

```javascript

var settings = {
   frosting: 'buttercream',
   colors: ['orange', 'blue'],
   layers: 2,
   isRound: true
};

const myDeliciousCake = MakeCake( settings );


// or

const myDeliciousCake = MakeCake({
   frosting: 'buttercream',
   colors: ['orange', 'blue'],
   layers: 2,
   isRound: true
});

```

**Making an Ajax call** Syntax

```javascript

$.ajax({
    url: 'https://swapi.co/api/people/1/'
});

```

![swapi-request](\images\swapi-request.gif)


**Handling The Returned Data**

We can chain on to ```.ajax()``` with a ```.done()``` method. 

```javascript

function handleResponse(data) {
    console.log('the ajax request has finished!');
    console.log(data);
}

$.ajax({
    url: 'https://swapi.co/api/people/1/'
}).done(handleResponse);

```

![request-with-done](\images\swapi-request-with-done.gif)

*Asynchronous call set up with a done method to handle the response. The request is made, and then the response is logged to the console.*

example:

```javascript
const imgRequest = new XMLHttpRequest();
imgRequest.onload = addImage;
imgRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
imgRequest.setRequestHeader('Authorization', 'Client-ID <your-client-id-here>');
imgRequest.send();

// turn in...

$.ajax({
    url: `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`
}).done(addImage);
```

[**the API for the .ajax() method**](http://api.jquery.com/jQuery.ajax/)

```javascript

$.ajax({ 
    url: https://api.unsplash.com/search/photos?page=1&query=${searchedForText} 
    headers: { 
        Authorization: 'Client-ID 123abc456def' 
    } 
}).done(addImage);
```

*A header is added to the request by passing a headers object as a property. Each key in the headers object is the name of the header, and the value is what will be used as the value for the header.*

[**Code Walkthrough**](https://youtu.be/VZ-D0Odce9M)

1. open up the project in a browser
2. open up DevTools
3. switch to the "Sources" pane
4. open up the jquery.js file
    * in Chrome, you can open a specific file by searching for it with ctrl/command + P
5. set a breakpoint on line ...

![image](jquery-xhr-set-breakpoint.gif)
*A breakpoint set in the jQuery source file right where new XMLHttpRequest object is created*

![image](code-paused-at-breakpoint.png)

**Debugging in Chrome**

* [Pause Your Code With Breakpoints](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints)
* [JavaScript Debugging Reference](https://developers.google.com/web/tools/chrome-devtools/javascript/reference)


## JavaScript Call Stack (Review the Call Stack)
 
the order is:

1. our code in an anonymous function calls ```.ajax()```
2. ```.ajax()``` calls a ```.send()``` method
3. .send() calls options.xhr()
4. ```options.xhr()``` calls ```jQuery.ajaxSettings.xhr``` which creates a new XHR object

![image](query-xhr-call-stack.gif)
*Clicking through the call stack to see the order of function calls*

## [**Walkthrough of .ajaxTransport**](https://youtu.be/qtZJzY66RoM)


**$.ajax() Uses XHR Recap**
jQuery's ajax method does a lot of things under the hood.

* creates a new XHR object each time it's called
* sets all of the XHR properties and methods
* sends the XHR request

## jQuery's Other Async Methods

jQuery has a number of other methods that can be used to make asynchronous calls. These methods are:

* [.get()](http://api.jquery.com/jQuery.get/)
* [.getJSON()](http://api.jquery.com/jQuery.getJSON/)
* [.getScript()](http://api.jquery.com/jQuery.getScript/)
* [.post()](http://api.jquery.com/jQuery.post/)
* [.load()](http://api.jquery.com/load/)

Each one of these functions in turn calls jQuery's main ```.ajax()``` method. These are called "convenience methods" because they provide a convenient interface and do some default configuration of the request before calling ```.ajax()```.


```javascript
jQuery[ method ] = function(...) { … }

// become

jQuery[ 'get' ] = function( … ) { … }

```


**Which Method Should You Use?**
[From the jQuery website:](https://learn.jquery.com/ajax/jquery-ajax-methods/)
It's often considered good practice to use the $.ajax() method over the jQuery provided convenience methods.


## Lesson 7 Ajax call with the Fetch API

**What is Fetch**

Fetch is the new way to make network requests (Fetch is promise-based)

⚠️ Might Need A Polyfill ⚠️
Check out http://caniuse.com/#feat=fetch to see if your browser supports this awesome new API!

If your browser is not supported, just add [this polyfill](https://github.com/github/fetch) to your project, so you can start using Fetch even without your browser supporting it!

**Write The Fetch Request**

```javascript
// syntax
fetch('<URL-to-the-resource-that-is-being-requested>');
// example
fetch('https://api.unsplash.com/search/photos?page=1&query=flowers');

```
![image](/images/fetch-request.gif)

*A fetch request being run on the console of Unsplash's website. The fetch request returns a Promise.*

Remember that Unsplash requires an Authorization header to make a request through its API. Check out these links on Fetch's documentation to see how to add an Authorization header to the Fetch request.

https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API



The Fetch request takes the URL to the requested resource as the first argument, but the second argument is a configuration object. One of the options to this config object is a headers property.

One of the new additions that rode along on the coattails of Fetch is a new Headers constructor function. The headers property of a Fetch request's configuration object can either be a plain object of headers to include, or it can be a Headers object that's been built up with headers.



**the default HTTP method is:**

https://fetch.spec.whatwg.org/#methods
https://fetch.spec.whatwg.org/#requests


**Changing The HTTP Method**

So the default HTTP method for a Fetch request is the GET method. We can choose a different HTTP method by passing a method property in the configuration object:
```javascript
fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
    method: 'POST'
});
```
This will send the request with the POST HTTP header.

Fetch's specification does not limit what HTTP methods can be used, although it does recommend that all methods are written in uppercase for consistency with the HTTP Verbs specification.

**Handle The Response**

Since a Fetch request returns a Promise, then all you have to do is call .then() on that Promise.


```javascript
fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
    headers: {
        Authorization: 'Client-ID abc123'
    }
}).then(function(response) {
    debugger; // work with the returned response
});

```

![image](\images\request-object.gif)
*Browser showing the app with DevTools loaded. A search for "trees" is made. The browsers pauses at the debugger line. The response is a Response object.*

**The Response Object**


This Response object is new with the Fetch API and is what's returned when a Fetch request resolves.

A response object has information about the response itself, it doesn't have the data...yet. To actually get the data, we need to get the "body" of the response.

Since the Unsplash API we're using will return JSON to us, we just need to call .json() on the response variable.

```javascript
fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
    headers: {
        Authorization: 'Client-ID abc123'
    }
}).then(function(response) {
    return response.json();
});
```

The .json() method on a Response object returns a Promise, so we need to chain on another .then() to actually get and start using the returned data. This time, let's call addImage to pass it the returned data:

```javascript
fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
    headers: {
        Authorization: 'Client-ID abc123'
    }
}).then(function(response) {
    return response.json();
}).then(addImage);

function addImage(data) {
    debugger;
}
```

*  check out:
     * [Making fetch requests](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Making_fetch_requests)
    * [davidwalsh - Fetch](https://davidwalsh.name/fetch)

**Body**
Both requests and responses may contain body data. A body is an instance of any of the following types:


* [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBuffer)
* [ArrayBufferView](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView) (Uint8Array and friends)
* Blob/File
* string
* [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
* [FormData](https://developer.mozilla.org/en-US/docs/Web/API/Body/formData)

The Body mixin defines the following methods to extract a body (implemented by both ```Request``` and ```Response```). These all return a promise that is eventually resolved with the actual content.

* arrayBuffer()
* blob()
* json()
* text()
* formData()


**ES6 Arrow Function**


```javascript

// without the arrow function
}).then(function(response) {
    return response.json();
})

// using the arrow function
}).then(response => response.json())

```

So the new request would be:

```javascript

fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
    headers: {
        Authorization: 'Client-ID abc123'
    }
}).then(response => response.json())
.then(addImage);

function addImage(data) {
    debugger;
}

```

* [Project Wrap-up](https://youtu.be/pBLeFba1RCQ)


## Lesson 8: Features of Single Page Apps

**Front end Framework**

* Backbone
* Angular
* Ember

This course builds on:

* [Web Tooling & Automation](https://www.udacity.com/course/web-tooling-automation--ud892)
* [JavaScript Design Patterns](https://www.udacity.com/course/javascript-design-patterns--ud989)
* [Object-Oriented JavaScript](https://www.udacity.com/course/object-oriented-javascript--ud711)


**Explore a Front End Application**

[TodoMVC](http://todomvc.com/)


Eager to check out some features of popular frameworks? Check out these links:

* [Choosing the Right JavaScript Framework for the Job](https://www.lullabot.com/articles/choosing-the-right-javascript-framework-for-the-job)
* [Angular on Wikipedia](https://en.wikipedia.org/wiki/AngularJS)
* [Ember on Wikipedia](https://en.wikipedia.org/wiki/Ember.js)


* [client side](https://en.wikipedia.org/wiki/Client-side) applications
    * Client-side refers to operations that are performed by the client in a client–server relationship in a computer network.
    Typically, a client is a computer application, such as a web browser, that runs on a user's local computer, smartphone, or other device, and connects to a server as necessary.

* [server-side](https://en.wikipedia.org/wiki/Server-side) applications
    * Occurring on the server side of a client-server system. For example, on the World Wide Web, CGI scripts are server-side applications because they run on the Web server. In contrast, JavaScript scripts are client-side because they are executed by your browser (the client).


* [Server and Client Apps solution](https://youtu.be/nPJ_3MPSBqw)

* [Single Page Apps MVC](https://youtu.be/iYLRCJSDBcQ)

* [JavaScript Design Patterns course](https://www.udacity.com/course/javascript-design-patterns--ud989)

* [Frameworks](https://youtu.be/-vRHfkxE5Uw)
    * [KISS](https://en.wikipedia.org/wiki/KISS_principle) - keep it simple
    * [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)  - don't repeat yourself

    
Things to look for:

* things that cause the URL to change
* where Templates are used
* Events firing

[Storage - the absent component?](https://youtu.be/VjUNSJ7zz3M)

[Check out the documentation for the DevTool's Resources tab](https://developers.google.com/web/tools/chrome-devtools/iterate/manage-data/)

**Features of Specialized Frameworks**

Features of Specialized Frameworks
Most frameworks have a common set of features, but not all frameworks are created equal. Some are more specialized and offer more functionality. When choosing a framework for a project, do your research to make sure you're picking the right one for the job.

Custom Elements
Some frameworks let you create your own custom elements. Custom elements have been a request for a long time, but the spec is still not stable. Frameworks like Angular and Ember give us the ability to create our own custom HTML elements. If you're creating a blog template, wouldn't it be easier and more clear to have a ```<user-bio>``` element:

```javascript
<user-bio>
    <h3>Richard</h3>
    <img src="img/richard_profile.jpg" alt="Richard's profile picture">
    <p>Before working at Udacity, Richard...
</user-bio>

```
Instead of trying to decipher what this is:


```javascript
<div> 
    <h3>Richard</h3>
    <img src="img/richard_profile.jpg" alt="Richard's profile picture">
    <p>Before working at Udacity, Richard...
</div>
```

**Updating the DOM**

When an app's data changes, the template (and therefore the DOM) needs to change. DOM insertion and manipulation is an extremely slow process. Some frameworks, provide a feature called Virtual DOM to alleviate this problem. The framework will create a Virtual DOM in memory, and perform all of the necessary updates or deletions to this in-memory structure. Then it will convert VirtualDOM to real DOM and replace the existing content.


**Fullstack Frameworks**

We've been looking at front end frameworks. But there are full stack frameworks that live on both the client and the server. When a framework lives on both ends of the spectrum, it can handle things like data streaming. [Meteor](https://www.meteor.com/) is a full stack framework that uses web sockets to keep an open connection between client and server. This provides for faster communication and a smoother user experience.

When choosing a framework, there are a lot of features and capabilities to sift through. Make sure to try out several different frameworks to know what each one has to offer.

[Interview with Dhruv](https://youtu.be/D4fAGJ6H1WM)

* [elm](http://elm-lang.org/) a very functional approach yo doing front-end programming.
* [clojurescript](https://clojurescript.org/) another very functional approach to doing programming


## Lesson 9: Examine a Framework's Source

# [Backbone](https://youtu.be/Z0xxr89lCmY)

Want to learn more about Backbone.js and how to build Backbone apps? Check out our [Learn Backbone.js](Want to learn more about Backbone.js and how to build Backbone apps? Check out our Learn Backbone.js course.) course.

[FEF-UdaciMeals-Backbone](https://github.com/udacity/FEF-UdaciMeals-Backbone)

[**Underscore Templates**](https://youtu.be/A4as_MMs7wk)
Want to dig a little deeper into the DevTool's Sources Panel? Check these links on how to:

* [Set Breakpoints](https://developers.google.com/web/tools/chrome-devtools/debug/breakpoints/add-breakpoints?hl=en/)

* [Step Through the Code](https://developers.google.com/web/tools/chrome-devtools/debug/breakpoints/step-code?hl=en)

* [Watch Variables](https://developers.google.com/web/tools/chrome-devtools/debug/watch-variables/?hl=en)


* **template delimiters** is just a fancy name for a sequence of one or more characters used to form a bondary.


 Follow along in dev tools or see the [template function](http://underscorejs.org/docs/underscore.html#section-168) in Underscore's annotated source.

[Walk-thru the `template` function](https://youtu.be/YRZ3dW7wd7k)

**learn more about Regular Expressions:**

* [Regular Expressions on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

* [Regular Expressions chapter from the Eloquent JavaScript book](http://eloquentjavascript.net/09_regexp.html)

* [Regular Expressions on WikiPedia](https://en.wikipedia.org/wiki/Regular_expression)

Check out these tools for testing Regular Expressions:

* [regex101](https://regex101.com/)

* [RegExr](http://regexr.com/)


[**Constructor Function**](https://youtu.be/PdmjmPA08k0)


[Filling the template with data](https://youtu.be/t_Lg16x02wM)

[Interview with Scott](https://youtu.be/tHtgpCbCHn4)



### **Template variables and JS's with**

Reading blog posts and tutorials online you'll see a lot of templates like this:

```javascript

// index.html
<script type="text/template" id="menuItem-template">
    <td><a href="#item/<%= id %>"><%= name %></a></td>
    <td><%= rating %></td>
    <td><%= calories %></td>
    <td>
        <button class="select-item">Select Item</button>
    </td>
</script>

```

Notice that inside the template delimiters, first class variables are being used. This is different from what we just looked at where the data came from the properties of the menuItem object, like this:
```javascript
// index.html
<script type="text/template" id="menuItem-template">
    <td><a href="#item/<%= menuItem.id %>"><%= menuItem.name %></a></td>
    <td><%= menuItem.rating %></td>
    <td><%= menuItem.calories %></td>
    <td>
        <button class="select-item">Select Item</button>
    </td>
</script>
```
The reason that we have access to the menuItem object and then use its properties is because we passed it along in the settings.

```javascript
// app.js
...
template: _.template($('#menuItem-template').html(), {variable: 'menuItem'}),

render: function(id) {
    this.$el.html(this.template(this.model.attributes));
    return this;
},
...
```

See how a settings object is being passed to the template function? This settings object is used in the creation of the constructor function.

Without this function, Backbone resorts to using JavaScript's ```with``` block. A ```with``` block extends the scope chain for the statements that are within its block. ```with``` blocks are **not recommended** and are not allowed in strict mode.

When creating Backbone templates, make sure to access your data as properties on an object, and to pass that object name in with the template's settings.

**Further Research**

* [```with``` statement on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with)
* [```with``` from Google's styleguide](https://google.github.io/styleguide/javascriptguide.xml#with___%7B%7D)
* [```with``` Statement](http://www.2ality.com/2011/06/with-statement.html)

Stuck? See the [Underscore template documentation](http://underscorejs.org/#template)


**Build Your Own Templating Function**

[requirements](https://youtu.be/RVlqAd7X87Y)

* have default delimeters
* allow for custom delimeters
* handle simple replacement
* return a function
    * pass data
    * number of time to log


```javascript

var string = "Hi, my name is $# name %%. And I $# emotion %% this $# thing %%!";

var customDelimeters = {open: '$#', close: '%%'}

var logResult = template( string, customDelimeters);

logResult('Richard','love','green mint ice cream', 2);

```

# Introducing the Service Worker Lesson 10
* [overview](https://youtu.be/BcXfPJKXf3M)
```javascript
if(navigator.service:worker){
    navigator.serviceWorker.register('/sw.js');
}


/// it will match all the element which start with /foo/

if(navigator.service:worker){
    navigator.serviceWorker.register('/sw.js', {scope: '/foo/' });
}
```

Visit "Is Service Worker Ready?" [Here](https://jakearchibald.github.io/isserviceworkerready/).

* [Adding a Service Worker To the Project](https://youtu.be/zOyiuVXedW4)


To get the project into the sample state use the commands

```git reset --hard```

```git checkout task-register-sw```

Once completing the task enter the Test ID registered







































