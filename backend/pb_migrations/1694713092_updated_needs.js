/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cpyq5zgo2er2d8s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zusivosb",
    "name": "key",
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
  const collection = dao.findCollectionByNameOrId("cpyq5zgo2er2d8s")

  // remove
  collection.schema.removeField("zusivosb")

  return dao.saveCollection(collection)
})
