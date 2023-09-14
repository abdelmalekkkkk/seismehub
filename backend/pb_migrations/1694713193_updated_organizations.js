/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j2p83q8huu5wpx9")

  collection.name = "ngos"
  collection.indexes = [
    "CREATE INDEX `idx_XBJZgGs` ON `ngos` (`active`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j2p83q8huu5wpx9")

  collection.name = "organizations"
  collection.indexes = [
    "CREATE INDEX `idx_XBJZgGs` ON `organizations` (`active`)"
  ]

  return dao.saveCollection(collection)
})
