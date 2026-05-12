// Haas Playground Client Controller - Hoosier AI Automations

let currentOnboardingStep = 1;
let isAdult = true;
let isWatermarked = true;
let deferredPrompt = null;
let currentRole = "Founder";
let currentIntent = "Sandpit";

// Standard blueprint node configurations
const adultNodes = [
    { x: 80, y: 150, title: "Trigger: Form Submit", desc: "Connect: Web 3 Forms API", type: "trigger", color: "#6366F1" },
    { x: 300, y: 150, title: "Action: Haas Parser", desc: "Model: Deepmind Pro AI", type: "process", color: "#EC4899" },
    { x: 520, y: 150, title: "Database: Save Lead", desc: "Service: Airtable API Secure", type: "storage", color: "#10B981" },
    { x: 520, y: 300, title: "Dispatch: SMS Alerts", desc: "Provider: Twilio Dispatcher", type: "action", color: "#F59E0B" }
];

const kidsNodes = [
    { x: 100, y: 180, title: "Step 1: Start My Game", desc: "Action: Press Play", type: "trigger", color: "#3B82F6" },
    { x: 340, y: 180, title: "Step 2: Connect Apps", desc: "Action: Share Score", type: "process", color: "#F43F5E" },
    { x: 580, y: 180, title: "Step 3: Win Prize!", desc: "Action: Learning Star unlocked", type: "reward", color: "#10B981" }
];

document.addEventListener("DOMContentLoaded", () => {
    // 1. PWA Service Worker Registration
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('[PWA] Service Worker Registered!', reg))
            .catch(err => console.warn('[PWA] Service Worker Failed!', err));
    }

    // 2. Capture native PWA Install prompt
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        const pwaBanner = document.getElementById('pwa-install-banner');
        if (pwaBanner) pwaBanner.classList.remove('hidden');
    });

    document.getElementById('pwa-dismiss')?.addEventListener('click', () => {
        document.getElementById('pwa-install-banner')?.classList.add('hidden');
    });

    document.getElementById('pwa-install-btn')?.addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`[PWA] User choice: ${outcome}`);
            deferredPrompt = null;
            document.getElementById('pwa-install-banner')?.classList.add('hidden');
        }
    });

    // 3. Setup Age Slider Display
    const ageSlider = document.getElementById('user-age-slider');
    const ageDisplay = document.getElementById('age-display');
    if (ageSlider && ageDisplay) {
        ageSlider.addEventListener('input', (e) => {
            const age = e.target.value;
            ageDisplay.innerText = `${age} Years`;
            if (age >= 18) {
                ageDisplay.className = "bg-indigo-600 text-white font-extrabold text-xs px-3 py-1 rounded-full border border-indigo-500 shadow shadow-indigo-100";
            } else {
                ageDisplay.className = "bg-pink-500 text-white font-extrabold text-xs px-3 py-1 rounded-full border border-pink-400 shadow shadow-pink-100";
            }
        });
    }

    // 4. Ripple Landing Animation Trigger (if param passed)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('transition') === 'ripple') {
        playRippleEntry();
    }

    // 5. Check if user already completed onboarding
    const cachedAge = localStorage.getItem('haas_playground_age');
    const cachedName = localStorage.getItem('haas_playground_name');
    if (cachedAge && cachedName) {
        isAdult = parseInt(cachedAge) >= 18;
        currentRole = localStorage.getItem('haas_playground_role') || "Founder";
        currentIntent = localStorage.getItem('haas_playground_intent') || "Sandpit";
        document.getElementById('onboarding-stage').classList.add('hidden');
        loadConsoleView();
    }

    // 6. Security Locks (Disable context menu, standard copy/paste and F12 inspect triggers)
    document.addEventListener('contextmenu', (e) => {
        if (document.getElementById('playground-dashboard').offsetParent !== null) {
            e.preventDefault();
            showToast("🔒 Security active. Export blueprint to download clean logic files!", "warning");
        }
    });

    document.addEventListener('keydown', (e) => {
        if (document.getElementById('playground-dashboard').offsetParent !== null) {
            // Block F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+U
            if (
                e.key === 'F12' ||
                (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) ||
                (e.ctrlKey && (e.key === 'U' || e.key === 'u'))
            ) {
                e.preventDefault();
                showToast("🔒 Inspect Element protected. Download/Export clean blueprints to view raw files!", "warning");
            }
        }
    });

    // 7. Check mock payment simulation
    if (urlParams.get('payment_success') === 'true') {
        isWatermarked = false;
        setTimeout(() => {
            showToast("💳 Stripe transaction approved! Custom watermarks removed.", "success");
            triggerBlueprintGeneration();
        }, 1200);
    }
});

// =========================================================================
// ==================== ONBOARDING WIZARD NAVIGATION =======================
// =========================================================================

function nextStep(step) {
    document.getElementById(`onboarding-step-${currentOnboardingStep}`).classList.add('hidden');
    document.getElementById(`onboarding-step-${step}`).classList.remove('hidden');
    currentOnboardingStep = step;

    // Update Progress Indicators
    const progressBar = document.getElementById('progress-bar-fill');
    const stepCounter = document.getElementById('step-counter');
    if (progressBar && stepCounter) {
        const percent = (step / 3) * 100;
        progressBar.style.width = `${percent}%`;
        stepCounter.innerText = `Step ${step} of 3`;
    }
}

function completeOnboarding() {
    const nameInput = document.getElementById('user-name-input');
    const name = nameInput ? nameInput.value.trim() : "Guest";
    const age = parseInt(document.getElementById('user-age-slider').value);

    if (!name) {
        showToast("⚠️ Please enter your name to complete onboarding.", "error");
        return;
    }

    // Save Selection
    const selectedRole = document.querySelector('input[name="user_role"]:checked')?.value || "Founder";
    const selectedIntent = document.querySelector('input[name="user_intent"]:checked')?.value || "Sandpit";

    localStorage.setItem('haas_playground_name', name);
    localStorage.setItem('haas_playground_age', age);
    localStorage.setItem('haas_playground_role', selectedRole);
    localStorage.setItem('haas_playground_intent', selectedIntent);

    isAdult = age >= 18;
    currentRole = selectedRole;
    currentIntent = selectedIntent;

    showToast(`✨ Welcome to Haas Playground, ${name}!`, "success");

    // Fade onboarding out and dashboard in
    const onboarding = document.getElementById('onboarding-stage');
    onboarding.classList.add('animate-fade-out');
    setTimeout(() => {
        onboarding.classList.add('hidden');
        loadConsoleView();
    }, 400);
}

// =========================================================================
// ===================== CONSOLE RENDERING ENGINE =========================
// =========================================================================

function loadConsoleView() {
    const dashboard = document.getElementById('playground-dashboard');
    dashboard.classList.remove('hidden');
    dashboard.classList.add('animate-fade-in');

    if (isAdult) {
        document.getElementById('professional-dashboard').classList.remove('hidden');
        triggerBlueprintGeneration();
    } else {
        document.getElementById('young-innovator-dashboard').classList.remove('hidden');
        triggerBlueprintGeneration();
    }
}

function drawBlueprint(canvasId, nodes, watermarked) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Draw sleek subtle alignment grids
    ctx.strokeStyle = "rgba(99, 102, 241, 0.05)";
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 25) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 25) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }

    // 2. Draw connector curves
    ctx.strokeStyle = "rgba(165, 180, 252, 0.6)";
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.lineDashOffset = 0;

    for (let i = 0; i < nodes.length - 1; i++) {
        const from = nodes[i];
        const to = nodes[i + 1];
        
        ctx.beginPath();
        ctx.moveTo(from.x + 180, from.y + 35);
        ctx.bezierCurveTo(
            from.x + 250, from.y + 35,
            to.x - 70, to.y + 35,
            to.x, to.y + 35
        );
        ctx.stroke();
    }
    ctx.setLineDash([]); // Reset line dash

    // 3. Draw Nodes (Glassmorphic look)
    nodes.forEach(node => {
        // Drop shadow
        ctx.shadowColor = "rgba(99, 102, 241, 0.1)";
        ctx.shadowBlur = 15;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 8;

        // Container card
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.roundRect(node.x, node.y, 180, 70, 16);
        ctx.fill();

        // Border colored highlight
        ctx.shadowColor = "transparent"; // Reset shadow for outline
        ctx.strokeStyle = node.color;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Color tag indicator pill
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.roundRect(node.x + 12, node.y + 12, 12, 12, 4);
        ctx.fill();

        // Node Title text
        ctx.fillStyle = "#0F172A"; // Slate 900
        ctx.font = "bold 11px Inter, sans-serif";
        ctx.fillText(node.title, node.x + 32, node.y + 22);

        // Node description text
        ctx.fillStyle = "#64748B"; // Slate 500
        ctx.font = "500 9px Inter, sans-serif";
        ctx.fillText(node.desc, node.x + 12, node.y + 48);

        // Service outline tags (if any)
        ctx.fillStyle = "rgba(99, 102, 241, 0.08)";
        ctx.beginPath();
        ctx.roundRect(node.x + 12, node.y + 54, 156, 3, 2);
        ctx.fill();
    });

    // 4. Visual watermark overlay (if locked)
    if (watermarked) {
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(-Math.PI / 12);
        ctx.font = "black 14px Inter, sans-serif";
        ctx.fillStyle = "rgba(100, 116, 139, 0.16)";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        
        // Render simple tile watermark patterns
        const text = isAdult ? "HAAS PLAYGROUND • PRE-PURCHASED DEMO" : "HAAS LEARNING TRACK • EDUCATION PREVIEW";
        for (let i = -3; i <= 3; i++) {
            ctx.fillText(text, 0, i * 80);
        }
        ctx.restore();
    }
}

// =========================================================================
// =================== DYNAMIC TERMINAL LOG STREAM =========================
// =========================================================================

let terminalInterval = null;

function triggerBlueprintGeneration() {
    const streamContainer = document.getElementById(isAdult ? 'terminal-stream-log' : 'kids-stream-log');
    if (!streamContainer) return;
    
    // Clear old logs and drawing
    streamContainer.innerHTML = "";
    
    const logs = isAdult ? [
        "🤖 [Haas Studio] Initializing engineering pipeline compilation...",
        "🔌 [Haas Studio] Fetching custom APIs for role: " + currentRole + "...",
        "⚙️ [Haas Studio] Creating system routing structures for: " + currentIntent + "...",
        "🔒 [Haas Studio] Securing isolated runtime context...",
        "📡 [Haas Studio] Initializing direct Stripe transaction check checks...",
        "💾 [Haas Studio] Embedding blueprint vectors in memory DB...",
        "🏆 [Haas Studio] Blueprint compilation completed successfully! Ready for export."
    ] : [
        "🎈 [Haas Kid] Welcome! Let's build your cool learning diagram!...",
        "🎒 [Haas Kid] Loading custom stars and templates...",
        "🛡️ [Haas Kid] Safety filters are 100% active and running!...",
        "✨ [Haas Kid] Coloring your blocks in blue and green...",
        "🧩 [Haas Kid] Fitting block paths together...",
        "🌈 [Haas Kid] Everything looks super fun! Save your drawing below!"
    ];

    let logIndex = 0;
    
    if (terminalInterval) clearInterval(terminalInterval);

    // Dynamic stream sequence
    terminalInterval = setInterval(() => {
        if (logIndex < logs.length) {
            const line = document.createElement('p');
            line.className = isAdult ? "text-emerald-400" : "text-indigo-600";
            line.innerText = logs[logIndex];
            streamContainer.appendChild(line);
            
            // Auto scroll container
            streamContainer.scrollTop = streamContainer.scrollHeight;
            logIndex++;
            
            // Draw progressively
            const currentNodes = isAdult ? adultNodes.slice(0, Math.ceil((logIndex / logs.length) * adultNodes.length)) : kidsNodes;
            drawBlueprint(isAdult ? 'blueprint-canvas' : 'kids-blueprint-canvas', currentNodes, isWatermarked);
        } else {
            clearInterval(terminalInterval);
            // Append blink cursor in terminal
            if (isAdult) {
                const cursor = document.createElement('div');
                cursor.className = "w-2.5 h-4 bg-emerald-400 inline-block animate-pulse mt-2";
                streamContainer.appendChild(cursor);
            }
        }
    }, 700);
}

// =========================================================================
// ================= MONETIZATION & SIMULATION CHECKS =======================
// =========================================================================

function triggerExportPayment() {
    showToast("💳 Creating secure Stripe checkout session...", "info");
    
    // Simulate redirecting to Stripe Checkout. We pass payment_success parameter to represent completion
    setTimeout(() => {
        window.location.href = window.location.pathname + "?payment_success=true";
    }, 1500);
}

function downloadKidsBlueprint() {
    showToast("🎨 Preparing your fun diagram design. Saved to downloads!", "success");
    simulateFileDownload("haas-kids-diagram.json", JSON.stringify(kidsNodes, null, 2));
}

function simulateFileDownload(filename, text) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// =========================================================================
// ================= WATER RIPPLE TRANSITION LOGIC =========================
// =========================================================================

function playRippleEntry() {
    const canvas = document.getElementById('ripple-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    canvas.classList.remove('opacity-0');
    canvas.classList.add('opacity-100');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let radius = 0;
    const maxRadius = Math.max(canvas.width, canvas.height) * 1.2;
    const originX = canvas.width / 2;
    const originY = canvas.height / 2;

    function animate() {
        if (radius < maxRadius) {
            radius += 28;
            ctx.fillStyle = `rgba(99, 102, 241, ${Math.max(0, 1 - (radius / maxRadius))})`;
            ctx.beginPath();
            ctx.arc(originX, originY, radius, 0, Math.PI * 2);
            ctx.fill();
            requestAnimationFrame(animate);
        } else {
            canvas.classList.add('opacity-0');
            setTimeout(() => {
                canvas.classList.add('hidden');
            }, 300);
        }
    }
    animate();
}

function triggerRippleExit(targetUrl, clickX, clickY) {
    const canvas = document.getElementById('ripple-canvas');
    if (!canvas) {
        window.location.href = targetUrl;
        return;
    }
    const ctx = canvas.getContext('2d');
    
    canvas.classList.remove('hidden', 'opacity-0');
    canvas.classList.add('opacity-100');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let radius = 0;
    const maxRadius = Math.max(canvas.width, canvas.height) * 1.5;

    function animate() {
        if (radius < maxRadius) {
            radius += 32;
            
            // Clean backdrop clear
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Expanding radial blur gradients representing ripples
            const gradient = ctx.createRadialGradient(clickX, clickY, radius * 0.1, clickX, clickY, radius);
            gradient.addColorStop(0, 'rgba(99, 102, 241, 0.95)');
            gradient.addColorStop(0.5, 'rgba(99, 102, 241, 0.7)');
            gradient.addColorStop(1, 'rgba(250, 249, 245, 0)');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(clickX, clickY, radius, 0, Math.PI * 2);
            ctx.fill();
            
            requestAnimationFrame(animate);
        } else {
            window.location.href = targetUrl;
        }
    }
    animate();
}

// =========================================================================
// ==================== TOAST COMPONENT ALERT SYSTEM =======================
// =========================================================================

function showToast(message, type = "info") {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `glass-panel px-6 py-4 rounded-2xl border flex items-center gap-3 shadow-xl pointer-events-auto transform transition duration-500 translate-x-12 opacity-0 max-w-sm`;
    
    let icon = "🔔";
    if (type === "success") {
        toast.classList.add('border-emerald-100', 'bg-emerald-50/90');
        icon = "✅";
    } else if (type === "warning") {
        toast.classList.add('border-amber-100', 'bg-amber-50/90');
        icon = "🔒";
    } else if (type === "error") {
        toast.classList.add('border-rose-100', 'bg-rose-50/90');
        icon = "⚠️";
    } else {
        toast.classList.add('border-indigo-100', 'bg-indigo-50/90');
    }

    toast.innerHTML = `
        <span class="text-xl">${icon}</span>
        <div class="text-left">
            <p class="font-bold text-slate-800 text-xs uppercase tracking-wide">${type === "info" ? "Haas Notification" : type}</p>
            <p class="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">${message}</p>
        </div>
    `;

    container.appendChild(toast);

    // Slide in
    setTimeout(() => {
        toast.classList.remove('translate-x-12', 'opacity-0');
    }, 10);

    // Slide out and remove
    setTimeout(() => {
        toast.classList.add('translate-x-12', 'opacity-0');
        setTimeout(() => {
            toast.remove();
        }, 500);
    }, 4500);
}
