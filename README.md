# Simple Secure for Meteor

Simple security helper for Meteor

## Demo

[Check it out](http://simple-secure.meteor.com/)

## Installation

Add `server/lib/simple_secure.js` to your `server/` dir

## Usage

### Setup datasource

    ReadOnlyData = new Meteor.Collection('readOnlyData');

### Publish some data

    Meteor.publish('readOnlyData', function () {
      return ReadOnlyData.find({});
    });

### Secure data by turning off magic data methods

    SimpleSecure.noDataMagic();
