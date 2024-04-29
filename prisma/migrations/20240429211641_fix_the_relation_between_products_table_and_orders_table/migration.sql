/*
  Warnings:

  - The primary key for the `client` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `client` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `orders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `order_name` on the `orders` table. All the data in the column will be lost.
  - You are about to alter the column `clientsId` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `id` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `products` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `items_quantity` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productsId` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_client" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "client_name" TEXT NOT NULL,
    "client_phone" TEXT NOT NULL,
    "client_cpf" TEXT,
    "client_address" TEXT NOT NULL,
    "client_number" TEXT NOT NULL,
    "client_complement" TEXT NOT NULL,
    "client_profile_image" INTEGER NOT NULL DEFAULT 1
);
INSERT INTO "new_client" ("client_address", "client_complement", "client_cpf", "client_name", "client_number", "client_phone", "client_profile_image", "id") SELECT "client_address", "client_complement", "client_cpf", "client_name", "client_number", "client_phone", "client_profile_image", "id" FROM "client";
DROP TABLE "client";
ALTER TABLE "new_client" RENAME TO "client";
CREATE TABLE "new_orders" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "items_quantity" INTEGER NOT NULL,
    "details" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,
    "clientsId" INTEGER NOT NULL,
    "productsId" INTEGER NOT NULL,
    CONSTRAINT "orders_clientsId_fkey" FOREIGN KEY ("clientsId") REFERENCES "client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "orders_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_orders" ("clientsId", "created_at", "details", "id", "price", "status") SELECT "clientsId", "created_at", "details", "id", "price", "status" FROM "orders";
DROP TABLE "orders";
ALTER TABLE "new_orders" RENAME TO "orders";
CREATE TABLE "new_products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_name" TEXT NOT NULL,
    "product_details" TEXT NOT NULL,
    "product_price" REAL NOT NULL
);
INSERT INTO "new_products" ("id", "product_details", "product_name", "product_price") SELECT "id", "product_details", "product_name", "product_price" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
