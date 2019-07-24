[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Monarchs: A Seeding Exercise

So far in this unit, you have spent some time creating models and seeding data into your database. Seeding data can get a little more complicated when you have related models, or models that reference another model. In this exercise, you will need to consider the data types of the provided data v. the SchemaType your model has declared. For example here, `monarchRaw.json` provides the kingdom as a string, but the Monarch model requires the kingdom's SchemaType to be an `ObjectId`.

You have been provided with robust starter code for an Express application that will display data about monarchs and their kingdoms, including raw JSON data and models. Your objective is to seed the desired data from the provided models into a local database using Mongoose, making sure each monarch references the kingdom over which they reigned.

## Prerequisites

* Node & NPM
* MongoDB
* Mongoose
* Data Modeling
* Express

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Install dependencies.
1. Fulfill the listed requirements.

Please turn in your submission by the deadline on your cohort calendar.

## Requirements

Before you begin, take some time to familiarize yourself with the starter code. Look through the routes and controllers to find out what data this application will display, and at which path. Examine the models carefully, paying close attention to the properties in each schema. Once you have done this,fulfill the requirements below.

**Hint:** You will not need to make any adjustments to the `index.js` file, routes, controllers, models, raw data or `db/connection.js` files. You will only be working in the files located in the `db/seed` directory.

1. In `00--seed-collections.js`, map throught the monarch raw data to create a new array of objects that only include the necessary properties.
1. Next, in the same file, map through the kingdom raw data to create a new array of objects that only include the necessary properties.
1. In `00--seed-collections.js`, seed a collection of monarchs into your local database.
1. In the same file, seed a collection of kingdoms into your local database.
1. In `01--seed-related-models.js` seed your data in a way that updates the monarchs collection to include the `ObjectId` of the kingdom over which each monarch reigned.

## Bonus

Use the `.populate` method to display the `name` and `extract` from each kingdom in the monarchs collection.

[Mongoose Documentation on Query Population](https://mongoosejs.com/docs/3.4.x/docs/populate.html)

## Plagiarism

Take a moment to refamiliarize yourself with the [Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md). Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
