export const siteConfig = {
  name: "Moments",
  appStoreUrl: "https://apps.apple.com",
  siteUrl: "https://moments.local",
  description:
    "Count down to what matters, reflect on the past, and manifest what comes next with a calm, tactile iOS experience.",
} as const;

export type LegalSection = {
  heading: string;
  body: string[];
};

export type LegalDocument = {
  slug: "privacy" | "terms";
  title: string;
  effectiveDate: string;
  intro: string;
  sections: LegalSection[];
};

export const legalDocuments: Record<LegalDocument["slug"], LegalDocument> = {
  privacy: {
    slug: "privacy",
    title: "Privacy Policy",
    effectiveDate: "Effective date: April 21, 2026",
    intro:
      "This Privacy Policy explains how Moments handles information when you use the app, the widget extension, optional premium features, AI-powered writing tools, and this website. The product is designed around device-local storage first, with a limited set of third-party services used only where they are needed for purchases, AI generation, and platform integrations.",
    sections: [
      {
        heading: "Quick summary",
        body: [
          "Moments does not require an account to use the app.",
          "Most moment data, preferences, images, and widget settings are stored locally on your device and inside device-local app containers.",
          "If you choose AI features, relevant prompt content and generated output are processed through OpenRouter and may be routed to upstream model providers.",
          "If you purchase Moments Plus, Apple and RevenueCat process subscription, transaction, and entitlement information.",
          "Moments does not sell your personal information and is not designed for cross-context behavioral advertising.",
        ],
      },
      {
        heading: "Information you create in the app",
        body: [
          "Moments can store the information you enter directly, including moment titles, optional descriptions, target dates, manifestation mode, symbols, chosen colors, widget preferences, reminder settings, and saved AI-generated reflections or manifestation text.",
          "This information is primarily stored locally on your device using the app's local persistence and storage layers.",
          "If you choose a photo background, the selected image is stored locally for use by the app and, where applicable, the widget extension.",
        ],
      },
      {
        heading: "Widget, calendar, and notification data",
        body: [
          "If you use the widget, Moments stores a subset of moment information in an Apple App Group container so the widget extension can render your selected content locally on the same device.",
          "If you enable calendar sync, the app may read available writable calendars, let you pick a calendar, create or update all-day events for eligible moments, and store the identifier of events it created so those events can later be updated or removed.",
          "If you enable manifestation reminders, the app may request notification permission, check notification authorization status, and schedule recurring local notifications using the cadence and time you selected.",
        ],
      },
      {
        heading: "AI feature data",
        body: [
          "If you use AI reflections or manifestation features, Moments sends the prompt details needed to generate that result through its AI service stack. Depending on the feature, that can include your moment title, your optional description, date context, whether the moment is in the past or future, and relative timing such as days until or days since.",
          "The AI-generated output is returned to the app and may be stored with the moment on your device so it can be reopened later without generating the same response again.",
          "You should avoid submitting highly sensitive information if you are not comfortable sharing it with external AI service providers.",
        ],
      },
      {
        heading: "Subscription and purchase data",
        body: [
          "If you view or purchase Moments Plus, Apple processes billing and payment information through your App Store account.",
          "RevenueCat may process subscription status, anonymous app user identifiers, entitlement state, package availability, transaction state, and restore status so the app can determine whether premium features are unlocked.",
          "Moments does not collect your full payment card number. Payments are handled by Apple.",
        ],
      },
      {
        heading: "How information is used",
        body: [
          "Moments uses information to provide the core app experience, save and display your moments, show widgets you configure, maintain synced calendar items, schedule local reminders, restore purchases, verify premium access, and generate AI output when you request it.",
          "Technical and transaction metadata may also be used to operate the service, diagnose issues, improve reliability, investigate abuse, and understand whether premium or AI-powered features are functioning correctly.",
        ],
      },
      {
        heading: "Third-party services",
        body: [
          "Apple provides system services that Moments relies on for App Store purchases, calendar permissions, photo selection, widgets, and notification delivery.",
          "RevenueCat is used for subscription offerings, entitlement state, and purchase or restore flows.",
          "OpenRouter is used for AI request routing, and your prompts may be processed by the model provider selected for the request.",
          "Your use of features powered by those providers may also be subject to their own terms and privacy policies.",
        ],
      },
      {
        heading: "Data retention",
        body: [
          "Because Moments is primarily device-local, most app content remains on your device until you edit or delete it, clear app data, or remove the app.",
          "Calendar event identifiers, reminder settings, and app preferences are generally retained for as long as they are needed to support enabled features.",
          "Third-party providers may retain data they process according to their own legal obligations, retention schedules, and policies.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          "You can decline photo, notification, or calendar permissions, disable reminders or calendar sync, delete moments inside the app, remove the app from your device, and manage subscriptions through Apple.",
          "Because much of the app is device-local, deleting a moment or removing the app may delete a substantial portion of your local data, but it does not automatically delete information already processed by Apple, RevenueCat, OpenRouter, or upstream model providers.",
        ],
      },
      {
        heading: "International processing and legal bases",
        body: [
          "Some service providers used by Moments may process data outside your country, including in jurisdictions where privacy laws differ from those where you live.",
          "Where applicable, Moments generally relies on performance of a contract, your consent, legitimate interests, and compliance with legal obligations as the legal bases for processing described in this policy.",
        ],
      },
      {
        heading: "Regional privacy rights",
        body: [
          "Depending on where you live, you may have rights to request access to personal information, request deletion, correct inaccurate information, withdraw consent in certain situations, or object to specific forms of processing.",
          "Where those rights apply, requests will be evaluated in line with applicable law and the technical reality that much of Moments data is stored locally on your device rather than in a central user account system.",
        ],
      },
      {
        heading: "Children's privacy, security, and changes",
        body: [
          "Moments is not directed to children who are too young to provide valid consent under applicable law, and the developer does not knowingly collect personal information from children in violation of applicable law.",
          "Reasonable administrative, technical, and organizational measures are used to protect information, but no storage or transmission method can be guaranteed completely secure.",
          "This policy may be updated as the product evolves. Material changes will be reflected on this page with a revised effective date.",
        ],
      },
      {
        heading: "Contact",
        body: [
          "Privacy questions, access requests, and deletion requests should be directed to the support contact listed in the Moments App Store listing or inside the app when that contact is available.",
          "If a dedicated privacy email or business address is later published for Moments, that contact information should replace this temporary support-channel reference.",
        ],
      },
    ],
  },

  terms: {
    slug: "terms",
    title: "Terms of Use",
    effectiveDate: "Effective date: April 21, 2026",
    intro:
      "These Terms of Use govern your access to the Moments app, widgets, premium features, AI-assisted writing tools, and this website. By using Moments, you agree to use the service responsibly, comply with applicable law, and accept the rules described in this document.",
    sections: [
      {
        heading: "Using Moments",
        body: [
          "Moments is intended for personal use to track upcoming events, revisit past milestones, and create future manifestations.",
          "You are responsible for the content you enter into the app and for how you use reminders, widgets, calendar sync, and AI-generated output.",
          "You must use the service in compliance with applicable law and in a manner that does not interfere with the experience of other users, third-party services, or platform providers.",
        ],
      },
      {
        heading: "Apple platform terms",
        body: [
          "If you access Moments through Apple's platforms, your use is also subject to the applicable Apple terms governing the App Store, purchases, and your device.",
          "Where required for subscription products offered through the App Store, Apple's standard End User License Agreement may apply alongside these terms.",
          "If there is a conflict between these terms and any non-waivable Apple requirement, the non-waivable Apple requirement controls to that extent.",
        ],
      },
      {
        heading: "Premium features and billing",
        body: [
          "Some features may require an active Moments Plus subscription.",
          "Purchases, renewals, cancellations, refunds, free trials, and billing disputes are handled by Apple under your App Store account terms and Apple's billing systems.",
          "Subscription entitlement state, available offerings, package metadata, and restore flows may be managed through RevenueCat so the app can determine access to premium features.",
          "Pricing and package availability may change over time, and some premium capabilities may be limited or unavailable if subscription infrastructure is not configured or if no offering is currently available.",
        ],
      },
      {
        heading: "AI-generated content",
        body: [
          "AI reflections and manifestation copy are generated automatically and may be incomplete, inaccurate, delayed, biased, or unsuitable for your circumstances.",
          "Moments does not provide medical, mental health, legal, therapeutic, investment, or financial advice, and AI output should not be treated as a substitute for qualified professional guidance.",
          "You are solely responsible for reviewing and deciding whether to rely on AI-generated content before acting on it.",
        ],
      },
      {
        heading: "Permissions and device integrations",
        body: [
          "Certain features depend on permissions or device-level integrations such as notifications, calendars, photo selection, widgets, and subscription APIs.",
          "If you deny or revoke required permissions, some parts of Moments may not function as intended.",
          "You remain responsible for reviewing calendar entries, notifications, and other device-side actions created from your data.",
        ],
      },
      {
        heading: "Acceptable use",
        body: [
          "You may not use Moments in a way that violates applicable law, infringes others' rights, interferes with the service, or attempts to reverse engineer protected systems beyond rights granted by law.",
          "You may not use the product to generate, store, or distribute unlawful, abusive, harassing, fraudulent, or otherwise harmful content.",
          "You may not attempt to bypass feature limits, entitlement checks, subscription controls, or security-related restrictions except where such activity is expressly permitted by applicable law.",
        ],
      },
      {
        heading: "Intellectual property and feedback",
        body: [
          "The Moments app, website, branding, interface, and related materials are protected by applicable intellectual property laws.",
          "Except for rights expressly granted to you, no license or ownership right is transferred to you by your use of the service.",
          "If you provide feedback or suggestions, the developer may use them without restriction or obligation unless applicable law requires otherwise.",
        ],
      },
      {
        heading: "Availability and changes",
        body: [
          "Features, pricing, usage limits, supported integrations, design, and availability may change over time, including changes to free limits, premium gating, or AI behavior.",
          "The service may be modified, suspended, or discontinued in whole or in part without guaranteeing uninterrupted availability, backward compatibility, or continued support for any particular feature.",
        ],
      },
      {
        heading: "Third-party platforms and providers",
        body: [
          "Certain parts of Moments depend on third-party platforms or infrastructure, including Apple, RevenueCat, OpenRouter, and any upstream AI model providers involved in processing a request.",
          "The availability, accuracy, or continued support of those services is outside the developer's direct control, and some Moments features may degrade or become unavailable if those providers change their systems or terms.",
        ],
      },
      {
        heading: "Warranty disclaimer and limitation of liability",
        body: [
          "Moments is provided on an as-is and as-available basis to the maximum extent permitted by law, without guarantees that the service will always be accurate, secure, uninterrupted, or error-free.",
          "To the maximum extent permitted by law, the developer is not liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of data, business, goodwill, or anticipated savings arising from or related to your use of the service.",
          "Nothing in these terms limits liability that cannot lawfully be limited under applicable law.",
        ],
      },
      {
        heading: "Termination, governing rules, and revisions",
        body: [
          "Access to some or all of the service may be suspended or terminated if you violate these terms, misuse the product, or create risk for the developer, users, or service providers.",
          "To the extent permitted by law, these terms are governed by the laws that apply in the developer's place of business unless mandatory consumer protection rules require a different result.",
          "These terms may be updated from time to time. Continued use of Moments after updated terms are posted means you accept the revised terms to the extent permitted by law.",
        ],
      },
      {
        heading: "Contact",
        body: [
          "Questions about these terms should be directed to the support contact made available in the Moments App Store listing or inside the app.",
          "If a dedicated legal or support contact is later published for Moments, that contact information should replace this temporary support-channel reference.",
        ],
      },
    ],
  },
};
