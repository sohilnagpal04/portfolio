#!/bin/bash

echo "======================================"
echo "  BLANK PAGE DIAGNOSTIC TOOL"
echo "======================================"
echo ""

# Check if we're in the frontend directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in frontend directory"
    echo "Please run: cd frontend"
    exit 1
fi

echo "✅ In frontend directory"
echo ""

# Check if node_modules exists
if [ -d "node_modules" ]; then
    echo "✅ node_modules exists"
else
    echo "❌ node_modules NOT found"
    echo "Please run: yarn install"
    exit 1
fi

echo ""
echo "Checking critical files..."
echo ""

# Check critical files
FILES=("src/App.js" "src/index.js" "src/pages/Portfolio.jsx" "public/index.html")

for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file MISSING!"
    fi
done

echo ""
echo "======================================"
echo "  SUGGESTED FIXES"
echo "======================================"
echo ""
echo "1. Clear cache and restart:"
echo "   rm -rf node_modules/.cache"
echo "   yarn start"
echo ""
echo "2. Check browser console for errors (F12)"
echo ""
echo "3. Try accessing: http://localhost:3000"
echo "   (not https)"
echo ""
echo "4. Hard refresh browser: Ctrl+Shift+R"
echo ""
echo "======================================"
