var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (cmd) {
  //console.log('You just typed: '+cmd);
  var toConvert = "";
  var toAdd = "";
  var flag =0;
  for (var i = 0; i < cmd.length; i++) {
  	if (cmd[i] === " ") {
  		flag = 1;
  	}else{
  		if (flag === 0) {
  			toConvert += cmd[i];
  		}else{
  			toAdd += cmd[i];
  		}
  	}
  };
  //console.log("toConvert: " + toConvert + " toAdd: " + toAdd);
  var deci = parseInt(toConvert, 16);
  console.log("\n------------------------------------");
  console.log("Input number in deci: " + deci);
  deci += parseInt(toAdd);
  console.log("Add: " + toAdd);
  console.log("Result: " + deci.toString(16));
  console.log("------------------------------------\n");
});