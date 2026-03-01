import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_PUBLIC_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [

      // ── Global Settings ──────────────────────────────────────────
      {
        name: "settings",
        label: "Global Settings",
        path: "src/content/global",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        match: { include: "settings" },
        fields: [
          { name: "email", label: "Email", type: "string" },
          { name: "linkedinUrl", label: "LinkedIn URL", type: "string" },
          { name: "twitterUrl", label: "Twitter / X URL", type: "string" },
          { name: "twitterHandle", label: "Twitter Handle (e.g. @ahmaddfaroooq)", type: "string" },
          {
            name: "stats",
            label: "Hero Stats",
            type: "object",
            fields: [
              { name: "brandsCount", label: "Brands Count (e.g. 20)", type: "string" },
              { name: "revenueLabel", label: "Revenue Label (e.g. 3×)", type: "string" },
              { name: "yearsInField", label: "Years in Field (e.g. 4 yrs)", type: "string" },
            ],
          },
          {
            name: "clients",
            label: "Selected Clients",
            type: "object",
            list: true,
            fields: [{ name: "name", label: "Client Name", type: "string" }],
          },
        ],
      },

      // ── Homepage ──────────────────────────────────────────────────
      {
        name: "home",
        label: "Homepage",
        path: "src/content/pages",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        match: { include: "home" },
        fields: [
          { name: "heroLabel", label: "Hero Label", type: "string" },
          { name: "heroTitle", label: "Hero Title", type: "string" },
          { name: "heroTagline", label: "Hero Tagline (quote)", type: "string" },
          { name: "heroCTA1Text", label: "Primary CTA Text", type: "string" },
          { name: "heroCTA2Text", label: "Secondary CTA Text", type: "string" },
          { name: "servicesHeadline", label: "Services Section Headline", type: "string" },
          { name: "casesHeadline", label: "Case Studies Section Headline", type: "string" },
          { name: "skillsHeadline", label: "Skills Section Headline", type: "string" },
          { name: "ctaHeadline", label: "CTA Band Headline", type: "string" },
          { name: "ctaSubtext", label: "CTA Band Subtext", type: "string" },
          {
            name: "services",
            label: "Services",
            type: "object",
            list: true,
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "description", label: "Description", type: "string" },
              { name: "link", label: "Link (e.g. /growth)", type: "string" },
            ],
          },
          {
            name: "skills",
            label: "Skills",
            type: "object",
            list: true,
            fields: [{ name: "name", label: "Skill Name", type: "string" }],
          },
        ],
      },

      // ── Behind the Build ─────────────────────────────────────────
      {
        name: "about",
        label: "Behind the Build",
        path: "src/content/pages",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        match: { include: "behind-the-build" },
        fields: [
          { name: "heroTitle", label: "Hero Title", type: "string" },
          { name: "heroDesc", label: "Hero Description", type: "string" },
          { name: "storyHeadline", label: "Story Section Headline", type: "string" },
          { name: "bio", label: "Bio (supports markdown)", type: "rich-text" },
          { name: "principlesHeadline", label: "Principles Section Headline", type: "string" },
          {
            name: "principles",
            label: "Principles",
            type: "object",
            list: true,
            fields: [
              { name: "num", label: "Number (e.g. 01)", type: "string" },
              { name: "title", label: "Title", type: "string" },
              { name: "body", label: "Body", type: "string" },
            ],
          },
          { name: "ctaHeadline", label: "CTA Headline", type: "string" },
          { name: "ctaSubtext", label: "CTA Subtext", type: "string" },
        ],
      },

      // ── Service Pages (shared schema) ────────────────────────────
      {
        name: "servicePage",
        label: "Service Pages",
        path: "src/content/pages",
        format: "json",
        match: { include: "{growth,linkedin,strategy,content-writing}" },
        fields: [
          { name: "heroLabel", label: "Page Label", type: "string" },
          { name: "heroTitle", label: "Hero Title", type: "string" },
          { name: "heroDesc", label: "Hero Description", type: "string" },
          {
            name: "process",
            label: "Process Steps",
            type: "object",
            list: true,
            fields: [
              { name: "num", label: "Number (e.g. 01)", type: "string" },
              { name: "title", label: "Step Title", type: "string" },
              { name: "body", label: "Step Description", type: "string" },
            ],
          },
          {
            name: "goodFit",
            label: "Good Fit bullets",
            type: "object",
            list: true,
            fields: [{ name: "item", label: "Item", type: "string" }],
          },
          {
            name: "badFit",
            label: "Not a Fit bullets",
            type: "object",
            list: true,
            fields: [{ name: "item", label: "Item", type: "string" }],
          },
          { name: "ctaHeadline", label: "CTA Headline", type: "string" },
          { name: "ctaSubtext", label: "CTA Subtext", type: "string" },
        ],
      },

      // ── Book Page ─────────────────────────────────────────────────
      {
        name: "book",
        label: "Book a Call Page",
        path: "src/content/pages",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        match: { include: "book" },
        fields: [
          { name: "heroTitle", label: "Hero Title", type: "string" },
          { name: "heroDesc", label: "Hero Description", type: "string" },
          {
            name: "expectations",
            label: "What to Expect Items",
            type: "object",
            list: true,
            fields: [
              { name: "num", label: "Number", type: "string" },
              { name: "title", label: "Title", type: "string" },
              { name: "body", label: "Body", type: "string" },
            ],
          },
        ],
      },

      // ── Blog Posts ───────────────────────────────────────────────
      {
        name: "blog",
        label: "Blog Posts",
        path: "src/content/blog",
        format: "mdx",
        fields: [
          { name: "title", label: "Title", type: "string", isTitle: true, required: true },
          { name: "slug", label: "Slug (URL)", type: "string" },
          { name: "excerpt", label: "Excerpt", type: "string", ui: { component: "textarea" } },
          {
            name: "category",
            label: "Category",
            type: "string",
            options: [
              "growth-frameworks",
              "content-systems",
              "philosophy",
              "macroeconomics",
              "productivity-systems",
              "brand-strategy",
            ],
          },
          { name: "date", label: "Date", type: "datetime" },
          { name: "readTime", label: "Read Time (e.g. 4 min read)", type: "string" },
          { name: "imageUrl", label: "Cover Image", type: "image" },
          {
            name: "status",
            label: "Status",
            type: "string",
            options: ["draft", "published"],
          },
          { name: "body", label: "Body", type: "rich-text", isBody: true },
        ],
      },

      // ── Playbook Posts ───────────────────────────────────────────
      {
        name: "playbook",
        label: "Playbook Posts",
        path: "src/content/playbook",
        format: "mdx",
        fields: [
          { name: "title", label: "Title", type: "string", isTitle: true, required: true },
          { name: "slug", label: "Slug (URL)", type: "string" },
          { name: "excerpt", label: "Excerpt", type: "string", ui: { component: "textarea" } },
          {
            name: "category",
            label: "Category",
            type: "string",
            options: ["growth", "strategy", "content-system", "linkedin", "branding"],
          },
          { name: "date", label: "Date", type: "datetime" },
          { name: "readTime", label: "Read Time", type: "string" },
          { name: "imageUrl", label: "Cover Image", type: "image" },
          {
            name: "status",
            label: "Status",
            type: "string",
            options: ["draft", "published"],
          },
          { name: "body", label: "Body", type: "rich-text", isBody: true },
        ],
      },

    ],
  },
});
