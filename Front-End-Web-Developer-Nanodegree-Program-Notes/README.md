# Useful resouces

# review 2 project
* Project-2 Portfolio Site/index.html 
  * We can include favicon in your header. It is a web site icon that usually show up in browser's address bar / tab / bookmark and will further personalize your web page. See screenshot below:
  
  ```HTML
    <link rel="shortcut icon" type="image/png" href="img/favicon.png">
   ```
    * We can also further personalize your webpage in header tag by configuring: [**Android Chrome theme-color**](https://developers.google.com/web/updates/2014/11/Support-for-theme-color-in-Chrome-39-for-Android?hl=en)

* You can use srcset to tell browser to download the most optimized image size for different device / screen size.
When using srcset, we need to also use sizes to truly optimize the requests.

  * [How to Build Responsive Images with srcset](https://www.sitepoint.com/how-to-build-responsive-images-with-srcset/)
  * [Udacty Lesson](https://www.sitepoint.com/how-to-build-responsive-images-with-srcset/)
  * [A fun article on srcset](http://ericportis.com/posts/2014/srcset-sizes/)
  * [Pixel Density Display Listing](http://pixensity.com/list/phone/)
  * [High DPI Images for Variable Pixel Densities](https://www.html5rocks.com/en/mobile/high-dpi/)
  * [Working with h units](https://github.com/ResponsiveImagesCG/picture-element/issues/86)

* Project-2 Portfolio Site/style.css 

  * CSS has another very good naming convention that you may be interested in - BEM (Block, Element, Modifiers) naming style.
It gives a sustainable and maintainable naming structure for CSS code. It's concept revolves around these naming conventions:



  * The popular MDL framework uses this naming style and we can check it out to see how BEM is used: 
    * [getmdl.io](https://getmdl.io/components/index.html)

    * [BEN introduction @official page](http://getbem.com/introduction/)

    * [BEM 101 @CssTricks](https://css-tricks.com/bem-101/)

 ``` css

  /* Block naming */
.form { }

/* Element naming */
.form__reset { }

/* Modifier naming */
.form--inline { }

.form__reset--disabled { }

```


# media queries section
## Learning tips Lesson 13 

```html
<link rel="stylesheet" href="style.css">

<link rel="stylesheet" media="screen  and (min-width: 500px)" href="over500.css">
```

### Breakpoints

 + [Use DevTools](https://developers.google.com/web/tools/chrome-devtools/)
  * [Web Fundamentals](https://developers.google.com/web/)

### Grid fluid system
+ [MDN's introduction to grid layout.](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
 
### Flexbox
 * [Basic concepts of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)


### **Syntax** @media screen and (css) [and/or (css)]

+ [Reference media queries MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

+ [Logic media queries CSS-Tricks](https://css-tricks.com/logic-in-media-queries/)

#### lesson examples:

```css
@media screen  and (max-width: 400px)

@media screen and (min-width: 301px) and (max-width: 600px)

@media screen  and (min-width: 601px)

@media screen  and (min-width: 961px) 

```

#### extra examples :

The keywords **AND**.

```css
@media (min-width: 600px) and (max-width: 800px) {
  html { background: red; }
}
```

The keywords **OR**, comma separate.
```css
@media (max-width: 600px), (min-width: 800px) {
  html { background: red; }
}
```

The keywords **Not**
Reverse the logic with the keyword not.

```css
@media not all and (max-width: 600px) {
  html { background: red; }
}
```

**Exclusive**
```css
@media (max-width: 400px) {
  html { background: red; }
}
@media (min-width: 401px) and (max-width: 800px) {
  html { background: green; }
}
@media (min-width: 801px) {
  html { background: blue; }
}
```


**Overriding**
```css
@media (min-width: 400px) {
  html { background: red; }
}
@media (min-width: 600px) {
  html { background: green; }
}
@media (min-width: 800px) {
  html { background: blue; }
}
```

**Mobile First**
```css
html { background: red; }

@media (min-width: 600px) {
  html { background: green; }
}
```

**Desktop First**
```css
html { background: red; }

@media (max-width: 600px) {
  html { background: green; }
}
```


# Javascript Section

 
  * [String interpolation](https://en.wikipedia.org/wiki/String_interpolation)

    * [Template literals](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/template_strings)
    * [video Template Literals](https://www.youtube.com/watch?v=fTWnGsGlmrM)

  *  destructuring

  * [The iterable protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)

  * [Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Iterators)

* Shell resources
  * [bashrcgenerator by Julien Ricard](http://bashrcgenerator.com/)
  * [The Bash Academy](http://www.bash.academy/)
  * [Bash Beginners Guide](http://www.tldp.org/LDP/Bash-Beginners-Guide/html/)
  * [Bash Programming HOWTO](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html)
  * [Regexr — Learn Regular Expressions](https://regexr.com/)
-----------------------------------------------------------

# Useful topic through the course

* ## Hoisting : 
 
 Before the function is executed, all variables are hoisted to the top of the function scope.

 [Hoisting animation](https://www.youtube.com/watch?v=znkyiX50Ehk)

### let and const : 
They’re scoped to the block, not to the function. Previously, when you used var, variables were either scoped globally or locally to an entire function scope. If a variable is declared using let or const inside a block of code (denoted by curly braces { }), then the variable is stuck in what is known as the temporal dead zone until the variable’s declaration is processed. This behavior prevents variables from being accessed only until after they’ve been declared. 
**Variables declared with let and const are only available within the block they're declared**.

[Block Scoped](https://www.youtube.com/watch?time_continue=25&v=tQ02WllxScU)

``` javascript

function getClothing(isCold) {
  if (isCold) {
    const freezing = 'Grab a jacket!';
  } else {
    const hot = 'It’s a shorts kind of day.';
    console.log(freezing);
  }
}

getClothing(false)


Because freezing is not declared inside the else statement, the function scope, or the global scope, a ReferenceError is thrown.

```



### Rules for using let and const

* Variables declared with let can be reassigned, but can’t be redeclared in the same scope.

* Variables declared with const must be assigned an initial value, but can’t be redeclared in the same scope, and can’t be reassigned.

#### Use cases

1. use let when you plan to reassign new values to a variable

 2. use const when you don’t plan on reassigning new values to a variable.



----------------------
  *  ## destructuring:

borrows inspiration from languages like Perl and Python by allowing you to specify the elements you want to extract from an array or object on the left side of an assignment.



``` javascript
Destructuring values from an array:



const point = [10, 25, -34];

const [x, y, z] = point;

console.log(x, y, z);
```

``` javascript
  Prints: 10 25 -34 
```


**TIP**: You can also ignore values when destructuring arrays. For example,
``` javascript
  const [x, , z] = point; 
```
ignores the y coordinate and discards it.

In ES6, you can extract data from arrays and objects into distinct variables using destructuring.

``` javascript
   const point = [10, 25, -34];

const x = point[0];
const y = point[1];
const z = point[2];

console.log(x, y, z);
```
``` javascript
   Prints: 10 25 -34
```



### Destructuring values from an object

``` javascript
 const gemstone = {
  type: 'quartz',
  color: 'rose',
  carat: 21.29
};

const {type, color, carat} = gemstone;

console.log(type, color, carat); 
```
``` javascript
  Prints: quartz rose 21.29 
```

In this example, the curly braces { } represent the object being destructured and type, color, and carat represent the variables where you want to store the properties from the object. Notice how you don’t have to specify the property from where to extract the values. Because gemstone has a property named type, the value is automatically stored in the type variable. 

**TIP**: You can also specify the values you want to select when destructuring an object. For example,
``` javascript
   let {color} = gemstone; 
```
 will only select the color property from the gemstone object.

calling getArea()
 ``` javascript
   const circle = {
  radius: 10,
  color: 'orange',
  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },
  getCircumference: function() {
    return 2 * Math.PI * this.radius;
  }
};

let {radius, getArea, getCircumference} = circle;
```

``` javascript
   Prints: NaN
```

Calling getArea() will return NaN. When you destructure the object and store the getArea() method into the getArea variable, it no longer has access to this in the circle object which results in an area that is NaN.

``` javascript
   const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const [one, , , two, , , , three] = things;

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);
```

``` javascript
   Prints: 
   
   List of Colors
1. red
2. green
3. blue
```

### Object literal shorthand

If object properties have the same name as the variables being assigned to them, then you can drop the duplicate variable names.

--------------
* ## Iteration

  * Iterable protocol
  * For... of loop

* ## Rest parameter

lso written with three consecutive dots ( ... ), allows you to represent an indefinite number of elements as an array. 

``` javascript
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);
```

``` javascript
   Prints: 20.17 18.67 1.5 ["cheese", "eggs", "milk", "bread"]
```

* ## Variadic functions :

    * are functions that take an indefinite number of arguments.

    * In previous versions of JavaScript, this type of function would be handled using the [Arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments). The arguments object is an array-like object that is available as a local variable inside all functions. It contains a value for each argument being passed to the function starting at 0 for the first argument, 1 for the second argument, and so on.
    


 * ## Spread operator
------------------------

# Shell  Workshop Section

* **pwd** print current directory

* **cd**    change directory

  * **cd .** current directory

  * **cd..** parent directory

* **ls**    list

  * **ls ~**  Home Director

  * **ls -l** L is for long, 
    
    * it show the name of each listed file or directory, 
    * date
    * time that file was last modified, size in bytes

  * **ls -l nameDirectory**

  * **ls -l Documents/*.pdf** allow you to list all pdf file in Documents that end match ".pdf"

  * **word*** matches any file whose name starts with the word written.

  **mkdir name(+ path optiona)** make directory

* **mv fromName ToName** short for move, name from where I want to move and name to where I want to move

* **“curly quotes”**  Curly quotes will not work in the shell.

* **curl** command to get any web page, show the source code to the page

  * **curl -L** redirects === View Source in the browser dev tools

   * **curl -o name -L object**  name that we'd like to save under; obj that we want operate one, like the URL. Example : *curl -o gooogle.html -L 'http//google.com'*

*  special characters in them, such as the & sign must go in 'single quote'

* **cat** Concatenate

* **less** it'll show you a screenfull of the file at time. +
  * **space** tp scroll down or arrow keys.
  * **B** to go back
  * **/ slash** to search
  * **Q** to quit

* **rm name** remove + name file you want remove *safety warning*: it can't be undone
  * **rm -i name**  -i is for interactive, it will ask you double confirmation

  * **rmdir name** to remove directory
      
      * file 1 Bad file, 
      * file 2 Good Name Bad Face : 
      * rm * 'Bad F'* 

* **grep word fileName** how to search a text file for lines with particular contentes
    * **grep word fileName | less** grep for shell in dictionary.txt and pipe it to less

    * **curl -L obj | grep thingToLook** curl https://www.google.it/ | grep fish

    *  **curl -L obj | grep thingToLook | wc -l** word count program

    * * **curl -L obj | grep -c thingToLook** c is for count

* **variables** 

  * **$nameVariable**

  * **Shell Variable (inner built in Shell)**

  * **enviroment variable** are shared with programs that you run within the Shell, like path Variable

    * echo $LOGNAME $PWD (displays the contents of the variables LOGNAME and PWD with a space between them.)

* **Shell script** files containing Shell commands

  * install programs into subdirectory of the Home directory called Bin, which stand for binary

* shell is a programming language

* How to config the Shell
    * bin/magic
    * .bash_profile (Mac, Windows) or .bashrc(Linux) ps. You must create a new one if you don't have it.

* Look at  [bashGenerator](http://bashrcgenerator.com) by Julien Ricard
  * add to $PS1 to display info about the current state of project you are working on. Use .bash_profile

* **Aliases** a way of making long shell commands shorter
  * eg alias ll='ls -la'
  * type just *alias* to see all your commands
  * popular alias:
    * alias ll='ls -la'
    * alias cl='curl -L'
    * alias ..='cd ..'
    * alias ...='cd ...'
    * alias now='date +"%T"'
    * alias sl='ls'


# What is Version Control?

* Git
* Subversion
* Mercurial

There are two main types of version control system models:

* the centralized model - all users connect to a central, master repository

* the distributed model - each user has the entire repository on their computer 