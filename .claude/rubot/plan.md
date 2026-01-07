# Rubot Execution Plan

> Generated: 2026-01-07T00:00:00.000Z
> Status: **Pending Approval**

## Task Summary

- **Description**: Build a complete responsive marketing website for East Coach (tennis coaching service in Makassar) with 8 sections based on Figma designs
- **Complexity**: Complex
- **Domains**: UI/Components, Responsive Design, TanStack Framework, SEO, Debugging, Testing
- **Estimated Steps**: 45

## Agents Consulted

| Agent | Domain | Recommendation Summary |
|-------|--------|------------------------|
| `shadcn-ui-designer` | UI Components | Use shadcn/ui base components (Button, Card, Badge, Separator) with custom marketing components. Implement reusable ServiceCard, CoachCard, TestimonialCard components. Prioritize accessibility with WCAG 2.1 AA compliance. Use mobile-first approach with progressive enhancement. |
| `responsive-master` | Responsive Design | Test at exact breakpoint boundaries (320px, 768px, 992px, 1200px). Use Tailwind v4 mobile-first utilities. Avoid fixed widths, ensure no horizontal overflow. Implement responsive images with proper sizing. Use container queries for component-level responsiveness. |
| `tanstack` | Framework | Use file-based routing with single index.tsx route. Leverage server components for static content. Implement proper SSR metadata. Use TanStack Query via router integration. Consider lazy loading for heavy sections. |
| `seo-master` | SEO | Implement LocalBusiness schema, Service schemas, Open Graph tags. Create robots.txt and XML sitemap. Use semantic HTML5 with proper heading hierarchy (H1 → H2 → H3). NAP consistency critical for local SEO. Target "tennis coaching Makassar" keywords. |

## Prerequisites

### Design Assets Required
- [ ] **Figma file access**: Verify access to https://www.figma.com/design/bo7gvDghNKpnNIHgsjMNiz/Courtside
- [ ] **Design tokens extraction**: Use Figma MCP Server to extract colors, typography, spacing
- [ ] **Image assets**: Export all required images from Figma (hero backgrounds, coach photos, icons)

### Project Setup
- [ ] Verify TanStack Start project is properly initialized
- [ ] Confirm Tailwind CSS v4 is configured
- [ ] Verify shadcn/ui is installed and configured

### Brand Information
- [ ] **Brand colors**: East Coach primary/secondary/accent colors (needed for CSS custom properties)
- [ ] **NAP details**: Business Name, Address, Phone number for local SEO
- [ ] **Business description**: Final copy for About section
- [ ] **Coach profiles**: Names, roles, photos, bios
- [ ] **Testimonials**: Customer quotes, names, photos

## Implementation Checklist

### Phase 1: Setup & Preparation

#### Design System Setup
- [ ] Use Figma MCP Server to extract design tokens from all 8 Figma nodes
- [ ] Create CSS custom properties for brand colors in `apps/web/src/styles/globals.css`
- [ ] Configure Tailwind v4 breakpoints (sm: 481px, md: 768px, lg: 992px, xl: 1200px)
- [ ] Map Figma typography scale to Tailwind classes
- [ ] Extract and document spacing scale from Figma

#### shadcn/ui Component Installation
- [ ] Install base components: `bunx --bun shadcn@canary add button card badge separator`
- [ ] Install navigation components: `bunx --bun shadcn@canary add navigation-menu sheet`
- [ ] Install additional components: `bunx --bun shadcn@canary add avatar`
- [ ] Verify all components are properly configured in `apps/web/src/components/ui/`

#### Base Layout Components
- [ ] Create `Container` component for max-width and responsive padding
- [ ] Create `Section` wrapper component for consistent vertical spacing
- [ ] Set up project structure: `components/layout/`, `components/marketing/`, `components/features/`

#### SEO Foundation
- [ ] Create `apps/web/public/robots.txt` with sitemap reference
- [ ] Create `apps/web/public/sitemap.xml` with initial home page entry
- [ ] Set up metadata export function pattern for routes

### Phase 2: Core Implementation

#### Section 1: Hero Section
- [ ] Fetch Figma specs for Hero (node-id=9-80)
- [ ] Implement Hero component with background image handling
- [ ] Add responsive typography scaling
- [ ] Create CTA buttons with hover/active states
- [ ] Ensure full viewport height on mobile, proper scaling on desktop
- [ ] Add proper alt text and ARIA labels

#### Section 2: Our Services Section
- [ ] Fetch Figma specs for Services (node-id=10-135)
- [ ] Create reusable `ServiceCard` component using shadcn Card
- [ ] Implement responsive grid: 1 column → 2 columns → 3 columns
- [ ] Add hover effects with `group` utilities
- [ ] Ensure equal card heights with flex layout
- [ ] Add service icons (from Figma or icon library)

#### Section 3: About Us Section
- [ ] Fetch Figma specs for About (node-id=14-61)
- [ ] Implement two-column layout (image + text)
- [ ] Maintain proper line length for readability
- [ ] Ensure mobile-first stacking order
- [ ] Add responsive image sizing

#### Section 4: Why Choose Us Section
- [ ] Fetch Figma specs for Why Choose Us (node-id=16-62)
- [ ] Create value proposition components
- [ ] Implement consistent iconography
- [ ] Ensure visual rhythm with spacing consistency
- [ ] Add responsive grid layout

#### Section 5: Our Coaches Section
- [ ] Fetch Figma specs for Coaches (node-id=18-157)
- [ ] Create reusable `CoachCard` component
- [ ] Implement responsive grid: 1 column → 2 columns → 4 columns
- [ ] Add coach images with proper aspect ratios (3:4 portrait)
- [ ] Ensure names and roles remain legible at all screen sizes
- [ ] Add social links or contact buttons

#### Section 6: Testimonials Section
- [ ] Fetch Figma specs for Testimonials (node-id=20-197)
- [ ] Create reusable `TestimonialCard` component
- [ ] Implement quote styling with proper attribution
- [ ] Add optional carousel/slider behavior (accessibility-compliant)
- [ ] Ensure text contrast and readability
- [ ] Use shadcn Avatar for customer photos/initials

#### Section 7: Join Us Section
- [ ] Fetch Figma specs for Join Us (node-id=21-211)
- [ ] Create prominent CTA section
- [ ] Add button with proper link destination
- [ ] Ensure visual focus on conversion intent
- [ ] Make button full-width on mobile

#### Section 8: Footer Section
- [ ] Fetch Figma specs for Footer (node-id=21-240)
- [ ] Implement footer with navigation links
- [ ] Add branding and contact info (NAP for local SEO)
- [ ] Ensure clean layout on small screens
- [ ] Add social media links
- [ ] Include copyright and legal links

### Phase 3: Integration & Wiring

#### Navigation & Layout
- [ ] Create main navigation component (desktop horizontal + mobile hamburger)
- [ ] Implement mobile menu with shadcn Sheet component
- [ ] Add smooth scroll behavior for anchor links
- [ ] Create main page layout in `apps/web/src/routes/index.tsx`
- [ ] Wire all 8 sections into home page

#### SEO Implementation
- [ ] Add metadata export to index.tsx (title, description, OG tags)
- [ ] Implement JSON-LD LocalBusiness schema in home page
- [ ] Add JSON-LD Service schemas for each service
- [ ] Implement JSON-LD Person schemas for coaches
- [ ] Add canonical URL tags
- [ ] Ensure semantic HTML structure (header, main, section, footer)
- [ ] Verify proper heading hierarchy (single H1, logical H2/H3 nesting)

#### Accessibility Enhancement
- [ ] Verify all images have descriptive alt text
- [ ] Add skip-link for keyboard navigation
- [ ] Ensure all interactive elements have focus-visible states
- [ ] Add ARIA labels to icon-only buttons
- [ ] Verify color contrast meets WCAG 2.1 AA (4.5:1 for text)
- [ ] Test keyboard navigation through entire page
- [ ] Ensure form inputs have associated labels (if forms added)

#### Performance Optimization
- [ ] Implement lazy loading for below-fold images
- [ ] Optimize image formats (WebP with JPEG fallback)
- [ ] Add proper image sizing attributes
- [ ] Minimize JavaScript bundle size
- [ ] Enable compression for assets

### Phase 4: Verification & Cleanup

#### Responsive Testing
- [ ] Test at 320px (mobile) - verify no horizontal overflow
- [ ] Test at 768px (tablet boundary) - verify grid transitions
- [ ] Test at 992px (desktop boundary) - verify layout changes
- [ ] Test at 1200px (large screens) - verify maximum width behavior
- [ ] Test 1px above/below each breakpoint for transition issues
- [ ] Verify touch targets are minimum 44x44px on mobile
- [ ] Test in both portrait and landscape orientations

#### Cross-Browser Testing
- [ ] Test in Chrome Desktop
- [ ] Test in Chrome Mobile (Android)
- [ ] Test in Safari Desktop (macOS)
- [ ] Test in Safari Mobile (iOS)
- [ ] Test in Firefox Desktop
- [ ] Test in Edge Desktop

#### Validation & Quality Checks
- [ ] Run `bun x ultracite check` - verify no linting errors
- [ ] Run `bun x ultracite fix` - auto-fix any formatting issues
- [ ] Run `bun run check-types` - ensure no TypeScript errors
- [ ] Run `bun run build` - verify production build succeeds
- [ ] Test all routes in development server
- [ ] Verify no console errors in browser DevTools
- [ ] Check Lighthouse scores (Performance, Accessibility, Best Practices, SEO)

#### SEO Verification
- [ ] Validate robots.txt is accessible at `/robots.txt`
- [ ] Validate sitemap.xml is accessible at `/sitemap.xml`
- [ ] Test JSON-LD schemas with Google Rich Results Test
- [ ] Validate Open Graph tags with Facebook Sharing Debugger
- [ ] Verify all pages have unique title tags (50-60 chars)
- [ ] Verify all pages have unique meta descriptions (150-160 chars)
- [ ] Check canonical URLs are properly set
- [ ] Verify NAP consistency in footer

#### Final Cleanup
- [ ] Remove all console.log statements
- [ ] Remove any unused imports
- [ ] Verify no TODO comments remain
- [ ] Check for and remove any hardcoded placeholder data
- [ ] Ensure all images have proper alt text
- [ ] Verify responsive images have correct srcset attributes

## Files to Modify

| File | Action | Agent |
|------|--------|-------|
| `apps/web/src/routes/index.tsx` | Implement main page with all 8 sections | tanstack |
| `apps/web/src/styles/globals.css` | Add CSS custom properties for brand colors | shadcn-ui-designer |
| `tailwind.config.js` | Configure custom breakpoints | responsive-master |
| `apps/web/vite.config.ts` | Verify image optimization settings | tanstack |

## Files to Create

| File | Purpose | Agent |
|------|---------|-------|
| `apps/web/src/components/layout/Container.tsx` | Max-width wrapper component | shadcn-ui-designer |
| `apps/web/src/components/layout/Section.tsx` | Vertical spacing wrapper | shadcn-ui-designer |
| `apps/web/src/components/marketing/Hero.tsx` | Hero section component | shadcn-ui-designer |
| `apps/web/src/components/marketing/ServiceCard.tsx` | Reusable service card component | shadcn-ui-designer |
| `apps/web/src/components/marketing/OurServices.tsx` | Services section | shadcn-ui-designer |
| `apps/web/src/components/marketing/AboutUs.tsx` | About section | shadcn-ui-designer |
| `apps/web/src/components/marketing/WhyChooseUs.tsx` | Value props section | shadcn-ui-designer |
| `apps/web/src/components/marketing/CoachCard.tsx` | Reusable coach card | shadcn-ui-designer |
| `apps/web/src/components/marketing/OurCoaches.tsx` | Coaches section | shadcn-ui-designer |
| `apps/web/src/components/marketing/TestimonialCard.tsx` | Reusable testimonial card | shadcn-ui-designer |
| `apps/web/src/components/marketing/Testimonials.tsx` | Testimonials section | shadcn-ui-designer |
| `apps/web/src/components/marketing/JoinUs.tsx` | CTA section | shadcn-ui-designer |
| `apps/web/src/components/layout/Footer.tsx` | Footer component | shadcn-ui-designer |
| `apps/web/src/components/layout/Navbar.tsx` | Navigation component | shadcn-ui-designer |
| `apps/web/public/robots.txt` | SEO crawler directives | seo-master |
| `apps/web/public/sitemap.xml` | XML sitemap | seo-master |

## Risks & Mitigations

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| **Figma access unavailable** | High - Cannot match design exactly | Medium | User must provide design specifications manually or grant Figma access. Have fallback design system standards ready. |
| **Missing brand information** | High - Cannot complete content | High | User must provide NAP details, coach profiles, testimonials before implementation can complete. |
| **Image assets not exported** | High - Visual design incomplete | High | Use placeholder images initially, replace with final assets when provided. Document all required image dimensions. |
| **Responsive breakpoint conflicts** | Medium - Layout breaks at certain sizes | Low | Test at exact boundaries (1px above/below). Use Tailwind's mobile-first approach to prevent conflicts. |
| **SEO schema validation errors** | Low - Rich results not eligible | Low | Validate all JSON-LD with Google Rich Results Test before deployment. |
| **Performance budget exceeded** | Medium - Slow load times | Medium | Implement lazy loading, image optimization, code splitting. Monitor with Lighthouse. |
| **Accessibility compliance issues** | Medium - Excludes users | Low | Test with keyboard navigation, screen readers, and color contrast analyzers. Follow WCAG 2.1 AA guidelines. |
| **TanStack Start hydration errors** | High - SSR breaks | Medium | Use hydration-solver agent if issues arise. Ensure client/server component boundaries are correct. |

## Conflicts Detected

### Design Asset Conflicts
- **ISSUE**: Figma MCP Server access may require authentication
- **RESOLUTION**: User needs to confirm Figma file access or provide design specifications manually

### Content Dependencies
- **ISSUE**: Coach profiles, testimonials, and final copy not provided in PRD
- **RESOLUTION**: Use placeholder content initially, user must replace with final content

### Image Assets
- **ISSUE**: Images need to be exported from Figma at multiple resolutions
- **RESOLUTION**: Document all required image dimensions and formats. Implement with placeholders until assets provided.

## Rollback Plan

If implementation fails:

1. **Safe Git State**: Run `git status` to see all changed files
2. **Stash Changes**: Run `git stash` to save work without committing
3. **Clean State**: Run `git checkout .` to discard all uncommitted changes

## Approval

- [ ] Plan reviewed by user
- [ ] Figma access confirmed or design specifications provided
- [ ] Brand colors and NAP details provided
- [ ] All questions/ambiguities resolved
- [ ] Ready for execution

---

**Next Step**: Run `/rubot-execute` to implement this plan.

## Notes

### Before Execution Begins, User Must Provide:

1. **Figma Access**: Can you access the Figma file at https://www.figma.com/design/bo7gvDghNKpnNIHgsjMNiz/Courtside? If not, can you provide design specifications (colors, fonts, spacing)?

2. **Brand Colors**: What are East Coach's brand colors? (Primary, secondary, accent, etc.)

3. **Business Information (NAP)**:
   - Business Name: East Coach (confirmed)
   - Address: [Street address in Makassar]
   - Phone: [Phone number with country code]
   - Email: [Contact email]
   - Operating hours: [Days and times]

4. **Content Assets**:
   - Coach profiles (names, roles, photos, bios)
   - Testimonials (customer quotes, names, photos)
   - Final copy for each section (or use placeholders initially)

5. **Image Assets**: All images exported from Figma at appropriate resolutions, or permission to use placeholder images during development.
