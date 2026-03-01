# Website Rebuild Instructions — Ahmad Farooq
> Frontend rebuild only. Keep all existing tech stack, hosting, deployment pipeline, and infrastructure exactly as is. All changes are to HTML, CSS, and page content only.

---

# SECTION 1: OVERVIEW AND GROUND RULES

---

## What This Document Is

This is a full frontend rebuild instruction document for ahmadfarooq.vercel.app. It covers every page, every section, and every change that needs to be made. Follow it top to bottom. Do not skip sections.

## What Changes

- Page architecture and navigation structure
- All copy and content on every page
- Section layout and order on every page
- Services section renamed and restructured
- New page added: Work With Me
- Skills Toolkit section removed from homepage

## What Does NOT Change

- Tech stack — keep everything exactly as is
- Hosting on Vercel — no changes
- Deployment pipeline — no changes
- Domain and URL structure — no changes
- Any backend, config, or infrastructure files
- Font choices and existing design system — keep unless noted
- Existing file naming conventions — keep .html extensions

---

## New Page Architecture

### Current Navigation
Home | Behind the Build | Services (dropdown: Growth Marketing, LinkedIn Branding, Marketing Strategy, Content Writing) | Blog | Playbook | Book a Call

### New Navigation
Home | Behind the Build | Services (dropdown: LinkedIn Branding, Content Strategy, Brand Strategy, Growth Marketing) | Work With Me | Blog | Playbook | Book a Call

### Changes to Navigation
- Add **Work With Me** as a top-level nav item between Services and Blog
- Reorder the Services dropdown — LinkedIn Branding comes first
- Rename **Marketing Strategy** page to **Brand Strategy** (update page title, nav label, and file if needed)
- Rename **Content Writing** page to **Content Strategy** (update page title, nav label, and file if needed)
- Remove the existing **Funnel Architecture** reference from nav if present

---

# SECTION 2: PAGE-BY-PAGE REBUILD INSTRUCTIONS

---

## PAGE 1: HOME (index.html)

---

### Browser Tab Title
```
Ahmad Farooq | Growth Strategist & Brand Builder
```
*No change needed.*

---

### SECTION: Navigation
Follow new navigation structure defined in Section 1 above.

---

### SECTION: Hero

**Remove:**
- Current headline: "Building brands that compound."
- Current subheadline: "Not campaigns that spike. Systems that scale."
- "View Playbooks" secondary button

**Replace with:**

| Element | New Copy |
|---|---|
| Headline | Your LinkedIn is not getting you clients because you have no system underneath it. |
| Subheadline | I help coaches, consultants, and founders build a LinkedIn presence that actually works — through the Growth Architecture System and the Equity Flywheel Content System. |
| Primary Button | Book a Free Strategy Call |
| Secondary Button | See How It Works |

Secondary button should anchor scroll to the Solution section below.

Keep the existing hero layout and photo placement. Only the text changes.

---

### SECTION: Social Proof Bar

**Remove current stats:**
- 20 Brands Grown
- 3x Avg. Revenue Lift
- 4 yrs In the Field

**Replace with:**

| Stat | Label |
|---|---|
| 20+ | Brands Grown |
| 4 Years | In the Field |
| $300K | Pipeline Built for One Client in 90 Days |

---

### SECTION: The Problem
*This is a new section. Insert it between the Social Proof Bar and the current "What I Do" section.*

**Section Label (small text above heading):** The Problem

**Heading:**
```
You are already doing the work. So why is nothing happening?
```

**Body:**
```
Most coaches, consultants, and founders on LinkedIn are not lazy. They are posting. They are showing up. They are trying everything the LinkedIn gurus told them to try.

And still no leads are coming in.

The problem is not effort. The problem is that there is no system connecting everything together. Your profile is unclear. Your content is not speaking to the right people. And there is no path for interested visitors to follow.

That is exactly what I fix.
```

---

### SECTION: The Solution
*This replaces the current "Five disciplines. One compounding system." section.*

**Section Label (small text above heading):** The Solution

**Heading:**
```
Two systems. One result. A LinkedIn that works for you every day.
```

**System Card 1:**
- Title: The Growth Architecture System
- Body: A three-layer framework that builds your brand foundation first, then your content engine, then a simple path that turns your audience into paying clients. In that order. Every time.

**System Card 2:**
- Title: The Equity Flywheel Content System
- Body: Most people write one post and then scramble to think of the next one. The Equity Flywheel flips that. You create one solid piece of content and it becomes 30 or more posts, carousels, and ideas automatically. You create once. It keeps working for weeks.

Display these as two side-by-side cards or a two-column layout.

---

### SECTION: Services Overview
*This replaces the current four service cards.*

**Section Label:** What I Do

**Heading:**
```
Five disciplines. One compounding system.
```

Display five cards. Each card has a title, one-line body, and an "Explore" link pointing to the relevant service page.

| Card Title | Body | Link |
|---|---|---|
| LinkedIn Branding | Turn your LinkedIn into an inbound machine. We fix your profile, build your content system, and set up a clear path for visitors to become clients. | linkedin.html |
| Content Strategy | Using the Equity Flywheel Content System, one piece of content becomes 30 or more posts. You never start from zero again. | content-writing.html (or renamed file) |
| Brand Strategy | Before content comes clarity. We figure out who you are, who you help, and what makes you different — so everything you say lands with the right people. | strategy.html (or renamed file) |
| Growth Marketing | Systematic strategies that build compounding revenue over time — not campaigns that spike once and disappear. | growth.html |
| Funnel Architecture | A simple, clear path that takes someone from seeing your content for the first time to booking a call with you. No dead ends. | Link to Work With Me page or keep as growth.html |

---

### SECTION: Case Studies
*Keep the existing accordion/expandable structure. Update the copy inside each case study.*

**Section Label:** Case Studies

**Heading:**
```
Real people. Real results.
```

**Case Study 1:**
- Client Name: Coin Bureau
- Tagline: 10x Newsletter Growth for a Financial Education Brand
- The Challenge: Coin Bureau had a massive YouTube audience but their overall content strategy was fragmented. There was no system tying everything together.
- The Approach: We rebuilt their entire content approach using the Equity Flywheel Content System — creating a clear distribution structure that turned their core content into consistent touchpoints across every channel.
- Results: 10x newsletter growth | 30% of newsletter subscribers now from content | 4.2x average engagement rate versus industry

**Case Study 2:**
- Client Name: EdTech Founder
- Tagline: From 300 Followers to a $300,000 Pipeline in 90 Days
- The Challenge: A Series A EdTech founder had zero personal brand presence and a sales team burning through budget on cold outreach with nothing to show for it.
- The Approach: Repositioned the founder's personal brand to speak directly to enterprise buyers. Built a five-pillar content system using the Growth Architecture System and set up a clear path from content to conversation.
- Results: 12,000 followers in 90 days from 300 | $300,000 pipeline attributed to inbound | 3 partnership deals closed without a single cold call

**Case Study 3:**
- Client Name: Zedsource
- Tagline: Complete Brand Identity for a Digital-First Staffing Company
- The Challenge: Zedsource launched in a market where every competitor looked exactly the same. No identity, no positioning, completely invisible.
- The Approach: Led a brand strategy sprint to define positioning as "digital-first, founder-focused staffing." Designed a complete visual identity and relaunched them with a look and message that stood out immediately.
- Results: Full brand built from zero in 3 weeks | 60% reduction in cost per client after launch | 5x profile visits after rebrand

---

### SECTION: Selected Clients
*Keep existing layout. No copy changes needed.*

---

### SECTION: Skills Toolkit
**REMOVE THIS SECTION ENTIRELY.**

Do not replace it with anything. Delete it from the homepage. The skills list does not belong on the homepage. It can live on the Behind the Build page if desired but should not appear here.

---

### SECTION: Bottom CTA

**Remove current:**
- "Ready to build something that compounds?"
- "30 minutes. No pitch. Just strategy."

**Replace with:**

**Heading:**
```
Ready to build something that compounds?
```

**Subheading:**
```
30 minutes. No pitch. Just an honest look at what is broken and how to fix it.
```

**Button:**
```
Book a Free Strategy Call
```

Button links to book.html.

---

## PAGE 2: BEHIND THE BUILD (behind-the-build.html)

---

### Browser Tab Title
```
Behind the Build | Ahmad Farooq
```

---

### SECTION: Page Hero

**Remove current hero content.**

**Replace with:**

| Element | Copy |
|---|---|
| Heading | I did not have it all figured out from day one. |
| Subheading | Here is the real story of how the Growth Architecture System was built — and why I built it. |

---

### SECTION: Origin Story

**Section Label:** The Story

**Heading:**
```
It started with the same problem my clients have now.
```

**Body — Paragraph 1:**
```
Four years ago I was doing everything I was supposed to be doing. Posting on LinkedIn. Writing content. Engaging with other people. Following every piece of advice I could find.

And nothing was working.

No leads coming in. No clear direction. Just a lot of effort going nowhere.
```

**Body — Paragraph 2:**
```
The more I studied what was actually working for the people who were getting results, the more I noticed the same pattern. It was never about posting more. It was never about a specific format or a trending topic.

The people who were consistently getting inbound leads and building real businesses from LinkedIn had one thing everyone else did not.

A system underneath everything.
```

**Body — Paragraph 3:**
```
So I built one.

I spent two years testing, breaking, rebuilding, and refining. I studied how the best personal brands were structured. I looked at what made content convert versus what just got likes. I figured out how to connect a profile to content to a clear path in a way that actually moved people toward a decision.

That became the Growth Architecture System.
```

**Body — Paragraph 4:**
```
Then I hit the next problem. Creating content every single day was exhausting. Even with a system, showing up consistently felt like running on a treadmill — you had to keep going just to stay in place.

That is when I built the Equity Flywheel Content System. The idea was simple. Create one solid piece of content and break it down into 30 or more pieces automatically. Stop starting from zero every day. Build content equity that keeps working long after you publish it.
```

**Body — Paragraph 5:**
```
Together these two systems changed everything. Not just for me — but for every client I have worked with since.

Coin Bureau used it to grow their newsletter 10x. An EdTech founder used it to build a $300,000 pipeline in 90 days. Zedsource used the brand foundation layer to cut their client acquisition cost by 60%.

The systems work because they are built around one simple truth. You do not need to do more. You need the right structure underneath what you are already doing.
```

---

### SECTION: What I Believe

**Section Label:** What I Believe

**Heading:**
```
A few things I believe that most people disagree with.
```

Display as four belief cards or a simple stacked list.

**Belief 1:**
- Title: Posting more is almost never the answer.
- Body: If the foundation is broken, more content just means more effort with the same disappointing results. Fix the foundation first. Always.

**Belief 2:**
- Title: Viral moments do not build businesses. Systems do.
- Body: A post that gets 50,000 impressions and sends nobody to your offer has done nothing for your business. Consistency beats virality every time.

**Belief 3:**
- Title: Simple beats clever.
- Body: The best headline is the one a stranger understands in three seconds. The best offer name is the one a 10 year old could read and know exactly what it means. Clarity converts. Clever confuses.

**Belief 4:**
- Title: Your best content deserves more than one life.
- Body: If you wrote something good, more people should see it. In more formats. On more days. The Equity Flywheel is built on this idea entirely.

---

### SECTION: How I Work

**Section Label:** How I Work

**Heading:**
```
How I actually work with people.
```

**Body:**
```
I work with a small number of clients at a time. Not because I cannot handle more — but because I actually care about what happens after we finish. Every project gets my full attention. Every strategy is built specifically for that person, their audience, and their offer.

I do not hand you a generic template and call it a deliverable. I build the exact thing you need to move forward.
```

---

### SECTION: Skills
*Move the Skills Toolkit from the homepage to this page. Place it here at the bottom of Behind the Build.*

**Section Label:** The Toolkit

**Heading:**
```
What is in the toolkit.
```

Display as tags or a grid. Items:
LinkedIn Strategy | Content Systems | Brand Strategy | Funnel Architecture | Growth Marketing | Copywriting | Visual Identity | SEO and AEO | Market Research | Analytics | Community Building | Pitch Decks

---

### SECTION: Bottom CTA

**Heading:**
```
If any of this sounds like what you have been looking for, let's talk.
```

**Button:**
```
Book a Free Strategy Call
```

Button links to book.html.

---

## PAGE 3: SERVICE PAGES

There are four service pages. Instructions for each are below.

---

### SERVICE PAGE A: LinkedIn Branding (linkedin.html)

**Browser Tab Title:**
```
LinkedIn Branding | Ahmad Farooq
```

**Page Hero:**
- Heading: Your LinkedIn profile is the first thing people see. Right now it might be sending them away.
- Subheading: I help coaches, consultants, and founders build a LinkedIn presence that attracts the right people and moves them toward a conversation — without posting every day and hoping for the best.

**Section: The Problem**
- Label: The Problem
- Heading: Here is what most LinkedIn profiles are doing wrong.
- Body: Your headline does not say who you help. Your about section talks about you instead of your reader. Your featured section is empty or points nowhere. And your content is too broad to make anyone feel like you are speaking directly to them. None of this is your fault. Nobody sat you down and showed you how a LinkedIn profile is supposed to work as a system. They just told you to post more.

**Section: The Approach**
- Label: The Approach
- Heading: How I fix it.
- Step 1 — Foundation: We start with your positioning. Who you help, what problem you solve, and what makes you different. This becomes the backbone of everything on your profile.
- Step 2 — Profile Build: We rewrite the five most important sections of your LinkedIn profile. Headline, About, Banner brief, Featured section strategy, and Services section. Every word is written to speak directly to your ideal client.
- Step 3 — Content System: Using the Equity Flywheel Content System, we build your content plan so you always know what to post, who you are posting for, and how each piece leads someone closer to working with you.

**Section: Results**
- Label: Results
- Heading: What this looks like when it works.
- Result 1: 10x newsletter growth for Coin Bureau through a complete content system rebuild.
- Result 2: $300,000 inbound pipeline for an EdTech founder in 90 days starting from 300 followers.
- Result 3: 60% drop in client acquisition cost for Zedsource after a full brand and LinkedIn rebuild.

**Bottom CTA:**
- Heading: Want to know exactly what needs fixing on your LinkedIn?
- Button: Book a Free Strategy Call — links to book.html

---

### SERVICE PAGE B: Content Strategy (content-writing.html)

**Note:** Update page title and nav label from "Content Writing" to "Content Strategy." Keep the existing filename unless a redirect is easy to implement.

**Browser Tab Title:**
```
Content Strategy | Ahmad Farooq
```

**Page Hero:**
- Heading: Most people treat content like a treadmill. Post today. Start over tomorrow.
- Subheading: The Equity Flywheel Content System gives you a smarter way. One piece of content becomes 30. You create once and it keeps working for weeks.

**Section: The Problem**
- Label: The Problem
- Heading: Why most content strategies fail.
- Body: The problem is not that people are lazy. The problem is that they are creating content the hard way. Writing something new every day from scratch. Trying to think of fresh ideas every single time. Posting without any clear system connecting one piece to the next. That is exhausting. And it is why most people go quiet on LinkedIn after three months.

**Section: The Solution**
- Label: The Solution
- Heading: The Equity Flywheel Content System.
- Paragraph 1: The Equity Flywheel is a content multiplication system. You create one cornerstone piece of content — a detailed blog post or long form article — and then break it down into 30 or more smaller pieces across every platform you want to show up on.
- Paragraph 2: Five LinkedIn posts. Two carousels. Ten short post ideas. One newsletter. One lead magnet. All from one morning of focused writing.
- Paragraph 3: Your content starts to build on itself. Older pieces keep bringing new people to your profile. You are not starting from zero every day. You are building equity that compounds over time. That is the flywheel. And once it starts spinning, it does not stop.

**Section: What You Get**
- Label: What You Get
- Heading: What a content strategy with me looks like.
- Item 1: A clear set of content pillars built around your specific offer and audience.
- Item 2: A cornerstone content framework so every piece you create is built to multiply.
- Item 3: A posting schedule and idea bank so you never sit down and wonder what to write.
- Item 4: Content that is written to move your ideal client from a stranger to someone ready to book a call.

**Bottom CTA:**
- Heading: Ready to stop starting from scratch every day?
- Button: Book a Free Strategy Call — links to book.html

---

### SERVICE PAGE C: Brand Strategy (strategy.html)

**Note:** Update page title and nav label from "Marketing Strategy" to "Brand Strategy."

**Browser Tab Title:**
```
Brand Strategy | Ahmad Farooq
```

**Page Hero:**
- Heading: Before content, before followers, before any of it — you need to know exactly who you are and who you are talking to.
- Subheading: Brand strategy is not a logo. It is the foundation that makes everything else work.

**Section: The Problem**
- Label: The Problem
- Heading: What happens when the foundation is missing.
- Body: When your brand is unclear, your content is unclear. When your content is unclear, your ideal clients do not feel like you are talking to them. When they do not feel seen, they scroll past. Most LinkedIn struggles are not content problems. They are brand problems. The positioning is vague. The message is too broad. The story does not connect to the right person.

**Section: The Approach**
- Label: What We Build Together
- Heading: What we build together.
- Item 1 — Your Positioning Statement: A clear, simple sentence that tells anyone exactly who you help, what problem you solve, and what makes you different. This goes everywhere — your headline, your about section, your content, your pitch.
- Item 2 — Your Brand Story: The real story of how you got here and why you do this work. Written in plain language that connects with people and builds trust before they even speak to you.
- Item 3 — Your Unique Mechanism: The named system or framework that separates you from everyone else offering similar services. Something your ideal client can understand in ten seconds and remember forever.
- Item 4 — Your Audience Definition: Not a vague description of your target market. A specific, detailed picture of the exact person you are trying to reach — what they struggle with, what they want, and how they make decisions.

**Bottom CTA:**
- Heading: Everything starts with clarity. Let's build yours.
- Button: Book a Free Strategy Call — links to book.html

---

### SERVICE PAGE D: Growth Marketing (growth.html)

**Browser Tab Title:**
```
Growth Marketing | Ahmad Farooq
```

**Page Hero:**
- Heading: Growth is not a campaign. It is a system you build once and improve forever.
- Subheading: I help founders and businesses build marketing systems that compound over time — not spike once and disappear.

**Section: The Problem**
- Label: The Problem
- Heading: The problem with most marketing approaches.
- Body: Most marketing is built around campaigns. You spend money or effort to get a burst of attention, the campaign ends, and you start over. Every time. There is no compounding. No equity building. No system that gets stronger with age. Growth marketing is different. It is about building channels, systems, and feedback loops that improve the more you use them.

**Section: What I Do**
- Label: What I Do
- Heading: What growth marketing looks like in practice.
- Item 1 — Channel Architecture: Figuring out which channels your ideal clients actually use and how to show up there in a way that builds trust and drives action over time.
- Item 2 — Acquisition and Retention: Getting new clients is only half the job. Keeping them and turning them into referral sources is where compounding growth actually happens.
- Item 3 — System Documentation: Every strategy I build is documented so your team can run it without me once it is set up. You own the system. I just help you build it.

**Bottom CTA:**
- Heading: Want a marketing system that gets stronger every month?
- Button: Book a Free Strategy Call — links to book.html

---

## PAGE 4: WORK WITH ME (work-with-me.html)

**This is a new page. Create it from scratch.**

**Add to navigation** between Services dropdown and Blog.

**Browser Tab Title:**
```
Work With Me | Ahmad Farooq
```

---

**Page Hero:**
- Heading: Work With Me
- Subheading: Two ways to get started. One-time projects to build the foundation. Monthly plans to keep everything growing.

---

**Section: One-Time Projects**

Section divider label: One-Time Projects

Intro text:
```
Not sure where to start? These two projects fix the most common problems first. Most people start here.
```

**Offer Card 1:**
- Name: Fix My LinkedIn Profile
- Price: $200 (Rs. 55,800)
- Tagline: Your profile is the first thing people see. Let's make it impossible to ignore.
- What you get:
  - New headline that clearly says what you do and who you help
  - About section rewritten to tell your story and attract the right people
  - Banner concept brief — what it should say and look like
  - Featured section strategy — what to put there and why
  - Services section setup
- Delivery note: Delivered in 5 days. Includes one round of revisions.
- Button: Get Started — links to book.html

**Offer Card 2:**
- Name: Build My Growth Strategy
- Price: $450 (Rs. 125,550)
- Tagline: A complete game plan so you always know what to post, who to target, and how to turn followers into clients.
- What you get:
  - Brand story and positioning — who you are, who you help, what makes you different
  - Three content pillars tailored to your business
  - 20 post ideas mapped to your audience's buying journey
  - Posting schedule and hook templates
  - A simple funnel map showing how your content leads to clients
- Delivery note: Delivered in 10 days. Includes one round of revisions.
- Button: Get Started — links to book.html

---

**Section: Monthly Plans**

Section divider label: Monthly Plans

Intro text:
```
Already have a foundation? These plans keep you consistent, growing, and top of mind every single month. Pick the level that fits where you are right now.
```

**Offer Card 3:**
- Name: Keep Me Consistent
- Price: $200 per month (Rs. 55,800 per month)
- Tagline: For people who know what to say but keep running out of time or ideas.
- What you get every month:
  - 12 post ideas with hooks and outlines already written — 3 per week
  - Monthly content calendar
  - One 30-minute strategy call
- Commitment note: Month to month. Cancel anytime.
- Button: Get Started — links to book.html

**Offer Card 4:**
- Name: Write It For Me
- Price: $400 per month (Rs. 111,600 per month)
- Tagline: For people who want to show up on LinkedIn every week without writing a single word themselves.
- What you get every month:
  - 12 fully written, ready-to-post LinkedIn posts
  - Posts optimized for reach and written to attract your ideal client
  - Monthly content calendar
  - One 45-minute strategy and review call
- Commitment note: Month to month. Cancel anytime.
- Button: Get Started — links to book.html

**Offer Card 5:**
- Name: Run It All For Me
- Price: $700 per month (Rs. 195,300 per month)
- Tagline: For people who want LinkedIn to actively grow their business — completely hands off.
- What you get every month:
  - 16 fully written and posted LinkedIn posts
  - Profile monitoring and optimization as needed
  - Engagement management — replies and comments handled for you
  - Monthly performance report — what is working and what to adjust
  - Two 45-minute strategy calls every month
- Commitment note: Minimum 3-month commitment.
- Button: Get Started — links to book.html

---

**Section: Bottom CTA**

Heading:
```
Not sure which one is right for you?
```

Body:
```
Book a free 30-minute call and we will figure it out together. No pitch. Just an honest conversation about where you are and what needs to happen next.
```

Button: Book a Free Call — links to book.html

---

## PAGE 5: BLOG (blog.html)

**Keep existing page structure. Update the following sections only.**

---

**Browser Tab Title:**
```
Blog | Ahmad Farooq
```

**Page Hero:**
- Heading: Ideas that actually help you grow.
- Subheading: No fluff. No generic advice. Just clear thinking on LinkedIn, content systems, and building a personal brand that works.

---

**Featured Post Section**

Add a Featured Post section at the top of the blog listing. Display it as a larger card above the regular post grid.

- Label: Start Here
- Title: Why Your LinkedIn Is Not Getting You Clients (And It Has Nothing To Do With How Often You Post)
- Description: Almost every struggling LinkedIn profile has the same three problems underneath. None of them are fixed by posting more. This piece breaks down all three and shows you exactly what to do instead.
- Read time: 8 minute read
- Button: Read the Article

---

**Blog Categories**

Add a category filter bar above the post grid with these five categories:
- LinkedIn Strategy
- Content Systems
- Brand Building
- Growth Marketing
- Case Studies

---

**Email Signup Section**

Add an email signup section at the bottom of the blog page above the footer.

- Heading: Get new articles before anyone else.
- Body: New pieces go to the email list first. No spam. Just useful thinking on building a personal brand that compounds.
- Input placeholder: Your email address
- Button: Send Me the Articles

---

## PAGE 6: PLAYBOOK (playbook.html)

**Keep existing page structure. Update copy and add new resource cards.**

---

**Browser Tab Title:**
```
Playbook | Ahmad Farooq
```

**Page Hero:**
- Heading: The Playbook
- Subheading: Free frameworks, guides, and tools built from four years of working with real clients. Take what is useful and put it to work.

---

**Intro Text:**
```
Everything in the Playbook is free. No email required for most of it. These are the exact frameworks I use with paying clients — shared openly because I believe people should have access to the thinking before they decide to work together.
```

---

**Resource Cards**

Replace or add to existing playbook items. Ensure these four are present:

**Card 1:**
- Title: The LinkedIn Profile Fix Checklist
- Description: Seven things holding your LinkedIn back from getting you clients — and exactly how to fix each one today. This is the first thing I look at when a new client comes to me.
- Format label: Free PDF
- Button: Download Free

**Card 2:**
- Title: The Equity Flywheel Content System
- Description: The complete guide to turning one piece of content into 30 or more posts, carousels, and ideas. Includes the weekly workflow, extraction templates, and a 30-day launch plan.
- Format label: Free Guide
- Button: Read the Guide

**Card 3:**
- Title: The Growth Architecture System — Overview
- Description: A plain-language breakdown of the three-layer framework I use with every client. Brand foundation. Content engine. Conversion path. This piece explains what each layer does and why the order matters.
- Format label: Free Article
- Button: Read the Article

**Card 4:**
- Title: LinkedIn Headline Formula
- Description: The exact formula I use to write headlines that get the right people to stop scrolling. Includes five real examples and a fill-in-the-blank template you can use today.
- Format label: Free Template
- Button: Get the Template

---

**Bottom CTA:**
- Heading: Want me to build this for you instead of doing it yourself?
- Button: See How We Can Work Together — links to work-with-me.html

---

## PAGE 7: BOOK A CALL (book.html)

**Keep existing calendar embed. Update all surrounding copy.**

---

**Browser Tab Title:**
```
Book a Call | Ahmad Farooq
```

**Page Hero:**
- Heading: Let's figure out exactly what needs to happen next.
- Subheading: 30 minutes. No pitch. No pressure. Just an honest look at where you are and what is getting in the way.

---

**Section: What To Expect**

- Label: What To Expect
- Heading: Here is what we will cover in 30 minutes.

Three items — display as cards or a numbered list:

- Item 1 — Title: Where you are right now | Body: A quick look at your LinkedIn profile, your current content, and what is and is not working.
- Item 2 — Title: What is actually broken | Body: I will tell you honestly what the real problem is. Not a vague answer. A specific diagnosis.
- Item 3 — Title: What to do next | Body: Whether we work together or not, you will leave the call with a clear next step you can take immediately.

---

**Section: Reassurance**

- Heading: This is not a sales call.
- Body: I do not use discovery calls as a pitch session. If what I offer is a good fit for where you are, I will let you know and tell you exactly how. If it is not the right time or the right fit, I will tell you that too and point you somewhere useful. The only goal of this call is to give you something valuable in 30 minutes.

---

**Calendar Embed**

- Label above calendar: Pick a time that works for you.
- Keep existing Calendly or scheduling embed exactly as is.
- Text below calendar: You will get a confirmation email right away. If you need to reschedule, there is a link in that email.

---

**Section: FAQ**

- Heading: Quick answers.

Three FAQ items — display as accordion or simple stacked list:

- Q1: Do I need to prepare anything before the call?
  A: Just come as you are. If you want to share your LinkedIn profile link beforehand that is helpful but not required.

- Q2: What if I am not ready to invest in anything right now?
  A: That is completely fine. The call is still worth your time. You will leave with a clear picture of what needs fixing and you can decide what to do about it on your own timeline.

- Q3: How quickly can we get started after the call?
  A: For one-time projects I can usually start within a few days of the call. For monthly plans we agree on a start date that works for both of us.

---

# SECTION 3: GLOBAL CHANGES

These apply across every page on the site.

---

## Footer

**Keep existing footer layout.**

Update copyright line if needed:
```
© 2026 Ahmad Farooq. All rights reserved.
```

Add a footer nav with these links:
Home | Behind the Build | Work With Me | Blog | Playbook | Book a Call

---

## Internal Linking Rules

Apply these linking rules consistently across all pages:

| Mention of | Should link to |
|---|---|
| Book a call / Book a free call / Any CTA button | book.html |
| Work With Me / See offers / See how we can work together | work-with-me.html |
| Fix My LinkedIn Profile (offer name) | work-with-me.html |
| Build My Growth Strategy (offer name) | work-with-me.html |
| Any retainer offer name | work-with-me.html |
| LinkedIn Branding service | linkedin.html |
| Content Strategy service | content-writing.html |
| Brand Strategy service | strategy.html |
| Growth Marketing service | growth.html |
| Playbook | playbook.html |

---

## Language Rules

Apply these rules to any copy written or edited during the rebuild:

- No em dashes anywhere. Use a comma, a full stop, or rewrite the sentence.
- No jargon. If a 10-year-old would not understand it, rewrite it.
- Short sentences. One idea per sentence.
- No bullet points in body copy unless it is a deliverables list.
- Every page ends with one clear CTA. Never two. Never zero.
- All pricing shown in both USD and PKR using the rate 1 USD = Rs. 279.

---

## Pages NOT to Touch

Do not modify anything on these pages beyond what is explicitly listed in this document:
- Any config files
- Any JS files unrelated to content rendering
- vercel.json or any deployment config
- package.json or any dependency file
- Any CSS files unless a section layout instruction requires it

---

# SECTION 4: BUILD CHECKLIST

Use this to track progress. Check off each item as it is completed.

### Navigation
- [ ] Add Work With Me to top-level nav
- [ ] Reorder Services dropdown — LinkedIn Branding first
- [ ] Rename Marketing Strategy to Brand Strategy in nav and page title
- [ ] Rename Content Writing to Content Strategy in nav and page title

### Home (index.html)
- [ ] Update hero headline and subheadline
- [ ] Update hero buttons
- [ ] Update social proof bar stats
- [ ] Add The Problem section
- [ ] Replace What I Do section with Two Systems section
- [ ] Update service cards to five cards with new copy
- [ ] Update case study copy for all three case studies
- [ ] Remove Skills Toolkit section
- [ ] Update bottom CTA copy

### Behind the Build (behind-the-build.html)
- [ ] Update page hero
- [ ] Replace origin story copy
- [ ] Add What I Believe section
- [ ] Add How I Work section
- [ ] Move Skills Toolkit from homepage to this page
- [ ] Update bottom CTA

### LinkedIn Branding (linkedin.html)
- [ ] Update page hero
- [ ] Add The Problem section
- [ ] Add The Approach section with three steps
- [ ] Add Results section
- [ ] Update bottom CTA

### Content Strategy (content-writing.html)
- [ ] Update page title and nav label
- [ ] Update page hero
- [ ] Add The Problem section
- [ ] Add The Solution section with Equity Flywheel copy
- [ ] Add What You Get section
- [ ] Update bottom CTA

### Brand Strategy (strategy.html)
- [ ] Update page title and nav label
- [ ] Update page hero
- [ ] Add The Problem section
- [ ] Add What We Build Together section with four items
- [ ] Update bottom CTA

### Growth Marketing (growth.html)
- [ ] Update page hero
- [ ] Add The Problem section
- [ ] Add What I Do section with three items
- [ ] Update bottom CTA

### Work With Me (work-with-me.html)
- [ ] Create new page
- [ ] Add to navigation
- [ ] Add page hero
- [ ] Add One-Time Projects section with two offer cards
- [ ] Add Monthly Plans section with three offer cards
- [ ] Add bottom CTA

### Blog (blog.html)
- [ ] Update page hero
- [ ] Add Featured Post card at top
- [ ] Add category filter bar
- [ ] Add email signup section at bottom

### Playbook (playbook.html)
- [ ] Update page hero
- [ ] Add intro text
- [ ] Add or update four resource cards
- [ ] Update bottom CTA

### Book a Call (book.html)
- [ ] Update page hero
- [ ] Add What To Expect section
- [ ] Add Reassurance section
- [ ] Keep calendar embed unchanged
- [ ] Add FAQ section

### Global
- [ ] Update footer nav links
- [ ] Apply internal linking rules across all pages
- [ ] Check all pricing shows USD and PKR
- [ ] Remove all em dashes from all copy
- [ ] Test all CTA buttons link correctly

---

*End of Website Rebuild Instructions — Ahmad Farooq*
*Frontend changes only. Tech stack, hosting, and infrastructure unchanged.*
*All copy sourced from the approved Brand and LinkedIn Growth Strategy document.*