# FRONT-END APPLICATIONS

## INDEX

* Changing Expectations : structured code is vitally important

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

