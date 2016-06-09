describe("Exemplo 3", function() {

  var exemplo3_a = require('../../lib/Exemplo3').exemplo3_a;
  var exemplo3_b = require('../../lib/Exemplo3').exemplo3_b;

  it("executando teste3 ", function() {
     expect(exemplo3_a()).toEqual(true);
     expect(exemplo3_b()).toEqual(false);
  });

});
