migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z69lxc1t4qqhkky")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cw2t2fks",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z69lxc1t4qqhkky")

  // remove
  collection.schema.removeField("cw2t2fks")

  return dao.saveCollection(collection)
})
