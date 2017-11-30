suite('Check Primary Inner Custom Elements Exist', function () {
  test('px-timeline-node-container element exists', function(done){
    let timelineEl = fixture('ev_timeline_1');
    flush(()=>{
      let nodeContainer = Polymer.dom(timelineEl.root).querySelector('#node-container');
      assert.isTrue(nodeContainer !== null);
      done();
    })
  });
})
//
suite('Check px-timeline configurable properties', function() {
  let timelineEl;

  suiteSetup(function(done) {
    timelineEl = fixture('ev_timeline_1');
    timelineEl.enhanced = true;
    timelineEl.showTimeGroups = true;
    timelineEl.showNodeContent = true;
    flush(()=>{
       done();
    });
  })

  test('timeline option enhanced is set to true', function(){
    assert.equal(timelineEl.enhanced, true);
  });

  test('timeline option showTimeGroups is set to true', function(){
    assert.equal(timelineEl.showTimeGroups, true);
  });

  test('timeline option showNodeContent is set to true', function(){
    assert.equal(timelineEl.showNodeContent, true);
  });
});
