const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
  // TODO: exercise Get the inputs for Azure blob
  // upload to the blob
  core.info('Hello World from a custom javascript action!');
}

run();