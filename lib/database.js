"use strict";
class Client {
  constructor(data) {
    this.data = {};
    this.data.mongoUrl = 'mongodb://' + data.mongoPath + ':' + data.mongoPort + '/' + data.mongoProject;
    this.data.mongoCollections = data.mongoCollections;
    this.database = {};
    this.database.client = require('mongodb').MongoClient;
    this.database.objectId = require('mongodb').ObjectID;
  }
  executor(storedFunction, data, callback) {
    this.database.client.connect(this.data.mongoUrl, (error, database) => {
      if(error === null){
        console.log('Mongo Connected');
        this[storedFunction](database, data, callback);
      }
      else {
        console.log(error);
        console.log(this.data.mongoUrl);
      };
    });
  }
  createAdmin(database, data, callback) {
    let collection = database.collection(this.data.mongoCollections.admins);
    collection.insertMany([data], (error, result) => {callback(error, result);});
    database.close();
  }
}
exports.client = Client;
  /*connect(connection) {
    this.database.client.connect(url, (error, database) => {
      if(error === null){
        console.log('connected');
        this.database.connection = database;
      };
      database.close();
    });
  }
  insert(documents) {
    this.database.collection.insertMany(documents, (error, result) => {
        if(error === null && result.insertedCount === documents.length) {
          console.log('DB: Insert Successful');
        }
        else {
          console.log('DB: Insert Failure');
        };
      }
    );
  }
  delete(id) {
    collection.deleteOne({"_id": ObjectId(id)}, (error, result) => {
      if(error === null) {
        console.log(result);
      };
    });
  }
  update(id, updateAction) {
    collection.updateOne({"_id": ObjectId(id)}, updateAction, (error, result) => {
      if(error === null) {
        console.log(result);
      };
    });
  }
  select(searchParameters, callback) {
    this.database.collection.find(searchParameters).toArray(function(error, documents) {
      if(error === null) {
        callback(documents);
        console.log(documents);
      };
    });
  }*/