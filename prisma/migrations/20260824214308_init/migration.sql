-- CreateTable
CREATE TABLE "leads" (
    "id" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "company" TEXT,
    "role" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "country" TEXT,
    "operator" TEXT,
    "locations" TEXT,
    "volume" TEXT,
    "products" TEXT[],
    "ship_to" TEXT,
    "message" TEXT,
    "source_path" TEXT,
    "user_agent" TEXT,
    "raw" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "leads_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "leads_created_at_idx" ON "leads"("created_at");
