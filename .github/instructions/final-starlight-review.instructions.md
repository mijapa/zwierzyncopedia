---
description: "Use when implementing or editing Zwierzyncopedia Astro Starlight pages, content, styles, components, configuration, accessibility, or SEO. Requires a final pass with the Starlight Best Practices Reviewer before handoff."
name: "Require Final Starlight Review"
applyTo: "astro.config.mjs, src/content.config.ts, src/components/**/*.astro, src/styles/**/*.css, src/content/docs/**/*.md, src/content/docs/**/*.mdx, public/**/*.txt, public/**/*.xml, src/pages/**/*.ts"
---
# Final Review Requirement

For substantive changes in this repository, finish the task with the custom agent named `Starlight Best Practices Reviewer` before sending the final user-facing response.

Treat the review as required when a task changes any of the following:

- Astro or Starlight configuration.
- Content schema or content rendering components.
- Styles that affect Starlight layout, typography, cards, asides, figures, or the infobox.
- Markdown or MDX content pages.
- Metadata, RSS, robots, or other SEO-relevant assets.

## Handoff Rules

- Run the reviewer after implementation is complete and after any direct validation you perform.
- Summarize the review outcome in the final response.
- Fix must-fix findings before handoff when feasible.
- If you intentionally leave a recommendation unresolved, say so briefly.
- If the reviewer could not be run, state that explicitly and explain why.

## Expected Review Coverage

The final review should check:

- Astro Starlight best practices and compatibility with current repo conventions.
- Accessibility basics such as alt text, headings, link clarity, and responsive behavior.
- SEO basics such as title/description quality, metadata implications, and base-path awareness.
- Editorial quality relative to the project's writing and sourcing guidance.

Keep this requirement complementary to CI. Existing Markdown and YAML linting do not replace the final Starlight-focused review.
