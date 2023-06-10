migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z69lxc1t4qqhkky")

  collection.name = "files"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z69lxc1t4qqhkky")

  collection.name = "file"

  return dao.saveCollection(collection)
})
