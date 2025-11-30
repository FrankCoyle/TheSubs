# The Subs - Band Website

A modern, responsive website for The Subs covers band, featuring contact/booking functionality, photo gallery, and YouTube video integration.

## 🎸 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Contact & Booking Form**: Interactive booking form with real-time validation
- **Photo Gallery**: Ready-to-use gallery section for band photos
- **YouTube Videos**: Embedded video section for performance footage
- **Rock Band Theme**: Dark, energetic design suitable for a covers band
- **Easy to Maintain**: Simple HTML/CSS/JavaScript structure with no build process required

## 📁 Project Structure

```
TheSubs/
├── index.html          # Home page
├── gallery.html        # Photo gallery page
├── videos.html         # YouTube videos page
├── booking.html        # Contact/booking form page
├── css/
│   └── style.css       # All styles in one file
├── js/
│   └── script.js       # Interactive features & form validation
└── images/             # Directory for your photos
```

## 🚀 Getting Started

### Viewing the Site Locally

1. Open `index.html` in any web browser
2. No build process or server required - it's pure HTML/CSS/JavaScript

### Deploying Online

You can deploy this site to any web hosting service:

**Free Options:**
- **GitHub Pages**: Push to GitHub and enable Pages in repository settings
- **Netlify**: Drag and drop the folder to netlify.com
- **Vercel**: Import from GitHub or upload directly
- **Surge.sh**: Simple command-line deployment

**Traditional Hosting:**
- Upload all files via FTP to your web hosting service
- Ensure the index.html is in the root directory

## 🎨 Customization Guide

### Adding Your Photos to Gallery

1. Place your photos in the `images/` directory
2. Open `gallery.html` in a text editor
3. Replace the placeholder divs with actual image tags:

```html
<!-- Replace this: -->
<div class="gallery-item">
    <div class="gallery-placeholder">
        <span>🎸</span>
        <p>Performance Photo 1</p>
    </div>
</div>

<!-- With this: -->
<div class="gallery-item">
    <img src="images/your-photo.jpg" alt="Description">
</div>
```

### Adding YouTube Videos

1. Go to any YouTube video you want to embed
2. Click "Share" → "Embed"
3. Copy the embed code
4. Open `videos.html` in a text editor
5. Replace the placeholder divs with your embed code:

```html
<!-- Replace this: -->
<div class="video-placeholder">
    <span>▶</span>
    <p>YouTube Video 1</p>
</div>

<!-- With your embed code: -->
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
</iframe>
```

### Updating Contact Information

Edit `booking.html` to update:
- Email address (search for `bookings@thesubs.com`)
- Phone number (search for `+1 (234) 567-890`)

### Changing Colors

Edit `css/style.css` and modify the CSS variables at the top:

```css
:root {
    --primary-color: #e74c3c;      /* Main red color */
    --secondary-color: #c0392b;    /* Darker red */
    --accent-color: #f39c12;       /* Orange accent */
    /* etc. */
}
```

### Updating Band Name/Logo

The band name appears in the navigation. To change it, edit the `<h1>` tag in each HTML file:

```html
<div class="logo">
    <h1>THE SUBS</h1>
</div>
```

### Connecting the Booking Form

The booking form currently displays a success message without sending data. To make it functional:

**Option 1: Use a Form Service (Easiest)**
- Sign up for Formspree, Netlify Forms, or similar
- Add their form endpoint to the form action
- Example with Formspree:
  ```html
  <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  ```

**Option 2: Add Backend Processing**
- Set up a server-side script (PHP, Node.js, etc.)
- Modify the JavaScript in `js/script.js` to send form data to your backend
- Example with fetch API:
  ```javascript
  fetch('/api/booking', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
  });
  ```

## 🔧 Technical Details

### Browser Support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Dependencies
- **Fonts**: Google Fonts (Bebas Neue, Roboto)
- **Icons**: Text emojis (no icon library needed)
- No JavaScript frameworks or build tools required

### Performance
- Lightweight: ~35KB total (HTML + CSS + JS)
- No external dependencies except fonts
- Fast load times on all devices

## 📱 Responsive Breakpoints

- Desktop: > 768px
- Tablet: 481px - 768px
- Mobile: < 480px

## 🎵 Next Steps

1. **Add Your Content**
   - Upload band photos to the gallery
   - Embed your YouTube videos
   - Update contact information

2. **Customize the Design**
   - Adjust colors to match your brand
   - Add your band logo
   - Modify text content

3. **Set Up Form Handling**
   - Connect booking form to email service
   - Test form submissions

4. **Deploy**
   - Choose a hosting platform
   - Upload files or connect repository
   - Share your new website!

## 📄 License

Feel free to use and modify this website for your band.

## 🤘 Support

For issues or questions about the website, open an issue in the repository or contact the developer.

---

**Built for The Subs - Rock on! 🎸**