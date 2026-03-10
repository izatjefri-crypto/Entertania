<?php
// Start session to track searches if needed
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search Results - Entertania</title>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background-color: #14171e;
            color: white;
            margin: 0;
            padding: 0;
        }
        
        .navbar {
            background-color: #001242;
            padding: 15px 0;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
        }
        
        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        .nav-logo a {
            font-size: 28px;
            font-weight: 900;
            color: #e5eeee;
            text-decoration: none;
        }
        
        .search-form {
            display: flex;
            flex: 1;
            max-width: 500px;
            margin: 0 20px;
        }
        
        .search-form input {
            flex: 1;
            padding: 10px 15px;
            background: #14171e;
            border: 1px solid #4a90e2;
            color: white;
            border-radius: 20px 0 0 20px;
            outline: none;
        }
        
        .search-form button {
            background: #4a90e2;
            border: none;
            padding: 10px 20px;
            border-radius: 0 20px 20px 0;
            cursor: pointer;
        }
        
        .search-form button:hover {
            background: #3570b2;
        }
        
        .nav-actions {
            display: flex;
            gap: 15px;
        }
        
        .nav-actions a {
            color: white;
            text-decoration: none;
            padding: 8px 15px;
            border: 1px solid #4a90e2;
            border-radius: 20px;
        }
        
        .page-content {
            max-width: 1200px;
            margin: 100px auto 40px;
            padding: 0 20px;
        }
        
        .search-header {
            margin-bottom: 30px;
        }
        
        .search-header h1 {
            font-size: 32px;
            color: white;
        }
        
        .search-header p {
            color: #a0a5b1;
        }
        
        .results-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
            margin-top: 30px;
        }
        
        .result-card {
            background: #1a1f2b;
            border-radius: 12px;
            padding: 20px;
            transition: transform 0.2s;
        }
        
        .result-card:hover {
            transform: translateY(-5px);
        }
        
        .result-card h3 {
            color: white;
            margin-bottom: 10px;
            font-size: 18px;
        }
        
        .result-card p {
            color: #a0a5b1;
            font-size: 14px;
            margin-bottom: 15px;
        }
        
        .result-link {
            display: inline-block;
            color: #4a90e2;
            text-decoration: none;
            font-weight: 600;
        }
        
        .result-link:hover {
            color: #ffd700;
        }
        
        .no-results {
            text-align: center;
            padding: 50px;
            background: #1a1f2b;
            border-radius: 12px;
        }
        
        .no-results i {
            font-size: 64px;
            color: #4a90e2;
            margin-bottom: 20px;
        }
        
        .no-results h3 {
            font-size: 24px;
            margin-bottom: 10px;
        }
        
        .no-results p {
            color: #a0a5b1;
        }
        
        .suggestions {
            margin-top: 40px;
        }
        
        .suggestions h3 {
            margin-bottom: 20px;
        }
        
        .suggestion-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .suggestion-tag {
            background: #2a3456;
            color: white;
            padding: 8px 20px;
            border-radius: 25px;
            text-decoration: none;
            transition: background 0.2s;
        }
        
        .suggestion-tag:hover {
            background: #4a90e2;
        }
        
        @media (max-width: 768px) {
            .results-grid {
                grid-template-columns: 1fr;
            }
            
            .nav-container {
                flex-direction: column;
                gap: 15px;
            }
            
            .search-form {
                width: 100%;
                max-width: none;
            }
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <a href="Homepage.html">Entertania</a>
            </div>
            
            <!-- Search form (stays on results page too) -->
            <div class="search-form">
                <form action="search.php" method="GET">
                    <input type="text" name="q" placeholder="Search games..." value="<?php echo isset($_GET['q']) ? htmlspecialchars($_GET['q']) : ''; ?>">
                    <button type="submit"><i class='bx bx-search' style="color: white; font-size: 18px;"></i></button>
                </form>
            </div>
            
            <div class="nav-actions">
                <a href="login.html">Sign In</a>
            </div>
        </div>
    </nav>
    
    <div class="page-content">
        <?php
        // Get search query
        $search = isset($_GET['q']) ? trim($_GET['q']) : '';
        
        if (!empty($search)) {
            echo '<div class="search-header">';
            echo '<h1>Search Results for "' . htmlspecialchars($search) . '"</h1>';
            echo '</div>';
            
            // Your website content database (all pages and games)
            $allContent = [
                // Games
                ['title' => 'Resident Evil Requiem', 'description' => 'Survival horror game with FBI analyst Grace Ashcroft and Leon S. Kennedy', 'url' => 'game detail.html', 'category' => 'Game', 'keywords' => 'resident evil requiem horror leon grace'],
                ['title' => 'Crimson Dessert', 'description' => 'Action-adventure RPG set in the vast world of Pywel', 'url' => 'game detail2.html', 'category' => 'Game', 'keywords' => 'crimson dessert pywel rpg'],
                ['title' => 'Marvel Wolverine', 'description' => 'Upcoming superhero game exclusive to PS5', 'url' => 'game detail3.html', 'category' => 'Game', 'keywords' => 'marvel wolverine ps5 superhero'],
                ['title' => 'GTA 6', 'description' => 'Grand Theft Auto VI - Coming November 19, 2026', 'url' => 'game detail4.html', 'category' => 'Game', 'keywords' => 'gta 6 grand theft auto vice city'],
                
                // Reviews
                ['title' => 'Resident Evil Requiem Review', 'description' => 'In-depth review of the latest survival horror game', 'url' => 'game-reviews.html', 'category' => 'Review', 'keywords' => 'resident evil requiem review horror'],
                ['title' => 'Styx: Blades of Greed Review', 'description' => 'Stealth gameplay review', 'url' => 'game-reviews.html', 'category' => 'Review', 'keywords' => 'styx blades of greed review stealth'],
                ['title' => 'God of War Sons of Sparta Review', 'description' => 'Review of the classic God of War title', 'url' => 'game-reviews.html', 'category' => 'Review', 'keywords' => 'god of war sons of sparta review kratos'],
                
                // Price Tracker
                ['title' => 'Baldur\'s Gate 3 Price', 'description' => 'Compare prices for Baldur\'s Gate 3 across regions', 'url' => 'price-tracker.html', 'category' => 'Price', 'keywords' => 'baldurs gate 3 price cost cheap'],
                ['title' => 'Cyberpunk 2077 Price', 'description' => 'Best deals for Cyberpunk 2077', 'url' => 'price-tracker.html', 'category' => 'Price', 'keywords' => 'cyberpunk 2077 price sale discount'],
                ['title' => 'Elden Ring Price', 'description' => 'Elden Ring price comparison', 'url' => 'price-tracker.html', 'category' => 'Price', 'keywords' => 'elden ring price fromsoftware'],
                
                // Guides
                ['title' => 'Resident Evil Requiem Guide', 'description' => 'Complete walkthrough and tips', 'url' => 'guides.html', 'category' => 'Guide', 'keywords' => 'resident evil requiem guide walkthrough tips'],
                ['title' => 'Minecraft Guide', 'description' => 'Beginner to expert Minecraft guide', 'url' => 'guides.html', 'category' => 'Guide', 'keywords' => 'minecraft guide crafting building'],
                ['title' => 'Valorant Guide', 'description' => 'Agent guides and strategies', 'url' => 'guides.html', 'category' => 'Guide', 'keywords' => 'valorant guide agents strategies'],
                
                // Forum
                ['title' => 'Elden Ring Discussion', 'description' => 'Community discussions about Elden Ring', 'url' => 'Forum-discussion.html', 'category' => 'Forum', 'keywords' => 'elden ring discussion forum help'],
                ['title' => 'Malenia Boss Help', 'description' => 'Tips for beating Malenia', 'url' => 'thread-detail.html?id=1', 'category' => 'Thread', 'keywords' => 'malenia boss help waterfowl dance'],
                
                // Trending Games
                ['title' => 'Fortnite', 'description' => 'Popular battle royale game', 'url' => 'Homepage.html', 'category' => 'Trending', 'keywords' => 'fortnite battle royale epic'],
                ['title' => 'League of Legends', 'description' => 'MOBA game', 'url' => 'Homepage.html', 'category' => 'Trending', 'keywords' => 'league of legends lol moba'],
                ['title' => 'Minecraft', 'description' => 'Sandbox survival game', 'url' => 'Homepage.html', 'category' => 'Trending', 'keywords' => 'minecraft crafting survival'],
                ['title' => 'Counter Strike 2', 'description' => 'Tactical FPS', 'url' => 'Homepage.html', 'category' => 'Trending', 'keywords' => 'counter strike 2 cs2 fps'],
                ['title' => 'Valorant', 'description' => 'Tactical shooter', 'url' => 'Homepage.html', 'category' => 'Trending', 'keywords' => 'valorant riot fps'],
                ['title' => 'Helldivers 2', 'description' => 'Co-op shooter', 'url' => 'Homepage.html', 'category' => 'Trending', 'keywords' => 'helldivers 2 co-op shooter'],
            ];
            
            $results = [];
            $searchLower = strtolower($search);
            
            // Search through all content
            foreach ($allContent as $item) {
                // Search in title
                if (strpos(strtolower($item['title']), $searchLower) !== false) {
                    $results[] = $item;
                }
                // Search in description
                elseif (strpos(strtolower($item['description']), $searchLower) !== false) {
                    $results[] = $item;
                }
                // Search in keywords
                elseif (isset($item['keywords']) && strpos(strtolower($item['keywords']), $searchLower) !== false) {
                    $results[] = $item;
                }
            }
            
            // Display results
            if (count($results) > 0) {
                echo '<div class="results-grid">';
                foreach ($results as $result) {
                    echo '<div class="result-card">';
                    echo '<h3>' . htmlspecialchars($result['title']) . '</h3>';
                    echo '<p>' . htmlspecialchars($result['description']) . '</p>';
                    echo '<p style="color: #4a90e2; font-size: 12px; margin-bottom: 10px;">' . $result['category'] . '</p>';
                    echo '<a href="' . $result['url'] . '" class="result-link">View →</a>';
                    echo '</div>';
                }
                echo '</div>';
            } else {
                echo '<div class="no-results">';
                echo '<i class="bx bx-search-alt"></i>';
                echo '<h3>No results found for "' . htmlspecialchars($search) . '"</h3>';
                echo '<p>Try different keywords or browse our popular games</p>';
                echo '</div>';
            }
        } else {
            // No search query - show popular games
            echo '<div class="search-header">';
            echo '<h1>Search Games</h1>';
            echo '<p>Type something in the search box above to find games, reviews, guides and more</p>';
            echo '</div>';
            
            echo '<div class="suggestions">';
            echo '<h3>Popular Searches</h3>';
            echo '<div class="suggestion-tags">';
            $popular = ['Resident Evil', 'Elden Ring', 'GTA 6', 'Minecraft', 'Fortnite', 'Cyberpunk', 'Baldur\'s Gate', 'God of War'];
            foreach ($popular as $term) {
                echo '<a href="search.php?q=' . urlencode($term) . '" class="suggestion-tag">' . $term . '</a>';
            }
            echo '</div>';
            echo '</div>';
        }
        ?>
    </div>
</body>
</html>