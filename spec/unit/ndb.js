describe("Node Debugger", function() {
  describe("version", function() {
    it("should be at 0.0.1", function() {
      ndb.version.should.equal("0.0.1");
    });

    it("should have verbose on by default", function() {
      ndb.reset();
      ndb.verbose.should.equal(true);
    });
  });
});
