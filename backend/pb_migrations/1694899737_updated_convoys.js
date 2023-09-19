/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xiwd55bgef8xf5w")

  collection.indexes = [
    "CREATE INDEX `idx_ongNJYa` ON `convoys` (`active`)",
    "CREATE INDEX `idx_OCptM4b` ON `convoys` (\n  `organization`,\n  `villages`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xiwd55bgef8xf5w")

  collection.indexes = [
    "CREATE INDEX `idx_ongNJYa` ON `convoys` (`active`)",
    "CREATE INDEX `idx_pd5XdIc` ON `convoys` (\n  `organization`,\n  `villages`\n)"
  ]

  return dao.saveCollection(collection)
})
