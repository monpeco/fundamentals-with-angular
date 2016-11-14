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

files: example1

--
--

###Introduction to Angular Modules

In the most simple terms, an ___Angular module____ is nothing more than a container for various parts of your app. Since an 
Angular app does not have a single point of entry like some environments (such as a Main method in a C application), modules 
provide the means for defining how the application can be started. 

    Note: Angular uses a Declarative Programming approach to define user interfaces and connect components.

In Angular, the word module refers to either an entire Angular application or independent components within that application, 
such as controllers, services, filters, and directives. The components of Angular modules provide specific functionality 
via self-contained sections of code. Through the process called ___Dependency Injection___, modules can share variables 
between one another without having to reuse code.

    Note: Dependency Injection will be discussed in greater detail in the next section.

Angular modules are organized by function rather than type. This modular concept helps you better understand the context of 
the different components, enables more direct access to the modules, and provides more streamlined testing of the modules.

Modules provide a number of benefits including:

* They may be reused in multiple applications
* They can be loaded in any order (or in parallel)
* Unit testing need only load the relevant modules, keeping the tests fast

--
--

###Creating Angular Modules

This is an example of defining a module in Angular.

```javascript
var myApp = angular.module("myApp", []);
```

In this example, the module is assigned to the variable ___myApp___ on the left side of the assignment statement. The right 
side of the assignment is where the module is created, and in this example, is assigned the name `myApp`. The empty array `[]` 
is where we can inject other modules as necessary. To bootstrap the module, you can use the HTML attribute `ng-app='myApp'` to 
bootstrap your app, or you can use the `angular.bootstrap('myApp')` syntax. You specify the variable name when you bootstrap a module.

    Note: "Bootstrap" is just a fancy way of saying "configure and start."

To add controllers or other components to the module, reference the variable that you had defined for the module 
(var `myApp` in this instance), and then add additional method calls, like so:

```javascript
var myApp = angular.module("myApp", []);
myApp.controller("myController", [function() {}]);
```

Sometimes in applications, you will see a different following syntax:

```javascript
var myApp = angular.module("myApp", [])
.controller("myController", [function() {}]);
```

--
--

###Bootstrapping Your Angular Modules

Bootstrapping your module starts Angular and initializes the module, binding it to a section of the HTML that you wish to 
transform into a dynamic view. ___Binding___ tells Angular that this piece of HTML will be controlled by Angular, which 
will allow it to transform the HTML as the data changes, thereby creating a ___Dynamic View___ instead of the 
___Static View___ of plain HTML.

Your Angular app can affect as much or as little HTML as you prefer. For example, if you are defining a Single Page App, you will want to bootstrap your module on the <html> element, so that Angular can control the entirety of the page.

```html
<!DOCTYPE html>
<html ng-app="myApp">

<head>
    <title>My Page</title>
</head>

<body ng-controller="myController">
</body>

</html>
```

If you want Angular to only control some of your page, for example, if you are implementing Angular in a website 
that was built mostly out of jQuery, then you would do something like this:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>

    <div>
    There's some content here not controlled by Angular.
    </div>

    <div ng-app='myApp'>
    This is the content that is controlled by the Angular module 'myApp'.
        <div ng-controller='myController'>
        This is the content controlled by the controller myController.
        </div>
    
    </div>

</body>
</html>
```

You could also use multiple Angular modules on the same page, enabling you to create two separate 
applications to control different pieces of the page, like so:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>

    <div ng-app='myOtherApp'>
    This is the content controlled by the Angular module 'myOtherApp'.
    </div>
    
    <div ng-app='myApp'>
    This is the content that is controlled by the Angular module 'myApp'.
        <div ng-controller='myController'>
        This is the content controlled by the controller myController.
        </div>
    
    </div>

</body>
</html>
```

    Note: You'll notice the Angular bootstrap property begins with ng-. This is a standard preface for Angular object references and probably has something to do with the way it sounds (or, as some suspect, the fact that it makes up the second two letters of the word Angular). If you use Visual Studio or Visual Studio Code, you can use Intellisense to find Angular objects by typing ng- and letting Visual Studio provide you with options for what Angular objects are available.

--
--

###Introduction to Dependency Injection

<--! REDO-->

___Dependency Injection___ (___DI___) is a software design pattern that manages how components in a system obtain 
their dependencies. In Angular, Dependency Injection is responsible for:

* Creating components
* Maintaining a component's state
* Providing components to other components, as required

In Angular, DI allows us to share variables and functions between self-contained modules without having to reuse code, and maintains the state of each component.

DI employs the injector, the service object(s) to be used, the client object that is depending on the services it uses, and the interfaces.

    Note: The Angular injector is used for retrieving services as well as creating the necessary objects for us. See: [Angular Injector](https://docs.angularjs.org/api/ng/function/angular.injector).

The injector introduces the services to the client. Often, it also constructs the client. An injector may connect together a very 
complex object graph by treating an object like a client, and later, as a service for another client. The injector may actually 
be many objects working together, but may not be the client.

    Note: Services are discussed in our training course Advanced Framework Fundamentals with Angular. You can read more information on services in the documentation. [Read More](https://docs.angularjs.org/guide/services).

When Angular compiles the HTML, it processes the ng-controller directive, which, in turn, asks the injector to create an instance of the controller and its dependencies. The application code simply declares the dependencies it needs without having to deal with the injector. Angular invokes certain functions, such as service factories and controllers, via the injector. You annotate these functions so that the injector knows what services to inject into the function.

These functions are injectable with dependencies, just like the factory functions. The factory methods are registered with the modules. Components such as services, directives, filters, and animations are defined by an injectable factory method or constructor function. These components can be injected with service and value components as dependencies.

DI allows a client the flexibility of being configurable. Only the client's behavior is fixed. The client may act on anything that supports the intrinsic interface the client expects. The client only needs to know about the intrinsic interfaces of the services since these define how the client may use the services. This separates the responsibilities of use and construction. The interfaces are the dependency types that the client expects.

You use DI when defining components or when specifying functions to run at configuration and run time for a module by calling the config and run methods. The run method accepts a function, which can be injected with service, value, and constant components as dependencies. Note that you cannot inject providers into run blocks. The config method accepts a function, which can be injected with provider and constant components as dependencies. Note that you cannot inject service or value components into configuration.

    See: [Understanding-Dependency-Injection](https://github.com/angular/angular.js/wiki/Understanding-Dependency-Injection)

--
--

###Using Dependency Injection

One of the most commonly used dependencies in Angular is $scope. Controllers need access to the $scope object in order to bind values to the view (this will be explained further in the Controllers section of the course). In order to have the $scope available, all we need is the following code in place:

```javascript
myApp.controller("myController", [
    "$scope",
    function($scope) {
        // do stuff here      
    }
]);
```

The controller initialization is similar to the one we've already seen, with a few additions:

On the second line, we have "$scope". This line specifies that we are adding a reference to the $scope object.
On the next line after that, we have the $scope object as a parameter. This defines $scope as a variable name in our controller.

--
--

###Labs Overview

This module of the course includes a series of three tutorial style labs and one self-assessment lab. Some lab configuration is required.

The tutorial labs are designed to help you set up Angular and start using Angular modules and dependency injection. These labs will lead you step-by-step through the process of bootstrapping Angular, creating modules, and implementing dependency injection.

The final lab in this module is a self-assessment lab. In this lab, you will apply what you've learned during the tutorial labs to create a new HTML page and separate JavaScript files for the app and controller. The self-assessment lab gives you the opportunity to reinforce what you learned without providing the prescriptive step-by-step instructions that are provided in the tutorial labs.


####Tutorial Labs 
 
1. Bootstrapping Angular

There are multiple ways to instantiate Angular so that it works with your HTML to produce a dynamic view. The method that you choose will depend on whether you are building out a whole Single Page App (SPA), or just a component for an existing website. In this lab you will set up your HTML for Angular, declare your app, and bootstrap Angular.

2. Declaring Modules

In Angular, the word module refers to either an entire Angular application or independent components within that application, such as controllers, services, filters, and directives. In this lab, you will declare a Controller and bind the Controller to your HTML.

3. Implementing Dependency Injection

Dependency Injection is one of the best features in Angular. In this lab, you will learn how to declare constants and inject dependencies into your controllers. Services, Factories, and Resources can also be injected, and in labs that come up in later modules you will learn about them as well.


--
--

###Configuration: To Install Visual Studio Code

In order to develop your Angular, let's set up Visual Studio Code.

Visual Studio Code is lightweight and is compatible with most available hardware and platform versions.

####Linux

1. Download Visual Studio Code for your distribution, .deb for Debian-based distributions such as Ubuntu or .rpm for Red Hat-based distributions, 
such as Fedora or CentOS.
2. Install the package through a graphical user interface package manager by double-clicking on the package file, or through the command line:

```
bash # For .deb sudo dpkg -i .deb

# For .rpm (Fedora 21 and below) sudo yum install .rpm

# For .rpm (Fedora 22 and above) sudo dnf install .rpm
```

3. Visual Studio Code should now be available to run through the launcher or the command line by running code.
Tip: Run code in any folder to start editing files in that folder.

####Windows

1. Download Visual Studio Code for Windows.
2. To launch the setup process, double-click VSCodeSetup.exe.

By default, Visual Studio Code is installed in the "C:\Program Files (x86)\Microsoft VS Code" folder location (for a 64-bit machine). The setup process should only take about a minute.

    Note: .NET Framework 4.5 is required for Visual Studio Code. If you are using Windows 7, please ensure .NET Framework 4.5 is installed.

For more detailed instructions and tips, visit the full Microsoft Visual Studio Code Installation Instruction guide here.

--
--

###Configuration: To Set Up the Lab Environment

You will be using Visual Studio Code to complete the labs in this module. You are welcome to use a different editor to modify your code files, but the lab instructions in this course will describe the steps that you need to perform using Visual Studio Code unless otherwise noted.

There are just a couple of steps required to set up the lab environment for this module.

Create a local folder on your development computer that you can use for your code project. Name the folder "Mod1Lab".

    Note: You can use File Explorer or another tool of your choice to create the project folder.

Save the following code file to the project folder that you created above.

    Note: You will need to rename the file to match the file name shown below.

* [helloworld.html](https://d37djvu3ytnwxt.cloudfront.net/assets/courseware/v1/27a0031ff3710edb42f71f7f1f162f11/asset-v1:Microsoft+DEV220x+3T2016+type@asset+block/Mod1_Angular_Lab_helloworld.txt)

    Tip: To open a Save As file dialog, right-click the links above, and then click Save target as or Save Link as.

