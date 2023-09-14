/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k9kdmbegi6pj06z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rclplkfp",
    "name": "open_time",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wmqyiu7h",
    "name": "close_time",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k9kdmbegi6pj06z")

  // remove
  collection.schema.removeField("rclplkfp")

  // remove
  collection.schema.removeField("wmqyiu7h")

  return dao.saveCollection(collection)
})
