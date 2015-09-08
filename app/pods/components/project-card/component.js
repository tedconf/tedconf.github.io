import Ember from 'ember';

export default Ember.Component.extend({
  url: Ember.computed.alias('project.url'),

  tagName: 'a',
  classNames: ['Project-card'],
  attributeBindings: ['url:href'],
});
