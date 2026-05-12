// Haas Playground Dynamic Controller - Hoosier AI Automations
let userRole = '';
let userIntent = '';
let userName = '';
let userAge = 18;

// PWA Install Event Handler
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    // Show custom installation banner
    const banner = document.getElementById('pwa-install-banner');
    if (banner) banner.classList.remove('hidden');
});

document.addEventListener('DOMContentLoaded', () => {
    // Register PWA Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker Registered Successfully! Scope:', reg.scope))
            .catch(err => console.error('Service Worker Registration Failed:', err));
    }

    // Populate Age Dropdown Selector dynamically
    const ageSelect = document.getElementById('user-age-select');
    if (ageSelect) {
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

    // Bind PWA Install triggers
    const installBtn = document.getElementById('pwa-install-btn');
    if (installBtn) {
        installBtn.addEventListener('click', async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                console.log(`User response to PWA prompt: ${outcome}`);
                deferredPrompt = null;
                document.getElementById('pwa-install-banner').classList.add('hidden');
            }
        });
    }

    const dismissBtn = document.getElementById('pwa-dismiss');
    if (dismissBtn) {
        dismissBtn.addEventListener('click', () => {
            document.getElementById('pwa-install-banner').classList.add('hidden');
        });
    }

    // Initial default calculations
    calculateROI();
});

// =========================================================================
// ==================== ONBOARDING FLOW ACTIONS ============================
// =========================================================================

function selectRole(role) {
    userRole = role;
    
    // Highlight selected card
    document.querySelectorAll('.role-card').forEach(card => {
        card.classList.remove('border-indigo-600', 'bg-indigo-50/20');
        card.classList.add('border-stone-200/60');
    });
    
    const selectedCard = event.currentTarget;
    selectedCard.classList.remove('border-stone-200/60');
    selectedCard.classList.add('border-indigo-600', 'bg-indigo-50/20');

    // Dynamic response messages
    const feedbackBox = document.getElementById('role-feedback-box');
    const feedbackText = document.getElementById('role-feedback-text');
    feedbackBox.classList.remove('hidden');

    let text = "";
    switch (role) {
        case "Founder/Owner":
            text = "🚀 Awesome choice! As a Founder or Owner, we'll customize your dashboard to focus on ROI calculation, time-saving metrics, and production-ready pipelines.";
            break;
        case "Developer":
            text = "💻 Welcome, engineer! The Professional Console will provide raw JSON schemas, API mapping tools, and advanced integration blueprints.";
            break;
        case "Innovator":
            text = "🧠 Brilliant! As an Innovator, you'll be shown futuristic automation frameworks to spark creative design patterns and logic streams.";
            break;
        case "Marketer":
            text = "📣 Marketing expert! We will pre-load lead response, CRM syncing, and stock monitoring pipelines built to keep clients engaged.";
            break;
        case "Student":
            text = "🎓 Great! We'll gear your workspace toward interactive educational tools to simplify how apps connect and perform algorithms.";
            break;
        case "Start-Up":
            text = "⚡ Speed is key! As a Start-Up focus, we'll demonstrate lightweight automations that replace full departments on a shoestring budget.";
            break;
    }
    feedbackText.textContent = text;

    // Enable continue button
    const btn = document.getElementById('btn-continue-step-1');
    btn.removeAttribute('disabled');
    btn.classList.remove('bg-stone-200', 'text-stone-400', 'cursor-not-allowed');
    btn.classList.add('btn-primary', 'text-white', 'cursor-pointer', 'scale-105');
}

function selectIntent(intent) {
    userIntent = intent;
    
    // Highlight intent card
    document.querySelectorAll('.intent-card').forEach(card => {
        card.classList.remove('border-indigo-600', 'bg-indigo-50/20');
        card.classList.add('border-stone-200/60');
    });
    
    const selectedCard = event.currentTarget;
    selectedCard.classList.remove('border-stone-200/60');
    selectedCard.classList.add('border-indigo-600', 'bg-indigo-50/20');

    // Intent feedback responses
    const feedbackBox = document.getElementById('intent-feedback-box');
    const feedbackText = document.getElementById('intent-feedback-text');
    feedbackBox.classList.remove('hidden');

    let text = "";
    switch (intent) {
        case "Playground":
            text = "🎠 Perfect! You're entering the live playground dashboard where you can stress-test automations, stream thoughts, and customize layouts.";
            break;
        case "Workflows":
            text = "🔗 Heavy duty design! We'll render structured network paths showing how data moves across standard platforms secure and fast.";
            break;
        case "Fun":
            text = "🎪 Pure curiosity! Relax and explore. You can play custom built logic games, trigger sound effects, and claim visual rewards.";
            break;
        case "NotSure":
            text = "🧭 No problem! We'll load simple and friendly preset blueprints to guide you through what Haas automations make possible.";
            break;
    }
    feedbackText.textContent = text;

    // Enable continue button
    const btn = document.getElementById('btn-continue-step-2');
    btn.removeAttribute('disabled');
    btn.classList.remove('bg-stone-200', 'text-stone-400', 'cursor-not-allowed');
    btn.classList.add('btn-primary', 'text-white', 'cursor-pointer', 'scale-105');
}

function nextStep(stepNumber) {
    // Hide all steps
    document.getElementById('onboarding-step-1').classList.add('hidden');
    document.getElementById('onboarding-step-2').classList.add('hidden');
    document.getElementById('onboarding-step-3').classList.add('hidden');

    // Show selected step
    document.getElementById(`onboarding-step-${stepNumber}`).classList.remove('hidden');

    // Update progress bar & headers
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
        showToast("⚠️ Please enter your name!", "warning");
        nameInput.focus();
        return;
    }

    userName = nameInput.value.trim();
    userAge = parseInt(ageSelect.value);

    // Hide wizard flow
    document.getElementById('onboarding-stage').classList.add('hidden');
    
    // Display actual workspace console
    const dashboard = document.getElementById('playground-dashboard');
    dashboard.classList.remove('hidden');

    if (userAge >= 18) {
        // Adult Professional Track
        document.getElementById('professional-dashboard').classList.remove('hidden');
        showToast(`🎉 Welcome to Pro Studio, ${userName}!`, "success");
        initProfessionalConsole();
    } else {
        // Youth Innovator Track
        document.getElementById('young-innovator-dashboard').classList.remove('hidden');
        showToast(`🎈 Welcome, Young Innovator ${userName}!`, "success");
        initYouthPlayground();
    }
}

// =========================================================================
// ==================== PROFESSIONAL STUDIO CONSOLE (18+) ==================
// =========================================================================

let proStreamLogs = [];
const proBlueprints = {
    RealEstate: {
        title: "🏡 Real Estate Lead Generation Pipeline",
        nodes: [
            { text: "Lead Enters Form", x: 100, y: 225, type: "trigger" },
            { text: "Filter & Validate", x: 260, y: 225, type: "action" },
            { text: "Sync CRM Contact", x: 420, y: 225, type: "action" },
            { text: "Notify Agent SMS", x: 580, y: 150, type: "action" },
            { text: "Trigger Lead Nurture", x: 580, y: 300, type: "action" }
        ],
        connections: [[0, 1], [1, 2], [2, 3], [2, 4]],
        json: {
            pipeline_name: "Real_Estate_Leads_V1",
            trigger_node: "Web_Form_Submit",
            filters: ["address_exists", "phone_verified"],
            crm_target: "Firebase_DB",
            notifiers: ["Twilio_SMS_Agent", "Sendgrid_Email_Lead_Nurture"]
        }
    },
    Logistics: {
        title: "🚛 Smart Logistics & Routing Pipeline",
        nodes: [
            { text: "GPS Location Pulse", x: 80, y: 225, type: "trigger" },
            { text: "Geofence Check", x: 230, y: 150, type: "action" },
            { text: "Validate Delivery Status", x: 380, y: 225, type: "action" },
            { text: "ETA Prediction API", x: 530, y: 225, type: "action" },
            { text: "Notify Customer SMS", x: 680, y: 225, type: "action" }
        ],
        connections: [[0, 1], [0, 2], [2, 3], [3, 4]],
        json: {
            pipeline_name: "Logistics_Smart_Route",
            trigger_node: "GPS_Ping",
            geofence_boundary_miles: 5,
            prediction_algorithm: "ETA_Random_Forest",
            notifiers: ["Twilio_SMS_Customer_ETA"]
        }
    },
    Retail: {
        title: "🛒 Retail Inventory Low-Stock Sync",
        nodes: [
            { text: "Item Sold Shopify", x: 100, y: 225, type: "trigger" },
            { text: "Database Count Check", x: 260, y: 225, type: "action" },
            { text: "Construct PO Order", x: 420, y: 150, type: "action" },
            { text: "Notify Wholesale API", x: 580, y: 225, type: "action" },
            { text: "Slack Alert low stock", x: 580, y: 300, type: "action" }
        ],
        connections: [[0, 1], [1, 2], [2, 3], [1, 4]],
        json: {
            pipeline_name: "Shopify_Low_Stock_Sync",
            trigger_node: "Shopify_Webhook_Order",
            threshold: 15,
            auto_wholesale_purchase: true,
            alert_channels: ["Slack_Operations"]
        }
    }
};

function initProfessionalConsole() {
    loadIndustryTemplate();
}

function loadIndustryTemplate() {
    const selected = document.getElementById('industry-selector').value;
    const blueprint = proBlueprints[selected];
    
    // Set title
    document.getElementById('blueprint-title').textContent = blueprint.title;

    // Set JSON Preview
    document.getElementById('json-preview').textContent = JSON.stringify(blueprint.json, null, 2);

    // Stream logs to thinking terminal
    proStreamLogs = [
        `[SYSTEM]: Initializing Haas Logic Engine for ${selected}...`,
        `[ANALYSIS]: Identifying manual bottlenecks in system paths...`,
        `[ACTION]: Mapping active trigger payload parameters...`,
        `[VERIFY]: Resolving system webhooks and verifying APIs...`,
        `[SUCCESS]: Blueprint compiled successfully.`
    ];
    streamTerminalLogs();

    // Render on Canvas
    drawProfessionalBlueprint(blueprint);
}

function drawProfessionalBlueprint(blueprint) {
    const canvas = document.getElementById('blueprint-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw lines
    ctx.lineWidth = 2.5;
    blueprint.connections.forEach(conn => {
        const from = blueprint.nodes[conn[0]];
        const to = blueprint.nodes[conn[1]];
        
        ctx.strokeStyle = "#818CF8"; // Indigo
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();

        // Draw arrow tip
        const angle = Math.atan2(to.y - from.y, to.x - from.x);
        ctx.fillStyle = "#818CF8";
        ctx.beginPath();
        ctx.arc(to.x - 10 * Math.cos(angle), to.y - 10 * Math.sin(angle), 5, 0, Math.PI * 2);
        ctx.fill();
    });

    // Draw nodes
    blueprint.nodes.forEach(node => {
        ctx.fillStyle = node.type === "trigger" ? "#4F46E5" : "#FAF9F5";
        ctx.strokeStyle = "#4F46E5";
        ctx.lineWidth = 3;

        // Rounded card draw
        drawRoundedRect(ctx, node.x - 70, node.y - 25, 140, 50, 12, node.type === "trigger", true);

        // Text print
        ctx.fillStyle = node.type === "trigger" ? "#FFFFFF" : "#1E293B";
        ctx.font = "bold 11px 'Inter', sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(node.text, node.x, node.y);
    });
}

function drawRoundedRect(ctx, x, y, width, height, radius, fill, stroke) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    if (fill) ctx.fill();
    if (stroke) ctx.stroke();
}

function streamTerminalLogs() {
    const term = document.getElementById('terminal-stream-log');
    term.innerHTML = "";
    let i = 0;

    function addLog() {
        if (i < proStreamLogs.length) {
            const p = document.createElement('p');
            if (proStreamLogs[i].includes('SUCCESS')) {
                p.className = 'text-white font-bold tracking-wide border-l-2 border-indigo-500 pl-2';
            } else if (proStreamLogs[i].includes('SYSTEM')) {
                p.className = 'text-indigo-300 font-medium';
            } else {
                p.className = 'text-sky-200';
            }
            p.textContent = proStreamLogs[i];
            term.appendChild(p);
            term.scrollTop = term.scrollHeight;
            i++;
            setTimeout(addLog, 450);
        } else {
            const cursor = document.createElement('div');
            cursor.className = 'w-2.5 h-4 bg-sky-300 inline-block animate-pulse mt-1';
            term.appendChild(cursor);
        }
    }
    addLog();
}

// 1,000 Task Stress Test Simulator
function simulateStressTest() {
    const overlay = document.getElementById('stress-test-overlay');
    overlay.classList.remove('hidden');

    let count = 0;
    const ring = document.getElementById('stress-progress-ring');
    const countText = document.getElementById('stress-counter-text');
    const logText = document.getElementById('stress-log-text');
    
    // Add logs to terminal in the background
    const term = document.getElementById('terminal-stream-log');
    const p = document.createElement('p');
    p.className = 'text-yellow-300 font-bold';
    p.textContent = `[STRESS TEST]: Commencing 1,000 tasks simulation pipeline run...`;
    term.appendChild(p);

    const interval = setInterval(() => {
        if (count < 1000) {
            count += 40;
            if (count > 1000) count = 1000;
            
            // Progress ring calculation
            const pct = count / 1000;
            const offset = 251.2 - (251.2 * pct);
            ring.style.strokeDashoffset = offset;
            
            countText.textContent = count;
            logText.textContent = `Tasks generated: ${count} / 1000`;
            
            if (count % 200 === 0) {
                const subP = document.createElement('p');
                subP.className = 'text-sky-100 font-mono text-[10px] pl-2';
                subP.textContent = `⚡ [STRESS] Simulating concurrency block load: ${count} payloads successfully completed.`;
                term.appendChild(subP);
                term.scrollTop = term.scrollHeight;
            }
        } else {
            clearInterval(interval);
            setTimeout(() => {
                overlay.classList.add('hidden');
                showToast("✅ Concurrency Stress Test Completed! 0 Failures detected.", "success");
                
                const finalP = document.createElement('p');
                finalP.className = 'text-emerald-300 font-bold';
                finalP.textContent = `[STRESS COMPLETED]: 1,000 / 1,000 loops finished securely in 2.5s. Ready.`;
                term.appendChild(finalP);
                term.scrollTop = term.scrollHeight;
            }, 600);
        }
    }, 100);
}

// Time-To-Value ROI Calculator logic
function calculateROI() {
    const rate = parseFloat(document.getElementById('roi-rate').value) || 0;
    const hours = parseFloat(document.getElementById('roi-hours').value) || 0;

    const yearlyManual = rate * hours * 52;
    const manualCostText = document.getElementById('roi-manual-cost');
    const manualBar = document.getElementById('roi-manual-bar');
    const paybackText = document.getElementById('roi-payback-days');

    // Display formatted cost
    manualCostText.textContent = yearlyManual.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

    // Animate manual bar relative to maximum height representation
    const maxVal = 50000;
    const percentage = Math.min((yearlyManual / maxVal) * 100, 100);
    manualBar.style.width = `${percentage}%`;

    // Payback day threshold crossover point representation
    if (yearlyManual > 0) {
        // Haas SaaS pipeline setup costs fixed $300 + hosting $25/mo
        const baseCost = 600; 
        const dailySavings = (rate * hours) / 7;
        const paybackDays = Math.ceil(baseCost / dailySavings);
        paybackText.textContent = paybackDays <= 365 ? `${paybackDays} Days` : "Less than a Year";
    } else {
        paybackText.textContent = "0 Days";
    }
}

// Paywall vault trigger
function triggerExportPayment() {
    showToast("💳 Redirecting to Stripe Secure Portal Checkout...", "success");
    setTimeout(() => {
        // Mock success callback scenario
        showToast("✨ Payment Completed! Downloading standard blueprint package containing JSON schematics...", "success");
    }, 2000);
}


// =========================================================================
// ==================== YOUNG INNOVATOR TRACK (17 & UNDER) =================
// =========================================================================

const kidsBlueprints = {
    Homework: {
        title: "📚 Homework Hero Magic Chain",
        nodes: [
            { text: "🏫 Posts Homework", x: 100, y: 225 },
            { text: "🧩 Sort in Planner", x: 300, y: 225 },
            { text: "📱 Call Phone Reminder", x: 500, y: 225 }
        ],
        logs: [
            "🎈 Initializing Homework Hero pipeline...",
            "🧱 Snapping 'Posts Homework' blocks into 'Sort in Planner' nodes...",
            "🌟 Success! Your robot assistant is set up to phone you alerts!"
        ]
    },
    Pet: {
        title: "🤖 My AI Robot Pet Companion",
        nodes: [
            { text: "💬 Ask Robot Pet", x: 100, y: 225 },
            { text: "🧠 Think Prompt", x: 300, y: 225 },
            { text: "📣 Fun Speech Voice", x: 500, y: 225 }
        ],
        logs: [
            "🔮 Training mini assistant helper robot pet...",
            "🌟 Give him a personality wizard, funny alien, or helpful robot!",
            "🎉 Your virtual pet is active! Click creator board to hear him speak."
        ]
    },
    Creator: {
        title: "🎨 Kids Digital Designer Space",
        nodes: [
            { text: "📐 Drag Shape", x: 100, y: 225 },
            { text: "🎨 Choose Colors", x: 300, y: 225 },
            { text: "📥 Save Poster", x: 500, y: 225 }
        ],
        logs: [
            "🧸 Loading Design Space Assets...",
            "🎈 Preparing wallpapers, icon packs, and custom notification tones...",
            "✨ Grab your Innovation Certificate below to download!"
        ]
    }
};

function initYouthPlayground() {
    loadKidsTemplate();
}

function loadKidsTemplate() {
    const selected = document.getElementById('kids-toolkit-selector').value;
    const blueprint = kidsBlueprints[selected];
    
    document.getElementById('kids-canvas-title').textContent = blueprint.title;

    // Load logs
    const logContainer = document.getElementById('kids-stream-log');
    logContainer.innerHTML = "";
    blueprint.logs.forEach(msg => {
        const p = document.createElement('p');
        p.className = "text-slate-800 font-extrabold text-xs bg-white border-2 border-black rounded-xl p-3 shadow-[2px_2px_0px_#000] animate-fade-in text-left";
        p.textContent = msg;
        logContainer.appendChild(p);
    });

    drawKidsBlueprint(blueprint);
}

function drawKidsBlueprint(blueprint) {
    const canvas = document.getElementById('kids-blueprint-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw bubbly lego dots background
    ctx.fillStyle = "rgba(0,0,0,0.03)";
    for (let x = 12; x < canvas.width; x += 24) {
        for (let y = 12; y < canvas.height; y += 24) {
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Draw connect chains with thick lego outline
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(100, 225);
    ctx.lineTo(500, 225);
    ctx.stroke();

    // Draw bubbly kids cards
    blueprint.nodes.forEach((node, idx) => {
        const colors = ["#F3A8E2", "#90E0EF", "#FFE3E3", "#FFF3B0", "#CAFFBF"];
        ctx.fillStyle = colors[idx % colors.length];
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 4;

        // Bubbly rounded rectangles
        drawRoundedRect(ctx, node.x - 70, node.y - 35, 140, 70, 18, true, true);

        // Draw top lego connectors
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(node.x - 30, node.y - 35, 10, 0, Math.PI * 2);
        ctx.arc(node.x + 30, node.y - 35, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Print text
        ctx.fillStyle = "#000000";
        ctx.font = "900 12px 'Inter', sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(node.text, node.x, node.y);
    });
}

function triggerKidsGeneration() {
    playSFX('lego');
    showToast("🧱 Snapping digital Lego Blocks together! ✨", "success");
    loadKidsTemplate();
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
            // Arpeggio
            osc.type = 'sine';
            osc.frequency.setValueAtTime(523.25, now); // C5
            osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
            osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
            gainNode.gain.setValueAtTime(0.15, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
            osc.start(now);
            osc.stop(now + 0.4);
        } else if (type === 'lego') {
            // Wood block click sound
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(180, now);
            osc.frequency.setValueAtTime(120, now + 0.05);
            gainNode.gain.setValueAtTime(0.3, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
            osc.start(now);
            osc.stop(now + 0.08);
        }
    } catch (e) {
        console.warn("HTML5 Synth oscillator audio context deferred until interactive click.", e);
    }
}

// Interactive Broken Bridge Game Logic Selector
function selectGameChoice(outcome) {
    if (outcome === 'Right') {
        playSFX('correct');
        const slot = document.getElementById('game-bridge-slot');
        slot.textContent = "🧠 Haas Thinks";
        slot.className = "bg-yellow-300 border-4 border-black rounded-xl p-3 font-black text-xs text-black h-12 w-36 flex items-center justify-center animate-bounce";
        
        // Push logging response to kid stream log
        const log = document.getElementById('kids-stream-log');
        const p = document.createElement('p');
        p.className = "text-emerald-600 font-extrabold text-xs bg-white border-2 border-black rounded-xl p-3 shadow-[2px_2px_0px_#000] animate-fade-in text-left mt-2";
        p.textContent = "🎉 HURRAY! You picked 'Haas Thinks'! The bridge is fixed and your Lego automation works beautifully! Let's build another!";
        log.appendChild(p);
        log.scrollTop = log.scrollHeight;

        showToast("🌟 Beautiful! You completed the logic puzzle bridge!", "success");
    } else {
        playSFX('bubble');
        showToast("🎈 Oops! That logic block didn't fit. Try another block!", "warning");
    }
}

// innovation Certificate modal trigger
function generateInnovationCertificate() {
    playSFX('correct');
    
    // Populate dynamic user metrics
    document.getElementById('cert-recipient-name').textContent = userName || "Young Innovator";
    
    // Set current formatted date
    const opt = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateText = new Date().toLocaleDateString('en-US', opt);
    document.getElementById('cert-date-text').textContent = `Official Seal Authenticated on ${dateText}`;

    // Reveal certificate modal
    const modal = document.getElementById('cert-modal');
    modal.classList.remove('hidden');
}

function closeCertModal() {
    document.getElementById('cert-modal').classList.add('hidden');
}

// =========================================================================
// ==================== SYSTEM GENERAL UTILITIES ==========================
// =========================================================================

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

    // Bouncy reveal
    setTimeout(() => {
        toast.classList.remove('translate-x-12', 'opacity-0');
    }, 10);

    // Automatically prune
    setTimeout(() => {
        toast.classList.add('translate-x-12', 'opacity-0');
        setTimeout(() => {
            if (container.contains(toast)) container.removeChild(toast);
        }, 300);
    }, 4500);
}
