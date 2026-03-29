# Website Creation Workflow

Three site types, one process framework. Each type shares the same research foundation but diverges at design, content, and launch.

---

## Site Types at a Glance

| | Product Site | Company Site | Landing Page |
|---|---|---|---|
| **Purpose** | Sell a specific product/service | Establish trust and authority | Drive one conversion action |
| **Pages** | 8-15+ (features, pricing, docs) | 6-12 (about, team, services, blog) | 1 (no navigation away) |
| **Navigation** | Full nav with product sections | Full nav with company sections | None or minimal (logo only) |
| **Success metric** | Signups, trials, purchases | Leads, inquiries, brand recall | Single CTA conversion rate |
| **Content depth** | Deep on product, shallow on company | Deep on company, shallow on product | Focused on one offer |

---

## Phase 1: Research & Validation

These steps happen before any design or code. Skip them and you're decorating guesses.

**Templates used in this phase:**
- `product/[product-slug]/product-brief.md` (copy from `product/template/product-brief.md`)
- `product/[product-slug]/persona.md` (copy from `product/template/persona.md`)
- `product/[product-slug]/competitive-landscape.md` (copy from `product/template/competitive-landscape.md`)

### 1.1 Discovery Brief

Capture the raw inputs before any research begins.

**Deliverables:**
- One-page brief: What do you sell? Who buys it? Why do they buy? What happens if they don't?
- Business goals (revenue target, launch date, geographic focus)
- Existing assets inventory (logo, colors, copy, photos, testimonials, case studies)
- Technical constraints (hosting, integrations, budget, compliance)
- Competitive landscape assumptions (who do you think you compete with?)

**Template output:** Fill sections 1-3 and 5 of `product-brief.md`:
- §1 The One-Liner and elevator pitch
- §2 The Problem (external, internal, philosophical, villain)
- §3 Target Audience (ICP, psychographics, behavior)
- §5 Golden Circle (Why, How, What)

**Method:** Structured interview or questionnaire. 30-60 minutes.

### 1.2 Market Research & Validation

Understand the landscape. Validate that the opportunity exists.

**Deliverables:**
- Market sizing (TAM/SAM/SOM) with sources
- Industry trends affecting the buyer (3-5 trends with evidence)
- Buyer maturity assessment (searching for solutions vs. unaware of the problem)
- Demand validation signals:
  - Search volume for core keywords (Google Keyword Planner, Ahrefs, Ubersuggest)
  - Community activity (Reddit threads, forum posts, Stack Overflow questions)
  - Competitor traction signals (traffic estimates via SimilarWeb, review counts on G2/Capterra)
  - Job postings mentioning the problem space
- Regulatory or compliance considerations
- Market timing: is this the right moment? (Growing demand, regulatory tailwind, competitor weakness)

**Method:** Use skill `/brand-market-research`. Mine Reddit, forums, industry reports, vendor communities. Extract actual buyer language.

**Template output:** Feed findings into `product-brief.md` §14 (Validation Data) and §15 (Research Links).

**Validation gate:** If TAM is too small, demand signals are weak, or timing is wrong, revisit the product/positioning before building the site.

### 1.3 Competitor Research

Map the competitive landscape to find positioning gaps.

**Deliverables:**
- Competitor matrix (direct, adjacent, substitute, "do nothing")
- Feature comparison table
- Positioning map (2x2 with meaningful axes)
- Messaging analysis (what competitors claim vs. what customers say)
- Visual audit (screenshots of competitor sites, common design patterns, what to avoid)
- Pricing landscape
- Gap analysis: what competitors are NOT doing or doing poorly

**Method:** Use skill `/brand-competitive-analysis`. Visit competitor sites, read reviews on G2/Capterra/Trustpilot, search Reddit for complaints.

**Template output:** Fill `competitive-landscape.md` — competitor overview table, deep dives, feature comparison matrix, positioning map, messaging analysis, and monitoring plan. Also fill `product-brief.md` §12 (Competitive Landscape).

### 1.4 Persona Research & Target Definition

Build buyer profiles from behavior, not demographics.

**Deliverables:**
- 2-4 buyer personas defined by:
  - Trigger event (what makes them start looking)
  - Decision authority (buyer, influencer, approver, end user)
  - Top 3 objections
  - Success metrics (what "working" looks like to them)
  - Information sources (where they research, who they trust)
  - Preferred buying process (self-serve, sales-assisted, procurement)
- Jobs-to-be-Done statements for each persona
- Pain severity ranking (annoyance vs. hair-on-fire)
- Customer language dictionary (exact phrases they use to describe the problem)

**Method:** Use skill `/brand-persona-dev`. Define by role and trigger, not fictional names.

**Template output:** Create one `persona.md` per persona (e.g., `product/[slug]/persona-devops-dave.md`). Fill all sections: identity, professional context, day-in-life narrative, goals, pain points ranked by severity, buying behavior, online behavior, messaging that resonates, and the before/after transformation. Also update `product-brief.md` §3 (Target Audience) with the summary ICP.

### 1.5 Problem/Solution Definition

Connect research to value propositions.

**Deliverables:**
- Problem statements (3-5, ranked by severity and frequency)
- Solution mapping (problem → feature → benefit → proof)
- Value proposition canvas (per persona if they differ)
- Differentiator hierarchy:
  1. Category-level (why this type of solution)
  2. Brand-level (why us over alternatives)
  3. Product-level (specific capabilities)
- Objection handling map (objection → response → evidence)
- Positioning statement: For [audience] who [need], [product] is the [category] that [key benefit] unlike [alternative] because [reason]

**Method:** Synthesize Steps 1.2-1.4. The value proposition is the intersection of what buyers need, what you deliver, and what competitors don't.

**Template output:** Fill `product-brief.md` §4 (Positioning), §6 (The Solution), §7 (Outcomes & Transformation), §10 (StoryBrand Elements), and §11 (User Stories). The StoryBrand elements should align with the Golden Circle from §5. Also fill `product-brief.md` §8 (Pricing) and §9 (Distribution) if applicable.

---

## Phase 2: Brand Identity & Design System

Define who you are and what you look like. Every visual and verbal decision flows from this phase.

### 2.1 Brand Strategy

**Deliverables:**
- Brand positioning statement (finalized from 1.5)
- Brand personality traits (3-5 adjectives with definitions and behavioral examples)
- Brand voice guidelines:
  - Voice constants (what never changes regardless of context)
  - Tone matrix: how voice shifts across contexts (homepage hero, error message, blog post, social media, support email)
- Brand values (specific enough to make decisions against)
- Brand name guidelines (capitalization, usage, abbreviations)
- Brand glossary (preferred terms, banned terms, why for each)

**Template output:** Fill `product-brief.md` §13 (Voice & Tone for This Product) — personality, formality, humor, confidence attributes, words to use/avoid, and customer language to mirror from persona research.

### 2.2 Visual Identity — Mood Board

Establish visual direction before committing to specifics.

**Deliverables:**
- Curated reference collection organized by dimension: color, typography, layout, texture, motion
- Annotations on what to borrow and what to reject from each reference
- Anti-references: visual patterns to specifically avoid (overused in this category)
- Design tension definition (e.g., "technical credibility meets approachable warmth")

**Method:** Use skill `/brand-mood-board`.

### 2.3 Visual Identity — Color System

**Deliverables:**
- Complete color system: primary (50-950), secondary (50-950), accent (50-950), neutral (50-950)
- Semantic colors: success, warning, error, info
- Background system (off-whites, surface colors)
- WCAG AA compliance verification for all text/background combinations
- Dark mode color mapping
- Color application rules (usage ratios, when to use which)
- Tailwind CSS `@theme` output ready for `src/styles/global.css`

**Method:** Use skill `/brand-color-system`.

### 2.4 Visual Identity — Typography & Visual Language

**Deliverables:**
- Font selections: heading, body, monospace (with weight/size/line-height scales)
- Icon library selection (one library, consistent style)
- Illustration direction: style, color palette, subject matter guidelines
- Photography direction: style, subjects, treatment, what to avoid
- Spacing and layout principles
- Motion/animation principles (if applicable)
- Component-level design direction (cards, buttons, forms, heroes)

**Method:** Use skill `/brand-visual-language`.

### 2.5 Brand Profile Synthesis

Consolidate everything into the master reference documents.

**Deliverables:**
- `docs/brand-profile.md` — master brand document (voice, personality, positioning, glossary)
- `docs/brand-colors.md` — complete color system with Tailwind tokens
- `docs/brand-visual-language.md` — typography, icons, imagery, spacing rules
- `docs/product-marketing-context.md` — bridge file connecting brand to marketing execution

**Method:** Use skill `/brand-profile-synthesis`.

---

## Phase 3: Content Strategy & SEO Planning

Plan every word and keyword before writing. This phase shapes both content creation and site architecture.

**Templates used in this phase:**
- `product/[product-slug]/messaging-matrix.md` (copy from `product/template/messaging-matrix.md`)
- `product/[product-slug]/content-angles.md` (copy from `product/template/content-angles.md`)

### 3.1 SEO Keyword Research

**Deliverables:**
- Primary keyword per page (what each page targets)
- Secondary/supporting keywords per page (2-5 each)
- Long-tail keyword opportunities (questions, comparison queries)
- Search intent mapping (informational, navigational, commercial, transactional)
- Keyword difficulty assessment (which battles to fight now vs. later)
- Content gap analysis (keywords competitors rank for that you don't cover)
- Local SEO keywords (if geographically relevant)

**Method:** Use skill `/seo-audit` for the audit framework. Tools: Google Keyword Planner, Ahrefs, SEMrush, Ubersuggest, Google Search Console (if existing site), AlsoAsked.com.

**Template output:** Fill `content-angles.md` — Target Keywords (primary, long-tail, and questions people ask sections).

### 3.2 Messaging Matrix

Build the backbone of all communications. The messaging matrix ensures every page, post, and conversation traces back to validated, stakeholder-specific messages.

**Deliverables:**
- Stakeholder map: classify all audiences by value/importance and power/interest
- Anticipated questions per stakeholder (95% can be predicted from research)
- Three key messages per stakeholder, each with three proof points
- Message typing: Descriptor (INFORM), Differentiator (PROMOTE), Connector (INSPIRE), Motivator (ACTIVATE)
- Delivery guide: trust sources, story formats, and expert citations per context
- Message-to-content mapping: which messages appear where on the site

**Message constraints (from mental noise theory):**
- **Rule of 3:** Maximum three messages per stakeholder
- **Rule of 27/9/3:** Nine words or less per message, all three readable in under nine seconds
- **Rule of AGL-4:** Written at audience reading level minus four grades
- **Rule of Negative Dominance:** No negative framing; balance any negative with 3× positive

**Method:** Synthesize `product-brief.md` (positioning, StoryBrand, Golden Circle), `persona.md` (pain points, questions, language), and `competitive-landscape.md` (differentiation gaps). Use the messaging matrix template structure.

**Template output:** Fill `messaging-matrix.md` — all seven sections: Stakeholder Map, Stakeholder Personas, Stakeholder Questions, Message Development, The Matrix, Message Delivery Guide, and Message-to-Content Mapping. The message-to-content mapping directly feeds `landing-page-data.md` component fields and `content-angles.md` messaging do's/don'ts.

### 3.3 Content Strategy & Editorial Planning

**Deliverables:**
- Content pillars (3-5 core topics the brand owns)
- Page-level content requirements (what each page must communicate, informed by messaging matrix)
- Buyer stage mapping:
  - Awareness: blog posts, guides, "what is" content
  - Consideration: comparisons, case studies, "best X for Y" content
  - Decision: pricing, demos, testimonials, guarantees
- Content types needed (page copy, blog posts, case studies, whitepapers, FAQs, testimonials)
- Editorial calendar framework (topics, frequency, channels)

**Method:** Use skill `/content-strategy`. Content pillars should align with messaging matrix message types — each pillar reinforces one or more key messages.

**Template output:** Fill `content-angles.md` — Content Pillars, Community Channels, Content Calendar Seed, Content Angles by Funnel Stage, Repurposing Map, and Messaging Do's and Don'ts.

### 3.4 AI Search Optimization Planning

**Deliverables:**
- AI-citability audit of planned content structure
- Entity and authority signals to build into pages
- Structured data plan (what schemas per page type)
- Content formatting for AI extraction (clear definitions, structured answers, comparison tables)

**Method:** Use skill `/ai-seo`.

---

## Phase 4: Site Architecture & Templates

Design the structure, then build the containers before filling them with content.

**Template used in this phase:**
- `product/[product-slug]/landing-page-data.md` (copy from `product/template/landing-page-data.md`)

### 4.1 Information Architecture

**Deliverables:**
- Visual sitemap with page hierarchy
- URL structure plan (clean, keyword-inclusive, flat where possible)
- Navigation design: primary nav, footer nav, mobile nav, breadcrumbs
- Internal linking strategy (hub pages, related content, cross-links)
- User flow diagrams (how each persona navigates to conversion)

**Method:** Use skill `/site-architecture`.

**Diverges by site type here:**

#### Product Site pages:
| Page | Purpose |
|---|---|
| Homepage | Hook + route to features/pricing |
| Features | Deep product explanation with use cases |
| Pricing | Tiers, comparison table, FAQ, guarantee |
| About | Company story, team, values |
| Contact | Lead capture form, calendar, contact info |
| Blog | SEO content hub with categories |
| Case Studies | Customer stories with metrics |
| Docs/Resources | Guides, tutorials, API reference |
| Changelog/Updates | Product updates, release notes, roadmap |
| Demo/Product Tour | Interactive or video walkthrough of core features |
| Privacy + Terms | Legal compliance |
| 404 + 500 | Branded error pages |

> **Mobile apps:** If your product includes iOS/Android distribution, add App Store Optimization (ASO) to your planning. See `product-brief.md` §9 for app store listing fields (name, subtitle, keywords, screenshots, preview video, rating strategy). ASO execution happens in Phase 7.2.

#### Company Site pages:
| Page | Purpose |
|---|---|
| Homepage | Credibility + route to services/work |
| About | Origin story, mission, values, timeline |
| Team | Headshots, bios, roles |
| Services | Service cards, descriptions, process |
| Portfolio/Work | Project showcases with results |
| Process | Step-by-step methodology |
| Blog/Insights | Thought leadership + SEO |
| Contact | Conversation starter form, location |
| Careers | Open roles, culture, benefits |
| Press/Media | Press kit, media mentions, press releases |
| Partners/Integrations | Technology partners, integration ecosystem, partnership program |
| Investors | Company traction, leadership team, funding history, investor relations |
| Privacy + Terms | Legal compliance |

#### Landing Page:
| Section | Purpose |
|---|---|
| Hero | Hook + CTA above fold |
| Problem | Agitate the pain |
| Solution | Position the offer as the fix |
| How it works | Reduce perceived complexity (3 steps) |
| Social proof | Testimonials, logos, stats |
| Benefits | Outcomes, not features |
| Objection handling | FAQ or "but what about..." |
| Guarantee | Risk reversal (free trial, money back) |
| Final CTA | Repeat offer with urgency |

### 4.2 Wireframes & Page Blueprints

**Per page, produce:**
- Section-by-section wireframe (content blocks, not pixel-perfect mockups)
- Content requirements per section (what text, images, data each block needs)
- CTA strategy (primary and secondary actions per page)
- Schema markup plan per page (Use `/schema-markup`)
- Component mapping (which template components serve each section)

**Template output:** Fill `landing-page-data.md` — Page Metadata, Hero Component, Problem Tabs, Features, Pricing Tiers, Social Proof, FAQ, and Comparison Table sections. This structured YAML data maps directly to Astro components (`<Hero />`, `<ProblemTabs />`, `<Features />`, `<PricingTiers />`, `<RegionGate />`, etc.). Also configure UTM Parameters and PostHog Events sections for analytics.

### 4.3 Template & Component Development

Build the reusable building blocks before creating pages.

**Deliverables:**
- Configure brand tokens in `src/styles/global.css` (colors, fonts from Phase 2)
- Create or customize layouts (BaseLayout, MarketingLayout, MinimalLayout for landing pages)
- Build/adapt components to match brand design:
  - Navigation (Header, Footer, mobile menu)
  - Hero variants (dark, light, split, minimal)
  - Content sections (FeatureGrid, StatsBar, Testimonials, FAQ, PricingTable)
  - Cards (BlogCard, ServiceCard, ProjectCard)
  - Forms (ContactForm, NewsletterSignup)
  - Navigation aids (Breadcrumbs, Pagination, TableOfContents, BackToTop)
  - CTAs (CTABanner, inline CTAs)
- Dark mode implementation across all components
- Responsive behavior verification (mobile, tablet, desktop)

**Method:** Use skills `/frontend-design` + `/human-design` for design that avoids template-looking patterns.

---

## Phase 5: Content Creation

Fill the templates with real content. Every piece serves a purpose defined in Phase 3.

### 5.1 Page Copy

Write the primary page content following the messaging framework and wireframes.

**Deliverables per page:**
- Headlines and subheadlines
- Body copy for each section
- CTA text (button labels, form headers)
- Microcopy (form labels, error messages, empty states, tooltips)
- Meta title and description (SEO-optimized, under character limits)
- Alt text for all images

**Method:** Use skills `/copywriting` + `/human-copy` for every page.

**Template output:** Update `landing-page-data.md` with final copy — hero headline/subheadline, problem tab descriptions, feature descriptions, pricing tier descriptions, FAQ answers, and CTA text. Use `product-brief.md` §5 (Golden Circle Why) to inform the hero belief statement. Use `persona.md` pain points and language to write problem tabs in the customer's own words.

**Quality gates:**
- Does each page pass the "swap test"? (Could this text appear on a competitor's site? If yes, rewrite.)
- Are claims specific? (Numbers, names, timeframes — not vague praise)
- Does the copy speak to the persona's trigger event and objections?

> **Product sites — onboarding content:** If your product has a signup/trial flow, define activation milestones during this phase (the specific action that delivers first value). Use these milestones to drive onboarding email sequences. See skill `/email-marketing` for sequence design and `product/[product-slug]/email-sequences.md` for the structured template. Activation milestones should map to the "Quick Win" and "Core Value" emails in the welcome sequence.

### 5.2 Blog & Article Content

Create the initial content library for SEO and thought leadership.

**Deliverables:**
- 5-10 initial blog posts or articles (minimum viable content library)
- Each post targets a specific keyword cluster from Phase 3
- Content types distributed across buyer stages (awareness, consideration, decision)
- Internal links woven into each piece
- Author bios for trust signals

**Method:** Use skill `/human-articles` for long-form content that avoids AI detection patterns.

### 5.3 Case Studies & Social Proof

**Deliverables:**
- 2-3 case studies with concrete metrics (before/after, percentage improvements, time saved)
- Testimonial collection: 5-10 quotes with real names, roles, companies
- Social proof data: client logos, user counts, satisfaction scores, awards
- Video testimonials (if available) — even 30-second clips add credibility

### 5.4 Legal & Compliance Content

**Deliverables:**
- Privacy Policy (GDPR/CCPA compliant, specific to your data practices)
- Terms & Conditions
- Cookie Policy (matching actual cookie usage)
- Accessibility statement (if targeting WCAG compliance)

### 5.5 Careers Page Content (Company Sites)

**Deliverables:**
- Culture narrative: what it's actually like to work here (not platitudes)
- Benefits table: compensation, perks, growth opportunities — specific, not vague
- Job descriptions: frame each role around the problem it solves, not a bullet list of requirements
- Team growth story: where the company has been, where it's going, why now is the time to join
- Employee spotlights: 2-3 real stories from current team members (written in their voice)
- Application process: step-by-step transparency (what to expect, timeline, who they'll meet)

**Method:** Use skills `/copywriting` + `/human-copy`. Careers copy should sound like a real person talking about their workplace, not a corporate recruiting brochure.

### 5.6 Company Narrative & Origin Story (Company Sites)

Build the narrative that makes the company memorable and trustworthy.

**Deliverables:**
- Origin story arc: the specific moment the company started and why (not "we saw a gap in the market")
- Founder narrative: personal journey that led to this company (authenticity builds trust)
- Company timeline: key milestones, pivots, and achievements in chronological order
- Values in action: 3-5 company values, each with a real story of how they played out
- Vision statement: where the company is headed and why it matters

**Sources:** Draw from `product-brief.md` §5 (Golden Circle — the Why drives the origin story) and §10 (StoryBrand — the company as guide, not hero). The origin story should echo the philosophical problem from §10.

**Method:** Use skills `/copywriting` + `/human-copy`. The origin story is the most-read page after the homepage — invest in making it genuine.

### 5.7 Trust Assets (Company Sites)

Compile the third-party proof that the company is legitimate and credible.

**Checklist:**
- [ ] Awards and recognitions (industry awards, "best of" lists, certifications)
- [ ] Professional certifications (ISO, SOC 2, GDPR compliance badges)
- [ ] Press mentions with links (publication logos + article links)
- [ ] Association memberships (industry bodies, chambers of commerce)
- [ ] Security and compliance badges (if applicable — SSL, PCI, HIPAA)
- [ ] Client logos (get permission, display prominently)
- [ ] Partnership badges (technology partners, authorized resellers, integrations)
- [ ] Years in business, team size, clients served (specific numbers)

**Placement:** These assets appear on the homepage (logos bar, stats), About page (full list), and Footer (key badges). Reference them in `landing-page-data.md` Social Proof section.

---

## Phase 6: Image & Visual Asset Creation

Create all visual assets after copy is written — images support the message, not the other way around.

### 6.1 Image Strategy

**Deliverables:**
- Image requirements list (every image needed, per page, per section)
- Image type classification:
  - Hero images (above-the-fold visuals)
  - Product screenshots or mockups
  - Feature illustrations or diagrams
  - Team photos
  - Blog post featured images
  - Icons and decorative elements
  - Social sharing images (OG images)
- Style direction per type (from Phase 2 visual language)

### 6.2 Image Sourcing

Find existing assets where custom creation isn't needed.

**Deliverables:**
- Icon library set up (one consistent library, not mixed)
- Stock photography sourced (if using — curated, not generic)
- Illustration packs identified
- All assets checked for licensing (CC0, Unsplash license, purchased license)

**Method:** Use skill `/img-sourcing`.

### 6.3 Image Creation

Create custom assets that can't be sourced.

**Deliverables:**
- Hero images (per page, matching brand visual language)
- Product screenshots in branded browser frames
- Feature illustrations or diagrams
- SVG graphics and decorative elements
- Animated elements (CSS animations, Lottie files if needed)
- OG images for social sharing (auto-generated via `npm run generate:og` or custom)

**Method:** Use skill `/img-generation`.

### 6.4 Image Quality Assurance

Verify every visual before it ships.

**Checklist per image:**
- Does it match the brand visual language?
- Does it look human-crafted, not AI-generated? (Check for AI tells)
- Is it optimized for web? (WebP/AVIF, appropriate dimensions, compressed)
- Does it have proper alt text?
- Does it serve the content, not just decorate?
- Does it work in both light and dark mode?
- Is it responsive (different crops/sizes for mobile vs. desktop)?

**Method:** Use skill `/img-evaluation`.

---

## Phase 7: SEO & Technical Optimization

Make the site findable. This happens during and after implementation.

### 7.1 On-Page SEO

**Per page:**
- Meta title (under 60 chars, includes primary keyword)
- Meta description (under 160 chars, includes CTA language)
- H1 tag (one per page, includes primary keyword naturally)
- Header hierarchy (H1 → H2 → H3, logical nesting)
- Image alt text (descriptive, keyword-inclusive where natural)
- Internal links (2-5 per page to related content)
- URL slug (clean, keyword-inclusive, no dates or IDs)
- Canonical URL set
- Open Graph and Twitter Card meta tags

### 7.2 Technical SEO

**Deliverables:**
- XML sitemap generated and submitted (`@astrojs/sitemap`)
- robots.txt configured (allow/disallow appropriate paths)
- Structured data implemented per page (Use `/schema-markup`):
  - Organization (sitewide)
  - BreadcrumbList (nested pages)
  - BlogPosting / Article (blog/article pages)
  - Product (product pages)
  - FAQPage (FAQ sections)
  - LocalBusiness (if location-based)
- Page speed optimization:
  - Image optimization (responsive sizes, modern formats)
  - Font loading strategy (preconnect, display=swap)
  - Critical CSS inlined
  - JavaScript minimal (Astro's zero-JS default)
- Core Web Vitals targets: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Mobile-first verification
- HTTPS enforced
- 404/500 error pages with navigation
- Redirect map (if replacing existing site)

**Method:** Use skill `/seo-audit` for comprehensive audit.

#### 7.2.1 App Store Optimization (Mobile Apps)

If your product is distributed through iOS App Store or Google Play, add ASO alongside web SEO.

**Deliverables:**
- App store listing copy: title (optimized for search), subtitle (30 chars, key benefit), description (feature/benefit structure)
- Keywords: 100-char keyword field (iOS), natural keyword integration (Google Play)
- Screenshots: 5-8 key screens showing real usage, not marketing graphics — each with a benefit caption
- Preview video: 15-30 second demo showing core workflow (required for top rankings)
- Category selection: primary and secondary categories based on competitor analysis
- Rating prompt strategy: when to ask (after positive milestone, not on first launch), frequency limits, in-app review API
- Deep linking: universal links (iOS) and app links (Android) connecting web content to in-app screens
- Review response templates: positive review thanks, negative review resolution, feature request acknowledgment

**Sources:** Use `product-brief.md` §9 (Distribution & Platform) for app store fields and strategy.

### 7.3 AI Search Optimization

**Deliverables:**
- Content structured for AI extraction (clear definitions, comparison tables, step-by-step formats)
- Entity relationships defined (schema.org markup connecting brand, products, people)
- FAQ content formatted for direct answer extraction
- Authority signals embedded (author bios, citations, data sources)

**Method:** Use skill `/ai-seo`.

### 7.4 Accessibility

**Deliverables:**
- Skip-to-content link functional
- Keyboard navigation works on every interactive element
- Focus states visible on all focusable elements
- ARIA labels on icons, buttons without visible text
- Form inputs linked to labels and error messages
- Color contrast meets WCAG AA (4.5:1 for text, 3:1 for large text)
- Screen reader tested (at minimum: heading order, landmark regions, image alts)
- Reduced motion respected (prefers-reduced-motion media query)

---

## Phase 8: Testing & Quality Assurance

Catch problems before visitors do.

### 8.1 Functional Testing

- Every page builds without errors (`npm run build`)
- All navigation links work (no 404s from internal links)
- Forms submit correctly (contact form, newsletter signup)
- Dark mode toggle works and persists across pages
- Mobile menu opens/closes, focus trap works, Escape closes
- Pagination works on blog/articles listings
- Content filtering works (tag filters, category filters)
- RSS feed generates valid XML
- Sitemap includes all public pages

### 8.2 Cross-Browser & Device Testing

- Chrome, Firefox, Safari, Edge (latest versions)
- iOS Safari, Android Chrome
- Mobile (375px), Tablet (768px), Desktop (1280px+)
- Test dark mode on each browser
- Test font loading (do fonts display correctly, no FOUT/FOIT?)

### 8.3 Performance Testing

- Lighthouse scores: Performance 90+, Accessibility 95+, SEO 95+, Best Practices 95+
- Core Web Vitals within targets
- Total page weight under 500KB for key pages
- Time to interactive under 3 seconds on 3G

### 8.4 Content Quality Review

- AI writing detection audit (Use `/avoid-ai-writing`)
- CRO audit on key conversion pages (Use `/page-cro`)
- Image quality audit (Use `/img-evaluation`)
- Spell check and grammar review
- Link check (all external links valid)
- Legal review (privacy policy matches actual data practices)

---

## Phase 9: Deployment & Launch

Get it live.

### 9.1 Pre-Launch Checklist

**Environment:**
- [ ] Production domain configured and DNS propagated
- [ ] SSL/HTTPS active and forced
- [ ] Environment variables set (analytics keys, form API keys, newsletter keys)
- [ ] `.env` file NOT committed to git

**Content:**
- [ ] All placeholder/TODO content replaced with real content
- [ ] All "Brand" placeholders replaced with actual brand name
- [ ] Contact info is real (email, phone, address)
- [ ] Legal pages reviewed by someone with authority
- [ ] OG images generated for all pages

**Technical:**
- [ ] `site` URL updated in `astro.config.mjs` (from example.com to production URL)
- [ ] Sitemap generating with correct production URLs
- [ ] robots.txt allows crawling (remove any noindex from production pages)
- [ ] Analytics tracking verified (PostHog or alternative)
- [ ] Form submissions reaching correct inbox/webhook
- [ ] Newsletter signup connected to provider (Buttondown or alternative)
- [ ] 404 page displays correctly for unknown routes
- [ ] Redirects in place (if replacing an existing site)
- [ ] Favicon and app icons configured

### 9.2 Hosting & Deployment

**Static hosting options (recommended for Astro static output):**
- Vercel (recommended — zero config for Astro, preview deployments)
- Netlify (similar to Vercel, good form handling)
- Cloudflare Pages (fast global CDN, generous free tier)
- AWS S3 + CloudFront (more control, more setup)
- GitHub Pages (free, simple, limited)

**Deployment setup:**
- Connect git repo to hosting provider
- Configure build command: `npm run build`
- Configure output directory: `dist/`
- Set environment variables in hosting dashboard
- Enable automatic deployments on push to `main`
- Configure preview deployments for pull requests (optional)
- Set up custom domain with HTTPS

### 9.3 Post-Deploy Verification

- [ ] Site loads on production URL
- [ ] All pages render correctly (spot check 5-10 pages)
- [ ] Forms submit and deliver (send a test submission)
- [ ] Analytics tracking fires (check PostHog dashboard or console)
- [ ] Google Search Console: submit sitemap, request indexing
- [ ] Social sharing: test OG images on Twitter, LinkedIn, Facebook debuggers
- [ ] Performance: run Lighthouse on production URL (not localhost)

### 9.4 Pre-Launch Buzz (T-30 to T-1)

Build anticipation before the public launch.

**Deliverables:**
- Launch timeline: T-30 to T-1 calendar with tasks, owners, and deadlines
- Teaser content: 3-5 social posts building curiosity (problem-focused, not product-focused)
- Waitlist nurture: email sequence keeping waitlist warm (see `email-sequences.md` waitlist section)
- Influencer seeding: early access to 5-10 key people who can amplify at launch
- PR outreach: personalized pitches to 20-50 relevant journalists/bloggers, embargo offers
- Beta user activation: get testimonials, screenshots, and quotes from beta users before launch
- Launch assets prepared: PH listing, HN draft, press release, social posts, email blasts all drafted

**Method:** Use skill `/launch-campaign` for the complete pre-launch playbook.

### 9.5 Launch Day Execution (T+0)

Maximize day-one impact with coordinated channel activation.

**Deliverables:**
- Hour-by-hour schedule: who does what, when, on which channel
- Channel activation: Product Hunt submission, HN "Show HN" post, Reddit posts, social media blitz, email to waitlist + general list, press embargo lift
- Monitoring dashboard: real-time tracking of signups, traffic, PH rank, social mentions
- Response protocol: templates for positive comments, questions, bug reports, criticism, press inquiries — with response time targets

**Method:** Use skill `/launch-campaign`. Launch day requires full team availability for 12+ hours.

### 9.6 Post-Launch Momentum (T+1 to T+30)

Sustain the launch spike into lasting growth.

**Deliverables:**
- Follow-up content: day 1 retrospective, week 1 metrics post, "what we learned" blog post
- Social proof collection: compile PH comments, tweets, testimonials into reusable assets
- Press follow-up: send launch metrics and user reactions to journalists who didn't cover
- Retrospective: honest internal assessment — what worked, what didn't, what to do differently
- Retargeting: re-engage landing page visitors who didn't convert
- Partnership outreach: approach complementary products identified during competitive research

**Method:** Use skill `/launch-campaign` for the post-launch playbook.

---

## Phase 10: Marketing & Growth

The site is live. Now drive traffic to it.

### 10.1 Search Engine Submission

- Submit sitemap to Google Search Console
- Submit sitemap to Bing Webmaster Tools
- Request indexing for key pages
- Monitor crawl status and fix any errors

### 10.2 Content Marketing

- Publish initial blog content (5-10 posts from Phase 5.2)
- Set up editorial calendar (frequency, topics, authors)
- Distribute content: social media, newsletters, communities
- Guest posting outreach (if applicable)
- Content repurposing: turn blog posts into social snippets, email content, slide decks

### 10.3 Social Media Strategy & Execution

**Setup:**
- Create/update profiles on relevant platforms (LinkedIn, X/Twitter, Reddit — based on where personas spend time)
- Link website from all profiles, consistent branding across platforms
- Configure UTM parameters for all social links (track which platform drives conversions)

**Launch content:**
- Platform-specific launch posts (not the same text cross-posted): LinkedIn (founder story), X (thread + visuals), Reddit (community-appropriate "I built this"), Product Hunt, Hacker News
- See Phase 9.4-9.6 for coordinated launch posting schedule

**Ongoing content:**
- Content calendar seeded from `content-angles.md` content pillars and repurposing map
- Posting cadence: LinkedIn 3-5/week, X 1-2/day, Reddit 2-3/week (community participation, not promotion)
- Content mix: 80% value (insights, tutorials, data), 20% promotional (features, launches, case studies)
- Repurposing pipeline: each blog post → 5 LinkedIn posts + 1 X thread + 3 Reddit comments

**Engagement protocol:**
- Respond to mentions and comments within 4 hours
- Brand monitoring: set up alerts for brand name, product name, founder name, competitor names
- Community participation: answer questions in relevant subreddits, LinkedIn groups, and forums — provide value first

**Method:** Use skill `/social-content` for platform-specific content creation and repurposing.

### 10.4 Email Marketing

**Infrastructure setup:**
- Resend configured: API key, sending domain verified, SPF/DKIM/DMARC records set
- Buttondown configured: API key, newsletter list created, signup form connected
- DMARC policy progression: start `p=none` (monitor 2 weeks) → `p=quarantine` → `p=reject` (after 30 days clean)
- Environment variables added: `RESEND_API_KEY`, `RESEND_FROM_EMAIL` (see `.env.example`)

**Sequences (Resend):**
- Welcome sequence: 7 emails over 14 days — activate new signups (see `email-sequences.md`)
- Onboarding sequence: behavioral triggers based on activation milestones (not time-based)
- Waitlist nurture: pre-launch engagement keeping subscribers ready to convert
- Lifecycle emails: trial expiring, upgrade nudge, usage milestones, win-back (30/60/90 day)

**Newsletter (Buttondown):**
- Cadence: weekly or biweekly (Tuesday/Wednesday send, 9-10am recipient time)
- Content sources: latest blog post + 3-5 curated links + 1 product tip + community highlight
- First 4 editions planned: welcome + best of, deep dive, curated roundup, behind the scenes
- Signup connected to website footer component (`NewsletterSignup.astro`)

**Lifecycle emails (Resend):**
- Trial expiring (T-3 days): recap value delivered, clear upgrade path
- Plan limit reached: show what next tier unlocks, ROI calculation
- Usage milestones: celebrate achievements, suggest next level
- Win-back: 30-day (what's new), 60-day (special offer), 90-day (survey + final attempt)

**Method:** Use skill `/email-marketing` for sequence strategy and copy. Use template `product/[product-slug]/email-sequences.md` for structured output.

### 10.5 Paid Acquisition (if applicable)

- Landing pages built for specific campaigns (see Landing Page workflow)
- UTM parameters defined for tracking
- Conversion tracking pixels installed
- Ad copy aligned with landing page messaging (message match)

### 10.6 Analytics, Retention & Growth

**PostHog dashboard setup:**
- Traffic dashboard: visitors, sources, top pages, geographic distribution
- Conversion funnels: visitor → signup, signup → activation, activation → paid, visitor → contact form
- Retention cohorts: weekly/monthly cohort retention curves, segment by acquisition source
- Feature adoption: which features drive retention, which are ignored
- Email performance: sequence metrics piped from Resend webhooks (open, click, bounce, unsubscribe)

**Growth loops:**
- Referral program: design, implement, and measure (track referral source in PostHog)
- NPS surveys: quarterly, segment by plan tier and usage level, act on detractor feedback within 48 hours
- Churn analysis: exit surveys (90-day win-back email), correlate churn with feature usage patterns
- Feature adoption scoring: identify "aha moment" features that predict retention, optimize onboarding to reach them faster
- User feedback loop: in-app feedback widget, feature request board, public roadmap

**Ongoing rhythm:**
- **Weekly:** Check traffic, conversion rates, email sequence performance, support ticket trends
- **Monthly:** Full dashboard review, content performance analysis, A/B test results, CRO iterations on highest-traffic pages
- **Quarterly:** Retention cohort deep dive, NPS review, competitive landscape update, content strategy refresh, growth experiment retrospective

**A/B testing plan:**
- Prioritize tests by traffic × potential impact
- Use GrowthBook for feature flags and experiments (see `.env.example` for `PUBLIC_GROWTHBOOK_CLIENT_KEY`)
- Test one variable at a time, minimum 200 conversions per variant before calling results
- Document all test results in a shared test log for institutional knowledge

---

## Template Map

Each product gets its own directory: `product/[product-slug]/`. Copy templates from `product/template/` and fill them as you progress through the phases.

| Template | Copied From | Filled During | Consumed By |
|---|---|---|---|
| `product-brief.md` | `product/template/product-brief.md` | Phase 1 (all steps) + Phase 2.1 | Phases 2-5 (brand, content, architecture, copy) |
| `persona.md` (one per persona) | `product/template/persona.md` | Phase 1.4 | Phases 3, 5 (content strategy, copywriting) |
| `competitive-landscape.md` | `product/template/competitive-landscape.md` | Phase 1.3 | Phases 3, 4, 5 (content angles, comparison tables, copy) |
| `messaging-matrix.md` | `product/template/messaging-matrix.md` | Phase 3.2 | Phases 3.3, 4.2, 5 (content strategy, wireframes, copywriting) |
| `content-angles.md` | `product/template/content-angles.md` | Phase 3.1 + 3.3 | Phases 5, 10 (content creation, marketing) |
| `landing-page-data.md` | `product/template/landing-page-data.md` | Phase 4.2 + Phase 5.1 | Phase 4.3 (component development, Astro page build) |
| `email-sequences.md` | `product/template/email-sequences.md` | Phase 10.4 | Phase 10.4 (email marketing setup, Resend + Buttondown config) |

### Data flow between templates

```
product-brief.md ──→ persona.md (§3 Target Audience informs persona creation)
       │
       ├──→ competitive-landscape.md (§12 summary ← full competitor deep dives)
       │
       ├──→ messaging-matrix.md (positioning + personas + competitors → stakeholder messages)
       │         │
       │         ├──→ content-angles.md (messages → content pillars, messaging do's/don'ts)
       │         │                       (persona pain points → content pillars)
       │         │                       (competitor gaps → content angles)
       │         │
       │         └──→ landing-page-data.md (messages → hero headline, problem tabs, features)
       │
       └──→ landing-page-data.md (§5 Golden Circle Why → hero belief statement)
                                  (§2 Problem → problem tabs)
                                  (§6 Solution → features component)
                                  (§8 Pricing → pricing tiers)
                                  (§10 StoryBrand → page narrative flow)

email-sequences.md  ←── product-brief.md (§5 Why → email voice, §13 tone)
                    ←── persona.md (pain points → email hooks, language)
                    ←── content-angles.md (pillars → newsletter content sources)
                    ──→ Resend API (transactional sequences)
                    ──→ Buttondown (newsletter editions)
```

---

## Skill Usage Map

| Phase | Step | Skills | Template Output |
|---|---|---|---|
| 1. Research | Discovery Brief | — | `product-brief.md` §1-3, §5 |
| | Market Research | `/brand-market-research` | `product-brief.md` §14-15 |
| | Competitor Research | `/brand-competitive-analysis` | `competitive-landscape.md`, `product-brief.md` §12 |
| | Persona Research | `/brand-persona-dev` | `persona.md` (×N), `product-brief.md` §3 |
| | Problem/Solution | — | `product-brief.md` §4, §6-11 |
| 2. Brand | Brand Strategy | — | `product-brief.md` §13 |
| | Mood Board | `/brand-mood-board` | — |
| | Color System | `/brand-color-system` | — |
| | Visual Language | `/brand-visual-language` | — |
| | Brand Profile | `/brand-profile-synthesis` | — |
| 3. Content Strategy | SEO Research | `/seo-audit` | `content-angles.md` keywords |
| | Messaging Matrix | — | `messaging-matrix.md` all sections |
| | Content Planning | `/content-strategy` | `content-angles.md` pillars, calendar, funnel |
| | AI Search | `/ai-seo` | — |
| 4. Architecture | Site Structure | `/site-architecture` | — |
| | Wireframes | `/schema-markup` | `landing-page-data.md` all sections |
| | Templates & Views | `/frontend-design`, `/human-design` | — |
| 5. Content | Page Copy | `/copywriting`, `/human-copy` | `landing-page-data.md` final copy |
| | Copy Editing | `/copy-editing` | — |
| | Articles | `/human-articles` | — |
| 6. Images | Sourcing | `/img-sourcing` | — |
| | Creation | `/img-generation` | — |
| | Quality Check | `/img-evaluation` | — |
| 7. SEO | Audit | `/seo-audit` | — |
| | AI Optimization | `/ai-seo` | — |
| | Structured Data | `/schema-markup` | — |
| 8. QA | Content Quality | `/avoid-ai-writing` | — |
| | CRO | `/page-cro` | — |
| 9. Launch | Pre-Launch Buzz (9.4) | `/launch-campaign` | Launch timeline, teaser content |
| | Launch Day (9.5) | `/launch-campaign` | Channel activation, response protocol |
| | Post-Launch (9.6) | `/launch-campaign` | Follow-up content, social proof |
| 10. Marketing | Content Marketing | — | `content-angles.md` calendar, channels |
| | Social Media (10.3) | `/social-content` | Platform-specific posts, content calendar |
| | Email Marketing (10.4) | `/email-marketing` | `email-sequences.md` all sequences |

---

## Execution Order

```
SETUP: Copy templates from product/template/ into product/[product-slug]/
  → product-brief.md, persona.md, competitive-landscape.md,
    content-angles.md, landing-page-data.md, email-sequences.md

PHASE 1: RESEARCH & VALIDATION
  1.1 Discovery Brief              → fills product-brief.md §1-3, §5
  1.2 Market Research & Validation  → fills product-brief.md §14-15
  1.3 Competitor Research            → fills competitive-landscape.md, product-brief.md §12
  1.4 Persona Research               → fills persona.md (×N), product-brief.md §3
  1.5 Problem/Solution Definition    → fills product-brief.md §4, §6-11
  ── Validation Gate: proceed or pivot ──
  ── product-brief.md should be complete at this point ──

PHASE 2: BRAND IDENTITY & DESIGN SYSTEM
  2.1 Brand Strategy                → fills product-brief.md §13
  2.2 Mood Board
  2.3 Color System
  2.4 Typography & Visual Language
  2.5 Brand Profile Synthesis
  ── Brand assets locked ──

PHASE 3: CONTENT STRATEGY & SEO
  3.1 SEO Keyword Research           → fills content-angles.md keywords
  3.2 Messaging Matrix               → fills messaging-matrix.md (all stakeholder messages)
  3.3 Content Strategy & Editorial   → fills content-angles.md pillars, calendar, funnel
  3.4 AI Search Optimization Planning

PHASE 4: SITE ARCHITECTURE & TEMPLATES
  4.1 Information Architecture          ← diverges by site type
  4.2 Wireframes & Page Blueprints      → fills landing-page-data.md
  4.3 Template & Component Development  ← consumes landing-page-data.md

PHASE 5: CONTENT CREATION
  5.1 Page Copy                         → updates landing-page-data.md with final copy
  5.2 Blog & Article Content            ← can parallel with 5.1
  5.3 Case Studies & Social Proof
  5.4 Legal & Compliance Content
  5.5 Careers Page Content            ← company sites only
  5.6 Company Narrative & Origin Story ← company sites only
  5.7 Trust Assets                     ← company sites only

PHASE 6: IMAGE & VISUAL ASSETS
  6.1 Image Strategy
  6.2 Image Sourcing                    ← can parallel with 6.3
  6.3 Image Creation
  6.4 Image Quality Assurance

PHASE 7: SEO & TECHNICAL OPTIMIZATION
  7.1 On-Page SEO
  7.2 Technical SEO
  7.3 AI Search Optimization
  7.4 Accessibility

PHASE 8: TESTING & QA
  8.1 Functional Testing
  8.2 Cross-Browser & Device Testing
  8.3 Performance Testing
  8.4 Content Quality Review

PHASE 9: DEPLOYMENT & LAUNCH
  9.1 Pre-Launch Checklist
  9.2 Hosting & Deployment
  9.3 Post-Deploy Verification
  9.4 Pre-Launch Buzz (T-30 to T-1)   ← uses /launch-campaign
  9.5 Launch Day Execution (T+0)       ← uses /launch-campaign
  9.6 Post-Launch Momentum (T+1-T+30)  ← uses /launch-campaign

PHASE 10: MARKETING & GROWTH
  10.1 Search Engine Submission
  10.2 Content Marketing                ← consumes content-angles.md calendar + channels
  10.3 Social Media Strategy & Execution  ← uses /social-content
  10.4 Email Marketing                    ← uses /email-marketing, fills email-sequences.md
  10.5 Paid Acquisition
  10.6 Analytics, Retention & Growth
```

Phases 1-3 produce reusable brand and strategy assets. A single research + brand phase can feed multiple sites (product site + landing pages for campaigns).

Phases 5 and 6 can run in parallel once templates are built (Phase 4). Content drives image requirements, so start copy first.

Phase 10 is ongoing — it never ends, it just becomes the normal operating rhythm.
