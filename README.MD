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
