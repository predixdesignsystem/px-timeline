suite('Check Primary Inner Custom Elements Exist', function () {
  test('px-timeline-node-container element exists', function(done){
    let timelineEl = Polymer.dom(document).querySelector('px-timeline');
    let nodeContainer = Polymer.dom(timelineEl.root).querySelector('#node-container');

    assert.isTrue(nodeContainer !== null);
    done();
  });
})
//
suite('Check px-timeline configurable properties', function() {
  let timelineEl;

  suiteSetup(function(done) {
    timelineEl = Polymer.dom(document).querySelector('px-timeline');
    timelineEl.enhanced = true;
    timelineEl.showTimeGroups = true;
    timelineEl.showNodeContent = true;
    flush(()=>{
       done();
    });
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
