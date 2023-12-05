-- CreateTable
CREATE TABLE "Texturepacks" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "thumbnail" TEXT[],

    CONSTRAINT "Texturepacks_pkey" PRIMARY KEY ("id")
);
