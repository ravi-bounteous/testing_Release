---
id: ADR-0011
category: deployment_target
title: "Deployment target: AWS, single region per deployment (region not fixed yet;\
  \ chosen per deployment\u2026"
status: accepted
superseded_by: null
component_id: null
decision: AWS, single region per deployment (region not fixed yet; chosen per deployment,
  no cross-region replica or standby), Amazon ECS Fargate (managed containers) for
  compute
evidence: 'Human''s architecture draft; human: "Region not fixed yet"'
---

## Context

Human's architecture draft; human: "Region not fixed yet"

## Decision

AWS, single region per deployment (region not fixed yet; chosen per deployment, no cross-region replica or standby), Amazon ECS Fargate (managed containers) for compute
