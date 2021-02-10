"use strict";

var _easings = require("../easings");

describe('Test easings', function () {
  it('easeInOutCubic return value', function () {
    var nums = []; // eslint-disable-next-line no-plusplus

    for (var index = 0; index < 5; index++) {
      nums.push((0, _easings.easeInOutCubic)(index, 1, 5, 4));
    }

    expect(nums).toEqual([1, 1.25, 3, 4.75, 5]);
  });
});