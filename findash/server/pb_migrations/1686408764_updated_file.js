migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z69lxc1t4qqhkky")

  collection.listRule = "@request.auth.id != \"\""
  collection.createRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z69lxc1t4qqhkky")

  collection.listRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
})
