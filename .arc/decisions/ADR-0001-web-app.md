---
id: ADR-0001
category: component
title: Web App
status: accepted
superseded_by: null
component_id: comp_web_app
responsibility: Browser-based UI for End Users (manage business records, view dashboards/reports,
  receive notifications) and Administrators (manage users/roles, master data, settings,
  analytics dashboards), with role-based views
kind: web_ui
split_reason: Only client/runtime described so far; serves both user groups via RBAC-driven
  views
talks_to:
- component_id: comp_api_service
  interaction: sync
  evidence: Human's architecture draft
- component_id: comp_identity_provider
  interaction: sync
  evidence: Human's architecture draft
evidence: Human's architecture draft in reply to the shape question
---

## Context

Human's architecture draft in reply to the shape question

## Decision

Browser-based UI for End Users (manage business records, view dashboards/reports, receive notifications) and Administrators (manage users/roles, master data, settings, analytics dashboards), with role-based views

Kept separate because Only client/runtime described so far; serves both user groups via RBAC-driven views.

## Talks to

- **API Service** (sync) — Human's architecture draft
- **Identity Provider** (sync) — Human's architecture draft
