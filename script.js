// --- CONFIGURATION & DATA ---

// The 6 categories
// Map IDs to the keys in the new COUNTRIES_DATA ranks object
const CATEGORIES = [
    { id: 'capitalPop', icon: '🏙️', label: 'Pop. Capitale' },
    { id: 'smallArea', icon: '📉', label: 'Superficie' },
    { id: 'fifa', icon: '⚽', label: 'FIFA' },
    { id: 'military', icon: '🪖', label: 'Armée' },
    { id: 'rice', icon: '🍚', label: 'Riz' },
    { id: 'distPH', icon: '✈️', label: 'Dist. Manille' },
];

/**
 * Dataset is now loaded from countries.js
 * Access global variable: COUNTRIES_DATA
 */

// Shuffle helper
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


// --- STATE MANAGEMENT ---

const state = {
    turn: 1,
    maxTurns: 6,
    score: 0,
    deck: [], // Shuffled countries
    usedCategories: [], // Array of category IDs
    currentCountry: null,
    isTransitioning: false
};

// --- DOM ELEMENTS ---

const screens = {
    home: document.getElementById('screen-home'),
    game: document.getElementById('screen-game'),
    result: document.getElementById('screen-result')
};

const ui = {
    leaderboardList: document.getElementById('leaderboard-list'),
    turnIndicator: document.getElementById('turn-indicator'),
    scoreIndicator: document.getElementById('score-indicator'),
    countryFlag: document.getElementById('country-flag'),
    countryName: document.getElementById('country-name'),
    categoriesGrid: document.getElementById('categories-grid'),
    feedbackOverlay: document.getElementById('feedback-overlay'),
    feedbackRank: document.getElementById('feedback-rank'),
    feedbackText: document.getElementById('feedback-text'),
    philippinesBadge: document.getElementById('philippines-badge'),
    finalScore: document.getElementById('final-score'),
    resultMessage: document.getElementById('result-message'),
    btnStart: document.getElementById('btn-start'),
    btnReplay: document.getElementById('btn-replay')
};

// --- CORE FUNCTIONS ---

function init() {
    renderLeaderboard();

    ui.btnStart.addEventListener('click', startGame);
    ui.btnReplay.addEventListener('click', () => {
        showScreen('home');
    });
}

function showScreen(screenName) {
    Object.values(screens).forEach(el => el.classList.add('hidden'));
    Object.values(screens).forEach(el => el.classList.remove('flex'));

    const target = screens[screenName];
    target.classList.remove('hidden');
    target.classList.add('flex');

    if (screenName === 'home') renderLeaderboard();
}

function startGame() {
    // Reset State
    state.turn = 1;
    state.score = 0;
    state.usedCategories = [];
    state.isTransitioning = false;

    // Prepare Deck (Shuffle and pick first 6)
    // Create a deep copy if needed, but shallow copy of array is usually enough if we don't mutate objects
    state.deck = shuffleArray([...COUNTRIES_DATA]).slice(0, 6);

    updateHeader();
    renderTurn();
    showScreen('game');

    // Check initial confetti just in case first country is PH (edge case)
    checkPhilippines(state.deck[0]);
}

function updateHeader() {
    ui.turnIndicator.textContent = `${state.turn} / ${state.maxTurns}`;
    ui.scoreIndicator.textContent = state.score;
}

function renderTurn() {
    // Get current country
    // Array index is turn - 1
    const idx = state.turn - 1;
    if (idx >= state.deck.length) return endGame();

    state.currentCountry = state.deck[idx];

    // Animate content change
    ui.countryFlag.classList.remove('pop-in');
    void ui.countryFlag.offsetWidth; // trigger reflow
    ui.countryFlag.classList.add('pop-in');

    // Use 'emoji' property from new dataset instead of 'flag'
    ui.countryFlag.textContent = state.currentCountry.emoji;
    ui.countryName.textContent = state.currentCountry.name;

    checkPhilippines(state.currentCountry);

    renderCategories();
}

function renderCategories() {
    ui.categoriesGrid.innerHTML = '';

    CATEGORIES.forEach(cat => {
        const btn = document.createElement('button');
        const isUsed = state.usedCategories.includes(cat.id);

        btn.className = `category-btn ${isUsed ? 'disabled' : ''}`;
        btn.disabled = isUsed || state.isTransitioning;

        btn.innerHTML = `
            <span class="emoji-icon">${cat.icon}</span>
            <span class="label-text">${cat.label}</span>
        `;

        if (!isUsed) {
            btn.onclick = () => handleCategorySelection(cat.id);
        }

        ui.categoriesGrid.appendChild(btn);
    });
}

function handleCategorySelection(catId) {
    if (state.isTransitioning) return;
    state.isTransitioning = true;

    const rank = state.currentCountry.ranks[catId];

    // Update State
    state.score += rank;
    state.usedCategories.push(catId);

    // UI Updates
    updateHeader();
    showFeedback(rank);

    // Vibration if supported
    if (navigator.vibrate && rank < 10) {
        navigator.vibrate(50);
    }
}

function showFeedback(rank) {
    ui.feedbackRank.textContent = `#${rank}`;

    let text = "Pas mal";
    let color = "text-white";

    if (rank === 1) { text = "PARFAIT !"; color = "text-yellow-400"; }
    else if (rank <= 5) { text = "Excellent"; color = "text-green-400"; }
    else if (rank <= 20) { text = "Bien joué"; color = "text-blue-300"; }
    else if (rank <= 50) { text = "Moyen..."; color = "text-orange-300"; }
    else { text = "Aïe !"; color = "text-red-400"; }

    ui.feedbackRank.className = `block text-4xl font-bold ${color}`;
    ui.feedbackText.textContent = text;

    // Show Overlay
    ui.feedbackOverlay.classList.remove('opacity-0', 'pointer-events-none');
    ui.feedbackOverlay.firstElementChild.classList.remove('scale-90');
    ui.feedbackOverlay.firstElementChild.classList.add('scale-100');

    // Wait then Next Turn
    setTimeout(() => {
        // Hide Overlay
        ui.feedbackOverlay.classList.add('opacity-0', 'pointer-events-none');
        ui.feedbackOverlay.firstElementChild.classList.add('scale-90');
        ui.feedbackOverlay.firstElementChild.classList.remove('scale-100');

        nextTurn();
    }, 1500);
}

function nextTurn() {
    state.turn++;
    state.isTransitioning = false;

    if (state.turn > state.maxTurns) {
        endGame();
    } else {
        renderTurn();
    }
}

function endGame() {
    saveScore(state.score);

    ui.finalScore.textContent = state.score;
    ui.resultMessage.textContent = getFeedbackMessage(state.score);

    showScreen('result');
}

// --- HELPERS & LOGIC ---

function checkPhilippines(country) {
    // Hide badge initially
    ui.philippinesBadge.classList.add('hidden');

    if (country.name === 'Philippines') {
        const phrases = ["LESGO !!!!!!!", "LA MAISON !!!!", "MABUHAY ZAC !", "PINOY VIBES 🇵🇭"];
        const phrase = phrases[Math.floor(Math.random() * phrases.length)];

        // Show Badge
        ui.philippinesBadge.querySelector('span').textContent = phrase;
        ui.philippinesBadge.classList.remove('hidden');

        // INTENSE Confetti
        var duration = 3 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 45, spread: 360, ticks: 100, zIndex: 0 }; // Increased velocity & ticks

        var random = function (min, max) {
            return Math.random() * (max - min) + min;
        };

        var interval = setInterval(function () {
            var timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            var particleCount = 100 * (timeLeft / duration); // Doubled particles

            // Confetti from multiple angles
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: random(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: random(0.7, 0.9), y: Math.random() - 0.2 } }));
            // Add center explosion
            if (Math.random() > 0.7) {
                confetti(Object.assign({}, defaults, { particleCount: particleCount / 2, origin: { x: 0.5, y: 0.5 }, startVelocity: 20 }));
            }
        }, 200); // Faster interval
    }
}

function getFeedbackMessage(score) {
    if (score < 20) return "C'est un score de champion du monde ! 🌍🏆";
    if (score < 70) return "Zac, t'es un satellite GPS humain ! Manila est fière de toi ! 🇵🇭";
    if (score < 100) return "Pas mal, mais Zac ferait sûrement mieux. 😉";
    if (score < 200) return "Oups... Il va falloir réviser tes capitales... 📚";
    if (score < 300) return "C'est honnête, mais t'as confondu Manille avec Madrid sur la fin, non ? ✈️"
    return "Cata ! Tu as confondu la Suisse et le Swaziland ? 🫠";
}

// --- PERSISTENCE ---

function saveScore(score) {
    const history = JSON.parse(localStorage.getItem('pannaudGraphie_scores') || '[]');
    history.push({
        score: score,
        date: new Date().toISOString()
    });

    // Sort by score ascending (lower is better)
    history.sort((a, b) => a.score - b.score);

    // Keep top 10
    const top10 = history.slice(0, 10);

    localStorage.setItem('pannaudGraphie_scores', JSON.stringify(top10));
}

function renderLeaderboard() {
    const history = JSON.parse(localStorage.getItem('pannaudGraphie_scores') || '[]');

    if (history.length === 0) {
        ui.leaderboardList.innerHTML = '<p class="text-center text-gray-400 text-sm italic py-4">Aucune partie jouée</p>';
        return;
    }

    ui.leaderboardList.innerHTML = history.slice(0, 5).map((entry, index) => `
        <div class="flex justify-between items-center border-b border-gray-100 last:border-0 pb-2 last:pb-0">
            <div class="flex items-center">
                <span class="w-6 h-6 rounded-full bg-gray-200 text-gray-600 text-xs font-bold flex items-center justify-center mr-3">
                    ${index + 1}
                </span>
                <span class="text-sm font-medium text-gray-600">
                    ${new Date(entry.date).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' })}
                </span>
            </div>
            <span class="font-bold text-gray-800">${entry.score} pts</span>
        </div>
    `).join('');
}

// --- INIT ---
init();
