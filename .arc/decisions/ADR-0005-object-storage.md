---
id: ADR-0005
category: component
title: Object Storage
status: accepted
superseded_by: null
component_id: comp_object_storage
responsibility: Stores uploaded documents and files referenced by business records;
  runs on Amazon S3
kind: infrastructure
split_reason: Document/file management is a distinct backing-service capability (blob
  storage) separate from relational data
evidence: Human's architecture draft in reply to the shape question
---

## Context

Human's architecture draft in reply to the shape question

## Decision

Stores uploaded documents and files referenced by business records; runs on Amazon S3

Kept separate because Document/file management is a distinct backing-service capability (blob storage) separate from relational data.
