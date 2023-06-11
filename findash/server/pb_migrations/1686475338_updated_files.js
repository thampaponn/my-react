migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z69lxc1t4qqhkky")

  collection.updateRule = "@request.auth.id != \"\""
  collection.deleteRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z69lxc1t4qqhkky")

  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
