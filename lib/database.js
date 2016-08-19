"use strict";
class Client {
  constructor() {
    this.database = {};
    this.database.client = require('mongodb').MongoClient;
    this.database.objectId = require('mongodb').ObjectID;
  }
  connect(url, collection) {
    url = 'mongodb://' + url;
    this.database.client.connect(url, (error, database) => {
      if(error === null){
        console.log('connected');
        this.database.collection = database.collection(collection);
      };
      //database.close();
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
  }
}
exports.client = Client;