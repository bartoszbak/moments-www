import type { Metadata } from "next";

import { LegalPage, buildLegalMetadata } from "@/app/_components/legal-page";
import { legalDocuments } from "@/app/_lib/site-content";

const privacyDocument = legalDocuments.privacy;

export const metadata: Metadata = buildLegalMetadata(privacyDocument);

export default function PrivacyPage() {
  return <LegalPage document={privacyDocument} />;
}
