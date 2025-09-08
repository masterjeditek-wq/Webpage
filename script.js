// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Poll functionality
let pollData = {
    yes: 0,
    no: 0,
    unsure: 0,
    total: 0,
    userVoted: false
};

// Load poll data from localStorage
function loadPollData() {
    const saved = localStorage.getItem('pollData');
    if (saved) {
        pollData = JSON.parse(saved);
    }
    updatePollDisplay();
}

// Save poll data to localStorage
function savePollData() {
    localStorage.setItem('pollData', JSON.stringify(pollData));
}

// Vote function
function vote(option) {
    if (pollData.userVoted) {
        alert('You have already voted! Thank you for your participation.');
        return;
    }
    
    pollData[option]++;
    pollData.total++;
    pollData.userVoted = true;
    
    savePollData();
    updatePollDisplay();
    
    // Show thank you message
    showSuccessMessage('Thank you for your vote! Your voice matters in this fight for justice.');
}

// Update poll display
function updatePollDisplay() {
    const total = pollData.total;
    
    if (total === 0) {
        document.getElementById('yes-percentage').textContent = '0%';
        document.getElementById('no-percentage').textContent = '0%';
        document.getElementById('unsure-percentage').textContent = '0%';
        document.getElementById('yes-bar').style.width = '0%';
        document.getElementById('no-bar').style.width = '0%';
        document.getElementById('unsure-bar').style.width = '0%';
    } else {
        const yesPercent = Math.round((pollData.yes / total) * 100);
        const noPercent = Math.round((pollData.no / total) * 100);
        const unsurePercent = Math.round((pollData.unsure / total) * 100);
        
        document.getElementById('yes-percentage').textContent = yesPercent + '%';
        document.getElementById('no-percentage').textContent = noPercent + '%';
        document.getElementById('unsure-percentage').textContent = unsurePercent + '%';
        
        document.getElementById('yes-bar').style.width = yesPercent + '%';
        document.getElementById('no-bar').style.width = noPercent + '%';
        document.getElementById('unsure-bar').style.width = unsurePercent + '%';
    }
    
    document.getElementById('total-votes').textContent = total;
}

// Comments functionality
let comments = [];

// Load comments from localStorage
function loadComments() {
    const saved = localStorage.getItem('comments');
    if (saved) {
        comments = JSON.parse(saved);
    }
    displayComments();
}

// Save comments to localStorage
function saveComments() {
    localStorage.setItem('comments', JSON.stringify(comments));
}

// Add comment function
function addComment() {
    const nameInput = document.getElementById('comment-name');
    const textInput = document.getElementById('comment-text');
    
    const name = nameInput.value.trim();
    const text = textInput.value.trim();
    
    if (!name || !text) {
        alert('Please fill in both your name and comment.');
        return;
    }
    
    // Basic content filtering
    if (text.length < 10) {
        alert('Please write a more detailed comment (at least 10 characters).');
        return;
    }
    
    const comment = {
        id: Date.now(),
        name: name,
        text: text,
        date: new Date().toLocaleDateString('en-AU', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    };
    
    comments.unshift(comment); // Add to beginning of array
    saveComments();
    displayComments();
    
    // Clear form
    nameInput.value = '';
    textInput.value = '';
    
    showSuccessMessage('Thank you for your comment! Your support means everything.');
}

// Display comments
function displayComments() {
    const commentsList = document.getElementById('comments-list');
    
    if (comments.length === 0) {
        commentsList.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">No comments yet. Be the first to show your support!</p>';
        return;
    }
    
    commentsList.innerHTML = comments.map(comment => `
        <div class="comment">
            <div class="comment-header">
                <span class="comment-author">${escapeHtml(comment.name)}</span>
                <span class="comment-date">${comment.date}</span>
            </div>
            <div class="comment-text">${escapeHtml(comment.text)}</div>
        </div>
    `).join('');
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

// Donation amount selection
function setAmount(amount) {
    // Remove active class from all buttons
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Clear custom amount
    document.getElementById('custom-amount').value = '';
    
    // Store selected amount
    selectedAmount = amount;
}

// Copy PayID email
function copyPayID() {
    const payidEmail = 'stephenorazi@gmail.com';
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(payidEmail).then(() => {
            showSuccessMessage('PayID email copied to clipboard!');
        }).catch(() => {
            fallbackCopyTextToClipboard(payidEmail);
        });
    } else {
        fallbackCopyTextToClipboard(payidEmail);
    }
}

// Fallback copy function
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showSuccessMessage('PayID email copied to clipboard!');
    } catch (err) {
        alert('PayID Email: stephenorazi@gmail.com\nPlease copy this manually.');
    }
    
    document.body.removeChild(textArea);
}

// Social sharing functions
function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Support the largest guardianship discrimination case in Australian history - $1.4+ billion fight for justice!');
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank');
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('🚨 FIGHTING $1.4+ BILLION DISCRIMINATION CASE! Support Stephen Orazi\'s fight against systematic government abuse. #JusticeForStephen #GuardianshipReform #HumanRights');
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

function shareOnLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
}

// Success message display
function showSuccessMessage(message) {
    // Remove existing success messages
    document.querySelectorAll('.success-message').forEach(msg => msg.remove());
    
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    
    // Insert after the relevant section
    const targetSection = event.target.closest('section') || document.querySelector('.support-section');
    targetSection.appendChild(successDiv);
    
    // Remove after 5 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.case-card, .timeline-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize scroll animations
document.addEventListener('scroll', animateOnScroll);

// Counter animation for hero stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat h3');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        if (target.includes('$')) {
            // Animate money values
            const value = parseFloat(target.replace(/[^0-9.]/g, ''));
            animateValue(counter, 0, value, 2000, target.includes('Billion') ? 'B' : 'M');
        }
    });
}

function animateValue(element, start, end, duration, suffix) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = progress * (end - start) + start;
        
        if (suffix === 'B') {
            element.textContent = `$${current.toFixed(1)}+ Billion`;
        } else if (suffix === 'M') {
            element.textContent = `$${current.toFixed(0)} Million`;
        }
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Form validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadPollData();
    loadComments();
    
    // Add some initial demo comments if none exist
    if (comments.length === 0) {
        comments = [
            {
                id: 1,
                name: 'Sarah M.',
                text: 'This is absolutely shocking. No one should have to go through this kind of systematic abuse. I\'m sharing this everywhere and will be donating to support your legal battle.',
                date: new Date(Date.now() - 86400000).toLocaleDateString('en-AU', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })
            },
            {
                id: 2,
                name: 'Michael T.',
                text: 'As someone who works in the disability sector, this case highlights everything wrong with our guardianship system. Thank you for fighting not just for yourself but for all vulnerable Australians.',
                date: new Date(Date.now() - 172800000).toLocaleDateString('en-AU', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })
            },
            {
                id: 3,
                name: 'Jennifer L.',
                text: 'The fact that they ignored your Queen\'s Trust recognition and academic achievements shows this is pure discrimination. I hope you get every cent of that $1.4 billion and create the change we desperately need.',
                date: new Date(Date.now() - 259200000).toLocaleDateString('en-AU', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })
            }
        ];
        saveComments();
        displayComments();
    }
    
    // Initialize poll with some demo data if empty
    if (pollData.total === 0) {
        pollData = {
            yes: 47,
            no: 2,
            unsure: 5,
            total: 54,
            userVoted: false
        };
        savePollData();
        updatePollDisplay();
    }
    
    // Animate counters after a short delay
    setTimeout(animateCounters, 1000);
    
    // Initial scroll animation check
    animateOnScroll();
});

// Handle custom amount input
document.addEventListener('DOMContentLoaded', function() {
    const customAmountInput = document.getElementById('custom-amount');
    if (customAmountInput) {
        customAmountInput.addEventListener('input', function() {
            // Remove active class from preset buttons when custom amount is entered
            if (this.value) {
                document.querySelectorAll('.amount-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
            }
        });
    }
});

// Add keyboard support for comments
document.addEventListener('DOMContentLoaded', function() {
    const commentText = document.getElementById('comment-text');
    if (commentText) {
        commentText.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && e.ctrlKey) {
                addComment();
            }
        });
    }
});

// Add loading states for better UX
function showLoading(element) {
    element.classList.add('loading');
}

function hideLoading(element) {
    element.classList.remove('loading');
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('Website error:', e.error);
    // Don't show errors to users unless in development
});

// Performance optimization - lazy load images if any are added later
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Call lazy loading if needed
document.addEventListener('DOMContentLoaded', lazyLoadImages);

