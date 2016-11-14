'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');

module.exports.runTests = ({log, Wit, interactive}) => {
  describe('utils', () => {
    let loggerStub;

    it('tests log flags', (done) => {
      expect(log.DEBUG).to.be.equal('debug');
      expect(log.INFO).to.be.equal('info');
      expect(log.WARN).to.be.equal('warn');
      expect(log.ERROR).to.be.equal('error');
      done();
    });

    it('tests logger (DEBUG)', (done) => {
      const logger = new log.Logger(log.DEBUG);
      loggerStub = sinon.stub(logger, 'info').returns(Promise.resolve());
      logger.info('one', 'two', 'three');
      expect(loggerStub.calledOnce).to.be.true;
      expect(loggerStub.thisValues[0].level).to.be.equal('debug');
      expect(loggerStub.calledWith('one', 'two', 'three')).to.be.true;
      done();
    });

    it('tests logger (INFO)', (done) => {
      const logger = new log.Logger(log.INFO);
      loggerStub = sinon.stub(logger, 'info').returns(Promise.resolve());
      logger.info('one', 'two', 'three');
      expect(loggerStub.calledOnce).to.be.true;
      expect(loggerStub.thisValues[0].level).to.be.equal('info');
      expect(loggerStub.calledWith('one', 'two', 'three')).to.be.true;
      done();
    });

    it('tests logger (WARN)', (done) => {
      const logger = new log.Logger(log.WARN);
      loggerStub = sinon.stub(logger, 'info').returns(Promise.resolve());
      logger.info('one', 'two', 'three');
      expect(loggerStub.calledOnce).to.be.true;
      expect(loggerStub.thisValues[0].level).to.be.equal('warn');
      expect(loggerStub.calledWith('one', 'two', 'three')).to.be.true;
      done();
    });

    it('tests logger (ERROR)', (done) => {
      const logger = new log.Logger(log.ERROR);
      loggerStub = sinon.stub(logger, 'info').returns(Promise.resolve());
      logger.info('one', 'two', 'three');
      expect(loggerStub.calledOnce).to.be.true;
      expect(loggerStub.thisValues[0].level).to.be.equal('error');
      expect(loggerStub.calledWith('one', 'two', 'three')).to.be.true;
      done();
    });
  });
};
