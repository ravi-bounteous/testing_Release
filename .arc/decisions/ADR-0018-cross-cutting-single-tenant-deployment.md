---
id: ADR-0018
category: cross_cutting
title: 'Cross-cutting: Single-tenant deployment'
status: accepted
superseded_by: null
component_id: null
decision: One organisation per deployment; no tenant ID or per-tenant schema/stack
  isolation in the data model. Each customer gets its own deployment of the full stack.
evidence: "Human: \"Single tenant \u2014 one organisation per deployment\""
contested: true
alternatives_considered:
- 'Multi-tenant shared tables with tenant ID column: not chosen, one organisation
  per deployment is required'
- 'Schema per tenant in one database: not chosen, adds isolation machinery a single-tenant
  deployment doesn''t need'
- 'Separate stack per tenant as one multi-tenant platform: not chosen, each deployment
  already serves one organisation'
consequences:
- Data model and auth need no tenant scoping
- Each new customer means a new deployment, so deployment must be repeatable (infrastructure
  as code)
- Data residency is decided per deployment
---

## Context

Human: "Single tenant — one organisation per deployment"

## Decision

One organisation per deployment; no tenant ID or per-tenant schema/stack isolation in the data model. Each customer gets its own deployment of the full stack.

## Alternatives considered

- Multi-tenant shared tables with tenant ID column: not chosen, one organisation per deployment is required
- Schema per tenant in one database: not chosen, adds isolation machinery a single-tenant deployment doesn't need
- Separate stack per tenant as one multi-tenant platform: not chosen, each deployment already serves one organisation

## Consequences

- Data model and auth need no tenant scoping
- Each new customer means a new deployment, so deployment must be repeatable (infrastructure as code)
- Data residency is decided per deployment
