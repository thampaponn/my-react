migrate((db) => {
  const collection = new Collection({
    "id": "z69lxc1t4qqhkky",
    "created": "2023-06-10 14:49:45.159Z",
    "updated": "2023-06-10 14:49:45.159Z",
    "name": "file",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vtwcydx9",
        "name": "file",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "onhvsmtt",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("z69lxc1t4qqhkky");

  return dao.deleteCollection(collection);
})
