/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("npm9jj0rej71lsk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6l3iwsbp",
    "name": "area",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "rural",
        "rural_zone_urb",
        "urbain"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("npm9jj0rej71lsk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6l3iwsbp",
    "name": "milieu",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "rural",
        "rural_zone_urb",
        "urbain"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
