'use strict';

const wit = require('node-wit');
const expect = require('chai').expect;

describe('node-wit', () => {
  it('should have functions log, Wit and interactive', (done) => {
    const witFunctions = Object.keys(wit);
    expect(witFunctions).to.be.length(3);
    expect(witFunctions).to.eql(['log', 'Wit', 'interactive']);
    done();
  });
});

describe('lib', () => {
  require('./common').runTests(require('../lib'));
});