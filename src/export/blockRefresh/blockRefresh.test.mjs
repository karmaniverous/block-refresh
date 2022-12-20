/* eslint-env mocha */

// mocha imports
import chai from 'chai';
chai.should();

// subject imports
import { blockRefresh } from './blockRefresh.mjs';

const x = { a: 0, b: 1 };
const y = { a: 0, b: 2 };

describe('blockRefresh', function () {
  describe('default options', function () {
    it('blocks equal objects', function () {
      const output = blockRefresh(x, x);

      output.should.equal(true);
    });

    it('passes unequal objects', function () {
      const output = blockRefresh(x, y);

      output.should.equal(false);
    });
  });

  describe('path option', function () {
    it('blocks objects equal at path', function () {
      const output = blockRefresh(x, y, { path: 'a' });

      output.should.equal(true);
    });

    it('passes objects unequal at path', function () {
      const output = blockRefresh(x, y, { path: 'b' });

      output.should.equal(false);
    });
  });

  describe('predicate option', function () {
    it('blocks objects when predicate true', function () {
      const output = blockRefresh(x, y, { predicate: (a, b) => a.a === b.a });

      output.should.equal(true);
    });

    it('passes objects when predicate false', function () {
      const output = blockRefresh(x, y, { predicate: (a, b) => a.b === b.b });

      output.should.equal(false);
    });
  });

  describe('refreshUndefined option', function () {
    it('blocks undefined inputs by default', function () {
      const output = blockRefresh(undefined, undefined);

      output.should.equal(true);
    });

    it('passes undefined inputs when true', function () {
      const output = blockRefresh(undefined, undefined, {
        refreshUndefined: true,
      });

      output.should.equal(false);
    });
  });
});
