/* eslint-env mocha */

// mocha imports
import chai from 'chai';
chai.should();

// subject imports
import { blockRefresh } from '../src/index.mjs';

const x = { a: 0, b: 1 };
const y = { a: 0, b: 2 };

describe('blockRefresh', () => {
  describe('default options', () => {
    it('blocks equal objects', () => {
      const output = blockRefresh(x, x);

      output.should.equal(true);
    });

    it('passes unequal objects', () => {
      const output = blockRefresh(x, y);

      output.should.equal(false);
    });
  });

  describe('path option', () => {
    it('blocks objects equal at path', () => {
      const output = blockRefresh(x, y, { path: 'a' });

      output.should.equal(true);
    });

    it('passes objects unequal at path', () => {
      const output = blockRefresh(x, y, { path: 'b' });

      output.should.equal(false);
    });
  });

  describe('predicate option', () => {
    it('blocks objects when predicate true', () => {
      const output = blockRefresh(x, y, { predicate: (a, b) => a.a === b.a });

      output.should.equal(true);
    });

    it('passes objects when predicate false', () => {
      const output = blockRefresh(x, y, { predicate: (a, b) => a.b === b.b });

      output.should.equal(false);
    });
  });

  describe('refreshUndefined option', () => {
    it('blocks undefined inputs by default', () => {
      const output = blockRefresh(undefined, undefined);

      output.should.equal(true);
    });

    it('passes undefined inputs when true', () => {
      const output = blockRefresh(undefined, undefined, {
        refreshUndefined: true,
      });

      output.should.equal(false);
    });
  });
});
