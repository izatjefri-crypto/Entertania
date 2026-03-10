// ============================================
// COMPLETE SEARCH.JS - WITH ALL YOUR PAGES
// ============================================

// Sidebar Toggle
const sidebar = document.getElementById('mySidebar');
const toggleBtn = document.getElementById('sidebarToggle');
const toggleIcon = document.getElementById('toggleIcon');
const content = document.querySelector('.content');

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('closed');
        toggleBtn.classList.toggle('moved');

        if (sidebar.classList.contains('closed')) {
            toggleIcon.innerText = '❯';
            content.style.marginLeft = "auto";
            content.style.marginRight = "auto";
        } else {
            toggleIcon.innerText = '❮';
            content.style.marginLeft = "280px"; 
        }
    });
}

// Login/Logout functionality
function checkLoginStatus() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const sidebarFooter = document.querySelector('.sidebar__footer');
    const navActions = document.getElementById('navActions');
    
    if (currentUser && currentUser.loggedIn) {
        if (navActions) {
            navActions.innerHTML = `
                <div class="user-profile" onclick="viewProfile()">
                    <img src="${currentUser.avatar || 'assets/images/default-avatar.png'}" alt="Profile">
                    <span>${currentUser.username}</span>
                </div>
            `;
        }
        
        if (sidebarFooter) {
            sidebarFooter.innerHTML = `
                <button class="btn-login" onclick="viewProfile()" style="margin-bottom: 10px;">
                    <i class='bx bx-user-circle'></i> ${currentUser.username}
                </button>
                <button class="logout-btn" onclick="logout()">
                    <i class='bx bx-log-out'></i> Logout
                </button>
            `;
        }
    } else {
        if (navActions) {
            navActions.innerHTML = `
                <div class="login-prompt">
                    <button class="signup-btn" onclick="window.location.href='register.html'">Sign Up</button>
                    <button onclick="window.location.href='login.html'">Log In</button>
                </div>
            `;
        }
        
        if (sidebarFooter) {
            sidebarFooter.innerHTML = `
                <a href="login.html" style="text-decoration: none; display: block;">
                    <button class="btn-login">
                        <i class='bx bx-user-circle'></i> Sign up or log in
                    </button>
                </a>
            `;
        }
    }
}

function viewProfile() {
    window.location.href = 'profile.html';
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.reload();
}

// Add logout button CSS
const logoutStyle = document.createElement('style');
logoutStyle.textContent = `
    .logout-btn {
        width: 100%;
        background: transparent;
        border: 1px solid #b31919;
        color: #b31919;
        padding: 10px;
        border-radius: 25px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }
    
    .logout-btn:hover {
        background: #b31919;
        color: white;
    }
`;
document.head.appendChild(logoutStyle);

// ============================================
// GAME DATABASE - ALL YOUR PAGES
// ============================================

const gameDatabase = [
    // ===== HOMEPAGE & MAIN PAGES =====
    {
        type: 'home',
        title: 'Homepage',
        category: 'main',
        url: 'index.html', // CHANGED FROM Homepage.html TO index.html
        keywords: ['home', 'homepage', 'main', 'entertania']
    },
    {
        type: 'forum',
        title: 'Forum Discussion',
        category: 'main',
        url: 'Forum-discussion.html',
        keywords: ['forum', 'discussion', 'community', 'thread']
    },
    {
        type: 'reviews',
        title: 'Game Reviews',
        category: 'main',
        url: 'game-reviews.html',
        keywords: ['reviews', 'game reviews', 'ratings']
    },
    {
        type: 'guides',
        title: 'Guides',
        category: 'main',
        url: 'guides.html',
        keywords: ['guides', 'walkthrough', 'tips', 'tutorial']
    },
    {
        type: 'price',
        title: 'Price Tracker',
        category: 'main',
        url: 'price-tracker.html',
        keywords: ['price', 'tracker', 'deals', 'prices', 'cheap']
    },
    {
        type: 'login',
        title: 'Login',
        category: 'account',
        url: 'Login.html',
        keywords: ['login', 'sign in', 'account']
    },
    {
        type: 'register',
        title: 'Register',
        category: 'account',
        url: 'register.html',
        keywords: ['register', 'sign up', 'create account']
    },
    {
        type: 'profile',
        title: 'Profile',
        category: 'account',
        url: 'profile.html',
        keywords: ['profile', 'account', 'user']
    },
    {
        type: 'thread',
        title: 'Thread 1',
        category: 'forum',
        url: 'Thread1.html',
        keywords: ['thread', 'discussion', 'post']
    },
    {
        type: 'test',
        title: 'Test Page',
        category: 'other',
        url: 'test.html',
        keywords: ['test']
    },

    // ===== GAME DETAIL PAGES =====
    {
        type: 'detail',
        title: 'Resident Evil Requiem',
        category: 'game-detail',
        url: 'game-detail.html',
        keywords: ['resident evil', 'requiem', 'leon', 'survival horror']
    },
    {
        type: 'detail',
        title: 'Crimson Desert',
        category: 'game-detail',
        url: 'game-detail2.html',
        keywords: ['crimson', 'desert', 'pywel', 'rpg']
    },
    {
        type: 'detail',
        title: 'Marvel Wolverine',
        category: 'game-detail',
        url: 'game-detail3.html',
        keywords: ['marvel', 'wolverine', 'xmen', 'superhero']
    },
    {
        type: 'detail',
        title: 'GTA VI',
        category: 'game-detail',
        url: 'game-detail4.html',
        keywords: ['gta', 'grand theft auto', 'gta6', 'rockstar']
    },

    // ===== TRENDING GAME PAGES =====
    {
        type: 'trending',
        title: 'Fortnite',
        category: 'trending',
        url: 'trending-game-fortnite.html',
        keywords: ['fortnite', 'epic', 'battle royale', 'fn', 'trending']
    },
    {
        type: 'trending',
        title: 'League of Legends',
        category: 'trending',
        url: 'trending-game-lol.html',
        keywords: ['league', 'lol', 'legends', 'moba', 'trending']
    },
    {
        type: 'trending',
        title: 'Minecraft',
        category: 'trending',
        url: 'trending-game-minecraft.html',
        keywords: ['minecraft', 'mc', 'survival', 'trending']
    },
    {
        type: 'trending',
        title: 'Counter Strike 2',
        category: 'trending',
        url: 'trending-game-cs2.html',
        keywords: ['cs2', 'counter strike', 'csgo', 'fps', 'trending']
    },
    {
        type: 'trending',
        title: 'Valorant',
        category: 'trending',
        url: 'trending-game-valorant.html',
        keywords: ['valorant', 'valo', 'fps', 'riot', 'trending']
    },
    {
        type: 'trending',
        title: 'Warhammer 40K',
        category: 'trending',
        url: 'trending-game-warhammer40k.html',
        keywords: ['warhammer', '40k', 'warhammer 40k', 'trending']
    },
    {
        type: 'trending',
        title: 'Helldivers 2',
        category: 'trending',
        url: 'trending-game-helldivers2.html',
        keywords: ['helldivers', 'helldivers 2', 'co-op', 'trending']
    },
    {
        type: 'trending',
        title: 'Ghost of Tsushima',
        category: 'trending',
        url: 'trending-game-ghostoftssushima.html',
        keywords: ['ghost', 'tsushima', 'samurai', 'trending']
    },
    {
        type: 'trending',
        title: 'Arc Raiders',
        category: 'trending',
        url: 'trending-game-arcraiders.html',
        keywords: ['arc', 'raiders', 'arc raiders', 'extraction', 'trending']
    },
    {
        type: 'trending',
        title: 'Baldur\'s Gate 3',
        category: 'trending',
        url: 'trending-game-baldursgate3.html',
        keywords: ['baldurs', 'gate', 'bg3', 'rpg', 'trending']
    },
    {
        type: 'trending',
        title: 'Forza Horizon 5',
        category: 'trending',
        url: 'trending-game-forzahorizon5.html',
        keywords: ['forza', 'horizon', 'fh5', 'racing', 'trending']
    },
    {
        type: 'trending',
        title: 'Supermarket Simulator',
        category: 'trending',
        url: 'trending-game-supermarket.html',
        keywords: ['supermarket', 'simulator', 'store', 'management', 'trending']
    },

    // ===== GUIDE PAGES =====
    {
        type: 'guide',
        title: 'Arc Raiders Guide',
        category: 'guide',
        url: 'arraiderguides.html',
        keywords: ['arc raiders', 'guide', 'walkthrough', 'tips']
    },
    {
        type: 'guide',
        title: 'Baldur\'s Gate 3 Guide',
        category: 'guide',
        url: 'guide-baldursgate3.html',
        keywords: ['baldurs gate', 'bg3', 'guide', 'walkthrough', 'rpg']
    },
    {
        type: 'guide',
        title: 'Counter Strike Guide',
        category: 'guide',
        url: 'guide-counterstrike.html',
        keywords: ['counter strike', 'cs2', 'csgo', 'guide', 'fps']
    },
    {
        type: 'guide',
        title: 'Fortnite Guide',
        category: 'guide',
        url: 'guide-fortnite.html',
        keywords: ['fortnite', 'guide', 'battle royale', 'tips']
    },
    {
        type: 'guide',
        title: 'Forza Horizon 5 Guide',
        category: 'guide',
        url: 'guide-forzahorizon5.html',
        keywords: ['forza', 'horizon', 'fh5', 'guide', 'racing']
    },
    {
        type: 'guide',
        title: 'Ghost of Tsushima Guide',
        category: 'guide',
        url: 'guide-ghostoftsushima.html',
        keywords: ['ghost', 'tsushima', 'guide', 'samurai']
    },
    {
        type: 'guide',
        title: 'GTA 5 Guide',
        category: 'guide',
        url: 'guide-gta5.html',
        keywords: ['gta', 'grand theft auto', 'gta5', 'guide']
    },
    {
        type: 'guide',
        title: 'Helldivers 2 Guide',
        category: 'guide',
        url: 'guide-helldivers2.html',
        keywords: ['helldivers', 'helldivers 2', 'guide', 'co-op']
    },
    {
        type: 'guide',
        title: 'League of Legends Guide',
        category: 'guide',
        url: 'guide-leagueoflegend.html',
        keywords: ['league', 'lol', 'guide', 'moba']
    },
    {
        type: 'guide',
        title: 'Minecraft Guide',
        category: 'guide',
        url: 'guide-minecraft.html',
        keywords: ['minecraft', 'guide', 'survival', 'crafting']
    },
    {
        type: 'guide',
        title: 'Red Dead Redemption 2 Guide',
        category: 'guide',
        url: 'guide-rdr2.html',
        keywords: ['rdr2', 'red dead', 'redemption', 'guide']
    },
    {
        type: 'guide',
        title: 'Resident Evil 2 Guide',
        category: 'guide',
        url: 'guide-re2.html',
        keywords: ['resident evil', 're2', 'guide', 'survival horror']
    },
    {
        type: 'guide',
        title: 'Supermarket Simulator Guide',
        category: 'guide',
        url: 'guide-supermarketsimulator.html',
        keywords: ['supermarket', 'simulator', 'guide', 'store']
    },
    {
        type: 'guide',
        title: 'The Witcher 3 Guide',
        category: 'guide',
        url: 'guide-thewitcher3.html',
        keywords: ['witcher', 'geralt', 'thewitcher', 'guide', 'rpg']
    },
    {
        type: 'guide',
        title: 'Warhammer 40K Guide',
        category: 'guide',
        url: 'guide-warhammer40000.html',
        keywords: ['warhammer', '40k', 'warhammer 40k', 'guide']
    },
    {
        type: 'guide',
        title: 'Resident Evil Requiem Guide',
        category: 'guide',
        url: 'residentevilrequiemguides.html',
        keywords: ['resident evil', 'requiem', 'guide', 'walkthrough']
    },
    {
        type: 'guide',
        title: 'Valorant Guide',
        category: 'guide',
        url: 'valorant-guide-page.html',
        keywords: ['valorant', 'guide', 'fps', 'agents']
    },

    // ===== REVIEW PAGES =====
    {
        type: 'review',
        title: 'Cyberpunk Phantom Liberty Review',
        category: 'review',
        url: 'cyberpunk-phantom-liberty-review.html',
        keywords: ['cyberpunk', 'phantom liberty', 'review', '2077']
    },
    {
        type: 'review',
        title: 'God of War 2018 Review',
        category: 'review',
        url: 'godofwar-2018-review.html',
        keywords: ['god of war', '2018', 'kratos', 'review']
    },
    {
        type: 'review',
        title: 'God of War: Sons of Sparta Review',
        category: 'review',
        url: 'godofwar-sons-of-sparta-review.html',
        keywords: ['god of war', 'sons of sparta', 'review', 'psp']
    },
    {
        type: 'review',
        title: 'Kena: Bridge of Spirits Review',
        category: 'review',
        url: 'kena-bridge-of-spirits-review.html',
        keywords: ['kena', 'bridge of spirits', 'review']
    },
    {
        type: 'review',
        title: 'Red Dead Redemption 2 Review',
        category: 'review',
        url: 'rdr2-review.html',
        keywords: ['rdr2', 'red dead', 'redemption', 'review']
    },
    {
        type: 'review',
        title: 'Resident Evil Requiem Review',
        category: 'review',
        url: 'residentevilrequiemreview.html',
        keywords: ['resident evil', 'requiem', 'review']
    },
    {
        type: 'review',
        title: 'Spider-Man 2 Review',
        category: 'review',
        url: 'spiderman-2-review.html',
        keywords: ['spiderman', 'spider man', 'marvel', 'review']
    },
    {
        type: 'review',
        title: 'Styx: Blades of Greed Review',
        category: 'review',
        url: 'Styx-Blades-of-Greed-Review.html',
        keywords: ['styx', 'blades of greed', 'review', 'stealth']
    },
    {
        type: 'review',
        title: 'Witcher 3 Review',
        category: 'review',
        url: 'witcher-3-review.html',
        keywords: ['witcher', 'geralt', 'thewitcher', 'review', 'rpg']
    },

    // ===== GAME DISCUSSION =====
    {
        type: 'discussion',
        title: 'Game Discussion Forum',
        category: 'forum',
        url: 'game-discussion.html',
        keywords: ['discussion', 'forum', 'talk', 'community']
    },
    {
        type: 'thread',
        title: 'Thread Discussion',
        category: 'forum',
        url: 'thread.html',
        keywords: ['thread', 'discussion', 'post', 'topic']
    }
];

// Search function
function performSearch(query) {
    if (!query || query.trim() === '') {
        return [];
    }
    
    const searchTerm = query.toLowerCase().trim();
    
    const results = gameDatabase.filter(item => {
        if (item.title.toLowerCase().includes(searchTerm)) {
            return true;
        }
        return item.keywords.some(keyword => 
            keyword.toLowerCase().includes(searchTerm)
        );
    });
    
    return results;
}

// Display search results
function showSearchResults(results, searchTerm) {
    const existingModal = document.getElementById('searchResultsModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    const modal = document.createElement('div');
    modal.id = 'searchResultsModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.95);
        z-index: 20000;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px 20px;
        overflow-y: auto;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        max-width: 800px;
        width: 100%;
        background: #1a1f2b;
        border-radius: 16px;
        padding: 30px;
        position: relative;
    `;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
        position: absolute;
        top: 15px;
        right: 20px;
        background: none;
        border: none;
        color: white;
        font-size: 40px;
        cursor: pointer;
        transition: color 0.3s;
    `;
    closeBtn.onmouseover = () => closeBtn.style.color = '#b31919';
    closeBtn.onmouseout = () => closeBtn.style.color = 'white';
    closeBtn.onclick = () => modal.remove();
    
    const header = document.createElement('h2');
    header.style.cssText = `
        color: white;
        margin-bottom: 25px;
        font-size: 28px;
        border-bottom: 1px solid #2a3456;
        padding-bottom: 15px;
    `;
    
    if (results.length === 0) {
        header.innerHTML = `No results found for "${searchTerm}"`;
    } else {
        header.innerHTML = `Found ${results.length} result${results.length > 1 ? 's' : ''} for "${searchTerm}"`;
    }
    
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(header);
    
    if (results.length > 0) {
        const resultsContainer = document.createElement('div');
        
        const main = results.filter(r => r.category === 'main');
        const guides = results.filter(r => r.category === 'guide');
        const trending = results.filter(r => r.category === 'trending');
        const reviews = results.filter(r => r.category === 'review');
        const details = results.filter(r => r.category === 'game-detail');
        const forum = results.filter(r => r.category === 'forum');
        
        function createResultSection(title, items, icon, color = '#4a90e2') {
            if (items.length === 0) return null;
            
            const section = document.createElement('div');
            section.style.marginBottom = '25px';
            
            const sectionTitle = document.createElement('h3');
            sectionTitle.style.cssText = `
                color: ${color};
                margin-bottom: 15px;
                font-size: 20px;
                display: flex;
                align-items: center;
                gap: 8px;
            `;
            sectionTitle.innerHTML = `<i class='bx ${icon}'></i> ${title} (${items.length})`;
            
            const list = document.createElement('div');
            list.style.cssText = `
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                gap: 12px;
            `;
            
            items.forEach(item => {
                const resultItem = document.createElement('a');
                resultItem.href = item.url;
                resultItem.style.cssText = `
                    background: #14171e;
                    padding: 15px;
                    border-radius: 10px;
                    text-decoration: none;
                    color: white;
                    transition: all 0.3s;
                    border-left: 3px solid ${color};
                    cursor: pointer;
                `;
                resultItem.onmouseover = () => {
                    resultItem.style.transform = 'translateY(-3px)';
                    resultItem.style.boxShadow = `0 5px 15px ${color}80`;
                };
                resultItem.onmouseout = () => {
                    resultItem.style.transform = 'translateY(0)';
                    resultItem.style.boxShadow = 'none';
                };
                
                let typeIcon = '';
                if (item.type === 'guide') typeIcon = '📘';
                else if (item.type === 'trending') typeIcon = '📈';
                else if (item.type === 'review') typeIcon = '⭐';
                else if (item.type === 'detail') typeIcon = '🎮';
                else if (item.type === 'forum') typeIcon = '💬';
                else if (item.type === 'home') typeIcon = '🏠';
                else if (item.type === 'price') typeIcon = '💰';
                else if (item.type === 'login' || item.type === 'register' || item.type === 'profile') typeIcon = '👤';
                else typeIcon = '🔗';
                
                resultItem.innerHTML = `
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <span style="font-size: 20px;">${typeIcon}</span>
                        <div>
                            <div style="font-weight: 600; margin-bottom: 3px;">${item.title}</div>
                            <div style="color: #a0a5b1; font-size: 12px; text-transform: capitalize;">${item.type}</div>
                        </div>
                    </div>
                `;
                
                list.appendChild(resultItem);
            });
            
            section.appendChild(sectionTitle);
            section.appendChild(list);
            return section;
        }
        
        const mainSection = createResultSection('Main Pages', main, 'bx-home', '#4a90e2');
        const guidesSection = createResultSection('Game Guides', guides, 'bx-compass', '#4a90e2');
        const trendingSection = createResultSection('Trending Games', trending, 'bx-trending-up', '#4a90e2');
        const reviewsSection = createResultSection('Game Reviews', reviews, 'bx-star', '#4a90e2');
        const detailsSection = createResultSection('Game Details', details, 'bx-detail', '#4a90e2');
        const forumSection = createResultSection('Forum & Discussion', forum, 'bx-message-detail', '#4a90e2');
        
        if (mainSection) resultsContainer.appendChild(mainSection);
        if (guidesSection) resultsContainer.appendChild(guidesSection);
        if (trendingSection) resultsContainer.appendChild(trendingSection);
        if (reviewsSection) resultsContainer.appendChild(reviewsSection);
        if (detailsSection) resultsContainer.appendChild(detailsSection);
        if (forumSection) resultsContainer.appendChild(forumSection);
        
        modalContent.appendChild(resultsContainer);
    } else {
        const suggestions = document.createElement('div');
        suggestions.style.color = '#a0a5b1';
        suggestions.style.lineHeight = '1.8';
        suggestions.innerHTML = `
            <p style="margin-bottom: 15px;">Try searching for:</p>
            <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 8px;">• Game names: Fortnite, Minecraft, GTA VI</li>
                <li style="margin-bottom: 8px;">• Guides: Walkthroughs, tips, strategies</li>
                <li style="margin-bottom: 8px;">• Reviews: Ratings, opinions, analysis</li>
                <li style="margin-bottom: 8px;">• Trending games: Valorant, CS2, Baldur's Gate 3</li>
                <li style="margin-bottom: 8px;">• Pages: Homepage, Forum, Price Tracker</li>
            </ul>
        `;
        modalContent.appendChild(suggestions);
    }
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Initialize search functionality
function initSearch() {
    const searchForm = document.querySelector('.sidebar-search-container form');
    const searchInput = document.getElementById('gameSearch');
    
    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = searchInput.value;
            if (query.trim()) {
                const results = performSearch(query);
                showSearchResults(results, query);
            }
        });
        
        let debounceTimer;
        searchInput.addEventListener('input', () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                const query = searchInput.value;
                if (query.trim().length >= 2) {
                    const results = performSearch(query);
                    showSearchResults(results, query);
                }
            }, 500);
        });
    }
}

// Initialize everything on page load
document.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus();
    initSearch();
});