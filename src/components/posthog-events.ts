/**
 * PostHog Custom Events & Feature Flags Utilities
 *
 * Usage: Import these helpers in your Astro components or client-side scripts.
 * Since PostHog loads via the <PostHog> component, `window.posthog` is
 * available globally on any page that includes it.
 *
 * For Astro components, use these inside a <script> tag (client-side).
 */

// ─── Type safety ────────────────────────────────────────────────
declare global {
  interface Window {
    posthog: any;
  }
}

function ph() {
  return window.posthog;
}

// ─── CTA & Conversion Events ───────────────────────────────────

/** Track a CTA button click */
export function trackCTAClick(
  ctaName: string,
  destination?: string,
  metadata?: Record<string, any>
) {
  ph()?.capture("cta_clicked", {
    cta_name: ctaName,
    destination: destination || "",
    ...metadata,
  });
}

/** Track a form submission (contact, signup, demo request, etc.) */
export function trackFormSubmit(
  formName: string,
  formType: "contact" | "signup" | "demo" | "newsletter" | "other",
  metadata?: Record<string, any>
) {
  ph()?.capture("form_submitted", {
    form_name: formName,
    form_type: formType,
    ...metadata,
  });
}

/** Track a landing page conversion (visitor took the desired action) */
export function trackLPConversion(
  lpSlug: string,
  conversionType: "cta_click" | "form_submit" | "signup" | "demo_request",
  metadata?: Record<string, any>
) {
  ph()?.capture("lp_conversion", {
    lp_slug: lpSlug,
    conversion_type: conversionType,
    ...metadata,
  });
}

// ─── Engagement Events ──────────────────────────────────────────

/** Track scroll depth (call at 25%, 50%, 75%, 100%) */
export function trackScrollDepth(depth: 25 | 50 | 75 | 100) {
  ph()?.capture("scroll_depth", {
    depth_percent: depth,
  });
}

/** Track an outbound link click */
export function trackOutboundClick(url: string, linkText?: string) {
  ph()?.capture("outbound_click", {
    url: url,
    link_text: linkText || "",
  });
}

/** Track video play */
export function trackVideoPlay(videoId: string, videoTitle?: string) {
  ph()?.capture("video_played", {
    video_id: videoId,
    video_title: videoTitle || "",
  });
}

/** Track pricing page view (useful for conversion funnels) */
export function trackPricingView(product?: string) {
  ph()?.capture("pricing_viewed", {
    product: product || "",
  });
}

// ─── Feature Flags ──────────────────────────────────────────────

/**
 * Check if a feature flag is enabled.
 * Returns a promise that resolves when flags are loaded.
 *
 * Usage:
 *   const showNewHero = await isFeatureEnabled("new-hero-section");
 */
export function isFeatureEnabled(flagKey: string): Promise<boolean> {
  return new Promise((resolve) => {
    if (!ph()) {
      resolve(false);
      return;
    }
    ph().onFeatureFlags(() => {
      resolve(ph().isFeatureEnabled(flagKey) || false);
    });
  });
}

/**
 * Get a feature flag variant (for multivariate flags).
 *
 * Usage:
 *   const variant = await getFeatureFlag("hero-headline-test");
 *   // variant might be "control", "variant-a", "variant-b"
 */
export function getFeatureFlag(flagKey: string): Promise<string | boolean | undefined> {
  return new Promise((resolve) => {
    if (!ph()) {
      resolve(undefined);
      return;
    }
    ph().onFeatureFlags(() => {
      resolve(ph().getFeatureFlag(flagKey));
    });
  });
}

/**
 * Get the JSON payload for a feature flag.
 * Useful for passing dynamic content (headlines, images, etc.) from PostHog.
 */
export function getFeatureFlagPayload(flagKey: string): Promise<any> {
  return new Promise((resolve) => {
    if (!ph()) {
      resolve(undefined);
      return;
    }
    ph().onFeatureFlags(() => {
      resolve(ph().getFeatureFlagPayload(flagKey));
    });
  });
}

// ─── Scroll Depth Auto-Tracker ──────────────────────────────────

/**
 * Call this once on page load to automatically track scroll milestones.
 * Add to your BaseLayout or individual pages.
 */
export function initScrollTracking() {
  const milestones = [25, 50, 75, 100] as const;
  const reached = new Set<number>();

  function checkScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;

    const percent = Math.round((scrollTop / docHeight) * 100);

    for (const milestone of milestones) {
      if (percent >= milestone && !reached.has(milestone)) {
        reached.add(milestone);
        trackScrollDepth(milestone);
      }
    }
  }

  window.addEventListener("scroll", checkScroll, { passive: true });
}

// ─── Outbound Link Auto-Tracker ─────────────────────────────────

/**
 * Call this once on page load to automatically track outbound link clicks.
 */
export function initOutboundTracking() {
  document.addEventListener("click", (e) => {
    const link = (e.target as HTMLElement).closest("a");
    if (!link) return;

    const href = link.getAttribute("href");
    if (!href) return;

    try {
      const url = new URL(href, window.location.origin);
      if (url.hostname !== window.location.hostname) {
        trackOutboundClick(href, link.textContent?.trim());
      }
    } catch {
      // Invalid URL, skip
    }
  });
}