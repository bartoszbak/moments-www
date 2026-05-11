import type { Metadata } from "next";

import { LegalPage, buildLegalMetadata } from "@/app/_components/legal-page";
import { legalDocuments } from "@/app/_lib/site-content";

const supportDocument = legalDocuments.support;

export const metadata: Metadata = buildLegalMetadata(supportDocument);

export default function SupportPage() {
  return <LegalPage document={supportDocument} />;
}
