/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7ych9qlpcxjnx2o",
    "created": "2023-09-12 03:29:25.690Z",
    "updated": "2023-09-12 03:29:25.690Z",
    "name": "comment",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pcns9wyc",
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
        "id": "sq32aama",
        "name": "content",
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
        "id": "xfy9x55f",
        "name": "target_id",
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
        "id": "s3llpwxg",
        "name": "active",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [
      "CREATE INDEX `idx_M4PqYFs` ON `comment` (`target_id`)",
      "CREATE INDEX `idx_FNi9xXH` ON `comment` (`active`)"
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
  const collection = dao.findCollectionByNameOrId("7ych9qlpcxjnx2o");

  return dao.deleteCollection(collection);
})
