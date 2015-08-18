describe("Thermostat web", function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures("thermostat.html");
    $.holdReady(false);
  });
  it("displays default temp 20", function() {
    expect("#temp").toContainText("20");
  });
  // beforeEach(function () {
  //   jasmine.addMatchers({
  //     toBePlaying: function () {
  //       return {
  //         compare: function (actual, expected) {
  //           var player = actual;
  //           return {
  //             pass: player.currentlyPlayingSong === expected && player.isPlaying
  //           };
  //         }
  //       };
  //     }
  //   });
  // })
});