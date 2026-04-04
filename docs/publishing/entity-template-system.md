# IIoT Devices Template System

This repository is designed for AI-operated publishing, but the live output must work like a buyer-side technical reference, not a thin content site. Pages should help an engineer or technical buyer make a real architecture or shortlist decision.

## Publishing bar

Every substantive page must do all of the following:

1. Target a live plant, retrofit, protocol, or device-selection problem.
2. State what decision the page helps the reader make.
3. Explain fit, poor fit, tradeoffs, and maintenance consequences.
4. Give enough technical detail that an engineer could use the page to frame a shortlist or integration plan.
5. Move the reader forward with related applications, protocols, vendors, or comparison pages.

General depth targets:

- `seed`: usually 1,200+ words
- `growing`: usually 1,500+ words
- `cornerstone`: usually 1,800+ words

Do not publish:

- glossary-only pages without deployment relevance
- vendor pages that read like catalog summaries
- comparison pages without concrete decision criteria
- architecture pages that ignore commissioning, maintenance, or support burden

## Shared frontmatter

Use these fields on every substantive page:

- `title`
- `description`
- `referenceType`
- `adProfile`
- `commercialIntent`
- `reviewCadence`
- `primaryKeyword`
- `searchIntent`
- `decisionStage`
- `targetRoles`
- `contentStatus`
- `problemSolved`
- `readerTakeaway`
- `keyQuestions`
- `notFor`
- `updateTriggers`

## Universal long-form structure

Use this shape unless the page has a strong reason to vary:

1. `Quick answer`
2. `When this page should guide the decision`
3. `Site, machine, or protocol constraints`
4. `Architecture or shortlist logic`
5. `Fit, poor fit, and tradeoffs`
6. `Commissioning, support, or maintenance implications`
7. `Decision checklist`
8. `Related pages to read next`

## Vendor template

Use for Siemens, Phoenix Contact, Advantech, Moxa, and similar portfolio pages.

Required sections:

1. Quick answer and buyer fit
2. Where the vendor matters in real projects
3. Product-family strengths by deployment type
4. Limits, ecosystem watchouts, and support implications
5. Who should shortlist the vendor and who should not
6. Related product-family, protocol, and comparison pages

## Product family template

Use for gateways, RTUs, remote I/O, switches, edge computers, and related hardware categories.

Required sections:

1. What the category is for
2. What problem it solves in the architecture
3. Best-fit deployment conditions
4. Poor-fit cases and overbuy risks
5. Buying and maintenance signals
6. Related protocols, vendors, or applications

## Protocol template

Use for Modbus, MQTT, OPC UA, serial bridging, and translation topics.

Required sections:

1. Which layer this protocol decision belongs to
2. What the protocol solves well
3. Constraints, translation needs, and operational costs
4. Common architecture mistake
5. Device and commissioning implications
6. Compare next

## Application template

Use for retrofit, remote monitoring, machine connectivity, and similar deployment contexts.

Required sections:

1. Quick answer and commercial objective
2. Site constraints and project pressures
3. Recommended architecture sequence
4. Product-family and protocol fit
5. Failure modes, commissioning issues, and support burden
6. Decision checklist
7. Related shortlist pages

## Comparison template

Use for shortlist-stage pages with strong purchase intent.

Required sections:

1. Comparison scope
2. Quick verdict by project type
3. Decision criteria
4. Where each option fits
5. Failure cases and support implications
6. Next-step references
