/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "cpyq5zgo2er2d8s",
    "created": "2023-09-14 17:37:37.049Z",
    "updated": "2023-09-14 17:37:37.049Z",
    "name": "needs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rm8ibqwt",
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
      }
    ],
    "indexes": [],
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
  const collection = dao.findCollectionByNameOrId("cpyq5zgo2er2d8s");

  return dao.deleteCollection(collection);
})
