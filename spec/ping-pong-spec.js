import { pingPong } from '../src/ping-pong.js';
describe('pingPong', function() {

  // var game;
  //
  // beforeEach(function(){
  //   game = new pingPong(0);
  // });

  it('should say "ping" if divisible by % 3', function() {
    var game = new pingPong(3)
    expect(game[2]).toEqual("ping");
  });
  it('should say "pong" if divisible by % 5', function() {
    var game = new pingPong(5)
    expect(game[4]).toEqual("pong");
  });
  it('should say "ping-pong" if divisible by % 15', function () {
    var game = new pingPong(15)
    expect(game[14]).toEqual("ping-pong");
  });
  it('should say "4" if not divisible by anything', function () {
    var game = new pingPong(4)
    expect(game[3]).toEqual(4);
  });
});
