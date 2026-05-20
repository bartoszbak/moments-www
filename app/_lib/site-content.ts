export const siteConfig = {
  name: "Moments",
  appStoreUrl: "https://apps.apple.com",
  siteUrl: "https://savemoments.app",
  description:
    "Moments is a calm, tactile iPhone app for counting down to what matters, reflecting on the past, and manifesting what's next. Private by design. Free to start.",
} as const;

export type LegalTextBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    };

export type LegalSection = {
  heading: string;
  body: LegalTextBlock[];
};

export type LegalDocument = {
  slug: "privacy" | "terms" | "support";
  title: string;
  effectiveDate: string;
  metaDescription: string;
  intro: string[];
  sections: LegalSection[];
};

export const legalDocuments: Record<LegalDocument["slug"], LegalDocument> = {
  privacy: {
    slug: "privacy",
    title: "Privacy Policy",
    effectiveDate: "Effective date: May 3, 2026",
    metaDescription:
      "Moments is designed to keep your countdowns, reflections, and manifestations on your device. Read the full privacy policy.",
    intro: [
      "Moments is designed to keep your personal countdowns, reflections, manifestations, photos, widget settings, and preferences primarily on your device. You do not need to create an account to use the app.",
      "This policy explains what information is processed when you use Moments, including optional AI features, subscriptions, widgets, calendar sync, notifications, photo features, and this website.",
    ],
    sections: [
      {
        heading: "Information stored on your device",
        body: [
          {
            type: "paragraph",
            text: "Most content you create in Moments is stored locally on your device using the app's local database and storage. This may include moment titles, descriptions, dates, manifestation status, colors, symbols, widget preferences, reminder settings, calendar event identifiers, selected photo paths, and saved AI-generated text.",
          },
          {
            type: "paragraph",
            text: "If you use the widget, Moments stores a limited copy of widget data in an Apple App Group container so the widget extension can display your selected moments on the same device.",
          },
        ],
      },
      {
        heading: "Photos, calendar, and notifications",
        body: [
          {
            type: "paragraph",
            text: "If you choose a photo background, Moments uses Apple's photo picker or photo library permission so you can select an image. Selected images are stored locally for display in the app and widgets. Moments does not send selected photo backgrounds to its AI provider.",
          },
          {
            type: "paragraph",
            text: "If you save bundled bonus or widget backgrounds to Photos, Moments requests add-only Photos access and writes those images to your photo library.",
          },
          {
            type: "paragraph",
            text: "If you enable calendar sync, Moments requests calendar access, reads writable calendars so you can choose one, and creates, updates, or deletes all-day calendar events for eligible dated moments.",
          },
          {
            type: "paragraph",
            text: "If you enable manifestation reminders, Moments schedules local notifications on your device. Notification content may include your moment title and saved guidance text.",
          },
        ],
      },
      {
        heading: "AI features",
        body: [
          {
            type: "paragraph",
            text: "AI-assisted reflections and manifestations are optional. When you use them, Moments sends the text and context needed for generation to OpenRouter, which may route the request to an upstream AI model provider.",
          },
          {
            type: "list",
            items: [
              "Moment title",
              "Optional description or context",
              "Moment date or date-relative context",
              "Whether the moment is past, upcoming, or a future manifestation",
              "Previous generated manifestation text when you regenerate a manifestation",
            ],
          },
          {
            type: "paragraph",
            text: "The generated response is returned to the app and may be saved locally with the moment. Do not submit information to AI features that you do not want processed by third-party AI providers.",
          },
        ],
      },
      {
        heading: "Subscriptions",
        body: [
          {
            type: "paragraph",
            text: "If you view, purchase, or restore Moments Plus, Apple processes payments through your App Store account. Moments uses RevenueCat to manage subscription offerings, entitlement status, purchase state, restore flows, anonymous app user identifiers, and related purchase configuration.",
          },
          {
            type: "paragraph",
            text: "Moments does not collect your full payment card number. Payment, renewal, cancellation, tax, refund, and billing information is handled by Apple.",
          },
        ],
      },
      {
        heading: "Website",
        body: [
          {
            type: "paragraph",
            text: "This website is a simple marketing and policy site. Moments does not intentionally use the website for cross-site tracking or behavioral advertising. The hosting provider may process basic technical logs such as IP address, user agent, request time, and pages requested to deliver and secure the site.",
          },
        ],
      },
      {
        heading: "Sharing",
        body: [
          {
            type: "paragraph",
            text: "Moments does not sell your personal information and does not use your information for cross-context behavioral advertising.",
          },
          {
            type: "paragraph",
            text: "Information is shared only as needed with service providers that operate app features, including Apple, RevenueCat, OpenRouter, and upstream AI model providers. These providers process information under their own terms and privacy policies and are expected to protect information consistently with applicable law.",
          },
          {
            type: "paragraph",
            text: "Information may also be disclosed if required by law or if reasonably necessary to protect rights, safety, security, or property.",
          },
        ],
      },
      {
        heading: "Retention and deletion",
        body: [
          {
            type: "paragraph",
            text: "Local app content generally remains on your device until you edit or delete it, clear app data, or remove the app. Deleting a moment or removing Moments may delete much of the local data stored by the app.",
          },
          {
            type: "paragraph",
            text: "Removing the app or deleting local content does not automatically delete information already processed by Apple, RevenueCat, OpenRouter, hosting providers, or upstream AI providers. Those providers retain data according to their own policies and legal obligations.",
          },
        ],
      },
      {
        heading: "Your choices",
        body: [
          {
            type: "list",
            items: [
              "You can use Moments without creating an account.",
              "You can decline or revoke Photos, Calendar, or Notification permissions in iOS Settings.",
              "You can disable calendar sync and manifestation reminders in the app.",
              "You can delete moments inside the app.",
              "You can manage or cancel subscriptions through your Apple Account subscription settings.",
            ],
          },
        ],
      },
      {
        heading: "Children, security, and changes",
        body: [
          {
            type: "paragraph",
            text: "Moments is not directed to children who are too young to provide valid consent under applicable law, and Moments does not knowingly collect personal information from children in violation of applicable law.",
          },
          {
            type: "paragraph",
            text: "Reasonable technical and organizational measures are used to protect information, but no transmission or storage method can be guaranteed completely secure.",
          },
          {
            type: "paragraph",
            text: "This policy may be updated as Moments changes. Updates will be posted on this page with a revised effective date.",
          },
        ],
      },
      {
        heading: "Contact",
        body: [
          {
            type: "paragraph",
            text: "Privacy questions and requests should be sent through the support contact provided in the Moments App Store listing or inside the app when available.",
          },
        ],
      },
    ],
  },
  terms: {
    slug: "terms",
    title: "Terms of Use",
    effectiveDate: "Effective date: May 16, 2026",
    metaDescription:
      "Terms of Use for Moments — the iPhone app for countdowns, reflections, and manifestations. Read the full agreement before you use the app.",
    intro: [
      "These Terms of Use govern your access to and use of Moments' website, support materials, app features, premium features, AI-assisted features, related content, and services. Moments is owned and operated by Bart Bak.",
      "If you download Moments from the Apple App Store and no custom end user license agreement is provided in App Store Connect, your license to use the iOS app is governed by Apple's standard Licensed Application End User License Agreement. These Terms apply separately to Moments' features, content, purchases, services, website, and support materials, except where Apple's standard EULA or Apple's terms control.",
      "By accessing, purchasing, subscribing to, or using Moments' website, app features, content, or services, you agree to these Terms. If you do not agree, do not use Moments.",
    ],
    sections: [
      {
        heading: "Eligibility",
        body: [
          {
            type: "paragraph",
            text: "You may use Moments only if you can legally enter into a binding agreement under the laws that apply to you. If you use the app on behalf of another person or organization, you confirm that you have authority to bind them to these Terms.",
          },
          {
            type: "paragraph",
            text: "Moments is not intended for children under 13 years old, or any higher minimum age required in your country. You must not use Moments if you are not old enough to consent to these Terms and to the processing of your data under our Privacy Policy.",
          },
        ],
      },
      {
        heading: "What Moments provides",
        body: [
          {
            type: "paragraph",
            text: "Moments helps you create, customize, and track personal moments, countdowns, dates, reminders, manifestations, widgets, reflections, and related content. Depending on your settings and purchases, Moments may include countdowns, date-based tracking, widgets, visual customization, calendar-related features, local notifications, AI-assisted writing, premium themes, icons, backgrounds, and subscription or lifetime purchase features.",
          },
          {
            type: "paragraph",
            text: "Moments is a personal productivity and reflection tool. It is not a medical, psychological, financial, legal, therapeutic, religious, or professional advisory service.",
          },
        ],
      },
      {
        heading: "Your content and conduct",
        body: [
          {
            type: "paragraph",
            text: "You are responsible for the moments, text, dates, images, symbols, reminders, and other content you create, enter, upload, save, or generate in Moments. You are also responsible for choices you make based on the app, including choices based on AI-generated or suggested text.",
          },
          {
            type: "paragraph",
            text: "Moments may help you organize intentions and reminders, but it does not guarantee outcomes, personal results, behavior change, emotional improvement, manifestation results, or any specific life event.",
          },
          {
            type: "list",
            items: [
              "You must not use Moments to violate any law or third-party right.",
              "You must not create, store, share, or generate abusive, harassing, defamatory, threatening, hateful, discriminatory, sexually exploitative, invasive, or harmful content.",
              "You must not use Moments to distribute malware or spam, interfere with the app, mislead others, impersonate anyone, defraud anyone, or manipulate others.",
              "You must not infringe intellectual property, privacy, publicity, contractual, or other rights.",
            ],
          },
          {
            type: "paragraph",
            text: "We may restrict, suspend, or terminate access to Moments if we reasonably believe these Terms have been violated.",
          },
        ],
      },
      {
        heading: "AI-assisted features",
        body: [
          {
            type: "paragraph",
            text: "Moments may include AI-assisted features that generate, rewrite, summarize, suggest, or transform text based on your inputs and settings. AI output can be inaccurate, incomplete, repetitive, offensive, inappropriate, or unsuitable for your situation.",
          },
          {
            type: "paragraph",
            text: "You should review all AI-generated content before relying on it, saving it, sharing it, or using it. AI-generated content is provided for personal reflection and creative assistance only. It is not professional advice and should not be used as a substitute for medical, mental health, legal, financial, spiritual, or other professional guidance.",
          },
          {
            type: "paragraph",
            text: "We may change, limit, suspend, or discontinue AI features at any time, including to manage cost, abuse, availability, safety, performance, or legal requirements.",
          },
        ],
      },
      {
        heading: "Apple standard EULA and App Store terms",
        body: [
          {
            type: "paragraph",
            text: "For the Moments iOS app distributed through the Apple App Store, the app license is governed by Apple's standard Licensed Application End User License Agreement unless a separate custom EULA is provided in App Store Connect. The standard EULA is available at https://www.apple.com/legal/internet-services/itunes/dev/stdeula/.",
          },
          {
            type: "paragraph",
            text: "Your use of Moments through the App Store is also subject to Apple's applicable terms, including the Apple Media Services Terms. If these Terms conflict with Apple's standard EULA or Apple's applicable terms for the app license, App Store distribution, billing, refunds, or Apple services, Apple's terms control for those matters.",
          },
          {
            type: "paragraph",
            text: "You are responsible for maintaining a compatible device, operating system, internet connection, Apple ID, iCloud settings, notification permissions, calendar permissions, and any other platform settings required for Moments to function.",
          },
        ],
      },
      {
        heading: "Purchases, subscriptions, and lifetime access",
        body: [
          {
            type: "paragraph",
            text: "Moments may offer free features, paid features, auto-renewing subscriptions, and one-time lifetime purchases. Prices, trial availability, feature availability, and billing periods may vary by country, currency, promotion, App Store settings, tax treatment, and time.",
          },
          {
            type: "paragraph",
            text: "If you purchase a monthly or yearly subscription, payment is charged through your Apple ID at confirmation of purchase. Unless you cancel, your subscription automatically renews at the end of each billing period. You can manage or cancel subscriptions in your Apple ID account settings. Deleting Moments does not cancel a subscription.",
          },
          {
            type: "paragraph",
            text: "If we offer a free trial, discounted price, introductory offer, or promotional offer, the specific terms shown at purchase apply. After a trial or promotional period ends, your subscription may renew at the regular price unless you cancel before renewal.",
          },
          {
            type: "paragraph",
            text: "A lifetime purchase gives you access to the paid Moments features described at the time of purchase for as long as we continue to operate and support those features in the app. Lifetime means the commercial lifetime of the app or relevant feature, not your lifetime or our lifetime.",
          },
          {
            type: "paragraph",
            text: "Unless explicitly stated otherwise at purchase, lifetime access does not guarantee unlimited access to paid third-party services, AI usage, server-based features, future unrelated products, separate apps, or features that carry ongoing external costs.",
          },
          {
            type: "paragraph",
            text: "Purchases made through the Apple App Store are handled by Apple. We cannot directly issue App Store refunds. Refund requests must be submitted through Apple's refund process, unless applicable law requires otherwise.",
          },
        ],
      },
      {
        heading: "Feature availability and changes",
        body: [
          {
            type: "paragraph",
            text: "We may add, change, remove, rename, limit, or discontinue Moments features at any time. This includes free features, premium features, AI features, widget functionality, visual customization, App Store products, and integrations.",
          },
          {
            type: "paragraph",
            text: "Some features may depend on Apple services, iOS, WidgetKit, StoreKit, calendar permissions, notification permissions, network access, third-party APIs, or device capabilities. We are not responsible for interruptions, restrictions, delays, or failures caused by Apple, your device, your settings, your network, third-party providers, or events outside our reasonable control.",
          },
          {
            type: "paragraph",
            text: "We do not guarantee that widgets, notifications, calendar sync, reminders, background updates, or time-sensitive features will always appear, update, or fire at an exact time. Operating systems may delay, throttle, restrict, or suppress these features.",
          },
        ],
      },
      {
        heading: "Privacy",
        body: [
          {
            type: "paragraph",
            text: "Your use of Moments is also governed by our Privacy Policy. The Privacy Policy explains what data we collect, how we use it, and what choices you may have. If these Terms and the Privacy Policy conflict, the Privacy Policy controls only for privacy and data protection matters.",
          },
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          {
            type: "paragraph",
            text: "Moments, including its design, code, interface, brand, graphics, icons, animations, text, features, visual style, and other materials, is owned by us or our licensors and is protected by intellectual property laws.",
          },
          {
            type: "paragraph",
            text: "Subject to these Terms and, for the iOS app, Apple's standard EULA where applicable, you may use Moments for your own lawful personal use.",
          },
          {
            type: "list",
            items: [
              "You must not copy, modify, distribute, sell, lease, sublicense, or exploit Moments.",
              "You must not reverse engineer, decompile, or attempt to extract source code, except where law allows it.",
              "You must not remove copyright, trademark, or proprietary notices.",
              "You must not use Moments to build a competing product or service.",
              "You must not misuse our brand, screenshots, interface, icons, or marketing materials.",
              "You must not interfere with security, billing, entitlement checks, or access controls.",
            ],
          },
          {
            type: "paragraph",
            text: "You retain ownership of your content. You grant us the limited rights needed to operate Moments, provide features you request, process purchases, sync or display content where applicable, provide support, improve safety, and comply with law.",
          },
        ],
      },
      {
        heading: "Third-party services",
        body: [
          {
            type: "paragraph",
            text: "Moments may rely on third-party services, frameworks, APIs, analytics, purchase providers, AI providers, hosting providers, operating system features, or external links. Third-party services are governed by their own terms and policies.",
          },
          {
            type: "paragraph",
            text: "We are not responsible for third-party services, third-party content, external websites, platform outages, App Store decisions, payment processing issues, or changes made by third parties.",
          },
        ],
      },
      {
        heading: "No warranties",
        body: [
          {
            type: "paragraph",
            text: "To the maximum extent permitted by law, Moments is provided as is and as available without warranties of any kind, whether express, implied, statutory, or otherwise.",
          },
          {
            type: "list",
            items: [
              "We do not warrant that Moments will be uninterrupted, secure, accurate, error-free, or always available.",
              "We do not warrant that content, AI output, countdowns, reminders, widgets, notifications, or calendar-related features will be accurate or timely.",
              "We do not warrant that defects will be corrected, that Moments will meet your expectations, or that Moments will produce any particular outcome.",
              "We do not warrant that data will never be lost, corrupted, delayed, or unavailable.",
            ],
          },
          {
            type: "paragraph",
            text: "You are responsible for keeping your own backups of important information.",
          },
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          {
            type: "paragraph",
            text: "To the maximum extent permitted by law, we will not be liable for indirect, incidental, special, consequential, exemplary, punitive, or enhanced damages, including loss of profits, loss of data, loss of goodwill, emotional distress, missed events, missed reminders, device issues, business interruption, or loss arising from AI-generated content.",
          },
          {
            type: "paragraph",
            text: "To the maximum extent permitted by law, our total liability for any claim related to Moments or these Terms will not exceed the greater of the amount you paid us through the app for the paid feature giving rise to the claim during the 12 months before the claim arose or CHF 50.",
          },
          {
            type: "paragraph",
            text: "Some jurisdictions do not allow certain warranty exclusions or liability limits. In those jurisdictions, the limits apply only to the maximum extent permitted by law. Nothing in these Terms excludes liability that cannot legally be excluded, such as liability for intentional misconduct, gross negligence where not excludable, or rights you may have under mandatory consumer protection laws.",
          },
        ],
      },
      {
        heading: "Indemnity",
        body: [
          {
            type: "paragraph",
            text: "To the maximum extent permitted by law, you agree to defend, indemnify, and hold us harmless from claims, losses, liabilities, damages, costs, and expenses, including reasonable legal fees, arising from your use or misuse of Moments, your content, your violation of these Terms, your violation of law or third-party rights, or your reliance on AI-generated content or app output in a way that causes harm.",
          },
          {
            type: "paragraph",
            text: "This section does not limit any rights you may have under mandatory consumer protection laws.",
          },
        ],
      },
      {
        heading: "Termination",
        body: [
          {
            type: "paragraph",
            text: "You may stop using Moments at any time. We may suspend, restrict, or terminate your access to Moments if you violate these Terms, your use creates legal, security, technical, or business risk, required third-party services become unavailable, we discontinue the app or relevant features, or we are required to do so by law, Apple, a court, or another authority.",
          },
          {
            type: "paragraph",
            text: "Termination does not automatically entitle you to a refund. Refunds for App Store purchases are handled by Apple unless applicable law provides otherwise.",
          },
          {
            type: "paragraph",
            text: "Sections intended to survive termination will survive, including intellectual property, payment obligations, disclaimers, liability limits, indemnity, dispute terms, and any accrued rights.",
          },
        ],
      },
      {
        heading: "Changes to these Terms",
        body: [
          {
            type: "paragraph",
            text: "We may update these Terms from time to time. If changes are material, we will take reasonable steps to notify you, such as by updating the effective date, showing notice in the app, or using another appropriate method.",
          },
          {
            type: "paragraph",
            text: "Your continued use of Moments after updated Terms become effective means you accept the updated Terms. If you do not agree, you must stop using Moments and cancel any subscription through your Apple ID settings.",
          },
        ],
      },
      {
        heading: "Governing law and disputes",
        body: [
          {
            type: "paragraph",
            text: "These Terms are governed by the laws of Switzerland, excluding conflict-of-law rules, unless mandatory consumer protection laws in your country require otherwise.",
          },
          {
            type: "paragraph",
            text: "If you are a consumer, you may have the right to bring claims in your country of residence under mandatory local law. Nothing in these Terms limits rights that cannot be waived under applicable consumer law.",
          },
          {
            type: "paragraph",
            text: "Before starting formal proceedings, you agree to contact us and try to resolve the issue informally. We will try to do the same.",
          },
        ],
      },
      {
        heading: "Entire agreement",
        body: [
          {
            type: "paragraph",
            text: "These Terms, together with the Privacy Policy and any purchase terms shown at the point of sale, form the entire agreement between you and us regarding Moments' website, support materials, app features, content, purchases, and services, except for the iOS app license governed by Apple's standard EULA where applicable.",
          },
          {
            type: "paragraph",
            text: "If any part of these Terms is found unenforceable, the remaining parts remain in effect. Our failure to enforce a provision is not a waiver of our right to enforce it later.",
          },
        ],
      },
      {
        heading: "Contact",
        body: [
          {
            type: "paragraph",
            text: "Questions about these Terms should be sent through the support contact provided in the Moments App Store listing or inside the app when available.",
          },
        ],
      },
    ],
  },
  support: {
    slug: "support",
    title: "Support",
    effectiveDate: "Effective date: May 11, 2026",
    metaDescription:
      "Need help with Moments? Get in touch through the App Store listing or in-app contact.",
    intro: [
      "Need help with Moments? We're here to make sure your countdowns, reflections, and manifestations keep working the way you expect.",
    ],
    sections: [
      {
        heading: "Getting in touch",
        body: [
          {
            type: "paragraph",
            text: "Support requests should be sent through the support contact provided in the Moments App Store listing or inside the app when available.",
          },
        ],
      },
    ],
  },
};
