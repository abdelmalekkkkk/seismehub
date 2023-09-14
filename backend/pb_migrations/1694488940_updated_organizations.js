/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j2p83q8huu5wpx9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c5eoghlj",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j2p83q8huu5wpx9")

  // remove
  collection.schema.removeField("c5eoghlj")

  return dao.saveCollection(collection)
})
