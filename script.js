// Global variables
let currentActivityType = '';
let currentCardIndex = 0;
let likedActivities = [];
let userProfile = null;
let chatMessages = [];
let currentChatGroup = null;
let chatGroups = [];

// Activity data for different types
const activityData = {
    bar: [
        {
            title: "The Blue Moon Bar",
            description: "A cozy bar with craft cocktails and live music every weekend. Perfect for meeting new people in a relaxed atmosphere.",
            location: "Downtown District",
            time: "8:00 PM",
            participants: "4-6 people",
            image: "🍸"
        },
        {
            title: "Rooftop Lounge",
            description: "Elegant rooftop bar with stunning city views. Great for sophisticated conversations and networking.",
            location: "Central Business District",
            time: "7:30 PM",
            participants: "3-5 people",
            image: "🌃"
        },
        {
            title: "Jazz Corner",
            description: "Intimate jazz bar with smooth music and premium drinks. Ideal for music lovers and deep conversations.",
            location: "Arts Quarter",
            time: "9:00 PM",
            participants: "4-7 people",
            image: "🎷"
        },
        {
            title: "Beer Garden",
            description: "Outdoor beer garden with local craft beers and casual atmosphere. Perfect for laid-back socializing.",
            location: "Park District",
            time: "6:00 PM",
            participants: "5-8 people",
            image: "🍺"
        },
        {
            title: "Wine & Dine",
            description: "Sophisticated wine bar with tapas and fine wines. Great for romantic and elegant evenings.",
            location: "Uptown District",
            time: "8:30 PM",
            participants: "3-4 people",
            image: "🍷"
        },
        {
            title: "Sports Bar",
            description: "Energetic sports bar with big screens and pub food. Ideal for sports fans and casual meetups.",
            location: "Sports District",
            time: "7:00 PM",
            participants: "6-10 people",
            image: "🏈"
        },
        {
            title: "Cocktail Lounge",
            description: "Artisanal cocktail bar with creative drinks and intimate seating. Perfect for sophisticated conversations.",
            location: "Fashion District",
            time: "9:30 PM",
            participants: "3-5 people",
            image: "🍹"
        },
        {
            title: "Karaoke Bar",
            description: "Fun karaoke bar with private rooms and great atmosphere. Ideal for entertainment and group activities.",
            location: "Entertainment District",
            time: "8:00 PM",
            participants: "4-8 people",
            image: "🎤"
        },
        {
            title: "Speakeasy",
            description: "Hidden speakeasy with vintage decor and classic cocktails. Perfect for intimate conversations.",
            location: "Historic District",
            time: "9:00 PM",
            participants: "3-6 people",
            image: "🥃"
        },
        {
            title: "Brewery Taproom",
            description: "Local brewery taproom with fresh craft beers and food trucks. Great for beer enthusiasts.",
            location: "Industrial District",
            time: "6:30 PM",
            participants: "4-8 people",
            image: "🍻"
        },
        {
            title: "Wine Cellar",
            description: "Underground wine cellar with rare vintages and cheese pairings. Ideal for wine connoisseurs.",
            location: "Vintage Quarter",
            time: "8:00 PM",
            participants: "3-5 people",
            image: "🍇"
        },
        {
            title: "Tiki Bar",
            description: "Tropical tiki bar with exotic cocktails and island vibes. Perfect for fun and relaxation.",
            location: "Beach District",
            time: "7:30 PM",
            participants: "5-8 people",
            image: "🌺"
        },
        {
            title: "Whiskey Library",
            description: "Exclusive whiskey library with rare spirits and leather armchairs. Perfect for connoisseurs.",
            location: "Luxury District",
            time: "8:00 PM",
            participants: "3-4 people",
            image: "🥃"
        },
        {
            title: "Gin Garden",
            description: "Botanical gin garden with fresh herbs and artisanal tonics. Ideal for gin lovers.",
            location: "Garden District",
            time: "7:00 PM",
            participants: "4-6 people",
            image: "🌿"
        },
        {
            title: "Vintage Pub",
            description: "Historic pub with traditional ales and classic British fare. Great for authentic experience.",
            location: "Heritage District",
            time: "6:00 PM",
            participants: "5-8 people",
            image: "🍺"
        },
        {
            title: "Sake Bar",
            description: "Authentic sake bar with premium Japanese spirits and sushi. Perfect for sake enthusiasts.",
            location: "Japanese Quarter",
            time: "8:30 PM",
            participants: "3-5 people",
            image: "🍶"
        },
        {
            title: "Absinthe Lounge",
            description: "Mysterious absinthe lounge with traditional preparation and artistic atmosphere.",
            location: "Bohemian District",
            time: "9:00 PM",
            participants: "3-4 people",
            image: "💚"
        },
        {
            title: "Craft Beer Hall",
            description: "Spacious beer hall with 50+ craft beers on tap and German-style food.",
            location: "Brewery District",
            time: "6:30 PM",
            participants: "6-12 people",
            image: "🍺"
        }
    ],
    restaurant: [
        {
            title: "Fusion Kitchen",
            description: "Modern fusion restaurant with creative dishes from around the world. Perfect for foodies and adventurous eaters.",
            location: "Foodie District",
            time: "7:00 PM",
            participants: "4-6 people",
            image: "🍽️"
        },
        {
            title: "Farm-to-Table Bistro",
            description: "Fresh, locally-sourced ingredients in a charming bistro setting. Great for health-conscious food lovers.",
            location: "Green District",
            time: "6:30 PM",
            participants: "3-5 people",
            image: "🥗"
        },
        {
            title: "Seafood Harbor",
            description: "Premium seafood restaurant with ocean views. Perfect for special occasions and seafood enthusiasts.",
            location: "Harbor Front",
            time: "8:00 PM",
            participants: "4-7 people",
            image: "🦐"
        },
        {
            title: "Sakura Sushi",
            description: "Authentic Japanese sushi and sashimi with traditional atmosphere. Ideal for sushi lovers and intimate dining.",
            location: "Little Tokyo",
            time: "7:30 PM",
            participants: "3-4 people",
            image: "🍣"
        },
        {
            title: "Pasta Palace",
            description: "Homemade Italian pasta and wine in a cozy trattoria setting. Perfect for romantic and family dining.",
            location: "Italian Quarter",
            time: "7:00 PM",
            participants: "4-6 people",
            image: "🍝"
        },
        {
            title: "BBQ House",
            description: "Smoked meats and southern comfort food with rustic atmosphere. Great for casual group dining.",
            location: "BBQ District",
            time: "6:30 PM",
            participants: "5-8 people",
            image: "🍖"
        },
        {
            title: "Vegan Garden",
            description: "Fresh plant-based cuisine with modern vegan dishes. Ideal for health-conscious and environmentally aware diners.",
            location: "Green District",
            time: "7:15 PM",
            participants: "3-5 people",
            image: "🌱"
        },
        {
            title: "Street Food Hub",
            description: "International street food collection with diverse flavors. Perfect for adventurous eaters and casual dining.",
            location: "Food Court",
            time: "6:45 PM",
            participants: "4-8 people",
            image: "🌮"
        },
        {
            title: "Steakhouse",
            description: "Premium steakhouse with aged beef and fine wines. Perfect for special occasions and meat lovers.",
            location: "Uptown District",
            time: "8:30 PM",
            participants: "3-5 people",
            image: "🥩"
        },
        {
            title: "Dim Sum Palace",
            description: "Traditional dim sum with fresh dumplings and tea service. Ideal for brunch and family gatherings.",
            location: "Chinatown",
            time: "11:00 AM",
            participants: "4-8 people",
            image: "🥟"
        },
        {
            title: "Taco Truck",
            description: "Authentic Mexican tacos and street food. Great for casual and affordable dining.",
            location: "Food Truck Park",
            time: "6:00 PM",
            participants: "3-6 people",
            image: "🌮"
        },
        {
            title: "Ramen House",
            description: "Authentic Japanese ramen with rich broths and fresh noodles. Perfect for comfort food lovers.",
            location: "Noodle District",
            time: "7:00 PM",
            participants: "3-5 people",
            image: "🍜"
        },
        {
            title: "Greek Taverna",
            description: "Traditional Greek cuisine with Mediterranean flavors and warm hospitality.",
            location: "Mediterranean Quarter",
            time: "7:30 PM",
            participants: "4-6 people",
            image: "🍷"
        },
        {
            title: "Indian Spice",
            description: "Authentic Indian cuisine with aromatic spices and traditional tandoor cooking.",
            location: "Spice District",
            time: "7:00 PM",
            participants: "4-7 people",
            image: "🍛"
        },
        {
            title: "French Bistro",
            description: "Classic French bistro with escargot, coq au vin, and fine wines.",
            location: "French Quarter",
            time: "8:00 PM",
            participants: "3-5 people",
            image: "🥖"
        },
        {
            title: "Korean BBQ",
            description: "Interactive Korean BBQ with table grills and fresh banchan sides.",
            location: "Korean District",
            time: "6:30 PM",
            participants: "4-8 people",
            image: "🥩"
        },
        {
            title: "Thai Palace",
            description: "Authentic Thai cuisine with bold flavors and traditional recipes.",
            location: "Thai Quarter",
            time: "7:00 PM",
            participants: "3-6 people",
            image: "🍜"
        },
        {
            title: "Lebanese Grill",
            description: "Traditional Lebanese cuisine with grilled meats and fresh mezze.",
            location: "Middle Eastern Quarter",
            time: "7:30 PM",
            participants: "4-6 people",
            image: "🥙"
        }
    ],
    activity: [
        {
            title: "Escape Room Adventure",
            description: "Thrilling escape room with challenging puzzles. Great for problem-solvers and adventure seekers.",
            location: "Entertainment District",
            time: "2:00 PM",
            participants: "4-6 people",
            image: "🔐"
        },
        {
            title: "Art Workshop",
            description: "Creative painting workshop with professional guidance. Perfect for art lovers and beginners alike.",
            location: "Creative Quarter",
            time: "3:00 PM",
            participants: "3-5 people",
            image: "🎨"
        },
        {
            title: "Hiking Trail",
            description: "Scenic hiking trail with breathtaking views. Ideal for nature lovers and outdoor enthusiasts.",
            location: "Mountain Park",
            time: "10:00 AM",
            participants: "4-7 people",
            image: "🏔️"
        },
        {
            title: "Cooking Class",
            description: "Learn to cook authentic dishes with professional chefs. Perfect for food enthusiasts and skill building.",
            location: "Culinary Institute",
            time: "6:00 PM",
            participants: "4-6 people",
            image: "👨‍🍳"
        },
        {
            title: "Photography Walk",
            description: "Capture the city's best moments with photography guidance. Ideal for photography enthusiasts and sightseeing.",
            location: "Historic District",
            time: "4:00 PM",
            participants: "3-5 people",
            image: "📸"
        },
        {
            title: "Board Game Night",
            description: "Strategic games and friendly competition in a cozy setting. Great for gamers and social interaction.",
            location: "Game Cafe",
            time: "7:00 PM",
            participants: "4-8 people",
            image: "🎲"
        },
        {
            title: "Rock Climbing",
            description: "Indoor rock climbing with various difficulty levels. Perfect for fitness enthusiasts and adventure seekers.",
            location: "Sports Center",
            time: "5:00 PM",
            participants: "3-6 people",
            image: "🧗"
        },
        {
            title: "Dance Class",
            description: "Learn salsa, tango, or contemporary dance moves. Ideal for dance lovers and fitness enthusiasts.",
            location: "Dance Studio",
            time: "7:30 PM",
            participants: "4-8 people",
            image: "💃"
        },
        {
            title: "Yoga Session",
            description: "Relaxing yoga session with meditation and breathing exercises. Perfect for wellness and mindfulness.",
            location: "Wellness Center",
            time: "6:00 PM",
            participants: "3-8 people",
            image: "🧘"
        },
        {
            title: "Pottery Workshop",
            description: "Creative pottery making with clay and wheel throwing. Ideal for artistic expression and relaxation.",
            location: "Art Studio",
            time: "2:00 PM",
            participants: "3-6 people",
            image: "🏺"
        },
        {
            title: "Wine Tasting",
            description: "Guided wine tasting with expert sommeliers. Perfect for wine enthusiasts and sophisticated palates.",
            location: "Vineyard Estate",
            time: "4:00 PM",
            participants: "4-6 people",
            image: "🍷"
        },
        {
            title: "Kayaking Adventure",
            description: "Scenic kayaking on calm waters with safety equipment. Great for outdoor adventure and water sports.",
            location: "Lake District",
            time: "9:00 AM",
            participants: "4-8 people",
            image: "🛶"
        },
        {
            title: "Archery Range",
            description: "Traditional archery with professional instruction and safety equipment.",
            location: "Sports Complex",
            time: "3:00 PM",
            participants: "3-6 people",
            image: "🏹"
        },
        {
            title: "Glass Blowing",
            description: "Creative glass blowing workshop with molten glass and artistic techniques.",
            location: "Glass Studio",
            time: "2:00 PM",
            participants: "2-4 people",
            image: "🔥"
        },
        {
            title: "Beekeeping Tour",
            description: "Educational beekeeping tour with honey tasting and hive inspection.",
            location: "Farm District",
            time: "10:00 AM",
            participants: "4-8 people",
            image: "🐝"
        },
        {
            title: "Astronomy Night",
            description: "Stargazing session with telescopes and expert guidance on constellations.",
            location: "Observatory",
            time: "8:00 PM",
            participants: "3-6 people",
            image: "⭐"
        },
        {
            title: "Chess Tournament",
            description: "Competitive chess tournament with different skill levels and prizes.",
            location: "Game Center",
            time: "2:00 PM",
            participants: "8-16 people",
            image: "♟️"
        },
        {
            title: "Sailing Lesson",
            description: "Learn to sail on calm waters with experienced instructors and safety gear.",
            location: "Marina",
            time: "9:00 AM",
            participants: "2-4 people",
            image: "⛵"
        }
    ]
};

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Clear some data but keep chat groups
    localStorage.removeItem('kairoo_user_profile');
    localStorage.removeItem('kairoo_upcoming_events');
    localStorage.removeItem('kairoo_active_matches');
    localStorage.removeItem('kairoo_groups_joined');
    
    // Always show activity selection as the initial screen (Kairoo Match)
    showSection('activitySelectionSection');
    setActiveNavItem('match');
    
    // Initialize photo upload for profile setup
    initializeProfilePhotoUpload();
});

// Show/hide sections
function showSection(sectionId) {
    // Hide all sections
    const sections = [
        'homeSection',
        'activitySelectionSection',
        'activityCardsSection',
        'chatSection'
    ];
    
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            section.style.display = 'none';
        }
    });
    
    // Show the target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}

// Activity type selection
function selectActivityType(type) {
    currentActivityType = type;
    currentCardIndex = 0;
    likedActivities = [];
    
    // Update the cards title
    const cardsTitle = document.getElementById('cardsTitle');
    if (cardsTitle) {
        const titles = {
            bar: 'Find Your Perfect Bar',
            restaurant: 'Find Your Perfect Restaurant',
            activity: 'Find Your Perfect Activity'
        };
        cardsTitle.textContent = titles[type];
    }
    
    // Show the first card
    showCurrentCard();
    
    // Switch to cards section
    showSection('activityCardsSection');
    setActiveNavItem('match');
    
    // Initialize swipe events
    initializeSwipeEvents();
}

// Show current activity card
function showCurrentCard() {
    const activities = activityData[currentActivityType];
    
    // Generate a card based on current index (can be infinite)
    const cardIndex = currentCardIndex % activities.length;
    const activity = activities[cardIndex];
    
    // Update card content
    document.getElementById('cardImage').textContent = activity.image;
    document.getElementById('cardTitle').textContent = activity.title;
    document.getElementById('cardDescription').textContent = activity.description;
    document.getElementById('cardLocation').textContent = activity.location;
    document.getElementById('cardTime').textContent = activity.time;
    document.getElementById('cardParticipants').textContent = activity.participants;
    
    // Update progress (show current swipe count and likes needed)
    const progressFill = document.getElementById('cardsProgressFill');
    const progressText = document.getElementById('cardsProgressText');
    if (progressFill && progressText) {
        const likesNeeded = 6 - likedActivities.length;
        if (likesNeeded > 0) {
            progressText.textContent = `Liked ${likedActivities.length}/6 - Need ${likesNeeded} more!`;
        } else {
            progressText.textContent = `Perfect! You've liked ${likedActivities.length} activities!`;
        }
        // Keep progress bar at a reasonable level
        const progress = Math.min(((currentCardIndex + 1) % 10) * 10, 100);
        progressFill.style.width = progress + '%';
    }
    
    // Update cards title based on current activity type
    const cardsTitle = document.getElementById('cardsTitle');
    if (cardsTitle) {
        const titles = {
            bar: 'Find Your Perfect Bar',
            restaurant: 'Find Your Perfect Restaurant',
            activity: 'Find Your Perfect Activity'
        };
        cardsTitle.textContent = titles[currentActivityType];
    }
}

// Initialize swipe events
function initializeSwipeEvents() {
    const card = document.getElementById('currentCard');
    console.log('Initializing swipe events for card:', card);
    
    if (!card) {
        console.error('Card element not found!');
        return;
    }
    
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    
    // Touch events
    card.addEventListener('touchstart', handleTouchStart);
    card.addEventListener('touchmove', handleTouchMove);
    card.addEventListener('touchend', handleTouchEnd);
    
    // Mouse events
    card.addEventListener('mousedown', handleMouseDown);
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseup', handleMouseUp);
    card.addEventListener('mouseleave', handleMouseUp);
    
    console.log('Swipe events initialized successfully');
    
    function handleTouchStart(e) {
        console.log('Touch start:', e.touches[0].clientX);
        startX = e.touches[0].clientX;
        isDragging = true;
    }
    
    function handleTouchMove(e) {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
        const diffX = currentX - startX;
        card.style.transform = `translateX(${diffX}px) rotate(${diffX * 0.1}deg)`;
    }
    
    function handleTouchEnd(e) {
        if (!isDragging) return;
        const diffX = currentX - startX;
        console.log('Touch end, diffX:', diffX);
        handleSwipe(diffX);
        isDragging = false;
        card.style.transform = '';
    }
    
    function handleMouseDown(e) {
        console.log('Mouse down:', e.clientX);
        startX = e.clientX;
        isDragging = true;
        card.style.cursor = 'grabbing';
    }
    
    function handleMouseMove(e) {
        if (!isDragging) return;
        currentX = e.clientX;
        const diffX = currentX - startX;
        card.style.transform = `translateX(${diffX}px) rotate(${diffX * 0.1}deg)`;
    }
    
    function handleMouseUp(e) {
        if (!isDragging) return;
        const diffX = currentX - startX;
        console.log('Mouse up, diffX:', diffX);
        handleSwipe(diffX);
        isDragging = false;
        card.style.transform = '';
        card.style.cursor = 'grab';
    }
}

// Handle swipe gesture
function handleSwipe(diffX) {
    console.log('Handling swipe with diffX:', diffX);
    
    const threshold = 100;
    
    if (Math.abs(diffX) < threshold) {
        console.log('Swipe too small, threshold not met');
        return; // Not enough swipe
    }
    
    const activities = activityData[currentActivityType];
    const cardIndex = currentCardIndex % activities.length;
    const currentActivity = activities[cardIndex];
    
    if (diffX > 0) {
        // Swipe right - Like
        likedActivities.push(currentActivity);
        console.log('Liked:', currentActivity.title);
        console.log('Total likes:', likedActivities.length);
        
        // Check if we have enough likes to form a group (need at least 6 likes)
        if (likedActivities.length >= 6) {
            console.log('Enough likes! Showing profile setup');
            // Successfully matched! Show profile setup
            showProfileSetupModal();
            return;
        }
    } else {
        // Swipe left - Dislike
        console.log('Disliked:', currentActivity.title);
    }
    
    // Move to next card (infinite loop)
    currentCardIndex++;
    console.log('Moving to next card, new index:', currentCardIndex);
    showCurrentCard();
    
    // Re-initialize swipe events for the new card
    setTimeout(() => {
        initializeSwipeEvents();
    }, 100);
}

// Go back to activity selection
function goBackToSelection() {
    showSection('activitySelectionSection');
}

// Show profile setup modal
function showProfileSetupModal() {
    console.log('Showing profile setup modal');
    const modal = document.getElementById('profileSetupModal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
        console.log('Modal should now be visible');
    } else {
        console.error('Profile setup modal not found!');
    }
}

// Hide profile setup modal
function hideProfileSetupModal() {
    console.log('Hiding profile setup modal');
    const modal = document.getElementById('profileSetupModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.style.display = 'none';
    }
}

// Initialize profile photo upload
function initializeProfilePhotoUpload() {
    const photoInput = document.getElementById('profilePhoto');
    const uploadArea = document.querySelector('.upload-area');
    const previewArea = document.getElementById('profilePreviewArea');
    const previewImage = document.getElementById('profilePreviewImage');
    
    if (photoInput && uploadArea) {
        photoInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    previewImage.src = e.target.result;
                    uploadArea.style.display = 'none';
                    previewArea.style.display = 'block';
                };
                reader.readAsDataURL(file);
            }
        });
    }
}

// Remove profile photo
function removeProfilePhoto() {
    const photoInput = document.getElementById('profilePhoto');
    const uploadArea = document.querySelector('.upload-area');
    const previewArea = document.getElementById('profilePreviewArea');
    
    if (photoInput) {
        photoInput.value = '';
    }
    if (uploadArea) {
        uploadArea.style.display = 'block';
    }
    if (previewArea) {
        previewArea.style.display = 'none';
    }
}

// Complete profile setup
function completeProfileSetup() {
    const name = document.getElementById('profileName').value;
    const age = document.getElementById('profileAge').value;
    const gender = document.getElementById('profileGender').value;
    const bio = document.getElementById('profileBio').value;
    
    if (!name || !age || !gender) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Save user profile
    userProfile = {
        name: name,
        age: age,
        gender: gender,
        bio: bio,
        activityType: currentActivityType,
        likedActivities: likedActivities
    };
    
    localStorage.setItem('kairoo_user_profile', JSON.stringify(userProfile));
    
    // Initialize some sample data for the dashboard
    localStorage.setItem('kairoo_active_matches', JSON.stringify([]));
    localStorage.setItem('kairoo_groups_joined', JSON.stringify([]));
    localStorage.setItem('kairoo_upcoming_events', JSON.stringify([]));
    
    // Hide modal and start chat
    hideProfileSetupModal();
    startChat();
    
    // Set navigation to chat
    setActiveNavItem('chat');
}

// Start chat interface
function startChat() {
    showSection('chatSection');
    
    // Initialize chat
    chatMessages = [];
    
    // Randomly select one of the liked activities for the match
    const selectedActivity = likedActivities[Math.floor(Math.random() * likedActivities.length)];
    console.log('Randomly selected activity:', selectedActivity.title);
    
    // Create chat group
    const today = new Date();
    const dateStr = today.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: 'numeric'
    });
    const timeStr = selectedActivity.time;
    
    const chatGroup = {
        id: Date.now(),
        name: `${dateStr} - ${selectedActivity.title}`,
        activity: selectedActivity,
        type: currentActivityType,
        date: today.toISOString(),
        messages: [],
        members: ['Sarah', 'Mike', 'Emma', userProfile.name]
    };
    
    // Add to chat groups
    chatGroups.push(chatGroup);
    localStorage.setItem('kairoo_chat_groups', JSON.stringify(chatGroups));
    
    // Set as current chat group
    currentChatGroup = chatGroup;
    
    // Show chat groups list
    showChatGroups();
    
    // Start the chat sequence
    startChatSequence(chatGroup);
}

// Start chat sequence for a specific group
function startChatSequence(chatGroup) {
    const selectedActivity = chatGroup.activity;
    
    // Add welcome message
    addMessage('ai', '🤖 Kairoo Assistant', `Hey everyone! Welcome to our ${currentActivityType} group! I'm here to help you plan the perfect experience.`);
    
    // AI directly announces the location based on matched theme
    setTimeout(() => {
        addMessage('ai', '🤖 Kairoo Assistant', `Based on your preferences, I've matched you with "${selectedActivity.title}"! This place looks perfect for our group.`);
    }, 1000);
    
    // AI asks for concerns
    setTimeout(() => {
        addMessage('ai', '🤖 Kairoo Assistant', `Does anyone have any concerns about this location? If everyone is good with it, we can proceed with the details!`);
    }, 2000);
    
    // Add member responses
    setTimeout(() => {
        addMemberMessage('Sarah', '👍 Sounds great! I love that place.');
    }, 3000);
    
    setTimeout(() => {
        addMemberMessage('Mike', 'Perfect choice! No concerns here.');
    }, 4000);
    
    setTimeout(() => {
        addMemberMessage('Emma', 'Count me in! 🎉');
    }, 5000);
    
    // AI confirms location and starts ice-breaking
    setTimeout(() => {
        addMessage('ai', '🤖 Kairoo Assistant', 'Excellent! Everyone is on board. Now let\'s get to know each other better with a quick ice-breaker!');
    }, 6000);
    
    // Ice-breaking question
    setTimeout(() => {
        addMessage('ai', '🤖 Kairoo Assistant', 'What\'s your favorite thing about trying new places? Share something fun about yourself! 😊');
    }, 7000);
    
    // Member responses to ice-breaker
    setTimeout(() => {
        addMemberMessage('Sarah', 'I love discovering hidden gems! Always excited to meet new people too.');
    }, 8000);
    
    setTimeout(() => {
        addMemberMessage('Mike', 'I enjoy the atmosphere and good conversations. Can\'t wait to explore together!');
    }, 9000);
    
    setTimeout(() => {
        addMemberMessage('Emma', 'I\'m all about the food and vibes! Plus meeting awesome people like you all! 🍕');
    }, 10000);
    
    // AI announces final details
    setTimeout(() => {
        addMessage('ai', '🤖 Kairoo Assistant', 'Great! You all seem like a perfect match! Now for the final details:');
    }, 11000);
    
    setTimeout(() => {
        addMessage('ai', '🤖 Kairoo Assistant', `📍 Location: ${selectedActivity.title}\n🕐 Time: ${selectedActivity.time}\n👥 Meeting Point: ${selectedActivity.location}\n📱 Group Size: ${selectedActivity.participants}`);
    }, 12000);
    
    // AI confirms everything is set
    setTimeout(() => {
        addMessage('ai', '🤖 Kairoo Assistant', 'Perfect! Everything is confirmed. You\'re all set for an amazing time! 🎉');
    }, 13000);
    
    // AI final message
    setTimeout(() => {
        addMessage('ai', '🤖 Kairoo Assistant', 'Have a fantastic time! Don\'t forget to share photos from your meetup! 📸✨');
    }, 14000);
    
    // Add the activity to upcoming events after chat completes
    setTimeout(() => {
        addUpcomingEvent(selectedActivity);
    }, 15000);
}

// Add AI message
function addMessage(type, sender, content) {
    const message = { type, sender, content, timestamp: Date.now() };
    
    // Add to current chat group if exists
    if (currentChatGroup) {
        if (!currentChatGroup.messages) {
            currentChatGroup.messages = [];
        }
        currentChatGroup.messages.push(message);
        
        // Update localStorage
        const groups = JSON.parse(localStorage.getItem('kairoo_chat_groups') || '[]');
        const groupIndex = groups.findIndex(g => g.id === currentChatGroup.id);
        if (groupIndex !== -1) {
            groups[groupIndex] = currentChatGroup;
            localStorage.setItem('kairoo_chat_groups', JSON.stringify(groups));
        }
    }
    
    // Add to UI
    addMessageToUI(type, sender, content);
}

// Add member message
function addMemberMessage(name, content) {
    const message = { type: 'member', sender: name, content, timestamp: Date.now() };
    
    // Add to current chat group if exists
    if (currentChatGroup) {
        if (!currentChatGroup.messages) {
            currentChatGroup.messages = [];
        }
        currentChatGroup.messages.push(message);
        
        // Update localStorage
        const groups = JSON.parse(localStorage.getItem('kairoo_chat_groups') || '[]');
        const groupIndex = groups.findIndex(g => g.id === currentChatGroup.id);
        if (groupIndex !== -1) {
            groups[groupIndex] = currentChatGroup;
            localStorage.setItem('kairoo_chat_groups', JSON.stringify(groups));
        }
    }
    
    // Add to UI
    addMessageToUI('member', name, content);
}

// Show leave group modal
function showLeaveGroupModal() {
    const modal = document.getElementById('leaveGroupModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

// Hide leave group modal
function hideLeaveGroupModal() {
    const modal = document.getElementById('leaveGroupModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Leave group and restart
function leaveGroupAndRestart() {
    hideLeaveGroupModal();
    
    // Clear all data
    localStorage.clear();
    currentActivityType = '';
    currentCardIndex = 0;
    likedActivities = [];
    userProfile = null;
    chatMessages = [];
    currentChatGroup = null;
    chatGroups = [];
    
    // Return to Kairoo Match page
    showSection('activitySelectionSection');
    setActiveNavItem('match');
}

// Navigation function
function navigateTo(page) {
    // Update active nav item
    setActiveNavItem(page);
    
    switch(page) {
        case 'home':
            // Show home page only if user has profile
            if (userProfile) {
                showSection('homeSection');
                updateHomeStats(); // Update stats when visiting home
            } else {
                alert('Please complete your matching and profile setup first');
                setActiveNavItem('match');
            }
            break;
        case 'chat':
            if (userProfile) {
                showSection('chatSection');
                showChatGroups(); // Show chat groups list
            } else {
                alert('Please complete your matching and profile setup first');
                setActiveNavItem('match');
            }
            break;
        case 'match':
            // Always allow access to match page
            showSection('activitySelectionSection');
            break;
        case 'profile':
            if (userProfile) {
                showProfileSetupModal();
            } else {
                alert('Please complete your matching first');
                setActiveNavItem('match');
            }
            break;
    }
}

// Set active navigation item
function setActiveNavItem(page) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    
    const targetNavItem = document.querySelector(`[onclick="navigateTo('${page}')"]`);
    if (targetNavItem) {
        targetNavItem.classList.add('active');
    }
}

// Add upcoming event to home page
function addUpcomingEvent(activity) {
    if (!userProfile) return;
    
    // Get existing events from localStorage
    let upcomingEvents = JSON.parse(localStorage.getItem('kairoo_upcoming_events') || '[]');
    
    // Add new event
    const newEvent = {
        id: Date.now(),
        title: activity.title,
        type: currentActivityType,
        time: activity.time,
        location: activity.location,
        participants: activity.participants,
        date: new Date().toISOString()
    };
    
    upcomingEvents.push(newEvent);
    localStorage.setItem('kairoo_upcoming_events', JSON.stringify(upcomingEvents));
    
    // Update home page stats
    updateHomeStats();
}

// Update home page statistics
function updateHomeStats() {
    if (!userProfile) return;
    
    const upcomingEvents = JSON.parse(localStorage.getItem('kairoo_upcoming_events') || '[]');
    const activeMatches = JSON.parse(localStorage.getItem('kairoo_active_matches') || '[]');
    const groupsJoined = JSON.parse(localStorage.getItem('kairoo_groups_joined') || '[]');
    
    // Update stats
    const activeMatchesElement = document.getElementById('activeMatches');
    const groupsJoinedElement = document.getElementById('groupsJoined');
    const upcomingEventsElement = document.getElementById('upcomingEvents');
    
    if (activeMatchesElement) activeMatchesElement.textContent = activeMatches.length;
    if (groupsJoinedElement) groupsJoinedElement.textContent = groupsJoined.length;
    if (upcomingEventsElement) upcomingEventsElement.textContent = upcomingEvents.length;
    
    // Update events list
    updateEventsList();
}

// Update events list on home page
function updateEventsList() {
    const eventList = document.getElementById('eventList');
    if (!eventList) return;
    
    const upcomingEvents = JSON.parse(localStorage.getItem('kairoo_upcoming_events') || '[]');
    
    eventList.innerHTML = '';
    
    if (upcomingEvents.length === 0) {
        eventList.innerHTML = '<p class="no-events">No upcoming events yet. Start matching to find activities!</p>';
        return;
    }
    
    upcomingEvents.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.className = 'event-item';
        eventElement.innerHTML = `
            <div class="event-icon">${getEventIcon(event.type)}</div>
            <div class="event-details">
                <h4>${event.title}</h4>
                <p>📍 ${event.location}</p>
                <p>🕐 ${event.time}</p>
                <p>👥 ${event.participants}</p>
            </div>
        `;
        eventList.appendChild(eventElement);
    });
}

// Get event icon based on type
function getEventIcon(type) {
    const icons = {
        bar: '🍺',
        restaurant: '🍽️',
        activity: '🎯'
    };
    return icons[type] || '🎯';
}

// Show chat groups list
function showChatGroups() {
    // Load chat groups from localStorage
    chatGroups = JSON.parse(localStorage.getItem('kairoo_chat_groups') || '[]');
    console.log('Loaded chat groups:', chatGroups);
    
    // Show groups view, hide room view
    const groupsView = document.getElementById('chatGroupsView');
    const roomView = document.getElementById('chatRoomView');
    
    if (groupsView) {
        groupsView.style.display = 'flex';
        console.log('Showing chat groups view');
    } else {
        console.error('chatGroupsView not found');
    }
    
    if (roomView) {
        roomView.style.display = 'none';
    } else {
        console.error('chatRoomView not found');
    }
    
    // Update groups list
    updateChatGroupsList();
}

// Update chat groups list
function updateChatGroupsList() {
    const groupsList = document.getElementById('chatGroupsList');
    if (!groupsList) return;
    
    groupsList.innerHTML = '';
    
    if (chatGroups.length === 0) {
        groupsList.innerHTML = `
            <div class="no-groups-message">
                <h4>No Chat Groups Yet</h4>
                <p>Start matching to create your first chat group!</p>
                <button class="btn-primary" onclick="navigateTo('match')">Start Matching</button>
            </div>
        `;
        return;
    }
    
    chatGroups.forEach(group => {
        const groupElement = document.createElement('div');
        groupElement.className = 'chat-group-item';
        groupElement.onclick = () => enterChatGroup(group);
        
        const date = new Date(group.date);
        const dateStr = date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric' 
        });
        
        groupElement.innerHTML = `
            <div class="chat-group-avatar">${getEventIcon(group.type)}</div>
            <div class="chat-group-details">
                <div class="chat-group-name">${group.name}</div>
                <div class="chat-group-info">
                    <span>📍 ${group.activity.location}</span>
                    <span>🕐 ${group.activity.time}</span>
                    <span>👥 ${group.activity.participants}</span>
                </div>
                <div class="chat-group-date">${dateStr}</div>
            </div>
        `;
        
        groupsList.appendChild(groupElement);
    });
}

// Enter a specific chat group
function enterChatGroup(group) {
    currentChatGroup = group;
    
    // Hide groups view, show room view
    document.getElementById('chatGroupsView').style.display = 'none';
    document.getElementById('chatRoomView').style.display = 'flex';
    
    // Update group info
    document.getElementById('chatGroupName').textContent = group.name;
    document.getElementById('currentGroupAvatar').textContent = getEventIcon(group.type);
    
    // Load and display messages
    loadChatMessages(group);
}

// Load chat messages for a specific group
function loadChatMessages(group) {
    const chatMessagesContainer = document.getElementById('chatMessages');
    chatMessagesContainer.innerHTML = '';
    
    // Load messages from group
    if (group.messages && group.messages.length > 0) {
        group.messages.forEach(message => {
            addMessageToUI(message.type, message.sender, message.content);
        });
    }
    
    // Scroll to bottom
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
}

// Add message to UI (without saving to group)
function addMessageToUI(type, sender, content) {
    const chatMessages = document.getElementById('chatMessages');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${type}-message`;
    
    if (type === 'ai') {
        messageElement.innerHTML = `
            <div class="message-avatar">🤖</div>
            <div class="message-content">
                <div class="message-sender">${sender}</div>
                <div class="message-text">${content}</div>
            </div>
        `;
    } else if (type === 'member') {
        // Get first letter of name for avatar
        const avatar = sender.charAt(0).toUpperCase();
        messageElement.innerHTML = `
            <div class="message-avatar">${avatar}</div>
            <div class="message-content">
                <div class="message-sender">${sender}</div>
                <div class="message-text">${content}</div>
            </div>
        `;
    } else {
        // User messages (if any)
        const avatar = sender.charAt(0).toUpperCase();
        messageElement.innerHTML = `
            <div class="message-avatar">${avatar}</div>
            <div class="message-content">
                <div class="message-sender">${sender}</div>
                <div class="message-text">${content}</div>
            </div>
        `;
    }
    
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}