/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("npm9jj0rej71lsk")

  collection.indexes = [
    "CREATE INDEX `idx_JLDE6yJ` ON `villages` (\n  `level`,\n  `active`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("npm9jj0rej71lsk")

  collection.indexes = []

  return dao.saveCollection(collection)
})
