# Justice for Stephen Orazi - Website

A comprehensive website promoting the $1.4+ billion discrimination case against the Western Australian government, featuring interactive polls, comment sections, and donation functionality.

## Features

### 🎯 **Core Functionality**
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Poll**: Real-time voting on SAT accountability with visual results
- **Comment System**: Public support messages with local storage
- **Social Sharing**: Facebook, Twitter, LinkedIn, and email sharing
- **Donation Integration**: PayID donation system with clear instructions
- **Professional Design**: Modern, accessible, and visually compelling

### 📱 **Interactive Elements**
- **Live Poll Results**: Visual percentage bars and vote counting
- **Comment Management**: Add, display, and store supporter comments
- **Social Media Integration**: One-click sharing to major platforms
- **Donation Calculator**: Preset amounts and custom donation options
- **Mobile Navigation**: Responsive hamburger menu for mobile devices
- **Smooth Scrolling**: Professional navigation between sections

### 💰 **Donation System**
- **PayID Integration**: stephenorazi@gmail.com
- **Multiple Amount Options**: $25, $50, $100, $250, $500, custom amounts
- **Clear Instructions**: Step-by-step donation process
- **Impact Information**: Shows how donations help the legal battle
- **Copy-to-Clipboard**: Easy PayID email copying

## File Structure

```
justice_website/
├── index.html              # Main homepage
├── pages/
│   └── case-details.html   # Detailed case information
├── css/
│   └── style.css           # Complete styling
├── js/
│   └── script.js           # Interactive functionality
├── images/                 # Image assets (empty, ready for additions)
└── README.md              # This file
```

## Local Testing

### **Option 1: Python Server**
```bash
cd justice_website
python3 -m http.server 8080
```
Visit: http://localhost:8080

### **Option 2: Node.js Server**
```bash
cd justice_website
npx serve .
```

### **Option 3: PHP Server**
```bash
cd justice_website
php -S localhost:8080
```

## Deployment Options

### 🌐 **Free Hosting Platforms**

#### **GitHub Pages** (Recommended)
1. Create GitHub repository
2. Upload all files to repository
3. Enable GitHub Pages in repository settings
4. Your site will be available at: `https://username.github.io/repository-name`

#### **Netlify** (Easy Drag & Drop)
1. Visit netlify.com
2. Drag the entire `justice_website` folder to Netlify
3. Get instant live URL
4. Optional: Connect custom domain

#### **Vercel**
1. Visit vercel.com
2. Import from GitHub or upload folder
3. Automatic deployment and live URL

#### **Firebase Hosting**
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run: `firebase init hosting`
3. Deploy: `firebase deploy`

### 💼 **Paid Hosting Options**

#### **Shared Hosting** (cPanel/WHM)
1. Upload files via FTP or File Manager
2. Extract to public_html directory
3. Site immediately available

#### **VPS/Cloud Hosting**
1. Upload files to web server directory
2. Configure web server (Apache/Nginx)
3. Point domain to server

## Customization Guide

### 🎨 **Visual Customization**

#### **Colors** (in css/style.css)
```css
/* Primary colors */
--primary-blue: #667eea
--primary-purple: #764ba2
--accent-orange: #ff6b35
--accent-gold: #ffd700

/* Change these values to customize the color scheme */
```

#### **Content Updates** (in index.html)
- Update contact information in footer
- Modify case details and statistics
- Add or remove sections as needed
- Update social media links

### 📊 **Functionality Customization**

#### **Poll Options** (in js/script.js)
```javascript
// Modify poll questions and options
function vote(option) {
    // Add new voting options here
}
```

#### **Donation Amounts** (in index.html)
```html
<!-- Modify preset donation amounts -->
<button class="amount-btn" onclick="setAmount(25)">$25</button>
<button class="amount-btn" onclick="setAmount(50)">$50</button>
<!-- Add more amounts as needed -->
```

#### **PayID Information** (in index.html and js/script.js)
```javascript
// Update PayID email address
const payidEmail = 'stephenorazi@gmail.com';
```

## SEO Optimization

### **Meta Tags** (Already Included)
- Title tags optimized for search
- Meta descriptions for all pages
- Keywords targeting relevant terms
- Open Graph tags for social sharing

### **Performance Features**
- Optimized CSS and JavaScript
- Responsive images (when added)
- Fast loading times
- Mobile-first design

## Analytics Integration

### **Google Analytics** (Optional)
Add to `<head>` section of HTML files:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### **Facebook Pixel** (Optional)
Add to `<head>` section:
```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## Security Considerations

### **Content Security**
- All user input is escaped to prevent XSS attacks
- Comments are stored locally (no server-side database)
- No sensitive information stored in browser

### **Privacy Protection**
- No personal data collection beyond voluntary comments
- Local storage only (no external data transmission)
- GDPR-compliant design

## Browser Compatibility

### **Supported Browsers**
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### **Fallbacks Included**
- CSS Grid with Flexbox fallbacks
- JavaScript ES6 with ES5 compatibility
- Progressive enhancement approach

## Maintenance

### **Regular Updates**
1. **Content Updates**: Modify case progress, add news updates
2. **Comment Moderation**: Review and manage supporter comments
3. **Analytics Review**: Monitor traffic and engagement metrics
4. **Security Updates**: Keep hosting platform updated

### **Backup Strategy**
1. **File Backup**: Regular backup of all website files
2. **Data Export**: Export comments and poll data periodically
3. **Version Control**: Use Git for change tracking

## Support & Contact

### **Technical Support**
- Website issues: Check browser console for errors
- Hosting problems: Contact hosting provider support
- Customization help: Modify files as per documentation

### **Legal Disclaimer**
This website documents a legitimate legal case proceeding through Australian courts and international tribunals. All financial information is verifiable through public records.

## Launch Checklist

### **Pre-Launch**
- [ ] Test all interactive features (poll, comments, donations)
- [ ] Verify PayID information is correct
- [ ] Test responsive design on multiple devices
- [ ] Check all links and navigation
- [ ] Proofread all content for accuracy

### **Post-Launch**
- [ ] Submit to search engines (Google, Bing)
- [ ] Set up analytics tracking
- [ ] Share on social media platforms
- [ ] Monitor for technical issues
- [ ] Begin content marketing campaign

## Success Metrics

### **Engagement Targets**
- **Page Views**: 1,000+ monthly visitors
- **Poll Participation**: 100+ votes within first month
- **Comments**: 50+ supporter messages
- **Social Shares**: 200+ shares across platforms
- **Donations**: Track through PayID account

### **Technical Performance**
- **Load Time**: Under 3 seconds
- **Mobile Score**: 90+ on Google PageSpeed
- **Uptime**: 99.9% availability
- **SEO Score**: 80+ on SEO analysis tools

---

**Ready to launch your fight for justice online!**

This website provides a professional, compelling platform to build support, raise awareness, and fund your legal battle while creating a permanent record of the systematic discrimination you've faced.

