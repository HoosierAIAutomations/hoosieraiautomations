// Hoosier AI Automations - Haas Playground Controller
let userName = '';
let userRole = '';
let userIntent = '';
let userAge = 18;

// Academy Modules Tracker
let completedModules = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
};

// Exam State Tracker
let examCurrentQuestion = 0;
let examScore = 0;
const examQuestions = [
    {
        q: "1. What is an automation workflow?",
        a: ["A type of running shoes", "A series of steps that automates a task automatically", "Homework assigned on weekends", "A streaming music app"],
        correct: 1
    },
    {
        q: "2. What is a software integration?",
        a: ["Deleting computer files", "Connecting two or more apps so they can talk to each other", "A phone screen protector", "A coding keyboard"],
        correct: 1
    },
    {
        q: "3. What is an app?",
        a: ["A quick nap during the day", "An apple pie slice", "A software application that performs a specific function on your device", "The computer charger"],
        correct: 2
    },
    {
        q: "4. What is a URL used for?",
        a: ["Unlocking your door", "A web address pointing to a specific page on the Internet", "Recording sounds", "Drawing rectangles"],
        correct: 1
    },
    {
        q: "5. What is a prompt?",
        a: ["Arriving exactly on time", "An instruction or question you give to an AI to tell it what to do", "A type of battery", "A web browser"],
        correct: 1
    },
    {
        q: "6. What is SaaS?",
        a: ["Talking back to your teachers", "Software as a Service - software hosted on the web that you use online", "A system for printing paper", "A video gaming console"],
        correct: 1
    },
    {
        q: "7. How do Ads help companies sell products?",
        a: ["By hiding products in secret boxes", "By informing people about a product and showing its value", "By turning off the internet", "By changing the logo colors"],
        correct: 1
    },
    {
        q: "8. Which one of these is a type of software integration?",
        a: ["Plugging in headphones", "Connecting Shopify to Slack to notify you of sales", "Painting your computer", "Writing on a whiteboard"],
        correct: 1
    },
    {
        q: "9. What is Artificial Intelligence (AI)?",
        a: ["A metal robot that cleans your room", "Smart computer systems that can think, learn, and solve problems like humans", "An internet cable", "A math textbook"],
        correct: 1
    },
    {
        q: "10. Name things you've learned! (Freebie)",
        a: ["Coding is boring and hard", "How workflows, apps, and software integrations help automate business tasks!", "Absolutely nothing at all", "How to eat cookies"],
        correct: 1
    }
];

// =========================================================================
// ==================== ONBOARDING FLOW ACTIONS ============================
// =========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Register PWA Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker Registered scope:', reg.scope))
            .catch(err => console.error('Service Worker fail:', err));
    }

    // Populate Age Dropdown Selector dynamically
    const ageSelect = document.getElementById('user-age-select');
    if (ageSelect) {
        // Clear any previous mockup content
        ageSelect.innerHTML = '<option value="" disabled selected>Choose Your Age</option>';
        for (let i = 10; i <= 80; i++) {
            const opt = document.createElement('option');
            opt.value = i;
            if (i < 18) {
                opt.textContent = `${i} Years (Young Innovator Track)`;
            } else {
                opt.textContent = `${i} Years (Professional Console)`;
            }
            if (i === 18) opt.selected = true;
            ageSelect.appendChild(opt);
        }
    }

    // Setup initial calculations
    calculateROI();
});

function selectRole(role) {
    userRole = role;
    
    // Highlight role card border
    document.querySelectorAll('.role-card').forEach(card => {
        card.classList.remove('border-indigo-600', 'bg-indigo-50/10');
        card.classList.add('border-stone-200/60');
    });
    
    const card = event.currentTarget;
    card.classList.remove('border-stone-200/60');
    card.classList.add('border-indigo-600', 'bg-indigo-50/10');

    // Display localized feedback
    const feedbackBox = document.getElementById('role-feedback-box');
    const feedbackText = document.getElementById('role-feedback-text');
    feedbackBox.classList.remove('hidden');

    let text = "";
    switch (role) {
        case "Founder/Owner":
            text = "🚀 Excellent! As a business founder/owner, we will structure your console to demonstrate operational ROI, human payback speeds, and workflow translations.";
            break;
        case "Developer":
            text = "💻 Welcome, engineer! The console provides real-time flowchart renders, database webhook maps, and multi-channel integration options.";
            break;
        case "Innovator":
            text = "🧠 Outstanding! Discover state-of-the-art AI architectures, document processors, and automated tracking modules.";
            break;
        case "Marketer":
            text = "📣 Marketing specialist! Focus on instantaneous lead form responder pipelines, CRM synchronizers, and Shopify low-stock alert triggers.";
            break;
        case "Student":
            text = "🎓 Fantastic! Welcome to our coding workspace. Learn how databases, triggers, and actions talk to each other without jargon.";
            break;
        case "Start-Up":
            text = "⚡ Speed is key! Explore lightweight architectures that replace hundreds of weekly administrative hours on autopilot.";
            break;
    }
    feedbackText.textContent = text;

    // Enable continue trigger
    const btn = document.getElementById('btn-continue-step-1');
    btn.removeAttribute('disabled');
    btn.classList.remove('bg-stone-200', 'text-stone-400', 'cursor-not-allowed');
    btn.classList.add('bg-indigo-600', 'text-white', 'cursor-pointer', 'hover:bg-indigo-700', 'shadow');
}

function selectIntent(intent) {
    userIntent = intent;
    
    // Highlight intent card
    document.querySelectorAll('.intent-card').forEach(card => {
        card.classList.remove('border-indigo-600', 'bg-indigo-50/10');
        card.classList.add('border-stone-200/60');
    });
    
    const card = event.currentTarget;
    card.classList.remove('border-stone-200/60');
    card.classList.add('border-indigo-600', 'bg-indigo-50/10');

    // Display intent feedback
    const feedbackBox = document.getElementById('intent-feedback-box');
    const feedbackText = document.getElementById('intent-feedback-text');
    feedbackBox.classList.remove('hidden');

    let text = "";
    switch (intent) {
        case "Playground":
            text = "🎠 Perfect choice! You are entering the Haas Live Playground workspace where you can preview automations and simulate stress tests.";
            break;
        case "Workflows":
            text = "🔗 Technical mapping! Let's examine real-world bottlenecks translated into streamlined, sequential flowchart actions.";
            break;
        case "Fun":
            text = "🎪 Creativity first! Enjoy logic bridge puzzles, synthesize your own sound tracks, and claim custom innovation credentials.";
            break;
        case "NotSure":
            text = "🧭 No worries! We will pre-load friendly, pre-configured templates to guide you through the process step-by-step.";
            break;
    }
    feedbackText.textContent = text;

    // Enable step continue button
    const btn = document.getElementById('btn-continue-step-2');
    btn.removeAttribute('disabled');
    btn.classList.remove('bg-stone-200', 'text-stone-400', 'cursor-not-allowed');
    btn.classList.add('bg-indigo-600', 'text-white', 'cursor-pointer', 'hover:bg-indigo-700', 'shadow');
}

function nextStep(stepNumber) {
    // Toggle wizard steps
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
        showToast("⚠️ Please enter your name to authenticate the playground!", "warning");
        nameInput.focus();
        return;
    }

    userName = nameInput.value.trim();
    userAge = parseInt(ageSelect.value) || 18;

    // Transition off wizard
    document.getElementById('onboarding-stage').classList.add('hidden');
    
    // Reveal dashboard console
    document.getElementById('playground-dashboard').classList.remove('hidden');

    if (userAge >= 18) {
        // Adult Professional Studio
        document.getElementById('professional-dashboard').classList.remove('hidden');
        showToast(`💼 Welcome to Executive Studio, ${userName}!`, "success");
        initProfessionalConsole();
    } else {
        // Youth Innovator Track
        document.getElementById('young-innovator-dashboard').classList.remove('hidden');
        showToast(`🎈 Welcome, Young Innovator ${userName}! Let's build!`, "success");
        initYouthPlayground();
    }
}


// =========================================================================
// ==================== EXECUTIVE PROFESSIONAL CONSOLE ====================
// =========================================================================

// High-fidelity pipeline parameters matching requirements
const businessScenarios = {
    SME_Scheduling: {
        title: "Retail Scheduling Automated Sync",
        catch: "Customer books appointment via your online form.",
        decision: "Haas AI filters available calendar blocks and staff availability.",
        action: "Saves details to central system and auto-sends SMS pings.",
        result: "Manual schedule management and client follow-ups cut by 100%.",
        nodes: [
            { text: "Trigger Form Book", x: 100, y: 200, type: "trigger" },
            { text: "AI Calendar Parse", x: 300, y: 150, type: "decision" },
            { text: "Save Central DB", x: 500, y: 200, type: "action" },
            { text: "Twilio SMS Ping", x: 700, y: 200, type: "result" }
        ],
        connections: [[0, 1], [1, 2], [2, 3]],
        premium: false
    },
    SME_Dispatch: {
        title: "Logistics Automated Fleet Dispatch",
        catch: "New load dispatcher assigns routing details.",
        decision: "Haas evaluates active driver geographic boundary zones.",
        action: "Sends exact coordinates to the closest driver's terminal.",
        result: "Eliminated driver idle intervals, boosting delivery speeds 3x.",
        nodes: [
            { text: "Order Dispatched", x: 100, y: 200, type: "trigger" },
            { text: "Geofence Check", x: 300, y: 150, type: "decision" },
            { text: "Terminal Coordinates", x: 500, y: 200, type: "action" },
            { text: "Live Delivery Route", x: 700, y: 200, type: "result" }
        ],
        connections: [[0, 1], [1, 2], [2, 3]],
        premium: false
    },
    SME_Responder: {
        title: "Fast Lead Form Autopilot Response",
        catch: "Lead completes form request on website.",
        decision: "Haas analyzes inquiry coordinates and client parameters.",
        action: "Instantly generates and emails a custom operational brief.",
        result: "Inbound response delay cut to 3 minutes, tripling sales closed.",
        nodes: [
            { text: "Lead Submission", x: 100, y: 200, type: "trigger" },
            { text: "Inquiry Analysis", x: 300, y: 150, type: "decision" },
            { text: "Generate Brief", x: 500, y: 200, type: "action" },
            { text: "Outbox Email Send", x: 700, y: 200, type: "result" }
        ],
        connections: [[0, 1], [1, 2], [2, 3]],
        premium: false
    },
    ENT_Inventory: {
        title: "ERP Multi-Channel Inventory Synchronizer",
        catch: "Stock inventory levels update inside main warehouse ERP database.",
        decision: "Haas evaluates stock thresholds across active products.",
        action: "Coordinates dynamic stock counts on Shopify, Amazon, and eBay.",
        result: "Cut multi-channel over-selling margins to absolutely 0.0%.",
        nodes: [
            { text: "Warehouse ERP Ingest", x: 100, y: 200, type: "trigger" },
            { text: "Threshold Check", x: 300, y: 150, type: "decision" },
            { text: "Shopify Sync Multi", x: 500, y: 200, type: "action" },
            { text: "Live Stock Update", x: 700, y: 200, type: "result" }
        ],
        connections: [[0, 1], [1, 2], [2, 3]],
        premium: true
    },
    ENT_Telemetry: {
        title: "Fleet Telemetry Hub & Tracking Engine",
        catch: "Active heavy freight fleet routes geofenced boundaries.",
        decision: "Engine parses vehicular load weight and fuel coefficients.",
        action: "Streams routing coordinates to operational dashboards.",
        result: "Maximized routing efficiencies, shaving thousands off freight costs.",
        nodes: [
            { text: "GPS Boundary Ingest", x: 100, y: 200, type: "trigger" },
            { text: "Load Coefficient AI", x: 300, y: 150, type: "decision" },
            { text: "Dashboard Publish", x: 500, y: 200, type: "action" },
            { text: "Freight Optimized", x: 700, y: 200, type: "result" }
        ],
        connections: [[0, 1], [1, 2], [2, 3]],
        premium: true
    },
    ENT_Processor: {
        title: "AI Document Processor & Invoicer",
        catch: "PDF digital invoice arrives inside operations inbox folder.",
        decision: "Optical AI extracts matching supplier, pricing, and VAT details.",
        action: "Generates accounting ledger record and fires auto-reconcile triggers.",
        result: "Cut business invoicing labor costs by a verified 82%.",
        nodes: [
            { text: "Inbound PDF Mail", x: 100, y: 200, type: "trigger" },
            { text: "Optical Extract AI", x: 300, y: 150, type: "decision" },
            { text: "Reconcile Ledger", x: 500, y: 200, type: "action" },
            { text: "Financial Audited", x: 700, y: 200, type: "result" }
        ],
        connections: [[0, 1], [1, 2], [2, 3]],
        premium: true
    }
};

function initProfessionalConsole() {
    // Load default scenario
    triggerPresetScenario('SME_Scheduling');
}

function loadBusinessScenario(type) {
    const selector = type === 'sme' ? document.getElementById('sme-selector') : document.getElementById('ent-selector');
    const selected = selector.value;
    if (selected) {
        triggerPresetScenario(selected);
        // Clear opposing selector
        const opposing = type === 'sme' ? document.getElementById('ent-selector') : document.getElementById('sme-selector');
        opposing.selectedIndex = 0;
    }
}

function triggerPresetScenario(scKey) {
    const sc = businessScenarios[scKey];
    if (!sc) return;

    // Update non-technical Human Roadmap headers
    document.getElementById('catch-text').textContent = sc.catch;
    document.getElementById('decision-text').textContent = sc.decision;
    document.getElementById('action-text').textContent = sc.action;
    document.getElementById('result-text').textContent = sc.result;

    // Manage Premium locked paywall blurring
    const overlay = document.getElementById('stripe-lock-overlay');
    const canvas = document.getElementById('blueprint-canvas');

    if (sc.premium) {
        overlay.classList.remove('hidden');
        canvas.classList.add('paywall-blur');
    } else {
        overlay.classList.add('hidden');
        canvas.classList.remove('paywall-blur');
    }

    // Trigger canvas logic flow drawing
    drawProfessionalFlowchart(sc);
    showToast(`📍 Loaded: ${sc.title}`, "success");
}

function translateCustomProblem() {
    const input = document.getElementById('custom-problem-input').value.trim();
    if (!input) {
        showToast("⚠️ Please enter a custom operational problem to translate!", "warning");
        return;
    }

    const lower = input.toLowerCase();
    let selectedScenario = 'SME_Responder'; // fallback default

    if (lower.includes('schedule') || lower.includes('calendar') || lower.includes('appointment')) {
        selectedScenario = 'SME_Scheduling';
    } else if (lower.includes('dispatch') || lower.includes('driver') || lower.includes('freight') || lower.includes('delivery')) {
        selectedScenario = 'SME_Dispatch';
    } else if (lower.includes('lead') || lower.includes('sale') || lower.includes('form') || lower.includes('customer')) {
        selectedScenario = 'SME_Responder';
    } else if (lower.includes('inventory') || lower.includes('stock') || lower.includes('warehouse')) {
        selectedScenario = 'ENT_Inventory';
    } else if (lower.includes('invoice') || lower.includes('invoice') || lower.includes('pdf') || lower.includes('reconcile')) {
        selectedScenario = 'ENT_Processor';
    }

    // Build bespoke translation matching user input
    const baseScenario = businessScenarios[selectedScenario];
    
    document.getElementById('catch-text').textContent = `Your custom bottleneck: "${input}" triggers automated sensors.`;
    document.getElementById('decision-text').textContent = baseScenario.decision;
    document.getElementById('action-text').textContent = baseScenario.action;
    document.getElementById('result-text').textContent = `Eliminates manual task overhead and saves 10-15+ hours weekly.`;

    const overlay = document.getElementById('stripe-lock-overlay');
    const canvas = document.getElementById('blueprint-canvas');

    if (baseScenario.premium) {
        overlay.classList.remove('hidden');
        canvas.classList.add('paywall-blur');
    } else {
        overlay.classList.add('hidden');
        canvas.classList.remove('paywall-blur');
    }

    drawProfessionalFlowchart(baseScenario);
    showToast("✨ Custom Bottleneck Translated Successfully!", "success");
}

function drawProfessionalFlowchart(sc) {
    const canvas = document.getElementById('blueprint-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid coordinate lines
    ctx.strokeStyle = "rgba(0, 28, 72, 0.03)";
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }

    // Draw active data path connectors (Hoosier Indigo)
    ctx.lineWidth = 3;
    sc.connections.forEach(conn => {
        const from = sc.nodes[conn[0]];
        const to = sc.nodes[conn[1]];

        ctx.strokeStyle = "#4F46E5";
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();

        // Draw animated data flow pulses
        const now = Date.now();
        const pct = (now % 2000) / 2000;
        const pulseX = from.x + (to.x - from.x) * pct;
        const pulseY = from.y + (to.y - from.y) * pct;

        ctx.fillStyle = "#F59E0B"; // Gold active pulse
        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 5, 0, Math.PI * 2);
        ctx.fill();
    });

    // Draw clean geometric outline nodes
    sc.nodes.forEach(node => {
        ctx.strokeStyle = "#001C48"; // Hoosier Indigo
        ctx.lineWidth = 3;

        if (node.type === "trigger") {
            ctx.fillStyle = "#001C48";
            // Rounded RectangleTrigger
            drawRoundedRect(ctx, node.x - 70, node.y - 25, 140, 50, 10, true, true);
            ctx.fillStyle = "#FFFFFF";
        } else if (node.type === "decision") {
            ctx.fillStyle = "#FAF9F5";
            // Diamond Decision Node
            ctx.beginPath();
            ctx.moveTo(node.x, node.y - 30);
            ctx.lineTo(node.x + 70, node.y);
            ctx.lineTo(node.x, node.y + 30);
            ctx.lineTo(node.x - 70, node.y);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle = "#001C48";
        } else if (node.type === "action") {
            ctx.fillStyle = "#FAF9F5";
            drawRoundedRect(ctx, node.x - 70, node.y - 25, 140, 50, 10, true, true);
            ctx.fillStyle = "#001C48";
        } else {
            // Result Node (Pill style)
            ctx.fillStyle = "#EEF2FF";
            drawRoundedRect(ctx, node.x - 70, node.y - 25, 140, 50, 25, true, true);
            ctx.fillStyle = "#4F46E5";
        }

        // Render text without jargon
        ctx.font = "bold 10px 'Inter', sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(node.text, node.x, node.y);
    });
}

// ROI Calculator Comparison Calculations
function calculateROI() {
    const rate = parseFloat(document.getElementById('roi-rate').value) || 0;
    const hours = parseFloat(document.getElementById('roi-hours').value) || 0;

    const manualYearly = rate * hours * 52;
    const manualCostText = document.getElementById('roi-manual-cost');
    const manualBar = document.getElementById('roi-manual-bar');
    const paybackText = document.getElementById('roi-payback-days');

    manualCostText.textContent = manualYearly.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

    const maxVal = 40000;
    const pct = Math.min((manualYearly / maxVal) * 100, 100);
    manualBar.style.width = `${pct}%`;

    if (manualYearly > 0) {
        const haasSaaSYearly = 600;
        const dailySavings = (rate * hours) / 7;
        const paybackDays = Math.ceil(haasSaaSYearly / dailySavings);
        paybackText.textContent = paybackDays <= 365 ? `${paybackDays} Days` : "Under 1 Year";
    } else {
        paybackText.textContent = "0 Days";
    }
}

// Stripe Simulation triggers
function simulateStripeCheckout() {
    document.getElementById('stripe-checkout-modal').classList.remove('hidden');
}

function closeStripeModal() {
    document.getElementById('stripe-checkout-modal').classList.add('hidden');
}

function completeStripeTransaction() {
    closeStripeModal();
    showToast("💳 Stripe Secure Transaction Complete! Generating Strategy Package...", "success");
    
    // Unlock blurred canvas & trigger success path download
    document.getElementById('stripe-lock-overlay').classList.add('hidden');
    document.getElementById('blueprint-canvas').classList.remove('paywall-blur');
}


// =========================================================================
// ==================== YOUNG INNOVATOR TRACK (17 & UNDER) =================
// =========================================================================

// Kid Game Multi-level Configurations responsive to selected age group
const levelPuzzles = {
    Beginner: {
        label: "Ages 10-12 (Beginner)",
        badge: "Level 1: Beginner",
        desc: "Build a trigger communication bridge to log tasks.",
        elements: { trigger: "📧 New Message", action: "📅 Save to Calendar" },
        choices: ["🎨 Draw Picture", "🧠 Haas Thinks", "🎈 Blow Up Balloon"],
        correct: 1
    },
    Intermediate: {
        label: "Ages 13-15 (Intermediate)",
        badge: "Level 2: Intermediate",
        desc: "Construct conditional branches to process inventory.",
        elements: { trigger: "🛒 Item Ordered", action: "🧠 Condition Split", action2: "📦 Ship Product" },
        choices: ["Write Essay", "Haas Syncs Database", "Play Basketball"],
        correct: 1
    },
    Advanced: {
        label: "Ages 16-17 (Advanced)",
        badge: "Level 3: Advanced",
        desc: "Design real-time API integrations and loops.",
        elements: { trigger: "📈 Lead Ingest", action: "📊 Sync Hub", action2: "📱 SMS Notify" },
        choices: ["Bake Bread", "Haas API Connector", "Do Homework"],
        correct: 1
    }
};

function initYouthPlayground() {
    // Customize logic levels dynamically based on onboarding age selection
    let puzzleKey = "Beginner";
    if (userAge >= 13 && userAge <= 15) {
        puzzleKey = "Intermediate";
    } else if (userAge >= 16 && userAge <= 17) {
        puzzleKey = "Advanced";
    }

    loadPuzzleLevel(puzzleKey);
    updatePixelPetState("Sleeping");
}

function loadPuzzleLevel(lvlKey) {
    const lvl = levelPuzzles[lvlKey];
    if (!lvl) return;

    document.getElementById('game-age-label').textContent = lvl.label;
    document.getElementById('game-level-badge').textContent = lvl.badge;

    // Redraw Game Board Elements
    const wrapper = document.getElementById('game-board-elements');
    wrapper.innerHTML = "";

    // Node 1: Trigger
    const tNode = document.createElement('div');
    tNode.className = "bg-sky-300 border-2 border-black rounded-xl p-3 font-black text-xs";
    tNode.textContent = lvl.elements.trigger;
    wrapper.appendChild(tNode);

    // Arrow
    const arrow1 = document.createElement('div');
    arrow1.className = "text-xl";
    arrow1.textContent = "➡️";
    wrapper.appendChild(arrow1);

    // Node 2: Missing Bridge Slot
    const slot = document.createElement('div');
    slot.id = "game-bridge-slot";
    slot.className = "bg-stone-200 border-4 border-dashed border-black rounded-xl p-3 font-black text-xs text-stone-400 h-12 w-36 flex items-center justify-center animate-pulse";
    slot.textContent = "? Missing Node";
    wrapper.appendChild(slot);

    // Optional Extra Nodes
    if (lvl.elements.action2) {
        const arrowX = document.createElement('div');
        arrowX.className = "text-xl";
        arrowX.textContent = "➡️";
        wrapper.appendChild(arrowX);

        const extra = document.createElement('div');
        extra.className = "bg-pink-300 border-2 border-black rounded-xl p-3 font-black text-xs";
        extra.textContent = lvl.elements.action;
        wrapper.appendChild(extra);
    }

    // Arrow Final
    const arrowF = document.createElement('div');
    arrowF.className = "text-xl";
    arrowF.textContent = "➡️";
    wrapper.appendChild(arrowF);

    // Node 3: Result
    const rNode = document.createElement('div');
    rNode.className = "bg-emerald-300 border-2 border-black rounded-xl p-3 font-black text-xs";
    rNode.textContent = lvl.elements.action2 || lvl.elements.action;
    wrapper.appendChild(rNode);

    // Load Game Choices
    const choicesWrapper = document.getElementById('game-choices-wrapper');
    choicesWrapper.innerHTML = "";
    lvl.choices.forEach((ch, idx) => {
        const btn = document.createElement('button');
        btn.className = "btn-lego bg-yellow-100 text-xs px-4 py-2 text-slate-800 font-extrabold";
        btn.textContent = ch;
        btn.onclick = () => selectGameChoice(idx === lvl.correct ? 'Right' : 'Wrong');
        choicesWrapper.appendChild(btn);
    });
}

function selectGameChoice(outcome) {
    if (outcome === 'Right') {
        playSFX('correct');
        const slot = document.getElementById('game-bridge-slot');
        slot.textContent = "✅ Block Snapped!";
        slot.className = "bg-emerald-400 border-4 border-black rounded-xl p-3 font-black text-xs text-black h-12 w-36 flex items-center justify-center animate-bounce";
        
        showToast("🌟 Hurray! You fixed the logic pipeline bridge!", "success");
        updatePixelPetState("Happy");
    } else {
        playSFX('bubble');
        showToast("🎈 Oops! That logical command doesn't fit here. Try another!", "warning");
    }
}

// 5-Module Academy Course completions
function completeAcademyModule(modNum) {
    if (completedModules[modNum]) return; // already done

    completedModules[modNum] = true;
    playSFX('lego');

    // Flip card styling
    const card = document.getElementById(`course-card-${modNum}`);
    const badge = document.getElementById(`course-status-${modNum}`);
    const icon = document.getElementById(`course-icon-${modNum}`);

    card.classList.remove('bg-white');
    card.classList.add('bg-emerald-100', 'border-emerald-500');
    badge.textContent = "Completed! ✅";
    badge.className = "text-[9px] font-black uppercase text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full";
    icon.textContent = "✨";

    // Power up Pixel Pet Stats
    updatePixelPetStats();

    showToast(`📚 Module ${modNum} Checked off successfully!`, "success");

    // Check if all 5 completed
    const allDone = Object.values(completedModules).every(v => v === true);
    if (allDone) {
        // Enable Certification Exam Panel
        const exam = document.getElementById('exam-card');
        exam.classList.remove('opacity-40', 'pointer-events-none');
        showToast("🎓 All Courses Completed! The Certification Exam is now Unlocked! 🧠", "success");
        loadExamQuestion(0);
        updatePixelPetState("Genius");
    }
}

function updatePixelPetStats() {
    let count = Object.values(completedModules).filter(v => v === true).length;
    
    // Max stats on 5 modules
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
        statusText.textContent = "State: Cozy & Sleeping 😴";
    } else if (state === "Happy") {
        statusText.textContent = "State: Playful & Active! 😃";
        // change pixel elements color to represent awake puppy
        cells.forEach(c => {
            if (c.classList.contains('pixel-orange')) {
                c.classList.remove('pixel-orange');
                c.classList.add('pixel-white');
            }
        });
    } else if (state === "Genius") {
        statusText.textContent = "State: Super Smart Genius! 🧠";
        cells.forEach(c => {
            if (c.classList.contains('pixel-indigo')) {
                c.classList.remove('pixel-indigo');
                c.classList.add('pixel-orange');
            }
        });
    }
}

// Technology Certification Exam Controller
function loadExamQuestion(qIdx) {
    examCurrentQuestion = qIdx;
    if (qIdx >= examQuestions.length) {
        gradeExamResult();
        return;
    }

    const q = examQuestions[qIdx];
    document.getElementById('exam-score-badge').textContent = `Question ${qIdx + 1} of 10`;
    document.getElementById('question-text').textContent = q.q;

    // Load Multiple Choice Answers
    const box = document.getElementById('answer-choices-box');
    box.innerHTML = "";

    q.a.forEach((choice, idx) => {
        const btn = document.createElement('button');
        btn.className = "btn-lego bg-white border-2 border-black hover:bg-stone-50 text-left text-xs font-bold p-3 rounded-xl transition flex justify-between items-center text-slate-800";
        btn.innerHTML = `<span>${choice}</span> <span class="opacity-0">➡️</span>`;
        btn.onclick = () => submitExamAnswer(idx);
        box.appendChild(btn);
    });
}

function submitExamAnswer(ansIdx) {
    const q = examQuestions[examCurrentQuestion];
    if (ansIdx === q.correct) {
        examScore++;
        playSFX('sparkle');
    } else {
        playSFX('bubble');
    }

    // Go to next question
    loadExamQuestion(examCurrentQuestion + 1);
}

function gradeExamResult() {
    const passingGrade = 9; // 90%
    if (examScore >= passingGrade) {
        playSFX('correct');
        showToast("🎓 Brilliant! You passed with a 90%+ score! Unlocking your Certificate!", "success");
        revealCertificateModal();
    } else {
        playSFX('bubble');
        showToast(`❌ Scored ${examScore}/10. You need a 90% (9 correct) to clear your exam. Let's try again!`, "warning");
        // Reset and restart
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

// Kids Creator Studio Assets
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


// =========================================================================
// ==================== SYSTEM GENERAL UTILITIES ==========================
// =========================================================================

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
        console.warn("AudioContext deferred until click event.", e);
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
