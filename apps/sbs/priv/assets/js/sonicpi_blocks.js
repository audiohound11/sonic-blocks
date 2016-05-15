/*globals Blockly*/
(function () {
    'use strict';
    var Bs = Blockly.Blocks,
        Code = Blockly.JavaScript;

    Bs.SPI_Loop = {
        init: function() {
            this.appendDummyInput()
            .appendField("Loop");
            this.appendStatementInput("BODY")
            .setCheck(null);
            this.setInputsInline(false);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(290);
            this.setTooltip('Repeat it\'s content forever');
            this.setHelpUrl('http://marianoguerra.github.io/sonic-blocs/help/loop.html');
        }
    };

    Code.SPI_Loop = function(block) {
        var body = Blockly.JavaScript.statementToCode(block, 'BODY');
        var code = 'loop do\n' + body + 'end\n\n';
        return code;
    };

    Bs.SPI_Sleep = {
        init: function() {
            this.appendDummyInput()
            .appendField("Sleep");
            this.appendValueInput("TIME")
            .setCheck("Number");
            this.appendDummyInput()
            .appendField("Seconds");
            this.setInputsInline(true);
            this.setColour(290);
            this.setTooltip('Sleep for the given amount of seconds');
            this.setHelpUrl('http://marianoguerra.github.io/sonic-blocs/help/sleep.html');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
        }
    };

    Code.SPI_Sleep = function(block) {
        var valueTime = Code.valueToCode(block, 'TIME', Code.ORDER_ATOMIC);
        var code = 'sleep(' + valueTime + ')\n';
        return code;
    };

    Bs.SPI_Rrand = {
        init: function() {
            this.appendDummyInput()
            .appendField("Random value between");
            this.appendValueInput("FROM")
            .setCheck("Number");
            this.appendDummyInput()
            .appendField("and");
            this.appendValueInput("TO")
            .setCheck("Number");
            this.setInputsInline(true);
            this.setColour(290);
            this.setTooltip('Return a random number between "from" and "to"');
            this.setOutput(true, "Number");
            this.setHelpUrl('http://marianoguerra.github.io/sonic-blocs/help/rrand.html');
        }
    };

    Code.SPI_Rrand = function(block) {
        var valueFrom = Code.valueToCode(block, 'FROM', Code.ORDER_ATOMIC);
        var valueTo = Code.valueToCode(block, 'TO', Code.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'rrand(' + valueFrom + ', ' + valueTo + ')';
        return [code, Code.ORDER_ATOMIC];
    };

    Bs.SPI_Sample = {
        init: function() {
            this.appendDummyInput()
            .appendField("Sample")
            .appendField(new Blockly.FieldDropdown([["Perc Bell", "perc_bell"]]), "SAMPLE");
            this.appendDummyInput()
            .appendField("at rate");
            this.appendValueInput("RATE")
            .setCheck("Number");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(290);
            this.setTooltip('');
            this.setHelpUrl('http://marianoguerra.github.io/sonic-blocs/help/sample.html');
        }
    };

    Code.SPI_Sample = function(block) {
        var sample = block.getFieldValue('SAMPLE');
        var rate = Blockly.JavaScript.valueToCode(block, 'RATE', Blockly.JavaScript.ORDER_ATOMIC);
        var code = 'sample :' + sample + ', rate: (' + rate + ')\n';
        return code;
    };

	Bs.SPI_With_FX = {
		init: function() {
			this.appendDummyInput()
			.appendField("With FX")
			.appendField(new Blockly.FieldDropdown([["Reverb", "reverb"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "FX");
			this.appendValueInput("MIX")
			.setCheck("Number")
			.appendField("mix");
			this.appendStatementInput("BODY")
			.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(290);
			this.setTooltip('');
			this.setHelpUrl('http://www.example.com/');
		}
	};

    Code.SPI_With_FX = function(block) {
      var fx = block.getFieldValue('FX');
      var mix = Blockly.JavaScript.valueToCode(block, 'MIX', Blockly.JavaScript.ORDER_ATOMIC);
      var body = Blockly.JavaScript.statementToCode(block, 'BODY');
      var code = 'with_fx :' + fx + ', mix: (' + mix + ') do\n' + body + '\nend\n\n';
      return code;
    };
}());
