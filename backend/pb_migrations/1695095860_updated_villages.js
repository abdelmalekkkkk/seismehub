/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("npm9jj0rej71lsk")

  collection.listRule = "active = true && latitude != 0 && longitude != 0"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("npm9jj0rej71lsk")

  collection.listRule = "active = true && latitude != 0 && longitude != 0 && population > 500 && population < 550"

  return dao.saveCollection(collection)
})
