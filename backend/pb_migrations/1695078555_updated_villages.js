/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("npm9jj0rej71lsk")

  // remove
  collection.schema.removeField("8tq6vvnt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w6lh4tmh",
    "name": "severity",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8uvrwicw",
    "name": "internal_id",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("npm9jj0rej71lsk")

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

  // remove
  collection.schema.removeField("w6lh4tmh")

  // remove
  collection.schema.removeField("8uvrwicw")

  return dao.saveCollection(collection)
})
