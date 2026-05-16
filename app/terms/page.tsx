import type { Metadata } from "next";

import { LegalPage, buildLegalMetadata } from "@/app/_components/legal-page";
import { legalDocuments } from "@/app/_lib/site-content";

const termsDocument = legalDocuments.terms;

export const metadata: Metadata = buildLegalMetadata(termsDocument);

export default function TermsPage() {
  return <LegalPage document={termsDocument} />;
}
