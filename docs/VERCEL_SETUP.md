# Vercel Deployment Setup

## Automatic Deployment via GitHub Actions

This project is configured for automatic deployment to Vercel using GitHub Actions.

### Prerequisites

1. A Vercel account connected to your GitHub account
2. The project imported in Vercel (one-time setup)

### Setup Steps

1. **Import project to Vercel** (if not already done):
   - Go to https://vercel.com/new
   - Import the GitHub repository
   - Deploy once manually to create the project

2. **Get Vercel credentials**:
   ```bash
   # Install Vercel CLI locally
   npm i -g vercel
   
   # Login to Vercel
   vercel login
   
   # Link to your project
   vercel link
   
   # Get your token
   vercel tokens create github-actions
   ```

3. **Add GitHub Secrets**:
   Go to your GitHub repository Settings → Secrets and variables → Actions, then add:
   
   - `VERCEL_TOKEN`: Your Vercel token from step 2
   - `VERCEL_ORG_ID`: Found in `.vercel/project.json` after linking
   - `VERCEL_PROJECT_ID`: Found in `.vercel/project.json` after linking

### How It Works

- **Main branch**: Automatically deploys to production when you push
- **Pull requests**: Creates preview deployments with unique URLs
- **Comments**: Bot comments on PRs with preview URLs

### Manual Deployment

If needed, you can still deploy manually:

```bash
# Deploy to production
vercel --prod

# Deploy preview
vercel
```

### Deployment Status

Check deployment status at:
- GitHub Actions tab in your repository
- Vercel dashboard: https://vercel.com/dashboard