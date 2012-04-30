
// Example start: Setup datasource

ReadOnlyData = new Meteor.Collection('readOnlyData');

// Example end

// Example start: Publish some data

Meteor.publish('readOnlyData', function () {
  return ReadOnlyData.find({});
});

// Example end

// Example start: Secure data by turning off all magic data methods

SimpleSecure.noDataMagic();

// Example end

// Setup methods

Meteor.methods({ moof: function() {} });

// Setup data

ReadOnlyData.remove({});
ReadOnlyData.insert({ readOnlyBit: 'Foo' });
ReadOnlyData.insert({ readOnlyBit: 'Bar' });
ReadOnlyData.insert({ readOnlyBit: 'Moof' });

// Code model for demo

Code = new Meteor.Collection('code');
Meteor.publish('code', function () {
  return Code.find({});
});

// Update demo code examples
Code.remove({});
var url = 'https://raw.github.com/mikebannister/meteor-simple-secure/master/server/server.js';
Code.insert({ code: GithubUrl2CodeExamples.parse(url) });
