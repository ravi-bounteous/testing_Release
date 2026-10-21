---
id: ADR-0003
category: component
title: Worker
status: accepted
superseded_by: null
component_id: comp_worker
responsibility: 'Background jobs: asynchronous notification/alert delivery, scheduled/heavy
  report generation, document processing'
kind: worker
split_reason: Background work (notifications, report generation) has different scaling/scheduling
  needs than request/response API traffic
talks_to:
- component_id: comp_job_queue
  interaction: async
  evidence: Human's architecture draft
- component_id: comp_relational_database
  interaction: sync
  evidence: Human's architecture draft
- component_id: comp_object_storage
  interaction: sync
  evidence: Human's architecture draft
evidence: Human's architecture draft in reply to the shape question
---

## Context

Human's architecture draft in reply to the shape question

## Decision

Background jobs: asynchronous notification/alert delivery, scheduled/heavy report generation, document processing

Kept separate because Background work (notifications, report generation) has different scaling/scheduling needs than request/response API traffic.

## Talks to

- **Job Queue** (async) — Human's architecture draft
- **Relational Database** (sync) — Human's architecture draft
- **Object Storage** (sync) — Human's architecture draft
