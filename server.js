let admin = new (require('./lib/admin').server);
/*let database = new (require('./lib/database').client);
database.connect('localhost:27017/strifecity', 'users');
setTimeout(() => {
  database.insert([{a : 1}, {a : 2}, {a : 3}]);
  function jorb(documents) {
    console.log(documents);
  };
  database.select({a:1}, jorb);
  //{"$set":{"b": 1}}
}, 1000);*/