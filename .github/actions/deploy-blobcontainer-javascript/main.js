const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
  core.info('Hello World from a custom javascript action!');
}

run();