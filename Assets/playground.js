// Hoosier AI Automations - Haas Playground Controller
let userName = '';
let userRole = '';
let userIntent = '';
let userAge = 18;
let userTier = 3; // Tier 1: 5-8, Tier 2: 9-12, Tier 3: 13-17, 18+ is Executive

// Academy Modules Tracker
let completedModules = { 1: false, 2: false, 3: false, 4: false, 5: false };
let activeModule = 1;

// Active Bridge Game logic sequence placements
let bridgeNodesPlaced = [];
const correctBridgeSequence = ["Trigger", "Filter", "Integration", "Action"];

// Onboarding page load populator
document.addEventListener('DOMContentLoaded', () => {
    // Register Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker Registered scope:', reg.scope))
            .catch(err => console.error('Service Worker fail:', err));
    }

    // Populate Age Dropdown Selector dynamically (5 to 80 Years)
    const ageSelect = document.getElementById('user-age-select');
    if (ageSelect) {
        ageSelect.innerHTML = '<option value="" disabled selected>Choose Your Age</option>';
        for (let i = 5; i <= 80; i++) {
            const opt = document.createElement('option');
            opt.value = i;
            if (i >= 5 && i <= 8) {
                opt.textContent = `${i} Years (Tier 1: Visual Association)`;
            } else if (i >= 9 && i <= 12) {
                opt.textContent = `${i} Years (Tier 2: Foundational Logic)`;
            } else if (i >= 13 && i <= 17) {
                opt.textContent = `${i} Years (Tier 3: Technical Architecture)`;
            } else {
                opt.textContent = `${i} Years (Professional Studio)`;
            }
            if (i === 18) opt.selected = true;
            ageSelect.appendChild(opt);
        }
    }

    // Run original default calculatives
    calculateROI();
});

// =========================================================================
// ==================== ONBOARDING FLOW ACTIONS ============================
// =========================================================================

function selectRole(role) {
    userRole = role;
    document.querySelectorAll('.role-card').forEach(card => {
        card.classList.remove('border-indigo-600', 'bg-indigo-50/10');
        card.classList.add('border-stone-200/60');
    });
    
    const card = event.currentTarget;
    card.classList.remove('border-stone-200/60');
    card.classList.add('border-indigo-600', 'bg-indigo-50/10');

    const feedbackBox = document.getElementById('role-feedback-box');
    const feedbackText = document.getElementById('role-feedback-text');
    feedbackBox.classList.remove('hidden');

    let text = "";
    switch (role) {
        case "Founder/Owner":
            text = "🚀 Dynamic choice! As an owner, we will tailor your dashboard with payback metrics, visual flowcharts, and custom problem translators.";
            break;
        case "Developer":
            text = "💻 Welcome, engineer! Discover live visual pipeline canvases, webhook setups, and raw API layouts.";
            break;
        case "Innovator":
            text = "🧠 Excellent! Learn how neural architectures, document parsers, and custom integrations streamline businesses.";
            break;
        case "Marketer":
            text = "📣 Great focus! Focus on instant CRM sync triggers, Twilio automated texting, and low-stock alerts.";
            break;
        case "Student":
            text = "🎓 Super! Your playground will load friendly interactive modules designed to explain technology simply.";
            break;
        case "Start-Up":
            text = "⚡ Speed is key! Explore automated blueprints that handle manual administration with 0% error margins.";
            break;
    }
    feedbackText.textContent = text;

    const btn = document.getElementById('btn-continue-step-1');
    btn.removeAttribute('disabled');
    btn.classList.remove('bg-stone-200', 'text-stone-400', 'cursor-not-allowed');
    btn.classList.add('bg-indigo-600', 'text-white', 'cursor-pointer', 'hover:bg-indigo-700', 'shadow');
}

function selectIntent(intent) {
    userIntent = intent;
    document.querySelectorAll('.intent-card').forEach(card => {
        card.classList.remove('border-indigo-600', 'bg-indigo-50/10');
        card.classList.add('border-stone-200/60');
    });
    
    const card = event.currentTarget;
    card.classList.remove('border-stone-200/60');
    card.classList.add('border-indigo-600', 'bg-indigo-50/10');

    const feedbackBox = document.getElementById('intent-feedback-box');
    const feedbackText = document.getElementById('intent-feedback-text');
    feedbackBox.classList.remove('hidden');

    let text = "";
    switch (intent) {
        case "Playground":
            text = "🎠 Perfect! Enter our Haas Live Playground to simulate logic sequences and stress test architectures.";
            break;
        case "Workflows":
            text = "🔗 Technical mapping! Let's translate real-world business bottlenecks into streamlined, automated pathways.";
            break;
        case "Fun":
            text = "🎪 Creativity first! Complete courses, feed Haasy the Male Bearded Dragon, and earn credentials.";
            break;
        case "NotSure":
            text = "🧭 No worries! We will load friendly, pre-configured templates to guide you step-by-step.";
            break;
    }
    feedbackText.textContent = text;

    const btn = document.getElementById('btn-continue-step-2');
    btn.removeAttribute('disabled');
    btn.classList.remove('bg-stone-200', 'text-stone-400', 'cursor-not-allowed');
    btn.classList.add('bg-indigo-600', 'text-white', 'cursor-pointer', 'hover:bg-indigo-700', 'shadow');
}

function nextStep(stepNumber) {
    document.getElementById('onboarding-step-1').classList.add('hidden');
    document.getElementById('onboarding-step-2').classList.add('hidden');
    document.getElementById('onboarding-step-3').classList.add('hidden');

    document.getElementById(`onboarding-step-${stepNumber}`).classList.remove('hidden');

    const fill = document.getElementById('progress-bar-fill');
    const counter = document.getElementById('step-counter');

    if (stepNumber === 1) {
        fill.style.width = "33.33%";
        counter.textContent = "Step 1 of 3";
    } else if (stepNumber === 2) {
        fill.style.width = "66.66%";
        counter.textContent = "Step 2 of 3";
    } else {
        fill.style.width = "100%";
        counter.textContent = "Step 3 of 3";
    }
}

function completeOnboarding() {
    const nameInput = document.getElementById('user-name-input');
    const ageSelect = document.getElementById('user-age-select');

    if (!nameInput.value.trim()) {
        showToast("⚠️ Please enter your name to authenticate!", "warning");
        nameInput.focus();
        return;
    }

    userName = nameInput.value.trim();
    userAge = parseInt(ageSelect.value) || 18;

    // Transition off wizard
    document.getElementById('onboarding-stage').classList.add('hidden');
    document.getElementById('playground-dashboard').classList.remove('hidden');

    if (userAge >= 18) {
        document.getElementById('professional-dashboard').classList.remove('hidden');
        showToast(`💼 Welcome to Executive Studio, ${userName}!`, "success");
        initProfessionalConsole();
    } else {
        document.getElementById('young-innovator-dashboard').classList.remove('hidden');
        
        // Define Active Age Tier
        if (userAge >= 5 && userAge <= 8) {
            userTier = 1;
        } else if (userAge >= 9 && userAge <= 12) {
            userTier = 2;
        } else {
            userTier = 3;
        }

        showToast(`🎈 Welcome, Young Innovator ${userName}! Loading Tier ${userTier} mode.`, "success");
        initYouthPlayground();
    }
}


// =========================================================================
// ==================== AGE-SCALE CONTROLLER (TIERS 1-3) ===================
// =========================================================================

// Visual text lessons matching age-group vocabulary
const tierLessons = {
    1: {
        badge: "Tier 1: Visual association (Ages 5-8)",
        welcomeTitle: "🎨 Haas Kid-Friendly Visual Creator Studio",
        welcomeDesc: "Welcome to Haas Youth Playground! Today we are building a 🐶 Pet Walking Business. Drag large shapes, connect bright colors, and teach Haasy new tricks!",
        modules: [
            { title: "1. Start Button", text: "Place a big blue bubble shape. This acts as our <u><b>Start</b></u> node to signal when a client requests a pet walk! Every pipeline begins here." },
            { title: "2. Color Match", text: "Match color blocks together. Complete the <u><b>Logic</b></u> of linking the request form block directly to our digital dog walking list!" },
            { title: "3. Choose Tool", text: "Select a custom digital <u><b>Tool</b></u>. We will choose a notification bell tool that rings every time a new client submits a form!" },
            { title: "4. Store Picture", text: "Let's upload a cute pet <u><b>Picture</b></u> onto your home-screen app! This visual makes your store look cozy and inviting." },
            { title: "5. Ad Poster", text: "Create your own <u><b>Picture</b></u> poster. Pick a custom background, type a bubbly business name, and play retro bubble pop sounds!" }
        ],
        hints: [
            "Match the red shapes! Click the blue <u><b>Start</b></u> button.",
            "Color connections complete the active <u><b>Logic</b></u> path.",
            "The alarm bell is a helpful automated notification <u><b>Tool</b></u>.",
            "Check that your favorite cute puppy <u><b>Picture</b></u> is uploaded correctly."
        ],
        examQuestions: [
            {
                q: "1. Which block is used to begin your automation?",
                a: ["A red stop light", "The blue <u><b>Start</b></u> button", "A green plant", "A crayon"],
                correct: 1
            },
            {
                q: "2. What describes drawing a line to connect two matching shapes?",
                a: ["Cutting paper", "Linking automation <u><b>Logic</b></u> together", "Spilling juice", "Sleeping"],
                correct: 1
            },
            {
                q: "3. What is a digital application helper called?",
                a: ["A cardboard box", "An automated software <u><b>Tool</b></u>", "A tree leaf", "A pillow"],
                correct: 1
            },
            {
                q: "4. What is a visual logo icon?",
                a: ["A physical keyboard", "An app <u><b>Picture</b></u>", "A sound effect", "A charging wire"],
                correct: 1
            }
        ]
    },
    2: {
        badge: "Tier 2: Foundational Logic (Ages 9-12)",
        welcomeTitle: "🧩 Haas Block-Based Logic Sandbox",
        welcomeDesc: "Welcome to Haas Youth Playground! Build a 🐶 Neighborhood Pet Walking Service using foundational workflow connectors, block connections, and automatic triggers.",
        modules: [
            { title: "1. Trigger Node", text: "A <u><b>Trigger</b></u> is the event that starts our automation. We program our system to listen for a client scheduling a pet walk on our website." },
            { title: "2. Build Workflow", text: "Design your sequential <u><b>Workflow</b></u>. Create the automated link that routes pet details to active calendars with 0% error margin." },
            { title: "3. Set Action", text: "An <u><b>Action</b></u> is what our automation performs automatically. Let's send an SMS text confirmation message to the client!" },
            { title: "4. Logic Node", text: "Every circle in our layout is a <u><b>Node</b></u>. Connect the trigger <u><b>Node</b></u> to the SMS action to finalize your pipeline structure." },
            { title: "5. Ad Studio", text: "Mix custom 8-bit chimes and wallpapers to compile your final business ad! Check off this step to earn your certificate." }
        ],
        hints: [
            "Every automation starts when a <u><b>Trigger</b></u> event is detected.",
            "Connect nodes sequentially to establish your active <u><b>Workflow</b></u>.",
            "The SMS message is an automated <u><b>Action</b></u> completed in real-time.",
            "Make sure your Trigger and Action blocks are connected inside the <u><b>Node</b></u>."
        ],
        examQuestions: [
            {
                q: "1. What is the event that starts an automated workflow?",
                a: ["A physical keyboard", "A <u><b>Trigger</b></u>", "A battery pack", "A mouse click"],
                correct: 1
            },
            {
                q: "2. What is a series of automated steps called?",
                a: ["A textbook", "A <u><b>Workflow</b></u>", "A website domain", "An envelope"],
                correct: 1
            },
            {
                q: "3. What is the automated execution performed after a trigger?",
                a: ["A computer error", "An <u><b>Action</b></u>", "A manual spreadsheet", "A printer check"],
                correct: 1
            },
            {
                q: "4. What is each individual block inside a flowchart called?",
                a: ["A browser tab", "A <u><b>Node</b></u>", "A cable cord", "A text document"],
                correct: 1
            }
        ]
    },
    3: {
        badge: "Tier 3: Technical Architecture (Ages 13-17)",
        welcomeTitle: "💻 Haas Advanced Architectural Workspace",
        welcomeDesc: "Welcome to Haas Youth Playground! Architect your own 🐶 Pet Walking Business using high-fidelity APIs, home-screen PWAs, responsive layouts, and technical credentials.",
        modules: [
            { title: "1. Setup API", text: "An <u><b>API</b></u> allows programs to talk. Let's configure an <u><b>API</b></u> connector that parses incoming form submissions from our dog walking store." },
            { title: "2. Build Integration", text: "Create an active database <u><b>Integration</b></u>. Haas dynamically parses client form data and schedules entries on active digital calendars." },
            { title: "3. Design UI", text: "Build a beautiful <u><b>User Interface</b></u> (UI). Type prompt instructions to instantly generate styled limestone banners and buttons." },
            { title: "4. Compile PWA", text: "Package your storefront into a <u><b>PWA</b></u> (Progressive Web App). Users can install your app onto their phone's home screen!" },
            { title: "5. Launch Ad", text: "Write an ad script, mix custom synth audio frequencies, and click export to compile a 15-second business advertisement!" }
        ],
        hints: [
            "We parse and route customer request data using a custom <u><b>API</b></u> connector.",
            "Create a database <u><b>Integration</b></u> to schedule walks automatically.",
            "Type styled prompt coordinates to customize your storefront <u><b>User Interface</b></u>.",
            "Package files into an offline-ready home-screen <u><b>PWA</b></u> application."
        ],
        examQuestions: [
            {
                q: "1. What does an API allow applications to perform?",
                a: ["Record background sound", "Communicate and share data between different software programs automatically", "Format physical hard-disks", "Draw geometric shapes"],
                correct: 1
            },
            {
                q: "2. What is connecting your app to a digital database calendar called?",
                a: ["De-installing", "Setting up a software <u><b>Integration</b></u>", "Checking hard drive metrics", "Restarting"],
                correct: 1
            },
            {
                q: "3. What is an offline-ready home-screen app called?",
                a: ["A local spreadsheet", "A <u><b>PWA</b></u> (Progressive Web App)", "An email draft", "An operating system"],
                correct: 1
            },
            {
                q: "4. What describes the visual buttons and layout on a web page?",
                a: ["An API payload", "The <u><b>User Interface</b></u> (UI)", "A database query", "A webhook header"],
                correct: 1
            }
        ]
    }
};

function initYouthPlayground() {
    // Apply dynamic text scaling across titles and headers
    const tier = tierLessons[userTier];
    
    document.getElementById('kids-welcome-title').textContent = tier.welcomeTitle;
    document.getElementById('kids-welcome-desc').innerHTML = tier.welcomeDesc;
    document.getElementById('kids-tier-badge').textContent = tier.badge;

    // Load scaled module menu card titles
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`mod-title-${i}`).textContent = tier.modules[i - 1].title;
    }

    // Load first workspace instruction
    loadActiveModuleWorkspace(1);

    // Initialize Broken Bridge Game choices based on age difficulty
    initBrokenBridgeGame();
}

// Interactive 5-Module Progress-Tracked Builder
function loadActiveModuleWorkspace(modNum) {
    activeModule = modNum;
    const tier = tierLessons[userTier];
    const moduleData = tier.modules[modNum - 1];

    const container = document.getElementById('kids-active-workspace');
    container.innerHTML = "";

    // Header Title
    const title = document.createElement('h4');
    title.className = "font-black text-slate-800 uppercase text-xs mb-2 border-b border-stone-200 pb-1";
    title.textContent = moduleData.title;
    container.appendChild(title);

    // Instruction Text with bolded & underlined vocabulary
    const desc = document.createElement('p');
    desc.className = "text-xs text-slate-600 leading-relaxed font-semibold text-left mb-4";
    desc.innerHTML = moduleData.text;
    container.appendChild(desc);

    // Dynamic, engaging interactive widget based on current Module & Tier
    const interactiveArea = document.createElement('div');
    interactiveArea.className = "bg-white border-2 border-black rounded-xl p-4 flex flex-col items-center justify-center gap-3 shadow-inner";

    if (modNum === 1) {
        // Module 1: Workflow setup / Start button
        if (userTier === 1) {
            interactiveArea.innerHTML = `
                <span class="text-xs font-black uppercase text-slate-400">Drag blue Start block here</span>
                <button onclick="simulateModuleInteraction(1)" class="btn-lego bg-sky-400 text-white font-extrabold text-xs px-6 py-2.5 animate-bounce">
                    <u><b>Start</b></u> Pipeline 🐶
                </button>
            `;
        } else {
            interactiveArea.innerHTML = `
                <span class="text-xs font-black text-slate-400">Trigger Logic Check: If Client schedules Walk ➡️</span>
                <button onclick="simulateModuleInteraction(1)" class="btn-lego bg-indigo-600 text-white font-black text-xs px-6 py-2.5">
                    Trigger Workflow Logic Setup
                </button>
            `;
        }
    } else if (modNum === 2) {
        // Module 2: Software Integration / API calendar
        if (userTier === 1) {
            interactiveArea.innerHTML = `
                <span class="text-xs font-black text-slate-400">Connect the color shapes!</span>
                <div class="flex gap-4 items-center">
                    <div class="w-10 h-10 bg-indigo-600 rounded-full border-2 border-black"></div>
                    <div class="text-lg font-black text-slate-400">===</div>
                    <button onclick="simulateModuleInteraction(2)" class="w-10 h-10 bg-indigo-600 hover:scale-110 transition rounded-full border-2 border-black animate-pulse"></button>
                </div>
            `;
        } else {
            interactiveArea.innerHTML = `
                <span class="text-xs font-black text-slate-400 text-center">Set up calendar integration API keys:</span>
                <div class="flex gap-2 w-full max-w-xs">
                    <input type="text" id="api-key-input" placeholder="haas_api_live_keys_5419..." class="border-2 border-black rounded px-3 py-1 text-[11px] font-mono flex-1">
                    <button onclick="simulateModuleInteraction(2)" class="btn-lego bg-indigo-600 text-white text-xs px-4 py-1.5">Connect API</button>
                </div>
            `;
        }
    } else if (modNum === 3) {
        // Module 3: Storefront User Interface (Prompt generator)
        interactiveArea.innerHTML = `
            <span class="text-xs font-black text-slate-400">Type a design prompt for your storefront:</span>
            <div class="flex flex-col gap-2 w-full max-w-sm text-left">
                <input type="text" id="ui-prompt-input" value="A limestone-styled pet shop with bouncy indigo borders and friendly dog illustrations" class="border-2 border-black rounded px-3 py-2 text-xs font-semibold">
                <button onclick="simulateModuleInteraction(3)" class="btn-lego bg-pink-300 text-black text-xs py-2">Generate User Interface (UI)</button>
            </div>
        `;
    } else if (modNum === 4) {
        // Module 4: Progressive Web App / Pack PWA
        interactiveArea.innerHTML = `
            <span class="text-xs font-black text-slate-400">Select home screen shortcut icon:</span>
            <div class="flex gap-4">
                <button onclick="simulateModuleInteraction(4)" class="w-12 h-12 bg-indigo-50 border-4 border-black hover:bg-indigo-100 rounded-xl text-xl flex items-center justify-center">🐶</button>
                <button onclick="simulateModuleInteraction(4)" class="w-12 h-12 bg-indigo-50 border-4 border-black hover:bg-indigo-100 rounded-xl text-xl flex items-center justify-center">🦴</button>
                <button onclick="simulateModuleInteraction(4)" class="w-12 h-12 bg-indigo-50 border-4 border-black hover:bg-indigo-100 rounded-xl text-xl flex items-center justify-center">🐾</button>
            </div>
            <span class="text-[9px] font-extrabold text-slate-400">Click icon to pack PWA</span>
        `;
    } else {
        // Module 5: Creator Studio Launch / Export ad
        interactiveArea.innerHTML = `
            <span class="text-xs font-black text-slate-400">Ad Creator Script Writer & Music Sync</span>
            <div class="flex flex-col gap-2 w-full max-w-sm">
                <textarea id="ad-script-textarea" class="border-2 border-black rounded p-2 text-xs font-semibold h-16 resize-none">The best dog walking service in Bedford, Indiana! Reliable, friendly, and 100% automated.</textarea>
                <div class="flex gap-2">
                    <button onclick="playSFX('sparkle')" class="w-1/2 btn-lego bg-pink-100 text-[10px] py-1.5">🎵 Mix Audio</button>
                    <button onclick="simulateModuleInteraction(5)" class="w-1/2 btn-lego bg-emerald-300 text-[10px] py-1.5">📤 Export ad Track</button>
                </div>
            </div>
        `;
    }

    container.appendChild(interactiveArea);
}

function simulateModuleInteraction(modNum) {
    if (modNum === 2 && userTier > 1) {
        const val = document.getElementById('api-key-input').value.trim();
        if (!val) {
            showToast("⚠️ Please enter a mock API coordinate key!", "warning");
            return;
        }
    }

    playSFX('correct');
    showToast(`🌟 Successfully completed Module ${modNum}!`, "success");

    // Check off module inside Checklist
    const card = document.getElementById(`course-card-${modNum}`);
    const badge = document.getElementById(`course-status-${modNum}`);
    
    card.classList.remove('bg-white');
    card.classList.add('bg-emerald-100', 'border-emerald-500');
    badge.textContent = "Completed! ✅";
    badge.className = "text-[9px] font-black uppercase text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full inline-block";

    completedModules[modNum] = true;
    updatePixelPetStats();

    // Auto-advance or unlock exam
    const allDone = Object.values(completedModules).every(v => v === true);
    if (allDone) {
        const exam = document.getElementById('exam-card');
        exam.classList.remove('opacity-40', 'pointer-events-none');
        showToast("🎓 Epic! All courses cleared. The 10-Question Evolution Exam is unlocked!", "success");
        loadExamQuestion(0);
        updatePixelPetState("Genius");
    } else {
        // Load next module automatically
        setTimeout(() => {
            if (modNum < 5) loadActiveModuleWorkspace(modNum + 1);
        }, 800);
    }
}


// =========================================================================
// ==================== HAASY THE PIXEL BEARDED DRAGON =====================
// =========================================================================

function triggerHaasyHint() {
    playSFX('sparkle');
    const bubble = document.getElementById('haasy-hint-bubble');
    
    // Choose randomized technical hint corresponding to user's Age scaling
    const tier = tierLessons[userTier];
    const hints = tier.hints;
    const randomHint = hints[Math.floor(Math.random() * hints.length)];

    bubble.innerHTML = `🦎 HAASY THINKS: <br> ${randomHint}`;
    bubble.classList.remove('hidden');

    // Automatically prune bubble after interval
    setTimeout(() => {
        bubble.classList.add('hidden');
    }, 6000);
}


// =========================================================================
// ==================== THE BROKEN BRIDGE CANVAS GAME ======================
// =========================================================================

function initBrokenBridgeGame() {
    bridgeNodesPlaced = [];
    const wrapper = document.getElementById('bridge-logic-slot');
    wrapper.innerHTML = "";

    // Pre-populate missing slot indicators
    for (let i = 0; i < 4; i++) {
        const slot = document.createElement('div');
        slot.className = "w-16 h-16 border-2 border-dashed border-black bg-white/40 rounded-xl flex items-center justify-center text-[10px] font-black text-slate-400";
        slot.textContent = `Node ${i + 1}`;
        wrapper.appendChild(slot);
    }

    // Populate Level choices in randomized layout
    const choices = ["Trigger", "Filter", "Integration", "Action"];
    // Shuffle
    choices.sort(() => Math.random() - 0.5);

    const container = document.getElementById('game-choices-wrapper');
    container.innerHTML = "";
    choices.forEach(ch => {
        const btn = document.createElement('button');
        btn.className = "btn-lego bg-yellow-100 text-[10px] px-3 py-1.5 font-black text-slate-800";
        btn.textContent = ch;
        btn.onclick = () => placeBridgeNode(ch);
        container.appendChild(btn);
    });
}

function placeBridgeNode(nodeName) {
    if (bridgeNodesPlaced.length >= 4) return;

    bridgeNodesPlaced.push(nodeName);
    playSFX('lego');

    // Redraw bridge slots
    const wrapper = document.getElementById('bridge-logic-slot');
    wrapper.innerHTML = "";

    // Draw active placed nodes
    bridgeNodesPlaced.forEach((node, idx) => {
        const colors = { Trigger: "bg-sky-400", Filter: "bg-pink-300", Integration: "bg-yellow-300", Action: "bg-emerald-400" };
        const nBox = document.createElement('div');
        nBox.className = `${colors[node]} border-2 border-black rounded-xl p-2 h-14 w-16 text-[9px] font-black flex items-center justify-center leading-tight shadow animate-bounce`;
        nBox.textContent = node;
        wrapper.appendChild(nBox);
    });

    // Populate empty slots remaining
    for (let i = bridgeNodesPlaced.length; i < 4; i++) {
        const slot = document.createElement('div');
        slot.className = "w-16 h-16 border-2 border-dashed border-black bg-white/40 rounded-xl flex items-center justify-center text-[10px] font-black text-slate-400";
        slot.textContent = `Node ${i + 1}`;
        wrapper.appendChild(slot);
    }

    // Evaluate bridge order if all 4 are loaded
    if (bridgeNodesPlaced.length === 4) {
        setTimeout(validateBridgeSequence, 1000);
    }
}

function validateBridgeSequence() {
    let isValid = true;
    for (let i = 0; i < 4; i++) {
        if (bridgeNodesPlaced[i] !== correctBridgeSequence[i]) {
            isValid = false;
            break;
        }
    }

    if (isValid) {
        playSFX('correct');
        showToast("🌉 Beautiful! Your logic order is perfect! The bridge completed securely!", "success");
        updatePixelPetState("Happy");
        
        // Let Haasy celebrate on-screen
        const slots = document.getElementById('bridge-logic-slot');
        slots.className += " border-b-4 border-emerald-400 animate-pulse";
    } else {
        // Trigger active Fail State collapse
        playSFX('bubble');
        showToast("⚠️ FAIL STATE: Logic bridge order was incorrect! The nodes collapsed!", "warning");
        
        const slots = document.getElementById('bridge-logic-slot');
        slots.classList.add('translate-y-24', 'opacity-0');

        setTimeout(() => {
            slots.classList.remove('translate-y-24', 'opacity-0');
            initBrokenBridgeGame(); // reset levels
        }, 1200);
    }
}


// =========================================================================
// ==================== EVOLUTION CERTIFICATION EXAM =======================
// =========================================================================

function loadExamQuestion(qIdx) {
    examCurrentQuestion = qIdx;
    
    const tier = tierLessons[userTier];
    const questions = tier.examQuestions;

    // Check if finished
    if (qIdx >= questions.length) {
        // Add text-area freebie question
        loadFreebieQuestion();
        return;
    }

    const q = questions[qIdx];
    document.getElementById('exam-score-badge').textContent = `Question ${qIdx + 1} of 5`;
    document.getElementById('question-text').innerHTML = q.q;

    // Populate multiple choice answers
    const box = document.getElementById('answer-choices-box');
    box.innerHTML = "";

    q.a.forEach((choice, idx) => {
        const btn = document.createElement('button');
        btn.className = "btn-lego bg-white border-2 border-black hover:bg-stone-50 text-left text-xs font-bold p-3 rounded-xl transition flex justify-between items-center text-slate-800";
        btn.innerHTML = `<span>${choice}</span> <span>➡️</span>`;
        btn.onclick = () => submitExamAnswer(idx);
        box.appendChild(btn);
    });
}

function submitExamAnswer(ansIdx) {
    const tier = tierLessons[userTier];
    const q = tier.examQuestions[examCurrentQuestion];

    if (ansIdx === q.correct) {
        examScore++;
        playSFX('sparkle');
    } else {
        playSFX('bubble');
    }

    loadExamQuestion(examCurrentQuestion + 1);
}

function loadFreebieQuestion() {
    document.getElementById('exam-score-badge').textContent = "Question 5 of 5: Freebie";
    document.getElementById('question-text').innerHTML = "Name three things you learned in the Haas Playground today.";

    const box = document.getElementById('answer-choices-box');
    box.innerHTML = `
        <div class="col-span-2 space-y-3 w-full">
            <textarea id="freebie-textarea-input" placeholder="e.g., I learned about automated trigger signals, how software programs connect using an API, and compiling home-screen PWAs..." class="w-full border-4 border-black rounded-2xl p-4 text-xs font-semibold h-24 focus:outline-none focus:border-indigo-600"></textarea>
            <button onclick="gradeExamResult()" class="btn-lego bg-indigo-600 text-white text-xs px-6 py-3 w-full">Submit Exam</button>
        </div>
    `;
}

function gradeExamResult() {
    const freebieText = document.getElementById('freebie-textarea-input').value.trim();
    if (!freebieText) {
        showToast("⚠️ Please enter three things you learned to pass the certification!", "warning");
        return;
    }

    // Always count the freebie as correct
    const totalScore = examScore + 1;
    const totalQuestions = 5;
    const pct = (totalScore / totalQuestions) * 100;

    if (pct >= 90) {
        playSFX('correct');
        showToast(`🎉 Brilliant! You passed with a ${pct}% score! Unlocking your custom certificate!`, "success");
        revealCertificateModal();
    } else {
        playSFX('bubble');
        showToast(`❌ Scored ${totalScore}/${totalQuestions}. You need a 90% pass rate to clear your exam. Let's study and retry!`, "warning");
        // Reset
        examScore = 0;
        loadExamQuestion(0);
    }
}

function revealCertificateModal() {
    document.getElementById('cert-modal').classList.remove('hidden');
}

function closeCertModal() {
    document.getElementById('cert-modal').classList.add('hidden');
}

// First and Last Name Certificate Validations
function applyNameToCertificate() {
    const first = document.getElementById('cert-first-name').value.trim();
    const last = document.getElementById('cert-last-name').value.trim();

    if (!first || !last) {
        showToast("⚠️ Please enter both First and Last names to write your seal!", "warning");
        return;
    }

    // Lock text fields & print header
    document.getElementById('cert-name-input-block').classList.add('hidden');
    
    const display = document.getElementById('cert-recipient-name');
    display.textContent = `${first} ${last}`;
    display.classList.remove('hidden');

    // Enable print triggers
    const printBtn = document.getElementById('print-cert-btn');
    printBtn.removeAttribute('disabled');
    printBtn.classList.remove('bg-stone-200', 'text-stone-400', 'cursor-not-allowed');
    printBtn.classList.add('bg-indigo-600', 'text-white', 'hover:bg-indigo-700');

    playSFX('correct');
    showToast("✍️ Certificate name locked and authenticated!", "success");
}


// =========================================================================
// ==================== KIDS CREATOR STUDIO & UTILS ========================
// =========================================================================

function previewCreatorAsset() {
    const sfx = document.getElementById('kids-sfx-dropdown').value;
    const asset = document.getElementById('kids-assets-dropdown').value;

    playSFX(sfx);
    showToast(`🎨 Previewing Pack: [${sfx.toUpperCase()}] and Wallpapers for [${asset}]!`, "success");
}

function downloadCreatorPack() {
    const sfx = document.getElementById('kids-sfx-dropdown').value;
    const asset = document.getElementById('kids-assets-dropdown').value;

    showToast(`📥 Customized Asset Pack Downloaded for Free! Contains: ${sfx}_sound.mp3, ${asset}.png, and app_icons.zip!`, "success");
}

function updatePixelPetStats() {
    let count = Object.values(completedModules).filter(v => v === true).length;
    const health = 20 + (count * 16);
    const wisdom = 10 + (count * 18);

    document.getElementById('pet-health-text').textContent = `${health}%`;
    document.getElementById('pet-health-bar').style.width = `${health}%`;

    document.getElementById('pet-wisdom-text').textContent = `${wisdom}%`;
    document.getElementById('pet-wisdom-bar').style.width = `${wisdom}%`;
}

function updatePixelPetState(state) {
    const statusText = document.getElementById('pet-status');
    const cells = document.querySelectorAll('.pixel-cell');

    if (state === "Sleeping") {
        statusText.textContent = "State: Spiky & Cozy 🦎";
    } else if (state === "Happy") {
        statusText.textContent = "State: Playful & Excited! 🦖";
        cells.forEach(c => {
            if (c.classList.contains('pixel-dragon')) {
                c.classList.remove('pixel-dragon');
                c.classList.add('pixel-beard');
            }
        });
    } else if (state === "Genius") {
        statusText.textContent = "State: Intelligent Genius! 🧠";
        cells.forEach(c => {
            if (c.classList.contains('pixel-beard')) {
                c.classList.remove('pixel-beard');
                c.classList.add('pixel-eye');
            }
        });
    }
}

// Bouncy synthesized sound engine using HTML5 Web Audio API
function playSFX(type) {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        const now = audioCtx.currentTime;

        if (type === 'bubble') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(400, now);
            osc.frequency.exponentialRampToValueAtTime(1200, now + 0.15);
            gainNode.gain.setValueAtTime(0.15, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
            osc.start(now);
            osc.stop(now + 0.15);
        } else if (type === 'sparkle') {
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(1500, now);
            osc.frequency.exponentialRampToValueAtTime(800, now + 0.25);
            gainNode.gain.setValueAtTime(0.1, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
            osc.start(now);
            osc.stop(now + 0.25);
        } else if (type === 'correct') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(523.25, now); // C5
            osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
            osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
            gainNode.gain.setValueAtTime(0.15, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
            osc.start(now);
            osc.stop(now + 0.4);
        } else if (type === 'lego') {
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(180, now);
            osc.frequency.setValueAtTime(120, now + 0.05);
            gainNode.gain.setValueAtTime(0.3, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
            osc.start(now);
            osc.stop(now + 0.08);
        }
    } catch (e) {
        console.warn("HTML5 Synth oscillator audio context deferred.", e);
    }
}

function showToast(message, type = "success") {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `p-4 rounded-xl text-xs font-bold shadow-lg text-white max-w-sm pointer-events-auto flex items-center gap-3 border transition-all duration-300 transform translate-x-12 opacity-0 select-none`;
    
    if (type === "success") {
        toast.className += " bg-emerald-600 border-emerald-500 shadow-emerald-100";
    } else if (type === "warning") {
        toast.className += " bg-amber-600 border-amber-500 shadow-amber-100";
    } else {
        toast.className += " bg-indigo-600 border-indigo-500 shadow-indigo-100";
    }

    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove('translate-x-12', 'opacity-0');
    }, 10);

    setTimeout(() => {
        toast.classList.add('translate-x-12', 'opacity-0');
        setTimeout(() => {
            if (container.contains(toast)) container.removeChild(toast);
        }, 300);
    }, 4500);
}
