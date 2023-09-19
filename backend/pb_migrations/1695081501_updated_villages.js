/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("npm9jj0rej71lsk")

  // remove
  collection.schema.removeField("nnqweegd")

  // remove
  collection.schema.removeField("jcjzkn1v")

  // remove
  collection.schema.removeField("ofbhquzg")

  // remove
  collection.schema.removeField("uiadwn6t")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("npm9jj0rej71lsk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nnqweegd",
    "name": "contact",
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
    "id": "jcjzkn1v",
    "name": "contact_phone",
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
    "id": "ofbhquzg",
    "name": "creator_name",
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
    "id": "uiadwn6t",
    "name": "creator_phone",
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
})
