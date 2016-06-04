import Ember from 'ember';
import DelayCoreMixin from 'ember-delay-input/mixins/delay-core';
import { module, test } from 'qunit';

module('Unit | Mixin | delay core');

// Replace this with your real tests.
test('it works', function(assert) {
  let DelayCoreObject = Ember.Object.extend(DelayCoreMixin);
  let subject = DelayCoreObject.create();
  assert.ok(subject);
});
