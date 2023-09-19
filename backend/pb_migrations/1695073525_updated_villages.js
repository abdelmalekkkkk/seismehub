/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("npm9jj0rej71lsk")

  // remove
  collection.schema.removeField("f4zjigos")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pl1ocbme",
    "name": "region_ar",
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
    "id": "ozbbgfy6",
    "name": "province_ar",
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
    "id": "8orct4wp",
    "name": "commune_ar",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1yjdfmag",
    "name": "altitude",
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
    "id": "kqcelabj",
    "name": "water_quality",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "GOOD",
        "BAD"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rixbqa7g",
    "name": "risk_slip",
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
    "id": "pdcyunjq",
    "name": "risk_flood",
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
    "id": "ytifpv8z",
    "name": "risk_cold",
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
    "id": "n4dlgrkk",
    "name": "risk_snow",
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
    "id": "6nxxxz3w",
    "name": "has_water_table",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("npm9jj0rej71lsk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f4zjigos",
    "name": "description",
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

  // remove
  collection.schema.removeField("pl1ocbme")

  // remove
  collection.schema.removeField("ozbbgfy6")

  // remove
  collection.schema.removeField("8orct4wp")

  // remove
  collection.schema.removeField("6l3iwsbp")

  // remove
  collection.schema.removeField("1yjdfmag")

  // remove
  collection.schema.removeField("kqcelabj")

  // remove
  collection.schema.removeField("rixbqa7g")

  // remove
  collection.schema.removeField("pdcyunjq")

  // remove
  collection.schema.removeField("ytifpv8z")

  // remove
  collection.schema.removeField("n4dlgrkk")

  // remove
  collection.schema.removeField("6nxxxz3w")

  return dao.saveCollection(collection)
})
