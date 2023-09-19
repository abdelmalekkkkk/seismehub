/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xiwd55bgef8xf5w")

  collection.indexes = [
    "CREATE INDEX `idx_ongNJYa` ON `convoys` (`active`)",
    "CREATE INDEX `idx_0VEKKYP` ON `convoys` (\n  `village`,\n  `organization`\n)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8kkf8mha",
    "name": "village",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "npm9jj0rej71lsk",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xiwd55bgef8xf5w")

  collection.indexes = [
    "CREATE INDEX `idx_ongNJYa` ON `convoys` (`active`)",
    "CREATE INDEX `idx_OCptM4b` ON `convoys` (\n  `organization`,\n  `villages`\n)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8kkf8mha",
    "name": "villages",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "npm9jj0rej71lsk",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
