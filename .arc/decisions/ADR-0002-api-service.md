---
id: ADR-0002
category: component
title: API Service
status: accepted
superseded_by: null
component_id: comp_api_service
responsibility: 'Core business logic: authentication/authorization, RBAC, business
  record CRUD, workflow/task management, search & filtering, reporting, audit logging,
  document metadata, API integrations'
kind: api_service
split_reason: Separate backend serving the Web App client
talks_to:
- component_id: comp_relational_database
  interaction: sync
  evidence: Human's architecture draft
- component_id: comp_object_storage
  interaction: sync
  evidence: Human's architecture draft
- component_id: comp_job_queue
  interaction: async
  evidence: Human's architecture draft
- component_id: comp_identity_provider
  interaction: sync
  evidence: Human's architecture draft
evidence: Human's architecture draft in reply to the shape question
---

## Context

Human's architecture draft in reply to the shape question

## Decision

Core business logic: authentication/authorization, RBAC, business record CRUD, workflow/task management, search & filtering, reporting, audit logging, document metadata, API integrations

Kept separate because Separate backend serving the Web App client.

## Talks to

- **Relational Database** (sync) — Human's architecture draft
- **Object Storage** (sync) — Human's architecture draft
- **Job Queue** (async) — Human's architecture draft
- **Identity Provider** (sync) — Human's architecture draft
