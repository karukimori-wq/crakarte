# Crakarte Beta Checklist

## 1. UI / UX
- [x] Mobile bottom navigation isolated and route-aware
- [x] Dashboard mobile layout
- [x] Projects mobile cards
- [x] Clients mobile cards
- [x] Tasks mobile layout
- [x] Project workflow overview

## 2. Data
- [x] Local beta data model for projects, clients and tasks
- [x] Browser localStorage persistence utility
- [ ] Replace local storage with production database before multi-device release

## 3. Workflow
- [x] Estimate → Contract/Specification → Hearing → Production → Revision → Quality → Delivery → Billing flow
- [x] Ball / waiting state concept
- [x] Delivery quality gate

## 4. Client UX
- [x] Dedicated URL route `/client/[token]`
- [x] No-login client confirmation experience
- [x] Approval and revision request UI
- [x] Shared file section
- [ ] Server-side secure token validation before public production use

## 5. Release / Security
- [x] TypeScript dependency installed
- [x] Vercel-compatible Next.js structure
- [x] Beta QA checklist documented
- [ ] Authentication required before storing real client information
- [ ] Database authorization / row-level access required before multi-user launch
- [ ] File upload security and signed URLs required before real delivery files

## Beta definition
The current build is suitable for UI/UX testing and single-device prototype use. Do not store confidential client data until authentication, server-side database access controls, and secure file storage are implemented.
