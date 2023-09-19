/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xiwd55bgef8xf5w")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pyca5kpv",
    "name": "fulfilled_needs",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "cpyq5zgo2er2d8s",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xiwd55bgef8xf5w")

  // remove
  collection.schema.removeField("pyca5kpv")

  return dao.saveCollection(collection)
})
