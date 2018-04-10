const chai = require('chai');
const checker = require('../lib/checker');

describe('Check the signature', () => {
  it('should return true if the signature is valid', () => {
    const signatureParams = {
      keyid: '123456789',
      algorithm: 'hmac-sha1',
      signature: 'Slpm4XpaxXaYPx75x5mnDUxmIEA=',
      headers: ['date'],
      signingString: 'date: Tue, 10 Apr 2018 10:30:32 GMT'
    };
    chai.expect(checker.checkSignature(signatureParams, 'secret')).to.be.true;
  });

  it('should return false if the signature is not valid', () => {
    const signatureParams = {
      keyid: '123456789',
      algorithm: 'hmac-sha1',
      signature: 'd3Jvbmdfc2lnbmF0dXJl',
      headers: ['date'],
      signingString: 'date: Tue, 10 Apr 2018 10:30:32 GMT'
    };
    chai.expect(checker.checkSignature(signatureParams, 'secret')).to.be.false;
  });
});
