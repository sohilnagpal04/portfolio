# 🚀 Local Deployment Guide - Sohil Nagpal Portfolio

A complete step-by-step guide to run your portfolio locally on your computer.

---

## ✅ Prerequisites

Before you start, you need:

### 1. **Node.js** (Required)
- Download from: https://nodejs.org
- Choose the **LTS version** (Long Term Support)
- Version required: **v18 or higher**

**How to check if you have it:**
```bash
node --version
npm --version
```

### 2. **Yarn** (Optional but Recommended)
```bash
npm install -g yarn
```

**Or use npm** (comes with Node.js automatically)

---

## 📥 Step 1: Download the Repository

### Option A: Download ZIP
1. Download the portfolio ZIP file
2. Extract it to your desired location (e.g., `Documents/portfolio`)

### Option B: Git Clone (if using Git)
```bash
git clone <your-repo-url>
cd portfolio
```

---

## 📂 Step 2: Project Structure

Your portfolio folder should look like this:

```
portfolio/
├── frontend/              # React application (THIS IS WHAT YOU'LL RUN)
│   ├── public/
│   │   ├── index.html
│   │   └── assets/
│   │       └── Sohil_Nagpal_Resume.pdf
│   ├── src/
│   │   ├── components/   # All UI components
│   │   ├── context/      # Theme context
│   │   ├── pages/
│   │   └── hooks/
│   ├── package.json
│   └── .env              # Environment variables
├── backend/              # FastAPI (optional - not needed for portfolio)
├── README.md
└── .gitignore
```

---

## 🎯 Step 3: Install Dependencies

Open your terminal/command prompt and navigate to the frontend folder:

### Windows:
```cmd
cd C:\Users\YourName\Documents\portfolio\frontend
```

### Mac/Linux:
```bash
cd ~/Documents/portfolio/frontend
```

### Install packages:

**Using Yarn (Recommended):**
```bash
yarn install
```

**Or using npm:**
```bash
npm install
```

**This will take 2-5 minutes.** You'll see lots of text - that's normal! ☕

---

## ▶️ Step 4: Start the Development Server

Still in the `frontend` folder, run:

**Using Yarn:**
```bash
yarn start
```

**Or using npm:**
```bash
npm start
```

### What happens next:
1. The server will compile your React app (takes 10-30 seconds)
2. Your browser will automatically open to `http://localhost:3000`
3. You'll see your portfolio! 🎉

### Terminal should show:
```
Compiled successfully!

You can now view frontend in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.x.x:3000

Note that the development build is not optimized.
To create a production build, use yarn build.
```

---

## ✅ Step 5: Verify Everything Works

You should see:

### Dark Mode (Default):
- ✅ Dark blue/purple gradient background
- ✅ White text
- ✅ Sun icon (☀️) in navbar (top right)
- ✅ Your name "Sohil Nagpal" in large text
- ✅ Navigation menu working
- ✅ All sections scrollable

### Test the Theme Toggle:
- Click the Sun icon (☀️) in the navbar
- Page should switch to **light mode** with white background
- Icon changes to Moon (🌙)
- Click again to switch back to dark mode

### Test Navigation:
- Click each menu item (Home, About, Projects, Skills, Experience, Education, Contact)
- Page should smoothly scroll to each section
- Try the "View Projects" and "Contact Me" buttons

### Test Resume Download:
- Click "Download Resume" button
- Your resume PDF should download

---

## 🛠️ Making Changes

While the server is running, you can edit files and see changes instantly!

### To edit content:

1. Open the `frontend` folder in your favorite code editor (VS Code, Sublime Text, etc.)

2. Edit files in `src/components/`:
   - **Hero.jsx** - Your name and intro
   - **About.jsx** - About section
   - **Projects.jsx** - Project details
   - **Experience.jsx** - Work experience
   - **Skills.jsx** - Technical skills
   - **Contact.jsx** - Contact information

3. **Save the file** (Ctrl+S / Cmd+S)

4. **Browser automatically refreshes** with your changes! ✨

### To change colors:
Edit `frontend/src/index.css` - look for color values and update them

---

## 🛑 Stopping the Server

When you're done:

1. Go to the terminal where the server is running
2. Press **Ctrl + C**
3. Type **'y'** if asked to confirm
4. Server stops

---

## 🔄 Running Again Later

Next time you want to run your portfolio:

```bash
cd frontend
yarn start
```

That's it! No need to reinstall packages unless you've deleted `node_modules`.

---

## 🌐 Accessing from Other Devices

Want to view your portfolio on your phone or tablet?

1. Keep the server running on your computer
2. Look for the "On Your Network" URL in the terminal (e.g., `http://192.168.1.5:3000`)
3. Open that URL on your phone/tablet (must be on same WiFi)
4. Your portfolio loads on that device!

---

## 📦 Building for Production (Optional)

To create an optimized production build:

```bash
cd frontend
yarn build
```

This creates a `build` folder with optimized files you can deploy to any web server.

---

## 🐛 Troubleshooting

### ❌ "node is not recognized" or "command not found: node"
**Solution:** Node.js is not installed or not in your PATH
- Install Node.js from https://nodejs.org
- Restart your terminal/command prompt
- Try again

---

### ❌ Port 3000 is already in use
**Solution:** Another app is using port 3000

**Option 1: Kill the port**
```bash
npx kill-port 3000
yarn start
```

**Option 2: Use a different port**
```bash
PORT=3001 yarn start
```

---

### ❌ "Cannot find module" errors
**Solution:** Dependencies not installed properly

```bash
# Delete node_modules
rm -rf node_modules

# Reinstall
yarn install

# Start again
yarn start
```

---

### ❌ Blank white page
**Solution:** Multiple possible causes

1. **Check terminal for errors**
   - Look for red error messages
   - Read what they say

2. **Check browser console**
   - Press F12
   - Click "Console" tab
   - Look for red errors

3. **Hard refresh browser**
   - Windows: Ctrl + Shift + R
   - Mac: Cmd + Shift + R

4. **Clear cache**
   ```bash
   rm -rf node_modules/.cache
   yarn start
   ```

---

### ❌ Changes not showing up
**Solution:**

1. Make sure the server is running (`yarn start`)
2. Save the file (Ctrl+S / Cmd+S)
3. Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)
4. Check terminal for errors

---

## 💡 Pro Tips

### Use VS Code (Free)
- Download: https://code.visualstudio.com
- Great for editing React code
- Has syntax highlighting and auto-completion

### Keep Terminal Open
- Don't close the terminal while working
- You can see errors in real-time
- Easier to restart if needed

### Use Browser DevTools
- Press F12 to open developer tools
- Console tab shows JavaScript errors
- Network tab shows failed requests
- Very helpful for debugging!

---

## 🎨 Customization Quick Reference

### Change Your Name/Info:
```
frontend/src/components/Hero.jsx
frontend/src/components/About.jsx
frontend/src/components/Contact.jsx
```

### Change Projects:
```
frontend/src/components/Projects.jsx
```

### Change Work Experience:
```
frontend/src/components/Experience.jsx
```

### Change Colors:
```
frontend/src/index.css
```

### Replace Resume PDF:
```
frontend/public/assets/Sohil_Nagpal_Resume.pdf
```

---

## 📞 Common Commands Reference

```bash
# Navigate to frontend
cd frontend

# Install dependencies (first time only)
yarn install

# Start development server
yarn start

# Stop server
Ctrl + C

# Build for production
yarn build

# Clear cache and restart
rm -rf node_modules/.cache && yarn start

# Reinstall everything
rm -rf node_modules && yarn install && yarn start
```

---

## ✅ Success Checklist

After starting the server, verify:

- [ ] Terminal shows "Compiled successfully!"
- [ ] No red errors in terminal
- [ ] Browser opens to http://localhost:3000
- [ ] Portfolio loads with your name visible
- [ ] Dark mode is active by default
- [ ] Theme toggle button works (Sun/Moon icon)
- [ ] Navigation menu works
- [ ] All sections are visible
- [ ] Buttons are clickable
- [ ] Resume downloads when clicked

**If all checked, you're ready to go!** ✅

---

## 🚀 What's Next?

Once your portfolio is working locally:

1. **Test thoroughly** - Click everything, try both themes
2. **Customize content** - Update with your information
3. **Add projects** - Showcase your work
4. **Deploy online** - Follow `DEPLOYMENT_GUIDE.md` for GitHub Pages

---

## 📚 Additional Resources

- **React Documentation:** https://react.dev
- **Node.js Documentation:** https://nodejs.org/docs
- **Yarn Documentation:** https://yarnpkg.com
- **VS Code Download:** https://code.visualstudio.com

---

## 🎉 You're All Set!

Your portfolio is now running locally. Enjoy customizing it and making it your own!

If you encounter any issues not covered here, check:
- Browser console (F12)
- Terminal error messages
- `COMPLETE_LOCAL_FIX.md` for more troubleshooting

**Happy coding!** 💻✨
