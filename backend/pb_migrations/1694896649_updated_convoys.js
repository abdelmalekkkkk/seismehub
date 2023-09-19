/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xiwd55bgef8xf5w")

  collection.indexes = [
    "CREATE INDEX `idx_ongNJYa` ON `convoys` (`active`)",
    "CREATE INDEX `idx_pd5XdIc` ON `convoys` (\n  `organization`,\n  `villages`\n)"
  ]

  // remove
  collection.schema.removeField("6qxm1jio")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ejrhuj8v",
    "name": "verified",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xiwd55bgef8xf5w")

  collection.indexes = [
    "CREATE INDEX `idx_ongNJYa` ON `convoys` (`active`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6qxm1jio",
    "name": "villages_input",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("ejrhuj8v")

  return dao.saveCollection(collection)
})
