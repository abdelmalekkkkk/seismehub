/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1vd9lcjtaxke9dr",
    "created": "2023-09-12 03:48:00.982Z",
    "updated": "2023-09-12 03:48:00.982Z",
    "name": "approved_convoys",
    "type": "view",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\nid,\nvillage,\norganization,\ndate,\ndetails,\nstatus\nFROM convoys\nWHERE active = true"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1vd9lcjtaxke9dr");

  return dao.deleteCollection(collection);
})
