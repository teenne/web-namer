/**
 * Analytics tracking library.
 * Integrates with PostHog when PUBLIC_POSTHOG_KEY is set.
 * All functions are safe to call even when PostHog is not loaded.
 */

declare global {
  interface Window {
    posthog?: {
      capture: (event: string, properties?: Record<string, unknown>) => void;
      identify: (id: string, properties?: Record<string, unknown>) => void;
      getFeatureFlag: (flag: string) => string | boolean | undefined;
    };
    __POSTHOG_KEY?: string;
  }
}

// Dev console fallback when PostHog is not loaded
function capture(event: string, properties?: Record<string, unknown>) {
  if (window.posthog) {
    window.posthog.capture(event, {
      page: window.location.pathname,
      ...properties,
    });
  } else {
    console.debug('[tracking]', event, {
      page: window.location.pathname,
      ...properties,
    });
  }
}

// --- Page-level tracking ---

export function trackScrollDepth(slug?: string) {
  const thresholds = [25, 50, 75, 100];
  const fired = new Set<number>();

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = Math.round((scrollTop / docHeight) * 100);

    for (const t of thresholds) {
      if (percent >= t && !fired.has(t)) {
        fired.add(t);
        capture('scroll_depth', { depth: t, slug });
      }
    }
  }, { passive: true });
}

export function trackTimeOnPage(slug?: string) {
  const milestones = [30, 60, 180];
  const fired = new Set<number>();
  const start = Date.now();

  setInterval(() => {
    const elapsed = Math.floor((Date.now() - start) / 1000);
    for (const m of milestones) {
      if (elapsed >= m && !fired.has(m)) {
        fired.add(m);
        capture('time_on_page', { seconds: m, slug });
      }
    }
  }, 5000);
}

export function trackReturnVisitor(slug?: string) {
  const key = 'visited_pages';
  const visited = JSON.parse(localStorage.getItem(key) || '[]') as string[];
  const page = window.location.pathname;

  if (visited.includes(page)) {
    capture('return_visitor', { slug });
  } else {
    visited.push(page);
    localStorage.setItem(key, JSON.stringify(visited));
  }
}

// --- UTM tracking ---

export function parseUtmParams(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']) {
    const val = params.get(key);
    if (val) utm[key] = val;
  }
  return utm;
}

// --- CTA tracking ---

export function trackCtaClick(label: string, location: string) {
  capture('cta_click', { label, location });
}

export function wireAllCtaTracking(page?: string) {
  document.querySelectorAll<HTMLElement>('[data-track="cta_click"]').forEach((el) => {
    el.addEventListener('click', () => {
      trackCtaClick(
        el.dataset.label || el.textContent?.trim() || '',
        el.dataset.location || page || '',
      );
    });
  });
}

// --- FAQ tracking ---

export function trackFaqExpansion(question: string) {
  capture('faq_expansion', { question });
}

export function wireAllFaqTracking(page?: string) {
  document.querySelectorAll<HTMLDetailsElement>('.faq details').forEach((el) => {
    el.addEventListener('toggle', () => {
      if (el.open) {
        const q = el.querySelector('summary')?.textContent?.trim() || '';
        trackFaqExpansion(q);
      }
    });
  });
}

// --- Pricing tracking ---

export function trackPricingTierClick(tier: string, product: string, price?: string) {
  capture('pricing_tier_click', { tier, product, price });
}

// --- Newsletter / Waitlist ---

export function trackNewsletterSignup(emailDomain?: string) {
  capture('newsletter_signup', { email_domain: emailDomain });
}

export function trackWaitlistSignup(product: string, locale?: string) {
  capture('waitlist_signup', { product, locale });
}

// --- Feature grid ---

export function trackFeatureGridClick(featureTitle: string, product?: string) {
  capture('feature_grid_click', { feature: featureTitle, product });
}

export function wireFeatureGridTracking(product?: string) {
  document.querySelectorAll<HTMLElement>('.feature-card').forEach((el) => {
    el.addEventListener('click', () => {
      trackFeatureGridClick(el.dataset.feature || '', product);
    });
  });
}

// --- Convenience: wire everything on a product page ---

export function wireProductPageTracking(product: string) {
  wireAllCtaTracking(product);
  wireAllFaqTracking(product);
  wireFeatureGridTracking(product);
}

// --- Page view tracking ---

export function trackPageView() {
  capture('$pageview', { url: window.location.href });
}

// --- Auto-initialization on page load ---

export function initTracking() {
  wireAllCtaTracking();
  trackPageView();
}
