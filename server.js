"use strict";
class SlightCms {
  constructor() {
    this.data = {};
    this.lib = {};
    
    this.lib.fileConfig = new (require('fileunit').Filer)('config');
    this.lib.fileCollectionTemplates = new (require('fileunit').Filer)('collection-templates');
    
    this.lib.fileCollectionTemplates.load((readError, fileData) => {this.loadCollectionTemplates(readError, fileData);});
    this.lib.fileConfig.load((readError, fileData) => {this.loadConfig(readError, fileData);});
  }
  loadCollectionTemplates(readError, fileData) {
    if(!readError) {
      this.data.collectionTemplates = JSON.parse(fileData);
    };
  }
  loadConfig(readError, fileData) {
    if(!readError) {
      this.data.config = JSON.parse(fileData);
      
      this.lib.adminServer = new (require('./lib/admin').server)(this.data.config);
      this.lib.pathBuilderTool = new (require('./lib/pathbuilder').tool)(this.data.config);
      this.lib.databaseClient = new (require('./lib/database').client)(this.data.config);
    };
  }
  printout(error, result) {
    console.log(error);
    console.log(result);
  }
}
let slightCms = new SlightCms();
/*

let admin = Object.create(this.data.collectionTemplates.admins);
admin.name = 'BoJack';
admin.password = 'HorseMan';
admin.email = '';

this.lib.databaseClient.executor('createAdmin', admin, this.printout)


let database = new (require('./lib/database').client);
database.connect('localhost:27017/strifecity', 'users');
setTimeout(() => {
  database.insert([{a : 1}, {a : 2}, {a : 3}]);
  function jorb(documents) {
    console.log(documents);
  };
  database.select({a:1}, jorb);
  //{"$set":{"b": 1}}
}, 1000);*/