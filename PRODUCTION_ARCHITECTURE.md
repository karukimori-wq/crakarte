# Crakarte Production Architecture

## Current beta
The current application stores prototype data in browser localStorage. This is intentionally limited to UI testing and single-device beta use.

## Production requirements

### Authentication
- Owner/creator account authentication is required.
- Client portal must use high-entropy, revocable, expiring share tokens.
- Client share URLs must never expose internal project IDs as authorization credentials.

### Database
Core relations:
- users
- clients (owner_id)
- projects (owner_id, client_id)
- tasks (owner_id, project_id)
- workflow_stages (project_id, stage, status, completed_at)
- revisions (project_id, round, status, priority, due_at)
- communications (project_id, channel, body, occurred_at)
- documents (project_id, type, version, status)
- client_portal_tokens (project_id, token_hash, expires_at, revoked_at)
- files (project_id, storage_key, visibility)

Every query must be scoped to the authenticated owner. Database-level row access policies are recommended.

### File storage
- Private bucket by default.
- Signed, short-lived download URLs.
- Validate file type and size on upload.
- Do not expose permanent public storage URLs for client deliverables.

### Client portal
- Resolve share token server-side.
- Store only a hash of the token in the database.
- Allow token rotation/revocation.
- Log approvals and revision requests with timestamp.

## Environment variables
Production provider credentials must be configured in Vercel and must not be committed to GitHub.

## Migration sequence
1. Choose production auth/database/storage provider.
2. Create schema and access policies.
3. Replace `src/lib/store.ts` localStorage adapter with a server-side repository layer.
4. Add authenticated route protection.
5. Replace demo client portal route authorization with secure token lookup.
6. Add private file upload and signed downloads.
7. Run build, authorization, cross-account isolation and mobile QA tests.

## Release gate
Do not use real confidential client information until authentication, database access controls, secure portal tokens and private file storage are enabled and tested.
