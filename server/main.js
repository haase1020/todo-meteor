import { Meteor } from 'meteor/meteor';
import '/imports/api/tasks';

// const insertTask = (text) => Tasks.insert({ text });

Meteor.startup(() => {
  if (!Accounts.findUserByUsername('meteorite')) {
    Accounts.createUser({
      username: 'meteorite',
      password: 'password',
    });
  }
});
