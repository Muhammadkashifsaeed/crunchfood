import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";

const leadSchema = z.object({
  kind: z.enum(["contact", "sample"]),
  name: z.string().trim().min(1).max(200),
  company: z.string().trim().max(200).optional().nullable(),
  role: z.string().trim().max(80).optional().nullable(),
  email: z
    .string()
    .trim()
    .min(3)
    .max(255)
    .regex(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, "Enter a valid email"),
  phone: z.string().trim().max(60).optional().nullable(),
  country: z.string().trim().max(60).optional().nullable(),
  operator: z.string().trim().max(120).optional().nullable(),
  locations: z.string().trim().max(120).optional().nullable(),
  volume: z.string().trim().max(60).optional().nullable(),
  products: z.array(z.string()).optional().nullable(),
  shipTo: z.string().trim().max(240).optional().nullable(),
  message: z.string().trim().max(4000).optional().nullable(),
  sourcePath: z.string().trim().max(500).optional().nullable(),
  userAgent: z.string().trim().max(500).optional().nullable(),
  raw: z.unknown().optional(),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please fix the highlighted fields." }, { status: 400 });
  }
  const d = parsed.data;

  const urlCount = (`${d.message ?? ""} ${d.name}`.match(/https?:\/\//gi) ?? []).length;
  if (urlCount > 5) {
    return NextResponse.json({ error: "Submission flagged as spam" }, { status: 400 });
  }

  const recentCount = await prisma.lead.count({
    where: {
      email: { equals: d.email, mode: "insensitive" },
      createdAt: { gt: new Date(Date.now() - 60 * 60 * 1000) },
    },
  });
  if (recentCount >= 5) {
    return NextResponse.json(
      { error: "Too many submissions — please try again later" },
      { status: 429 },
    );
  }

  await prisma.lead.create({
    data: {
      kind: d.kind,
      name: d.name,
      company: d.company ?? null,
      role: d.role ?? null,
      email: d.email,
      phone: d.phone ?? null,
      country: d.country ?? null,
      operator: d.operator ?? null,
      locations: d.locations ?? null,
      volume: d.volume ?? null,
      products: d.products ?? [],
      shipTo: d.shipTo ?? null,
      message: d.message ?? null,
      sourcePath: d.sourcePath ?? null,
      userAgent: d.userAgent ?? null,
      raw: d.raw === undefined ? undefined : JSON.parse(JSON.stringify(d.raw)),
    },
  });

  return NextResponse.json({ ok: true });
}
