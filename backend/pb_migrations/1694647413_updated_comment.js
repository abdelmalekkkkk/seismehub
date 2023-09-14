/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7ych9qlpcxjnx2o")

  collection.name = "comments"
  collection.indexes = [
    "CREATE INDEX `idx_M4PqYFs` ON `comments` (`target_id`)",
    "CREATE INDEX `idx_FNi9xXH` ON `comments` (`active`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7ych9qlpcxjnx2o")

  collection.name = "comment"
  collection.indexes = [
    "CREATE INDEX `idx_M4PqYFs` ON `comment` (`target_id`)",
    "CREATE INDEX `idx_FNi9xXH` ON `comment` (`active`)"
  ]

  return dao.saveCollection(collection)
})
