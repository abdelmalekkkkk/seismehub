/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("npm9jj0rej71lsk")

  collection.indexes = [
    "CREATE INDEX `idx_JLDE6yJ` ON `villages` (`active`)"
  ]

  // remove
  collection.schema.removeField("b1ifxits")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8tq6vvnt",
    "name": "severity",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "LOW",
        "MEDIUM",
        "HIGH"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("npm9jj0rej71lsk")

  collection.indexes = [
    "CREATE INDEX `idx_JLDE6yJ` ON `villages` (\n  `level`,\n  `active`\n)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b1ifxits",
    "name": "level",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("8tq6vvnt")

  return dao.saveCollection(collection)
})
