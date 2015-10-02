import Ember from 'ember';

export default Ember.Controller.extend({
  groups: [
    {
      name: 'Ember JS',
      projects: [
        {
          title: 'Ember Collapsible Panel',
          description: 'Unopinionated, zero-dependency panel and accordion',
          url: 'https://tedconf.github.io/ember-collapsible-panel',
        },
        {
          title: 'Ember TED Gear',
          description: 'A TED gear component',
          url: 'http://tedconf.github.io/ember-ted-gear/',
        },
        {
          title: 'Ember CLI Front End Builds',
          description: 'Deploy your Ember app to a Front End Builds-enabled Rails server',
          url: 'https://github.com/tedconf/ember-cli-front-end-builds',
        },
        {
          title: 'Ember CLI New Build',
          description: 'Notify users of new app releases',
          url: 'https://github.com/tedconf/ember-cli-new-build',
        }
      ]
    },
    {
      name: 'Ruby',
      projects: [
        {
          title: 'Front End Builds',
          description: 'A Rails engine for deploying and serving JavaScript applications',
          url: 'https://github.com/tedconf/front_end_builds',
        },
        {
          title: 'Serialism',
          description: 'General-purpose serialization library',
          url: 'https://github.com/tedconf/serialism',
        },
        {
          title: 'JSON Logger',
          description: 'Write structured JSON to logs',
          url: 'https://github.com/tedconf/json_logger',
        },
        {
          title: 'Time chunk',
          description: 'Iterate over time ranges in discrete chunks',
          url: 'https://github.com/tedconf/time_chunk',
        }
      ]
    },
    {
      name: 'Node',
      projects: [
        {
          title: 'node-m3u8',
          description: 'Streaming parser for m3u8 files',
          url: 'https://github.com/tedconf/node-m3u8',
        }
      ]
    },
    {
      name: 'Misc',
      projects: [
        {
          title: 'Styleguide',
          description: 'Ruby, CSS, Ember and rspec code style guides',
          url: 'https://github.com/tedconf/code-style-guides',
        }
      ]
    },
  ]
});
