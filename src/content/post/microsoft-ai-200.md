---
title: "From 70-486 to AI-200: a Microsoft cert lineage"
description: "AI-200 — the Azure AI Cloud Developer Associate certification — replaces AZ-204 in July 2026. What it covers, when it goes live, and how it fits a decade of Microsoft developer certs."
publishDate: "2026-05-03"
tags: ["certification", "azure", "ai", "ai-200"]
draft: true
---

Ten years ago I [wrote about studying for 70-486](/posts/microsoft-70-486), Microsoft's ASP.NET MVC developer exam. That certification was retired. Its successor, **AZ-204 (Azure Developer Associate)**, retires on **July 31, 2026**. The same month, a new exam takes its place: **AI-200, Microsoft Certified: Azure AI Cloud Developer Associate**.

The pattern holds across the decade: every six-ish years Microsoft pivots the developer track to whatever it currently considers core, and the certification follows about a year later. Each pivot is also a snapshot of what "developer" means to Microsoft at that moment.

## The lineage

**70-486 — *Developing ASP.NET MVC Web Applications* (retired).**
Razor views, model binding, OWIN, Forms auth, MSDN as the primary documentation source. The 2014 developer shipped IIS-hosted web apps.

**AZ-204 — *Developing Solutions for Microsoft Azure* (retires July 31, 2026).**
Azure Functions, Blob and Cosmos storage, Azure AD authentication, Application Insights, Service Bus. The 2020 developer wired together cloud services.

**AI-200 — *Azure AI Cloud Developer Associate* (live July 2026).**
The 2026 developer builds AI applications. The skills measured make that explicit.

## What AI-200 covers

The exam's official skills measured land in four broad areas:

- **AI integration on Azure** — building the application layer on top of Microsoft Foundry, calling models, managing model lifecycles.
- **Containerized compute and vector-enabled databases** — running inference workloads, working with embeddings and vector search as first-class data primitives.
- **Event-driven AI pipelines and serverless functions** — wiring AI calls into Functions, Event Grid, queues; reasoning about latency, retries, and cost.
- **Secret management and distributed observability** — secrets, tracing, evaluating systems whose outputs aren't deterministic.

The last one is the meaningful shift. Traditional cloud-developer certs assumed the same input gave the same output. AI-native systems don't behave that way, and AI-200 puts the operational discipline — tracing, evals, governance — explicitly on the developer.

## Logistics

- **Beta and training**: available since April 2026.
- **Exam goes live**: July 2026.
- **Replaces**: AZ-204, retiring the same month.
- **Level**: Intermediate.

Cost, exam duration, and language availability are not yet published — they typically firm up at general availability.

## Where to start

- [Microsoft Learn — Credentials](https://learn.microsoft.com/en-us/credentials/) — search "Azure AI Cloud Developer Associate" for the canonical exam page once it's live.
- [The AI job boom is here — are you ready to showcase your skills?](https://techcommunity.microsoft.com/blog/skills-hub-blog/the-ai-job-boom-is-here-are-you-ready-to-showcase-your-skills/4494128) — Microsoft's announcement of the full 2026 certification refresh, with retirement dates and replacement exams.
- [AZ-204 study guide](https://aka.ms/AZ204-studyguide) — still relevant background, since AI-200 builds on the same Azure primitives.

The certs date and the platform pivots, but the ideas underneath them — distributed systems, observability, security, now AI-native architecture — are what compound.
