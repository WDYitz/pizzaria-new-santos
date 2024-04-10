/*
  Warnings:

  - You are about to drop the column `clientId` on the `orders` table. All the data in the column will be lost.
  - Added the required column `clientsId` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_orders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "order_name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "clientsId" TEXT NOT NULL,
    CONSTRAINT "orders_clientsId_fkey" FOREIGN KEY ("clientsId") REFERENCES "client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_orders" ("created_at", "details", "id", "order_name", "price", "status") SELECT "created_at", "details", "id", "order_name", "price", "status" FROM "orders";
DROP TABLE "orders";
ALTER TABLE "new_orders" RENAME TO "orders";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
