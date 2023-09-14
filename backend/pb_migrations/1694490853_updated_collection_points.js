/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k9kdmbegi6pj06z")

  collection.listRule = "active = true"
  collection.viewRule = "active = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k9kdmbegi6pj06z")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
