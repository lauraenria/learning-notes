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
  
  ```css
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

```
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
@media screen  and (max-width: 400px){}

@media screen and (min-width: 301px) and (max-width: 600px){}

@media screen  and (min-width: 601px){}

@media screen  and (min-width: 961px) {}

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

```Bash
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

---
* **git tag** Add tags to specific commits (a tag is an extra label for a commit that can indicate info eg "beta release")

* **git branch** allows multiple lines of development

* **git checkout** switch between different branches and tags

* **git merge** combines changes on different branches

### Git Tag Command

```git
$ git tag -a v1.0
```

This will open your code editor and wait for you to supply a message for the tag.

```
#
# Write a message for tag:
#   v1.0
# Lines starting with '#' will be ignored.
```

>CAREFUL: In the command above (```git >tag -a v1.0```) the ```-a``` flag is used. >This flag tells Git to create an annotated flag. If you don't provide the flag (i.e. ```git tag v1.0```)> then it'll create what's called a *lightweight* tag.

Annotated tags are recommended because they include a lot of extra information such as:

* the person who made the tag
* the date the tag was made
* a message for the tag

Because of this, you should always use annotated tags.

**Verify Tag** ```use git log```

**git log --decorate** (--decorate Flag) show us some details that are hidden from the default view.

In the 2.13 update to Git, the log command has changed to automatically enable the --decorate flag. This means that you do not need to include the --decorate flag in your command, since it is automatically included, anyway! So the following commands result in the exact same output:

```
$ git log --decorate
$ git log
```
[Check out the 2.13 release notes.](https://github.com/git/git/blob/v2.13.0/Documentation/RelNotes/2.13.0.txt#L176-L177)

The tag information is at the very end of the first line:
<pre>
commit 6fa5f34790808d9f4dccd0fa8fdbc40760102d6e (HEAD -> master, tag: v1.0)
</pre>

Remember that tags are associated with a specific commit. This is why the tag is on the same line as the commit's SHA.

**HEAD -> master** hat's information about a branch

**Deleting A Tag**
* **git tag -d** nameTag
* **git tag --delete** nameTag

What if you accidentally misspelled something in the tag's message, or mistyped the actual tag name (```v0.1``` instead of ```v1.0```). How could you fix this? The easiest way is just to delete the tag and make a new one.

A Git tag can be deleted with the ```-d``` flag (for delete!) and the name of the tag:

```git
$ git tag -d v1.0
$ git tag --delete v1.0
```

**Adding A Tag To A Past Commit :**

All you have to do is provide the SHA of the commit you want to tag

```git
$ git tag -a v1.0 a87984
```
(after popping open a code editor to let you supply the tag's message) this command will tag the commit with the SHA a87084 with the tag v1.0.

**Git Tag Recap**

the ```git tag``` command is used to add a marker on a specific commit. The tag does not move around as new commits are added.

```git
$ git tag -a beta
```
This command will:

* add a tag to the most recent commit

* add a tag to a specific commit if a SHA is passed

### Further Research
* [Git Basics - Tagging from the Git Book](https://git-scm.com/book/en/v2/Git-Basics-Tagging) from the Git Book

* [Git Tag from the Git Docs](https://git-scm.com/docs/git-tag) from the Git Docs
---

* **git branch** is used to list all branches
  * **git branch name** create new branch
```
$ git branch
```

It can be used to:

* list all branch names in the repository
* create new branches
* delete branches

If we type out just git branch it will list out the branches in a repository

### Create A Branch
git branch and provide it the name of the branch 
```
$ git branch name
```

* **git checkout name** switch between branches

* remove all files and directories from the Working Directory that Git is tracking
* (files that Git tracks are stored in the repository, so nothing is lost)

* go into the repository and pull out all of the files and directories of the commit that the branch points to

**Branches In The Log**

```
$ git log --oneline --decorate
```

### The Active Branch
**git it branch** an asterisk will appear next to the name of the active branch.

### Delete A Branch

After a branch's changes have been merged, you probably won't need the branch anymore. If you want to delete the branch, you'd use the -d flag. The command below includes the ```-d``` flag which tells Git to delete the provided branch

```Bash
$ git branch -d sidebar
```
 you can't delete a branch that you're currently on. So to delete the X branch, you'd have to switch to either to Y branch or create and switch to a new branch.

 Git won't let you delete a branch if it has commits on it that aren't on any other branch

### Further Research
* [Git Branching - Basic Branching and Merging from the Git Docs](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)

* [Learn Git Branching](https://learngitbranching.js.org/)

* [Git Branching Tutorial from the Atlassian Blog](https://www.atlassian.com/git/tutorials/using-branches)

###  Switch and Create Branch In One Command
```
* $ git checkout -b name
* $ git checkout -b name master
```
create a branch and switch to it all in one command.

### See All Branches At Once
```
* $ git log --oneline --decorate --graph --all
```
This shows all branches and therefore all commits in the repository.

The ```--graph``` flag adds the bullets and lines to the leftmost part of the output. This shows the actual branching that's happening. The ```--all``` flag is what displays all of the branches in the repository.

Running this command will show all branches and commits in the repository.

# **merging**

Combining branches together is called **merging**.

* **regular merge** : is the same of fast-forward merge but because this combines two divergent branches, a commit is going to be made. And when a commit is made, a commit message needs to be supplied. Since this is a merge commit a default message is already supplied. You can change the message if you want, but it's common practice to use the default merge commit message. So when your code editor opens with the message, just close it again and accept that commit message.

* **Fast-forward merge** : A Fast-forward merge will just move the currently checked out branch forward until it points to the same commit that the other branch. eg. The new branch is in the master branch

**if you make a merge on the wrong branch**, use this command to undo the merge:

**git reset --hard HEAD^**

(Make sure to include the ^ character. It's a known as a "Relative Commit Reference" and indicates "the parent commit".) 

* **```$ git merge <name-of-branch-to-merge-in```**
When a merge happens, Git will:

  * look at the branches that it's going to merge

  *  look back along the branch's history to find a single commit that both branches have in their commit history

  * combine the lines of code that were changed on the separate branches together

  * makes a commit to record the merge

**Whichever branch the special ```HEAD``` pointer is pointing at, that's the branch that will have the merge commit.**

 # **merge conflict.**
When a merge is performed and fails

* ```$ git merge <other-branch>```

There are two types of merges:

* Fast-forward merge – the branch being merged in must be *ahead* of the checked out branch. The checked out branch's pointer will just be moved forward to point to the same commit as the other branch.

* the regular type of merge
  * two divergent branches are combined
  * a merge commit is created

### Further Research
* [**Basic Merging**](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging#Basic-Merging) from Git Book

* [**git-merge from**](https://git-scm.com/docs/git-merge) Git Docs
* [**git merge**](https://www.atlassian.com/git/tutorials/using-branches/git-merge) from Atlassian blog

If a merge conflict does occur, Git will try to combine as much as it can, but then it will leave special markers (e.g. >>> and <<<) that tell you where you (yep, you the programmer!) needs to manually fix.

## What Causes A Merge Conflict

A merge conflict will happen when the exact same line(s) are changed in separate branches. 

## Forcing A Merge Conflict!

## Merge Conflict Output Explained

The output that shows in the Terminal is:

```git
$ git merge heading-update 
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
```

## **Merge Conflict Indicators Explanation**

The editor has the following merge conflict indicators:

* ```**<<<<<<<** HEAD``` everything below this line (until the next indicator) shows you what's on the current branch

* ```**||||||| merged common ancestors**``` everything below this line (until the next indicator) shows you what the original lines were

* ```**=======**``` is the end of the original lines, everything that follows (until the next indicator) is what's on the branch that's being merged in

* ```**>>>>>>> heading-update**``` is the ending indicator of what's on the branch that's being merged in (in this case, the heading-update branch)

## **Resolving A Merge Conflict**

Git is using the merge conflict indicators to show you what lines caused the merge conflict on the two different branches as well as what the original line used to have. So to resolve a merge conflict, you need to:

* choose which line(s) to keep
* remove all lines with indicators

### Merge Conflict Recap
A merge conflict happens when the same line or lines have been changed on different branches that are being merged. Git will pause mid-merge telling you that there is a conflict and will tell you in what file or files the conflict occurred. To resolve the conflict in a file:

* locate and remove all lines with merge conflict indicators
* determine what to keep
* save the file(s)
* stage the file(s)
* make a commit

Be careful that a file might have merge conflicts in multiple parts of the file, so make sure you check the entire file for merge conflict indicators - a quick search for <<< should help you locate all of them.

## Further Research
* [Basic Merge Conflicts](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging#Basic-Merge-Conflicts) from the Git book
* [How Conflicts Are Presented](https://git-scm.com/docs/git-merge#_how_conflicts_are_presented) from the Git docs

# undoing changes

* **git commit --amend** alter the most-recent commit
  * will let you provide a new commit message. Code editor will open up and display the original commit message, change it if needed and save, then close.

  * will let you include files (or changes to files) you might've forgotten to include.

  *  **path git --amend:**
      * edit the file(s)
      * save the file(s)
      * stage the file(s) and run git commit --amend


* **git revert** reverses given commit 
  * ```$ git revert <SHA-of-commit-to-revert>```

  * will undo the changes that were made by the provided commit

  * creates a new commit to record the change

### Further Research
* [git-revert](https://git-scm.com/docs/git-revert) from Git Docs

* [git revert](https://www.atlassian.com/git/tutorials/undoing-changes) Atlassian tutor

---

* **git reset** erases commits  from the repository 

  * ```$ git reset <reference-to-commit>```

  * you have to delete in order

  It can be used to:

  * move the HEAD and current branch pointer to the referenced commit

  * erase commits with the **--hard flag**

  * move committed changes to the staging index with the **--soft flag**

  * unstage committed changes **--mixed flag**

to alleviate the stress a bit, Git does keep track of everything for about 30 days before it completely erases anything. To access this content, you'll need to use the **git reflog** command. Check out these links for more info:

* [git-reflog](https://git-scm.com/docs/git-reflog)

* [Rewriting History](https://www.atlassian.com/git/tutorials/rewriting-history)

* [reflog, your safety net](http://gitready.com/intermediate/2009/02/09/reflog-your-safety-net.html)

### Relative Commit References

You can reference commits by their SHA, by tags, branches, and the special HEAD pointer. 

But there are also special characters called **"Ancestry References"** that we can use to tell Git about relative references. Those characters are:

* **```^```** – indicates the **parent commit**
* **```~```** – indicates the **first parent commit**

Here's how we can **refer to previous commits**:

* the **parent commit** – the following indicate the parent commit of the current commit

  * **```HEAD^```**

  * **```HEAD~```**

  * **```HEAD~1```**  

* the **grandparent commit** – the following indicate the grandparent commit of the current commit

  * **```HEAD^^```**

  * **```HEAD~2```**  

* the **great-grandparent commit** – the following indicate the great-grandparent commit of the current commit
  * **```HEAD^^^```**
  * **```HEAD~3```**

  The main difference between the **```^```** and the **```~```** is when a commit is created from a merge. A merge commit has two parents. With a merge commit, the **```^```** reference is used to indicate the first parent of the commit while **```^2```** indicates the second parent. The first parent is the branch you were on when you ran git merge while the second parent is the branch that was merged in.


Since **HEAD** points to the 9ec05ca commt:

* **```HEAD^```** is the db7e87a commit

* **```HEAD~1```** is also the db7e87a commit

* **```HEAD^^```** is the 796ddb0 commit

* **```HEAD~2```** is also the 796ddb0 commit

* **```HEAD^^^```** is the 0c5975a commit

* **```HEAD~3```** is also the 0c5975a commit

* **```HEAD^^^2```** is the 4c9749e commit (this is the grandparent's (HEAD^^) second parent (^2))


## [Git Reset's Flags](https://www.youtube.com/watch?time_continue=104&v=UN7ki2G2yKc)

The way that Git determines the erasement is by the flag that's used. The flags are:

* **```--mixed```** it's the defaul, the changes are unstaged.

* **```--soft```** stage index

* **```--hard```** trash

## Backup Branch

Before I do any resetting, I usually create a backup branch on the most-recent commit so that I can get back to the commits if I make a mistake:

**```$ git branch backup```**

💡 Back To Normal 💡

If you created the **backup** branch prior to resetting anything, then you can easily get back to having the **master** branch point to the same commit as the backup branch. You'll just need to:

remove the uncommitted changes from the working directory
merge **backup** into **master** (which will cause a Fast-forward merge and move **master** up to the same point as **backup**)

```Git
$ git checkout -- index.html
$ git merge backup
```

### Further Research
* [**git-reset**](https://git-scm.com/docs/git-reset) from Git docs
* [**Reset Demystified**](https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified) from Git Blog
* [**Ancestry References**](https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection#Ancestry-References) from Git Book



## Expand On Your Git Skills

* take the companion GitHub course
* create a repo to track your computer's settings - [here](https://dotfiles.github.io/)
* develop the next, awesome feature for your personal project
* try tackling some [Git challenges with the Git-it app](https://github.com/jlord/git-it-electron)


# Working With Remotes

* collaborate with others

* use GitHub and its feature to plan changes and implement them

* contribute to an existing repository

* develop an active project

[**Version Control with Git - Udacity Course**](https://eu.udacity.com/course/version-control-with-git--ud123)

💡 Always Use Topic Branches

make all of your commits on descriptively named topic branches. Branches help isolate unrelated changes from each other.

* **[git remote](https://youtu.be/414f0ukhOTY)** will let you manage and interact with remote repositories.
  * output **origin** shortname used to refer to the main remote repository ( It's possible to rename).

  * **git remote add** to create a connection from my locak repository to the remote repository

  * **git remote -v** to see the full path to the remote repository,

### Further Research
* [**Working with Remotes**](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes#_showing_your_remotes) from the Git book
* [**the ```git remote```
 command**](https://git-scm.com/docs/git-remote)  from the Git docs

---

## [Remotes can be accessed](https://youtu.be/414f0ukhOTY)
in a couple of ways:

* with a URL
* path to a file system

A local repository can be connected to more than one remote repository.

Why Multiple Remotes?

* test out their change (branches) before you decide to implement your changes.

* you have a project whose code is hosted on Github but deploys via [Git to Heroku](https://devcenter.heroku.com/articles/git). You would have one remote for the master and one for the deployment.


**extra [Lighthouse project](https://github.com/GoogleChrome/lighthouse)** for auditing, performance metrics, and best practices for Progressive Web Apps.




There are a couple of things to notice about the command you just ran on the command line:

1. first, this command has the sub command add
2. the word origin is used - this is setting the shortname that we discussed earlier

* Remember that the word origin here isn't special in any way.

* If you want to change this to repo-on-GitHub, then (before running the command) just change the word "origin" to "repo-on-GitHub":

[**$ git remote add origin https://github.com/richardkalehoff/RichardsFantasticProject.git**](https://youtu.be/myuGLZLYpYY)

3. third, the full path to the repository is added (i.e. the URL to the remote repository on the web)
Now I'll use **git remote -v** to verify that I've added the remote repository correctly:


---
* **[git push](https://youtu.be/21TvMEtMRys)** is used to send commits from a local repository to a remote repository.
* **```$ git push <remote-shortname> <branch>```**

  * takes :
    * the shortname of the remote repository you want to send commits to

     * the name of the branch that has the commits you want to send


* My remote's shortname is **origin** and the commits that I want to push are on the master branch. So I'll use the following command to send my commits to the remote repository on GitHub:
      * **```$ git push origin master```**
      * **git push** command on the terminal will asks for my username, password (which isn't displayed), and then displays information about what it's doing to send the commits.


There a couple of things to notice:

* Depending on how you have configured GitHub and the remote URL that's being used, you might have to enter your username and password.
  * this will happen if you use the **```HTTP```** version of the remote (rather than the **```ssh```** version)
  * If you have configured GitHub to use the SSH protocol and have supplied it with your SSH key then you don't need to worry about doing this step. Check the [Connecting to GitHub with SSH documentation page](https://help.github.com/articles/connecting-to-github-with-ssh/) if you're interested in using SSH with GitHub.

* If you have to enter your username and password your username will show up after typing but your password will not. So just keep typing your password and press enter when you're done.
    * If you encounter any errors with your password don't worry it'll just ask you to type it in again
* Git does some compressing of things to make it smaller and then sends those off to the remote
* A new branch is created - at the very bottom it says **```[new branch]```** and then **```master -> master```**

the marker is **```origin/master```** and is called a tracking branch. A tracking branch's name includes the shortname of the remote repository as well as the name of the branch. 

---


* **[git pull](https://youtu.be/MjNU2LTDVAA)**
  * **```$ git pull origin master```** will retrieve the commits from the **```master```** branch on the **```origin```** remote repository.

  * You tell Git the shortname of the remote you want to get the changes from and then the branch that has the changes you want

    * the commit(s) on the remote branch are copied to the local repository

    * the local tracking branch **```(origin/master)```** is moved to point to the most recent commit

    * the local tracking branch **```(origin/master)```** is merged into the local branch **```(master)```**

    *Also, changes can be manually added on GitHub (but this is not recommended).

There's several things to note about running this command:

* the format is very similar to that of **```git push```** - there's counting and compressing and packing of items

* it has the phrase "**fast-forward**" which means **Git did a fast-forward merge** 

  * it displays information similar to **```git log --stat```** where it shows the files that have been changed and how many lines were added or removed in them

  If you don't want to automatically merge the local branch with the tracking branch then you wouldn't use **```git pull```** you would use a different command called **```git fetch.```** You might want to do this if there are commits on the repository that you don't have but there are also commits on the local repository that the remote one doesn't have either.

  # pull vs [Fetch](https://youtu.be/kxXdk2HcOBo)

  **Git fetch** is used to retrieve commits from a remote repository's branch but it **does not automatically merge**   the local branch with the remote tracking branch after those commits have been received.

* [**$ git fetch origin master**](https://youtu.be/jwyQUfE1Eqw)

  * the commit(s) on the remote branch are copied to the local repository

  * the local tracking branch (e.g. **```origin/master```**) is moved to point to the most recent commit

  * the local branch does not change at all.



  One main point when you want to use ```git fetch``` rather than ```git pull``` is if your remote branch and your local branch both have changes that neither of the other ones has. In this case, you want to fetch the remote changes to get them in your local branch and then perform a merge manually. Then you can push that new merge commit back to the remote.


  # Forking A Repository

  In version control terminology if you "fork" a repository that means you duplicate it. Typically you fork a repository that belongs to someone else. So you make an identical copy of their repository and that duplicate copy now belongs to you.

  This concept of "forking" is also different from "cloning". When you clone a repository, you get an identical copy of the repository. But cloning happens on your local machine and you clone a remote repository. When you fork a repository, a new duplicate copy of the remote repository is created. This new copy is also a remote repository, but it now belongs to you.

---

* **```$ git shortlog```** how many commits each contributor has added to the repository

  * **```-s```** to show just the number of commits (rather than each commit's message)

  * **```-n```**  to sort them numerically (rather than alphabetically by author name).

* **```$ git shortlog -s -n```**


* **```git log --author=name```** flag to filter the commits to the provided author.

  * **```git log --oneline --author="Paul Lewis"```** 

* **```git log --grep=bug```** flag to  filter 

  * spacing is an issue
    eg *unit tests* = **```git log --grep="unit tests"```**.

* [**git log --grep**](https://en.wikipedia.org/wiki/Grep) "fort"  Git will display only the commits that have the character f followed by the character o followed by r followed by t.

[Shell Workshop](https://eu.udacity.com/course/shell-workshop--ud206)




# ```CONTRIBUTING.md File```

The first thing you should always look for in a project is a file with the name ```CONTRIBUTING.md``` that  lists out the information you should follow to contribute to the project. 
Eg (explains how your code should be formatted)


There are two main sections to this file:

* the "For Contributors" section

* the "For Maintainers" section

  * ask questions of the project maintainer on the *issues page* .Each issue can:

    * have a label or multiple labels applied to it
    
    * can be assigned to an individual
    
    * can be assigned a milestone (for example the issue will be resolved by the next major release)


# Topic Branches

The best way to organize the set of commits/changes you want to contribute back to the project is to *put them all on a topic branch*. 

* a **topic branch** host commits for just a single concept or single area of change.

# Best Practices

* look for the project's ```CONTRIBUTING.md``` file.

* look at the GitHub issues for the project

  * look at the existing issues to see if one is similar to the change you want to contribute

  * if necessary create a new issue

  * communicate the changes you'd like to make to the project maintainer in the issue

  When you start developing, commit all of your work on a topic branch:

  * do not work on the master branch

  * make sure to give the topic branch clear, descriptive name

  As a general best practice for writing commits:

  * make frequent, smaller commits

  * use clear and descriptive commit messages

  * update the README file, if necessary

  
  # Staying In Sync With A Remote Repository

setup:

* reviewing the project's CONTRIBUTING.md file
* checking out the project's existing issues
* talking with the project maintainer

  A [**pull request**](https://youtu.be/twLr9ndsf90) is a request for the source repository to pull in your commits and merge them with their project. To create a pull request, a couple of things need to happen:

* you must fork the source repository

* clone your fork down to your machine

* make some commits (ideally on a topic branch!)

* push the commits back to your fork

* [create a new pull request](https://youtu.be/d3AGtKmHxUk) and choose the branch that has your new commits

You can go to [here](https://github.com/stars) to list out and filter all of the repositories that you have starred.

Watching A Repository

![Watch feature](watched-repos.png)

[Including Upstream Changes](https://youtu.be/VvoC6hN6FjU) :
"upstream" is typically used to refer to the source repository.

* **git remote** rename command to rename eg. origin to mine and upstream to source-repo.

  * **origin** : it's pointing to our forked repository.

  * **upstream** : remote source-repo


When working with a project that you've forked. The original project's maintainer will continue adding changes to their project. You'll want to keep your fork of their project in sync with theirs so that you can include any changes they make.

To get commits from a source repository into your forked repository on GitHub you need to:

* get the cloneable URL of the source repository

* create a new remote with the **git remote add** command

* use the shortname **upstream** to point to the source repository

* provide the URL of the source repository

* fetch the new **upstream** remote

* merge the upstream's branch into a local branch
** push the newly updated local branch to your **origin** repo


If the project's maintainer is requesting changes to the pull request, then:

* make any necessary commits on the same branch in your local repository that your pull request is based on
* push the branch to the your fork of the source repository

The commits will then show up on the pull request page.

---

* [**git rebase name-base**](https://youtu.be/H5JqcdIB5y0) To squash commits together

  * **git rebase -i name-base** i- stands for "interactive"(bu you can perform a rebase in a non-interactive mode as well)

  * [eg.](https://youtu.be/cL6ehKtJLUM) ```$ git rebase -i HEAD~3``` we're telling Git to use HEAD~3 as the base where all of the other commits (HEAD~2, HEAD~1, and HEAD) will connect to. **```HEAD~3```** is an ancestry reference, you could use **reference to a base**:
   
    * a **SHA**

    * a **branch name**

    * a **tag name**


## Force Pushing
In the video, I had to force push the branch. I had to do this because GitHub was trying to prevent me from accidentally deleting commits. Because I used the git rebase command, I effectively erased the three separate commits that recorded my addition of Florida, Paris, and Scotland. I used **```git rebase```** to combine or squash all of these commits into one, single commit.

Using **```git rebase```** creates a new commit with a new SHA. When I tried using git push to send this commit up to GitHub, GitHub knew that accepting the push would erase the three separate commits, so it rejected it. So I had to force push the commits through using **```git push -f```**.

⚠️ Force Pushing ⚠️

In this instance, force pushing my commits was necessary. But if you try to push commits and GitHub rejects them, it's trying to help you, so make sure to review what commits you're pushing and the commits that are on GitHub to verify you're not about to overwrite content on your remote repository accidentally!

## git rebase Commands

* use **```p```** or **```pick```** – to keep the commit as is

* use **```r```** or **```reword```** – to keep the commit's content but alter the commit message

* use **```e```** or **```edit```** – to keep the commit's content but stop before committing so that you can:

  * add new content or files

  * remove content or files

  *  alter the content that was going to be committed

*  use **```s```** or squash – to combine this commit's changes into the previous commit (the commit above it in the list)

* use **```f```** or **```fixup```** – to combine this commit's change into the previous one but drop the commit message

* use **```x```** or **```exec```** – to run a shell command

* use **```d```** or **```drop```** – to delete the commit



So you should not rebase if you have already pushed the commits you want to rebase. If you're collaborating with other developers, then they might already be working with the commits you've pushed. If you then use git rebase to change things around and then force push the commits, then the other developers will now be out of sync with the remote repository. They will have to do some complicated surgery to their Git repository to get their repo back in a working state...and it might not even be possible for them to do that; they might just have to scrap all of their work and start over with your newly-rebased, force-pushed commits.


I recommend that you create a **```backup** branch before rebasing, so that it's easy to return to your previous state. If you'r```e happy with the rebase, then you can just delete the **```backup```** branch!

## Further Resear

* [Git Branching - Rebasing]() from the Git Book

* [git-rebase]() from the Git Docs

* [here](https://www.atlassian.com/git/tutorials/rewriting-history#git-rebase) from the Atlassian blog

## [extra](https://youtu.be/66Ut8Bv6kgc) : Open Source

* [grabs.net](http://up-for-grabs.net/) 

* [firsttimersonly](http://www.firsttimersonly.com/)

* [first-timers-only label on GitHub](https://github.com/search?utf8=%E2%9C%93&q=label%3Afirst-timers-only+is%3Aopen&type=Issues&ref=searchresults)

* ["first timers only" blog post](https://medium.com/@kentcdodds/first-timers-only-78281ea47455)

* try tackling some Git and GitHub challenges with the [Git-it app](https://github.com/jlord/git-it-electron)

Wanna see what a developer's very first pull request is? Check out at [here](http://firstpr.me/)




# The Document Object Model [(DOM)](https://youtu.be/gndOFastyus) 
### allows developers to interact with and control the rendered page. 

The DOM stands for "Document Object Model" and is a tree-like structure that is a representation of the HTML document, the relationship between elements, and contains the content and properties of the elements.

The DOM is not:

* part of the JavaScript language

The DOM is:

* constructed from the browser
* is globally accessible by JavaScript code using the document object

The HTML DOM is a standard object model and programming interface for HTML. It defines:

* The HTML elements as objects
* The properties of all HTML elements
* The methods to access all HTML elements

The events for all HTML elements
In other words: the [HTML DOM](https://youtu.be/B2UPRofY5ig) is a standard for how to get, change, add, or delete HTML elements.


* HTML is received
* HTML tags are converted to tokens
* tokens are converted to Nodes
* Nodes are converted to the DOM

When you request a website, no matter what backend language is powering that website, it will respond with HTML. The browser receives a stream of HTML. The bytes are run through a complicated (but fully documented) parsing process that determines the different characters (e.g. the start tag character <, an attribute like href, a closing angle bracket like >). After parsing has occurred, a process called tokenization. **Tokenization** takes one character at a time and builds up **tokens**. The tokens are:

* DOCTYPE
* start tag
* end tag
* comment
* character
* end-of-file

 The output of this stage is a tree-like structure - this is the DOM!

 The **document** object is provided by the browser and is a representation of the HTML document. This object is not provided by the JavaScript language. ECMAScript is the language specification that JavaScript is based on, and it only references the document object model in one place, in its "Global Object" section:

In addition to the properties defined in this specification the global object may have additional host defined properties. This may include a property whose value is the global object itself; for example, in the HTML document object model the window property of the global object is the global object itself. ([source](https://www.ecma-international.org/ecma-262/#sec-global-object))

Basically, this says that the **document** object is not part of JavaScript, but is expected to *already exist* and be freely accessible to JavaScript code.

The DOM is standardized by the W3C. There are a number of specifications that make up the DOM, here are few:

* Core Specification
* Events Specification
* Style Specification
* Validation Specification
* Load and Save Specification
* To see the full list of DOM specs, * check out the standard [HERE](https://www.w3.org/standards/techs/dom#w3c_all)

Further Research

* [DOM Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

* [Section 8.2 Parsing HTML documents](https://www.w3.org/TR/html5/syntax.html#parsing) from the W3C's HTML Documentation


* [DOM Specification](https://www.w3.org/standards/techs/dom#w3c_all) on W3C

* [HTML Document Object Model mentioned in the ECMAScript Specification ](https://www.ecma-international.org/ecma-262/#sec-global-object) - the language specification used by JavaScript

---

[Document.getElementById()](https://youtu.be/HTwkHkERtvQ), [video](https://youtu.be/oCm5Ft3NbdE) and the [documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

* [Select Page Elements By Class Or Tag](https://youtu.be/mP04gbpghpY)

* [Accessing Elements By Their Tag](https://youtu.be/cxqIYlQ4tu8) and [doc](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

# Selecting Multiple Elements DOM elements:

* ```.getElementsByClassName()```
* ```.getElementsByTagName()```

There are a few important things to keep in mind about these two methods:

* both methods use the *document* object
* both return multiple items
* the list that's returned is not an array

// select all elements that have the class "accent-color"
```document.getElementsByClassName('accent-color');```

// select all "span" elements
```document.getElementsByTagName('span');```

### Further Research

* [.getElementsByClassName()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName) on MDN
* [.getElementsByTagName()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName) on MDN

----

[Node](https://youtu.be/GfeCBh7dsW4)

* user interface (UI)

* graphical user interface (GUI).


* interface  list of properties and methods that are inherited.

Node (with a capital "N"!) is a blueprint that contains information about all of the properties and methods for real nodes (with a lowercase "n"!). If you're not used to them, the words "**interface**", "**property**", and "**method**" can be kind of cryptic at first. Just remember that:

* interface = blueprint

* properties = data

* methods = functionality

[Node Interface](https://developer.mozilla.org/en-US/docs/Web/API/Node) on MDN, 
[video](https://youtu.be/M2HMdiNdtYg)

[Element Interface](https://developer.mozilla.org/en-US/docs/Web/API/Element) on MDN, [video](https://youtu.be/5womdssnSWA)
ps. select and use ```$0```

[video](https://youtu.be/kt3Suy4pfB4)

[Web API Interfaces](https://developer.mozilla.org/en-US/docs/Web/API)

## Further Research
* [Node Interface](https://developer.mozilla.org/en-US/docs/Web/API/Node)
* [Element Interface](https://developer.mozilla.org/en-US/docs/Web/API/Element)
* [list of Web API Interfaces](https://developer.mozilla.org/en-US/docs/Web/API)

[Why JQuery was influenced](https://youtu.be/FjpYmoQlYgI)

* [.querySelector()](https://youtu.be/L5SbgvM0VCQ)

* [.querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) , [video](https://youtu.be/XrS6vzAfBSk)

## Further Research
* [jQuery library](https://jquery.com/)

* [.querySelector() method](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) on MDN

* [.querySelectorAll() method](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) on MDN

* [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) on MDN

---

[textContent](https://youtu.be/P3DuE86cTiU) and [docs](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

[.textContent vs .innerHTML](https://youtu.be/PbT6va8NLbI)

[ .textContent vs .innerText ](https://youtu.be/x_F1R-VGxeE)

## Further Research

* [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) on MDN
* [textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) on MDN
* [innerText](https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText) on MDN
* [Article: The poor, misunderstood innerText](http://perfectionkills.com/the-poor-misunderstood-innerText/)
* [Article: innertext vs. textcontent](https://kellegous.com/j/2013/02/27/innertext-vs-textcontent/)


## Creating Text Nodes
Just like you created new elements with the **.createElement()** method, you can also create new text nodes using the **.createTextNode()** method. Take a look at the following code that:

* creates an paragraph element
* creates a text node
* appends the text node to the paragraph
* appends the paragraph to the tag

```javascript
const myPara = document.createElement('p');
const textOfParagraph = document.createTextNode('I am the text for the paragraph!');

myPara.appendChild(textOfParagraph);
document.body.appendChild(myPara);

----

const myPara = document.createElement('p');

myPara.textContent = 'I am the text for the paragraph!';
document.body.appendChild(myPara);
```

[**.insertAdjacentHTML()**](https://youtu.be/jLgn7ERoUGU)

* the location of the HTML
* the HTML text that is going to be inserted


Some important things to note are:

* if an element already exists in the DOM and this element is passed to .appendChild(), the ```.appendChild()``` method will move it rather than duplicating it

* an element's .textContent property is used more often than creating a text node with the ```.createTextNode()``` method

* the ```.insertAdjacentHTML()``` method's second argument has to be text, you can't pass an element

### Further Research

* [createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) on MDN

* [createTextNode](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode) on MDN

* [appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) on MDN

* [insertAdjacentHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML) on MDN



---

The difference between ```.firstChild``` and ```.firstElementChild```, is that ```.firstElementChild``` will always return the first element, while ```.firstChild``` might return whitespace (if there is any) to preserve the formatting of the underlying HTML source code.

## Further Research
* [removeChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) on MDN and [video](https://youtu.be/xeLZabb-nXc)
* [remove](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove) on MDN
* [firstChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild) on MDN
* [firstElementChild](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/firstElementChild) on MDN
* [parentElement](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement) on MDN

---

* ```.style.<prop>```
* ```.cssText()```
* ```.setAttribute()```
* ```.className```
* ```.classList```

### futher Research

* [Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) on MDN
* [Article: CSS Specificity: Things You Should Know](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/)

---

### Further Research
* [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) on MDN

* [Article: Using dynamic styling information](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)

* [DOM methods to control styling](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#DOM-CSS_CSSOM)

* [nextElementSibling](https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/nextElementSibling) on MDN

* [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) on MDN

* [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) on MDN

* [Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) on MDN

* [Article: CSS Specificity: Things You Should Know](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/) and [video](https://youtu.be/SIjgdT1O2Ns)


# Working with Browser Events 
###### (lesson 21)

[**monitorEvents documentation**](https://developers.google.com/web/tools/chrome-devtools/console/events#monitor_events) and [video](https://youtu.be/6PFZQxV-d_8)

The monitorEvents function will keep spitting out all of the events that are happening on the targeted element until the end of time...that, or until you refresh the page. Alternatively, the Chrome browser does offer an unmonitorEvents() function that will turn off the announcing of events for the targeted element:
```
// start displaying all events on the document object
monitorEvents(document);

// turn off the displaying of all events on the document object.
unmonitorEvents(document);
```
One last little bit of info on monitorEvents is that this is for development/testing purposes only. It's not supposed to be used for production code.


### Further Research
[**addEventListener**](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) on MDN, [video](https://youtu.be/bj4Lrxdx9Vo)
[**EventTarget Interface**](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)
[**Introduction to events**](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
[list of events](https://developer.mozilla.org/en-US/docs/Web/Events)


### Further Research

[**removeEventListener**](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener) on MDN
[**Easily jump to event listeners**](https://developers.google.com/web/updates/2015/05/easily-jump-to-event-listeners)
[**Equality comparisons and sameness**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
[**Article: Object Equality in JavaScript**](http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html)
[**EventTarget Interface**](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)


## Event Phases
There are three different phases during the lifecycle of an event. They are:

* the capturing phase
* the at target phase
* and the bubbling phase
[video](https://youtu.be/rGhgPPYc2sg)


So of the three phases in an event, which one does the ```.addEventListener()``` method actually use? And, how can we change it?

Up until this point, we've only seen the ```.addEventListener()``` method called with two arguments, the:

* event type
* and the listener

```javascript

document.addEventListener('click', function () {
   console.log('The document was clicked');
});
```
There's actually a third argument to the ```.addEventListener()``` method; the useCapture argument. From it's name, you'd think that if this argument were left out, ```.addEventListener()``` would default to using the capturing phase. This is an incorrect assumption!
**By default, when``` .addEventListener()``` is called with only two arguments, the method defaults to using the bubbling phase.**

The code below uses ```.addEventListener()``` with only two arguments, so it will invoke the listener during the bubbling phase:
```javascript

document.addEventListener('click', function () {
   console.log('The document was clicked');
});
```
However, in this code, ```.addEventListener()``` is called with three arguments with the third argument being true (meaning it should invoke the listener earlier, during the capturing phase!).

```javascript

document.addEventListener('click', function () {
   console.log('The document was clicked');
}, true);
```
[video](https://youtu.be/4WYyk3AhCOU)

Remember that the third argument of the ```.addEventListener()``` method is the boolean for the capturing phase. Since it's ```false```, that means the event listener should not run during the capturing phase...therefore it will run in the (default) bubble phase.

```.preventDefault()```


Further Research
[**Event dispatch and DOM event flow**](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow)  on W3C
[**capture phase**](https://www.w3.org/TR/DOM-Level-3-Events/#capture-phase)  on W3C
[**target phase**](https://www.w3.org/TR/DOM-Level-3-Events/#target-phase)  on W3C
[**bubble phase**](https://www.w3.org/TR/DOM-Level-3-Events/#bubble-phase)  on W3C
[**Event**](https://developer.mozilla.org/en-US/docs/Web/API/Event) on MDN
[**Event reference**](https://developer.mozilla.org/en-US/docs/Web/Events) on MDN
[**addEventListener**](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) on MDN



### Further Research
[**Article: Event delegation**](https://javascript.info/event-delegation)
[**Article: How JavaScript Event Delegation Works**](https://davidwalsh.name/event-delegate)



The Content Is Loaded Event

If you're looking at somebody else's code, you may see that their code listens for the ```load``` event being used instead (e.g. ```document.onload(...)```). load fires later than ```DOMContentLoaded``` -- ```load``` waits until all of the images, stylesheets, etc. have been loaded (everything referenced by the HTML.) Many older developers use load in place of DOMContentLoaded as the latter wasn't supported by the very earliest browsers. But if you need to detect when your code can run, DOMContentLoaded is generally the better choice.

```javascript

document.addEventListener('DOMContentLoaded', function () {
    console.log('the DOM is ready to be interacted with!');
});
```

Further Research
[DOMContentLoaded Event](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded) docs on MDN



# Performance

Testing Code Performance
The standard way to measure how long it takes code to run is by using ```performance.now()```. ```performance.now()``` returns a timestamp that is measured in milliseconds, so it's extremely accurate.

[**performance.now()**](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now) on MDN

These are the steps to use ```performance.now()``` to measure the speed of your code:

1. use ```performance.now()``` to get the an initial start time for the code
2. run the code you want to test
3. execute ```performance.now()``` to get another time measurement
subtract the initial time from the final time

[Example](https://youtu.be/ARy8Xpn6Ekg)
```js
const startingTime = performance.now();

for (let i = 1; i <= 100; i++) { 
  for (let j = 1; j <= 100; j++) {
    console.log('i and j are ', i, j);
  }
}

const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');
```

### DocumentFragment
```represents a minimal document object that has no parent. It is used as a lightweight version of Document that stores a segment of a document structure comprised of nodes just like a standard document.```

So it's like creating another lightweight DOM tree. But the beneficial part of this is what it says next:

```The key difference is that because the document fragment isn't part of the active document tree structure, changes made to the fragment don't affect the document, cause reflow, or incur any performance impact that can occur when changes are made.```


In other words, changes made to a DocumentFragment happen off-screen; there's no reflow and repaint cost while you build this. So this is exactly what we need!

We can use the ```.createDocumentFragment()``` method to create an empty DocumentFragment object. This code should be very familiar to you, because it looks so very similar to ```document.createElement()```.

```javascript

const fragment = document.createDocumentFragment();  // ← uses a DocumentFragment instead of a <div>

for (let i = 0; i < 200; i++) {
    const newElement = document.createElement('p');
    newElement.innerText = 'This is paragraph number ' + i;

    fragment.appendChild(newElement);
}

document.body.appendChild(fragment); // reflow and repaint here -- once!

```


## Further Research
* [**performance.now()**](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now) on MDN
* [**Performance Interface**](https://developer.mozilla.org/en-US/docs/Web/API/Performance) on MDN
* [**DocumentFragment Interface**](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) on MDN
* [**createDocumentFragment docs**](https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment) on MDN

# Add Page Content Efficiently

## Reflow & Repaint

**Reflow** is the process of the browser laying out the page. It happens when you first display the DOM (generally after the DOM and CSS have been loaded), and happens again every time something could change the layout. This is a fairly expensive (slow) process.

**Repaint** happens after reflow as the browser draws the new layout to the screen. This is fairly quick, but you still want to limit how often it happens.

### Virtual DOM
By the way, this is why React and other "virtual DOM" libraries are so popular. You don't make changes to the DOM, but make changes to another structure (a "virtual DOM") and the library calculates the best way to update the screen to match. The catch is you then have to rework your code to use whatever library you're adopting, and sometimes you can do a better job updating the screen yourself (because you understand your own unique situation).

#### Recap
In this section, we took a brief look at what reflow and repaint are and saw how they can impact the performance of a website.

Reflow is the process of calculating the dimensions and position of page elements. This is a computationally intensive (slow) tasks. Repaint is the process of drawing the pixels to the screen. This is faster than reflow, but is still not a fast process. You want to make sure that your code causes the fewest number of reflows as possible.

##Further Research

* [**Website Performance Optimization**](https://www.udacity.com/course/website-performance-optimization--ud884) course by Udaicty

* [**Minimizing browser reflow**](https://developers.google.com/speed/articles/reflow) from PageSpeed Tools Guides

* [**Avoid Large, Complex Layouts and Layout Thrashing**](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing) from Google's Web Fundamentals Guides

* [**Performance Analysis Reference**](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference#rendering) from Google's Web Fundamentals Guides

* [**Article Reflows & Repaints: CSS Performance Making Your JavaScript Slow?**](http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/)


# The Call Stack
## Single Threading
the processing of one command at a time [(source)](https://en.wikipedia.org/wiki/Thread_(computing)#Single_threading)

(meaning it can only perform one task at a time)

Ok, so JavaScript can "process" one command at a time. The opposite of single-threading, is multithreading. There are numerous pros and cons to both which we won't be getting into (feel free to check out the [Wikipedia article on Threading](https://en.wikipedia.org/wiki/Thread_(computing)#Single_threading) for more info about the pros and cons). We're going to take a look at JavaScript's single-threaded model and how/why we should write our code to take advantage of it.





## Further Research [video](https://youtu.be/J9iKeNhoXNM)

* [**Call stack**](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack) on MDN
* [**Call stack**](https://en.wikipedia.org/wiki/Call_stack) on Wikipedia




Further Research
* [**Concurrency model and Event Loop**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)

* [**Events and Handlers Overview**](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Overview_of_Events_and_Handlers)

* [**What the heck is the event loopanyway? by Philip Roberts on YouTube**](https://www.youtube.com/watch?v=8aGhZQkoFbQ)


## synchronous
existing or occurring at the same time

All of the code we've been looking at runs in order, at the same time. Functions are added to the call stack, and then removed from the call stack when they've completed. However, there is some code that is not synchronous - meaning that the code is written just like any other code, but it is executed at some later point in time. 



## The JavaScript Event Loop
The simplest explanation of JavaScript's *concurrency model* uses two rules: 
If some JavaScript is running, let it run until it is finished ("run-to-completion"). 
If no JavaScript is running, run any pending event handlers.

Since most JavaScript is run in response to an event, this is known as an *event loop*: 
Pick up the next event, run its handler, and repeat.

There are three parts you have to think about around the event loop:

* the Call Stack
* Web APIs/the browser
* an Event Queue

![the JavaScript Event Loop]()


What happens if someone clicks before this block of code is done? When there is a click event and there is code already running, 
the numbers function can't just be added directly to the Call Stack because of JavaScript's run-to-completion nature; 
we can't interrupt any code that might currently be happening. So the function is placed in the Queue. 
When all of the functions in the Call Stack have finished (also known as idle time), 
then the Queue is checked to see if anything is waiting. 
If something is in the Queue, then it's run, creating an entry on the call stack.
[video](https://youtu.be/uBdemYBG-ek)

Asynchronous code makes use of the JavaScript Event Loop. 
Any asynchronous code (like ```setTimeout``` or the function passed to 
```.addEventListener()```)is handled by the browser. 
When this asynchronous code is ready to be executed, it's moved to the queue 
where it waits until the Call Stack is empty. Whenever the Call Stack is empty, 
code moves from the Queue over to the Call Stack and gets executed.

### Further Research

* [**Concurrency model and Event Loop**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
* [**Events and Handlers Overview**](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Overview_of_Events_and_Handlers)
* [**What the heck is the event loop anyway? by Philip Roberts on YouTube**](https://www.youtube.com/watch?v=8aGhZQkoFbQ)


# Accessibility === A11y


### Sources:

* [**Disability Compendium**](http://disabilitycompendium.org/)
* [**"The Perception of Color"**](http://www.ncbi.nlm.nih.gov/books/NBK11538/)
* [**"Prevalence of Refractive Error in the United States, 1999-2004"**](http://archopht.jamanetwork.com/article.aspx?articleid=420707)



* [**Web Content Accessibility Guidelines 2.0 (WCAG)**](https://www.w3.org/TR/WCAG20/)

* [**Web Aim Checklist for WCAG 2.0**](http://webaim.org/standards/wcag/checklist)

--

[video](https://youtu.be/_bA6nnNqmZY)
* Perceive
* Operable
* Understandable
* Robust

WebAIM checklist items: [video](https://youtu.be/UgjswqeeoTE)

* [2.1.1](http://webaim.org/standards/wcag/checklist#sc2.1.1)
* [1.3.2](http://webaim.org/standards/wcag/checklist#sc1.3.2) [video](https://youtu.be/-Ic5-P1ij9k)

[focus](https://youtu.be/pZtO4l6Wg5s)

Move focus around the page using your keyboard:

* ```TAB will``` move focus forward
* ```SHIFT - TAB``` will move focus backwards
* ```Arrow keys``` can be used to navigate inside of a component

[focus-management](https://www.w3.org/TR/html5/editing.html#focus-management)


[**tabindex**](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) on MDN
[w3 tabindex](https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute)
[video](https://youtu.be/rvG7L-gsSuo)


You can [read more about skip links](http://webaim.org/techniques/skipnav/) in this article on the Web AIM site.

[focus-start-point](https://developers.google.com/web/updates/2016/03/focus-start-point?hl=en)
[video](https://youtu.be/rD3db6-vmuo)


# Focus in Complex Components [video](https://youtu.be/rPumANoosUQ)
The ARIA Authoring Practices doc (or "ARIA Design Patterns doc") is a great resource for figuring out what kind of keyboard support your complex components should implement.

There are currently two versions:

* [**WAI-ARIA Authoring Practices 1.0**](https://www.w3.org/TR/wai-aria-practices/)
* [**WAI-ARIA Authoring Practices 1.1 **](https://www.w3.org/TR/wai-aria-practices-1.1/)  (Newer working draft)

 personally prefer the 1.1 version because the layout is a bit easier to navigate and 
 it includes a few fixes currently missing from the 1.0 version.

## Keyboard Design Patterns [video](https://youtu.be/i26AnhWMZPE)

Take a look at the ARIA Authoring Best Practices guide to read more about the Radio pattern. I've linked to both versions so you can choose whichever one you prefer. Both patterns are nearly identical but do note that the 1.0 version is called "Radio Button" and the 1.1 version is called "Radio Group".


* [**ARIA Authoring Best Practices 1.0 (Radio Button)**](https://www.w3.org/TR/wai-aria-practices/#radiobutton)
* [**ARIA Authoring Best Practices 1.1 (Radio Group)**](https://www.w3.org/TR/wai-aria-practices-1.1/#radiobutton)

  [**wai-aria-practices**](https://www.w3.org/TR/wai-aria-practices/#aria_ex)


## Implementing Keyboard Event List

Using the ARIA Authoring Best Practices doc 
(either [**version**](https://www.w3.org/TR/wai-aria-practices/) 1.0 or [**version 1.1**](https://www.w3.org/TR/wai-aria-practices-1.1/)) 
find the radio pattern and implement support for the Down Arrow and Right Arrow pattern using the "roving focus" technique. 
I should point out that you'll also sometimes see this referred to as "roving tabindex."


## [Offscreen Content](https://youtu.be/SCUVXoTqq_g)

```document.activeElement```

[**Read more about Document.activeElement**](https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement) on MDN

Another tool you can use is the Chrome [Accessibility Developer Tools Extension](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en). This extension will not only add an Accessibility Properties panel to your Elements inspector, but it also adds an Accessibility option to the audits panel. Using this option you can quickly find accessibility issues in your page which you might have otherwise missed.

[accessibility-developer](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en)


# Modals and Keyboard Traps

[Video](https://youtu.be/BoAsayPVogE)

WebAIM checklist items:

[2.1.2](http://webaim.org/standards/wcag/checklist#sc2.1.2)
[<dialog>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) on MDN





# Objects in Depth

## Further Research
* [**Intro to JavaScript**](https://www.udacity.com/course/intro-to-javascript--ud803)
* [**Unquoted property names / object keys in JavaScript**](https://mathiasbynens.be/notes/javascript-properties)
* [**Valid JavaScript variable names in ECMAScript 5**](https://mathiasbynens.be/notes/javascript-identifiers)
* [**Valid JavaScript variable names in ECMAScript 6**](https://mathiasbynens.be/notes/javascript-identifiers-es6)



# Create and Modify Properties
## Creating Objects

To create a new, blank (i.e., “empty”) object, you can use object **literal notation**, or the ```Object()``` **constructor function**.
```javascript
// Using literal notation:

const myObject = {};
```

```javascript

// Using the Object() constructor function:

const myObject = new Object();
```

While both methods ultimately return an object without properties of its own, the Object() constructor function is a bit slower and more verbose. As such, the recommended way to create new objects in JavaScript is to use literal notation.
Keep in mind that data within objects are **mutable**, meaning that data can be changed. 


### Consider the following cat object:
```
const cat = {
  age: 2,
  name: 'Bailey',
  meow: function () {
    console.log('Meow!');
  },
  greet: function (name) {
    console.log(`Hello ${name}`);
  }
};
```
Now, let's go ahead change it up a bit!
```
cat.age += 1;

cat.age;
// 3


cat.name = 'Bambi';

cat.name;
// 'Bambi'
```
After incrementing the value of the age property by 1, and reassigning name's value to 'Bambi', our cat object now looks like:
```
{
  age: 3,
  name: 'Bambi',
  meow: function () {
    console.log('Meow!');
  },
  greet: function (name) {
    console.log(`Hello ${name}`);
  }
};
```

## Adding Properties

Properties can be added to objects simply by specifying the property name, then giving it a value. Let's start off with a blank object, then add two properties:

```
const printer = {};

printer.on = true;
printer.mode = 'black and white';
```

The above example uses dot notation to add properties, but keep in mind that square bracket notation works just as well:

```javascript
printer['remainingSheets'] = 168;
```

Likewise, we can add a method to the printer object in a similar manner. This time, the value of the property is an anonymous (i.e., unnamed) function:

```javascript
printer.print = function () {
  console.log('The printer is printing!');
};
```

Great! The complete ```printer``` object now looks like the following:

```javascript
{
  on: true,
  mode: 'black and white',
  remainingSheets: 168,
  print: function () {
    console.log('The printer is printing!');
  }
}
```

## Removing Properties
Recall that since objects are mutable, not only can we modify existing properties (or even add new ones) -- we can also delete properties from objects.

Say that the printer object above actually doesn't have any modes (i.e., ```'black and white'```, ```'color'```, etc.). We can go ahead and remove that property from ```printer``` using the ```delete``` operator.

```javascript
delete printer.mode;

// true
```

Note that ```delete``` directly mutates the object at hand. If we try to access a deleted property, the JavaScript interpreter will no longer be able to find the ```mode``` property because the ```mode``` key (along with its value, ```true```) have been deleted:

```
printer.mode;

// undefined
```

Great! Let's see this all in action below.
[video](https://youtu.be/wDxnseegDYs)
[Here's the code from the preceding video.](https://github.com/udacity/OOJS-screencasts/blob/master/L1-objects-in-depth/25-adding-and-removing-properties.js)




## Further Research
* [The 'delete' operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)on MDN

## Invoking Object Methods

```
const developer = {
  name: 'Andrew'
};

developer.sayHello = function () {
  console.log('Hi there!');
};
```

```
{
  name: 'Andrew',
  sayHello: function () {
    console.log('Hi there!');
  }
}
```


```
developer.sayHello();
// 'Hi there!'

developer['sayHello']();
// 'Hi there!

```
Passing Arguments Into Methods


```

const developer = {
  name: 'Andrew',
  sayHello: function () {
    console.log('Hi there!');
  },
  favoriteLanguage: function (language) {
    console.log(`My favorite programming language is ${language}`);
  }
};


developer.favoriteLanguage('JavaScript');
// My favorite programming language is JavaScript'

```

[video](https://youtu.be/MgNjr5z3MGw)
[Here's the code from the preceding video.](https://github.com/udacity/OOJS-screencasts/blob/master/L1-objects-in-depth/39-calling-methods-demo.js)

A method is a property of an object whose value is a function. Methods are called on objects in the following format: ```object.method()```.


Using ```this```, methods can directly access the object that it is called on.

```javascript
const triangle = {
  type: 'scalene',
  identify: function () {
    console.log(`This is a ${this.type} triangle.`);
  }
};

triangle.identify();

// 'This is a scalene triangle.'

```

Note that inside the identify() method, the value this is used. When you say this, what you're really saying is "this object" or "the object at hand."

A value for ```this``` is set when a method is invoked on an object, and that value refers to that object. Since it is a reserved word, it should not be used as any variable name, function name, etc.

[**video**](https://youtu.be/VOkwNvRW_s0)

[**Here's the code from the preceding video**.](https://github.com/udacity/OOJS-screencasts/blob/master/L1-objects-in-depth/46-this-demo.js)




# Further Research
[**Defining Methods**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_methods) on MDN
[**"this"** in Methods](https://javascript.info/object-methods#this-in-methods)


## Beware of Globals

[video](https://youtu.be/fTVmpcG_9ss)
[Here's the code from the preceding video.](https://github.com/udacity/OOJS-screencasts/blob/master/L1-objects-in-depth/57-this-without-object.js)

### The window Object
If you haven't worked with the ```window``` object yet, this object is provided by the browser environment and is globally accessible to your JavaScript code using the identifier, window. This object is not part of the JavaScript specification (i.e., ECMAScript); instead, it is developed by the [W3C](https://www.w3.org/Consortium/).

This ```window``` object has access to a ton of information about the page itself, including:

The page's URL (```window.location;```)
The vertical scroll position of the page (window.scrollY')
Scrolling to a new location (```window.scroll(0, window.scrollY + 200);``` to scroll 200 pixels down from the current location)
Opening a new web page (```window.open("https://www.udacity.com/");```)


Every variable declaration that is made at the global level (outside of a function) automatically becomes a property on the window object!

```javascript
var currentlyEating = 'ice cream';

window.currentlyEating === currentlyEating
// true
```

### Globals and var, let, and const
Only declaring variables with the ```var``` keyword will add them to the window object. If you declare a variable outside of a function with either ```let``` or ```const```, it will not be added as a property to the ```window``` object.

```javascript
let currentlyEating = 'ice cream';

window.currentlyEating === currentlyEating 
// false!
```

### Global Functions are Methods on ```window```
Similarly to how global variables are accessible as properties on the ```window``` object, any global function 
declarations are accessible on the ```window``` object as methods:

```javascript
function learnSomethingNew() {
  window.open('https://www.udacity.com/');
}

window.learnSomethingNew === learnSomethingNew
// true
```

though, global variables and functions are not ideal. 

* **Tight coupling**
* **Name collisions**

**Tight coupling** is a phrase that developers use to indicate code that is too dependent on the details of each other. 
The word "coupling" means the "pairing of two items together." In tight coupling, pieces of code are joined together 
in a way where changing one unintentionally alters the functioning of some other code.

A **name collision** occurs when two (or more) functions depend on a variable with the same name. A major problem with 
this is that both functions will try to update the variable and or set the variable, but these changes are overridden 
by each other!


## Further Research
* [**The window object**](https://developer.mozilla.org/en-US/docs/Web/API/Window) on MDN
* [**The window specification**](https://www.w3.org/TR/html5/browsers.html#the-window-object) on W3C
* [**Article: Globals are Bad**]()
* [**Coupling**](http://wiki.c2.com/?GlobalVariablesAreBad) on Wikipedia
* [**Name Collision**](https://en.wikipedia.org/wiki/Name_collision) on Wikipedia


# Object Methods

```
const myNewFancyObject = new Object();

const dictionary = {
  car: 'automobile',
  apple: 'healthy snack',
  cat: 'cute furry animal',
  dog: 'best friend'
};

```

* Object.keys()
* Object.values()


```
Object.keys(dictionary);

// [car, apple, 'cat', 'dog']

Object.values(dictionary);

// ['automobile', 'healthy snack', 'cute furry animal', 'best friend']
```

[video](https://youtu.be/mRgapwiy-MQ)
[Here's the code from the preceding video.](https://github.com/udacity/OOJS-screencasts/blob/master/L1-objects-in-depth/70-objectkeys-and-objectvalues-demo.js)



How do you know if your browser does support Object.values()? Check out the [Browser Compatibility table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values#Browser_compatibility)!



# Further Research
[**Object.keys()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) on MDN
[**Object.values()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values) on MDN
[**Browser Compatibility**](http://tokenposts.blogspot.com.au/2012/04/javascript-objectkeys-browser.html)



Further Research
[**JavaScript: The Good Parts**](http://javascript.crockford.com/) by Douglas Crockford
[**JJavaScript: The Good Parts via**](https://www.goodreads.com/book/show/2998152-javascript) Goodreads



## [First-Class Functions](https://youtu.be/8VjddoyyG1Q)

JavaScript functions can:

1. Be stored in variables
2. Be returned from a function.
3. Be passed as arguments into another function.
Note that while we can, say, treat a function as an object, a key difference between a function and an object is that 
functions can be called (i.e., invoked with ()), while regular objects cannot.
[**video**](https://youtu.be/FpT_U0pOB-c) and 
[Here's the code from the preceding video.](https://github.com/udacity/OOJS-screencasts/blob/master/L2-functions-at-runtime/4-functions-are-first-class-functions-demo.js)

A function that returns another function is known as higher-order function. Consider this example:
```
function alertThenReturn() {
  alert('Message 1!');

  return function () {
    alert('Message 2!');
  };
}


// const innerFunction = alertThenReturn();

// innerFunction();

// alertThenReturn()();

```
[video](https://youtu.be/tKzF0-cDblg) and
[Here's the code from the preceding video.](https://github.com/udacity/OOJS-screencasts/blob/master/L2-functions-at-runtime/9-returning-functions-demo.js)


Further Research
* [**First-class function**](https://en.wikipedia.org/wiki/First-class_function) on Wikipedia


## [Callbacks](https://youtu.be/pJfiPKKiu9Q)


 A function that takes other functions as arguments (and/or returns a function, as we learned in the previous section) 
 is known as a **higher-order function**. A function that is passed as an argument into another function is called a 
 **callback** function.

[**video**](https://youtu.be/nXPC4YTKdZg) and 
[Here's the code from the preceding video.](https://github.com/udacity/OOJS-screencasts/blob/master/L2-functions-at-runtime/16-callback-demo.js)


[video](https://youtu.be/g99g07TZYvo) and [Here's the code from the preceding video.](https://github.com/udacity/OOJS-screencasts/blob/master/L2-functions-at-runtime/22-forEach-demo.js)


# Scope

[block scope vs. function scope.](https://edgecoders.com/function-scopes-and-block-scopes-in-javascript-25bbd7f293d7) 

These determine where a variable can be seen in some code. Computer scientists call this **lexical scope**.

However, there also exists another kind of scope called **runtime scope**. When a function is run, 
it creates a new runtime scope. This scope represents the *context* of the function, or more specifically, 
the set of variables available for the function to use.

[video](https://youtu.be/EZ3owNzefF4)


A function's runtime scope describes the variables available for use inside a given function. 
The code inside a function has access to:

1. The function's arguments.
2. Local variables declared within the function.
3. Variables from its parent function's scope.
4. Global variables.

![Alt text](https://thumb.ibb.co/gBOq3y/scope_image.png)

The nested ```child()``` function has access to all ```a```, ```b```, and ```c``` variables. That is, these variables 
are in the ```child()``` function's scope.

[video](https://youtu.be/1OcdRnbiepI)
[Here's the code from the preceding video.](https://github.com/udacity/OOJS-screencasts/blob/master/L2-functions-at-runtime/35-scope-demo.js)


JavaScript are traditionally defined in the scope of a function, rather than in the scope of a block. Since entering a 
function will change scope, any variables defined inside that function are not available outside of that function. 
On the other hand, if there are any variables defined inside a block (e.g., within an if statement), 
those variables are available outside of that block.



💡 Block-Scoping 💡
ES6 syntax allows for additional scope while declaring variables with the ```let``` and ```const``` keywords. 
These keywords are used to declare block-scoped variables in JavaScript, and largely replace the need for ```var```.

We've used them throughout this course, but for a closer look, check out our course: [**ES6 - JavaScript Improved**](https://www.udacity.com/course/es6-javascript-improved--ud356). Via MDN:

* [**let**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
* [**const**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)



## Scope Chain
Whenever your code attempts to access a variable during a function call, the JavaScript interpreter will always start off by looking within its own local variables. If the variable isn't found, the search will continue looking up what is called the scope chain. Let's take a look at an example:

```
function one() {
  two();
  function two() {
    three();
    function three() {
      // function three's code here
    }
  }
}

one();
```



![Alt text](https://thumb.ibb.co/mmp86J/scope_chain.png)

When resolving a variable, the JavaScript engine begins by looking at the nested child function's locally-defined 
variables. If found, then the value is retrieved; if not, the JavaScript engine continues to looking outward until 
the variable is resolved. If the JavaScript engine reaches the global scope and is still unable to resolve the 
variable, the variable is undefined.


💡 The Global (window) Object💡
Recall that when JavaScript applications run inside a host environment (e.g., a browser), the host provides a 
window object, otherwise known as the [**global object**](https://developer.mozilla.org/en-US/docs/Glossary/Global_object). Any global variables declared are accessed as properties of 
this object, which represents the outermost level of the scope chain.


## Variable Shadowing


What happens when you create a variable with the *same name* as another variable somewhere in the scope chain?


JavaScript won't throw an error or otherwise prevent you from creating that extra variable. In fact, the variable with 
local scope will just temporarily "shadow" the variable in the outer scope. This is called **variable shadowing**. 
Consider the following example:

```javascript
const symbol = '¥';

function displayPrice(price) {
  const symbol = '$';
  console.log(symbol + price);
}

displayPrice('80');
// '$80'
```


ow does the JavaScript interpreter know which value of ```symbol``` to use? Well, since the variable pointing to '$' 
is declared inside a function (i.e., the "inner" scope), it will override any variables of the same name that belong 
in an outer scope -- such as the global variable pointing to ```'¥'```. 
As a result, ```'$80'``` is displayed rather than ```'¥80'```.

## Summary
When a function is run, it creates its own scope. A function's scope is the set of variables available for use within 
that function. The scope of a function includes:

* The function's arguments.
* Local variables declared within the function.
* Variables from its parent function's scope.
* Global variables.

Variables in JavaScript are also function-scoped. This means that any variables defined inside a function are not 
available for use outside the function, though any variables defined within blocks (e.g. if or for) are available 
outside that block.When it comes to accessing variables, the JavaScript engine will traverse the scope chain, 
first looking at the innermost level (e.g., a function's local variables), then to outer scopes, eventually reaching 
the global scope if necessary.
In this section, we've seen quite a few examples of a nested function being able to access variables declared in 
its parent function's scope (i.e., in the scope in which that function was nested). These functions, combined with 
the lexical environment it which it was declared, actually have a very particular name: **closure**.

## Further Research
* [**Intro to JavaScript**](https://www.udacity.com/course/intro-to-javascript--ud803) (Lesson 5's coverage ofscope)
* Douglas Crockford's discussion of block-scoped variables in [**The Better Parts**](https://www.youtube.com/watch?v=Ji6NHEnNHcA&t=26m9s)
* [**Functions and Function Scope**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions) on MDN


## Closures


Functions Retain Their Scope
We just looked at how function scope works and how a scope chain is created. Just to recap: when an **identifier** 
(i.e., a variable) is used, the JavaScript engine will check the scope chain to retrieve the value for that identifier. 
The identifier might be found in the local scope (either in the function or block). If it's not found locally, then it 
might exist in an outer scope. It'll then keep checking the next outer scope followed by the next outer scope until 
it reaches the global scope (if necessary).

The process of a function retaining access to its scope is called a closure.

MDN defines a closure as:

```
"the combination of a function and the lexical environment within which that function was declared."
```

This definition might not make a lot of sense if you don't know what the words "lexical environment" mean. 
The [**ES5 spec**](http://es5.github.io/#x10.2) refers to a lexical environment as:
```
"the association of Identifiers to specific variables and functions based upon the lexical nesting structure of ECMAScript code."
```

In this case, the "lexical environment" refers the code as it was written in the JavaScript file. As such, a closure is:

* The function itself, and
* The code (but more importantly, the *scope chain* of where the function is declared

[video](https://youtu.be/qSUqXlJ3CII)

## Creating a Closure
Every time a function is defined, closure is created for that function. Strictly speaking, then, 
every function has closure! This is because functions close over at least one other context along the scope chain: 
the global scope. However, the capabilities of closures really shine when working with a nested function 
(i.e., a function defined within another function).

Recall that a nested function has access to variables outside of it. From what we have learned about the scope chain, 
this includes the variables from the outer, enclosing function itself (i.e., the parent function)! These nested functions 
close over (i.e., capture) variables that aren't passed in as arguments nor defined locally, 
otherwise known as **free variables**.

[video-1](https://youtu.be/dCcypTP_LEg)
[Here's the code from the preceding video.](https://github.com/udacity/OOJS-screencasts/blob/master/L2-functions-at-runtime/53-closure-demo-1.js)

[video-2](https://youtu.be/ojZBKgCv83s)
[Here's the code from the preceding video.](https://github.com/udacity/OOJS-screencasts/blob/master/L2-functions-at-runtime/57-closure-demo-2.js)


## Garbage Collection

JavaScript manages memory with automatic **garbage collection**. This means that when data is no longer referable 
(i.e., there are no remaining references to that data available for executable code), 
it is "garbage collected" and will be destroyed at some later point in time. This frees up the resources 
(i.e., computer memory) that the data had once consumed, making those resources available for re-use.


Let's look at garbage collection in the context of closures. We know that the variables of a parent function are 
accessible to the nested, inner function. If the nested function captures and uses its parent's variables 
(or variables along the scope chain, such as its parent's parent's variables), those variables will stay in 
memory as long as the functions that utilize them can still be referenced.


```
function myCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}
```
The existence of the nested function keeps the count variable from being available for garbage collection, therefore 
count remains available for future access. After all, a given function (and its scope) does not end when the function 
is returned. Remember that functions in JavaScript retain access to the scope that they were created in!


## Further Research
* [**Memory Management**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management) on MDN
* [**Closures**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) on MDN
* [**Lexical Environments**](http://es5.github.io/#x10.2) in the ES5 spec

## [**Immediately-Invoked Function Expressions (IIFE)**](https://youtu.be/jHrk_5erjxE)

differences between function *declarations* and function *expressions*.

A **function declaration** defines a function and does not require a variable to be assigned to it. It simply declares a function, and doesn't itself return a value. Here's an example:

```javascript
function returnHello() {
  return 'Hello!';
}
```

a **function expression** does return a value. Function expressions can be anonymous or named, and are part of another expression's syntax. They're commonly assigned to variables.

```javascript
// anonymous
const myFunction = function () {
  return 'Hello!';
};

// named
const myFunction = function returnHello() {
  return 'Hello!';
};
```

An immediately-invoked function expression, or IIFE (pronounced iffy), is a function that is called immediately after it is defined. Check out the following example:

```javascript
(function sayHi(){
    alert('Hi there!');
  }
)();

// alerts 'Hi there!'

//an anonymous function expression that takes in a single argument:

(function (name){
    alert(`Hi, ${name}`);
  }
)('Andrew');

// alerts 'Hi, Andrew'

// example of an IIFE, this time taking two arguments and returning 

(function (x, y){
    console.log(x * y);
  }
)(2, 3);

// 6

```

One of the primary uses for IIFE's is to create **private scope** (i.e., private state). 


```javascript
const myFunction = (
  function () {
    const hi = 'Hi!';
    return function () {
      console.log(hi);
    }
  }
)();
```

![Alt text](https://preview.ibb.co/jCAMBJ/iife_with_a_closure.png)

```myFunction``` refers to an IIFE with a locally-defined variable, ```hi```, and a returned function that closes over ```hi``` and prints its value to the console.


💡 Alternative Syntax for IIFE's 💡

```javascript
(function sayHi(){
   alert('Hi there!');
 }
)();

// alerts 'Hi there!'


(function sayHi(){
   alert('Hi there!');
}());

// alerts 'Hi there!'
```

Among developers, Douglas Crockford has mentioned that wrapping the entire unit in parentheses (as presented directly above) helps readers understand that what they're seeing is indeed an expression. Feel free to check out his chat [here](https://www.youtube.com/watch?feature=player_detailpage&v=taaEzHI9xyY#t=2020s).


## IIFE's, Private Scope, and Event Handling

[**video**](https://youtu.be/lowdzRLtNKg)

## Benefits of Immediately-Invoked Function Expressions

We've seen how using an immediately-invoked function expression creates a private scope that protects variables or methods from being accessed. IIFE's ultimately use the returned functions to access private data within the closure. This works out very well: while these returned functions are publicly-accessible, they still maintain privacy for the variables defined within them!

Another great opportunity to use an IFFE is when you want to execute some code without creating extra global variables. However, note that an IIFE is only intended to be invoked once, to create a unique execution context. If you have some code that is expected to be re-used (e.g., a function meant to be executed more than once in the application), declaring the function and then invoking it might be a better option.

All in all, if you simply have a one-time task (e.g., initializing an application), an IIFE is a great way to get something done without polluting your the global environment with extra variables. Cleaning up the global namespace decreases the chance of collisions with duplicate variable names, after all.

## Summary
An **immediately-invoked function expression (IIFE)** is a function that is called immediately after it is defined. Utilizing an IIFE alongside closures allows for a **private scope**, which maintains privacy for variables defined within them. And since less variables are created, an IIFE will help to minimize pollution of the global environment, hindering the chances of variable name collisions.

## Further Research
* [**Function Declarations vs. Function Expressions**](https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/)

* [**An Introduction to IIFEs - Immediately Invoked Function Expressions**](http://adripofjavascript.com/blog/drips/an-introduction-to-iffes-immediately-invoked-function-expressions.html) on A Drip of JavaScript

* [**Immediately-Invoked Function Expression (IIFE)**](http://benalman.com/news/2010/11/immediately-invoked-function-expression/) by Ben Alman

Lesson Summary

* [**Addy Osmani's Learning JavaScript Design Patterns**](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)


# [Classes and Object](https://youtu.be/7XpQpOnkCSk)


* we have created objects using the object literal notation. 

* write functions that return objects. 

* the constructor function

To instantiate (i.e., *create*) a new object, we use the ```new``` keyword/operator to invoke the function and the name with a capital letter:

```javascript
new Name();
```
## Constructor Functions: Structure and Syntax

```javascript
function SoftwareDeveloper() {
  this.favoriteLanguage = 'JavaScript';
}
```
i.e. there should not be return statement).

## Creating a New Object
```
let developer = new SoftwareDeveloper();
```

![Alt text](https://thumb.ibb.co/h9yi8y/object_from_constructor_function.png)

[**video**](https://youtu.be/EW8avAH_qTs)

[Here's the code from the preceding video.](https://github.com/udacity/OOJS-screencasts/blob/master/L3-objects-and-classes/11-comparing-objects.js)

## Creating Multiple Objects

```JavaScript
let engineer = new SoftwareDeveloper();
let programmer = new SoftwareDeveloper();

console.log(engineer);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript' }

console.log(programmer);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript' }
```

## Constructor Functions Can Have Parameters

```JavaScript

function SoftwareDeveloper(name) {
  this.favoriteLanguage = 'JavaScript';
  this.name = name;
}

let instructor = new SoftwareDeveloper('Andrew');

console.log(instructor);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript', name: 'Andrew' }

```
we can create different objects using the same constructor. 

```JavaScript
let teacher = new SoftwareDeveloper('Richard');

console.log(teacher);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript', name: 'Richard' }
```

[**video**](https://youtu.be/Gg8W66hSfqw)

[Here's the code from the preceding video.](https://github.com/udacity/OOJS-screencasts/blob/master/L3-objects-and-classes/15-instantiating-an-object.js)



⚠️ Omitting the new Operator ⚠️
What happens if you inadvertently invoke a constructor function without using the new operator?
```javascript
function SoftwareDeveloper(name) {
   this.favoriteLanguage = 'JavaScript';
   this.name = name;
}

let coder = SoftwareDeveloper('David');

console.log(coder);
// undefined
```
Without using the ```new``` operator, no object was created. The function was invoked just like any other regular function. Since the function doesn't return anything (except ```undefined```, which all functions return by default), the coder variable ended up being assigned to ```undefined```.

since this function was invoked as a regular function, the value of ```this``` is also drastically different.


## Seeing the Object's Constructor (instanceOf - which returns a boolean) 

[**video**](https://youtu.be/T-b960E8K4I)

[**Here's the code from the preceding video.**](https://github.com/udacity/OOJS-screencasts/blob/master/L3-objects-and-classes/22-how-to-view-constructor-references.js)

## 💡 instanceOf and the Prototype Chain 💡

the ```instanceOf``` operator actually tests whether or not that constructor appears in the **prototype chain** of an object. This means that we can't always check exactly which constructor created that object, but it does give us insight as to what other properties and methods an object may have access to.

## Summary
JavaScript's class system is built directly on using functions and objects. Calling (i.e., invoking) a **constructor function** with the ```new``` operator instantiates a new object. The same constructor function can be used to create different objects.

## Further Research
* [**The new operator**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) on MDN

* [**The instanceOf operator**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) on MDN

 ## [this](https://youtu.be/v2yF-ItJdzY) in Constructor Functions

```javascript

function Cat(name) {
 this.name = name;
 this.sayName = function () {
   console.log(`Meow! My name is ${this.name}`);
 };
}

const bailey = new Cat('Bailey')

//  newly-created object

{
  name: 'Bailey',
  sayName: function () {
    console.log(`Meow! My name is ${this.name}`);
  }
}

bailey.sayName();

// 'Meow! My name is Bailey'


```

the value assigned to ```this``` is based on the object that invokes the method where ```this``` is defined. 

```javascript

const dog = {
  bark: function () {
    console.log('Woof!');
  },
  barkTwice: function () {
    this.bark();
    this.bark();
    // without "this" we get 
    // ReferenceError: bark is not defined
  }
};

dog.bark();
// Woof!

dog.barkTwice();
// Woof!
// Woof!

```

[**What Does this Get Set To?**](https://youtu.be/Xwfi1wCB8OM)

![img](https://image.ibb.co/dj4XmJ/this_grid.png)

If a constructor function is called with the 
```new``` operator, the value of ```this``` is set to the newly-created object. If a method is invoked on an object, ```this``` is set to that object itself. And if a function is simply invoked, ```this``` is set to the global object: ```window```.

The fourth way to call functions allows us to set ```this``` ourselves! 


ps. When a function is invoked (i.e., as a function, rather than as a method or with the ```new``` operator), ```this``` gets set to the global object: ```window```.

## Summary

* When invoking constructor functions with the ```new``` operator, a ```this``` variable is set to the newly-created object. 

* When invoking a method on an object, ```this``` is set to that object itself. 

* And when invoking a function in a browser environment, ```this``` is set to window, otherwise known as the global object.

* set of ways to invoke functions: with ```apply()```, and with ```call()```, ```bind()```. 


## Further Research
* [**The this operator**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) on MDN



# [Setting Our Own `this`](https://youtu.be/jMEwWv5hkYI)

Recall that functions, objects, and the this keyword are all interconnected. Whether you're invoking a constructor function with the new operator, invoking a method on an object, or simply invoking a function normally -- each form of invocation sets the value of `this` a bit differently.

But what if we want to set the value of this ourselves? 

## More Ways to Invoke Functions

* **`call()`** is a method directly invoked onto a function. We first pass into it a single value to set as the value of this; then we pass in any of the receiving function's arguments one-by-one, separated by commas.

```javascript

function multiply(n1, n2) {
  return n1 * n2;
}

multiply(3, 4);

// 12

multiply.call(window, 3, 4);

// 12
```
We first invoke the ```call()``` method directly onto the ```multiply()``` function. Note that the multiply preceding ```.call(window, 3, 4)``` is not followed by any parentheses. ```call()``` will be handling the invocation and the ```multiply()``` function's arguments itself!

Outside of [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode), both ways of invoking multiply() above are equivalent.

 Using ```call()``` to invoke a method allows us to "borrow" a method from one object -- then use it for *another* object!

```javascript
const mockingbird = {
  title: 'To Kill a Mockingbird',
  describe: function () {
    console.log(`${this.title} is a classic novel`);
  }
};

mockingbird.describe();

// 'To Kill a Mockingbird is a classic novel'

const pride = {
  title: 'Pride and Prejudice'
};

mockingbird.describe.call(pride);
// 'Pride and Prejudice is a classic novel'

```

Let's break down what happened when ```mockingbird.describe.call(pride);``` is executed!

First, the ```call()``` method is invoked onto mockingbird.describe (which points to a function). Then, the value of this is passed into the ```call()``` method: ```pride```.

Since ```mockingbird's describe()``` method references ```this.title```, we need to access the title property of the object that this refers to. But since we've set our own value of ```this```, the value of ```this.title``` will be accessed from the pride object! As a result, ```mockingbird.describe.call(pride);``` is executed, and we see ```Pride and Prejudice is a classic novel``` in the console.

* **`apply()`** method is called on a function to not only invoke that function, but also to associate with it a specific value of ```this```. However, rather than passing arguments one-by-one, separated by commas -- ```apply()``` **takes the function's arguments in an *array***.

```javascript
function multiply(n1, n2) {
  return n1 * n2;
}

multiply.call(window, 3, 4);

// 12

multiply.apply(window, [3, 4]);

// 12

```

```javascript
const mockingbird = {
  title: 'To Kill a Mockingbird',
  describe: function () {
    console.log(`${this.title} is a classic novel`);
  }
};


const pride = {
  title: 'Pride and Prejudice'
};

mockingbird.describe.call(pride);

// 'Pride and Prejudice is a classic novel'

mockingbird.describe.apply(pride);

// 'Pride and Prejudice is a classic novel'


```

## Choosing One Method Over the Other

```call()``` may be limited if you don't know ahead of time the number of arguments that the function needs. In this case, ```apply()``` would be a better option, since it simply takes an array of arguments.

[Explanation video](https://youtu.be/rHMH0budUKk)

[Here's the code from the preceding video.](https://github.com/udacity/OOJS-screencasts/blob/master/L3-objects-and-classes/44-invoking-functions-demo.js)



```javascript
const andrew = {
  name: 'Andrew'
};

function introduce(language) {
  console.log(`I'm ${this.name} and my favorite programming language is ${language}.`);
}

introduce.call(andrew, 'JavaScript')

//'I'm Andrew and my favorite programming language is JavaScript.'

```

Callbacks and ```this```

[**video**](https://youtu.be/r7bmNJHFttE)

[Here's the code from the preceding video.](https://github.com/udacity/OOJS-screencasts/blob/master/L3-objects-and-classes/50-callbacks-and-this-demo.js)

 ps. if a function is simply invoked, this is set to the global object: window.

## Saving this with an Anonymous Closure

Recall that simply invoking a normal function will set the value of this to the global object (i.e., window).


```javascript
function invokeTwice(cb) {
   cb();
   cb();
}

const dog = {
  age: 5,
  growOneYear: function () {
    this.age += 1;
  }
};

dog.growOneYear();

dog.age; 
// 6


```
One way to resolve this issue is to use an **anonymous closure** to close over the dog object:

```javascript
invokeTwice(function () { 
  dog.growOneYear(); 
});

dog.age;
// 7
```
Since this is such a common pattern, JavaScript provides an alternate and less verbose approach: the **bind()** method.

* **`bind()`**  is a method that is also called on a function, but unlike ```call()``` or ```apply()```, which both invoke the function right away -- ```bind()``` returns a new function that, when called, has ```this``` set to the value we give it.

[video](https://youtu.be/t225UNDPO9c)

[Here's the code from the preceding video.](https://github.com/udacity/OOJS-screencasts/blob/master/L3-objects-and-classes/56-using-bind.js)


Under the hood, ```bind()``` returns a new function that can be called like a normal function (e.g., myFunction()), but inside of it, a method will be invoked method-style (e.g., ```myObject.myMethod()```). This has helps us when we see potential scope issues with ```this``` when passing callback functions.

```javascript

const driver = {
  name: 'Danica',
  displayName: function () {
    console.log(`Name: ${this.name}`);
  }
};

const car = {
  name: 'Fusion'
};

```

Write an expression using ```bind()``` that allows us to "borrow" the ```displayName()``` method from driver for the ```car``` object to use. Note: The expression itself is sufficient (no need to save it to a variable).

```javascript

driver.displayName.bind(car);
```

## Summary
JavaScript provides three methods that allow us to set the value of ```this``` for a given function:

* ```call()``` invokes the function and has arguments passed in individually, separated by commas.
* ```apply()``` is similar to ```call()```; it invokes the function just the same, but arguments are passed in as an array.
* ```bind()``` returns a new function ```with this``` bound to a specific object, allowing us to call it as a regular function.

For further research, we recommend checking out Kyle Simpson's [**You Don't Know JS**](https://legacy.gitbook.com/book/maximdenisov/you-don-t-know-js/details) series on ```this```, linked below.

Did you know that you can *even* base *objects* on other *objects*? This is the main idea behind **prototypal inheritance**, and by *implementing* it, objects can take on properties of *other objects*. We'll cover all this and more, coming up next!

Further Research
* Kyle Simpson's [**You Don't Know JS**](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes)

* [**call()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) on MDN

* [**apply()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) on MDN

* [**bind()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) on MDN

# [**Prototypal Inheritance**](https://youtu.be/KdHMZEzRI4s)

we simply added methods directly into the constructor function itself:

```javascript

function Cat() {
 this.lives = 9;

 this.sayName = function () {
   console.log(`Meow! My name is ${this.name}`);
 };
}

```

![img](https://preview.ibb.co/iPUgJ8/prototype_chain_diagram.png)

The ```Cat()``` constructor function is invoked using the ```new``` operator, which creates the ```bailey``` instance (object). Note that the meow() method is defined in the prototype of the bailey object's constructor function. The prototype is just an object, and all objects created by that constructor are secretly linked to the prototype. As such, we can execute ```bailey.meow()``` as if it were ```bailey```'s own method!


Recall that each function has a ```prototype``` property, which is really just an object. When this function is invoked as a constructor using the ```new``` operator, it creates and returns a new object. This object is secretly linked to its constructor's ```prototype```, and this secret link allows the object to access the ```prototype```'s properties and methods as if it were its own!

Since we know that the ```prototype``` property just points to a regular object, that object itself also has a secret link to its prototype. And that prototype object also has reference to its own prototype -- and so on. This is how the **prototype chain** is formed.

## Finding Properties and Methods on the Prototype Chain

Whether you're accessing a property (e.g., ```bailey.lives;```) or invoking a method (i.e., ```bailey.meow();```), the JavaScript interpreter looks for them along the prototype chain in a very particular order:

1. First, the JavaScript engine will look at the object's own properties. This means that any properties and methods defined directly in the object itself will take precedence over any properties and methods elsewhere if their names are the same (similar to variable shadowing in the scope chain).

2. If it doesn't find the property in question, it will then search the object's constructor's prototype for a match.

3. If the property doesn't exist in the prototype, the JavaScript engine will continue looking up the chain.

4. At the very end of the chain is the ``Object()`` object, or the top-level parent. If the property still cannot be found, the property is undefined.

Previously, we simply defined methods directly in a constructor function itself. Let's see how things look if we defined methods in the constructor's ```prototype``` instead!


[**video**](https://youtu.be/Vx_LcB0sQDE)

[**Here's the code from the preceding video.**](https://github.com/udacity/OOJS-screencasts/blob/master/L3-objects-and-classes/66-methods-and-prototype.js)

💡 Replacing the prototype Object 💡

```javascript
function Hamster() {
  this.hasFur = true;
}

let waffle = new Hamster();
let pancake = new Hamster();

```

First, note that even after we make the new objects, waffle and pancake, we can still add properties to Hamster's prototype and it will still be able to access those new properties.

```javascript

Hamster.prototype.eat = function () {
  console.log('Chomp chomp chomp!');
};

waffle.eat();
// 'Chomp chomp chomp!'

pancake.eat();
// 'Chomp chomp chomp!'
```
Now, let's replace Hamster's prototype object with something else entirely:

```javascript
Hamster.prototype = {
  isHungry: false,
  color: 'brown'
};
```
The previous objects don't have access to the updated prototype's properties; they just retain their secret link to the old prototype:

```javascript

console.log(waffle.color);
// undefined

waffle.eat();
// 'Chomp chomp chomp!'

console.log(pancake.isHungry);
// undefined
```
any new ```Hamster``` objects created moving forward will use the updated prototype:

```javascript

const muffin = new Hamster();

muffin.eat();
// TypeError: muffin.eat is not a function

console.log(muffin.isHungry);
// false

console.log(muffin.color);
// 'brown'

```

[**video**](https://youtu.be/MaNixLkrYTE)
[Here's the code from the preceding video.](https://github.com/udacity/OOJS-screencasts/blob/master/L3-objects-and-classes/72-prototype-demo.js)

## Checking an Object's Properties

 where a particular property is coming from! 

* ```hasOwnProperty()``` allows you to find the origin of a particular property. Upon passing in a string of the property name you're looking for, the method will return a boolean indicating whether or not the property belongs to the object itself 


```javascript
function Phone() {
  this.operatingSystem = 'Android';
}

Phone.prototype.screenSize = 6;
```


```javascript
const myPhone = new Phone();

const own = myPhone.hasOwnProperty('operatingSystem');

console.log(own);
// true
```

```javascript

const inherited = myPhone.hasOwnProperty('screenSize');

console.log(inherited);
// false

```

* ```isPrototypeOf()``` checks whether or not an object exists in another object's prototype chain. Using this method, you can confirm if a particular object serves as the prototype of another object. 

```javascript

const rodent = {
  favoriteFood: 'cheese',
  hasTail: true
};
```

Let's now build a Mouse() constructor function, and assign its prototype to rodent:

```javascript

function Mouse() {
  this.favoriteFood = 'cheese';
}

Mouse.prototype = rodent;

```
If we create a new Mouse object, its prototype should be the rodent object. Let's confirm:

```javascript

const ralph = new Mouse();

const result = rodent.isPrototypeOf(ralph);

console.log(result);
// true

```

* ```Object.getPrototypeOf()``` if you're not sure what a certain object's prototype is,  retrieving the prototype of a given object.

```javascript

const myPrototype = Object.getPrototypeOf(ralph);

console.log(myPrototype);
// { favoriteFood: 'cheese', hasTail: true }

```

## The constructor Property

*  Accessing an object's ```constructor``` property returns a reference to the constructor function that created that object in the first place!

```javascript

function Longboard() {
  this.material = 'bamboo';
}

const board = new Longboard();

```

If we access board's constructor property, we should see the original constructor function itself:

```javascript

console.log(board.constructor);

// function Longboard() {
//   this.material = 'bamboo';
// }

```

Keep in mind that if an object was created using literal notation, its constructor is the built-in Object() constructor function!


```javascript

const rodent = {
  favoriteFood: 'cheese',
  hasTail: true
};

console.log(rodent.constructor);
// function Object() { [native code] }

```


```javascript

const capitals = {
  California: 'Sacramento',
  Washington: 'Olympia',
  Oregon: 'Salem',
  Texas: 'Austin'
};

Object.getPrototypeOf(capitals);

// A reference to Objecet()''s prototype

Object.getPrototypeOf(capitals) === Object.prototype

// true

```

Keep in mind that since ```capitals``` was created with object literal notation, its constructor is the built-in ```Object()``` constructor function itself!


## Summary
Inheritance in JavaScript is when an object is based on *another* object. Inheritance allows us to reuse existing code, having objects take on properties of other objects.

When a function is called as a constructor using the ```new``` operator, the function creates and returns a new object. This object is secretly linked to its constructor's ```prototype```, which is just another object. Using this secret link allows an object to access the ```prototype```'s properties and methods as if it were its own. If JavaScript does not find a particular property within an object, it will keep looking up the prototype chain, eventually reaching ```Object()``` (top-level parent) if necessary.

We also looked at a few methods and properties that allow use to check the origins and references of objects and their prototypes, namely:

* ```hasOwnProperty()```
* ```isPrototypeOf()```
* ```Object.getPrototypeOf()```
* ```.constructor```

## Further Research
* [**Object Playground**](http://www.objectplayground.com/)
* [**hasOwnProperty()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) on MDN
* [**isPrototypeOf()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf) on MDN
* [**Object.getPrototypeOf()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) on MDN
* [**.constructor**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) on MDN


## Prototypal Inheritance: Subclasses

One of the benefits of implementing inheritance is that it allows you to *reuse existing code*. By establishing inheritance, we can **subclass**, that is, have a "child" object take on most or all of a "parent" object's properties while retaining unique properties of its own.


## Inheritance Via Prototypes
 
 When calling any property on any object, the JavaScript engine will first look for the property in the object itself (i.e., the object's own, non-inherited properties). If the property is not found, JavaScript will then look at the object's prototype. If the property still isn't found in the object's prototype, JavaScript will continue the search up the **prototype chain**.

## The Secret Link

```javascript

const bear = {
  claws: true,
  diet: 'carnivore'
};

unction PolarBear() { 
  // ...
}

PolarBear.prototype = bear;


const snowball = new PolarBear();

snowball.color = 'white';
snowball.favoriteDrink = 'cola';

```
This is how the snowball object looks at this point:

```javascript

{
  color: 'white',
  favoriteDrink: 'cola'
}

console.log(snowball.claws);
// true

console.log(snowball.diet);
// 'carnivore'

```

* ```_proto__``` property (note the two underscores on each end), is a property of all objects (i.e., instances) made by a constructor function, and points directly to that constructor's ```prototype``` object.

```javascript

console.log(snowball.__proto__);

// { claws: true, diet: 'carnivore' }

console.log(snowball.__proto__ === bear);

// true

```

Since the __proto__ property refers to the same object as PolarBear's prototype, bear, comparing them returns true.

**It is highly discouraged to reassign the ```__proto__``` property, or even use it in any code you write.**

First, there compatibility issues across browsers. What's more: since the JavaScript engine searches and accesses properties along the prototype chain, mutating an object's prototype can lead to performance issues. The MDN article for [proto](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) even warns against using this property in red text at the very top of the page!


It's great to know the secret link for learning how functions and objects are interconnected, but **you should not use ```__proto__``` to manage inheritance**. If you ever just need to review an object's prototype, you can still use ```Object.getPrototypeOf()```.

💡 What About Just Inheriting the Prototype? 💡

Let's say we want a 
```Child``` object to inherit from a ```Parent``` object. Why shouldn't we just set 
```Child.prototype = Parent.prototype```?

First, recall that objects are passed by reference. This means that since the Child.prototype object and the Parent.prototype object refer to the same object -- any changes you make to Child's prototype will also be made to Parent's prototype! We don't want children being able to modify properties of their parents!

Consider the following:
```javascript
function GuineaPig (name) {
  this.name = name;
  this.isCute = true;
}

const waffle = new GuineaPig('Waffle');
```
What does ```waffle.__proto__``` refer to?

```GuineaPig.prototype```

When the new instance of ```GuineaPig``` is created, the special property ```waffle.__proto__``` is set to ```GuineaPig.prototype```. This secret link allows instances of the GuineaPig constructor to access properties of ```GuineaPig.prototype```. Keep in mind that **you should never use the ```__proto__``` in any code you write**.



Consider the following:


```javascript

function Car (color, year) {
  this.color = color;
  this.year = year;
}

Car.prototype.drive = function () {
  console.log('Vroom vroom!');
}; 

const car = new Car('silver', 1988);

```

What happens when ```car.drive();``` is executed?


![img](https://image.ibb.co/euZzAo/js_prototypal_inheritance_explanation.png)


## Object.create()

*  ```Object.create()``` a way for us to set up the prototype of an object ourselves. It takes in a single object as an argument, and returns a new object with its ```__proto__``` property set to what argument is passed into it. From that point, you simply set the returned object to be the prototype of the child object's constructor function.

Example

```javascript

const mammal = {
  vertebrate: true,
  earBones: 3
};

```

Recall that ```Object.create()``` takes in a single object as an argument, and returns a new object. That new object's ```__proto__``` property is set to whatever was originally passed into ```Object.create()```. Let's save that returned value to a variable, rabbit:

```javascript

const rabbit = Object.create(mammal);

```

We expect the new rabbit object to be blank, with no properties of its own:

```javascript

console.log(rabbit);
// {}

```
However, rabbit should now be secretly linked to mammal. That is, its __proto__ property should point to mammal:

```javascript

console.log(rabbit.__proto__ === mammal);
// true

```

Great! This means that now, rabbit extends mammal (i.e., rabbit inherits from mammal). As a result, rabbit can access mammal's properties as if it were its own.

```javascript
console.log(rabbit.vertebrate);
// true

console.log(rabbit.earBones);
// 3

```

```Object.create()``` gives us a clean method of establishing prototypal inheritance in JavaScript. We can easily extend the prototype chain this way, and we can have objects inherit from just about any object we want.

[video](https://youtu.be/K7CKb7MlAT4)

[Here's the code from the preceding video.](https://github.com/udacity/OOJS-screencasts/blob/master/L3-objects-and-classes/90-objectcreate-demo.js)

Consider the following:

```javascript

function Parent() {
  // ...
}

function Child() {
  // ...
}

Child.prototype = Object.create(Parent.prototype);

const child = new Child()

//The following is then executed:

child instanceof Parent;

// What is printed to the console?

 //true
```

```Object.create()``` takes in a single object as an argument, and returns a new object. That new object's ```__proto__``` property is set to whatever was originally passed into ```Object.create()```.

In this quiz, ```Parent.prototype``` was the argument passed into ```Object.create()```. The return value of the expression ```Object.create(Parent.prototype);```was then set to the value of theChildconstructor'sprototypeproperty. After that, we instantiate a new ```object:child```.

The expression child instanceof Parent; returns a boolean indicating whether the ```Parent``` constructor exists in the ```child``` object's prototype chain. Since we know this is true after executing the first expression (i.e., ```Child.prototype = Object.create(Parent.prototype);```), the console outputs ```true```


**What is true about ```Object.create()```?** 

It returns a new object whose __proto__ property is set to the object passed into Object.create()

Using Object.create(), we can have objects inherit from just about any object we want (i.e., not only the prototype)

Object.create() allows us to implement prototypal inheritance without mutating the prototype

## Summary
Inheritance in JavaScript is all about setting up the prototype chain. This allows us to ```subclass```, that is, create a "child" object that inherits most or all of a "parent" object's properties and methods. We can then implement any of the child object's unique properties and methods separately, while still retaining data and functionality from its parent.

An object (instance) is secretly linked to its constructor function's prototype object through that instance's ```__proto__``` property. **You should never use the ```__proto__``` in any code you write**. Using ```__proto__``` in any code, or even inheriting just the prototype directly, leads to some unwanted side effects.

To efficiently manage inheritance in JavaScript, an effective approach is to avoid mutating the prototype completely. ```Object.create()``` allows us to do just that, taking in a parent object and returning a new object with its ```__proto__``` property set to that parent object.

## Further Research
* [**Inheritance and the prototype chain**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) on MDN
* [**Object.create()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) on MDN

# Lesson 10 - [1. Update to "Function"](https://youtu.be/CCfficj6zG0)

* 2. Arrow Functions
* 3. Using Arrow Functions
* 4. "this" and Regular Functions
* 5. "this" and Arrow Functions
* 6. Default Function Parameters
* 7. Defaults and Destructuring
* 8. Class Preview
* 9. JavaScript's Illusion of Classes
* 10. Super and Extends

# 2. Arrow Functions

ES6 introduces a new kind of function called the **arrow function**.

```javascript
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(function(name) { 
  return name.toUpperCase();
});

const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
  name => name.toUpperCase()
);

```

NOTE: how ```map() works?``` It's a method on the Array prototype. You pass a function to it, and it calls that function once on every element in the array. It then gathers the returned values from each function call and makes a new array with those results. For more info, check out [MDN's documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

## Convert a function to an arrow function
```javascript
const names = ['Afghanistan', 'Aruba', 'Bahamas', 'Chile', 'Fiji', 'Gabon', 'Luxembourg', 'Nepal', 'Singapore', 'Uganda', 'Zimbabwe'];

const longNames = names.filter(function(name) {
  return name.length > 6;
});

const longNames = names.filter( name => name.length > 6);
```

* remove the function keyword
* remove the parentheses
* remove the opening and closing curly braces
* remove the return keyword
* remove the semicolon
* add an arrow ( => ) between the parameter list and * the function body


* [**video**](https://youtu.be/CM4j786p3Vs)


##  3. Using Arrow Functions

Regular functions can be either **function declarations** or **function expressions**, however arrow functions are *always* **expressions**. In fact, their full name is *"arrow function expressions"*, so they can only be used where an expression is valid. This includes being:

* stored in a variable,
* passed as an argument to a function,
* and stored in an object's property.

```javascript

// arrow function is stored in a variable.

const greet = name => `Hello ${name}!`;

// you'd call it like this:

greet('Asser');

// Returns: Hello Asser!

```

## Parentheses and arrow function parameteres

```javascript

const sayHello = name => `Hello ${name}!`

// empty parameter list requires parentheses
const sayHi = () => console.log('Hello Udacity Student!');
sayHi();

// multiple parameters requires parentheses
const orderIceCream = (flavor, cone) => console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);
orderIceCream('chocolate', 'waffle');

```

## Concise and block body syntax

All of the arrow functions we've been looking at have only had a single expression as the function body:

```javascript
// concise body syntax
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
  name => name.toUpperCase()
);

```

this format of the function body is called the *"concise body syntax"*. The concise syntax:

* has no curly braces surrounding the function body
* and automatically returns the expression.

If you need more than just a single line of code in your arrow function's body, then you can use the *"block body syntax"*.

Important things to keep in mind with the block syntax:

* it uses curly braces to wrap the function body
* and a return statement needs to be used to actually return something from the function.


```javascript
// block body syntax
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map( name => {
  name = name.toUpperCase();
  return `${name} has ${name.length} characters in their name`;
});

```

ps. arrow functions are only expressions, there's no such thing as an arrow function declaration.

## 4. ["this" and Regular Functions](https://youtu.be/JCDcj_tKnmY)
  
The value of the this keyword is based completely on how its function (or method) is called. this could be any of the following:

#### 1. A new object
If the function is called with new:

```
const mySundae = new Sundae('Chocolate', ['Sprinkles', 'Hot Fudge']);
```
In the code above, the value of this inside the Sundae constructor function is a new object because it was called with new.

#### 2. A specified object
If the function is invoked with call/apply:

```
const result = obj1.printName.call(obj2);
```
In the code above, the value of this inside printName() will refer to obj2 since the first parameter of call() is to explicitly set what this refers to.

#### 3. A context object
If the function is a method of an object:
```
data.teleport();
```
In the code above, the value of this inside teleport() will refer to data.

#### 4. The global object or undefined
If the function is called with no context:
```
teleport();
```
In the code above, the value of this inside ```teleport()``` is either the ```global object``` or, if in ```strict mode```, it's ```undefined```.
  
TIP: ```this``` in JavaScript is a complicated topic. We just did a quick overview, but for an in-depth look at how this is determined, check out [this All Makes Sense Now!](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md) from Kyle Simpson's book series [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS/blob/master/README.md).


## 5. "this" and Arrow Functions

With regular functions, the value of ```this``` is set based on *how the function is called*. With arrow functions, the value of ```this``` is based on the *function's surrounding context*. In other words, the value of ```this``` *inside* an arrow function is the same as the value of ```this``` *outside* the function.

```javascript

// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function() {
  setTimeout(function() {
    this.scoops++;
    console.log('scoop added!');
  }, 500);
};

const dessert = new IceCream();
dessert.addScoop();

//Prints:
//scoop added!

```

After running the code above, you'd think that dessert.scoops would be 1 after half a millisecond. But, unfortunately, it's not:

```javascript

//Prints:
//0

```
The function passed to ```setTimeout()``` is called without ```new```, without ```call()```, without ```apply()```, and without a context object. That means the value of this inside the function is the global object and **NOT** the ```dessert``` object. So what actually happened was that a new scoops variable was created (with a default value of undefined) and was then incremented (```undefined``` + 1 results in ```NaN```):

```javascript

console.log(scoops);
//Prints:
NaN

```

One way around this is to use closure:

```javascript

// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function() {
  const cone = this; // sets `this` to the `cone` variable
  setTimeout(function() {
    cone.scoops++; // references the `cone` variable
    console.log('scoop added!');
  }, 0.5);
};

const dessert = new IceCream();
dessert.addScoop();

console.log(dessert.scoops);

//Prints:
//1

```
The code above will work because instead of using this inside the function, it sets the cone variable to this and then looks up the cone variable when the function is called. This works because it's using the value of the this outside the function. So if we check the number of scoops in our dessert right now, we'll see the correct value of 1.


Well that's exactly what arrow functions do, so let's replace the function passed to setTimeout() with an arrow function and since arrow functions inherit their this value from the surrounding context, this code works!

```javascript

// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function() {
  setTimeout(() => { // an arrow function is passed to setTimeout
    this.scoops++;
    console.log('scoop added!');
  }, 0.5);
};

const dessert = new IceCream();
dessert.addScoop();

console.log(dessert.scoops);

//Prints:
//1
```

## 6. Default Function Parameters

* To create a **default parameter**, you add an equal sign ( = ) and then whatever you want the parameter to default to if an argument is not provided. In the code above, both parameters have default values of strings, but they can be any JavaScript type!

```javascript

function greet(name = 'Student', greeting = 'Welcome') {
  return `${greeting} ${name}!`;
}

greet(); // Welcome Student!
greet('James'); // Welcome James!
greet('Richard', 'Howdy'); // Howdy Richard!

```

## 7. [Defaults and [Destructuring](https://classroom.udacity.com/courses/ud356/lessons/42383e89-ac6a-491a-b7d0-198851287bbe/concepts/7c7be588-31e9-4c62-9dad-ecf23f943b19) QUIZ DA FARE

* Destructuring allow you to specify the elements you want to extract from an array or object *on the left side of an assignment*.

```Eg. Destructuring values from an array```

```javascript
const point = [10, 25, -34];

const [x, y, z] = point;

console.log(x, y, z);
//  10 25 -34
```
**TIP**: You can also ignore values when destructuring arrays. For example, ```const [x, , z] = point```; ignores the ```y``` coordinate and discards it.

```javascript

function createGrid([width = 5, height = 5] = []) {
  return `Generates a ${width} x ${height} grid`;
}

```
if ```createGrid()``` is called without any argument then it will use this default empty array (that new ```= []``` in the function's parameter).

```javascript

function buildHouse({floors = 1, color = 'red', walls ='brick'} = {}){
    return `Your house has ${floors} floor(s) with ${color} ${walls} walls.`;
}
console.log(buildHouse());


console.log(buildHouse()); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({})); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({floors: 3, color: 'yellow'})); // Your house has 3 floor(s) with yellow brick walls.

```


## 8. Class Preview

Here's a quick peek of what a JavaScript class look like:

```javascript

class Dessert {
  constructor(calories = 250) {
    this.calories = calories;
  }
}

class IceCream extends Dessert {
  constructor(flavor, calories, toppings = []) {
    super(calories);
    this.flavor = flavor;
    this.toppings = toppings;
  }
  addTopping(topping) {
    this.toppings.push(topping);
  }
}

```

## 8. JavaScript's Illusion of Classes

```javascript

function Plane(numEngines) {
  this.numEngines = numEngines;
  this.enginesActive = false;
}

// methods "inherited" by all instances
Plane.prototype.startEngines = function () {
  console.log('starting engines...');
  this.enginesActive = true;
};

const richardsPlane = new Plane(1);
richardsPlane.startEngines();

const jamesPlane = new Plane(4);
jamesPlane.startEngines();

```

```javascript

class Plane {
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }

  startEngines() {
    console.log('starting engines…');
    this.enginesActive = true;
  }
}

```

 [Convert a Function to a Class](https://youtu.be/JvpG_hX0-_0)

 * **static method**, the keyword static is placed in front of the method name. 

## 10. Super and Extends

```javascript

class Tree {
  constructor(size = '10', leaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null}) {
    this.size = size;
    this.leaves = leaves;
    this.leafColor = null;
  }

  changeSeason(season) {
    this.leafColor = this.leaves[season];
    if (season === 'spring') {
      this.size += 1;
    }
  }
}

class Maple extends Tree {
  constructor(syrupQty = 15, size, leaves) {
    super(size, leaves);
    this.syrupQty = syrupQty;
  }

  changeSeason(season) {
    super.changeSeason(season);
    if (season === 'spring') {
      this.syrupQty += 1;
    }
  }

  gatherSyrup() {
    this.syrupQty -= 3;
  }
}

const myMaple = new Maple(15, 5);
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');

```

Both Tree and Maple are JavaScript classes. The Maple class is a "subclass" of Tree and uses the extends keyword to set itself as a "subclass". To get from the "subclass" to the parent class, the super keyword is used. Did you notice that super was used in two different ways? In Maple's constructor method, super is used as a function. In Maple's changeSeason() method, super is used as an object.


```javascript

function Tree(size, leaves) {
  this.size = (typeof size === "undefined")? 10 : size;
  const defaultLeaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null};
  this.leaves = (typeof leaves === "undefined")?  defaultLeaves : leaves;
  this.leafColor;
}

Tree.prototype.changeSeason = function(season) {
  this.leafColor = this.leaves[season];
  if (season === 'spring') {
    this.size += 1;
  }
}

function Maple (syrupQty, size, leaves) {
  Tree.call(this, size, leaves);
  this.syrupQty = (typeof syrupQty === "undefined")? 15 : syrupQty;
}

Maple.prototype = Object.create(Tree.prototype);
Maple.prototype.constructor = Maple;

Maple.prototype.changeSeason = function(season) {
  Tree.prototype.changeSeason.call(this, season);
  if (season === 'spring') {
    this.syrupQty += 1;
  }
}

Maple.prototype.gatherSyrup = function() {
  this.syrupQty -= 3;
}

const myMaple = new Maple(15, 5);
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');

```
[Extending Classes from ES5 to ES6](https://youtu.be/b8fEBUFk-Oo)

## 10. Working with JavaScript Subclasses
In a subclass constructor function,```super``` must be called before ```this```

```javascript
class Apple {}
class GrannySmith extends Apple {
  constructor(tartnessLevel, energy) {
    this.tartnessLevel = tartnessLevel; // `this` before `super` will throw an error!
    super(energy); 
  }
}

```
right way:

```javascript
class Vehicle {
	constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
		this.color = color;
		this.wheels = wheels;
		this.horn = horn;
	}

	honkHorn() {
		console.log(this.horn);
	}
}

// your code goes here
class Bicycle extends Vehicle {
    constructor(color = 'blue', wheels = 2, horn = 'honk honk') {
        super(color, wheels, horn);
    }
}
```

const myVehicle = new Vehicle();
myVehicle.honkHorn(); // beep beep
const myBike = new Bicycle();
myBike.honkHorn(); // honk honk


# Lesson 11 Built-ins

## 1. [Symbol](https://youtu.be/kbVmzEQ4Hr0)

* A **Symbol** is a unique and immutable data type that is often used to identify object properties.

To create a symbol, you write ```Symbol()``` with an optional string as its **description**.

```javascript
const sym1 = Symbol('apple');
console.log(sym1);

Symbol(apple)

const sym2 = Symbol('banana');
const sym3 = Symbol('banana');
console.log(sym2 === sym3);

//false

```
the result is false because the description is only used to describe the symbol. 


```javascript

const bowl = {
  'apple': { color: 'red', weight: 136.078 },
  'banana': { color: 'yellow', weight: 183.15 },
  'orange': { color: 'orange', weight: 170.097 }
};

```

The bowl contains fruit which are objects that are properties of the bowl. But, we run into a problem when the second banana gets added.

```javascript

const bowl = {
  'apple': { color: 'red', weight: 136.078 },
  'banana': { color: 'yellow', weight: 183.151 },
  'orange': { color: 'orange', weight: 170.097 },
  'banana': { color: 'yellow', weight: 176.845 }
};
console.log(bowl);
Object {apple: Object, banana: Object, orange: Object}

```

Instead of adding another banana to the bowl, our previous banana is overwritten by the new banana being added to the bowl. To fix this problem, we can use symbols.

```javascript

const bowl = {
  [Symbol('apple')]: { color: 'red', weight: 136.078 },
  [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
  [Symbol('orange')]: { color: 'orange', weight: 170.097 },
  [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
};
console.log(bowl);
Object {Symbol(apple): Object, Symbol(banana): Object, Symbol(orange): Object, Symbol(banana): Object}

```

By changing the bowl’s properties to use symbols, each property is a unique Symbol and the first banana doesn’t get overwritten by the second banana.


## 2. Iteration & Iterable Protocols

* **The iterable protocol** is used for defining and customizing the iteration behavior of objects. What that really means is you now have the flexibility in ES6 to specify a way for iterating through values in an object.

```javascript
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const digit of digits) {
  console.log(digit);
}

// 0 
// 1 
// 2 
// 3 
// 4 
// 5 
// 6 
// 7 
// 8 
// 9 

```
Any object that is iterable can use the new for...of loop.

The **iterator method**, which is available via the constant ```[Symbol.iterator]```, is a zero arguments function that returns an iterator object. An iterator object is an object that conforms to the iterator protocol.

***The iterator protocol** is used to define a standard way that an object produces a sequence of values. What that really means is you now have a process for defining how an object will iterate. This is done through implementing the ```.next()``` method.

#### How it Works
An object becomes an iterator when it implements the .next() method. The .next() method is a zero arguments function that returns an object with two properties:

1. value : the data representing the next value in the sequence of values within the object

2. ```done``` : a boolean representing if the iterator is *done* going through the sequence of values

* If done is *true*, then the iterator has reached the end of its sequence of values.

* If done is *false*, then the iterator is able to produce another value in its sequence of values.

```javascript

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayIterator = digits[Symbol.iterator]();

console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());

Object {value: 0, done: false}
Object {value: 1, done: false}
Object {value: 2, done: false}

```


## 3. A Set in Mathematics

If you think back to mathematics, a set is a collection of distinct items. For example, ```{2, 4, 5, 6}``` is a set because each *number* is *unique* and appears only once. However, ```{1, 1, 2, 4}``` is not a set because it *contains duplicate entries* (the 1 is in there more than once!).

In JavaScript, we can already represent something similar to a mathematical set using an array.

```javascript

const nums = [2, 4, 5, 6];

```

However, arrays do not enforce items to be unique. If we try to add another 2 to ```nums```, JavaScript won't complain and will add it without any issue.

```javascript
nums.push(2);
console.log(nums)

//[2, 4, 5, 6, 2]

```

## 4. Sets

In ES6, there’s a new built-in object that behaves like a mathematical set and works similarly to an array. This new object is conveniently called a "Set". The biggest differences between a set and an array are:

Sets are not indexed-based - you do not refer to items in a set based on their position in the set
items in a Set can’t be accessed individually
Basically, a Set is an object that lets you store unique items. You can add items to a Set, remove items from a Set, and loop over a Set. These items can be either primitive values or objects.

##How to Create a Set
There’s a couple of different ways to create a Set. The first way, is pretty straightforward:
```
const games = new Set();
console.log(games);

```
```Set {}```

This creates an empty Set ```games``` with no items.

If you want to create a Set from a list of values, you use an array:

```javascript

const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
console.log(games);
Set {'Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart'}

```

## 5. Modifying Sets

* .add() methods returns the Set if an item is successfully added.

* .delete() method returns a Boolean (true or false) depending on successful deletion.

* .clear() method if you want to delete all the items from a Set

```javascript
const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);

games.add('Banjo-Tooie');
games.add('Age of Empires');
games.delete('Super Mario Bros.');

console.log(games);

```

```javascript

Set {'Banjo-Kazooie', 'Mario Kart', 'Banjo-Tooie', 'Age of Empires'}

```
```javascript

games.clear()
console.log(games);

```

```javascript

Set {}

```

TIP: If you attempt to ```.add()``` a duplicate item to a Set, you won’t receive an error, but the item will not be added to the Set. Also, if you try to ```.delete()``` an item that is not in a Set, you won’t receive an error, and the Set will remain unchanged.

## 6.  Working with Sets

* ```.size``` property to return the number of items in a Set:

* ```.has()``` method to check if an item exists in a Set. If the item is in the Set, then .has() will return ```true```. Otherwise will return ```false```.

* ```.values()``` method to return the values in a Set. The return value of the ```.values()``` method is a ```SetIterator``` object. 

* ```.keys() method``` will behave the exact same way as the .values() method by returning the values of a Set within a new Iterator Object. The .keys() method is an alias for the .values() method for similarity with maps.

```javascript

const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);

console.log(months.size); // 12

console.log(months.has('September')); // true

console.log(months.values());

SetIterator {'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'}
```

## 7. Sets & Iterators

#### Using the SetIterator

Because the .values() method returns a new iterator object (called SetIterator), you can store that iterator object in a variable and loop through each item in the Set using .next().
```javascript

const iterator = months.values();
iterator.next();
Object {value: 'January', done: false}

iterator.next();
Object {value: 'February', done: false}

```
[**Video**](https://youtu.be/Hd205fgC7qo)

#### Using a for...of Loop

An easier method to loop through the items in a Set is the for...of loop.
```javascript

const colors = new Set(['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'brown', 'black']);
for (const color of colors) {
  console.log(color);
}

// red 
// orange 
// yellow 
// green 
// blue 
// violet 
// brown 
// black

```

## 8 WeakSet

* **WeakSet** is just like a normal Set with a few key differences:

1. a WeakSet can only contain objects
2. a WeakSet is not iterable which means it can’t be looped over
3. a WeakSet does not have a ```.clear()``` method

You can create a WeakSet just like you would a normal Set, except that you use the ```WeakSet``` constructor.

```javascript

let student1 = { name: 'James', age: 26, gender: 'male' };
let student2 = { name: 'Julia', age: 27, gender: 'female' };
let student3 = { name: 'Richard', age: 31, gender: 'male' };

const roster = new WeakSet([student1, student2, student3]);
console.log(roster);
WeakSet {Object {name: 'Julia', age: 27, gender: 'female'}, Object {name: 'Richard', age: 31, gender: 'male'}, Object {name: 'James', age: 26, gender: 'male'}}

```
…but if you try to add something other than an object, you’ll get an error.

```javascript

roster.add('Amanda');
Uncaught TypeError: Invalid value used in weak set(…)

```

WeakSets do not have a ```.clear()``` method.

## Garbage Collection

 JavaScript, memory is allocated when new values are created and is "automatically" freed up when those values are no longer needed. This process of freeing up memory after it is no longer needed is what is known as garbage collection.

WeakSets take advantage of this by exclusively working with objects. If you set an object to null, then you’re essentially deleting the object. And when JavaScript’s garbage collector runs, the memory that object previously occupied will be freed up to be used later in your program.

```javascript

student3 = null;
console.log(roster);

// WeakSet {Object {name: 'Julia', age: 27, gender: 'female'}, Object {name: 'James', age: 26, gender: 'male'}}

```

[video](https://youtu.be/yAOA1otYfBM)

What makes this so useful is you don’t have to worry about deleting references to deleted objects in your WeakSets, JavaScript does it for you. When an object is deleted, the object will also be deleted from the WeakSet when garbage collection runs. This makes WeakSets useful in situations where you want an efficient, lightweight solution for creating groups of objects.

The point in time when garbage collection happens depends on a lot of different factors. Check out [MDN’s documentation](The point in time when garbage collection happens depends on a lot of different factors. Check out MDN’s documentation to learn more about the algorithms used to handle garbage collection in JavaScript.) to learn more about the algorithms used to handle garbage collection in JavaScript.



## 9. [Maps](https://youtu.be/H5DJPfcN2P4)

If Sets are similar to Arrays, then Maps are similar to Objects because Maps store key-value pairs similar to how objects contain named properties with values.

Essentially, a Map is an object that lets you store key-value pairs where both the keys and the values can be objects, primitive values, or a combination of the two.

## How to Create a Map
To create a Map, simply type:

```javascript
const employees = new Map();
console.log(employees);

Map {}
```
This creates an empty Map ```employee``` with no key-value pairs.

## Modifying Maps

Unlike Sets, you can’t create Maps from a list of values; instead, you add key-values by using the Map’s ```.set()``` method.

```javascript
const employees = new Map();

employees.set('james.parkes@udacity.com', { 
    firstName: 'James',
    lastName: 'Parkes',
    role: 'Content Developer' 
});
employees.set('julia@udacity.com', {
    firstName: 'Julia',
    lastName: 'Van Cleve',
    role: 'Content Developer'
});
employees.set('richard@udacity.com', {
    firstName: 'Richard',
    lastName: 'Kalehoff',
    role: 'Content Developer'
});

console.log(employees);

// <!-- Map {'james.parkes@udacity.com' => Object {...}, 'julia@udacity.com' => Object {...}, 'richard@udacity.com' => Object {...}} -->

```
* ```set()``` method takes two arguments. The first argument is the **key**, which is used to reference the second argument, the **value**.

* ```delete()``` method to remove key-value pairs. It also returns ```true``` if a key-value pair is successfully deleted from the Map object, and ```false``` if unsuccessful. The return value of ```.set()``` is the ```Map``` object itself if successful.


```javascript
employees.delete('julia@udacity.com');
employees.delete('richard@udacity.com');
console.log(employees);

// Map {'james.parkes@udacity.com' => Object {firstName: 'James', lastName: 'Parkes', role: 'Course Developer'}}

```
Again, similar to Sets, you can use the .clear() method to remove all key-value pairs from the Map.

```javascript

employees.clear()
console.log(employees);

// Map {}

```
**TIP**: If you ```.set()``` a key-value pair to a Map that already uses the same key, you won’t receive an error, but the key-value pair will overwrite what currently exists in the Map. Also, if you try to ```.delete()``` a key-value that is not in a Map, you won’t receive an error, and the Map will remain unchanged.

# 10. Working with Maps

After you’ve built your Map, you can use the .has() method to check if a key-value pair exists in your Map by passing it a key.

```javascript

const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

console.log(members.has('Xavier'));
console.log(members.has('Marcus'));

// false
// true

```

And you can also retrieve values from a Map, by passing a key to the .get() method.

```javascript

console.log(members.get('Evelyn'));
// 75.68

```

## 11. Looping Through Maps

you’ve got three different options to choose from:

1. Step through each key or value using the Map’s default iterator
2. Loop through each key-value pair using the new ```for...of``` loop
3. Loop through each key-value pair using the Map’s ```.forEach()``` method

## 1. Using the **MapIterator**

Using both the ```.keys()``` and ```.values()``` methods on a Map will return a new iterator object called ```MapIterator```. You can store that iterator object in a new variable and use ```.next()``` to loop through each key or value. Depending on which method you use, will determine if your iterator has access to the Map’s keys or the Map’s values.

```javascript

let iteratorObjForKeys = members.keys();
iteratorObjForKeys.next();
Object {value: 'Evelyn', done: false}

Use .next() to the get the next key value.

iteratorObjForKeys.next();
Object {value: 'Liam', done: false}

```

And so on.

```javascript

iteratorObjForKeys.next();
Object {value: 'Sophia', done: false}

```

On the flipside, use the .values() method to access the Map’s values, and then repeat the same process.

```javascript

let iteratorObjForValues = members.values();
iteratorObjForValues.next();
Object {value: 75.68, done: false}

```

## 2. Using a **for...of** Loop
Your second option for looping through a Map is with a for...of loop.

```javascript

for (const member of members) {
  console.log(member);
}
//  ['Evelyn', 75.68]
//  ['Liam', 20.16]
//  ['Sophia', 0]
//  ['Marcus', 10.25]

```

## 3. Using a **forEach** Loop
Your last option for looping through a Map is with the .forEach() method.

```javascript
members.forEach((value, key) => console.log(key, value));


//  'Evelyn' 75.68
//  'Liam' 20.16
//  'Sophia' 0
//  'Marcus' 10.25

```

```javascript
const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

for (const [key, value] of members) {
    console.log(key, value);
}

```

## 12. WeakMaps

**tip**: WeakMaps exhibit the same behavior as a WeakSets, except WeakMaps work with key-values pairs instead of individual items.

**What is a WeakMap?**
A WeakMap is just like a normal Map with a few key differences:

1. a WeakMap can only contain objects as keys,
2. a WeakMap is not iterable which means it can’t be looped and
3. a WeakMap does not have a ```.clear()``` method.

You can create a WeakMap just like you would a normal Map, except that you use the ```WeakMap``` constructor.

```javascript

const book1 = { title: 'Pride and Prejudice', author: 'Jane Austen' };
const book2 = { title: 'The Catcher in the Rye', author: 'J.D. Salinger' };
const book3 = { title: 'Gulliver’s Travels', author: 'Jonathan Swift' };

const library = new WeakMap();
library.set(book1, true);
library.set(book2, false);
library.set(book3, true);

console.log(library);

// WeakMap {Object {title: 'Pride and Prejudice', author: 'Jane Austen'} => true, Object {title: 'The Catcher in the Rye', author: 'J.D. Salinger'} => false, Object {title: 'Gulliver’s Travels', author: 'Jonathan Swift'} => true}

```

…but if you try to add something other than an object as a key, you’ll get an error!

```javascript

library.set('The Grapes of Wrath', false);

Uncaught TypeError: Invalid value used as weak map key(…)

```

This is expected behavior because WeakMap can only contain objects as keys. Again, similar to WeakSets, WeakMaps leverage garbage collection for easier use and maintainability.

##**Garbage Collection**

In JavaScript, memory is allocated when new values are created and is "automatically" freed up when those values are no longer needed. This process of freeing up memory after it is no longer needed is what is known as garbage collection.

WeakMaps take advantage of this by exclusively working with objects as keys. If you set an object to ```null```, then you’re essentially deleting the object. And when JavaScript’s garbage collector runs, the memory that object previously occupied will be freed up to be used later in your program.

```javascript

book1 = null;
console.log(library);

// WeakMap {Object {title: 'The Catcher in the Rye', author: 'J.D. Salinger'} => false, Object {title: 'Gulliver’s Travels', author: 'Jonathan Swift'} => true}

```

[**video**](https://youtu.be/sUE_JjiF_q4)

What makes this so useful is you don’t have to worry about deleting keys that are referencing deleted objects in your WeakMaps, JavaScript does it for you.When an object is deleted, the object key will also be deleted from the WeakMap when garbage collection runs. This makes WeakMaps useful in situations where you want an efficient, lightweight solution for creating groupings of objects with metadata.

The point in time when garbage collection happens is dependent on a lot of different factors. Check out [MDN’s documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management#Garbage_collection) to learn more about the algorithms used to handle garbage collection in JavaScript.

## 13 [Promises](https://youtu.be/8L1a-_c8mCg)

A JavaScript Promise is created with the new [Promise constructor function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) - ```new Promise()```. A promise will let you start some work that will be done **asynchronously** and let you get back to your regular work. When you create the promise, you must give it the code that will be run asynchronously. You provide this code as the argument of the constructor function:

```javascript

new Promise(function () {
    window.setTimeout(function createSundae(flavor = 'chocolate') {
        const sundae = {};
        // request ice cream
        // get cone
        // warm up ice cream scoop
        // scoop generous portion into cone!
    }, Math.random() * 2000);
});

```

his code creates a promise that will start in a few seconds after I make the request. Then there are a number of steps that need to be made in the ```createSundae``` function.

## Indicated a Successful Request or a Failed Request

once that's all done, how does JavaScript notify us that it's finished and ready for us to pick back up by passing two functions into our initial function. Typically we call these:

* ```resolve``` and 

* ```reject```.

The function gets passed to the function we provide the Promise constructor - typically the word "resolve" is used to indicate that this function should be called when the request completes successfully. Notice the ```resolve``` on the first line:

```javascript

new Promise(function (resolve, reject) {
    window.setTimeout(function createSundae(flavor = 'chocolate') {
        const sundae = {};
        // request ice cream
        // get cone
        // warm up ice cream scoop
        // scoop generous portion into cone!
        resolve(sundae);
    }, Math.random() * 2000);
});

```
Now when the sundae has been successfully created, it calls the ```resolve``` method and passes it the data we want to return - in this case the data that's being returned is the completed sundae. So the ```resolve``` method is used to indicate that the request is complete and that it completed *successfully*.

If there is a problem with the request and it couldn't be completed, then we could use the second function that's passed to the function. Typically, this function is stored in an identifier called "reject" to indicate that this function should be used if the request fails for some reason. Check out the reject on the first line:

```javascript

new Promise(function (resolve, reject) {
    window.setTimeout(function createSundae(flavor = 'chocolate') {
        const sundae = {};
        // request ice cream
        // get cone
        // warm up ice cream scoop
        // scoop generous portion into cone!
        if ( /* iceCreamConeIsEmpty(flavor) */ ) {
            reject(`Sorry, we're out of that flavor :-(`);
        }
        resolve(sundae);
    }, Math.random() * 2000);
});

```
So the ```reject``` method is used when the request *could not be completed*. Notice that even though the request fails, we can still return data - in this case we're just returning text that says we don't have the desired ice cream flavor.

A Promise constructor takes a function that will run and then, after some amount of time, will either complete successfully (using the ```resolve``` method) or unsuccessfully (using the ```reject``` method). When the outcome has been finalized (the request has either completed successfully or unsuccessfully), the promise is now *fulfilled* and will notify us so we can decide what to do with the response.

## Promises Return Immediately

The first thing to understand is that a Promise will immediately return an object.

```javascript

const myPromiseObj = new Promise(function (resolve, reject) {
    // sundae creation code
});

```

* ```.then()``` method on it that we can use to have it notify us if the request we made in the promise was either successful or failed. It takes two functions:
  * the function to run if the request completed successfully
  * the function to run if the request failed to complete


```javascript

mySundae.then(function(sundae) {
    console.log(`Time to eat my delicious ${sundae}`);
}, function(msg) {
    console.log(msg);
    self.goCry(); // not a real method
});

```

[**Promises course**](https://www.udacity.com/course/javascript-promises--ud898) **!!!important!!!**


## 17. [Proxies](https://youtu.be/lYXhxgt6suk)

To create a proxy object, we use the Proxy constructor - ```new Proxy();```. The proxy constructor takes two items:

* the object that it will be the proxy for
* an object containing the list of methods it will handle for the proxied object

The second object is called the **handler**.

## A Pass Through Proxy

The simplest way to create a proxy is to provide an object and then an empty handler object.

```javascript
var richard = {status: 'looking for work'};
var agent = new Proxy(richard, {});

agent.status; // returns 'looking for work'

```
The above it just passes the request directly to the source object. If we want the proxy object to actually intercept the request we need the handler object.

The key to making Proxies useful is the handler object that's passed as the second object to the Proxy constructor. The handler object is made up of a methods that will be used for property access. Let's look at the ```get```:

## Get Trap
The ```get``` trap is used to "intercept" calls to properties:

```javascript
const richard = {status: 'looking for work'};
const handler = {
    get(target, propName) {
        console.log(target); // the `richard` object, not `handler` and not `agent`
        console.log(propName); // the name of the property the proxy (`agent` in this case) is checking
    }
};
const agent = new Proxy(richard, handler);
agent.status; 

// logs out the richard object (not the agent object!) and the name of the property being accessed (`status`)

```

In the code above, the handler object has a get method (called a "trap" since it's being used in a Proxy). When the code agent.status; is run on the last line, because the get trap exists, it "intercepts" the call to get the status property and runs the get trap function. This will log out the target object of the proxy (the richard object) and then logs out the name of the property being requested (the status property). And that's *all it does*! It doesn't actually log out the property! This is important - *if a trap is used, you need to make sure you provide all the functionality for that specific trap*.


## Accessing the Target object from inside the proxy
This will access the property on the target object and will return it (return the property on the target object:) ```return target[propName];``` as the last line of the get trap.

```javascript

const richard = {status: 'looking for work'};
const handler = {
    get(target, propName) {
        console.log(target);
        console.log(propName);
        return target[propName];
    }
};
const agent = new Proxy(richard, handler);
agent.status; 

// (1)logs the richard object, (2)logs the property being accessed, (3)returns the text in richard.status

```
## Having the proxy return info, directly
Alternatively, we could use the proxy to provide direct feedback:

```javascript

const richard = {status: 'looking for work'};
const handler = {
    get(target, propName) {
        return `He's following many leads, so you should offer a contract as soon as possible!`;
    }
};
const agent = new Proxy(richard, handler);
agent.status; 

// returns the text `He's following many leads, so you should offer a contract as soon as possible!`

```

With this code, the Proxy doesn't even check the target object, it just directly responds to the calling code.

So the ```get``` trap will take over whenever any property on the proxy is accessed. If we want to intercept calls to change properties, then the ```set``` trap needs to be used!

* The ```set``` trap is used for intercepting code that will change a property. The ```set``` trap receives: 

```javascript

const richard = {status: 'looking for work'};
const handler = {
    set(target, propName, value) {
        if (propName === 'payRate') { // if the pay is being set, take 15% as commission
            value = value * 0.85;
        }
        target[propName] = value;
    }
};
const agent = new Proxy(richard, handler);
agent.payRate = 1000; // set the actor's pay to $1,000
agent.payRate; // $850 the actor's actual pay

```

## Other Traps
So we've looked at the ```get``` and ```set``` traps (which are probably the ones you'll use most often), but there are actually a total of 13 different traps that can be used in a handler!

1.[the get trap]() - lets the proxy handle calls to property access
2.[the set trap]() - lets the proxy handle setting the property to a new 
3.[the apply trap]() - lets the proxy handle being invoked (the object being proxied is a function)
4.[the has trap]() - lets the proxy handle the using in operator
5.[the deleteProperty trap]() - lets the proxy handle if a property is deleted
6.[the ownKeys trap]() - lets the proxy handle when all keys are requested
7.[the construct trap]() - lets the proxy handle when the proxy is used with the new keyword as a constructor
8.[the defineProperty trap]() - lets the proxy handle when defineProperty is used to create a new property on the object
9.[the getOwnPropertyDescriptor trap]() - lets the proxy handle getting the property's descriptors
10.[the preventExtenions trap]() - lets the proxy handle calls to Object.preventExtensions() on the proxy object
11.[the isExtensible trap]() - lets the proxy handle calls to Object.isExtensible on the proxy object
12.[the getPrototypeOf trap]() - lets the proxy handle calls to Object.getPrototypeOf on the proxy object
13.[the setPrototypeOf trap]() - lets the proxy handle calls to Object.setPrototypeOf on the proxy object

As you can see, there are a lot of traps that let the proxy manage how it handles calls back and forth to the proxied object.

## 18 Proxies vs. ES5 Getter/Setter

With ES5's getter and setter methods, you need to know before hand the properties that are going to be get/set:

```javascript

var obj = {
    _age: 5,
    _height: 4,
    get age() {
        console.log(`getting the "age" property`);
        console.log(this._age);
    },
    get height() {
        console.log(`getting the "height" property`);
        console.log(this._height);
    }
};

```

```javascript

obj.age; // logs 'getting the "age" property' & 5
obj.height; // logs 'getting the "height" property' & 4

```

```javascript

obj.weight = 120; // set a new property on the object
obj.weight; // logs just 120

```

With ES6 Proxies, we do not need to know the properties beforehand:

```javascript

const proxyObj = new Proxy({age: 5, height: 4}, {
    get(targetObj, property) {
        console.log(`getting the ${property} property`);
        console.log(targetObj[property]);
    }
});

proxyObj.age; // logs 'getting the age property' & 5
proxyObj.height; // logs 'getting the height property' & 4

```

All well and good, just like the ES5 code, but look what happens when we add a new property:

```javascript

proxyObj.weight = 120; // set a new property on the object
proxyObj.weight; // logs 'getting the weight property' & 120

```

A ```weight``` property was added to the proxy object, and when it was later retrieved, it displayed a log message!

So some functionality of proxy objects may seem similar to existing ES5 getter/setter methods. But with proxies, you do not need to initialize the object with getters/setters for each property when the object is initialized.

## Proxies Recap

A proxy object sits between a real object and the calling code. The calling code interacts with the proxy instead of the real object. To create a proxy:

* use the ```new Proxy()``` constructor
  * pass the object being proxied as the first item
  * the second object is a handler object

* the handler object is made up of 1 of 13 different "traps"
* a trap is a function that will intercept calls to properties let you run code
* if a trap is not defined, the default behavior is sent to the target object

Proxies are a powerful new way to create and manage the interactions between objects.


## 19 Generators

Whenever a function is invoked, the JavaScript engine starts at the top of the function and runs every line of code until it gets to the bottom. There's no way to stop the execution of the function in the middle and pick up again at some later point. This **"run-to-completion"** is the way it's always been:


```javascript

function getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log(name);
    }

    console.log('the function has ended');
}

getEmployee();


// the function has started
// Amanda
// Diego
// Farrin
// James
// Kagure
// Kavita
// Orit
// Richard
// the function has ended
```

## Pausable Functions

If we do want to be able to pause a function mid-execution, then we'll need a new type of function available to us in **ES6** - **generator functions**.

```javascript

// syntax function* names() { /* ... * /}

function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log(name);
    }

    console.log('the function has ended');

```
the asterisk (i.e. ```*```) right after the function keyword indicates that this function is actually a generator.

The asterisk of the generator can actually be placed anywhere between the function keyword and the function's name.

The community has coalesced into having the asterisk appear right next to the function keyword (i.e. ```function* name() { … }```). But there others that recommend having the asterisk touch the function's name instead. So it's important to realize that the asterisk indicates that it is a generator but that the placement of the asterisk is not important.


```javascript

getEmployee();

// this is the response I get in Chrome:
getEmployee {[[GeneratorStatus]]: "suspended", [[GeneratorReceiver]]: Window}

```

## 20 Generators & Iterators

When a generator is invoked, it doesn't actually run any of the code inside the function. Instead, it creates and returns an iterator. This iterator can then be used to execute the actual generator's inner code.


```javascript

const generatorIterator = getEmployee();
generatorIterator.next();

// the function has started
// Amanda
// Diego
// Farrin
// James
// Kagure
// Kavita
// Orit
// Richard
// the function has ended
```

## The Yield Keyword

* ```yield Keyword``` is new and was introduced with ES6. It can only be used inside generator functions. ```yield``` is what causes the generator to pause. 


```javascript

function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log(name);
        yield;
    }

    console.log('the function has ended');
}

const generatorIterator = getEmployee();
generatorIterator.next();

//the function has started
//Amanda

// It's paused! 

generatorIterator.next();

// Diego

// etc.

```

## Yielding Data to the "Outside" World

Instead of logging the names to the console and then pausing, let's have the code "return" the name and then pause.

```javascript

function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        yield name;
    }

    console.log('the function has ended');
}

```

Notice that now instead of ```console.log(name)```; that it's been switched to yield name;. With this change, when the generator is run, it will ```"yield"``` the name back out to the function and then pause its execution. Let's see this in action:

```javascript

const generatorIterator = getEmployee();
let result = generatorIterator.next();
result.value // is "Amanda"

generatorIterator.next().value // is "Diego"
generatorIterator.next().value // is "Farrin"

```

the iterator's  ```.next()``` will be called one more time than there are yield expressions in the generator function.

The first call to ```.next()``` will start the function and run to the first yield. The second call to ```.next()``` will pick up where things left off and run to the second yield. The third and final call to ```.next()``` will pick up where things left off again and run to the end of the function.


## 21 Sending Data into/out of a Generator

So we can get data out of a generator by using the yield keyword. We can also send data back into the generator, too. We do this using the .next() method:

```javascript

function* displayResponse() {
    const response = yield;
    console.log(`Your response is "${response}"!`);
}

const iterator = displayResponse();

iterator.next(); // starts running the generator function
iterator.next('Hello Udacity Student'); // send data into the generator
// the line above logs to the console: Your response is "Hello Udacity Student"!

```

Calling .next() with data (i.e. .next('Richard')) will send data into the generator function where it last left off. It will "replace" the yield keyword with the data that you provided.

So the yield keyword is used to pause a generator and used to send data outside of the generator, and then the .next() method is used to pass data into the generator. Here's an example that makes use of both of these to cycle through a list of names one at a time:

```javascript

function* getEmployee() {
    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
    const facts = [];

    for (const name of names) {
        // yield *out* each name AND store the returned data into the facts array
        facts.push(yield name); 
    }

    return facts;
}

const generatorIterator = getEmployee();

// get the first name out of the generator
let name = generatorIterator.next().value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is cool!`).value; 

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is awesome!`).value; 

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is stupendous!`).value; 

// you get the idea
name = generatorIterator.next(`${name} is rad!`).value; 
name = generatorIterator.next(`${name} is impressive!`).value;
name = generatorIterator.next(`${name} is stunning!`).value;
name = generatorIterator.next(`${name} is awe-inspiring!`).value;

// pass the last data in, generator ends and returns the array
const positions = generatorIterator.next(`${name} is magnificent!`).value; 

// displays each name with description on its own line
positions.join('\n');

```
Generators are a powerful new kind of function that is able to pause its execution while also maintaining its own state. Generators are great for iterating over a list of items one at a time so you can handle each item on its own before moving on to the next one. You can also use generators to handle nested callbacks. 

Generators will also be used heavily in upcoming additions to the JavaScript language. One upcoming feature that will make use of them is [async functions](https://github.com/tc39/ecmascript-asyncawait).


# lesson 12 Professional [Developer-fu](https://youtu.be/ue0FpyoZhts)

## Some code doesn't work in old browsers

**how do we know about these changes?**

We learn (or actually build) the language specifications!

Just like the [World Wide Web Consortium (W3C)](https://www.w3.org/) is the standards body for things like HTML, CSS, and SVG, [Ecma International](https://www.ecma-international.org/) is an industry association that develops and oversees standards like JavaScript and JSON. You can find the *specifications for ES6*cxs[here](http://www.ecma-international.org/ecma-262/6.0/index.html).

## Further info
Ecma International is an important industry community and definitely worth checking out in more detail:

* [wikipedia-Ecma_International](https://en.wikipedia.org/wiki/Ecma_International)
* [ecma-international.org](http://www.ecma-international.org/memento/index.html)


## How Can You Know What Features Browsers Support?

With new language specifications coming out every year and with browsers updating every other month, it can be quite challenging to know what browser supports which language features. Each browser maker (except for Safari) has a website that tracks its development status. Checkout the platform feature updates for each browser:

* Google Chrome - [here](https://www.chromestatus.com/features#ES6)
* Microsoft Edge - [here](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/?q=ES6)
* Mozilla Firefox - [here](https://platform-status.mozilla.org/)

NOTE: Safari doesn't have it's own platform status website. Under the hood, though, Safari is powered by the open source browser engine, Webkit. The status for Webkit features can be found [here](https://webkit.org/status/).

This can be a lot of information to track down. If you prefer a birdseye view of all the feature support for all JavaScript code, check out the ECMAScript Compatibility Table built by [@kangax](https://twitter.com/kangax):

* [http://kangax.github.io/compat-table/es6/](http://kangax.github.io/compat-table/es6/)

![img](https://preview.ibb.co/h4Txi8/es6_compatibility_tables.png)

# 22 Polyfills

* polyfill, or polyfiller is javascript file that patches a whole by replicating some native feature that's missing. It is a piece of code (or plugin) that provides the technology that you, the developer, expect the browser to provide natively.

Coined by [Remy Sharp](https://twitter.com/rem) - [https://remysharp.com/2010/10/08/what-is-a-polyfill](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills)

## Further research:
[https://en.wikipedia.org/wiki/Polyfill](https://en.wikipedia.org/wiki/Polyfill)


**An example polyfill**

The code below is a polyfill for the new ES6 String method, ```startsWith()```:

```javascript

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0;
    return this.substr(position, searchString.length) === searchString;
  };
}

```

As you can see, a polyfill is just regular JavaScript.

This code is a simple polyfill (check it out on MDN), but there's also a significantly more robust one, [here](https://github.com/mathiasbynens/String.prototype.startsWith/blob/master/startswith.js)

If the browser supports ES6 and has the native ```startsWith``` method, then there's no reason to polyfill it. If this check didn't exist, then this polyfill would overwrite the native implementation.

[**Polyfill Walkthrough**](https://youtu.be/vDmB-gT-U88)

## Polyfills aren't only for patching missing JavaScript features
JavaScript is the language used to create a polyfill, but a polyfill doesn't just patch up missing JavaScript features! There are polyfills for all sorts of browser features:

* SVG
* Canvas
* Web Storage (local storage / session storage)
* Video
* HTML5 elements
* Accessibility
* Web Sockets
* and many more! 

For a more-complete list of polyfills, check out [this link](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills)

## 23 [Transpiling](https://youtu.be/Ku2NATTmgks)

The most popular JavaScript transpiler is called [Babel](https://babeljs.io/).

Babel's original name was slightly more descriptive - 6to5. This was because, originally, Babel converted ES6 code to ES5 code. Now, Babel does a lot more. It'll convert ES6 to ES5, JSX to JavaScript, and Flow to JavaScript.

[Babel's REPL](http://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015)


The way Babel transforms code from one language to another is through plugins. There are plugins that transform ES6 arrow functions to regular ES5 functions (the [ES2015 arrow function plugin](http://babeljs.io/docs/plugins/transform-es2015-arrow-functions/)). There are plugins that transform ES6 template literals to regular string concatenation (the [ES2015 template literals transform](http://babeljs.io/docs/plugins/transform-es2015-template-literals/)). For a full list, check out all of [Babel's plugins](http://babeljs.io/docs/plugins/).

Now, you're busy and you don't want to have to sift through a big long list of plugins to see which ones you need to convert your code from ES6 to ES5. So instead of having to use a bunch of individual plugins, Babel has **presets** which are groups of plugins bundled together. So instead of worrying about which plugins you need to install, we'll just use the [ES2015 preset](http://babeljs.io/docs/plugins/preset-es2015/) that is a collection of all the plugins we'll need to convert all of our ES6 code to ES5.

```.babelrc``` file. This is where you'd put all of the plugins and/or presets that the project will use.


![img](https://preview.ibb.co/buafmT/es6_preset_in_project.png)

Code editor with ```..babelrc```. file that has ES2015 preset listed.


**WARNING**: Babel uses both [Node](https://nodejs.org/) and [NPM](https://www.npmjs.com/) to distribute its plugins. So before you can install anything, make sure you have both of these tools installed:

* install [Node](https://nodejs.org/) (which will automatically install NPM)

[**Transpiling Walkthrough**](https://youtu.be/QGE5Emfg1hI)

## [Transpiling Recap](https://youtu.be/ihtUq_Ve0fk)


It's important to stay on top of all the changes JavaScript is going through. The best way to do that is to start making use of the new features that are added. The problem is that not all browsers support these new features. So to have your cake and eat it too, you can write in ES6 and then use a transpiler to convert it to ES5 code. This lets you transform your project's code base to the newest version of the language while still letting it run everywhere. Then, once all of the browsers your app has to run on fully support ES6 code, you can stop transpiling your code and just serve the straight ES6 code, directly!

END Javascript Course


## Arcade Game

* [Object-Oriented JavaScript](https://classroom.udacity.com/courses/ud711)

* [OOJS Notes.](https://docs.google.com/document/d/1F9DY2TtWbI29KSEIot1WXRqqao7OCd7OOC2W3oubSmc/pub?embedded=true)

* [HTML5 Canvas](https://www.udacity.com/course/ud292) !Important!

* [art assets and provided game engine](https://github.com/udacity/frontend-nanodegree-arcade-game)

* [**video**](https://youtu.be/kaifTslArtY)







































































































