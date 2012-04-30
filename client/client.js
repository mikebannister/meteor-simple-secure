// Data 

ReadOnlyData = new Meteor.Collection('readOnlyData');
Code = new Meteor.Collection('code');

// Subscriptions

Meteor.subscribe('readOnlyData');
Meteor.subscribe('code');

// Template helpers

Template.simpleSecureDemo.readOnlyData = function () {
  return ReadOnlyData.find({}).fetch();
};

// Events

Template.simpleSecureDemo.events = {
  'click input' : function (e) {
    ReadOnlyData.remove({});
  }
};

// Template helpers

Template.simpleSecureCode.codeSamples = function () {
  var examples = Code.findOne({});
  if (!examples) {
    return [];
  }

  // Meteor.defer(function() {
  //   sh_highlightDocument();
  // });
  
  return examples.code;
};

