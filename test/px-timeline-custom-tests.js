// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {
  // Place any setup steps like variable declaration and initialization here

  // This is the placeholder suite to place custom tests in
  // Use testCase(options) for a more convenient setup of the test cases
  suite('Check Primary Inner Custom Elements Exist', function () {
    test('px-timeline-node-container element exists', function(done){
      var nodeContainer = document.getElementById('node-container');
      assert.isTrue(nodeContainer !== null);
      done();
    });
  })
  //
  suite('Check px-timeline configurable properties', function() {
    var timelineEl = Polymer.dom(document).querySelector('px-timeline');

    suiteSetup(function(done) {
      timelineEl.enhanced = true;
      timelineEl.showTimeGroups = true;
      timelineEl.showNodeContent = true;
      done();
    })

    test('timeline option enhanced is set to true', function(done){
      assert.equal(timelineEl.enhanced, true);
      done();
    });

    test('timeline option showTimeGroups is set to true', function(done){
      assert.equal(timelineEl.showTimeGroups, true);
      done();
    });

    test('timeline option showNodeContent is set to true', function(done){
      assert.equal(timelineEl.showNodeContent, true);
      done();
    });
  });
};
