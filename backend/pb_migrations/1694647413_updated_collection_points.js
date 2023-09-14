/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k9kdmbegi6pj06z")

  // remove
  collection.schema.removeField("i6m40aip")

  // remove
  collection.schema.removeField("rclplkfp")

  // remove
  collection.schema.removeField("wmqyiu7h")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vuvl2c6m",
    "name": "city",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fuge4jji",
    "name": "open_time",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zwxvs72b",
    "name": "close_time",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7dkuq0vf",
    "name": "google_maps_url",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k9kdmbegi6pj06z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i6m40aip",
    "name": "google_maps_url",
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

  // remove
  collection.schema.removeField("vuvl2c6m")

  // remove
  collection.schema.removeField("fuge4jji")

  // remove
  collection.schema.removeField("zwxvs72b")

  // remove
  collection.schema.removeField("7dkuq0vf")

  return dao.saveCollection(collection)
})
