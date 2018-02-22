suite('Check base timeline node properties', function() {
  let nodeEl,
      minusIcon,
      iconDiv,
      listNode,
      leftNodeBox,
      nodeElRoot;
  suiteSetup(function(done) {
    nodeEl = fixture('px-timeline-node_1');
    listNode = {
      "metaData": {
        "editedBy": "GE Digital",
        "editedDate": "Tue Sep 20 2016 17:28:10 GMT-0700 (PDT)"
      },
      "content": {
        "title": "Building the industrial internet",
        "bodyType": "text",
        "body": [
          {
            "text": "On Tuesday, GE CEO Jeff Immelt and Intel CEO Brian Krzanich spoke at the Intel Developer Forum in San Francisco about the partnership and the future of the Industrial Internet. They noted this is a significant step in the two companies’ plan to eventually offer GE’s Industrial Internet software on Intel-powered devices.",
            "headline": "This is the content headline",
            "isComment": true
          }
        ]
      }
    };
    nodeEl.timelineMetadata = listNode.metaData;
    nodeEl.timelineContent = listNode.content;
    nodeEl.autoShowContent = true;
    nodeEl.timelineIndex = 0;
    nodeEl.indexEven = true;
    nodeEl.nodePosition = 'Left Side';
    flush(()=>{
      done();
    })
  });

  test('timeline auto show node content is true', function(){
    assert.isTrue(nodeEl.autoShowContent);
  });

  test('timeline metaData editedBy equals GE Digital', function(){
    assert.equal(nodeEl.timelineMetadata.editedBy, 'GE Digital');
  });

  test('timeline content title equals "FBuilding the industrial internet"', function(){
    assert.equal(nodeEl.timelineContent.title, 'Building the industrial internet');
  });

  test('timeline content bodyType equals TEXT', function(){
    assert.equal(nodeEl.timelineContent.bodyType.toUpperCase(), 'TEXT');
  });

});

suite('Check VIDEO timeline node properties', function() {
  let nodeEl,
      minusIcon,
      iconDiv,
      listNode,
      leftNodeBox,
      nodeElRoot;
  suiteSetup(function(done) {
    nodeEl = fixture('px-timeline-node_1');
    listNode = {
      "metaData": {
        "editedBy": "Google Chrome Developers",
        "editedDate": "Tue Sep 20 2016 16:28:10 GMT-0700 (PDT)",
        "editorImg": "img/immelt.jpg",
        "editorTitle": "Chief Field Scientist",
        "percent": "80"
      },
      "content": {
        "title": "Lazy loading data with app-route",
        "bodyType": "Video",
        "body": [
          {
            "video": "video/sample-video.mp4",
            "headline": "This is the content headline",
            "text": "Thanks to Rob Dobson",
            "host": "local",
            "isComment": true
          }
        ]
      }
    };
    nodeEl.timelineMetadata = listNode.metaData;
    nodeEl.timelineContent = listNode.content;
    nodeEl.autoShowContent = true;
    nodeEl.timelineIndex = 0;
    nodeEl.indexEven = true;

    flush(()=>{
      done();
    })
  });

  test('timeline metaData editedBy equals Google Chrome Developers', function(){
    assert.equal(nodeEl.timelineMetadata.editedBy, 'Google Chrome Developers');
  });

  test('timeline metaData editedBy equals "Lazy loading data with app-route"', function(){
    assert.equal(nodeEl.timelineContent.title, 'Lazy loading data with app-route');
  });

  test('timeline content bodyType equals Video', function(){
    assert.equal(nodeEl.timelineContent.bodyType.toUpperCase(), 'VIDEO');
  });
});


suite('Check TABLE timeline node properties', function() {
  let nodeEl,
      minusIcon,
      iconDiv,
      listNode,
      leftNodeBox,
      nodeElRoot;
  suiteSetup(function(done) {
    nodeEl = fixture('px-timeline-node_1');
    listNode = {
      "metaData": {
        "editedBy": "GE Digital",
        "editedDate": "Tue Sep 20 2016 16:28:10 GMT-0700 (PDT)"
      },
      "content": {
        "title": "Industrial Details",
        "bodyType": "table",
        "body": [
          {
            "first": "Valentine",
            "last": "Meyer",
            "email": "valentinemeyer@scentric.com"
          },
          {
            "first": "Silva",
            "last": "Alexander",
            "email": "silvaalexander@gmail.com"
          },
          {
            "first": "Hopkins",
            "last": "Wong",
            "email": "hopkinswong@hotmail.com"
          },
          {
            "first": "Joe",
            "last": "Sherman",
            "email": "joejoe@yahoo.com"
          },
          {
            "first": "Jane",
            "last": "Bartlett",
            "email": "jane@scentric.com"
          }
        ]
      }
    };
    nodeEl.timelineMetadata = listNode.metaData;
    nodeEl.timelineContent = listNode.content;
    nodeEl.autoShowContent = true;
    nodeEl.timelineIndex = 0;
    nodeEl.indexEven = true;

    flush(()=>{
      done();
    })
  });

  test('timeline metaData editedBy equals GE Digital', function(){
    assert.equal(nodeEl.timelineMetadata.editedBy, 'GE Digital');
  });

  test('timeline content bodyType equals Table', function(){
    assert.equal(nodeEl.timelineContent.bodyType.toUpperCase(), 'TABLE');
  });

  test('timeline content body is not empty', function(){
    assert.equal(nodeEl.timelineContent.body.length, 5);
  });
});
