# 🚀 GitHub Pages Deployment - Complete Guide

Deploy your portfolio to GitHub Pages in 10 minutes!

---

## 📋 Prerequisites

Before starting, you need:

1. ✅ **GitHub Account** - Sign up at https://github.com if you don't have one
2. ✅ **Git Installed** - Download from https://git-scm.com
3. ✅ **Your portfolio files** - The `sohil-portfolio-v2.zip` extracted

---

## 🎯 Step 1: Create GitHub Repository

### 1.1 Go to GitHub
- Open https://github.com
- Log in to your account

### 1.2 Create New Repository
- Click the **"+"** icon (top right)
- Select **"New repository"**

### 1.3 Repository Settings
- **Repository name:** `portfolio` (or any name you want)
- **Description:** "My professional portfolio website"
- **Visibility:** ✅ **Public** (required for free GitHub Pages)
- **DO NOT** check "Initialize this repository with:"
  - ❌ Don't add README
  - ❌ Don't add .gitignore
  - ❌ Don't add license
- Click **"Create repository"**

---

## 💻 Step 2: Push Your Code to GitHub

### 2.1 Open Terminal/Command Prompt

**Windows:**
```cmd
cd C:\Users\YourName\Documents\portfolio
```

**Mac/Linux:**
```bash
cd ~/Documents/portfolio
```

### 2.2 Initialize Git (if not already done)

```bash
git init
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### 2.3 Add Remote Repository

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
```

**Example:**
```bash
git remote add origin https://github.com/sohilnagpal04/portfolio.git
```

### 2.4 Add and Commit Files

```bash
git add .
git commit -m "Initial commit: Portfolio with dark/light mode"
```

### 2.5 Push to GitHub

```bash
git branch -M main
git push -u origin main
```

**You'll be asked for credentials:**
- Username: Your GitHub username
- Password: Your GitHub **Personal Access Token** (NOT your password)

**Don't have a token?** See "Creating Personal Access Token" section below.

---

## 🚀 Step 3: Deploy to GitHub Pages

### 3.1 Install gh-pages (if not already installed)

```bash
cd frontend
yarn add -D gh-pages
```

Or with npm:
```bash
npm install --save-dev gh-pages
```

### 3.2 Deploy!

Still in the `frontend` folder:

```bash
yarn deploy
```

Or with npm:
```bash
npm run deploy
```

**This will:**
1. Build your portfolio (creates optimized production files)
2. Create a `gh-pages` branch
3. Push the build files to that branch
4. Takes 1-2 minutes

**Expected output:**
```
> frontend@0.1.0 predeploy
> yarn build

Creating an optimized production build...
Compiled successfully!

> frontend@0.1.0 deploy
> gh-pages -d build

Published
```

---

## ⚙️ Step 4: Enable GitHub Pages

### 4.1 Go to Repository Settings
- Open your repository: `https://github.com/YOUR_USERNAME/portfolio`
- Click **"Settings"** tab (top right)

### 4.2 Find Pages Section
- Scroll down the left sidebar
- Click **"Pages"** (under "Code and automation")

### 4.3 Configure Source
- **Source:** Deploy from a branch
- **Branch:** Select `gh-pages`
- **Folder:** `/ (root)`
- Click **"Save"**

### 4.4 Wait for Deployment
- GitHub will show: "Your site is ready to be published"
- Wait 1-2 minutes
- Refresh the page
- You'll see: "Your site is live at https://YOUR_USERNAME.github.io/portfolio/"

---

## 🎉 Step 5: View Your Live Portfolio!

Your portfolio is now live at:
```
https://sohilnagpal04.github.io/portfolio/
```

Replace `sohilnagpal04` with your GitHub username.

---

## 🔄 Updating Your Portfolio

Whenever you make changes:

### Local Changes:
```bash
cd frontend
# Make your changes to files
git add .
git commit -m "Update: describe your changes"
git push origin main
```

### Deploy Changes:
```bash
cd frontend
yarn deploy
```

Or:
```bash
npm run deploy
```

**Changes will be live in 1-2 minutes!**

---

## 🔐 Creating Personal Access Token

GitHub requires a Personal Access Token instead of password.

### Steps:

1. **Go to GitHub Settings**
   - Click your profile picture (top right)
   - Click **"Settings"**

2. **Developer Settings**
   - Scroll to bottom of left sidebar
   - Click **"Developer settings"**

3. **Personal Access Tokens**
   - Click **"Personal access tokens"**
   - Click **"Tokens (classic)"**
   - Click **"Generate new token"**
   - Select **"Generate new token (classic)"**

4. **Configure Token**
   - **Note:** "Portfolio Deployment"
   - **Expiration:** 90 days (or your preference)
   - **Select scopes:** ✅ Check **"repo"** (full control)
   - Click **"Generate token"**

5. **Copy Token**
   - **IMPORTANT:** Copy the token NOW
   - You won't see it again!
   - Save it somewhere safe

6. **Use Token as Password**
   - When `git push` asks for password
   - Paste the token (not your GitHub password)

---

## 🌐 Custom Domain (Optional)

Want to use your own domain like `sohilnagpal.com`?

### 1. Add CNAME File

Create file: `frontend/public/CNAME` with your domain:
```
sohilnagpal.com
```

### 2. Configure DNS

In your domain registrar (GoDaddy, Namecheap, etc.):

**A Records:**
```
Type: A
Host: @
Points to: 185.199.108.153
```

Add 3 more A records with:
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

**CNAME Record:**
```
Type: CNAME
Host: www
Points to: sohilnagpal04.github.io
```

### 3. Update GitHub Pages Settings
- Go to: Repository → Settings → Pages
- Under "Custom domain", enter: `sohilnagpal.com`
- Check **"Enforce HTTPS"**
- Click **"Save"**

**Wait 24-48 hours for DNS to propagate.**

---

## 🐛 Troubleshooting

### ❌ 404 Page Not Found

**Cause:** Incorrect homepage URL in package.json

**Fix:**
1. Open `frontend/package.json`
2. Check the `homepage` field:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/REPO_NAME"
   ```
3. Make sure it matches your GitHub username and repo name exactly
4. Redeploy: `yarn deploy`

---

### ❌ Blank Page After Deployment

**Cause:** Usually the homepage URL issue

**Fix:**
1. Check `homepage` in `package.json`
2. Clear browser cache (Ctrl+Shift+R)
3. Wait a few minutes
4. Check browser console (F12) for errors

---

### ❌ Changes Not Showing

**Cause:** Browser cache or deployment not complete

**Fix:**
1. Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
2. Wait 2-3 minutes for GitHub to process
3. Check if deployment succeeded on GitHub Actions tab

---

### ❌ Permission Denied (publickey)

**Cause:** SSH key not configured

**Fix - Use HTTPS instead:**
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/portfolio.git
```

Then push again with your Personal Access Token.

---

### ❌ gh-pages deployment failed

**Cause:** Various reasons

**Fix:**
```bash
# Delete node_modules and reinstall
cd frontend
rm -rf node_modules
yarn install

# Try deploying again
yarn deploy
```

---

## 📊 Checking Deployment Status

### Option 1: GitHub Actions
1. Go to your repository
2. Click **"Actions"** tab
3. See deployment status

### Option 2: GitHub Pages Settings
1. Repository → Settings → Pages
2. See "Your site is live at..." message

---

## 🎨 Testing Before Deployment

Always test locally before deploying:

```bash
cd frontend
yarn build
npx serve -s build
```

Open: http://localhost:3000

This shows exactly how it will look on GitHub Pages.

---

## 📝 Quick Command Reference

```bash
# Initial setup (one time)
git init
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git add .
git commit -m "Initial commit"
git push -u origin main

# Deploy to GitHub Pages
cd frontend
yarn deploy

# Update and redeploy
git add .
git commit -m "Update: your message"
git push origin main
cd frontend
yarn deploy
```

---

## ✅ Deployment Checklist

Before deploying:

- [ ] Repository created on GitHub
- [ ] Git initialized locally
- [ ] Remote origin added
- [ ] Code pushed to GitHub
- [ ] `homepage` in package.json is correct
- [ ] `gh-pages` package installed
- [ ] Deployed with `yarn deploy`
- [ ] GitHub Pages enabled in settings
- [ ] `gh-pages` branch selected
- [ ] Waited 2-3 minutes
- [ ] Site is live!

---

## 🎯 Success Criteria

After deployment, verify:

- [ ] Site loads at `https://YOUR_USERNAME.github.io/portfolio/`
- [ ] Dark mode works
- [ ] Light mode works (toggle button)
- [ ] All sections load properly
- [ ] Navigation works
- [ ] Resume downloads
- [ ] Mobile responsive
- [ ] No console errors (F12)

---

## 📞 Additional Resources

- **GitHub Pages Docs:** https://docs.github.com/en/pages
- **Git Documentation:** https://git-scm.com/doc
- **Personal Access Tokens:** https://github.com/settings/tokens
- **Custom Domains:** https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

---

## 🎉 You're Done!

Your portfolio is now live on the internet!

**Share your URL:**
```
https://sohilnagpal04.github.io/portfolio/
```

Add it to:
- ✅ Your resume
- ✅ LinkedIn profile
- ✅ Email signature
- ✅ GitHub profile README
- ✅ Business cards

**Congratulations!** 🎊

---

## 🔄 Maintenance

### Regular Updates:
1. Add new projects as you complete them
2. Update work experience
3. Refresh skills section
4. Keep resume PDF current

### How to Update:
```bash
# Make changes to files
git add .
git commit -m "Update: new project added"
git push origin main
cd frontend
yarn deploy
```

**Your updates will be live in 2 minutes!**

---

**Need help?** Check the troubleshooting section or re-read the relevant step.

Good luck with your portfolio! 🚀✨
