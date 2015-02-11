if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  Template.hello.rendered = function() {
    var testSchema = new SimpleSchema({foo: {type: String}, bar: {type: Number}});

    var badData = {foo: 'a', bar: 1, baz: "whoops"};

    var context = testSchema.namedContext("test");

    if (!(context.validate(badData))) {
        var keys = context.invalidKeys();
        if (!keys || !keys[0] || !keys[0].name) {
            return;
        }

        console.log(context.keyErrorMessage(keys[0].name));
    }
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
