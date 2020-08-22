import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'chai';

import { Tasks } from './tasks.js';

if (Meteor.isServer) {
  describe('Tasks', () => {
    describe('methods', () => {
      const userId = Random.id();
      let taskId;

      beforeEach(() => {
        Tasks.remove({});

        taskId = Tasks.insert({
          text: 'Test Task',
          createdAt: new Date(),
          owner: userId,
          username: 'meteorite',
        });
      });

      it('can delete owned task', () => {
        // isolate internal method implementation
        const deleteTask = Meteor.isServer.method_handlers['tasks.remove'];
        //set up a fake method call context
        const invocation = { userId };
        //run the method with 'this' set to the mock context
        deleteTask.apply(invocation, [taskId]);
        //check it's behavior
        assert.equal(Tasks.find().count(), 0);
      });
    });
  });
}
