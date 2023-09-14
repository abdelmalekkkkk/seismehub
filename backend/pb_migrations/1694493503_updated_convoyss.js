/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xiwd55bgef8xf5w")

  collection.name = "convoys"
  collection.indexes = [
    "CREATE INDEX `idx_ongNJYa` ON `convoys` (`active`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xiwd55bgef8xf5w")

  collection.name = "convoyss"
  collection.indexes = [
    "CREATE INDEX `idx_ongNJYa` ON `convoyss` (`active`)"
  ]

  return dao.saveCollection(collection)
})
