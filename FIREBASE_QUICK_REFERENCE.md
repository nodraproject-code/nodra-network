# NODRA Firebase Quick Reference Guide

## Project Information
- **Project ID:** `nodra-network`
- **Firebase Console:** https://console.firebase.google.com/project/nodra-network
- **Temporary URL:** https://nodra-network.web.app
- **Custom Domain:** nodranetwork.com (DNS pending)

---

## Essential Commands

### Build & Deploy
```bash
# Build for production
npm run build

# Deploy to Firebase Hosting
firebase deploy --only hosting

# Deploy with dry-run (preview changes)
firebase deploy --dry-run

# Deploy specific files only
firebase deploy --only hosting:nodra-network
```

### Project Management
```bash
# Check Firebase CLI version
firebase --version

# Update Firebase CLI
npm install -g firebase-tools@latest

# List all Firebase projects
firebase projects:list

# Set active project
firebase use nodra-network

# View project info
firebase projects:describe nodra-network
```

### Logs & Monitoring
```bash
# View Firebase Hosting logs
firebase hosting:log nodra-network

# View deployment history
firebase deploy --log-level debug

# Monitor in real-time
firebase functions:log
```

### Local Development
```bash
# Start development server
npm start

# Run tests
npm run test

# Build for development
ng build

# Build for production
npm run build
```

---

## File Locations

| File | Purpose |
|------|---------|
| `firebase.json` | Hosting configuration |
| `.firebaserc` | Project binding |
| `firestore.rules` | Firestore security rules |
| `firestore.indexes.json` | Firestore indexes |
| `src/environments/environment.ts` | Dev configuration |
| `src/environments/environment.prod.ts` | Prod configuration |
| `.gitignore` | Git exclusions (updated) |
| `dist/nodra/browser` | Build output directory |

---

## Important URLs

| Service | URL |
|---------|-----|
| **Firebase Console** | https://console.firebase.google.com/project/nodra-network |
| **Hosting Dashboard** | https://console.firebase.google.com/project/nodra-network/hosting |
| **Firestore Database** | https://console.firebase.google.com/project/nodra-network/firestore |
| **Authentication** | https://console.firebase.google.com/project/nodra-network/authentication |
| **Project Settings** | https://console.firebase.google.com/project/nodra-network/settings/general |
| **Deployed App** | https://nodra-network.web.app |
| **Custom Domain** | https://nodranetwork.com (when DNS configured) |

---

## Configuration Placeholders

### Firebase SDK Config
**Location:** `src/environments/environment.ts` and `environment.prod.ts`

Get these values from:
1. Go to: https://console.firebase.google.com/project/nodra-network/settings/general
2. Scroll to "Your apps"
3. Click on the web app config
4. Copy the config object
5. Paste into the `firebase` object in environment files

```typescript
firebase: {
  apiKey: 'YOUR_API_KEY_HERE',           // Get from Console
  authDomain: 'nodra-network.firebaseapp.com',
  projectId: 'nodra-network',
  storageBucket: 'nodra-network.appspot.com',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID_HERE',
  appId: 'YOUR_APP_ID_HERE',
}
```

---

## Deployment Checklist

### Before Each Deploy
- [ ] Run `npm run build` locally
- [ ] Verify build output in `dist/nodra/browser/`
- [ ] Test in development: `npm start`
- [ ] Check `.gitignore` for sensitive files
- [ ] Verify `firebase.json` is correct
- [ ] Ensure `.firebaserc` points to `nodra-network`

### After Each Deploy
- [ ] Check Firebase Console for deployment status
- [ ] Visit https://nodra-network.web.app and test
- [ ] Verify all routes work (SPA routing)
- [ ] Check browser console for errors
- [ ] Verify responsive design on mobile

---

## Common Tasks

### Deploy Changes
```bash
npm run build && firebase deploy --only hosting
```

### Check Deployment Status
```bash
firebase deploy --dry-run
```

### View Current Project
```bash
firebase projects:describe nodra-network
```

### Switch Projects (if multiple)
```bash
firebase use nodra-network
```

### Update Dependencies
```bash
npm update
ng version
```

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -r dist node_modules package-lock.json
npm install
npm run build
```

### Firebase Auth Required
```bash
firebase login
```

### Domain Not Resolving
1. Check DNS records in Namecheap
2. Verify records match Firebase exactly
3. Use https://whatsmydns.net/ to check propagation
4. Wait up to 24 hours for full propagation

### Deployment Issues
```bash
# Debug mode
firebase deploy --debug

# Check version compatibility
firebase --version
ng version

# Logout and login again
firebase logout
firebase login
```

---

## Security Best Practices

✅ **Always:**
- Keep sensitive files in `.gitignore`
- Never commit `.env` files
- Never commit Firebase service account keys
- Never commit environment credentials
- Use `.firebaserc` for project binding (safe to commit)

❌ **Never:**
- Add API keys to source code
- Commit `node_modules`
- Push credentials to GitHub
- Use `master` key in production
- Expose service account JSON

---

## Next Steps

1. **Configure Custom Domain (PHASE E - Manual)**
   - Add DNS records in Namecheap
   - Wait for propagation
   - Verify in Firebase Console

2. **Add Firebase SDK Config (When Ready)**
   - Get credentials from Firebase Console
   - Update `src/environments/` files
   - Rebuild and deploy

3. **Test Firestore (Optional)**
   - Go to Firestore Database in Console
   - Create test document
   - View in Cloud Console

4. **Monitor Deployment**
   - Check Firebase Hosting logs
   - Monitor performance metrics
   - Verify SSL certificate auto-renewal

---

## Getting Help

- **Firebase Documentation:** https://firebase.google.com/docs
- **Angular Documentation:** https://angular.io/docs
- **Firebase CLI Reference:** https://firebase.google.com/docs/cli
- **Project Console:** https://console.firebase.google.com/project/nodra-network

---

*Last Updated: 2025*  
*Framework: Angular 19.2.0*  
*Platform: Firebase Hosting*
