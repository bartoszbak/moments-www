export const siteConfig = {
  name: "Moments",
  appStoreUrl: "https://apps.apple.com",
  siteUrl: "https://moments.local",
  description:
    "Count down to what matters, reflect on the past, and manifest what comes next with a calm, tactile iOS experience.",
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
  slug: "privacy";
  title: string;
  effectiveDate: string;
  intro: string[];
  sections: LegalSection[];
};

export const legalDocuments: Record<LegalDocument["slug"], LegalDocument> = {
  privacy: {
    slug: "privacy",
    title: "Privacy Policy",
    effectiveDate: "Effective date: May 3, 2026",
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
};
