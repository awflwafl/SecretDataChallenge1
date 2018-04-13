# Architrave

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](http://makeapullrequest.com)

> An architrave is the lintel or beam that rests on the capitals of the columns. It is an architectural element in Classical architecture.

> A tenon is a projecting piece of wood made for insertion into a mortise in another piece

This collection of processors will focus on confirming digital identities.

The strategy is human computer collaboration, as inspired by Garry Kasparov's wisdom about the best way we can coexist with intelligent automated logic. To satisfy this approach
we provide the user with helpful error messages that allow them to learn and understand the data that _we_ consider to be PII.

This project specifically focused on demonstrating the necessity to explain the errors for "ditital identity" information that required technical know-how to decipher and understand
the dangers of. In particular gathering unique identifiers through several levels of indirection; UUIDv1 -> MAC Address -> Personal Device -> Person.

## Overview

The purpose of this solution is to demonstate a composable architecure for a processor. It features several major principles:

- Assume everything is asynchronous
- Assume indefinite depth of analysis

We can see the following major components make up this prototype:

- CLI (simple, created especially for _you_ the reviewer of this submission to have a delightful time playing with this tool)
- Deserialiser (coupled to the CSV format of the file. However, demonstrating where to plug it in for extensibility)
- Scanner (the meat and potatoes of the application; this shows the indefinite depth and composability of "scans" that can be performed. More on this below)
- Serializer (coupled to the desired output schema)
- IO (Read/Write operations that are currenly synchronous for the purposes focusing on other areas)


### Scanners

Scanners are functions assymed to have the API of a promise, with asynchronous behaviour. Using `tenon`s multiple scanners
can be composed for indfinite depths of analysis.

Each "leaf node" scanner performs the following tasks:
- Infer (using text patterns)
- Validate (using for-sure logic, which can be using a network call to an official API such as Twitter)
- Explain (let's teach our uses why they may or may not care about exposing this piece of data

## Dependencies

Use your favourite dependency manager of choice to install the following dependencies to make use of this project:

- NodeJS
- NPM

## Demo

To check this solution in action run it against a sample data set such as the one inclided in the `data` directory in the following way:

```sh
npm run scan <input-file-path> <output-file-path>
```

## Extensibility, Plan and the Future

The following categories were considered in the planning of this solution:

- data point analysis (no context)
- collection analysys (providing context of multiple data points)
- confidence levels of correctness
- danger of being able to uniquely identify individuals using the information
- extensibility of approaches to infer and validate assumptions
- usability for human beings
- composability for developers

### Data Point Analysis

This was the first stage, becase without a mechanism to do this we would not be able to say _anythign_ about the data set.

This was build asa first priority.


### Collection Analysis

The analysis of a collection can be performed based on the output of data-point analysis and plugged in between the `scan` and `deserialize` stages denonstrated in `index.js`.

This is an aspiration for the future.


### Confidence Levels

There are two ways we can gauge confidence levels:
- Accuracy of our analysis
- Likelihood based on contex

Accuracy of our analysis was implemented by allowing two short-circuiting staged `infer` and `validate` for each data point.

Likelihood based on context was not implemented yet, as it would require a larger time investment and the implementation of a "collection analysis" step. It is a aspiration for the future.

Confidence levels would allow us to categorise the "suspect" data points as follows:
- `info`: `infer` was true, but `validate` was false
- `warning`: `infer` was true, but unable to `validate` reliably
- `error`: `infer` was true and `validate` was true

Categorising confidence levels is an aspiration for the future.

### Danger of Being Able to Identify Uniquely

An identifier (uuid, ip address, passport number) are _identifiers_ meaning the have a one to one mapping with an identifiable entity. These are dangerous and considered errors on their own.

A  _trait_ is something shared by multiple entities with a many-to-many mapping. Only the accumulaton of traits per data-point/context considered dangerous enough to accumulate an error. eg: profession + location + datetime + hair color
Trait analysis requires "consolidation" of data-point erros based on data-point and collection analysis and is an aspiration for the future.


### Extensibility of Approaches

The of promises (async) allows for usage of third party APIs and the `tenon` utility allows for creation of composite scanners.

### Usability for Human Beings

Let's explain why a certain data-point or collection analysis should be cared aobut. Check out the messages generated with `explain` and the questions they aim to answer.

### Composability for Devlopment

The `tenon` utility allows for specialised scanners to be created as separate packages and plugged in to the Architrave architecture.

Serializers, deserializers and other wrapper composability is demonstrated in `index.js`

## What Are You Showing Us?

The scanners implemented specifically for this prototype demonstrate the ability to compose scanners from very granual to the more abstract and higher-level concerns.
