JS.Test.describe('adder', function() { with(this) {

  it('sums', function() { with(this) {
    assertEqual(adder(1, 2), 3);
    assertEqual(adder(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER), 0);
  }});
}});

JS.Test.autorun();
