/*
  Warnings:

  - You are about to drop the column `Name` on the `Messages` table. All the data in the column will be lost.
  - Added the required column `name` to the `Messages` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Messages" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Messages" ("createdAt", "email", "id", "message", "phone") SELECT "createdAt", "email", "id", "message", "phone" FROM "Messages";
DROP TABLE "Messages";
ALTER TABLE "new_Messages" RENAME TO "Messages";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
