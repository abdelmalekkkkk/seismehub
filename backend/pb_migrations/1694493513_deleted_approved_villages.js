/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0bwvw7e69s2l340");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "0bwvw7e69s2l340",
    "created": "2023-09-12 03:36:00.022Z",
    "updated": "2023-09-12 03:50:17.666Z",
    "name": "approved_villages",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ibmg3jey",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "krhcloiz",
        "name": "latitude",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "x7dwz8c4",
        "name": "longitude",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "bl8u7qc7",
        "name": "level",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "pv3zu6f5",
        "name": "google_maps_url",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\nid,\nname,\nlatitude,\nlongitude,\nlevel,\ngoogle_maps_url\nFROM villages WHERE active = TRUE;"
    }
  });

  return Dao(db).saveCollection(collection);
})
