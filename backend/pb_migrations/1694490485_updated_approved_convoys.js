/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1vd9lcjtaxke9dr")

  collection.listRule = ""
  collection.viewRule = ""

  // remove
  collection.schema.removeField("pqifxfap")

  // remove
  collection.schema.removeField("8jznbljz")

  // remove
  collection.schema.removeField("mhdf5qrg")

  // remove
  collection.schema.removeField("fybtinel")

  // remove
  collection.schema.removeField("zbmlg9od")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pbympvyw",
    "name": "village",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "npm9jj0rej71lsk",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hrhqbeon",
    "name": "organization",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "j2p83q8huu5wpx9",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0lnod6pj",
    "name": "date",
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
    "id": "jjvrsbfi",
    "name": "details",
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
    "id": "u9fdtd83",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "PREPARING",
        "PENDING",
        "GOING",
        "ARRIVED",
        "FINISHED"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1vd9lcjtaxke9dr")

  collection.listRule = null
  collection.viewRule = null

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pqifxfap",
    "name": "village",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "npm9jj0rej71lsk",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8jznbljz",
    "name": "organization",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "j2p83q8huu5wpx9",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mhdf5qrg",
    "name": "date",
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
    "id": "fybtinel",
    "name": "details",
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
    "id": "zbmlg9od",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "PREPARING",
        "PENDING",
        "GOING",
        "ARRIVED",
        "FINISHED"
      ]
    }
  }))

  // remove
  collection.schema.removeField("pbympvyw")

  // remove
  collection.schema.removeField("hrhqbeon")

  // remove
  collection.schema.removeField("0lnod6pj")

  // remove
  collection.schema.removeField("jjvrsbfi")

  // remove
  collection.schema.removeField("u9fdtd83")

  return dao.saveCollection(collection)
})
