# Spartez coding test

Welcome to our coding test!

The goal is to create a product sales dashboard application.

This test will help us see how you solve problems in code,
and to learn about the decision and choices you make when coding.

You may use any front-end technologies you like to implement a solution :)

This task can take between 2 to 3 hours to complete.
We don't expect you to spend a lot of time on the test!

## How to install

Run `npm install` to pull in all dependencies.

## How to run

The following commands will be helpful to you:

* `npm run start` - starts the server at http://localhost:9000.
* `npm run build` - builds the assets for the front-end once.
* `npm run watch` - builds the assets for the front-end whenever they change.

## How it works

This application pretends to expose data about new customers who buy products in realtime via REST.

There are two endpoints:

```
GET http://localhost:9000/products
```

Exposes general information about all available products.

```
GET http://localhost:9000/products/{product-id}
```

Returns a JSON representation of the product and its customers. It can take the following query params:

* offset
* limit

## Getting started

If you run the `start` script and open your browser, you will see a mockup for what the final app should be like.

Your task is to turn that static mockup in to a working application.

## The tasks

Here's what we would like to see you implement:

1. For each product the `/products` REST endpoint returns, render a column.
2. For each column, render the customers for that product.
3. If the user types in the search bar, the UI should do one of:
    * Only show customers whose names or quotes match what was searched for, or
    * Highlight the text that matches, or
    * Both! ;)
4. For each product, poll the customer REST endpoint every 30 seconds and update the UI with the new customer data.
5. Right now, if the browser width is small, product columns wrap under eachother. Refactor the CSS so that all product columns are displayed in a single horizontal row - like a Trello board or agile card board would be rendered.

Finally, we would like you to provide a short README, written in English, that tells us what you implemented
and the things you considered when building the solution.

## How you can implement your solution

You may choose to only target the latest browsers in your submission.

You may choose any technology or technique you want in order to build the application.

If you are more comfortable using a CLI for your chosen technology,
you may set up a separate project using that CLI and treat this project as
a simple REST server. The REST endpoints have CORS requests enabled, so you can
make requests to them from your other project.

## Tips for your submission

The purpose of this assignment is *not* to build a production-ready application!
We know you cannot show us everything you know in only a few hours.
Be deliberate in what you build; you can tell us what you're choosing NOT to do and your reasoning for it.

Here are some things we will be looking for in your submission:

* What tasks you have implemented successfully
* How you chose to structure your application
* How modular is your code
* How readable is your code
* Your utilisation of browser technologies (JavaScript, CSS, HTML) or
  things that compile to them (TypeScript, CSS processors, etc.)

Good luck!

## What have been done

Stack of technologies that has been used in this project:

* Vue.js - for fast prototyping and development
* Tailwind css and SASS - for styles and layout
* Vuex - for state management
* Typescript - for type checking
* Eslint, Prettier - for code styling

### Framework and state management

In order to make workable solution in a short term I used Vue.js framework with Vuex state management. It helped me quickly setup a project with CLI and make basic markups in a few steps according to provided template. Also there is no need for additional setup of a store and overcomplicated logic in order to start implementing new features.

### Styles

Due to small size of template of components I used atomic approach with tailwind css in order to define overall look and layout and putted additional styles for a few components naming elements with BEM metodology.

### Key points that I took into consideration

* Persisting the model in the store and applying a search for it
* Limit the loading of the data in order not to fetch it all at once
* Updating already existing data with newly fetched one
* Separation of the logic and implementation from the presentation by using filters, business layer and model by it self
* Implementing understandable mechanism for updating the model over the time in the separate module

### Implemented features

* Basic template and mobile view
* Added search by fields which are not only name or quotes but by everything which is appeared on the page
* Highlights searched criteria
* Added ability to refresh the model over the specified amount of time which can be applied by setting keys in env file (enable by default, refresh time is 30 seconds). While refreshing search criteria takes into consideration as well
* Fetching missing items by limit and offset which trigers by scrolling to the bottom

### How to view the solution

* `npm install` - Install dependencies
* `npm run build` - builds the assets for the front-end once
* `npm run start` - starts the server at http://localhost:9000



