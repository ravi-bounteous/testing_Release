---
id: ADR-0007
category: component
title: Identity Provider
status: accepted
superseded_by: null
component_id: comp_identity_provider
responsibility: Authentication and authorization via OIDC/SAML; AWS Cognito initially,
  with future support for Microsoft Entra ID, Okta, Keycloak, or any OIDC/SAML-compatible
  provider
kind: managed_service
split_reason: Backing identity service the project uses but doesn't build
evidence: Human's architecture draft in reply to the shape question
---

## Context

Human's architecture draft in reply to the shape question

## Decision

Authentication and authorization via OIDC/SAML; AWS Cognito initially, with future support for Microsoft Entra ID, Okta, Keycloak, or any OIDC/SAML-compatible provider

Kept separate because Backing identity service the project uses but doesn't build.
