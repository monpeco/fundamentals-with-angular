###Course Outline

This course include the following five modules.

####Module 1 | Modules/Basic DI

* Prepare your HTML for Angular
* Declare your Angular App
* Bootstrap your Angular App with HTML or JavaScript
* Define a Basic Controller
* Bind a Controller to your HTML
* Inject a Dependency into your Controller

####Module 2 | Controllers/Basic Scope

* Properly Declare and Initialize your Controller
* Set Scope Variables
* Use Scope Variables in your View
* Use Scope Functions
* Bind to Scope Functions in your View
* Set Scope Watch Functions
* Use ng-model for Two-Way Binding

####Module 3 | Expressions/Built-In Directives

* Use ng-hide, ng-show, and ng-if
* Use ng-repeat to create repeated components
* Use filters to sort data
* Bind to click events with ng-click

####Module 4 | Promises/http/resource

* Use Promises to Execute Asynchronous calls
* Declare a Promise
* Chain a series of Promises
* Retrieve data from a REST service

####Module 5 | Forms/Validation

* Create an Angular Form
* Bind a Model to the Form
* Validate Form Fields
* Use an Angular Resource to submit form data to a third-party REST service
* 


--
--

###Video: What is Angular?

[Video: What is Angular?](https://youtu.be/xlm4e_x1dZc)

--
--

###History of Angular

Angular is an open-source web framework for JavaScript applications. It's proven very popular, and was created in 2009 by two developers, Misko Hevery and Adam Abrons. The initial incarnation of Angular was GetAngular, which Hevery and Abrons designed to provide enterprise developers easy-to-build applications. Hevery was part of a Google team working on Google Feedback, and he grew increasingly frustrated with the immense amount of code, especially as testing and code modifications began. Hevery used GetAngular to rewrite Google Feedback, reducing the lines of code from 17,000 to 1,500. Clearly, that got Google's attention and development on GetAngular began in earnest. By the time, Abrons had stopped working on the original GetAngular project, Hevery and his manager, Brad Green, converted it into Angular, and Google built a team to create and support it. In 2012, Google released Angular version 1.0. To this day, Google continues to provide strong support and a cohesive community surrounding Angular.

Angular is so popular because it:

* Provides improved application design architecture
* Promotes code reusability
* Offers plug and play components
* Consists of easy-to-remove components
* Employs two-way data binding
* Allows better teamwork

Because of Angular's ease of use, developers of all experience levels can quickly understand its functionality and how to easily find specific code components. Angular contains the following core types of objects and components:

* Modules
* Controllers
* Services
* Directives.

These core components can be injected into each other using the ___Dependency Injection___ (___DI___) mechanism built into Angular. DI is a 
software design pattern that assigns dependencies to components instead of hard coding them within the component itself. You can divide your 
application into multiple types of components that Angular can inject into each other. You can create the components to be used in multiple 
applications without changing a single line of code, saving time and effort. Modularizing your application makes it easier to reuse, configure, 
and create easily testable components in your application.

Angular uses a feature called ___directives___, allowing you to write HTML code, which then builds the HTML of your application instead of using 
templates to generate the user interface. The ___ng-model___ directive binds the value of HTML controls (input, select, and text area) to application 
data. Utilizing ___two-way data binding---, the values in your view are tightly bound to the data source. When a user interacts and updates a value, 
your model is updated dynamically as well.

When a web page is loaded, the browser creates a Document Object Model (DOM) of the page. Using the DOM, JavaScript can access and change all the 
elements of an HTML document. This allows Angular to dynamically edit the HTML and provide updates to the HTML without requiring a page load.

Since Angular is DOM-based, each component can be separated into separate files. Angular will then recompose these components into the DOM. 
You will find that there are less merge conflicts and, therefore, overall project progress becomes much easier to track.

Angular offers speed and flexibility, due to its component structure. Since it is modular, you can easily write and reuse the code, which is 
also testable. This means that Angular is an effective tool for building enterprise-wide applications across platforms.

In September 2014, Angular version 2.0 was announced at ng-Europe. This revision includes a complete rewrite of most core components of 
Angular in order to take advantage of the latest browser specifications. It is also written in Microsoft's TypeScript language, allowing 
for advanced language features and graceful degradation to older versions of ECMAScript. Angular version 2.0 was released to the public 
in September 2016.

This course will focus on Angular 1.5x due to the current market saturation of that version. Future versions of this course may feature 
Angular 2.x as adoption increases.

--
--

###Why Angular?

####Why Angular?

When it comes to application development, you have many available choices. You may find yourself asking, "Do I use MVC (model-view-controller) 
or MVVM (model-view-viewmodel)? Server-side or client-side rendering?"

Even in JavaScript, there are numerous methods of developing applications available, from vanilla JavaScript (JavaScript with no framework) 
and jQuery to Knockout and React. So the question is:

####Why use Angular?

Let's consider a common use case. You have an application with a database. You want to be able to send updates to the database, and search 
the database for content. If you use vanilla JavaScript or jQuery, you will have to bind events to send the data, bind the outputs to the DOM, 
and update the DOM every time the data changes.

Angular is essentially a whole new paradigm of JavaScript programming. In the past, DOM updates were performed manually, and data contracts 
were managed manually. Angular does all of that heavy lifting for you, checking and updating the DOM with each `$digest` cycle.The `$digest` 
cycle is the function to update the DOM that Angular calls whenever the data is updated. This function enables you to construct your application 
without considering the DOM. For more information, refer to the `$digest()` section within the documentation for `$rootScope.Scope` located at, 
https://docs.angularjs.org/api/ngMock/type/$rootScope.Scope

Think of Angular as HTML on steroids. With Angular, you can create your HTML with the data components built in. Once you hook the data components 
up to controllers and services, the DOM adjusts according to the data (without the need for cumbersome manual updates) as the user interacts 
with your application.

In addition, Angular code is constructed with modules that can be easily injected into each other, so that you can build independently 
functioning, reusable components.

It takes a bit to get used to the Angular way of thinking. If you are a traditional JavaScript programmer, you are used to the workflow 
of "Get data; change the DOM." Instead, consider what you want your views to look like, and build them that way, before hooking up the 
data. It's a bit different, but in time, many developers have found they prefer this way of working. The Angular workflow separates the 
data and the views, even though, in essence, Angular completely entwines them.

--
--

###What is Angular?

As a developer, the first question you usually get asked by others (especially other programmers) if you mention Angular is "What is Angular anyway?"

What Angular does for JavaScript development is so dramatic, it has received iconic status among JavaScript developers that is shared 
only by a few other frameworks - namely, jQuery and React.

Angular is a JavaScript framework - a higher-level abstraction of JavaScript functions designed to make writing JavaScript simpler and easier. 
It's also its own development pattern, and can change the way you shape and build your applications. While Angular has many abstractions to 
lower level JavaScript methods, it does not have the sheer number of functions that jQuery does, so you will frequently see them side by side, 
jQuery within Angular. Instead of being a multipurpose collection of lower-level JavaScript functions, Angular provides a new way of organizing 
and running your JavaScript by allowing your HTML to be dynamic and react to data.

Comparing the workflow environments of vanilla JavaScript (JavaScript with no framework) or a jQuery environment to that of Angular could be 
described as the difference between carrying water with a bucket or building an irrigation system. Using vanilla JavaScript or jQuery, data 
and states are carried through from databases or user inputs to be represented by the view. The view is then be modified directly with specific, 
action-based thinking.

Angular, by contrast, functions more like building channels by which your data can flow to the view, and the view reacts to the data that it 
is given instead of needing to be influenced by direct command-based lines of code. So thinking about the root components of Angular can be 
more easily related to plumbing.

___Services___ are like the initial valves that lead to the water source. They exist primarily to feed data into the pipeline.

___Controllers___ are like the pipes that control the water flow to and from the Services.

___View Templates___ are like the faucets, they exist to consume the data and react accordingly.

--
--

###Video: Modules and Dependency Injection

[Video: Modules and Dependency Injection](https://youtu.be/rS-xfQF9RVo)











