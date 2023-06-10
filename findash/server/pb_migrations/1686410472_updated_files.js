migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z69lxc1t4qqhkky")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z69lxc1t4qqhkky")

  // update
  collection.schema.addField(new SchemaField({
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
      "protected": true
    }
  }))

  return dao.saveCollection(collection)
})
