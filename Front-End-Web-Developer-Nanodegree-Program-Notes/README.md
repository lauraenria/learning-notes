# **Index**

* ## Useful resouces

  * review 2 project

  * Responsive Images

  * media queries section

 * ## Javascript Section

    * Useful topic through the course
  * ## Shell Workshop Section


# **Useful resouces**

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

 # Responsive Images

 * [Responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

 * [HTTP Archive: Average bytes to open a web page](https://httparchive.org/reports/state-of-the-web?start=latest#bytesperpage)
 
 * [W3C web page from 1996](https://www.w3.org/TR/NOTE-imagemap)

 * [Brian Fling: 'Great mobile products are created, never ported.'](https://books.google.co.uk/books?id=LyMeulBTkH0C&pg=PA66&lpg=PA66&dq=Create+a+product,+don%E2%80%99t+re-imagine+one+for+small+screens.+Great+mobile+products+are+created,+never+ported.never&source=bl&ots=fUUUxYkJza&sig=7fdcys0SvKz9WfATXUnhmykev84&hl=en&sa=X&ei=6j1aVOGzIqqu7AaaqoCYBg&ved=0CC0Q6AEwAg#v=onepage&q&f=false)

* [Remote Debugging Android Devices](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/?hl=en) + [video](https://www.youtube.com/watch?time_continue=55&v=8VzfRyDf8bo)

* Browsers
  * Download and install [Chrome Canary](https://www.google.com/intl/en/chrome/browser/canary.html) (it will not interfere with your regular Chrome)
  * On Linux, the [Chromium Dev channel](https://www.chromium.org/getting-involved/dev-channel) is similar to Canary.
  
  * [iOS WebKit Debug Proxy](https://github.com/google/ios-webkit-debug-proxy)

  * [Testing Mobile: Emulators, Simulators And Remote Debugging](https://www.smashingmagazine.com/2014/09/testing-mobile-emulators-simulators-remote-debugging/)

* check element/img devTool
  * Neterok tab, record and refersh the page

  * Look size, check inside element pane 

    * manipulate in the doom clicking the el and inside the console type **$0naturalWidth**

  * hover on the image

  * disable cache

* [calc()](https://developer.mozilla.org/en-US/docs/Web/CSS/calc)

* [Responsive Hero Images](https://cloudfour.com/thinks/responsive-hero-images/)

*[Responsive Images Audits](https://cloudfour.com/thinks/responsive-images-audits/)

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
  * *cd* enter move the shell to the home directory

    * **start .** open the directory in windows exporer

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

 [List of version control software](https://en.wikipedia.org/wiki/List_of_version_control_software)

* [Git](https://git-scm.com/)
* [Subversion](https://subversion.apache.org/)
* [Mercurial](https://www.mercurial-scm.org/)

There are two main types of version control system models:

* the centralized model - all users connect to a central, master repository

  

* the distributed model - each user has the entire repository on their computer 

  * [Centralized vs. DVCS from the Atlassian Blog](https://www.atlassian.com/blog/software-teams/version-control-centralized-dvcs)

  * [Distributed version control on Wikipedia](https://en.wikipedia.org/wiki/Distributed_version_control)


  ### Version Control System / Source Code Manager

 + A **version control system** (abbreviated as **VCS**) is a tool that manages different versions of source code. 
 
 + A **source code manager** (abbreviated as **SCM**) is another name for a version control system.


A **checkout** is when content in the repository has been copied to the Working Directory.

**Staging Area / Staging Index / Index**
- A file in the Git directory that stores information about what will go into your next commit. You can think of the **staging** area as a prep table where Git will take the next commit. Files on the Staging Index are poised to be added to the repository.

A **SHA** is basically an ID number for each commit. Here's what a commit's SHA might look like: e2adf8ae3e2e4ed40add75cc44cf9d0a869afeb6.

It is a 40-character string composed of characters (0–9 and a–f) and calculated based on the contents of a file or directory structure in Git. "SHA" is shorthand for "Secure Hash Algorithm". If you're interested in learning about hashes, check out in this [Intro to Computer Science course.](https://eu.udacity.com/course/intro-to-computer-science--cs101)

**Area of Git**

1. Working Directory
2. Stagin Index 
3. Repository

*  **git init** brand new repositories from scratch on your computer

*  **git clone** 
you'll clone or copy an existing repos from somewhere else to your local computer

    * takes the path to an existing repository

    * by default will create a directory with the same name as the repository that's being cloned

    * can be given a second argument that will be used as the name of the directory

    * will create the new repository inside of the current working directory
```git
$ git clone <path-to-repository-to-clone>
```

   You clone a repository with git clone <url>. For example, if you want to clone the Git linkable library called libgit2, you can do so like this:

```git
$ git clone https://github.com/libgit2/libgit2
```
If you want clone the project and have it use a different name

```git
$ git clone <path-to-repository-to-clone> new-name-repository

$ git clone https://github.com/udacity/course-git-blog-project blog-project
```

Helpful Links

[Cloning an Existing Repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository#Cloning-an-Existing-Repository)

[git clone docs](https://git-scm.com/docs/git-clone)

[git clone Tutorial](https://www.atlassian.com/git/tutorials/setting-up-a-repository)

## Clone an Exiting repo

* Verify Terminal Location
* git clone path-(usually a URL) of-the-Git-repository-you-want
*

## Helpful Links

[Initializing a Repository in an Existing](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository#Initializing-a-Repository-in-an-Existing-Directory)
[git init docs](https://git-scm.com/docs/git-init)
[git init Tutorial](https://www.atlassian.com/git/tutorials/setting-up-a-repository)

[HTML linting](http://htmlhint.com/)

[CSS linting](https://stylelint.io/)

[JavaScript linting](https://eslint.org/)

[configure my code editor](http://editorconfig.org/)

## Determine A Repo's Status 

*  **git status** check the status of the repo 

    * the empty one that we created with the git init command
    * the one we cloned with the git clone command

  * [black box](https://en.wikipedia.org/wiki/Black_box)

### resting state
```Git
Laura (master) course-git-blog-project
$ git status
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
```
## Helpful Links

[Checking the Status of Your Files](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#Checking-the-Status-of-Your-Files)

[git status docs](https://git-scm.com/docs/git-status)

[git status Tutorial](https://www.atlassian.com/git/tutorials/inspecting-a-repository)


---
### [Git Configuration](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration)

* **description file** this file is only used by the GitWeb program, so we can ignore it

* **hooks directory** this is where we could place client-side or server-side scripts that we can use to hook into Git's different lifecycle events

* **info directory** contains the global excludes file

* **objects directory**  this directory will store all of the commits we make

* **refs directory** this directory holds pointers to commits (basically the "branches" and "tags")

[Git Internals - Plumbing and Porcelain](https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain)

[Customizing Git - Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)



# Good journal entry

* a date
* heading - short description
* content - all the information

How to do a good commit? How often? Look previus one

* **git log** display info about the existing commits

* **git show** display info about the given commit

* **:** this symbol on on the terminal means there are more commits, use the pager programn [**less**](https://en.wikipedia.org/wiki/Less_(Unix))
to scroll, otherwise the keyword **L / arrowUp** to scroll up or keyword **J / arrowDowb** to scroll down, the commits ended when the symbol **: became the keyword END**

* to get out press the key **Q**

## Navigating The Log

* to scroll **down**, press
  * **j** or **↓** to move down one line at a time

  * **d** to move by half the page screen

  * **f** to move by a whole page screen

* to scroll **up**, press

  * **k** or **↑** to move up one line at a time

  * **u** to move by half the page screen

  * **b** to move by a whole page screen

press **q** to quit out of the log (returns to the regular command prompt)

**Find commit by hash SHA in Git**
```Git
git show SHA
git show a2c25061
```

Also good will be 
```
git log a2c25061 -n 1
``` 
It will show only info about commit, without diff.

```Git
git show a2c25061 --stat
```
works the same and is easier to remember

The [Pretty Formats section](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/git-show.html#_pretty_formats) of the git show documentation contains

*  ```format:<string>```

The ```format:<string>``` format allows you to specify which information you want to show. It works a little bit like printf format, with the notable exception that you get a newline with ```%n``` instead of ```\n``` …

The placeholders are:

* ```%an```: author name
* ```%ae```: author email
* ```%cn```: committer name
* ```%ce```: committer email

```Git
$ git log
```
*By default*, this command displays:

* the SHA
* the author
* the date
* and the message

...of every commit in the repository


* **git log --oneline** is used to alter how git log displays information

This command:
* lists one commit per line
* shows the first 7 characters of * the commit's SHA
* shows the commit's message

### Viewing Modified Files

* **git log --stat** ("stat" is short for "statistics") lists the files that were changed as well as the number of added/removed lines.

```Git
$ git log --stat
```
This command:

* displays the file(s) that have been modified

* displays the number of lines that have been added/removed

* displays a summary line with the total number of modified files and lines that have been added/removed

---
Annotated git log -p Output

* **git log -p** (--patch) it display commits and zooms in on the first commit's stats

* **git log -p --stat** display the stats info above the patch info

---

* 🔵 - the file that is being displayed

* 🔶 - the hash of the first version of the file and the hash of the second version of the file
not usually important, so it's safe to ignore

* ❤️ - the old version and current version of the file

 * 🔍 - the lines where the file is added and how many lines there are
-15,83 indicates that the old version (represented by the -) started at line 15 and that the file had 83 lines
+15,85 indicates that the current version (represented by the +) starts at line 15 and that there are now 85 lines...these 85 lines are shown in the patch below

* ✏️ - the actual changes made in the commit
lines that are red and start with a minus (-) were in the original version of the file but have been removed by the commit
lines that are green and start with a plus (+) are new lines that have been added in the commit


[Generating patches with -p](https://git-scm.com/docs/git-diff#_generating_patches_with_p) from the Git docs

[Use this Git docs page](https://git-scm.com/docs/git-diff)
* -w it ignore whitespace changes

### git log -p Recap
To recap, the -p flag (which is the same as the --patch flag) is used to alter how git log displays information:
```
$ git log -p
```
This command adds the following to the *default output*:

* displays the files that have been modified

* displays the location of the lines that have been added/removed

* displays the actual changes that have been made

##  just display a specific commit's details 

* providing the **SHA** of the commit you want to see to git log
* use a new command **git show**

```Git
git log
git log --oneline
git log --stat
git log -p
```
By supplying a SHA, the git log -p command will start at that commit!
```Git
$ git log -p fdf5493
```

The **git show** command will show only one commit.

```Git
$ git show fdf5493
```

it displays:

* the commit
* the author
* the date
* the commit message
* the patch information


* **--stat** - to show the how many files were changed and the number of lines that were added/removed

* **-p** or **--patch** - this the default, but if **--stat** is used, the patch won't display, so pass **-p** to add it again

* **-w** - to ignore changes to whitespace

## add commits to a repo Lesson 13

use ```git rm --cached <file>...``` to unstage) This is a hint of what you should do if you accidentally ran git add and gave it the wrong file.

As a side note, git rm --cached is not like the shell's rm command. ```git rm --cached``` will not destroy any of your work; it just removes it from the Staging Index.

Also, this used the word "unstage". The act of moving a file from the Working Directory to the Staging Index is called "staging". If a file has been moved, then it has been "staged". Moving a file from the Staging Index back to the Working Directory will unstage the file. If you read documentation that says "stage the following files" that means you should use the git add command.


This command:

* takes a space-separated list of file names

* alternatively, the period . can be used in place of a list of files to tell Git to add the current directory (and all nested files)
```Git
$ git add <file1> <file2> … <fileN>
```
or
```
$ git add .
```

```$ git config --global core.editor <your-editor's-config-went-here>```
...go back to the Git configuration step and configure Git to use your chosen editor.

[Escaping from Vim in the command line](https://discussions.udacity.com/t/escaping-from-vim-in-the-command-line/235917)
``` commit
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# On branch master
#
# Initial commit
#
# Changes to be committed:
#    new file:   css/app.css
#    new file:   index.html
#    new file:   js/app.js
#
```

Simple way to commit

```$ git commit -m "Initial commit```


```
git commit -m "Title" -m "Description .........."
```
The goal is that each commit has a single focus. Each commit should record a single-unit change. Each commit should make a change to just one aspect of the project.

## Further Research

* [Associating text editors with Git](https://help.github.com/articles/associating-text-editors-with-git/) from GitHub Help Docs

* [Getting Started - First-Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup) from Git book

## Good Commit Messages

[How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)

**Do**

* do keep the message short (less than 60-ish characters)

* do explain what the commit does (not how or why!)

**Do not**

* do not explain why the changes are made (more on this below)

* do not explain how the changes are made (that's what git log -p is for!)
* do not use the word "and"

  * if you have to use "and", your commit message is probably doing too many changes - break the changes into separate commits

  * e.g. "make the background color pink and increase the size of the sidebar"

  The best way that I've found to come up with a commit message is to finish this phrase, "This commit will...".

  Code editor can show the commit message edit window. eg. A message has been typed, followed by a blank line, followed by the body of the commit.

  [Git Commit Message Style Guide](https://udacity.github.io/git-styleguide/)

  * The **git diff** command can be used to see changes that have been made but haven't been committed, yet.

```
$ git diff
```
 Wanna know a secret? ```git log -p``` uses ```git diff``` under the hood.

 This command displays:

* the files that have been modified
* the location of the lines that have been added/removed
* the actual changes that have been made

### Further Research

* [git diff](https://git-scm.com/docs/git-diff) from the Git Docs


**git touch** create new files

## Git Ignore

 the **.gitignore** file is used to tell Git about the files that Git should not track. This file should be placed in the same directory that the .git directory is in.

All you have to do is list the *names* of files that you want Git to ignore (not track) and it will ignore them.

Let's try it with the "project.docx" file. Add the following line inside the .gitignore file:

eg project.docx then **git status**



### [Globbing](https://en.wikipedia.org/wiki/Glob_(programming)) concept 

Globbing lets you use special characters to match patterns/characters. In the ```.gitignore``` file, you can use the following:

* blank lines can be used for spacing
* ```#``` - marks line as a comment

* ```*``` - matches 0 or more characters

* ```?``` - matches 1 character

* ```[abc]``` - matches a, b, or c

* ```**``` - matches nested directories - ```a/**/z``` matches

  * ```a/z```
  * ```a/b/z```
  * ```a/b/c/z```

  ```eg.``` So if all of the 50 images are JPEG images in the "samples" folder, we could add the following line to .gitignore to have Git ignore all 50 images.

```samples/*.jpg```

## Further Research
* [Ignoring files](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#Ignoring-Files)
* [gitignore](https://git-scm.com/docs/gitignore#_pattern_format)
* [Ignoring files](https://help.github.com/articles/ignoring-files/)
* [gitignore.io](https://www.gitignore.io/)