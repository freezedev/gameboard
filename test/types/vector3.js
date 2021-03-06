'use strict';

import {Types} from 'gamebox';
const {Vector3} = Types;

describe('gamebox/types/vector', function () {

  it('is a function', function () {
    expect(Vector3).to.be.a('function');
  });

  describe('constructor', function () {
    var vector = new Vector3();

    it('can be instantiated', function () {
      expect(vector).to.be.a('object');
      expect(vector).to.be.an.instanceOf(Vector3);
    });

    it('default values', function() {
      expect(vector.x).to.be.a('number');
      expect(vector.y).to.be.a('number');
      expect(vector.z).to.be.a('number');

      expect(vector.x).to.equal(0);
      expect(vector.y).to.equal(0);
      expect(vector.z).to.equal(0);
    });

    it('custom values', function() {
      var vector = new Vector3(10, 10, 10);

      expect(vector.x).to.be.a('number');
      expect(vector.y).to.be.a('number');
      expect(vector.z).to.be.a('number');

      expect(vector.x).to.equal(10);
      expect(vector.y).to.equal(10);
      expect(vector.z).to.equal(10);
    });
  });

});
