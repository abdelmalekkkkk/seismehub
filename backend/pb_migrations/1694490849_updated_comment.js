/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7ych9qlpcxjnx2o")

  collection.listRule = "active = true"
  collection.viewRule = "active = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7ych9qlpcxjnx2o")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
