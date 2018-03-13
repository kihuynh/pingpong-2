import { pingPong } from '../src/ping-pong.js';
describe('pingPong', function() {
  it('should say "ping" if divisible by % 3', function() {
    var game = new pingPong(3)
    expect(pingPong[2]).toEqual("ping")
  });
});
