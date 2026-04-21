import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { siteConfig, type LegalDocument } from "@/app/_lib/site-content";

type LegalPageProps = {
  document: LegalDocument;
};

export function buildLegalMetadata(document: LegalDocument): Metadata {
  return {
    title: document.title,
    description: document.intro,
    openGraph: {
      title: `${document.title} | ${siteConfig.name}`,
      description: document.intro,
      url: `${siteConfig.siteUrl}/${document.slug}`,
      siteName: siteConfig.name,
    },
  };
}

function LegalBrandMark() {
  return (
    <Link
      href="/"
      className="flex w-[99px] flex-col items-center gap-2 text-black"
      aria-label="Moments home"
    >
      <Image
        src="/moments-icon-figma.png"
        alt="Moments app icon"
        width={1024}
        height={1024}
        sizes="80px"
        priority
        className="h-20 w-20 rounded-[24px] object-cover"
      />
      <span className="text-[17px] font-semibold leading-[17px] tracking-[0.34px]">
        Moments
      </span>
    </Link>
  );
}

function LegalContent({ document, centeredTitle = false }: LegalPageProps & {
  centeredTitle?: boolean;
}) {
  return (
    <div
      className="flex w-full flex-col items-start gap-6 text-black"
      style={{ fontFeatureSettings: "'ss02' 1, 'liga' 0" }}
    >
      <h1
        className={`w-full font-semibold text-[42px] leading-[50px] ${centeredTitle ? "text-center text-[23px]" : ""}`}
        style={{ fontFeatureSettings: "'liga' 0" }}
      >
        {document.title}
      </h1>

      <p className="w-full text-[17px] font-semibold leading-[25px] tracking-[0.34px]">
        {document.intro}
      </p>

      {document.sections.map((section) => (
        <section key={section.heading} className="flex w-full flex-col items-start gap-3">
          <h2 className="w-full text-[20px] font-semibold leading-[23px] tracking-[0.4px]">
            {section.heading}
          </h2>
          <div className="flex w-full flex-col gap-3">
            {section.body.map((paragraph) => (
              <p
                key={paragraph}
                className="w-full text-[17px] font-normal leading-[25px] tracking-[0.34px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export function LegalPage({ document }: LegalPageProps) {
  return (
    <div className="bg-white text-black">
      <div className="hidden xl:block">
        <div className="mx-auto flex min-h-screen w-full max-w-[1440px]">
          <section className="flex min-h-screen flex-1 flex-col items-start overflow-hidden p-[42px]">
            <LegalBrandMark />
          </section>

          <section className="flex min-h-screen flex-1 flex-col items-start overflow-hidden p-[42px]">
            <div className="w-full">
              <LegalContent document={document} />
            </div>
          </section>
        </div>
      </div>

      <div className="xl:hidden">
        <div className="mx-auto flex min-h-screen w-full max-w-[402px] flex-col items-center gap-8 overflow-hidden p-8">
          <LegalBrandMark />
          <div className="w-full">
            <LegalContent document={document} centeredTitle />
          </div>
        </div>
      </div>
    </div>
  );
}
