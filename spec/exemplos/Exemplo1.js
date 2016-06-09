describe("Exemplo1", function() {

  var Exemplo1 = require('../../lib/Exemplo1');

  beforeEach(function() {
    exemplo1 = new Exemplo1();
  });

  it("executando teste1 somar", function() {
    exemplo1.somar(1,2);
    expect(exemplo1.valor).toEqual(3);
  });

});
