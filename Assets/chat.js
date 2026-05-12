document.addEventListener('DOMContentLoaded', () => {
    const chatBubble = document.getElementById('chat-bubble');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    const chatInput = document.getElementById('chat-input');
    const chatSubmit = document.getElementById('chat-submit');
    const chatMessages = document.getElementById('chat-messages');

    if (!chatBubble || !chatWindow) return;

    let messages = [];

    chatBubble.addEventListener('click', () => {
        const isOpen = chatWindow.classList.toggle('open');
        chatWindow.style.display = isOpen ? 'flex' : 'none';
        chatWindow.style.opacity = isOpen ? '1' : '0';
        if (isOpen) chatInput.focus();
    });

    chatClose.addEventListener('click', () => {
        chatWindow.classList.remove('open');
        chatWindow.style.display = 'none';
        chatWindow.style.opacity = '0';
    });

    function appendMessage(role, content) {
        const msgDiv = document.createElement('div');
        msgDiv.className = role === 'user' 
            ? 'bg-indigo-600 p-3.5 rounded-[1.25rem] text-sm max-w-[85%] self-end ml-auto text-white shadow-md shadow-indigo-100' 
            : 'bg-stone-100 p-3.5 rounded-[1.25rem] text-sm max-w-[85%] self-start mr-auto text-slate-800 border border-stone-200/40';
        msgDiv.textContent = content;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    async function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;

        appendMessage('user', message);
        messages.push({ role: "user", content: message });
        chatInput.value = '';

        // Typing indicator placeholder
        const typingDiv = document.createElement('div');
        typingDiv.className = 'text-slate-400 text-xs italic ml-2 mt-1';
        typingDiv.textContent = 'Hoosier AI is typing...';
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        try {
            const response = await fetch('/.netlify/functions/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages })
            });
            
            const data = await response.json();
            chatMessages.removeChild(typingDiv);
            
            if (response.ok && data.reply) {
                appendMessage('bot', data.reply);
                messages.push({ role: "assistant", content: data.reply });
            } else {
                appendMessage('bot', "Sorry, I'm having trouble connecting right now. Please email nate@hoosieraiautomations.com directly.");
            }
        } catch (error) {
            console.error("Chat Error:", error);
            if (chatMessages.contains(typingDiv)) chatMessages.removeChild(typingDiv);
            appendMessage('bot', "Connection error. Please try again later.");
        }
    }

    chatSubmit.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
});

// =========================================================================
// ================ GLOBAL NAV WATER RIPPLE TRANSITION =====================
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
    // Intercept clicks to any link pointing to the playground
    const navCtas = document.querySelectorAll('a[href="playground.html"], .nav-cta');
    navCtas.forEach(cta => {
        cta.addEventListener('click', (e) => {
            e.preventDefault();
            const targetUrl = cta.getAttribute('href') || 'playground.html';
            
            // Trigger the custom organic ripple exit transition
            createGlobalRippleAndNavigate(targetUrl, e.clientX, e.clientY);
        });
    });
});

function createGlobalRippleAndNavigate(targetUrl, clickX, clickY) {
    let canvas = document.getElementById('global-ripple-canvas');
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.id = 'global-ripple-canvas';
        canvas.style.position = 'fixed';
        canvas.style.inset = '0';
        canvas.style.zIndex = '1000';
        canvas.style.pointerEvents = 'none';
        document.body.appendChild(canvas);
    }
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let radius = 0;
    const maxRadius = Math.max(canvas.width, canvas.height) * 1.5;

    function animate() {
        if (radius < maxRadius) {
            radius += 36;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Circular organic wash expanding smoothly from coordinates
            const gradient = ctx.createRadialGradient(clickX, clickY, radius * 0.05, clickX, clickY, radius);
            gradient.addColorStop(0, 'rgba(99, 102, 241, 0.98)');
            gradient.addColorStop(0.4, 'rgba(99, 102, 241, 0.85)');
            gradient.addColorStop(1, 'rgba(250, 249, 245, 0)');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(clickX, clickY, radius, 0, Math.PI * 2);
            ctx.fill();
            
            requestAnimationFrame(animate);
        } else {
            window.location.href = targetUrl + "?transition=ripple";
        }
    }
    animate();
}

