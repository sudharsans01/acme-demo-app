# ACME Cloud Demo Store

A polished demo web application for the ACME CLOUD platform. Designed for live platform demonstrations — intentionally simple, reliable, and fully self-contained.

## Technology Stack

| Layer | Technology |
|-------|-----------|
| UI Framework | React 18 + TypeScript |
| Build Tool | Vite 5 |
| Web Server | nginx (Alpine) |
| Container | Docker (multi-stage) |

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## TypeScript Check

```bash
npx tsc --noEmit
```

## Production Build

```bash
npm run build
# Output: dist/
```

## Docker Build

```bash
docker build -t acme-demo-store .
```

No build arguments or environment variables required.

## Docker Run

```bash
docker run --rm -p 8080:80 acme-demo-store
```

Open http://localhost:8080

## Container Port

The container listens on **port 80**.

## Health Endpoint

```
GET /health  →  HTTP 200  "OK"
```

Used by Kubernetes liveness/readiness probes.

## Deploying to ACME CLOUD

| Field | Value |
|-------|-------|
| Application Name | `acme-demo-store` |
| Namespace | `demo-dev` |
| Branch | `main` |
| Dockerfile | `Dockerfile` |
| Build Context | `.` |
| Container Port | `80` |

No secrets, environment variables, build arguments, or external dependencies are required.

## Architecture

```
Browser → ACME CLOUD Ingress (HTTPS) → nginx:80 → React SPA (static files)
```

The container serves pre-compiled static files only. All routing is handled client-side via the nginx `try_files` SPA fallback.
