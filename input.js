const connect = require("./client");
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log('exit');
    process.exit();
  }
  if (key === '\u0077') {
    console.log('up')
    connection.write('Move: up');
    
  }
  if (key === '\u0073') {
    console.log('down')
    connection.write('Move: down');
    
  }
  if (key === '\u0061') {
    console.log('left')
    connection.write('Move: left');
    
  }
  if (key === '\u0064') {
    console.log('right')
    connection.write('Move: right');
    
  }
  if (key === '\u0075') {
    console.log('right')
    connection.write('Say: hi');
  }
  if (key === '\u0069') {
    console.log('right')
    connection.write('Say: move');
  }
}

module.exports = setupInput;