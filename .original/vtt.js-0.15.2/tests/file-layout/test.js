var TestRunner = require("../test-runner.js"),
    test = new TestRunner();

describe("file-layout tests", function(){

  before(function(onDone) {
    test.init(onDone);
  });

  after(function() {
    test.shutdown();
  });

  it("blank-file-with-bom.vtt", function(onDone){
    test.jsonEqualAll("file-layout/blank-file-with-bom.vtt", "file-layout/no-output.json", onDone);
  });

  it("blank-file.vtt", function(onDone){
    test.jsonEqualAll("file-layout/blank-file.vtt", "file-layout/no-output.json", onDone);
  });

  it("bom-garbage-data.vtt", function(onDone){
    test.jsonEqualAll("file-layout/bom-garbage-data.vtt", "file-layout/no-output.json", onDone);
  });

  it("bom-tab-webvtt.vtt", function(onDone){
    test.jsonEqualAll("file-layout/bom-tab-webvtt.vtt", "file-layout/no-output.json", onDone);
  });  

  // Turn back on: https://github.com/mozilla/vtt.js/issues/262
  it("cue-spacing.vtt", function(onDone){
    test.jsonEqual("file-layout/cue-spacing.vtt", "file-layout/cue-spacing.json", onDone);
  });

  it("garbage-signature.vtt", function(onDone){
    test.jsonEqualAll("file-layout/garbage-signature.vtt", "file-layout/no-output.json", onDone);
  });  

  it("header-no-new-line.vtt", function(onDone){
    test.jsonEqualAll("file-layout/header-no-new-line.vtt", "file-layout/no-output.json", onDone);
  });

  // Turn back on: https://github.com/mozilla/vtt.js/issues/262
  it("many-comments.vtt", function(onDone){
    test.jsonEqual("file-layout/many-comments.vtt", "file-layout/many-comments.json", onDone);
  });  

  it("newline-before-webvtt.vtt", function(onDone){
    test.jsonEqualAll("file-layout/newline-before-webvtt.vtt", "file-layout/no-output.json", onDone);
  });

  it("no-space-cue-times-cue-settings.vtt", function(onDone){
    test.jsonEqualAll("file-layout/no-space-cue-times-cue-settings.vtt", "file-layout/no-space-cue-times-cue-settings.json", onDone);
  });

  it("tab-after-bom-before-header.vtt", function(onDone){
    test.jsonEqualAll("file-layout/tab-after-bom-before-header.vtt", "file-layout/no-output.json", onDone);
  });

  it("webvtt-no-bom.vtt", function(onDone){
    test.jsonEqualAll("file-layout/webvtt-no-bom.vtt", "file-layout/with-data.json", onDone);
  });

  it("webvtt-space.vtt", function(onDone){
    test.jsonEqualAll("file-layout/webvtt-space.vtt", "file-layout/with-data.json", onDone);
  });

  it("webvtt-tab.vtt", function(onDone){
    test.jsonEqualAll("file-layout/webvtt-tab.vtt", "file-layout/with-data.json", onDone);
  });

  it("webvtt-with-bom.vtt", function(onDone){
    test.jsonEqualAll("file-layout/webvtt-with-bom.vtt", "file-layout/with-data.json", onDone);
  });
  
  it("bad-double-webvtt.vtt", function(onDone){
    test.jsonEqualAll("file-layout/bad-double-webvtt.vtt", "file-layout/no-output.json", onDone);
  });

});
