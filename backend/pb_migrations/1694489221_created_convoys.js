/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "xiwd55bgef8xf5w",
    "created": "2023-09-12 03:27:01.356Z",
    "updated": "2023-09-12 03:27:01.356Z",
    "name": "convoys",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8kkf8mha",
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
        "id": "ezn8r6gu",
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
        "id": "lokkczga",
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
        "id": "x7jvfa06",
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
        "id": "flihkx27",
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
      },
      {
        "system": false,
        "id": "jzlsriz7",
        "name": "active",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [
      "CREATE INDEX `idx_ongNJYa` ON `convoys` (`active`)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xiwd55bgef8xf5w");

  return dao.deleteCollection(collection);
})
