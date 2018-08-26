# javascript Testing

* [Udacity course](https://classroom.udacity.com/courses/ud549)

* [What is a test?](https://youtu.be/KraMqFbLUGU)

* [A test must first always fail](https://youtu.be/F8IPoI2E75g) : test is validating an expectation about something.

* [Identifying Expectations](https://youtu.be/0Uw7DFWMvXU)


```javascript

function add(x, y) {
    return x + y

    // expect 0.1 + 0.2 = 0.3 
    // result (0.300000...) 4
}

```

* StackOverflow: [Is JavaScript's Floating Point Math Broken?](http://stackoverflow.com/questions/588004/is-floating-point-math-broken)
    * [Refactoring add()](https://youtu.be/tQ1BIQga90E)

    * cycle red - green - refactoring

```javascript

expect(add(2, 3)).toBe(5);
expect(add(2, 'test')).toThrowe;
expect(add(0.1, 0.2)).toBe(0.3);

```

## [Introduction to Jasmine](https://youtu.be/QblHjG20ft0)

* [Clone the repository](https://github.com/udacity/ud549)

* ```git clone https://github.com/udacity/ud54```

* [Exploring the SpecRunner](https://youtu.be/llzmb0fqQQI)

* describe calls are colored black and it calls are colored green

## [Introducing Suites and Specs](https://youtu.be/I1FHp9Lekho)

* **it**, is used to identify a specification or a spec, for short.

* A **spec** is just a container for a test. A way to identify the exact feature we're testing. A spec can contain multiple test.
    * if all the expectations within the spec return true (each test must return true as well), then that spec passes.

    * if any of these expectations were to return fails, the spec would fail.

    * You could think of **it** as defining the boundary around this test:

    ```javascript

    it("should be able to play a Song", function() {
        player.play(song);
        expect(player.currentltPlayingSong).toEqual(song);

        /*demostrates use of custom matcher*/
        expect(player).toBePlaying(song);
    });
    ```

* **describe** is used to identify a *suite* which is a group of related specs.
    * in this case, the suite is called "Player", which tells us that everything contained within the proper block is related to the player;

 ```javascript

describe("Player", function() {
  var player;
  var song;

  beforeEach(function() {
    player = new Player();
    song = new Song();
  });

  ```

  # [Writing a Test](https://youtu.be/7R4mauxWXMk)

  1. Each test starts with a call to **expect**, you can think of this as the launching point of any test. It's what starts the process.

  2. The expect function accepts a single value called **the actual** that we want to test. In our example the actual is ```add(0.1,0.2)```.

  3. We then need to tell the testing framework what kind of comparison we want to use against the actual.

  4. The comparison method is called **the matcher** and is a method chained after the call to expect.
    * jasmine includes a lot of matcher function and you can even add your own.

    * In our example our matcher is toBe which is the equivalent of a strict equal comparison.

5. Finally, we pass the **expected value** to our matcher, in our case the value ```0.3```.

 ```javascript

    expect(add(0.1, 0.2)).toBe(0.3);

    // or

    add(0.1, 0.2) === 0.3;

    // syntax
    expect(actual).matcher(expected value);

 ```

 * you can also negate a test by chaining the world no, before the matcher. 

  ```javascript
    // this test would ebaluate to true
    expect(add(0.1, 0.2)).not.toBe(0.1);

 ```

## [Getting Started with Red-Green-Refactor](https://youtu.be/cMXhrLBLpxs)

* !!!**write your test first**!!!. This is called the **Red-Green-Refactor cycle**, it's called this because you write the test first and they all fail since there's no code to make them pass. You then write that code required to make your test pass.
 
* **Refactor** your code as you continue to add a new feature.

### [Writing AddressBookSpec.js](https://youtu.be/gies2zF5tx8)

### [Iterating on our Implementation](https://youtu.be/S4DXlkW-Kjo)

### [Another Spec](https://youtu.be/zvEBi17rnjQ)

### [Removing Redundant Code](https://youtu.be/FMmktxMEV9g)

* **beforeEach Function** that should be run before each and every one of our test.


### [Testing Asynchronous Code](https://youtu.be/C5NGKzxe5vs)

* ```self.initialComplete = true;```
## [Writing an Asynchronous Test](https://youtu.be/_zrBdWnX7HI)


## [Correcting our Asynchronous Test](https://youtu.be/I51Ke4jbcT4)

**[OPTIONAL]** If you are curious to see what happens in each combination of passing in vs. calling ```done```, one of our students tried all of them to see what would happen. The results in this [thread](https://discussions.udacity.com/t/async-tests-why-the-second-done-call/40751/6?u=durant) are illuminating and go beyond the [demos for Jasmine 2.1.2](http://jasmine.github.io/2.1/introduction.html). Take special note of the case where if you pass in the done function as an argument, you must also call it (otherwise things break!). And hopefully, the Jasmine team will accept a pull request to update this information for all students (see [thread](https://discussions.udacity.com/t/async-tests-why-the-second-done-call/40751/4) if curious).

Also note, if you are testing async, you do not need to pass in and call ```done```.

* [Using Jasmine 2.0's New done() Function to Test Asynchronous Processes](https://www.htmlgoodies.com/beyond/javascript/stips/using-jasmine-2.0s-new-done-function-to-test-asynchronous-processes.html)

* [Test asynchronous functionality in Jasmine 2.0.0 with done()](https://stackoverflow.com/questions/28408843/test-asynchronous-functionality-in-jasmine-2-0-0-with-done)

* [introduction jasmine official](https://jasmine.github.io/2.3/introduction.html#section-51)


# Lesson 19 Optimizations

## 19.1 [Development and Production Modes](https://youtu.be/LhHq3ll6ijw)

* **Development** task contain things you really need no matter what. eg. live editing

* **Production**  

## 19.2 [Development and Production Modes Part 2](https://youtu.be/biZ3bFivl_w)

```
-dist/
    -css/
    -js/
    -index.html
```

## 19.3 [CSS Concatenation](https://youtu.be/4s66CHXpekI)

## 19.4 [JS Concatenation](https://youtu.be/3DCLo1f-g6c)

1. It reduces the number of HTTP requests needed to load your page in production.

2. It's the most basic variant of dependency management.

## 19.5 [JS Concatenation Hands On](https://youtu.be/BJpNrS24rM8)

* **npm install gulp-concat**

* let concat = require('gulp-concat');

* .pipe(concat('all.js'))

* gulp script (on bash)

* ```<script src='js/all.js'></script>```

## 19.6 [Minification](https://youtu.be/jUkMltQVnfg)

* uglifyJS

* .pipe(uglify())

## 19.7 [Setting up a production task](https://youtu.be/DDVoX9tzyP0)

* [The Difference Between Minification and GZipping](https://css-tricks.com/the-difference-between-minification-and-gzipping/)

* GZippin is better

## 19.8 [Writing Future Proof JavaScript](https://youtu.be/sbUZPuEvQeM)

* Transpiler [Babel JS](https://babeljs.io/learn-es2015/)

* var babel = require('gulp-babel');

* standardization across browser takes a long time.

## 19.9 Source Maps

[Source maps](https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit) are files that associate line numbers from the processed file to the original. This way the browser can lookup the current line number in the sourcemap and open the right source file at the correct line when debugging. In Chrome, for instance, the DevTools support source maps both for CSS and JavaScript.


**Setup**
Source maps in gulp are easy to setup. It’s a use case where pipes really shine.

1. Install the ```gulp-sourcemaps``` [plugin](https://www.npmjs.com/package/gulp-sourcemaps).

2. Require the ```gulp-sourcemaps``` plugin and in your scripts-dist or scripts (or styles) task, add a pipe to ```sourcemaps.init()``` after you get the source but before you send the source files through any pipes that transform them materially. After all plugins and pipes have been applied but before you save to the destination, pipe through ```sourcemaps.write()``` with an optional location parameter if you don't want the source maps to be inlined.

```javascript
var sourcemaps = require('gulp-sourcemaps');

 gulp.task('scripts-dist', function() {
   gulp.src('js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js'));
});

```
All of the pipes between init and write must have support. Check the list [here](https://github.com/floridoo/gulp-sourcemaps/wiki/Plugins-with-gulp-sourcemaps-support) to verify. In the developer console, the output of app should automatically link errors in the generated code to their line numbers in the original source.

Source map Support for other languages
In addition to things like concatenation and minification, source maps also support some languages/extensions that transpile to JavaScript like Typescript, CoffeeScript and ES6 / JSX.

You can read more some of the technical aspects of Source Maps on [HTML5Rocks](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/).

## 19.10 [Image Optimization](https://youtu.be/RRPLHQSnaks)

* [Browser Rendering Optimization](https://www.udacity.com/course/browser-rendering-optimization--ud860)

* [Web Performance Optimization](https://www.udacity.com/course/website-performance-optimization--ud884)

* [Responsive Web Design](https://www.udacity.com/course/responsive-web-design-fundamentals--ud893)

* [Responsive Images](https://www.udacity.com/course/responsive-images--ud882)


## 19.11 Image Compression

Lossless compression reduces a file in such a way that the original can be recreated from the compressed version. You can think of it as reducing the file size but not throwing away any information.

**Imagemin**

[gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) can losslessly compress JPEGs, GIFS, PNGs, and SVGs out of the box. Lossless means that even though the file size will end up being smaller, special care is taken to not cause any visual changes whatsoever, meaning that original visual information stays exactly the same.

After you’ve grabbed the plugin you can simply add a pipe between the new crunch-images task and call ```imagemin()``` in there. There are a few extra options such as generating progressive images, but even without any configuration this will take all of your images and do any safe optimizations.

**Lossy Compression**

Lossy compression, on the other hand, can only recreate an approximation of the original. Lossy compression can give you really small file sizes at the expense of image quality. But there are a few lossy optimizations that are truly smart, and PNG quantization is one of them. PNG quantization takes images with or without alpha transparency and converts them to 256 or less colored 8-bit png. Now if you do this manually and just convert a 16-bit image to an 8-bit image, you won’t like the results. It’ll end up...well..like a crappy gif, with unnatural, limited colors.


**PNG Quantization**

PNG quantization benefits from the fact that there are colors that our vision and brain perceives as very similar, even though they’re technically completely different. The quantization algorithm aims to understand which colors actually matter and remaps them to new, optimized colors.

A cool thing about pngquant, the plugin we’re going to use, is that it automatically exits and will not save if a certain quality threshold isn’t passed.

**Let's Try It**

1. Download and require the [imagemin-pngquant](https://www.npmjs.com/package/imagemin-pngquant) plugin in addition to gulp-imagemin.

2. Create a config object for imagemin. These are the directives that imagemin will use when you pipe images to it. The following snippet instructs imagemin to use progressive rendering for JPEG images and PNG quant for well, PNGs.

```javascript

gulp.task('default', function() {
    return gulp.src('src/images/*')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/images'));
});

```

Progressive rendering loads an image in layers where each layer makes the image more detailed. It can make a page feel faster than typical rendering line by line. If you like, you can now configure pngquant as well by adding quality or speed options. Read more about these on the plugin homepage.

Now you’ve got automatic image crunching in place and working for you but pro-tip, for anything important, take the time to see what will work, even if that means putting in a bit of elbow grease and checking things manually.

**Even better compression options**

Smaller images can tolerate more aggressive lossy compression. You might want to try other things like converting images to SVG where applicable. SVG stands for Scalable Vector Graphics and uses an XML-based format to describe an image and can in most cases be scaled infinitely without any increase in file size or loss of image quality. If you’d like to further explore techniques to work with your images, head to the notes for a few advanced topics. This includes stuff such as automatically resizing your images to become responsive and fit retina and non-retina screens, or inlining your images into your CSS or into a sprite to save a couple more HTTP requests.


# Lesson 20: Web Tooling and Automation Conclusion

## [Scaffolding](https://youtu.be/wvV7Obe2u5I)

* [Web Starter Kit](https://developers.google.com/web/tools/starter-kit/)

* [Yeoman](http://yeoman.io/)




