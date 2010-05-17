exports.commandNames = ["h", "help"];

var text = function(commands) {
  var commandNames = [],
      property,
      obj;

  for (property in commands) {
    obj = commands[property];

    if (obj.commandNames) {
      commandNames.push(obj.commandNames.join(", "));
    }
  }

  return commandNames.sort().join("\n");
};

exports.run = function() {
  var ndb = this.callingModule,
      puts = ndb.Helpers.puts;

  puts(text(ndb.Commands));
  ndb.Helpers.prompt();
};