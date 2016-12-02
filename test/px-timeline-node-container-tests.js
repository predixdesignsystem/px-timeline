var nodeContainerEl,
    nodes;
var timelines = [
    {
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
    }, {
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
    }
  ];

document.addEventListener("WebComponentsReady", function() {
  runTests();
});

function runTests() {

  suite('Check timeline "Left Side" node position', function() {
    suiteSetup(function(done) {
      nodeContainerEl = Polymer.dom(document).querySelector('px-timeline-node-container');
      nodeContainerEl.timelines = timelines;
      done();
    });

  });
}
