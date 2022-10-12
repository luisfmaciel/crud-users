-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "birthDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "inactive" BOOLEAN NOT NULL DEFAULT false
);
