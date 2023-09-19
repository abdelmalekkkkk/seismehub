/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f2xbeuv4e1otza2")

  collection.createRule = "verified != true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f2xbeuv4e1otza2")

  collection.createRule = ""

  return dao.saveCollection(collection)
})
