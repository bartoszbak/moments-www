import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { siteConfig, type LegalDocument } from "@/app/_lib/site-content";

type LegalPageProps = {
  document: LegalDocument;
};

export function buildLegalMetadata(document: LegalDocument): Metadata {
  const description = document.intro.join(" ");

  return {
    title: document.title,
    description,
    openGraph: {
      title: `${document.title} | ${siteConfig.name}`,
      description,
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
      <span className="text-[17px] font-semibold leading-[17px]">
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

      <p className="w-full text-[17px] font-semibold leading-[25px] text-[#6f777a]">
        {document.effectiveDate}
      </p>

      {document.intro.map((paragraph) => (
        <p key={paragraph} className="w-full text-[17px] font-semibold leading-[25px]">
          {paragraph}
        </p>
      ))}

      {document.sections.map((section) => (
        <section key={section.heading} className="flex w-full flex-col items-start gap-3">
          <h2 className="w-full text-[20px] font-semibold leading-[23px]">
            {section.heading}
          </h2>
          <div className="flex w-full flex-col gap-3">
            {section.body.map((block, blockIndex) => {
              if (block.type === "list") {
                return (
                  <ul
                    key={`${section.heading}-${blockIndex}`}
                    className="flex w-full list-disc flex-col gap-2 pl-5 text-[17px] font-normal leading-[25px]"
                  >
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }

              return (
                <p
                  key={`${section.heading}-${blockIndex}`}
                  className="w-full text-[17px] font-normal leading-[25px]"
                >
                  {block.text}
                </p>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

export function LegalPage({ document }: LegalPageProps) {
  return (
    <div className="bg-white text-black">
      <div className="hidden lg:block">
        <div className="mx-auto flex min-h-screen w-full" style={{ maxWidth: 'var(--layout-max-width)' }}>
          <section className="flex min-h-screen flex-1 flex-col items-start p-[42px]">
            <div className="sticky top-[42px]">
              <LegalBrandMark />
            </div>
          </section>

          <section className="flex min-h-screen flex-1 flex-col items-start overflow-hidden p-[42px]">
            <div className="w-full">
              <LegalContent document={document} />
            </div>
          </section>
        </div>
      </div>

      <div className="lg:hidden">
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
