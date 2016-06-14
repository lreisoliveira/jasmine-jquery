'use strict';

var jsdom = require("jsdom");
if (typeof window === 'undefined') {
  global.window = require("jsdom").jsdom().defaultView;
  global.document = jsdom.jsdom();
  global.jQuery = global.$ = require("jquery");
}

describe('Exibição da mensagem de boas-vindas', function(){

  var executar = require('../../tableless');

  beforeEach(function(){
     $('<input type="text" id="mensagem">').appendTo('body');
  });

  afterEach(function(){
    this.horas = [];
  });

  it("Deve exibir 'Bom-dia!' entre 5:00 e 11:59", function(){
    executar.saudacao();
    expect($("#mensagem").val()).toEqual("Boa-noite");
  });

});
