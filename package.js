Package.describe({
  summary: 'Event Sourcing Infrastructure for Meteor.',
  name: 'space:event-sourcing',
  version: '1.4.0',
  git: 'https://github.com/meteor-space/event-sourcing.git',
});

Package.onUse(function(api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    'coffeescript',
    'ejson',
    'underscore',
    'check',
    'mikowals:batch-insert@1.1.9',
    'space:base@3.0.0',
    'space:messaging@2.0.0'
  ]);

  api.addFiles(['source/server.coffee'], 'server');

  // ========= server =========

  api.addFiles([
    // INFRASTRUCTURE
    'source/infrastructure/repository.coffee',
    'source/infrastructure/snapshotter.coffee',
    'source/infrastructure/commit_store.coffee',
    'source/infrastructure/commit_publisher.coffee',
    'source/infrastructure/projection.coffee',
    'source/infrastructure/projector.coffee',
    'source/infrastructure/router.coffee',
    // DOMAIN
    'source/domain/aggregate.coffee',
    'source/domain/process.coffee',
  ], 'server');

});

Package.onTest(function(api) {

  api.use([
    'coffeescript',
    'check',
    'ejson',
    'mongo',
    'underscore',
    'space:event-sourcing',
    'practicalmeteor:munit@2.1.4',
    'space:testing@1.5.0'
  ]);

  api.addFiles([
    // DOMAIN
    'tests/domain/aggregate.unit.coffee',
    'tests/domain/process.unit.coffee',
    // INFRASTRUCTURE
    'tests/infrastructure/commit_store.unit.coffee',
    'tests/infrastructure/snapshotter.unit.coffee',
    'tests/infrastructure/projection.unit.coffee',
    'tests/infrastructure/projector.integration.coffee',
    // INTEGRATION TESTS
    'tests/test_application.coffee',
    'tests/messaging.tests.coffee',
  ], 'server');

});
