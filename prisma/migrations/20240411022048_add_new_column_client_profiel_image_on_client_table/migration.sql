-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "client_name" TEXT NOT NULL,
    "client_phone" TEXT NOT NULL,
    "client_cpf" TEXT,
    "client_address" TEXT NOT NULL,
    "client_number" TEXT NOT NULL,
    "client_complement" TEXT NOT NULL,
    "client_profile_image" INTEGER NOT NULL DEFAULT 1
);
INSERT INTO "new_client" ("client_address", "client_complement", "client_cpf", "client_name", "client_number", "client_phone", "id") SELECT "client_address", "client_complement", "client_cpf", "client_name", "client_number", "client_phone", "id" FROM "client";
DROP TABLE "client";
ALTER TABLE "new_client" RENAME TO "client";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
