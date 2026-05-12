# Hoosier AI Automations - Full Synchronized Codebase

## File: Assets/index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hoosier AI Automations | Software Simplified. Enterprise Elevated.</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet">
    <link rel="icon" type="image/png" href="1330.png">
    <link rel="stylesheet" href="styles.css">
    <style>
        @keyframes pulse-star {
            0%, 100% { opacity: 0.3; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.2); }
        }
        .star-pulse {
            transform-origin: 50px 91.5px;
            animation: pulse-star 2s infinite ease-in-out;
        }
    </style>
</head>
<body class="relative overflow-x-hidden bg-[#FAF9F5] text-slate-950 limestone-pattern min-h-screen">

    <!-- Glassmorphism Navbar -->
    <nav class="fixed w-full z-50 bg-white/70 backdrop-blur-md border-b border-stone-200/40 px-6 py-4 shadow-sm shadow-slate-100/50">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <a href="index.html" class="flex items-center space-x-3 text-slate-900 no-underline hover:opacity-90 transition">
                <img src="1330.png" alt="Hoosier AI Automations Logo" class="h-10 w-auto">
                <span class="text-xl font-black tracking-tighter uppercase italic text-slate-900">Hoosier AI Automations</span>
            </a>
            <div class="hidden md:flex space-x-8 items-center">
                <a href="index.html" class="nav-link text-indigo-600 font-bold">Home</a>
                <a href="promise.html" class="nav-link text-slate-600 hover:text-indigo-600 font-bold">Our Promise</a>
                <a href="pricing.html" class="nav-link text-slate-600 hover:text-indigo-600 font-bold">Pricing</a>
                <a href="portfolio.html" class="nav-link text-slate-600 hover:text-indigo-600 font-bold">Portfolio</a>
                <a href="hireus.html" class="nav-link text-slate-600 hover:text-indigo-600 font-bold">Hire Us</a>
                <a href="playground.html" class="nav-cta text-white font-bold">Open Playground</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section (Two-Column Layout with Founder's Vision Manifesto) -->
    <header class="pt-40 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-12 gap-12 items-stretch">
            
            <!-- Left Column: Copywriting -->
            <div class="lg:col-span-7 flex flex-col justify-center text-left">
                <span class="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-3 bg-indigo-50/80 px-3.5 py-1.5 rounded-full w-fit border border-indigo-100/50">Born in Bedford. Built for the World.</span>
                <h1 class="text-5xl md:text-7.5xl font-black mb-6 tracking-tight leading-[1.05] hero-text uppercase">
                    SOFTWARE SIMPLIFIED. <br><span class="font-normal italic text-indigo-600 text-4xl md:text-6xl">ENTERPRISE ELEVATED.</span>
                </h1>
                <p class="subtitle text-base md:text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed">
                    We build high-performance web platforms, native Android apps, strategic marketing campaigns, and seamless software integrations. Whether you're a Bedford, IN business or a national enterprise, we help entrepreneurs and 'mom and pop' shops take back their time. No confusing jargon—just friendly, handcrafted tools that save you and your employees time, money, and energy so you can focus on what matters: HUMAN to HUMAN interactions.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 mb-4 lg:mb-0">
                    <a href="hireus.html" class="btn-primary text-center">Let's Grab Coffee & Chat</a>
                    <a href="portfolio.html" class="btn-secondary text-center">See Our Projects</a>
                </div>
            </div>

            <!-- Right Column: Option 2 Manifesto Bento Container with Larger Photo -->
            <div class="lg:col-span-5 relative w-full limestone-card rounded-[2.5rem] flex flex-col overflow-hidden border border-stone-200/60 p-8 md:p-10 shadow-xl bg-white group justify-between">
                <!-- Grid decorative background -->
                <div class="absolute inset-0 opacity-[0.03] limestone-pattern z-0"></div>
                
                <div class="relative z-10 flex flex-col h-full justify-between">
                    <!-- Owner Photo & Manifesto Header Row -->
                    <div>
                        <div class="flex items-center space-x-5 mb-6">
                            <div class="relative w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden group-hover:scale-105 transition duration-300 flex-shrink-0">
                                <img src="owner.jpg" alt="Nathan Carey (Nate)" class="w-full h-full object-cover">
                            </div>
                            <div>
                                <span class="text-indigo-600 font-extrabold text-[10px] tracking-widest uppercase bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100/40">Founder's Vision</span>
                                <h3 class="text-xl font-black text-slate-900 uppercase tracking-tight mt-1.5">FOUNDER’S VISION</h3>
                                <p class="text-[9px] text-slate-400 font-bold uppercase tracking-widest leading-none mt-1">Software Simplified. Enterprise Elevated.</p>
                            </div>
                        </div>
                        
                        <!-- Vision Manifesto Text -->
                        <div class="text-slate-600 text-sm leading-relaxed space-y-4 font-medium">
                            <p>
                                I built Hoosier AI Automations LLC to take high-end tech out of Silicon Valley and bring it back to Indiana and into your local communities. My goal is straightforward: create 'extra sets of hands' that multiply your team's effort without expanding your payroll.
                            </p>
                            <p>
                                We focus on pure, fast code that bridges the gap between complex digital tools and your local operations. Every automation we deliver is a direct investment in the solid, efficient future of your business. Your local is my local—let’s build something solid together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- Limestone Trust Badges -->
    <div class="border-y border-stone-200/50 bg-white/40 backdrop-blur-sm py-8 px-6 shadow-sm">
        <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-xs md:text-sm font-bold tracking-wider uppercase text-slate-600">
            <div class="flex flex-col items-center"><span class="text-indigo-600 text-2xl block mb-1">✓</span> Official Indiana LLC</div>
            <div class="flex flex-col items-center"><span class="text-indigo-600 text-2xl block mb-1">✓</span> Locally Owned</div>
            <div class="flex flex-col items-center"><span class="text-indigo-600 text-2xl block mb-1">✓</span> Handcrafted Code</div>
            <div class="flex flex-col items-center"><span class="text-indigo-600 text-2xl block mb-1">✓</span> Zero Templates</div>
        </div>
    </div>

    <!-- Grayscale Selected Tech Ribbon -->
    <div class="py-12 border-b border-stone-200/50 max-w-7xl mx-auto px-6">
        <p class="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Our Selected Enterprise Stack</p>
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 hover:opacity-60 transition duration-300">
            <!-- GitHub Logo -->
            <div class="flex items-center space-x-2 grayscale">
                <svg class="w-6 h-6 text-slate-600" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clip-rule="evenodd"/></svg>
                <span class="font-extrabold text-sm tracking-tight text-slate-700">GitHub</span>
            </div>
            <!-- Netlify Logo -->
            <div class="flex items-center space-x-2 grayscale">
                <svg class="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 24 24"><path d="M11.97 2c-.14 0-.29.06-.39.16L1.83 11.9c-.21.2-.21.53 0 .73l1.8 1.78c.2.2.53.2.73 0l7.22-7.14V21.5c0 .28.22.5.5.5h2c.28 0 .5-.22.5-.5V7.27l7.22 7.14c.2.2.53.2.73 0l1.8-1.78c.21-.2.21-.53 0-.73L12.36 2.16c-.1-.1-.25-.16-.39-.16z"/></svg>
                <span class="font-extrabold text-sm tracking-tight text-slate-700">Netlify</span>
            </div>
            <!-- Tailwind CSS Logo -->
            <div class="flex items-center space-x-2 grayscale">
                <svg class="w-6 h-6 text-slate-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>
                <span class="font-extrabold text-sm tracking-tight text-slate-700">TailwindCSS</span>
            </div>
            <!-- React Logo -->
            <div class="flex items-center space-x-2 grayscale">
                <svg class="w-6 h-6 text-slate-600 animate-spin-slow" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zm-10-2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/></svg>
                <span class="font-extrabold text-sm tracking-tight text-slate-700">React</span>
            </div>
        </div>
    </div>

    <!-- Bento Box Grid Layout (Services Section) -->
    <section class="py-24 px-6 max-w-7xl mx-auto">
        <div class="text-center mb-16">
            <span class="text-indigo-600 font-bold uppercase tracking-widest text-xs">Our Services</span>
            <h2 class="text-4xl md:text-5xl font-black text-slate-900 mt-2">Built Solid. Styled Smart.</h2>
            <p class="text-slate-600 text-lg mt-4 max-w-2xl mx-auto">Like the legendary limestone of Lawrence County, we build code designed to stand the test of time.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            <!-- Bento Box 1: Custom Web Infrastructure (Double-wide) -->
            <div class="md:col-span-8 limestone-card p-8 md:p-12 rounded-[2rem] flex flex-col justify-between border border-stone-200/50 shadow-lg relative overflow-hidden group hover:border-indigo-200 transition duration-300">
                <div class="absolute -top-12 -right-12 w-48 h-48 bg-indigo-50/40 rounded-full blur-3xl group-hover:bg-indigo-100/50 transition"></div>
                <div>
                    <span class="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100/40">Premium Web</span>
                    <h3 class="text-3xl font-black mt-4 mb-4 text-slate-900">Custom Web Infrastructure</h3>
                    <p class="text-slate-600 text-base leading-relaxed max-w-xl">
                        A beautiful digital storefront custom-coded to load instantly and convert local Lawrence County families. We don't use WordPress or Wix templates. We write pure, high-performance HTML/JS that stays secure and dominates search results.
                    </p>
                </div>
                <div class="mt-8 flex flex-wrap gap-2.5">
                    <span class="bg-white px-3.5 py-1.5 rounded-full border border-stone-200/50 text-xs font-semibold text-slate-600 shadow-sm">Tailwind CSS</span>
                    <span class="bg-white px-3.5 py-1.5 rounded-full border border-stone-200/50 text-xs font-semibold text-slate-600 shadow-sm">SEO Structured</span>
                    <span class="bg-white px-3.5 py-1.5 rounded-full border border-stone-200/50 text-xs font-semibold text-slate-600 shadow-sm">Netlify Hosting</span>
                </div>
            </div>

            <!-- Bento Box 2: AI Assistants (Single-wide) -->
            <div class="md:col-span-4 limestone-card p-8 md:p-12 rounded-[2rem] flex flex-col justify-between border border-stone-200/50 shadow-lg relative overflow-hidden group hover:border-indigo-200 transition duration-300 bg-indigo-50/10">
                <div class="absolute -bottom-12 -right-12 w-32 h-32 bg-indigo-100/30 rounded-full blur-2xl"></div>
                <div>
                    <span class="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100/40">24/7 Support</span>
                    <h3 class="text-3xl font-black mt-4 mb-4 text-slate-900">AI Assistants</h3>
                    <p class="text-slate-600 text-base leading-relaxed">
                        Never miss a lead at 2:00 AM. We build custom-trained chat assistants that handle standard client inquiries, gather info, and book calls while you sleep.
                    </p>
                </div>
                <div class="mt-8">
                    <span class="bg-indigo-600 text-white font-extrabold text-xs tracking-wider uppercase px-4 py-2 rounded-full shadow-md shadow-indigo-100">Smart Lead Capture</span>
                </div>
            </div>

            <!-- Bento Box 3: Custom Mobile Apps (Single-wide) -->
            <div class="md:col-span-4 limestone-card p-8 md:p-12 rounded-[2rem] flex flex-col justify-between border border-stone-200/50 shadow-lg relative overflow-hidden group hover:border-amber-200 transition duration-300 bg-amber-50/10">
                <div class="absolute -bottom-12 -left-12 w-32 h-32 bg-amber-100/20 rounded-full blur-2xl"></div>
                <div>
                    <span class="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-100/40">Native Builds</span>
                    <h3 class="text-3xl font-black mt-4 mb-4 text-slate-900">Mobile Apps</h3>
                    <p class="text-slate-600 text-base leading-relaxed">
                        Native Android and iOS experiences built for field service operations. Integrate with payment hardware, work offline, and connect directly to server logic.
                    </p>
                </div>
                <div class="mt-8">
                    <span class="bg-slate-900 text-white font-extrabold text-xs tracking-wider uppercase px-4 py-2 rounded-full shadow-md">Stripe Integrated</span>
                </div>
            </div>

            <!-- Bento Box 4: Local Search Visibility (Double-wide) -->
            <div class="md:col-span-8 limestone-card p-8 md:p-12 rounded-[2rem] flex flex-col justify-between border border-stone-200/50 shadow-lg relative overflow-hidden group hover:border-indigo-200 transition duration-300">
                <div class="absolute -top-12 -left-12 w-48 h-48 bg-stone-100 rounded-full blur-3xl group-hover:bg-indigo-50/40 transition"></div>
                <div>
                    <span class="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100/40">Lawrence County SEO</span>
                    <h3 class="text-3xl font-black mt-4 mb-4 text-slate-900">Local Map Dominance</h3>
                    <p class="text-slate-600 text-base leading-relaxed max-w-xl">
                        When someone in Bedford or Mitchell searches for your services, you need to be first. We inject custom JSON-LD schemas, optimize metadata, and achieve flawless Google PageSpeed scores so you win the local maps pack.
                    </p>
                </div>
                <div class="mt-8 flex flex-wrap gap-2.5">
                    <span class="bg-white px-3.5 py-1.5 rounded-full border border-stone-200/50 text-xs font-semibold text-slate-600 shadow-sm">Google Schema</span>
                    <span class="bg-white px-3.5 py-1.5 rounded-full border border-stone-200/50 text-xs font-semibold text-slate-600 shadow-sm">Flawless Core Web Vitals</span>
                    <span class="bg-white px-3.5 py-1.5 rounded-full border border-stone-200/50 text-xs font-semibold text-slate-600 shadow-sm">Bedford Targeted</span>
                </div>
            </div>

            <!-- Bento Box 5: Start Your Free Business Efficiency Audit (Full-width 12-column) -->
            <div class="md:col-span-12 limestone-card p-10 md:p-16 rounded-[2.5rem] border-2 border-indigo-200 shadow-xl relative overflow-hidden group hover:border-indigo-400 transition duration-300 bg-white">
                <div class="absolute -top-12 -right-12 w-64 h-64 bg-indigo-50/45 rounded-full blur-3xl group-hover:bg-indigo-100/50 transition"></div>
                <div class="absolute -bottom-12 -left-12 w-64 h-64 bg-amber-50/45 rounded-full blur-3xl group-hover:bg-amber-100/45 transition"></div>
                
                <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div class="max-w-2xl text-left">
                        <span class="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100/40">Free Interactive Resource</span>
                        <h3 class="text-3xl md:text-4xl font-black mt-4 mb-4 text-slate-900 leading-none">Start Your Free Business Efficiency Audit</h3>
                        <p class="text-slate-600 text-sm md:text-base leading-relaxed">
                            Takes under 2 minutes. Reveal your team's weekly labor leakage points, rate staff friction, and unlock a customized step-by-step automation checklist delivered straight to your operations.
                        </p>
                    </div>
                    <div class="flex-shrink-0">
                        <a href="hireus.html" class="btn-primary py-4 px-10 text-sm uppercase tracking-widest font-black shadow-lg shadow-indigo-100 block text-center">Launch Efficiency Audit →</a>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- Promises and Pricing Bento Cards -->
    <section class="pb-12 px-6 max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12">
            <!-- Bento Box: Promise -->
            <div class="limestone-card p-12 rounded-[2rem] border border-stone-200/50 shadow-lg relative overflow-hidden flex flex-col justify-between group hover:border-indigo-100 transition duration-300">
                <div>
                    <h2 class="text-4xl font-black mb-6 text-slate-900">Our Pillars of Promise</h2>
                    <p class="text-slate-600 mb-8 text-lg leading-relaxed">We believe software should serve humans, not replace them. Our core commitment is to protect local staff burnout and digital carbon waste, while backing local community project goals.</p>
                </div>
                <a href="promise.html" class="text-indigo-600 font-extrabold hover:text-indigo-800 transition uppercase tracking-wider text-sm mt-4">Our Green Commitment →</a>
            </div>
            
            <!-- Bento Box: Pricing -->
            <div class="limestone-card p-12 rounded-[2rem] border border-stone-200/50 shadow-lg relative overflow-hidden flex flex-col justify-between group hover:border-indigo-100 transition duration-300">
                <div>
                    <h2 class="text-4xl font-black mb-6 text-slate-900">Simple, Honest Pricing</h2>
                    <p class="text-slate-600 mb-8 text-lg leading-relaxed">No hidden hosting fees, no monthly maintenance traps, and absolutely zero Silicon Valley tax. We quote transparently so you know exactly where your money goes.</p>
                </div>
                <a href="pricing.html" class="text-indigo-600 font-extrabold hover:text-indigo-800 transition uppercase tracking-wider text-sm mt-4">View Honest Pricing Plans →</a>
            </div>
        </div>
    </section>

    <!-- Option 1: Premium Meet the Founder Biography spotlight block (Large portrait frame) -->
    <section class="py-16 px-6 max-w-7xl mx-auto">
        <div class="limestone-card p-10 md:p-16 rounded-[2.5rem] border border-stone-200/60 shadow-xl relative overflow-hidden bg-white">
            <div class="absolute -top-12 -right-12 w-48 h-48 bg-indigo-50/40 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-12 -left-12 w-48 h-48 bg-amber-50/40 rounded-full blur-3xl"></div>
            
            <div class="relative z-10 grid md:grid-cols-12 gap-8 md:gap-16 items-center">
                <!-- Left Photo Column (Enlarged Photo Frame) -->
                <div class="md:col-span-5 flex justify-center">
                    <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] border-4 border-white shadow-2xl overflow-hidden rotate-[-2deg] hover:rotate-0 transition duration-500 flex-shrink-0">
                        <img src="owner.jpg" alt="Nathan Carey (Nate)" class="w-full h-full object-cover">
                    </div>
                </div>
                
                <!-- Right Bio Column -->
                <div class="md:col-span-7 space-y-5 text-left">
                    <span class="text-indigo-600 font-extrabold text-[10px] tracking-widest uppercase bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100/40">Meet the Founder</span>
                    <h2 class="text-4xl font-black text-slate-900 uppercase tracking-tight leading-none">Nathan Carey (Nate)</h2>
                    <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">Founder, Hoosier AI Automations LLC</p>
                    
                    <div class="text-slate-600 text-sm md:text-base leading-relaxed space-y-4 font-medium">
                        <p>
                            A fellow Lawrence County neighbor and stay-at-home dad, Nathan is the software simplified, enterprise elevated brain behind Hoosier AI Automations. He has dedicated his career to one mission: taking the powerful digital tools guarded by major corporations and bringing them home to local businesses like yours.
                        </p>
                        <p>
                            Nate's focus isn't just on writing lightweight code; it's on crafting technology that feels simplified for your team and allows you to reclaim your most vital resource: your time. Hoosier AI Automations is committed to human first principles, ensuring our handcrafted automations support your employees without burning them out. We build the tech, so you can focus on what matters most: Human-to-Human connections.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-16 border-t border-stone-200 text-center text-slate-500 text-xs tracking-widest uppercase px-6 flex flex-col items-center justify-center space-y-6">
        <!-- Indiana Outline Badge -->
        <div class="inline-flex items-center space-x-3 bg-white border border-stone-200 px-6 py-3.5 rounded-full shadow-md">
            <!-- Sketched-style Indiana Outline SVG with pulsing star -->
            <svg class="h-10 w-auto text-indigo-600 animate-fade-in" viewBox="0 0 100 140" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M 36,16 C 45,14 65,15 84,14 C 85,30 84,65 83,95 C 82,104 80,110 78,111 C 74,111 68,117 65,119 C 59,122 55,115 50,121 C 46,126 40,125 36,122 C 28,118 24,124 19,124 C 22,118 28,108 30,103 C 32,96 30,85 32,75 C 34,60 35,35 34,16 Z" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="4.5" />
                <path d="M 48,90 L 50,85 L 52,90 L 57,90 L 53,93 L 55,98 L 50,95 L 45,98 L 47,93 L 43,90 Z" fill="#F59E0B" class="star-pulse" />
            </svg>
            <div class="text-left leading-tight">
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Enterprise Class</p>
                <p class="text-xs font-black text-slate-800 uppercase tracking-wider">US Owned & Operated</p>
                <p class="text-[9px] font-bold text-indigo-500 uppercase tracking-widest">Bedford, Indiana</p>
            </div>
        </div>
        <div class="space-y-2 text-center text-[11px]">
            <p>&copy; 2026 Hoosier AI Automations. All Rights Reserved.</p>
        </div>
    </footer>

    <!-- Light-Mode Chat Widget -->
    <div id="chat-widget">
        <div id="chat-window">
            <div id="chat-header" class="flex justify-between items-center p-5 border-b border-stone-200/60 bg-slate-50">
                <h3 class="text-indigo-600 font-extrabold">Haas</h3>
                <button id="chat-close" class="text-slate-400 hover:text-slate-800 text-xl font-bold">&times;</button>
            </div>
            <div id="chat-messages" class="flex-1 p-5 overflow-y-auto space-y-4 flex flex-col">
                <div class="bg-stone-100 text-slate-800 p-3.5 rounded-[1.25rem] text-sm max-w-[85%] self-start mr-auto">Hello! I'm Haas. How can we help automate your business today?</div>
            </div>
            <div id="chat-input-area" class="p-4 border-t border-stone-100 bg-white flex gap-2">
                <input type="text" id="chat-input" placeholder="Ask anything..." class="bg-stone-50 border border-stone-200/60 rounded-full px-4 py-2.5 flex-1 text-sm outline-none text-slate-800 focus:border-indigo-500 focus:bg-white transition">
                <button id="chat-submit" class="bg-indigo-600 hover:bg-indigo-700 transition w-10 h-10 rounded-full flex items-center justify-center text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
            </div>
        </div>
        <div id="chat-bubble">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
        </div>
    </div>

<script src="chat.js"></script>
</body>
</html>
```

---

## File: Assets/hireus.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Business Efficiency Audit | Hoosier AI Automations</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet">
    <link rel="icon" type="image/png" href="1330.png">
    <link rel="stylesheet" href="styles.css">
    <style>
        @keyframes pulse-star {
            0%, 100% { opacity: 0.3; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.2); }
        }
        .star-pulse {
            transform-origin: 50px 91.5px;
            animation: pulse-star 2s infinite ease-in-out;
        }
    </style>
</head>
<body class="bg-[#FAF9F5] text-slate-950 limestone-pattern min-h-screen relative">

    <!-- Glassmorphism Navbar -->
    <nav class="fixed w-full z-50 bg-white/70 backdrop-blur-md border-b border-stone-200/40 px-6 py-4 shadow-sm shadow-slate-100/50">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <a href="index.html" class="flex items-center space-x-3 text-slate-900 no-underline hover:opacity-90 transition">
                <img src="1330.png" alt="Hoosier AI Automations Logo" class="h-10 w-auto">
                <span class="text-xl font-black tracking-tighter uppercase italic text-slate-900">Hoosier AI Automations</span>
            </a>
            <div class="hidden md:flex space-x-8 items-center">
                <a href="index.html" class="nav-link text-slate-600 hover:text-indigo-600 font-bold">Home</a>
                <a href="promise.html" class="nav-link text-slate-600 hover:text-indigo-600 font-bold">Our Promise</a>
                <a href="pricing.html" class="nav-link text-slate-600 hover:text-indigo-600 font-bold">Pricing</a>
                <a href="portfolio.html" class="nav-link text-slate-600 hover:text-indigo-600 font-bold">Portfolio</a>
                <a href="hireus.html" class="nav-link text-indigo-600 font-bold">Hire Us</a>
                <a href="playground.html" class="nav-cta text-white font-bold">Open Playground</a>
            </div>
        </div>
    </nav>

    <!-- Header Section -->
    <header class="pt-36 pb-10 px-6 text-center">
        <div class="max-w-4xl mx-auto">
            <span class="text-indigo-600 font-bold uppercase tracking-widest text-xs bg-indigo-50/80 px-3.5 py-1.5 rounded-full w-fit border border-indigo-100/50 mx-auto block">Time Leakage Diagnostics</span>
            <h1 class="text-4xl md:text-6xl font-black mb-4 tracking-tight hero-text uppercase mt-4">
                Business Efficiency Audit
            </h1>
            <p class="subtitle max-w-2xl mx-auto text-slate-600 text-sm md:text-base leading-relaxed">
                Identify operational bottleneck points, calculate hours leaked to repetitive manual tasks, and claim your custom-tailored <span class="text-indigo-600 font-bold">Strategy Blueprint</span> in under 2 minutes.
            </p>
        </div>
    </header>

    <!-- Interactive Audit Wizard Container -->
    <main class="py-4 px-6 max-w-3xl mx-auto mb-20">
        <div class="limestone-card p-8 md:p-12 rounded-[2.5rem] border border-stone-200/50 bg-white shadow-2xl relative overflow-hidden">
            
            <!-- Audit Progress Indicator Bar Row -->
            <div id="progress-container-row" class="mb-10 space-y-3">
                <div class="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-400">
                    <span id="step-indicator">Question 1 of 5</span>
                    <span id="percent-indicator">20% Complete</span>
                </div>
                <div class="progress-container">
                    <div id="progress-bar" class="progress-bar-fill" style="width: 20%;"></div>
                </div>
            </div>

            <!-- Form submission to secure Netlify function endpoint -->
            <form id="audit-wizard-form" action="/.netlify/functions/submit-audit" method="POST">
                
                <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

                <!-- Form Audit Hidden Capture Variables -->
                <input type="hidden" name="Q1_Hours_Lost_To_Manual_Tasks" id="hidden-q1" value="" required>
                <input type="hidden" name="Q2_Primary_Bottleneck" id="hidden-q2" value="" required>
                <input type="hidden" name="Q3_Growth_Goal" id="hidden-q3" value="">
                <input type="hidden" name="Q4_Staff_Burnout_Scale" id="hidden-q4" value="5">
                <input type="hidden" name="Q5_Current_Tech_Status" id="hidden-q5" value="" required>

                <!-- ================= INTRODUCTORY FLOW SELECTOR (STEP 0) ================= -->
                <div id="step-0" class="audit-step active space-y-8 animate-fade-in">
                    <div class="text-center max-w-xl mx-auto space-y-3">
                        <span class="text-indigo-600 font-extrabold text-[10px] tracking-widest uppercase bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100/40">Optimize Your Operations</span>
                        <h2 class="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">Let's Simplify Your Software</h2>
                        <p class="text-slate-500 text-sm leading-relaxed font-medium">
                            Would you like to start with our 2-minute Business Efficiency Audit to pinpoint labor leakage, or proceed directly to standard contact?
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                        <!-- Audit Option (YES) -->
                        <div class="audit-card border border-stone-200/60 rounded-[2rem] p-8 bg-[#FAF9F5]/30 text-center flex flex-col justify-between cursor-pointer hover:border-indigo-500 hover:bg-white transition duration-300 shadow-sm" onclick="chooseAuditFlow(true)">
                            <div class="space-y-4">
                                <div class="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto font-black text-lg shadow-sm border border-indigo-100/30">
                                    A
                                </div>
                                <h3 class="font-black text-slate-800 text-lg uppercase tracking-tight">Interactive Efficiency Audit</h3>
                                <p class="text-slate-500 text-xs leading-relaxed max-w-xs mx-auto font-medium">
                                    Highly Recommended. Rate staff burnout, identify bottlenecks, and get a customized manual-to-automated checklist delivered straight to your inbox.
                                </p>
                            </div>
                            <div class="pt-6">
                                <span class="btn-primary inline-block text-[11px] uppercase tracking-widest font-black py-3 px-6 rounded-xl">Start 2-Min Audit →</span>
                            </div>
                        </div>

                        <!-- Direct Contact Option (NO) -->
                        <div class="audit-card border border-stone-200/60 rounded-[2rem] p-8 bg-[#FAF9F5]/30 text-center flex flex-col justify-between cursor-pointer hover:border-indigo-500 hover:bg-white transition duration-300 shadow-sm" onclick="chooseAuditFlow(false)">
                            <div class="space-y-4">
                                <div class="w-12 h-12 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center mx-auto font-black text-lg shadow-sm border border-stone-200/30">
                                    B
                                </div>
                                <h3 class="font-black text-slate-800 text-lg uppercase tracking-tight">Direct Contact Form</h3>
                                <p class="text-slate-500 text-xs leading-relaxed max-w-xs mx-auto font-medium">
                                    Skip the operational assessment. Go straight to sharing your contact information and leave us a message or ask a question.
                                </p>
                            </div>
                            <div class="pt-6">
                                <span class="btn-secondary inline-block text-[11px] uppercase tracking-widest font-black py-3 px-6 rounded-xl font-black">Skip to Contact →</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ================= QUESTION 1 ================= -->
                <div id="step-1" class="audit-step space-y-6">
                    <div class="text-center md:text-left">
                        <span class="text-indigo-600 font-extrabold text-[10px] tracking-widest uppercase bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100/40">Step 1: Labor Leakage</span>
                        <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-2 tracking-tight uppercase">How many hours are lost to manual tasks each week?</h2>
                        <p class="text-slate-500 text-sm mt-1">Estimating repetitive spreadsheet updates, copy-pasting, and manual scheduling.</p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        <div class="audit-card border border-stone-200/60 rounded-2xl p-6 bg-[#FAF9F5]/30 text-center" onclick="selectQ1('0-5', this)">
                            <h4 class="font-black text-slate-800 text-lg uppercase tracking-tight">0-5 Hours</h4>
                            <p class="text-slate-500 text-xs mt-1">Minor overhead tasks</p>
                        </div>
                        <div class="audit-card border border-stone-200/60 rounded-2xl p-6 bg-[#FAF9F5]/30 text-center" onclick="selectQ1('5-15', this)">
                            <h4 class="font-black text-slate-800 text-lg uppercase tracking-tight">5-15 Hours</h4>
                            <p class="text-slate-500 text-xs mt-1">Daily operational drag</p>
                        </div>
                        <div class="audit-card border border-stone-200/60 rounded-2xl p-6 bg-[#FAF9F5]/30 text-center" onclick="selectQ1('15-40', this)">
                            <h4 class="font-black text-slate-800 text-lg uppercase tracking-tight">15-40 Hours</h4>
                            <p class="text-slate-500 text-xs mt-1">Significant operational bottleneck</p>
                        </div>
                        <div class="audit-card border border-stone-200/60 rounded-2xl p-6 bg-[#FAF9F5]/30 text-center" onclick="selectQ1('40+', this)">
                            <h4 class="font-black text-slate-800 text-lg uppercase tracking-tight">40+ Hours</h4>
                            <p class="text-slate-500 text-xs mt-1">Severe enterprise-level drain</p>
                        </div>
                    </div>

                    <div class="flex justify-between pt-6 border-t border-stone-100">
                        <button type="button" onclick="prevStep(0)" class="btn-secondary py-3.5 px-6 text-xs uppercase tracking-widest font-black">← Back</button>
                        <button type="button" onclick="nextStep(2)" class="btn-primary py-4 px-8 text-sm uppercase tracking-widest font-black">Continue →</button>
                    </div>
                </div>

                <!-- ================= QUESTION 2 ================= -->
                <div id="step-2" class="audit-step space-y-6">
                    <div class="text-center md:text-left">
                        <span class="text-indigo-600 font-extrabold text-[10px] tracking-widest uppercase bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100/40">Step 2: Operational Obstacles</span>
                        <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-2 tracking-tight uppercase">What is your primary operational bottleneck?</h2>
                        <p class="text-slate-500 text-sm mt-1">Select the single largest friction area dragging down your client experience.</p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        <div class="audit-card border border-stone-200/60 rounded-2xl p-6 bg-[#FAF9F5]/30 text-left" onclick="selectQ2('Scheduling & Bookings', this)">
                            <h4 class="font-black text-slate-800 text-sm uppercase tracking-tight">Scheduling</h4>
                            <p class="text-slate-500 text-[11px] mt-0.5">Appointment coordination & client calendars</p>
                        </div>
                        <div class="audit-card border border-stone-200/60 rounded-2xl p-6 bg-[#FAF9F5]/30 text-left" onclick="selectQ2('Lead Follow-ups & Inbox', this)">
                            <h4 class="font-black text-slate-800 text-sm uppercase tracking-tight">Lead Follow-ups</h4>
                            <p class="text-slate-500 text-[11px] mt-0.5">Late replies, customer inbox overload, and lead leakage</p>
                        </div>
                        <div class="audit-card border border-stone-200/60 rounded-2xl p-6 bg-[#FAF9F5]/30 text-left" onclick="selectQ2('Inventory & Operations', this)">
                            <h4 class="font-black text-slate-800 text-sm uppercase tracking-tight">Inventory & Ops</h4>
                            <p class="text-slate-500 text-[11px] mt-0.5">Material tracking, invoice dispatching, and field jobs</p>
                        </div>
                        <div class="audit-card border border-stone-200/60 rounded-2xl p-6 bg-[#FAF9F5]/30 text-left" onclick="selectQ2('Software Gaps & Manual Entry', this)">
                            <h4 class="font-black text-slate-800 text-sm uppercase tracking-tight">Software Gaps</h4>
                            <p class="text-slate-500 text-[11px] mt-0.5">Manual data entry, API cracks, and duplicate spreadsheets</p>
                        </div>
                    </div>

                    <div class="flex justify-between pt-6 border-t border-stone-100">
                        <button type="button" onclick="prevStep(1)" class="btn-secondary py-3.5 px-6 text-xs uppercase tracking-widest font-black">← Back</button>
                        <button type="button" onclick="nextStep(3)" class="btn-primary py-4 px-8 text-sm uppercase tracking-widest font-black">Continue →</button>
                    </div>
                </div>

                <!-- ================= QUESTION 3 ================= -->
                <div id="step-3" class="audit-step space-y-6">
                    <div class="text-center md:text-left">
                        <span class="text-indigo-600 font-extrabold text-[10px] tracking-widest uppercase bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100/40">Step 3: Growth Vision</span>
                        <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-2 tracking-tight uppercase">What would you do with 10 extra hours a week?</h2>
                        <p class="text-slate-500 text-sm mt-1">How would you invest this reclaimed resource into what matters most?</p>
                    </div>

                    <div class="pt-4">
                        <label class="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Your Focus Reclaimed</label>
                        <textarea id="q3-textarea" oninput="updateQ3(this.value)" placeholder="e.g. Focus on business expansion, spend more quality weekend time with family, or optimize core service operations..." class="w-full bg-[#FAF9F5] border border-stone-200/60 p-5 rounded-2xl focus:border-indigo-500 focus:bg-white outline-none transition text-slate-900 shadow-sm font-medium h-36 resize-none"></textarea>
                    </div>

                    <div class="flex justify-between pt-6 border-t border-stone-100">
                        <button type="button" onclick="prevStep(2)" class="btn-secondary py-3.5 px-6 text-xs uppercase tracking-widest font-black">← Back</button>
                        <button type="button" onclick="nextStep(4)" class="btn-primary py-4 px-8 text-sm uppercase tracking-widest font-black">Continue →</button>
                    </div>
                </div>

                <!-- ================= QUESTION 4 ================= -->
                <div id="step-4" class="audit-step space-y-6">
                    <div class="text-center md:text-left">
                        <span class="text-indigo-600 font-extrabold text-[10px] tracking-widest uppercase bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100/40">Step 4: Staff Well-being</span>
                        <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-2 tracking-tight uppercase">Staff Burnout Scale</h2>
                        <p class="text-slate-500 text-sm mt-1">Assess the friction, fatigue, and burnout risk level currently felt by your team.</p>
                    </div>

                    <div class="pt-6 space-y-6 text-center">
                        <div class="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-wider px-2">
                            <span>1 - Chill</span>
                            <span>5 - Balanced</span>
                            <span>10 - Exhausted</span>
                        </div>
                        <input type="range" min="1" max="10" value="5" class="custom-slider w-full" id="burnout-range" oninput="updateQ4(this.value)">
                        
                        <!-- Dynamic slider response label -->
                        <div class="bg-indigo-50/50 rounded-2xl p-5 border border-indigo-100/40 inline-block w-full max-w-md mx-auto">
                            <span class="block text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1">Friction Assessment</span>
                            <span id="burnout-value-display" class="text-2xl font-black text-indigo-600 uppercase tracking-tight">5 - Stressed / Falling Behind</span>
                        </div>
                    </div>

                    <div class="flex justify-between pt-6 border-t border-stone-100">
                        <button type="button" onclick="prevStep(3)" class="btn-secondary py-3.5 px-6 text-xs uppercase tracking-widest font-black">← Back</button>
                        <button type="button" onclick="nextStep(5)" class="btn-primary py-4 px-8 text-sm uppercase tracking-widest font-black">Continue →</button>
                    </div>
                </div>

                <!-- ================= QUESTION 5 ================= -->
                <div id="step-5" class="audit-step space-y-6">
                    <div class="text-center md:text-left">
                        <span class="text-indigo-600 font-extrabold text-[10px] tracking-widest uppercase bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100/40">Step 5: Operational Legacy</span>
                        <h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-2 tracking-tight uppercase">Current Tech Status</h2>
                        <p class="text-slate-500 text-sm mt-1">How automated are your team's day-to-day operations right now?</p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        <div class="audit-card border border-stone-200/60 rounded-2xl p-6 bg-[#FAF9F5]/30 text-center flex flex-col justify-between" onclick="selectQ5('Hand-operated / Manual', this)">
                            <div class="py-4">
                                <h4 class="font-black text-slate-800 text-lg uppercase tracking-tight">Hand-Operated</h4>
                                <p class="text-slate-500 text-xs mt-1.5 leading-relaxed">Spreadsheets, legacy paperwork, and manual notes</p>
                            </div>
                        </div>
                        <div class="audit-card border border-stone-200/60 rounded-2xl p-6 bg-[#FAF9F5]/30 text-center flex flex-col justify-between" onclick="selectQ5('Partially automated', this)">
                            <div class="py-4">
                                <h4 class="font-black text-slate-800 text-lg uppercase tracking-tight">Partially Automated</h4>
                                <p class="text-slate-500 text-xs mt-1.5 leading-relaxed">Using multiple platforms but doing a lot of manual copy-paste syncing</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-between pt-6 border-t border-stone-100">
                        <button type="button" onclick="prevStep(4)" class="btn-secondary py-3.5 px-6 text-xs uppercase tracking-widest font-black">← Back</button>
                        <button type="button" onclick="nextStep(6)" class="btn-primary py-4 px-8 text-sm uppercase tracking-widest font-black">Review My Score →</button>
                    </div>
                </div>

                <!-- ================= STEP 6: CONTACT INFORMATION ================= -->
                <div id="step-6" class="audit-step space-y-6">
                    <div class="text-center md:text-left">
                        <span id="step-6-badge" class="text-indigo-600 font-bold uppercase tracking-widest text-[10px] bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100/30">Diagnoses Prepared</span>
                        <h2 id="step-6-title" class="text-2xl md:text-3xl font-black text-slate-900 mt-2 tracking-tight uppercase">Let's Compile Your Custom Blueprint</h2>
                        <p id="step-6-desc" class="text-slate-500 text-sm mt-1">Nathan will evaluate your 5 diagnostic answers and deliver a customized automation roadmap directly to your inbox.</p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
                        <div>
                            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Your Full Name *</label>
                            <input type="text" name="name" required placeholder="e.g. Jane Doe" class="w-full bg-[#FAF9F5] border border-stone-200/60 px-4 py-3.5 rounded-xl focus:border-indigo-500 focus:bg-white outline-none transition text-slate-900 text-sm font-medium">
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Business Name *</label>
                            <input type="text" name="Business_Name" required placeholder="e.g. Bedford Limestone Co." class="w-full bg-[#FAF9F5] border border-stone-200/60 px-4 py-3.5 rounded-xl focus:border-indigo-500 focus:bg-white outline-none transition text-slate-900 text-sm font-medium">
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Your Role *</label>
                            <select name="Role" required class="w-full bg-[#FAF9F5] border border-stone-200/60 px-4 py-3.5 rounded-xl focus:border-indigo-500 focus:bg-white outline-none transition text-slate-900 text-sm font-semibold">
                                <option value="" disabled selected>Select Your Position...</option>
                                <option value="Owner">Owner</option>
                                <option value="Founder">Founder</option>
                                <option value="Manager">Manager</option>
                                <option value="Developer">Developer</option>
                                <option value="Entrepreneur">Entrepreneur</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Website URL (Optional)</label>
                            <input type="url" name="Website_URL" placeholder="https://example.com" class="w-full bg-[#FAF9F5] border border-stone-200/60 px-4 py-3.5 rounded-xl focus:border-indigo-500 focus:bg-white outline-none transition text-slate-900 text-sm font-medium">
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Email Address *</label>
                            <input type="email" name="email" required placeholder="e.g. jane@company.com" class="w-full bg-[#FAF9F5] border border-stone-200/60 px-4 py-3.5 rounded-xl focus:border-indigo-500 focus:bg-white outline-none transition text-slate-900 text-sm font-medium">
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Phone Number *</label>
                            <input type="tel" name="phone" required placeholder="e.g. (812) 555-0100" class="w-full bg-[#FAF9F5] border border-stone-200/60 px-4 py-3.5 rounded-xl focus:border-indigo-500 focus:bg-white outline-none transition text-slate-900 text-sm font-medium">
                        </div>
                    </div>

                    <div class="space-y-3 pt-2">
                        <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">How should we connect? *</label>
                        <div class="switch-field max-w-xs">
                            <input type="radio" id="prefer-text" name="Contact_Preference" value="Prefer Text" checked>
                            <label for="prefer-text">Prefer Text</label>
                            
                            <input type="radio" id="prefer-call" name="Contact_Preference" value="Prefer Call">
                            <label for="prefer-call">Prefer Call</label>
                        </div>
                    </div>

                    <div class="space-y-2">
                        <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Any specific questions, comments, or concerns?</label>
                        <textarea name="Comments" placeholder="Tell us if you have critical software tools you currently use or specific workflow bottlenecks in mind..." class="w-full bg-[#FAF9F5] border border-stone-200/60 p-4 rounded-xl focus:border-indigo-500 focus:bg-white outline-none transition text-slate-900 text-sm font-medium h-24 resize-none"></textarea>
                    </div>

                    <div class="flex justify-between pt-6 border-t border-stone-100">
                        <button type="button" onclick="prevStep(5)" class="btn-secondary py-3.5 px-6 text-xs uppercase tracking-widest font-black">← Back</button>
                        <button type="submit" id="submit-btn" class="btn-primary py-4 px-10 text-sm uppercase tracking-widest font-black shadow-md shadow-indigo-100">Submit Audit Request</button>
                    </div>
                </div>

            </form>

            <!-- ================= SUCCESS CARD ================= -->
            <div id="success-card" class="hidden text-center py-12 space-y-6">
                <!-- Checkmark Success SVG -->
                <div class="mx-auto w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center border-2 border-green-200 shadow-xl shadow-green-100/50 scale-0 transition duration-700" id="success-check">
                    <svg class="w-12 h-12" fill="none" stroke="currentColor" stroke-width="3.5" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                    </svg>
                </div>
                <div class="space-y-3">
                    <span id="success-badge" class="text-green-600 font-extrabold text-[10px] tracking-widest uppercase bg-green-50 px-2.5 py-1 rounded-full border border-green-100/40">Audit Submitted Successfully!</span>
                    <h2 id="success-title" class="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">Your Efficiency Blueprint Is Underway!</h2>
                    <p id="success-desc" class="text-slate-600 text-sm max-w-md mx-auto leading-relaxed font-medium">
                        Nathan will review your 5 labor leakage metrics and manually craft your customized manual-to-automated operational checklist. Look out for a detailed response in your inbox soon!
                    </p>
                </div>
                <div class="pt-6">
                    <a href="index.html" class="btn-primary">Return to Homepage</a>
                </div>
            </div>

        </div>
    </main>

    <!-- Footer -->
    <footer class="py-16 border-t border-stone-200 text-center text-slate-500 text-xs tracking-widest uppercase px-6 flex flex-col items-center justify-center space-y-6">
        <!-- Indiana Outline Badge -->
        <div class="inline-flex items-center space-x-3 bg-white border border-stone-200 px-6 py-3.5 rounded-full shadow-md">
            <!-- Sketched-style Indiana Outline SVG with pulsing star -->
            <svg class="h-10 w-auto text-indigo-600 animate-fade-in" viewBox="0 0 100 140" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M 36,16 C 45,14 65,15 84,14 C 85,30 84,65 83,95 C 82,104 80,110 78,111 C 74,111 68,117 65,119 C 59,122 55,115 50,121 C 46,126 40,125 36,122 C 28,118 24,124 19,124 C 22,118 28,108 30,103 C 32,96 30,85 32,75 C 34,60 35,35 34,16 Z" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="4.5" />
                <path d="M 48,90 L 50,85 L 52,90 L 57,90 L 53,93 L 55,98 L 50,95 L 45,98 L 47,93 L 43,90 Z" fill="#F59E0B" class="star-pulse" />
            </svg>
            <div class="text-left leading-tight">
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Enterprise Class</p>
                <p class="text-xs font-black text-slate-800 uppercase tracking-wider">US Owned & Operated</p>
                <p class="text-[9px] font-bold text-indigo-500 uppercase tracking-widest">Bedford, Indiana</p>
            </div>
        </div>
        <div class="space-y-2 text-center text-[11px]">
            <p>&copy; 2026 Hoosier AI Automations. All Rights Reserved.</p>
        </div>
    </footer>

    <!-- Light-Mode Chat Widget -->
    <div id="chat-widget">
        <div id="chat-window">
            <div id="chat-header" class="flex justify-between items-center p-5 border-b border-stone-200/60 bg-slate-50">
                <h3 class="text-indigo-600 font-extrabold">Haas</h3>
                <button id="chat-close" class="text-slate-400 hover:text-slate-800 text-xl font-bold">&times;</button>
            </div>
            <div id="chat-messages" class="flex-1 p-5 overflow-y-auto space-y-4 flex flex-col">
                <div class="bg-stone-100 text-slate-800 p-3.5 rounded-[1.25rem] text-sm max-w-[85%] self-start mr-auto">Hello! I'm Haas. How can we help automate your business today?</div>
            </div>
            <div id="chat-input-area" class="p-4 border-t border-stone-100 bg-white flex gap-2">
                <input type="text" id="chat-input" placeholder="Ask anything..." class="bg-stone-50 border border-stone-200/60 rounded-full px-4 py-2.5 flex-1 text-sm outline-none text-slate-800 focus:border-indigo-500 focus:bg-white transition">
                <button id="chat-submit" class="bg-indigo-600 hover:bg-indigo-700 transition w-10 h-10 rounded-full flex items-center justify-center text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
            </div>
        </div>
        <div id="chat-bubble">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
        </div>
    </div>

    <script src="chat.js"></script>

    <!-- Multi-Step Form Logic and Ajax Submission -->
    <script>
        let currentStep = 0;
        let hasChosenAudit = true;
        const totalSteps = 6;

        function updateProgress() {
            const stepIndicator = document.getElementById('step-indicator');
            const percentIndicator = document.getElementById('percent-indicator');
            const progressBar = document.getElementById('progress-bar');
            const progressRow = document.getElementById('progress-container-row');
            
            if (currentStep === 0) {
                // Hide progress bar on introductory choice step
                progressRow.style.display = "none";
            } else {
                progressRow.style.display = "block";
                const percent = Math.round(((currentStep - 1) / 5) * 100);
                if (currentStep <= 5) {
                    stepIndicator.innerText = `Question ${currentStep} of 5`;
                    percentIndicator.innerText = `${percent}% Complete`;
                    progressBar.style.width = `${percent}%`;
                } else {
                    stepIndicator.innerText = `Final Step`;
                    percentIndicator.innerText = `100% Complete`;
                    progressBar.style.width = `100%`;
                }
            }
        }

        function chooseAuditFlow(wantsAudit) {
            hasChosenAudit = wantsAudit;
            if (wantsAudit) {
                // Reset audit values for fresh entry
                document.getElementById('hidden-q1').value = "";
                document.getElementById('hidden-q2').value = "";
                document.getElementById('hidden-q3').value = "";
                document.getElementById('hidden-q5').value = "";
                
                // Clear text area
                document.getElementById('q3-textarea').value = "";
                
                // Remove selection visual highlights
                document.querySelectorAll('.audit-card').forEach(card => card.classList.remove('selected'));
                
                showStep(1);
            } else {
                // Populate skipped text in audit values
                document.getElementById('hidden-q1').value = "Skipped (Direct Contact Option)";
                document.getElementById('hidden-q2').value = "Skipped (Direct Contact Option)";
                document.getElementById('hidden-q3').value = "Skipped (Direct Contact Option)";
                document.getElementById('hidden-q5').value = "Skipped (Direct Contact Option)";
                
                showStep(6);
            }
        }

        function showStep(stepNum) {
            document.querySelectorAll('.audit-step').forEach(step => {
                step.classList.remove('active');
            });
            
            const activeStep = document.getElementById(`step-${stepNum}`);
            if (activeStep) {
                activeStep.classList.add('active');
            }
            
            currentStep = stepNum;
            updateProgress();
            
            // Dynamically adjust step 6 texts based on choices
            if (stepNum === 6) {
                const badge = document.getElementById('step-6-badge');
                const title = document.getElementById('step-6-title');
                const desc = document.getElementById('step-6-desc');
                const submitBtn = document.getElementById('submit-btn');
                
                if (hasChosenAudit) {
                    badge.innerText = "Diagnoses Prepared";
                    title.innerText = "Let's Compile Your Custom Blueprint";
                    desc.innerText = "Nathan will evaluate your 5 diagnostic answers and deliver a customized automation roadmap directly to your inbox.";
                    submitBtn.innerText = "Submit Audit Request";
                } else {
                    badge.innerText = "Get In Touch";
                    title.innerText = "Let's Simplify Your Workflow";
                    desc.innerText = "Fill out your details below and Nathan Carey will reach out to you directly to answer questions and coordinate a free consultation.";
                    submitBtn.innerText = "Send Message";
                }
            }
            
            window.scrollTo({ top: 120, behavior: 'smooth' });
        }

        function nextStep(stepNum) {
            // Field validation for Q1-Q5 before proceeding
            if (stepNum === 2 && !document.getElementById('hidden-q1').value) {
                alert("Please select an answer for Question 1 before continuing.");
                return;
            }
            if (stepNum === 3 && !document.getElementById('hidden-q2').value) {
                alert("Please select a bottleneck option for Question 2 before continuing.");
                return;
            }
            if (stepNum === 4 && !document.getElementById('q3-textarea').value.trim()) {
                alert("Please share your growth thoughts in the textbox before continuing.");
                return;
            }
            if (stepNum === 6 && !document.getElementById('hidden-q5').value) {
                alert("Please select your current tech status before continuing.");
                return;
            }
            
            showStep(stepNum);
        }

        function prevStep(stepNum) {
            if (stepNum === 5 && !hasChosenAudit) {
                // Skipped audit takes user back to choice screen
                showStep(0);
            } else {
                showStep(stepNum);
            }
        }

        // Card Selection Logic for Q1
        function selectQ1(val, element) {
            document.getElementById('hidden-q1').value = val;
            
            // Highlight selected card visually
            element.parentNode.querySelectorAll('.audit-card').forEach(card => {
                card.classList.remove('selected');
            });
            element.classList.add('selected');
            
            // Advance automatically after selection
            setTimeout(() => { nextStep(2); }, 250);
        }

        // Card Selection Logic for Q2
        function selectQ2(val, element) {
            document.getElementById('hidden-q2').value = val;
            
            element.parentNode.querySelectorAll('.audit-card').forEach(card => {
                card.classList.remove('selected');
            });
            element.classList.add('selected');
            
            setTimeout(() => { nextStep(3); }, 250);
        }

        // Text area callback for Q3
        function updateQ3(val) {
            document.getElementById('hidden-q3').value = val;
        }

        // Range Slider logic for Q4
        function updateQ4(val) {
            document.getElementById('hidden-q4').value = val;
            const display = document.getElementById('burnout-value-display');
            const num = parseInt(val);
            
            let labelText = "";
            if (num <= 3) {
                labelText = `${num} - Chill / Balanced`;
            } else if (num <= 6) {
                labelText = `${num} - Stressed / Falling Behind`;
            } else if (num <= 8) {
                labelText = `${num} - Burning Out / High Friction`;
            } else {
                labelText = `${num} - Crisis Point / Exhausted`;
            }
            
            display.innerText = labelText;
        }

        // Card Selection Logic for Q5
        function selectQ5(val, element) {
            document.getElementById('hidden-q5').value = val;
            
            element.parentNode.querySelectorAll('.audit-card').forEach(card => {
                card.classList.remove('selected');
            });
            element.classList.add('selected');
            
            setTimeout(() => { nextStep(6); }, 250);
        }

        // Ajax submission with loading spinner and Success animation
        const form = document.getElementById('audit-wizard-form');
        const submitBtn = document.getElementById('submit-btn');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            submitBtn.disabled = true;
            submitBtn.innerText = hasChosenAudit ? "Submitting Audit..." : "Sending Message...";
            submitBtn.style.opacity = "0.7";

            const formData = new FormData(form);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            fetch('/.netlify/functions/submit-audit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let res = await response.json();
                if (response.status == 200) {
                    // Hide wizard steps and progress indicators
                    form.classList.add('hidden');
                    document.getElementById('progress-container-row').classList.add('hidden');
                    
                    // Show success screen card and customize based on choice
                    const successBadge = document.getElementById('success-badge');
                    const successTitle = document.getElementById('success-title');
                    const successDesc = document.getElementById('success-desc');
                    
                    if (hasChosenAudit) {
                        successBadge.innerText = "Audit Submitted Successfully!";
                        successTitle.innerText = "Your Efficiency Blueprint Is Underway!";
                        successDesc.innerText = "Nathan will review your 5 labor leakage metrics and manually craft your customized manual-to-automated operational checklist. Look out for a response in your inbox soon!";
                    } else {
                        successBadge.innerText = "Message Sent Successfully!";
                        successTitle.innerText = "Let's Build Something Great!";
                        successDesc.innerText = "Thank you for contacting Hoosier AI Automations. Nathan Carey has received your message and details, and will reach out to connect with you shortly.";
                    }

                    const successCard = document.getElementById('success-card');
                    successCard.classList.remove('hidden');
                    
                    // Scale checkmark in for delicious feedback
                    setTimeout(() => {
                        const check = document.getElementById('success-check');
                        check.classList.remove('scale-0');
                        check.classList.add('scale-100');
                    }, 50);
                } else {
                    console.log(response);
                    alert(res.error || "Something went wrong. Please try again.");
                    submitBtn.disabled = false;
                    submitBtn.innerText = hasChosenAudit ? "Submit Audit Request" : "Send Message";
                    submitBtn.style.opacity = "1";
                }
            })
            .catch(error => {
                console.log(error);
                alert("Form submission failed. Please check your internet and try again.");
                submitBtn.disabled = false;
                submitBtn.innerText = hasChosenAudit ? "Submit Audit Request" : "Send Message";
                submitBtn.style.opacity = "1";
            });
        });
    </script>
</body>
</html>
```

---

## File: Assets/portfolio.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio | Hoosier AI Automations</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet">
    <link rel="icon" type="image/png" href="1330.png">
    <link rel="stylesheet" href="styles.css">
    <style>
        @keyframes pulse-star {
            0%, 100% { opacity: 0.3; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.2); }
        }
        .star-pulse {
            transform-origin: 50px 91.5px;
            animation: pulse-star 2s infinite ease-in-out;
        }
    </style>
</head>
<body class="bg-[#FAF9F5] text-slate-950 limestone-pattern min-h-screen relative">

    <!-- Glassmorphism Navbar -->
    <nav class="fixed w-full z-50 bg-white/70 backdrop-blur-md border-b border-stone-200/40 px-6 py-4 shadow-sm shadow-slate-100/50">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <a href="index.html" class="flex items-center space-x-3 text-slate-900 no-underline hover:opacity-90 transition">
                <img src="1330.png" alt="Hoosier AI Automations Logo" class="h-10 w-auto">
                <span class="text-xl font-black tracking-tighter uppercase italic text-slate-900">Hoosier AI Automations</span>
            </a>
            <div class="hidden md:flex space-x-8 items-center">
                <a href="index.html" class="nav-link text-slate-600 hover:text-indigo-600 font-bold">Home</a>
                <a href="promise.html" class="nav-link text-slate-600 hover:text-indigo-600 font-bold">Our Promise</a>
                <a href="pricing.html" class="nav-link text-slate-600 hover:text-indigo-600 font-bold">Pricing</a>
                <a href="portfolio.html" class="nav-link text-indigo-600 font-bold">Portfolio</a>
                <a href="hireus.html" class="nav-link text-slate-600 hover:text-indigo-600 font-bold">Hire Us</a>
                <a href="playground.html" class="nav-cta text-white font-bold">Open Playground</a>
            </div>
        </div>
    </nav>

    <!-- Header Section -->
    <header class="pt-40 pb-12 px-6 text-center animate-fade-in">
        <div class="max-w-4xl mx-auto">
            <span class="text-indigo-600 font-bold uppercase tracking-widest text-xs bg-indigo-50/80 px-3.5 py-1.5 rounded-full w-fit border border-indigo-100/50 mx-auto block">World Local Crafts</span>
            <h1 class="text-5xl md:text-7xl font-black mb-6 tracking-tight hero-text uppercase mt-4">
                Our Project Pieces
            </h1>
            <p class="subtitle max-w-2xl mx-auto text-slate-600 text-base md:text-lg">
                Handcrafted software solutions for businesses ready to save hours. No templates—just custom builds engineered for growth.
            </p>
        </div>
    </header>

    <!-- Portfolio Section -->
    <section id="work" class="py-12 px-6 max-w-7xl mx-auto">
        <div class="max-w-6xl mx-auto space-y-12">
            
            <!-- Featured Mobile Build: RevAI (High Contrast Limestone Bento Card) -->
            <div class="limestone-card rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row border border-stone-200/60 shadow-xl bg-white">
                <div class="p-10 md:p-16 flex-1 flex flex-col justify-between z-10">
                    <div>
                        <span class="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100/40">Featured AI Partner</span>
                        <h3 class="text-3xl md:text-4xl font-black text-slate-900 mt-6 mb-6 uppercase tracking-tight leading-none">RevAI: Luxury Detailing</h3>
                        <p class="text-slate-600 mb-8 text-base md:text-lg leading-relaxed">
                            A proprietary Android application built for Revved Up TX featuring <span class="text-indigo-600 font-bold">Advanced AI Eyesight</span>. The app automates vehicle condition assessments, generates instant high-accuracy quotes, and captures leads completely hands-free.
                        </p>
                        <div class="grid grid-cols-2 gap-4 text-xs md:text-sm font-bold text-slate-600">
                            <div class="flex items-center space-x-2"><span class="text-indigo-600 text-lg">✓</span> <span>Custom AI Engine</span></div>
                            <div class="flex items-center space-x-2"><span class="text-indigo-600 text-lg">✓</span> <span>Automated Quoting</span></div>
                            <div class="flex items-center space-x-2"><span class="text-indigo-600 text-lg">✓</span> <span>Native Android Build</span></div>
                            <div class="flex items-center space-x-2"><span class="text-indigo-600 text-lg">✓</span> <span>Stripe Integration</span></div>
                        </div>
                    </div>
                    <div class="mt-8 pt-8 border-t border-stone-100">
                        <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Status: Fully Operational Build</span>
                    </div>
                </div>
                
                <!-- Sliding Screenshot Mockup Device Column -->
                <div class="flex-1 bg-stone-50 border-t lg:border-t-0 lg:border-l border-stone-100 relative min-h-[500px] md:min-h-[600px] flex items-center justify-center p-8 overflow-hidden">
                    <div class="absolute inset-0 opacity-[0.02] limestone-pattern"></div>
                    <div class="relative z-10 w-[260px]">
                        <!-- Smartphone Device Case -->
                        <div class="relative w-[260px] h-[520px] bg-[#FAF9F5] rounded-[2.5rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden">
                            <!-- Speaker/Camera Notch -->
                            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-slate-900 rounded-b-2xl z-30"></div>
                            
                            <!-- Slides -->
                            <img src="revai-1.png" alt="1. Welcome Page" class="slide absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100">
                            <img src="revai-2.png" alt="2. Vehicle Selection" class="slide absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0">
                            <img src="revai-3.png" alt="3. Zip Code Routing" class="slide absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0">
                            <img src="revai-4.png" alt="4. Service Location" class="slide absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0">
                            <img src="revai-5.png" alt="5. Visual Assessment" class="slide absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0">
                            <img src="revai-6.png" alt="6. AI Diagnosis Complete" class="slide absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0">
                            <img src="revai-7.png" alt="7. Contact Information" class="slide absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0">
                        </div>
                        <p id="slide-text" class="mt-4 text-center text-indigo-600 font-extrabold text-xs uppercase tracking-widest">1. Welcome Page</p>
                    </div>
                </div>
            </div>

            <!-- Bento Projects Grid (Sugar Shell, Visit Hopes, Hoosier Helpers) -->
            <div class="grid md:grid-cols-2 gap-8">
                
                <!-- Project Card 1: Sugar Shell Bakehouse -->
                <div class="limestone-card p-8 md:p-10 rounded-[2rem] border border-stone-200/50 shadow-lg bg-white flex flex-col justify-between group hover:border-indigo-200 transition duration-300">
                    <div>
                        <div class="flex justify-between items-center mb-6">
                            <span class="bg-indigo-50 text-indigo-600 font-extrabold text-[10px] tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-indigo-100/40">Created for the everydayer.</span>
                            <span class="text-xs font-bold text-slate-400">Web Presence</span>
                        </div>
                        <h3 class="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">Sugar Shell Bakehouse</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-6">
                            A friendly, custom-made website designed for Bedford's premier bakery. Features interactive menu listings, seamless pre-order forms, and a responsive layout that looks great on any phone. Custom-built to help their team spend more time baking and less time answering repetitive questions.
                        </p>

                        <!-- Premium Browser Viewport Mockup Carousel -->
                        <div class="relative rounded-2xl border border-stone-200/80 shadow-md overflow-hidden bg-stone-50 mb-8 mt-4 group/browser">
                            <!-- Browser Titlebar -->
                            <div class="bg-stone-100 border-b border-stone-200/60 px-4 py-2.5 flex items-center space-x-2">
                                <div class="flex space-x-1">
                                    <div class="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                                    <div class="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                                    <div class="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                                </div>
                                <div class="flex-1 text-center bg-white/85 rounded-md py-0.5 px-3 text-[9px] text-slate-400 font-bold tracking-wide max-w-[180px] mx-auto truncate border border-stone-200/30">
                                    sugarshellbakehouse.com
                                </div>
                            </div>
                            <!-- Browser Viewport -->
                            <div class="relative aspect-[16/10] overflow-hidden bg-white">
                                <!-- Slides -->
                                <img src="SS1.jpg" alt="Sugar Shell Home Page" class="sugarshell-slide absolute inset-0 w-full h-full object-contain transition-all duration-700 opacity-100 hover:scale-105">
                                <img src="SS2.jpg" alt="Sugar Shell Menu Section" class="sugarshell-slide absolute inset-0 w-full h-full object-contain transition-all duration-700 opacity-0 hover:scale-105">
                                <img src="SS3.jpg" alt="Sugar Shell Contact Section" class="sugarshell-slide absolute inset-0 w-full h-full object-contain transition-all duration-700 opacity-0 hover:scale-105">
                                <img src="SS4.jpg" alt="Sugar Shell Checkout" class="sugarshell-slide absolute inset-0 w-full h-full object-contain transition-all duration-700 opacity-0 hover:scale-105">
                            </div>
                            <!-- Slide Label Badge -->
                            <div class="absolute bottom-3 left-3 bg-slate-900/85 backdrop-blur-sm px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-white" id="sugarshell-text">
                                1. Home Page & Sweet Offerings
                            </div>
                        </div>
                    </div>
                    <div class="pt-6 border-t border-stone-100 flex justify-between items-center">
                        <span class="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Lawrence County</span>
                        <a href="https://sugarshellbakehouse.com" target="_blank" class="text-indigo-600 font-extrabold hover:text-indigo-800 transition uppercase tracking-wider text-xs font-black">Visit Website →</a>
                    </div>
                </div>

                <!-- Project Card 2: Visit Hopes -->
                <div class="limestone-card p-8 md:p-10 rounded-[2rem] border border-stone-200/50 shadow-lg bg-white flex flex-col justify-between group hover:border-indigo-200 transition duration-300">
                    <div>
                        <div class="flex justify-between items-center mb-6">
                            <span class="bg-indigo-50 text-indigo-600 font-extrabold text-[10px] tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-indigo-100/40">Websites for Marketing.</span>
                            <span class="text-xs font-bold text-slate-400">Upscale Wellness</span>
                        </div>
                        <h3 class="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">Visit Hopes</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-6">
                            A Hoosier favorite upscale wellness destination. Designed to capture local Lawrence County inquiries and display relaxing accommodations and retreat packaging, translating to higher physical booking rates.
                        </p>

                        <!-- Premium Browser Viewport Mockup Carousel -->
                        <div class="relative rounded-2xl border border-stone-200/80 shadow-md overflow-hidden bg-stone-50 mb-8 mt-4 group/browser">
                            <!-- Browser Titlebar -->
                            <div class="bg-stone-100 border-b border-stone-200/60 px-4 py-2.5 flex items-center space-x-2">
                                <div class="flex space-x-1">
                                    <div class="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                                    <div class="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                                    <div class="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                                </div>
                                <div class="flex-1 text-center bg-white/85 rounded-md py-0.5 px-3 text-[9px] text-slate-400 font-bold tracking-wide max-w-[180px] mx-auto truncate border border-stone-200/30">
                                    visithopes.netlify.app
                                </div>
                            </div>
                            <!-- Browser Viewport -->
                            <div class="relative aspect-[16/10] overflow-hidden bg-white">
                                <!-- Slides -->
                                <img src="VH1.jpg" alt="Visit Hopes Home Page" class="visithopes-slide absolute inset-0 w-full h-full object-contain transition-all duration-700 opacity-100 hover:scale-105">
                                <img src="VH2.jpg" alt="Visit Hopes Accommodations" class="visithopes-slide absolute inset-0 w-full h-full object-contain transition-all duration-700 opacity-0 hover:scale-105">
                                <img src="VH3.jpg" alt="Visit Hopes Contact Section" class="visithopes-slide absolute inset-0 w-full h-full object-contain transition-all duration-700 opacity-0 hover:scale-105">
                                <img src="VH4.jpg" alt="Visit Hopes Booking" class="visithopes-slide absolute inset-0 w-full h-full object-contain transition-all duration-700 opacity-0 hover:scale-105">
                            </div>
                            <!-- Slide Label Badge -->
                            <div class="absolute bottom-3 left-3 bg-slate-900/85 backdrop-blur-sm px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-white" id="visithopes-text">
                                1. Serene Sanctuary Welcome
                            </div>
                        </div>
                    </div>
                    <div class="pt-6 border-t border-stone-100 flex justify-between items-center">
                        <span class="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Regional Wellness</span>
                        <a href="https://visithopes.netlify.app" target="_blank" class="text-indigo-600 font-extrabold hover:text-indigo-800 transition uppercase tracking-wider text-xs font-black">Visit Website →</a>
                    </div>
                </div>

                <!-- Project Card 3: Hoosier Helpers Senior Care -->
                <div class="limestone-card p-8 md:p-10 rounded-[2rem] border border-stone-200/50 shadow-lg bg-white flex flex-col justify-between group hover:border-indigo-200 transition duration-300">
                    <div>
                        <div class="flex justify-between items-center mb-6">
                            <span class="bg-indigo-50 text-indigo-600 font-extrabold text-[10px] tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-indigo-100/40">Senior Care & Trust</span>
                            <span class="text-xs font-bold text-slate-400">SEO Optimized</span>
                        </div>
                        <h3 class="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">Hoosier Helpers Senior Care LLC</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-6">
                            A fast, secure, and professionally coded web presence built for a local senior care provider. Features local Bedford JSON-LD schemas, high-contrast accessible layouts, and seamless callback request capture designed to establish maximum safety and trust for community families.
                        </p>

                        <!-- Premium Browser Viewport Mockup Carousel -->
                        <div class="relative rounded-2xl border border-stone-200/80 shadow-md overflow-hidden bg-stone-50 mb-8 mt-4 group/browser">
                            <!-- Browser Titlebar -->
                            <div class="bg-stone-100 border-b border-stone-200/60 px-4 py-2.5 flex items-center space-x-2">
                                <div class="flex space-x-1">
                                    <div class="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                                    <div class="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                                    <div class="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                                </div>
                                <div class="flex-1 text-center bg-white/85 rounded-md py-0.5 px-3 text-[9px] text-slate-400 font-bold tracking-wide max-w-[180px] mx-auto truncate border border-stone-200/30">
                                    hoosierhelpersseniorcare.com
                                </div>
                            </div>
                            <!-- Browser Viewport -->
                            <div class="relative aspect-[16/10] overflow-hidden bg-white">
                                <!-- Slides -->
                                <img src="HHSC1.jpg" alt="Hoosier Helpers Home Page" class="hoosierhelpers-slide absolute inset-0 w-full h-full object-contain transition-all duration-700 opacity-100 hover:scale-105">
                                <img src="HHSC2.jpg" alt="Hoosier Helpers Services" class="hoosierhelpers-slide absolute inset-0 w-full h-full object-contain transition-all duration-700 opacity-0 hover:scale-105">
                                <img src="HHSC3.jpg" alt="Hoosier Helpers Team" class="hoosierhelpers-slide absolute inset-0 w-full h-full object-contain transition-all duration-700 opacity-0 hover:scale-105">
                                <img src="HHSC4.jpg" alt="Hoosier Helpers Area" class="hoosierhelpers-slide absolute inset-0 w-full h-full object-contain transition-all duration-700 opacity-0 hover:scale-105">
                                <img src="HHSC5.jpg" alt="Hoosier Helpers Contact" class="hoosierhelpers-slide absolute inset-0 w-full h-full object-contain transition-all duration-700 opacity-0 hover:scale-105">
                            </div>
                            <!-- Slide Label Badge -->
                            <div class="absolute bottom-3 left-3 bg-slate-900/85 backdrop-blur-sm px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-white" id="hoosierhelpers-text">
                                1. Professional Family Companion Care
                            </div>
                        </div>
                    </div>
                    <div class="pt-6 border-t border-stone-100 flex justify-between items-center">
                        <span class="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Bedford, IN</span>
                        <a href="https://hoosierhelpersseniorcare.com" target="_blank" class="text-indigo-600 font-extrabold hover:text-indigo-800 transition uppercase tracking-wider text-xs font-black">Visit Website →</a>
                    </div>
                </div>

                <!-- Consultation Card -->
                <div class="border-2 border-dashed border-stone-200 p-10 rounded-[2rem] flex flex-col justify-center items-center text-center bg-[#FAF9F5]/40 min-h-[350px]">
                    <h3 class="text-2xl font-black text-slate-800 mb-4 uppercase tracking-tight">Your Build Is Next</h3>
                    <p class="text-slate-600 text-sm mb-8 max-w-sm leading-relaxed">We map out your manual business bottlenecks and build the custom software to eliminate them forever.</p>
                    <a href="hireus.html" class="btn-primary">Consult My Project</a>
                </div>

            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-16 border-t border-stone-200 text-center text-slate-500 text-xs tracking-widest uppercase px-6 flex flex-col items-center justify-center space-y-6">
        <!-- Indiana Outline Badge -->
        <div class="inline-flex items-center space-x-3 bg-white border border-stone-200 px-6 py-3.5 rounded-full shadow-md">
            <!-- Sketched-style Indiana Outline SVG with pulsing star -->
            <svg class="h-10 w-auto text-indigo-600 animate-fade-in" viewBox="0 0 100 140" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M 36,16 C 45,14 65,15 84,14 C 85,30 84,65 83,95 C 82,104 80,110 78,111 C 74,111 68,117 65,119 C 59,122 55,115 50,121 C 46,126 40,125 36,122 C 28,118 24,124 19,124 C 22,118 28,108 30,103 C 32,96 30,85 32,75 C 34,60 35,35 34,16 Z" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="4.5" />
                <path d="M 48,90 L 50,85 L 52,90 L 57,90 L 53,93 L 55,98 L 50,95 L 45,98 L 47,93 L 43,90 Z" fill="#F59E0B" class="star-pulse" />
            </svg>
            <div class="text-left leading-tight">
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Enterprise Class</p>
                <p class="text-xs font-black text-slate-800 uppercase tracking-wider">US Owned & Operated</p>
                <p class="text-[9px] font-bold text-indigo-500 uppercase tracking-widest">Bedford, Indiana</p>
            </div>
        </div>
        <div class="space-y-2 text-center text-[11px]">
            <p>&copy; 2026 Hoosier AI Automations. All Rights Reserved.</p>
        </div>
    </footer>

    <!-- Light-Mode Chat Widget -->
    <div id="chat-widget">
        <div id="chat-window">
            <div id="chat-header" class="flex justify-between items-center p-5 border-b border-stone-200/60 bg-slate-50">
                <h3 class="text-indigo-600 font-extrabold">Haas</h3>
                <button id="chat-close" class="text-slate-400 hover:text-slate-800 text-xl font-bold">&times;</button>
            </div>
            <div id="chat-messages" class="flex-1 p-5 overflow-y-auto space-y-4 flex flex-col">
                <div class="bg-stone-100 text-slate-800 p-3.5 rounded-[1.25rem] text-sm max-w-[85%] self-start mr-auto">Hello! I'm Haas. How can we help automate your business today?</div>
            </div>
            <div id="chat-input-area" class="p-4 border-t border-stone-100 bg-white flex gap-2">
                <input type="text" id="chat-input" placeholder="Ask anything..." class="bg-stone-50 border border-stone-200/60 rounded-full px-4 py-2.5 flex-1 text-sm outline-none text-slate-800 focus:border-indigo-500 focus:bg-white transition">
                <button id="chat-submit" class="bg-indigo-600 hover:bg-indigo-700 transition w-10 h-10 rounded-full flex items-center justify-center text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
            </div>
        </div>
        <div id="chat-bubble">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
        </div>
    </div>

    <script src="chat.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // 1. Featured Mobile app (RevAI)
            const revaiSlides = document.querySelectorAll('.slide');
            const revaiText = document.getElementById('slide-text');
            const revaiCaptions = ["1. Welcome Page", "2. Vehicle Selection", "3. Zip Code Routing", "4. Service Location", "5. Visual Assessment", "6. AI Diagnosis Complete", "7. Contact Information"];
            let revaiIdx = 0;
            
            if (revaiSlides.length > 0) {
                setInterval(() => {
                    revaiSlides[revaiIdx].style.opacity = '0';
                    revaiIdx = (revaiIdx + 1) % revaiSlides.length;
                    revaiSlides[revaiIdx].style.opacity = '1';
                    if (revaiText) revaiText.innerText = revaiCaptions[revaiIdx];
                }, 3500);
            }

            // 2. Sugar Shell Carousel
            const ssSlides = document.querySelectorAll('.sugarshell-slide');
            const ssText = document.getElementById('sugarshell-text');
            const ssCaptions = [
                "1. Home Page & Sweet Offerings",
                "2. Custom Bakery Menu Selection",
                "3. Elegant Interactive Elements",
                "4. Frictionless Checkout Form"
            ];
            let ssIdx = 0;
            
            if (ssSlides.length > 0) {
                setInterval(() => {
                    ssSlides[ssIdx].style.opacity = '0';
                    ssIdx = (ssIdx + 1) % ssSlides.length;
                    ssSlides[ssIdx].style.opacity = '1';
                    if (ssText) ssText.innerText = ssCaptions[ssIdx];
                }, 3600);
            }

            // 3. Visit Hopes Carousel
            const vhSlides = document.querySelectorAll('.visithopes-slide');
            const vhText = document.getElementById('visithopes-text');
            const vhCaptions = [
                "1. Serene Sanctuary Welcome",
                "2. Premium Guest Accommodations",
                "3. Curated Healing Services",
                "4. Seamless Online Booking"
            ];
            let vhIdx = 0;
            
            if (vhSlides.length > 0) {
                setInterval(() => {
                    vhSlides[vhIdx].style.opacity = '0';
                    vhIdx = (vhIdx + 1) % vhSlides.length;
                    vhSlides[vhIdx].style.opacity = '1';
                    if (vhText) vhText.innerText = vhCaptions[vhIdx];
                }, 3700);
            }

            // 4. Hoosier Helpers Carousel
            const hhSlides = document.querySelectorAll('.hoosierhelpers-slide');
            const hhText = document.getElementById('hoosierhelpers-text');
            const hhCaptions = [
                "1. Professional Family Companion Care",
                "2. Personalized Specialized Services",
                "3. Trustworthy Care Team",
                "4. Local Lawrence County Commitment",
                "5. Direct Callback Connection Form"
            ];
            let hhIdx = 0;
            
            if (hhSlides.length > 0) {
                setInterval(() => {
                    hhSlides[hhIdx].style.opacity = '0';
                    hhIdx = (hhIdx + 1) % hhSlides.length;
                    hhSlides[hhIdx].style.opacity = '1';
                    if (hhText) hhText.innerText = hhCaptions[hhIdx];
                }, 3800);
            }
        });
    </script>
</body>
</html>
```

---

## File: Assets/pricing.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pricing | Hoosier AI Automations</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet">
    <link rel="icon" type="image/png" href="1330.png">
    <link rel="stylesheet" href="styles.css">
    <style>
        @keyframes pulse-star {
            0%, 100% { opacity: 0.3; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.2); }
        }
        .star-pulse {
            transform-origin: 50px 91.5px;
            animation: pulse-star 2s infinite ease-in-out;
        }
    </style>
</head>
<body class="bg-[#FAF9F5] text-slate-950 limestone-pattern min-h-screen relative">

    <!-- Glassmorphism Navbar -->
    <nav class="fixed w-full z-50 bg-white/70 backdrop-blur-md border-b border-stone-200/40 px-6 py-4 shadow-sm shadow-slate-100/50">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <a href="index.html" class="flex items-center space-x-3 text-slate-900 no-underline hover:opacity-90 transition">
                <img src="1330.png" alt="Hoosier AI Automations Logo" class="h-10 w-auto">
                <span class="text-xl font-black tracking-tighter uppercase italic text-slate-900">Hoosier AI Automations</span>
            </a>
            <div class="hidden md:flex space-x-8 items-center">
                <a href="index.html" class="nav-link text-slate-600 hover:text-indigo-600 font-bold">Home</a>
                <a href="promise.html" class="nav-link text-slate-600 hover:text-indigo-600 font-bold">Our Promise</a>
                <a href="pricing.html" class="nav-link text-indigo-600 font-bold">Pricing</a>
                <a href="portfolio.html" class="nav-link text-slate-600 hover:text-indigo-600 font-bold">Portfolio</a>
                <a href="hireus.html" class="nav-link text-slate-600 hover:text-indigo-600 font-bold">Hire Us</a>
                <a href="playground.html" class="nav-cta text-white font-bold">Open Playground</a>
            </div>
        </div>
    </nav>

    <!-- Header Section -->
    <header class="pt-40 pb-12 px-6 text-center">
        <div class="max-w-4xl mx-auto">
            <span class="text-indigo-600 font-bold uppercase tracking-widest text-xs bg-indigo-50/80 px-3.5 py-1.5 rounded-full w-fit border border-indigo-100/50 mx-auto block">Transparent Pricing</span>
            <h1 class="text-5xl md:text-7xl font-black mb-6 tracking-tight hero-text uppercase mt-4">
                Straight to the point pricing
            </h1>
            <p class="subtitle max-w-2xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed">
                Zero hidden fees. Zero templates. No surprise monthly maintenance taxes. We build tools that pay for themselves in saved hours.
            </p>
        </div>
    </header>

    <!-- Pricing Content (No AI vs AI-Powered Board) -->
    <section id="pricing" class="py-12 px-6 max-w-7xl mx-auto">
        <div class="max-w-6xl mx-auto">
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                
                <!-- COLUMN 1: OLD SCHOOL CODE: NO AI -->
                <div class="limestone-card p-8 md:p-12 rounded-[2.5rem] border border-stone-200/60 shadow-lg flex flex-col justify-between bg-white">
                    <div>
                        <!-- Header badge -->
                        <div class="flex justify-between items-center mb-6">
                            <span class="bg-slate-100 text-slate-700 font-extrabold text-[10px] tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-slate-200/60">Old School Code: No AI</span>
                            <span class="text-xs font-bold text-slate-400">Pure Custom Coding</span>
                        </div>
                        <h2 class="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tight">Pure & Reliable</h2>
                        <p class="text-sm text-slate-500 mb-8 font-semibold">Pure, fast, reliable builds. Zero AI logic.</p>
                        
                        <!-- Packages inside Column 1 -->
                        <div class="space-y-6">
                            
                            <!-- Standard Website -->
                            <div class="bg-[#FAF9F5]/40 border border-stone-200/50 rounded-2xl p-6 shadow-sm">
                                <div class="flex justify-between items-start mb-2">
                                    <h4 class="text-lg font-black text-slate-800 uppercase tracking-tight">Standard Website</h4>
                                    <span class="text-xs font-black text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100/40">$0 Consultation</span>
                                </div>
                                <div class="flex items-baseline space-x-1 mb-3">
                                    <span class="text-2xl font-black text-slate-900">$99</span>
                                    <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Upfront</span>
                                    <span class="text-slate-300 mx-2">|</span>
                                    <span class="text-lg font-bold text-slate-800">$49/mo</span>
                                    <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Maintenance</span>
                                </div>
                                <p class="text-xs text-slate-500 leading-relaxed">Includes professional high-contrast design, cloud security, hosting, updates, and 24/7 dedicated local support.</p>
                            </div>

                            <!-- Simple Automations -->
                            <div class="bg-[#FAF9F5]/40 border border-stone-200/50 rounded-2xl p-6 shadow-sm">
                                <div class="flex justify-between items-start mb-2">
                                    <h4 class="text-lg font-black text-slate-800 uppercase tracking-tight">Simple Automations</h4>
                                    <span class="text-xs font-black text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100/40">$0 Consultation</span>
                                </div>
                                <div class="flex items-baseline space-x-1 mb-3">
                                    <span class="text-2xl font-black text-slate-900">$149</span>
                                    <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Upfront</span>
                                    <span class="text-slate-300 mx-2">|</span>
                                    <span class="text-lg font-bold text-slate-800">$79/mo</span>
                                    <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Maintenance</span>
                                </div>
                                <p class="text-xs text-slate-500 leading-relaxed">Custom background workflows connecting your legacy APIs, tools, forms, and database platforms.</p>
                            </div>

                            <!-- Build Your Way -->
                            <div class="border border-stone-200/40 rounded-2xl p-5 flex justify-between items-center bg-white">
                                <div>
                                    <h4 class="text-xs font-black text-slate-800 uppercase tracking-wider">Build Your Way</h4>
                                    <p class="text-[10px] text-slate-400 font-semibold uppercase tracking-widest mt-1">Pay per custom page</p>
                                </div>
                                <span class="text-lg font-black text-indigo-600">$25 <span class="text-[10px] font-bold text-slate-400 uppercase">/ page</span></span>
                            </div>

                            <!-- The Hand-Off -->
                            <div class="border border-stone-200/40 rounded-2xl p-5 flex justify-between items-center bg-white">
                                <div>
                                    <h4 class="text-xs font-black text-slate-800 uppercase tracking-wider">The Hand-Off</h4>
                                    <p class="text-[10px] text-slate-400 font-semibold uppercase tracking-widest mt-1">Built & fully handed over</p>
                                </div>
                                <span class="text-lg font-black text-indigo-600">$499 <span class="text-[10px] font-bold text-slate-400 uppercase">One-time</span></span>
                            </div>

                        </div>
                    </div>
                    <div class="mt-12">
                        <a href="hireus.html" class="btn-secondary w-full text-center text-xs uppercase tracking-widest font-black py-4">Request No-AI Build</a>
                    </div>
                </div>

                <!-- COLUMN 2: NEXT-GEN CODING: AI POWERED -->
                <div class="limestone-card p-8 md:p-12 rounded-[2.5rem] border-2 border-indigo-200 shadow-xl flex flex-col justify-between bg-white relative overflow-hidden">
                    <div class="absolute -top-12 -right-12 w-40 h-40 bg-indigo-50/55 rounded-full blur-3xl"></div>
                    <div>
                        <!-- Header badge -->
                        <div class="flex justify-between items-center mb-6">
                            <span class="bg-indigo-600 text-white font-extrabold text-[10px] tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-indigo-700 shadow-sm">Next-Gen Coding: AI Powered</span>
                            <span class="text-xs font-bold text-indigo-600">Smart Integrations</span>
                        </div>
                        <h2 class="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tight">AI Augmented</h2>
                        <p class="text-sm text-indigo-600 mb-8 font-semibold">Custom-trained assistants. AI powered.</p>
                        
                        <!-- Packages inside Column 2 -->
                        <div class="space-y-6">
                            
                            <!-- AI Concierge -->
                            <div class="bg-indigo-50/10 border border-indigo-100 rounded-2xl p-6 shadow-sm">
                                <div class="flex justify-between items-start mb-2">
                                    <h4 class="text-lg font-black text-slate-800 uppercase tracking-tight">AI Concierge</h4>
                                    <span class="text-xs font-black text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100/40">$0 Consultation</span>
                                </div>
                                <div class="flex items-baseline space-x-1 mb-3">
                                    <span class="text-2xl font-black text-slate-900">$199</span>
                                    <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Upfront</span>
                                    <span class="text-slate-300 mx-2">|</span>
                                    <span class="text-lg font-bold text-indigo-600">$125/mo</span>
                                    <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Maintenance</span>
                                </div>
                                <p class="text-xs text-slate-500 leading-relaxed">Dedicated AI assistant trained on your docs. Includes ongoing AI prompt tuning, serverless hosting, and support.</p>
                            </div>

                            <!-- Enterprise AI -->
                            <div class="bg-indigo-50/10 border border-indigo-100 rounded-2xl p-6 shadow-sm">
                                <div class="flex justify-between items-start mb-2">
                                    <h4 class="text-lg font-black text-slate-800 uppercase tracking-tight">Enterprise AI</h4>
                                    <span class="text-xs font-black text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100/40">$0 Consultation</span>
                                </div>
                                <div class="flex items-baseline space-x-1 mb-3">
                                    <span class="text-2xl font-black text-slate-900">$299</span>
                                    <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Upfront</span>
                                    <span class="text-slate-300 mx-2">|</span>
                                    <span class="text-lg font-bold text-indigo-600">$149/mo</span>
                                    <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Maintenance</span>
                                </div>
                                <p class="text-xs text-slate-500 leading-relaxed">High-scale automation using computer vision/AI eyesight, automated Stripe invoicing, and backend deep learning APIs.</p>
                            </div>

                            <!-- Build Your Way -->
                            <div class="border border-indigo-100 rounded-2xl p-5 flex justify-between items-center bg-white">
                                <div>
                                    <h4 class="text-xs font-black text-slate-800 uppercase tracking-wider">Build Your Way</h4>
                                    <p class="text-[10px] text-slate-400 font-semibold uppercase tracking-widest mt-1">Pay per custom AI-connected page</p>
                                </div>
                                <span class="text-lg font-black text-indigo-600">$50 <span class="text-[10px] font-bold text-slate-400 uppercase">/ page</span></span>
                            </div>

                            <!-- The Hand-Off -->
                            <div class="border border-indigo-100 rounded-2xl p-5 flex justify-between items-center bg-white">
                                <div>
                                    <h4 class="text-xs font-black text-slate-800 uppercase tracking-wider">The Hand-Off</h4>
                                    <p class="text-[10px] text-slate-400 font-semibold uppercase tracking-widest mt-1">Built & fully handed over</p>
                                </div>
                                <span class="text-lg font-black text-indigo-600">$499 <span class="text-[10px] font-bold text-slate-400 uppercase">One-time</span></span>
                            </div>

                        </div>
                    </div>
                    <div class="mt-12">
                        <a href="hireus.html" class="btn-primary w-full text-center text-xs uppercase tracking-widest font-black py-4 shadow-md shadow-indigo-100">Request AI Build</a>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-16 border-t border-stone-200 text-center text-slate-500 text-xs tracking-widest uppercase px-6 flex flex-col items-center justify-center space-y-6">
        <!-- Indiana Outline Badge -->
        <div class="inline-flex items-center space-x-3 bg-white border border-stone-200 px-6 py-3.5 rounded-full shadow-md">
            <!-- Sketched-style Indiana Outline SVG with pulsing star -->
            <svg class="h-10 w-auto text-indigo-600 animate-fade-in" viewBox="0 0 100 140" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M 36,16 C 45,14 65,15 84,14 C 85,30 84,65 83,95 C 82,104 80,110 78,111 C 74,111 68,117 65,119 C 59,122 55,115 50,121 C 46,126 40,125 36,122 C 28,118 24,124 19,124 C 22,118 28,108 30,103 C 32,96 30,85 32,75 C 34,60 35,35 34,16 Z" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="4.5" />
                <path d="M 48,90 L 50,85 L 52,90 L 57,90 L 53,93 L 55,98 L 50,95 L 45,98 L 47,93 L 43,90 Z" fill="#F59E0B" class="star-pulse" />
            </svg>
            <div class="text-left leading-tight">
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Enterprise Class</p>
                <p class="text-xs font-black text-slate-800 uppercase tracking-wider">US Owned & Operated</p>
                <p class="text-[9px] font-bold text-indigo-500 uppercase tracking-widest">Bedford, Indiana</p>
            </div>
        </div>
        <div class="space-y-2 text-center text-[11px]">
            <p>&copy; 2026 Hoosier AI Automations. All Rights Reserved.</p>
        </div>
    </footer>

    <!-- Light-Mode Chat Widget -->
    <div id="chat-widget">
        <div id="chat-window">
            <div id="chat-header" class="flex justify-between items-center p-5 border-b border-stone-200/60 bg-slate-50">
                <h3 class="text-indigo-600 font-extrabold">Haas</h3>
                <button id="chat-close" class="text-slate-400 hover:text-slate-800 text-xl font-bold">&times;</button>
            </div>
            <div id="chat-messages" class="flex-1 p-5 overflow-y-auto space-y-4 flex flex-col">
                <div class="bg-stone-100 text-slate-800 p-3.5 rounded-[1.25rem] text-sm max-w-[85%] self-start mr-auto">Hello! I'm Haas. How can we help automate your business today?</div>
            </div>
            <div id="chat-input-area" class="p-4 border-t border-stone-100 bg-white flex gap-2">
                <input type="text" id="chat-input" placeholder="Ask anything..." class="bg-stone-50 border border-stone-200/60 rounded-full px-4 py-2.5 flex-1 text-sm outline-none text-slate-800 focus:border-indigo-500 focus:bg-white transition">
                <button id="chat-submit" class="bg-indigo-600 hover:bg-indigo-700 transition w-10 h-10 rounded-full flex items-center justify-center text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
            </div>
        </div>
        <div id="chat-bubble">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
        </div>
    </div>

    <script src="chat.js"></script>
</body>
</html>
```

---

## File: Assets/promise.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Pillars Of Promise | Hoosier AI Automations</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet">
    <link rel="icon" type="image/png" href="1330.png">
    <link rel="stylesheet" href="styles.css">
    <style>
        @keyframes pulse-star {
            0%, 100% { opacity: 0.3; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.2); }
        }
        .star-pulse {
            transform-origin: 50px 91.5px;
            animation: pulse-star 2s infinite ease-in-out;
        }
    </style>
</head>
<body class="bg-[#FAF9F5] text-slate-950 limestone-pattern min-h-screen relative">

    <!-- Glassmorphism Navbar -->
    <nav class="fixed w-full z-50 bg-white/70 backdrop-blur-md border-b border-stone-200/40 px-6 py-4 shadow-sm shadow-slate-100/50">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <a href="index.html" class="flex items-center space-x-3 text-slate-900 no-underline hover:opacity-90 transition">
                <img src="1330.png" alt="Hoosier AI Automations Logo" class="h-10 w-auto">
                <span class="text-xl font-black tracking-tighter uppercase italic text-slate-900">Hoosier AI Automations</span>
            </a>
            <div class="hidden md:flex space-x-8 items-center">
                <a href="index.html" class="nav-link text-slate-600 hover:text-indigo-600 font-bold">Home</a>
                <a href="promise.html" class="nav-link text-indigo-600 font-bold">Our Promise</a>
                <a href="pricing.html" class="nav-link text-slate-600 hover:text-indigo-600 font-bold">Pricing</a>
                <a href="portfolio.html" class="nav-link text-slate-600 hover:text-indigo-600 font-bold">Portfolio</a>
                <a href="hireus.html" class="nav-link text-slate-600 hover:text-indigo-600 font-bold">Hire Us</a>
                <a href="playground.html" class="nav-cta text-white font-bold">Open Playground</a>
            </div>
        </div>
    </nav>

    <!-- Header Section -->
    <header class="pt-40 pb-12 px-6 text-center animate-fade-in">
        <div class="max-w-4xl mx-auto">
            <span class="text-indigo-600 font-bold uppercase tracking-widest text-xs bg-indigo-50/80 px-3.5 py-1.5 rounded-full w-fit border border-indigo-100/50 mx-auto block">Our Foundations</span>
            <h1 class="text-5xl md:text-7xl font-black mb-6 tracking-tight hero-text uppercase mt-4">
                Our Pillars Of Promise
            </h1>
            <p class="subtitle max-w-2xl mx-auto text-slate-600 text-base md:text-lg">
                Our Promise: By doing this we can protect our future, create more jobs, and help towards the goal of a better, healthier future.
            </p>
        </div>
    </header>

    <!-- Promise Pillars (Bento Grid) -->
    <section id="promise" class="py-12 px-6 max-w-7xl mx-auto">
        <div class="max-w-5xl mx-auto space-y-12">
            
            <!-- Pillar 1: Human Capital First. Embrace, Don't Replace. -->
            <div class="limestone-card p-10 md:p-16 rounded-[2.5rem] border border-stone-200/50 shadow-xl relative overflow-hidden flex flex-col md:flex-row gap-10 group hover:border-indigo-100 transition duration-300">
                <div class="absolute -top-12 -right-12 w-48 h-48 bg-indigo-50/40 rounded-full blur-3xl"></div>
                <div class="md:w-1/3 flex flex-col justify-between">
                    <div>
                        <span class="text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100/40">Human Capital First</span>
                        <h3 class="text-3xl font-black mt-4 uppercase text-slate-900 tracking-tight">Embrace, <br>Don't Replace.</h3>
                    </div>
                    <p class="text-slate-400 font-bold text-xs tracking-widest uppercase mt-8 md:mt-0">Pillar One</p>
                </div>
                <div class="md:w-2/3">
                    <p class="text-slate-600 text-base md:text-lg leading-relaxed">
                        We won't stand for the narrative that artificial intelligence is meant to replace hard-working members in ANY community. Our tools are designed to take the boring, redundant chores off of your staff's plates—like chasing invoices, typing forms, and manual booking—so they can focus on delivering great physical service to YOUR local regulars. Let's be honest here... Your employees might not tell you when they feel understaffed, underpaid, or overworked. A task that might take them 20 minutes and forces them to skip a break could be handled by an automation—and who knows, it could also save you from having to find a replacement when they've simply had enough. We build custom software that acts as an extra set of hands, multiplying what your current team can achieve without expanding your payroll or burning out your staff.
                    </p>
                </div>
            </div>

            <!-- Pillar 2: Zero Carbon Footprint -->
            <div class="limestone-card p-10 md:p-16 rounded-[2.5rem] border border-stone-200/50 shadow-xl relative overflow-hidden flex flex-col md:flex-row gap-10 group hover:border-emerald-100 transition duration-300 bg-emerald-50/5">
                <div class="absolute -bottom-12 -left-12 w-48 h-48 bg-emerald-100/20 rounded-full blur-3xl"></div>
                <div class="md:w-1/3 flex flex-col justify-between">
                    <div>
                        <span class="text-[10px] font-black text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100/40">Zero Carbon Footprint</span>
                        <h3 class="text-3xl font-black mt-4 uppercase text-slate-900 tracking-tight">Clean <br>Code.</h3>
                    </div>
                    <p class="text-slate-400 font-bold text-xs tracking-widest uppercase mt-8 md:mt-0">Pillar Two</p>
                </div>
                <div class="md:w-2/3">
                    <p class="text-slate-600 text-base md:text-lg leading-relaxed">
                        Big tech code is notoriously bloated, running dozens of background analytics engines that drain phone batteries and load sluggishly. Hoosier AI Automations prides itself on writing pure, lightweight, custom-coded layouts styled with Tailwind CSS. By deploying serverless cloud frameworks and static assets on high-speed global CDNs, we ensure your client platforms load in under 0.4 seconds. This reduces browser CPU load, saves mobile battery life, and minimizes the physical carbon emissions generated by local web searches.
                    </p>
                </div>
            </div>

            <!-- Pillar 3: Supporting Mother Nature's Gift -->
            <div class="limestone-card p-10 md:p-16 rounded-[2.5rem] border border-stone-200/50 shadow-xl relative overflow-hidden flex flex-col md:flex-row gap-10 group hover:border-amber-100 transition duration-300 bg-amber-50/5">
                <div class="absolute -top-12 -left-12 w-48 h-48 bg-amber-50/40 rounded-full blur-3xl"></div>
                <div class="md:w-1/3 flex flex-col justify-between">
                    <div>
                        <span class="text-[10px] font-black text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-100/40">Supporting Nature</span>
                        <h3 class="text-3xl font-black mt-4 uppercase text-slate-900 tracking-tight">Supporting <br>Mother Nature.</h3>
                    </div>
                    <p class="text-slate-400 font-bold text-xs tracking-widest uppercase mt-8 md:mt-0">Pillar Three</p>
                </div>
                <div class="md:w-2/3">
                    <p class="text-slate-600 text-base md:text-lg leading-relaxed">
                        We don't send our revenues off to out-of-state shareholders or offshore tax shelters. Hoosier AI Automations is COMMITTED to supporting your local neighborhoods no matter where. We pledge 5% of all net project profit directly back to a tailored local project of your choice when you partner with us. Whether it's your local youth shelters, school extracurricular programs, food banks, or historical site preservation. When your business grows with us, you are directly investing in the solid future of your community.
                    </p>
                </div>
            </div>

        </div>
    </section>

    <!-- Grayscale Selected Tech Ribbon (Promise Page Integration) -->
    <div class="py-12 border-t border-b border-stone-200/50 max-w-5xl mx-auto px-6 mb-12">
        <p class="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Our Selected Enterprise Stack</p>
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 hover:opacity-60 transition duration-300">
            <!-- GitHub Logo -->
            <div class="flex items-center space-x-2 grayscale">
                <svg class="w-6 h-6 text-slate-600" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clip-rule="evenodd"/></svg>
                <span class="font-extrabold text-sm tracking-tight text-slate-700">GitHub</span>
            </div>
            <!-- Netlify Logo -->
            <div class="flex items-center space-x-2 grayscale">
                <svg class="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 24 24"><path d="M11.97 2c-.14 0-.29.06-.39.16L1.83 11.9c-.21.2-.21.53 0 .73l1.8 1.78c.2.2.53.2.73 0l7.22-7.14V21.5c0 .28.22.5.5.5h2c.28 0 .5-.22.5-.5V7.27l7.22 7.14c.2.2.53.2.73 0l1.8-1.78c.21-.2.21-.53 0-.73L12.36 2.16c-.1-.1-.25-.16-.39-.16z"/></svg>
                <span class="font-extrabold text-sm tracking-tight text-slate-700">Netlify</span>
            </div>
            <!-- Tailwind CSS Logo -->
            <div class="flex items-center space-x-2 grayscale">
                <svg class="w-6 h-6 text-slate-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>
                <span class="font-extrabold text-sm tracking-tight text-slate-700">TailwindCSS</span>
            </div>
            <!-- React Logo -->
            <div class="flex items-center space-x-2 grayscale">
                <svg class="w-6 h-6 text-slate-600 animate-spin-slow" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zm-10-2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/></svg>
                <span class="font-extrabold text-sm tracking-tight text-slate-700">React</span>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="py-16 border-t border-stone-200 text-center text-slate-500 text-xs tracking-widest uppercase px-6 flex flex-col items-center justify-center space-y-6">
        <!-- Indiana Outline Badge -->
        <div class="inline-flex items-center space-x-3 bg-white border border-stone-200 px-6 py-3.5 rounded-full shadow-md">
            <!-- Sketched-style Indiana Outline SVG with pulsing star -->
            <svg class="h-10 w-auto text-indigo-600 animate-fade-in" viewBox="0 0 100 140" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M 36,16 C 45,14 65,15 84,14 C 85,30 84,65 83,95 C 82,104 80,110 78,111 C 74,111 68,117 65,119 C 59,122 55,115 50,121 C 46,126 40,125 36,122 C 28,118 24,124 19,124 C 22,118 28,108 30,103 C 32,96 30,85 32,75 C 34,60 35,35 34,16 Z" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="4.5" />
                <path d="M 48,90 L 50,85 L 52,90 L 57,90 L 53,93 L 55,98 L 50,95 L 45,98 L 47,93 L 43,90 Z" fill="#F59E0B" class="star-pulse" />
            </svg>
            <div class="text-left leading-tight">
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Enterprise Class</p>
                <p class="text-xs font-black text-slate-800 uppercase tracking-wider">US Owned & Operated</p>
                <p class="text-[9px] font-bold text-indigo-500 uppercase tracking-widest">Bedford, Indiana</p>
            </div>
        </div>
        <div class="space-y-2 text-center text-[11px]">
            <p>&copy; 2026 Hoosier AI Automations. All Rights Reserved.</p>
        </div>
    </footer>

    <!-- Light-Mode Chat Widget -->
    <div id="chat-widget">
        <div id="chat-window">
            <div id="chat-header" class="flex justify-between items-center p-5 border-b border-stone-200/60 bg-slate-50">
                <h3 class="text-indigo-600 font-extrabold">Haas</h3>
                <button id="chat-close" class="text-slate-400 hover:text-slate-800 text-xl font-bold">&times;</button>
            </div>
            <div id="chat-messages" class="flex-1 p-5 overflow-y-auto space-y-4 flex flex-col">
                <div class="bg-stone-100 text-slate-800 p-3.5 rounded-[1.25rem] text-sm max-w-[85%] self-start mr-auto">Hello! I'm Haas. How can we help automate your business today?</div>
            </div>
            <div id="chat-input-area" class="p-4 border-t border-stone-100 bg-white flex gap-2">
                <input type="text" id="chat-input" placeholder="Ask anything..." class="bg-stone-50 border border-stone-200/60 rounded-full px-4 py-2.5 flex-1 text-sm outline-none text-slate-800 focus:border-indigo-500 focus:bg-white transition">
                <button id="chat-submit" class="bg-indigo-600 hover:bg-indigo-700 transition w-10 h-10 rounded-full flex items-center justify-center text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
            </div>
        </div>
        <div id="chat-bubble">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
        </div>
    </div>

    <script src="chat.js"></script>
</body>
</html>
```

---

## File: Assets/playground.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Haas Playground | Hoosier AI Automations</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;850;900&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
    <link rel="icon" type="image/png" href="1330.png">
    <link rel="manifest" href="manifest.json">
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #FAF9F5;
        }
        /* Overwriting default colors for brand harmony */
        .brand-indigo-bg {
            background-color: #001C48;
        }
        .brand-indigo-text {
            color: #001C48;
        }
        .brand-indigo-border {
            border-color: #001C48;
        }
        /* Blurred canvas preview paywall */
        .paywall-blur {
            filter: blur(10px);
            pointer-events: none;
            user-select: none;
        }
        /* Pixelated virtual pet styles for Haasy the Bearded Dragon */
        .pixel-grid {
            display: grid;
            grid-template-columns: repeat(10, 1fr);
            gap: 1.5px;
            width: 100px;
            height: 100px;
            margin: 0 auto;
        }
        .pixel-cell {
            background-color: transparent;
            aspect-ratio: 1;
        }
        .pixel-black { background-color: #000000; }
        .pixel-dragon { background-color: #854D0E; } /* Brown */
        .pixel-beard { background-color: #EA580C; } /* Orange spiky beard */
        .pixel-eye { background-color: #FACC15; } /* Yellow eye */
        .pixel-white { background-color: #FFFFFF; }
        
        /* Kids Neubrutalism Legos */
        .kids-lego-card {
            border: 4px solid #000000;
            box-shadow: 6px 6px 0px #000000;
            border-radius: 20px;
            background: #FFFFFF;
            transition: all 0.2s ease;
        }
        .kids-lego-card:hover {
            transform: translate(-2px, -2px);
            box-shadow: 8px 8px 0px #000000;
        }
        .btn-lego {
            border: 3px solid #000000;
            box-shadow: 4px 4px 0px #000000;
            border-radius: 12px;
            font-weight: 900;
            text-transform: uppercase;
            transition: all 0.15s;
        }
        .btn-lego:hover {
            transform: translate(-1px, -1px);
            box-shadow: 5px 5px 0px #000000;
        }
        .btn-lego:active {
            transform: translate(2px, 2px);
            box-shadow: 0px 0px 0px #000000;
        }
    </style>
</head>
<body class="bg-[#FAF9F5] text-slate-900 limestone-pattern min-h-screen relative overflow-x-hidden">

    <!-- Navigation Header -->
    <nav class="fixed w-full z-50 bg-white/75 backdrop-blur-md border-b border-stone-200/40 px-6 py-4 shadow-sm">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <a href="index.html" class="flex items-center space-x-3 text-slate-900 hover:opacity-95 transition">
                <img src="1330.png" alt="Logo" class="h-10 w-auto">
                <span class="text-xl font-black tracking-tighter uppercase italic">Hoosier AI Automations</span>
            </a>
            <div class="hidden md:flex space-x-8 items-center">
                <a href="index.html" class="nav-link text-slate-600 hover:text-indigo-600 font-bold">Home</a>
                <a href="promise.html" class="nav-link text-slate-600 hover:text-indigo-600 font-bold">Our Promise</a>
                <a href="pricing.html" class="nav-link text-slate-600 hover:text-indigo-600 font-bold">Pricing</a>
                <a href="portfolio.html" class="nav-link text-slate-600 hover:text-indigo-600 font-bold">Portfolio</a>
                <a href="hireus.html" class="nav-link text-slate-600 hover:text-indigo-600 font-bold">Hire Us</a>
                <a href="playground.html" class="nav-cta text-white font-bold">Open Playground</a>
            </div>
        </div>
    </nav>

    <!-- Onboarding Stage Wizard -->
    <div id="onboarding-stage" class="pt-36 pb-12 px-6 flex items-center justify-center min-h-[85vh]">
        <div class="max-w-xl w-full limestone-card p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
            
            <!-- Step Indicators -->
            <div class="flex justify-between items-center mb-10 relative z-10">
                <div class="flex-1 h-1 bg-stone-200 rounded-full overflow-hidden mr-2">
                    <div id="progress-bar-fill" class="h-full bg-indigo-600 transition-all duration-500 w-1/3"></div>
                </div>
                <span id="step-counter" class="text-xs font-black uppercase text-indigo-600 tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">Step 1 of 3</span>
            </div>

            <form id="onboarding-form" class="space-y-8 relative z-10" onsubmit="return false;">
                
                <!-- ================= STEP 1: ROLE IDENTIFICATION ================= -->
                <div id="onboarding-step-1" class="step-transition active space-y-6">
                    <div class="text-center">
                        <span class="text-indigo-600 font-black text-[10px] tracking-widest uppercase">Select Your Focus</span>
                        <h2 class="text-3xl font-black text-slate-900 mt-2 tracking-tight uppercase">Who Are You?</h2>
                        <p class="text-slate-500 text-sm mt-1">We personalize your console playground experience based on your background.</p>
                    </div>

                    <div class="grid grid-cols-2 gap-4 pt-2">
                        <!-- Role card components (No Emojis - Thin line SVG icons) -->
                        <label class="role-card border-2 border-stone-200/60 rounded-2xl p-5 cursor-pointer hover:border-indigo-500 hover:bg-indigo-50/10 transition flex flex-col justify-between h-32 relative select-none" onclick="selectRole('Founder/Owner')">
                            <input type="radio" name="user_role" value="Founder/Owner" class="hidden">
                            <svg class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span class="font-extrabold text-slate-800 text-xs uppercase tracking-wide">Founder/Owner</span>
                        </label>

                        <label class="role-card border-2 border-stone-200/60 rounded-2xl p-5 cursor-pointer hover:border-indigo-500 hover:bg-indigo-50/10 transition flex flex-col justify-between h-32 relative select-none" onclick="selectRole('Developer')">
                            <input type="radio" name="user_role" value="Developer" class="hidden">
                            <svg class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                            <span class="font-extrabold text-slate-800 text-xs uppercase tracking-wide">Developer</span>
                        </label>

                        <label class="role-card border-2 border-stone-200/60 rounded-2xl p-5 cursor-pointer hover:border-indigo-500 hover:bg-indigo-50/10 transition flex flex-col justify-between h-32 relative select-none" onclick="selectRole('Innovator')">
                            <input type="radio" name="user_role" value="Innovator" class="hidden">
                            <svg class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            <span class="font-extrabold text-slate-800 text-xs uppercase tracking-wide">Innovator</span>
                        </label>

                        <label class="role-card border-2 border-stone-200/60 rounded-2xl p-5 cursor-pointer hover:border-indigo-500 hover:bg-indigo-50/10 transition flex flex-col justify-between h-32 relative select-none" onclick="selectRole('Marketer')">
                            <input type="radio" name="user_role" value="Marketer" class="hidden">
                            <svg class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                            </svg>
                            <span class="font-extrabold text-slate-800 text-xs uppercase tracking-wide">Marketer</span>
                        </label>

                        <label class="role-card border-2 border-stone-200/60 rounded-2xl p-5 cursor-pointer hover:border-indigo-500 hover:bg-indigo-50/10 transition flex flex-col justify-between h-32 relative select-none" onclick="selectRole('Student')">
                            <input type="radio" name="user_role" value="Student" class="hidden">
                            <svg class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                            </svg>
                            <span class="font-extrabold text-slate-800 text-xs uppercase tracking-wide">Student</span>
                        </label>

                        <label class="role-card border-2 border-stone-200/60 rounded-2xl p-5 cursor-pointer hover:border-indigo-500 hover:bg-indigo-50/10 transition flex flex-col justify-between h-32 relative select-none" onclick="selectRole('Start-Up')">
                            <input type="radio" name="user_role" value="Start-Up" class="hidden">
                            <svg class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span class="font-extrabold text-slate-800 text-xs uppercase tracking-wide">Start-Up</span>
                        </label>
                    </div>

                    <!-- Role Feedback Box -->
                    <div id="role-feedback-box" class="hidden bg-indigo-50 border border-indigo-100/60 rounded-2xl p-4 text-xs font-semibold text-indigo-800 animate-fade-in text-left">
                        <span id="role-feedback-text"></span>
                    </div>

                    <button type="button" id="btn-continue-step-1" disabled onclick="nextStep(2)" class="w-full bg-stone-200 text-stone-400 cursor-not-allowed font-extrabold text-xs uppercase tracking-widest py-4 rounded-2xl transition-all duration-300">
                        Continue
                    </button>
                </div>

                <!-- ================= STEP 2: INTENT SELECTION ================= -->
                <div id="onboarding-step-2" class="step-transition hidden space-y-6">
                    <div class="text-center">
                        <span class="text-indigo-600 font-black text-[10px] tracking-widest uppercase">Target Your Purpose</span>
                        <h2 class="text-3xl font-black text-slate-900 mt-2 tracking-tight uppercase">What's Your Intent?</h2>
                        <p class="text-slate-500 text-sm mt-1">Select what you plan to engineer inside our interactive playground today.</p>
                    </div>

                    <div class="space-y-3 pt-2">
                        <label class="intent-card border-2 border-stone-200/60 rounded-2xl p-4 cursor-pointer hover:border-indigo-500 hover:bg-indigo-50/10 transition flex items-center justify-between relative select-none" onclick="selectIntent('Playground')">
                            <input type="radio" name="user_intent" value="Playground" class="hidden">
                            <div class="flex items-center space-x-4">
                                <svg class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div class="text-left">
                                    <h4 class="font-extrabold text-slate-800 text-xs uppercase tracking-wide">Explore Automation Playground</h4>
                                    <p class="text-[10px] text-slate-400 font-medium">Build blocks and see logic flows.</p>
                                </div>
                            </div>
                        </label>

                        <label class="intent-card border-2 border-stone-200/60 rounded-2xl p-4 cursor-pointer hover:border-indigo-500 hover:bg-indigo-50/10 transition flex items-center justify-between relative select-none" onclick="selectIntent('Workflows')">
                            <input type="radio" name="user_intent" value="Workflows" class="hidden">
                            <div class="flex items-center space-x-4">
                                <svg class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                </svg>
                                <div class="text-left">
                                    <h4 class="font-extrabold text-slate-800 text-xs uppercase tracking-wide">Map Active Workflows</h4>
                                    <p class="text-[10px] text-slate-400 font-medium">Optimize and design structural API paths.</p>
                                </div>
                            </div>
                        </label>

                        <label class="intent-card border-2 border-stone-200/60 rounded-2xl p-4 cursor-pointer hover:border-indigo-500 hover:bg-indigo-50/10 transition flex items-center justify-between relative select-none" onclick="selectIntent('Fun')">
                            <input type="radio" name="user_intent" value="Fun" class="hidden">
                            <div class="flex items-center space-x-4">
                                <svg class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m2.828-9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                                <div class="text-left">
                                    <h4 class="font-extrabold text-slate-800 text-xs uppercase tracking-wide">Just Having Fun</h4>
                                    <p class="text-[10px] text-slate-400 font-medium">Discover what smart integrations can build.</p>
                                </div>
                            </div>
                        </label>

                        <label class="intent-card border-2 border-stone-200/60 rounded-2xl p-4 cursor-pointer hover:border-indigo-500 hover:bg-indigo-50/10 transition flex items-center justify-between relative select-none" onclick="selectIntent('NotSure')">
                            <input type="radio" name="user_intent" value="NotSure" class="hidden">
                            <div class="flex items-center space-x-4">
                                <svg class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div class="text-left">
                                    <h4 class="font-extrabold text-slate-800 text-xs uppercase tracking-wide">Not Sure Yet</h4>
                                    <p class="text-[10px] text-slate-400 font-medium">Browse templates and explore options.</p>
                                </div>
                            </div>
                        </label>
                    </div>

                    <!-- Intent Feedback Box -->
                    <div id="intent-feedback-box" class="hidden bg-indigo-50 border border-indigo-100/60 rounded-2xl p-4 text-xs font-semibold text-indigo-800 animate-fade-in text-left">
                        <span id="intent-feedback-text"></span>
                    </div>

                    <div class="flex gap-4 pt-2">
                        <button type="button" onclick="nextStep(1)" class="w-1/3 bg-stone-100 hover:bg-stone-200 transition py-4 rounded-2xl text-slate-500 font-extrabold text-xs uppercase tracking-widest">Back</button>
                        <button type="button" id="btn-continue-step-2" disabled onclick="nextStep(3)" class="w-2/3 bg-stone-200 text-stone-400 cursor-not-allowed font-extrabold text-xs uppercase tracking-widest py-4 rounded-2xl transition-all duration-300">
                            Continue
                        </button>
                    </div>
                </div>

                <!-- ================= STEP 3: IDENTIFICATION & AGE VERIFICATION ================= -->
                <div id="onboarding-step-3" class="step-transition hidden space-y-6">
                    <div class="text-center">
                        <span class="text-indigo-600 font-black text-[10px] tracking-widest uppercase">Identity Verification</span>
                        <h2 class="text-3xl font-black text-slate-900 mt-2 tracking-tight uppercase">Verify Age</h2>
                        <p class="text-slate-500 text-sm mt-1">Please confirm your details to generate your custom playground console.</p>
                    </div>

                    <div class="space-y-5 pt-2 text-left">
                        <div class="space-y-1.5">
                            <label for="user-name-input" class="text-slate-600 text-xs font-black uppercase tracking-wider">Your Full Name</label>
                            <input type="text" id="user-name-input" placeholder="Your Name" required class="w-full bg-stone-50 border-2 border-stone-200/60 rounded-2xl px-5 py-4 text-sm font-semibold text-slate-800 focus:border-indigo-500 focus:bg-white outline-none transition">
                        </div>

                        <div class="space-y-3">
                            <label for="user-age-select" class="text-slate-600 text-xs font-black uppercase tracking-wider">Your Age</label>
                            <!-- Dropdown Age Selection (Dynamically scaled 5-80) -->
                            <select id="user-age-select" class="w-full bg-stone-50 border-2 border-stone-200/60 rounded-2xl px-5 py-4 text-sm font-semibold text-slate-800 focus:border-indigo-500 focus:bg-white outline-none transition">
                                <option value="" disabled selected>Choose Your Age</option>
                            </select>
                        </div>
                    </div>

                    <div class="flex gap-4 pt-4">
                        <button type="button" onclick="nextStep(2)" class="w-1/3 bg-stone-100 hover:bg-stone-200 transition py-4 rounded-2xl text-slate-500 font-extrabold text-xs uppercase tracking-widest">Back</button>
                        <button type="button" onclick="completeOnboarding()" class="w-2/3 bg-indigo-600 hover:bg-indigo-700 transition shadow-lg py-4 rounded-2xl text-white font-extrabold text-xs uppercase tracking-widest flex justify-center items-center gap-2">
                            <span>Open Console</span> <span class="text-lg">✨</span>
                        </button>
                    </div>
                </div>

            </form>
        </div>
    </div>


    <!-- ========================================================================= -->
    <!-- ======================= ACTIVE PLAYGROUND CONSOLE STATE ================= -->
    <!-- ========================================================================= -->
    <div id="playground-dashboard" class="hidden pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
        
        <!-- ================== VIEW 1: EXECUTIVE PRO CONSOLE (18+) ================== -->
        <div id="professional-dashboard" class="hidden space-y-10">
            
            <!-- Executive Branding & Dropdown Controllers -->
            <div class="w-full limestone-card rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-indigo-50/20 via-transparent to-transparent opacity-60"></div>
                <div class="text-left space-y-2 relative z-10 max-w-2xl">
                    <span class="text-indigo-600 font-extrabold text-[10px] tracking-widest uppercase bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100/40">Zero Fee Sandbox</span>
                    <h3 class="text-2xl font-black text-[#001C48] uppercase tracking-tight">Executive Automation Suite</h3>
                    <p class="text-slate-600 text-sm leading-relaxed font-semibold">
                        Design industry blueprints for your bottlenecks. Enter a custom description or pick an industry framework below.
                    </p>
                </div>
                <div class="flex flex-col sm:flex-row gap-4 items-center relative z-10 w-full md:w-auto">
                    <!-- Dropdown Menu 1: Small Business Solutions -->
                    <div class="flex flex-col gap-1 w-full sm:w-auto text-left">
                        <label class="text-[9px] font-bold uppercase tracking-wider text-slate-400">Small Business Solutions</label>
                        <select id="sme-selector" onchange="loadBusinessScenario('sme')" class="bg-white border-2 border-stone-200 rounded-xl px-4 py-3 text-xs font-extrabold uppercase tracking-wider text-slate-700 outline-none">
                            <option value="" disabled selected>Select Solution</option>
                            <option value="SME_Scheduling">Retail Scheduling</option>
                            <option value="SME_Dispatch">Logistics Dispatch</option>
                            <option value="SME_Responder">Lead Responders</option>
                        </select>
                    </div>

                    <!-- Dropdown Menu 2: Enterprise Architect -->
                    <div class="flex flex-col gap-1 w-full sm:w-auto text-left">
                        <label class="text-[9px] font-bold uppercase tracking-wider text-slate-400">Enterprise Architect</label>
                        <select id="ent-selector" onchange="loadBusinessScenario('ent')" class="bg-white border-2 border-stone-200 rounded-xl px-4 py-3 text-xs font-extrabold uppercase tracking-wider text-slate-700 outline-none">
                            <option value="" disabled selected>Select Architecture</option>
                            <option value="ENT_Inventory">Multi-Channel Inventory</option>
                            <option value="ENT_Telemetry">Fleet Telemetry Hub</option>
                            <option value="ENT_Processor">AI Document Processor</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Sleek Centered Prompt Box -->
            <div class="max-w-3xl mx-auto limestone-card rounded-2xl p-6 shadow-md text-center space-y-4">
                <h4 class="font-black text-[11px] text-indigo-600 uppercase tracking-widest">Describe Your Custom Bottleneck</h4>
                <div class="flex flex-col sm:flex-row gap-3">
                    <input type="text" id="custom-problem-input" placeholder="e.g., We spend 3 hours daily writing manual invoice emails..." class="flex-1 bg-stone-50 border-2 border-stone-200/60 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 focus:border-indigo-500 focus:bg-white outline-none transition">
                    <button onclick="translateCustomProblem()" class="bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs uppercase tracking-widest px-6 py-3 rounded-xl transition shadow shadow-indigo-100">
                        Translate To Haas Logic
                    </button>
                </div>
            </div>

            <!-- Bottleneck Scenario Cards row -->
            <div class="grid md:grid-cols-3 gap-6">
                <div class="limestone-card rounded-2xl p-6 cursor-pointer hover:border-indigo-500 transition-all duration-300 text-left space-y-3" onclick="triggerPresetScenario('SME_Scheduling')">
                    <span class="text-xs font-bold text-indigo-600 uppercase tracking-widest">Scenario 1</span>
                    <h4 class="font-extrabold text-slate-800 text-base uppercase">Retail Scheduling Bottleneck</h4>
                    <p class="text-xs text-slate-500 leading-relaxed font-medium">Overcome tedious customer phone coordinate tag. Connect calendars and automate confirmation text pings instantly.</p>
                </div>
                <div class="limestone-card rounded-2xl p-6 cursor-pointer hover:border-indigo-500 transition-all duration-300 text-left space-y-3" onclick="triggerPresetScenario('SME_Dispatch')">
                    <span class="text-xs font-bold text-indigo-600 uppercase tracking-widest">Scenario 2</span>
                    <h4 class="font-extrabold text-slate-800 text-base uppercase">Logistics Dispatching Bottleneck</h4>
                    <p class="text-xs text-slate-500 leading-relaxed font-medium">Auto-assign dispatch orders from shipping boards directly to local driver mobile terminals inside geofenced paths.</p>
                </div>
                <div class="limestone-card rounded-2xl p-6 cursor-pointer hover:border-indigo-500 transition-all duration-300 text-left space-y-3" onclick="triggerPresetScenario('SME_Responder')">
                    <span class="text-xs font-bold text-indigo-600 uppercase tracking-widest">Scenario 3</span>
                    <h4 class="font-extrabold text-slate-800 text-base uppercase">Slow Lead Form Responders</h4>
                    <p class="text-xs text-slate-500 leading-relaxed font-medium">Instantly scrape inbox, sync database logs, and deploy AI-personalized sales briefs to clients in under 3 minutes.</p>
                </div>
            </div>

            <!-- Dashboard columns -->
            <div class="grid lg:grid-cols-3 gap-8 items-start">
                
                <!-- Dynamic Roadmap & Canvas (2/3 Col) -->
                <div class="lg:col-span-2 space-y-8">
                    
                    <!-- Human Translator Panel -->
                    <div class="limestone-card rounded-[2rem] p-6 md:p-8 shadow-xl text-left space-y-6">
                        <div>
                            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Automated Translator Engine</span>
                            <h2 class="text-2xl font-black text-[#001C48] uppercase tracking-tight">The Human Roadmap</h2>
                            <p class="text-xs text-slate-500 mt-1">Our translation layer translates messy real-world business bottlenecks into clear automation outcomes.</p>
                        </div>

                        <!-- 4 Columns matching specified headers -->
                        <div class="grid sm:grid-cols-4 gap-4 border-t border-stone-200/60 pt-6" id="translator-grid">
                            <div class="space-y-1.5">
                                <h5 class="text-xs font-black uppercase text-indigo-600 tracking-wider">🚀 The Catch</h5>
                                <p id="catch-text" class="text-xs text-slate-600 leading-relaxed font-semibold">Select a scenario card above to watch the translator outline your bottleneck entry.</p>
                            </div>
                            <div class="space-y-1.5 border-l border-dashed border-stone-200/80 pl-3">
                                <h5 class="text-xs font-black uppercase text-indigo-600 tracking-wider">🧠 The Decision</h5>
                                <p id="decision-text" class="text-xs text-slate-600 leading-relaxed font-semibold">Haas evaluates custom options, parses dates, or filters parameters.</p>
                            </div>
                            <div class="space-y-1.5 border-l border-dashed border-stone-200/80 pl-3">
                                <h5 class="text-xs font-black uppercase text-indigo-600 tracking-wider">⚙️ The Action</h5>
                                <p id="action-text" class="text-xs text-slate-600 leading-relaxed font-semibold">Sync systems, schedule diaries, dispatch files, or ring customers.</p>
                            </div>
                            <div class="space-y-1.5 border-l border-dashed border-stone-200/80 pl-3">
                                <h5 class="text-xs font-black uppercase text-indigo-600 tracking-wider">🎯 The Result</h5>
                                <p id="result-text" class="text-xs text-slate-600 leading-relaxed font-semibold">Human hours optimized, zero error margins, and maximized profits.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Flowchart interactive Canvas with paywall blur overlay option -->
                    <div class="limestone-card rounded-[2rem] p-6 md:p-8 shadow-xl">
                        <div class="flex justify-between items-center mb-6">
                            <div>
                                <span class="text-xs font-bold text-slate-400 uppercase">Live Architect flow</span>
                                <h3 class="text-xl font-black text-[#001C48] uppercase tracking-tight">Visual Logical Pipeline</h3>
                            </div>
                            <span class="bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest border border-emerald-100/60 px-3 py-1 rounded-full">Secure Render</span>
                        </div>

                        <!-- Canvas containing blurred preview -->
                        <div class="relative w-full h-[400px] bg-[#FAF9F5]/40 border border-stone-200/50 rounded-2xl overflow-hidden console-grid flex items-center justify-center">
                            <canvas id="blueprint-canvas" class="w-full h-full" width="800" height="400"></canvas>
                            
                            <!-- Paywall locked trigger blur overlay -->
                            <div id="stripe-lock-overlay" class="absolute inset-0 bg-white/70 backdrop-blur-md hidden flex flex-col items-center justify-center p-6 text-center space-y-4">
                                <span class="text-3xl">🔒</span>
                                <h4 class="font-black text-lg text-[#001C48] uppercase">Premium Executive Blueprint Locked</h4>
                                <p class="text-xs text-slate-500 font-bold max-w-sm">Unlock the full technical documentation, raw JSON schema configurations, and customized Strategic Roadmap PDF for your operations.</p>
                                <button onclick="simulateStripeCheckout()" class="bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full transition shadow-lg shadow-indigo-100 flex items-center gap-2">
                                    <span>Unlock Strategy Blueprint ($5.00)</span> <span>💳</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- ROI & cost charts column (1/3 Col) -->
                <div class="space-y-6 text-left">
                    <div class="limestone-card rounded-[2rem] p-6 shadow-xl space-y-6">
                        <div>
                            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Business Audit ROI</span>
                            <h4 class="text-lg font-black text-[#001C48] uppercase mt-0.5">Human vs. Haas Cost</h4>
                            <p class="text-[11px] text-slate-500 leading-relaxed mt-1">Calculate how much payroll capital is lost weekly to repetitive workflow coordinates.</p>
                        </div>

                        <div class="space-y-4">
                            <div class="space-y-1.5">
                                <label class="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Employee Hourly Rate ($)</label>
                                <input type="number" id="roi-rate" value="25" oninput="calculateROI()" class="w-full bg-stone-50 border-2 border-stone-200/50 rounded-xl px-4 py-3 text-xs font-bold outline-none focus:brand-indigo-border transition">
                            </div>
                            <div class="space-y-1.5">
                                <label class="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Weekly Repetitive Hours</label>
                                <input type="number" id="roi-hours" value="10" oninput="calculateROI()" class="w-full bg-stone-50 border-2 border-stone-200/50 rounded-xl px-4 py-3 text-xs font-bold outline-none focus:brand-indigo-border transition">
                            </div>
                        </div>

                        <div class="bg-stone-50 rounded-xl p-5 space-y-4 border border-stone-100">
                            <div class="space-y-1.5">
                                <div class="flex justify-between text-xs font-bold">
                                    <span class="text-slate-500 uppercase">Yearly Human Cost:</span>
                                    <span id="roi-manual-cost" class="text-rose-600 font-extrabold">$13,000</span>
                                </div>
                                <div class="w-full h-3 bg-stone-200 rounded-full overflow-hidden">
                                    <div id="roi-manual-bar" class="h-full bg-rose-500 w-full transition-all duration-500"></div>
                                </div>
                            </div>

                            <div class="space-y-1.5">
                                <div class="flex justify-between text-xs font-bold">
                                    <span class="text-slate-500 uppercase">Yearly Haas Cost:</span>
                                    <span class="text-emerald-600 font-extrabold">$600</span>
                                </div>
                                <div class="w-full h-3 bg-stone-200 rounded-full overflow-hidden">
                                    <div class="h-full bg-emerald-500 w-[5%]"></div>
                                </div>
                            </div>

                            <div class="border-t border-stone-200 pt-3 text-center">
                                <p class="text-xs font-bold text-slate-800 leading-relaxed">Your custom Haas pipeline pays for itself in <span id="roi-payback-days" class="text-indigo-600 font-black">17 Days</span>!</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- ================= VIEW 2: YOUNG INNOVATOR TRACK (5-17) ================= -->
        <div id="young-innovator-dashboard" class="hidden space-y-10">
            
            <!-- Welcome Header Panel (Legos bubble theme - Always Free) -->
            <div class="w-full bg-gradient-to-r from-yellow-300 via-pink-200 to-sky-200 border-4 border-black rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-[8px_8px_0px_#000] relative overflow-hidden text-left text-black">
                <div class="space-y-2 relative z-10 max-w-4xl">
                    <span class="bg-black text-yellow-300 font-black text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border-2 border-black">Always 100% Free!</span>
                    <h3 class="text-2xl md:text-3xl font-black uppercase tracking-tight" id="kids-welcome-title">Welcome to Haas Youth Playground</h3>
                    <p class="font-extrabold text-sm leading-relaxed" id="kids-welcome-desc">
                        Welcome to Haas Youth Playground where everything is always free of charge to help provide our young people with the knowledge of Technology. Build a neighborhood service app and unlock credentials!
                    </p>
                </div>
                <div class="bg-white border-4 border-black rounded-2xl px-4 py-2 font-black text-xs uppercase" id="kids-tier-badge">
                    Tier 1: Visual Mode
                </div>
            </div>

            <!-- Dashboard Row: Pixel Pet, Course Academy & Multi-level Bridge Game -->
            <div class="grid lg:grid-cols-3 gap-8 items-start">
                
                <!-- 5-Module Academy Checklist & Level Puzzles (2/3 Col) -->
                <div class="lg:col-span-2 space-y-8">
                    
                    <!-- 5-Module Coding Courses ("Mini-Business" Build: Pet Walking) -->
                    <div class="kids-lego-card p-6 md:p-8 text-left space-y-6">
                        <div>
                            <span class="text-xs font-black text-stone-400 uppercase tracking-wider">Mini-Business Creator Curriculum</span>
                            <h3 class="text-2xl font-black text-black uppercase">🐶 Build Your Neighborhood Pet Walking Service</h3>
                            <p class="text-xs text-stone-500 font-bold mt-1">Complete each module below to configure your custom app storefront, program automated API scheduling calendars, and power up Haasy!</p>
                        </div>

                        <div class="grid md:grid-cols-5 gap-3">
                            <!-- Modules with age-scaled text loaded in JS -->
                            <div id="course-card-1" onclick="completeAcademyModule(1)" class="border-4 border-black rounded-2xl p-4 text-center cursor-pointer bg-white transition hover:scale-105 space-y-2 flex flex-col justify-between min-h-[140px]">
                                <span class="text-2xl">📋</span>
                                <h5 class="text-[10px] font-black uppercase leading-tight" id="mod-title-1">1. Workflow Setup</h5>
                                <span id="course-status-1" class="text-[9px] font-black uppercase text-rose-500 bg-rose-50 border border-rose-100 px-2 py-0.5 rounded-full inline-block">Incomplete</span>
                            </div>
                            <div id="course-card-2" onclick="completeAcademyModule(2)" class="border-4 border-black rounded-2xl p-4 text-center cursor-pointer bg-white transition hover:scale-105 space-y-2 flex flex-col justify-between min-h-[140px]">
                                <span class="text-2xl">🧩</span>
                                <h5 class="text-[10px] font-black uppercase leading-tight" id="mod-title-2">2. Software Integration</h5>
                                <span id="course-status-2" class="text-[9px] font-black uppercase text-rose-500 bg-rose-50 border border-rose-100 px-2 py-0.5 rounded-full inline-block">Incomplete</span>
                            </div>
                            <div id="course-card-3" onclick="completeAcademyModule(3)" class="border-4 border-black rounded-2xl p-4 text-center cursor-pointer bg-white transition hover:scale-105 space-y-2 flex flex-col justify-between min-h-[140px]">
                                <span class="text-2xl">💻</span>
                                <h5 class="text-[10px] font-black uppercase leading-tight" id="mod-title-3">3. Storefront UI</h5>
                                <span id="course-status-3" class="text-[9px] font-black uppercase text-rose-500 bg-rose-50 border border-rose-100 px-2 py-0.5 rounded-full inline-block">Incomplete</span>
                            </div>
                            <div id="course-card-4" onclick="completeAcademyModule(4)" class="border-4 border-black rounded-2xl p-4 text-center cursor-pointer bg-white transition hover:scale-105 space-y-2 flex flex-col justify-between min-h-[140px]">
                                <span class="text-2xl">📱</span>
                                <h5 class="text-[10px] font-black uppercase leading-tight" id="mod-title-4">4. Package PWA</h5>
                                <span id="course-status-4" class="text-[9px] font-black uppercase text-rose-500 bg-rose-50 border border-rose-100 px-2 py-0.5 rounded-full inline-block">Incomplete</span>
                            </div>
                            <div id="course-card-5" onclick="completeAcademyModule(5)" class="border-4 border-black rounded-2xl p-4 text-center cursor-pointer bg-white transition hover:scale-105 space-y-2 flex flex-col justify-between min-h-[140px]">
                                <span class="text-2xl">📣</span>
                                <h5 class="text-[10px] font-black uppercase leading-tight" id="mod-title-5">5. Ad Studio</h5>
                                <span id="course-status-5" class="text-[9px] font-black uppercase text-rose-500 bg-rose-50 border border-rose-100 px-2 py-0.5 rounded-full inline-block">Incomplete</span>
                            </div>
                        </div>

                        <!-- Active Module Visual Builder Workspace -->
                        <div class="border-4 border-black rounded-2xl p-6 bg-slate-50 relative overflow-hidden" id="kids-active-workspace">
                            <span class="absolute top-2 right-2 bg-black text-white text-[8px] font-black px-2 py-0.5 rounded-full">ACTIVE MODULE COMPILER</span>
                            <div id="kids-workspace-instruction" class="text-xs font-bold text-slate-700 leading-relaxed max-w-xl text-left">
                                Click Module 1 to begin building your pet walking logic.
                            </div>
                        </div>
                    </div>

                    <!-- 10-Question interactive Exam Section -->
                    <div id="exam-card" class="kids-lego-card p-6 md:p-8 text-left space-y-6 opacity-40 pointer-events-none transition-all duration-300">
                        <div class="flex justify-between items-center border-b-2 border-black pb-4">
                            <div>
                                <span class="text-xs font-black text-stone-400 uppercase tracking-wider">Level Final Challenge</span>
                                <h3 class="text-2xl font-black text-black uppercase">🧠 Evolution Certification Exam</h3>
                                <p class="text-xs text-stone-500 font-bold">Score 90% or higher (9 out of 10) to earn your Official Certificate featuring the Hoosier AI Gold Seal!</p>
                            </div>
                            <div id="exam-score-badge" class="bg-indigo-600 text-white font-black text-xs px-3 py-1.5 rounded-full border-2 border-black whitespace-nowrap">
                                Question 1 of 10
                            </div>
                        </div>

                        <!-- Active Question Display -->
                        <div class="space-y-4" id="exam-question-box">
                            <h4 id="question-text" class="text-base font-black text-black leading-relaxed">1. What is an automation workflow?</h4>
                            <div class="grid md:grid-cols-2 gap-3" id="answer-choices-box">
                                <!-- Choices populated in JS -->
                            </div>
                        </div>
                    </div>

                    <!-- Multiple Level Logic Bridge puzzles (Responsive to Age Group selection) -->
                    <div class="kids-lego-card p-6 md:p-8 text-left space-y-4">
                        <div class="flex justify-between items-center">
                            <div>
                                <span class="text-xs font-black text-stone-400 uppercase tracking-wider" id="game-age-label">Ages 10-12 Tracker</span>
                                <h3 class="text-xl font-black text-black uppercase">🌉 The Broken Bridge Game</h3>
                            </div>
                            <!-- Level selector -->
                            <div class="flex gap-2">
                                <span class="bg-black text-yellow-300 font-black text-[9px] px-2 py-1 rounded border border-black uppercase animate-pulse" id="game-level-badge">Level 1: Beginner</span>
                            </div>
                        </div>

                        <!-- Interactive Bridge Canvas Game -->
                        <div class="border-4 border-black bg-stone-50 rounded-2xl p-5 relative overflow-hidden h-[300px] flex flex-col justify-between">
                            
                            <!-- Bridge Graphics container -->
                            <div id="bridge-canvas-container" class="relative flex-1 bg-sky-200 border-2 border-black rounded-xl overflow-hidden shadow-inner flex items-center justify-center">
                                <!-- Water Background -->
                                <div class="absolute bottom-0 inset-x-0 h-16 bg-blue-500/80 border-t-2 border-black"></div>
                                
                                <!-- Cliff Left -->
                                <div class="absolute left-0 top-0 bottom-16 w-24 bg-amber-800 border-r-2 border-black flex items-center justify-center">
                                    <span class="text-xs font-black text-white">START CLIFF</span>
                                </div>

                                <!-- Cliff Right -->
                                <div class="absolute right-0 top-0 bottom-16 w-24 bg-amber-800 border-l-2 border-black flex items-center justify-center">
                                    <span class="text-xs font-black text-white">END GOAL</span>
                                </div>

                                <!-- Dynamic Bridge Elements Layer -->
                                <div id="bridge-logic-slot" class="absolute inset-x-24 top-0 bottom-16 flex items-center justify-center gap-2 px-4 transition-all duration-500">
                                    <!-- Logical Nodes added here: Trigger -> Filter -> Integration -> Action -->
                                </div>
                            </div>

                            <!-- Choice button layout -->
                            <div class="flex justify-between items-center pt-4 border-t-2 border-stone-200">
                                <span class="text-[10px] font-black uppercase text-stone-500">Place logic elements in order: Trigger ➡️ Filter ➡️ Integration ➡️ Action</span>
                                <div class="flex gap-2" id="game-choices-wrapper">
                                    <!-- Populated in JS based on Age selection -->
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- AI Pixel Virtual Pet Companion & Creator Studio (1/3 Col) -->
                <div class="space-y-6 text-left">
                    
                    <!-- Pixelated Virtual Pet card (Haasy the Bearded Dragon) -->
                    <div class="kids-lego-card p-6 text-center space-y-4 bg-gradient-to-b from-sky-50 to-indigo-50 relative">
                        <span class="text-[9px] font-black text-stone-400 uppercase tracking-widest block">Pixel Bearded Dragon Companion</span>
                        
                        <!-- Retro Pixel Art Male Bearded Dragon -->
                        <div class="pixel-grid border-4 border-black p-1 bg-white rounded-lg shadow-inner cursor-pointer" onclick="triggerHaasyHint()">
                            <!-- Row 1 -->
                            <div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell pixel-black"></div><div class="pixel-cell pixel-black"></div><div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell"></div>
                            <!-- Row 2 -->
                            <div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell pixel-black"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-black"></div><div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell"></div>
                            <!-- Row 3 -->
                            <div class="pixel-cell"></div><div class="pixel-cell pixel-black"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-eye"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-black"></div><div class="pixel-cell"></div><div class="pixel-cell"></div>
                            <!-- Row 4 -->
                            <div class="pixel-cell"></div><div class="pixel-cell pixel-black"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-black"></div><div class="pixel-cell"></div><div class="pixel-cell"></div>
                            <!-- Row 5 -->
                            <div class="pixel-cell"></div><div class="pixel-cell pixel-black"></div><div class="pixel-cell pixel-beard"></div><div class="pixel-cell pixel-beard"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-black"></div><div class="pixel-cell"></div><div class="pixel-cell"></div>
                            <!-- Row 6 -->
                            <div class="pixel-cell pixel-black"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-black"></div><div class="pixel-cell"></div>
                            <!-- Row 7 -->
                            <div class="pixel-cell pixel-black"></div><div class="pixel-cell pixel-black"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-black"></div><div class="pixel-cell pixel-black"></div><div class="pixel-cell"></div>
                            <!-- Row 8 -->
                            <div class="pixel-cell"></div><div class="pixel-cell pixel-black"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-dragon"></div><div class="pixel-cell pixel-black"></div><div class="pixel-cell"></div><div class="pixel-cell"></div>
                            <!-- Row 9 -->
                            <div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell pixel-black"></div><div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell pixel-black"></div><div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell"></div>
                            <!-- Row 10 -->
                            <div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell pixel-black"></div><div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell pixel-black"></div><div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell"></div>
                        </div>

                        <!-- Technical Hint Bubble -->
                        <div id="haasy-hint-bubble" class="absolute -top-16 left-6 right-6 bg-yellow-300 border-2 border-black rounded-xl p-3 text-[10px] font-black text-black leading-snug shadow-md hidden animate-bounce z-20">
                            <!-- Populated dynamically in JS as purely technical text clues -->
                        </div>

                        <div class="space-y-1">
                            <h4 id="pet-name" class="font-black text-black uppercase text-base">Haasy the Dragon</h4>
                            <p id="pet-status" class="text-[10px] text-stone-500 font-extrabold uppercase">State: Spiky & Cozy 🦎</p>
                            <span class="text-[9px] font-extrabold text-stone-400 uppercase tracking-widest block">(Click Haasy for a technical hint!)</span>
                        </div>

                        <!-- Stats bars -->
                        <div class="space-y-2 text-left pt-2">
                            <div class="text-[10px] font-extrabold text-stone-600 flex justify-between uppercase">
                                <span>Health Level:</span>
                                <span id="pet-health-text">20%</span>
                            </div>
                            <div class="w-full h-2.5 bg-stone-200 border-2 border-black rounded-full overflow-hidden">
                                <div id="pet-health-bar" class="h-full bg-red-400 w-1/5 transition-all duration-500"></div>
                            </div>

                            <div class="text-[10px] font-extrabold text-stone-600 flex justify-between uppercase">
                                <span>Tech Wisdom:</span>
                                <span id="pet-wisdom-text">10%</span>
                            </div>
                            <div class="w-full h-2.5 bg-stone-200 border-2 border-black rounded-full overflow-hidden">
                                <div id="pet-wisdom-bar" class="h-full bg-indigo-500 w-[10%] transition-all duration-500"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Kids Creator Studio Panel Dropdown -->
                    <div class="kids-lego-card p-6 space-y-4 bg-yellow-50">
                        <div class="flex justify-between items-center">
                            <h4 class="font-black text-black uppercase text-sm">🎨 Creator Studio (For Kids)</h4>
                            <span class="text-xs">🎨</span>
                        </div>
                        <p class="text-[10px] text-stone-600 font-extrabold leading-relaxed">Customize your own Soundboards, Playful retro icons, backgrounds, and music tracks! Download your pack free.</p>
                        
                        <!-- Dropdown menus for resources selection -->
                        <div class="space-y-3 pt-2 text-left">
                            <div class="flex flex-col gap-1">
                                <label class="text-[9px] font-black uppercase text-stone-500">Select Sound FX Pack</label>
                                <select id="kids-sfx-dropdown" class="bg-white border-2 border-black rounded-lg px-2 py-1.5 text-xs font-bold text-slate-800 outline-none">
                                    <option value="bubble">🫧 Bubble Pop synthesizer</option>
                                    <option value="sparkle">✨ Retro Sparkle chime</option>
                                    <option value="correct">🔔 Arpeggio Victory success</option>
                                    <option value="lego">🧱 Block Snap clicker</option>
                                </select>
                            </div>

                            <div class="flex flex-col gap-1">
                                <label class="text-[9px] font-black uppercase text-stone-500">Select Wallpapers & Music</label>
                                <select id="kids-assets-dropdown" class="bg-white border-2 border-black rounded-lg px-2 py-1.5 text-xs font-bold text-slate-800 outline-none">
                                    <option value="LegoWallpaper">🧱 Colorful LEGO blocks background</option>
                                    <option value="PixelVibeMusic">🎵 8-Bit Pixelated Theme Song</option>
                                    <option value="ByteIcons">🐕 Byte pixelated Desktop Icons</option>
                                </select>
                            </div>

                            <div class="flex gap-2 pt-2">
                                <button onclick="previewCreatorAsset()" class="w-1/2 btn-lego bg-pink-200 text-[10px] py-2">🔊 Preview Pack</button>
                                <button onclick="downloadCreatorPack()" class="w-1/2 btn-lego bg-emerald-300 text-[10px] py-2">📥 Download Pack</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </div>

    <!-- Official Certificate Mock Modal -->
    <div id="cert-modal" class="fixed inset-0 z-[120] hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in">
        <div class="max-w-2xl w-full bg-white border-[10px] border-black rounded-[2.5rem] p-8 md:p-12 relative shadow-[12px_12px_0px_#000] text-center space-y-6">
            
            <!-- Close trigger -->
            <button onclick="closeCertModal()" class="absolute top-4 right-4 text-xl font-black">✕</button>
            
            <!-- Certificate Layout -->
            <div class="border-[6px] border-double border-black p-8 rounded-2xl bg-[#FAF9F5] space-y-6 relative overflow-hidden">
                
                <!-- Official Gold Seal stamp -->
                <div class="absolute bottom-6 right-6 w-24 h-24 rounded-full bg-amber-400 border-4 border-black flex items-center justify-center shadow-lg transform rotate-12">
                    <div class="text-center">
                        <span class="text-[9px] font-black text-black block uppercase tracking-tighter">OFFICIAL</span>
                        <span class="text-[10px] font-extrabold text-black block leading-none">HAAS SEAL</span>
                        <span class="text-[8px] font-black text-black block uppercase">LLC</span>
                    </div>
                </div>

                <span class="text-4xl">🎓</span>
                <h1 class="font-black text-2xl md:text-3xl uppercase tracking-wider text-black">Certificate of Innovation</h1>
                <p class="text-xs font-bold text-slate-500 tracking-widest uppercase">This official credential certifies that</p>
                
                <!-- Double text inputs for full name validation -->
                <div class="max-w-md mx-auto space-y-3" id="cert-name-input-block">
                    <p class="text-xs font-black uppercase text-indigo-600">Please enter your First and Last name to write onto your Certificate:</p>
                    <div class="flex gap-2">
                        <input type="text" id="cert-first-name" placeholder="First Name" class="w-1/2 bg-white border-2 border-black rounded-lg p-2 text-xs font-bold">
                        <input type="text" id="cert-last-name" placeholder="Last Name" class="w-1/2 bg-white border-2 border-black rounded-lg p-2 text-xs font-bold">
                    </div>
                    <button onclick="applyNameToCertificate()" class="btn-lego bg-indigo-500 text-white text-xs px-4 py-2">Lock in Name ✍️</button>
                </div>

                <!-- Live locked Name header -->
                <h2 id="cert-recipient-name" class="text-3xl font-black text-indigo-600 uppercase italic tracking-wide hidden">Young Innovator</h2>
                
                <div class="w-1/2 h-1 bg-black mx-auto"></div>
                <p class="text-xs font-extrabold text-slate-700 max-w-md mx-auto leading-relaxed">
                    has successfully completed the complete 5-Module Technology Explorer course syllabus and successfully cleared the official technology credentialing examination.
                </p>
                <p class="text-[10px] font-black text-indigo-500 uppercase tracking-widest" id="cert-date-text">Seal authenticated on May 12, 2026</p>
            </div>
            
            <div class="flex gap-4">
                <button onclick="closeCertModal()" class="w-1/2 btn-lego bg-stone-100 text-xs py-3.5">Close</button>
                <button id="print-cert-btn" disabled onclick="window.print()" class="w-1/2 btn-lego bg-stone-200 text-stone-400 cursor-not-allowed text-xs py-3.5">Print Certificate 🖨️</button>
            </div>
        </div>
    </div>

    <!-- Stripe Secure Checkout Prompt Modal -->
    <div id="stripe-checkout-modal" class="fixed inset-0 z-[120] hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in">
        <div class="max-w-md w-full bg-white border-4 border-indigo-900 rounded-[2rem] p-8 shadow-2xl text-center space-y-6">
            <span class="text-3xl">💳</span>
            <h3 class="font-black text-xl text-[#001C48] uppercase">Stripe Secure Checkout</h3>
            <p class="text-xs text-slate-500 font-bold leading-relaxed">You are purchasing the <strong>Premium Operational Strategy PDF Roadmap Package</strong> for your selected business pipeline template. This transaction is 100% secure.</p>
            
            <div class="border border-stone-200 rounded-xl p-4 bg-stone-50 space-y-2 text-left">
                <div class="flex justify-between text-xs font-extrabold text-slate-700">
                    <span>Haas Pipeline Strategy Plan</span>
                    <span>$5.00</span>
                </div>
                <div class="flex justify-between text-[10px] text-slate-400">
                    <span>Includes PDF roadmap & JSON configuration files</span>
                    <span>Free Updates</span>
                </div>
            </div>

            <div class="flex gap-3">
                <button onclick="closeStripeModal()" class="w-1/3 bg-stone-100 hover:bg-stone-200 text-slate-500 font-extrabold text-xs uppercase tracking-widest py-3 rounded-xl transition">Cancel</button>
                <button onclick="completeStripeTransaction()" class="w-2/3 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs uppercase tracking-widest py-3 rounded-xl transition shadow">Confirm & Pay</button>
            </div>
        </div>
    </div>

    <!-- Executive Footer -->
    <footer class="py-16 border-t border-stone-200 text-center text-slate-500 text-xs tracking-widest uppercase px-6 flex flex-col items-center justify-center space-y-6">
        <!-- Indiana Outline Badge with Pulsing Bedford Star -->
        <div class="inline-flex items-center space-x-3 bg-white border border-stone-200 px-6 py-3.5 rounded-full shadow-md">
            <!-- Indiana Outline SVG -->
            <svg class="h-10 w-auto text-indigo-600" viewBox="0 0 100 140" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M 36,16 C 45,14 65,15 84,14 C 85,30 84,65 83,95 C 82,104 80,110 78,111 C 74,111 68,117 65,119 C 59,122 55,115 50,121 C 46,126 40,125 36,122 C 28,118 24,124 19,124 C 22,118 28,108 30,103 C 32,96 30,85 32,75 C 34,60 35,35 34,16 Z" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="4.5" />
                <path d="M 48,90 L 50,85 L 52,90 L 57,90 L 53,93 L 55,98 L 50,95 L 45,98 L 47,93 L 43,90 Z" fill="#F59E0B" class="star-pulse" />
            </svg>
            <div class="text-left leading-tight">
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Born in Bedford</p>
                <p class="text-xs font-black text-slate-800 uppercase tracking-wider">Hoosier AI Automations LLC</p>
                <p class="text-[9px] font-bold text-indigo-500 uppercase tracking-widest">Bedford, Indiana</p>
            </div>
        </div>
        <div class="space-y-2 text-center text-[11px]">
            <p>&copy; 2026 Hoosier AI Automations LLC. All Rights Reserved.</p>
        </div>
    </footer>

    <!-- Toast Notifications -->
    <div id="toast-container" class="fixed top-24 right-6 z-[110] space-y-3 pointer-events-none"></div>

    <script src="chat.js"></script>
    <script src="playground.js"></script>
</body>
</html>
```

---

## File: Assets/styles.css
```css
:root {
    --bg-main: #FAF9F5;
    --bg-secondary: #FFFFFF;
    --bg-accent: #F5F4F0;
    --text-primary: #0F172A;
    --text-secondary: #475569;
    --text-muted: #94A3B8;
    --accent-blue: #4F46E5;
    --accent-blue-hover: #4338CA;
    --border-color: #E2E8F0;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-main);
    color: var(--text-primary);
    scroll-behavior: smooth;
    margin: 0;
    overflow-x: hidden;
}

/* Limestone Stone & Craft Textures */
.limestone-pattern {
    background-color: #FAF9F5;
    background-image: radial-gradient(#E2E1D9 0.8px, transparent 0.8px);
    background-size: 20px 20px;
}

.limestone-card {
    background: linear-gradient(135deg, #FFFFFF 0%, #F5F4F0 100%);
    border: 1px solid rgba(226, 225, 217, 0.7);
    box-shadow: 0 20px 40px -15px rgba(28, 32, 40, 0.04), 0 1px 3px rgba(0, 0, 0, 0.01);
}

/* Retaining legacy class name but mapping to the warm Limestone theme */
.metal-shine {
    background: linear-gradient(135deg, #FFFFFF 0%, #FAF9F5 100%);
    border: 1px solid rgba(226, 225, 217, 0.8);
    box-shadow: 0 25px 50px -12px rgba(28, 32, 40, 0.03);
}

.hero-text {
    background: linear-gradient(to bottom right, #1E1B4B, #4F46E5, #312E81);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
}

/* Navigation */
.nav-link {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: var(--accent-blue);
}

.nav-cta {
    background: var(--accent-blue);
    color: white;
    padding: 0.5rem 1.25rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.15);
}

.nav-cta:hover {
    background: var(--accent-blue-hover);
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(79, 70, 229, 0.25);
}

/* Buttons */
.btn-primary {
    background-color: var(--accent-blue);
    color: white;
    padding: 1rem 2.25rem;
    border-radius: 9999px;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 10px 25px -5px rgba(79, 70, 229, 0.25);
    display: inline-block;
}

.btn-primary:hover {
    background-color: var(--accent-blue-hover);
    transform: translateY(-2px);
    box-shadow: 0 15px 30px -5px rgba(79, 70, 229, 0.4);
}

.btn-secondary {
    border: 1px solid rgba(226, 225, 217, 1);
    background-color: #FFFFFF;
    color: var(--text-primary);
    padding: 1rem 2.25rem;
    border-radius: 9999px;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: inline-block;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
}

.btn-secondary:hover {
    background-color: var(--bg-accent);
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
}

/* Cards */
.portfolio-card {
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease;
}

.portfolio-card:hover {
    transform: translateY(-6px);
    border-color: rgba(79, 70, 229, 0.3);
    box-shadow: 0 30px 60px -15px rgba(28, 32, 40, 0.06);
}

/* Chat Widget */
#chat-widget {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 1000;
}

#chat-bubble {
    width: 4rem;
    height: 4rem;
    background: var(--accent-blue);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 10px 25px -5px rgba(79, 70, 229, 0.35);
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s ease;
    border: 2px solid #FFFFFF;
}

#chat-bubble:hover {
    transform: scale(1.08) rotate(5deg);
    background: var(--accent-blue-hover);
}

#chat-window {
    width: 360px;
    height: 520px;
    max-height: 80vh;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(226, 225, 217, 0.9);
    border-radius: 2rem;
    display: none;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 25px 50px -12px rgba(28, 32, 40, 0.08);
    margin-bottom: 1rem;
    transform: translateY(20px);
    opacity: 0;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
}

#chat-window.open {
    display: flex;
    transform: translateY(0);
    opacity: 1;
}

/* Layout Utilities */
.section-padding {
    padding-top: 6rem;
    padding-bottom: 6rem;
}

.container-narrow {
    max-width: 48rem;
    margin-left: auto;
    margin-right: auto;
}

.container-wide {
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;
}

/* Typography */
h1, h2, h3 {
    font-style: normal;
    font-weight: 900;
    letter-spacing: -0.025em;
}

.subtitle {
    color: var(--text-secondary);
    font-size: 1.125rem;
    line-height: 1.75;
}

/* Animations */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
}

.fade-in {
    animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.animate-spin-slow {
    animation: spin 10s linear infinite;
}

/* --- Business Efficiency Audit Custom Styles --- */

/* Audit Active Selection States */
.audit-card {
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.audit-card:hover {
    transform: translateY(-2px);
    border-color: rgba(79, 70, 229, 0.4);
    box-shadow: 0 12px 24px -6px rgba(28, 32, 40, 0.04);
}

.audit-card.selected {
    border-color: #4F46E5 !important;
    background-color: #EEF2FF !important;
    box-shadow: 0 10px 25px -5px rgba(79, 70, 229, 0.12), inset 0 0 0 1px rgba(79, 70, 229, 0.2);
}

/* Multistep Progress Bar */
.progress-container {
    height: 6px;
    background-color: #E2E8F0;
    border-radius: 9999px;
    overflow: hidden;
}

.progress-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, #4F46E5 0%, #818CF8 100%);
    border-radius: 9999px;
    transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Custom range slider styling */
input[type="range"].custom-slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 8px;
    background: #E2E8F0;
    border-radius: 9999px;
    outline: none;
    transition: background 0.3s ease;
}

input[type="range"].custom-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #4F46E5;
    cursor: pointer;
    border: 4px solid #FFFFFF;
    box-shadow: 0 4px 10px rgba(79, 70, 229, 0.35);
    transition: transform 0.15s ease, background-color 0.15s ease;
}

input[type="range"].custom-slider::-webkit-slider-thumb:hover {
    transform: scale(1.15);
    background: #4338CA;
}

input[type="range"].custom-slider::-moz-range-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #4F46E5;
    cursor: pointer;
    border: 4px solid #FFFFFF;
    box-shadow: 0 4px 10px rgba(79, 70, 229, 0.35);
    transition: transform 0.15s ease, background-color 0.15s ease;
}

input[type="range"].custom-slider::-moz-range-thumb:hover {
    transform: scale(1.15);
    background: #4338CA;
}

/* Step Fade-in Animation Classes */
.audit-step {
    display: none;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.audit-step.active {
    display: block;
    opacity: 1;
    transform: translateY(0);
}

/* Segmented Custom Pill Switch (Call vs Text) */
.switch-field {
    display: flex;
    background-color: #F1F5F9;
    padding: 4px;
    border-radius: 9999px;
    border: 1px solid #E2E8F0;
}

.switch-field input {
    position: absolute !important;
    clip: rect(0, 0, 0, 0) !important;
    height: 1px !important;
    width: 1px !important;
    border: 0 !important;
    overflow: hidden !important;
}

.switch-field label {
    flex: 1;
    text-align: center;
    padding: 10px 16px;
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #475569;
    background-color: transparent;
    border-radius: 9999px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.switch-field input:checked + label {
    background-color: #FFFFFF;
    color: #4F46E5;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
}

```

---

## File: Assets/chat.js
```javascript
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


```

---

## File: Assets/playground.js
```javascript
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
```

---

## File: Assets/manifest.json
```json
{
  "name": "Haas AI Playground",
  "short_name": "HaasPlayground",
  "description": "Design premium visual AI pipelines and automated workflows in our secure sandbox.",
  "start_url": "playground.html",
  "display": "standalone",
  "background_color": "#FAF9F5",
  "theme_color": "#6366F1",
  "orientation": "any",
  "icons": [
    {
      "src": "1330.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "1330.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

---

## File: Assets/sw.js
```javascript
// Haas Playground Offline PWA Service Worker - Hoosier AI Automations
const CACHE_NAME = 'haas-playground-cache-v1';
const ASSETS_TO_CACHE = [
  'playground.html',
  'playground.js',
  'styles.css',
  '1330.png',
  'manifest.json'
];

// Install Event: Pre-cache static assets
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed!');
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Pre-caching static core assets...');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: Cleanup older obsolete caches
self.addEventListener('activate', (e) => {
  console.log('[Service Worker] Activated!');
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Clearing obsolete cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Cache-First, Fallback-to-Network paradigm
self.addEventListener('fetch', (e) => {
  // Only process local assets
  if (e.request.url.startsWith(self.location.origin)) {
    e.respondWith(
      caches.match(e.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(e.request).then((networkResponse) => {
          // Open cache dynamically and store new request if it matches static schema
          if (networkResponse && networkResponse.status === 200 && e.request.method === 'GET') {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(e.request, responseClone);
            });
          }
          return networkResponse;
        }).catch(() => {
          // Offline fallback
          return caches.match('playground.html');
        });
      })
    );
  }
});
```

---

## File: netlify/functions/chat.js
```javascript
export const handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (!OPENAI_API_KEY) {
    console.error("Missing OPENAI_API_KEY environment variable.");
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server configuration error. API key missing." }),
    };
  }

  try {
    const { messages } = JSON.parse(event.body);

    // Prepend the system prompt for the Hoosier AI persona
    const systemPrompt = {
      role: "system",
      content: `You are an AI assistant for "Hoosier AI Automations LLC", a custom software and AI development company located in Bedford, Indiana. 
      You are built by the owner, a stay-at-home dad who believes high-end tech shouldn't be reserved for Silicon Valley. 
      Tone: Professional, confident, locally-focused (Indiana), helpful, and transparent. Do not sound generic.
      Services: Custom web development, native Android apps, AI automation (like computer vision/AI eyesight), SEO optimization.
      Pricing: Transparent and custom-coded. We map out manual bottlenecks and build custom software to eliminate them.
      Contact: nate@hoosieraiautomations.com or (812) 329-0565.
      Keep your responses relatively concise but highly informative.`
    };

    const apiMessages = [systemPrompt, ...messages];

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: apiMessages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
        console.error("OpenAI API Error:", data);
        throw new Error(data.error?.message || "Failed to contact OpenAI API");
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reply: data.choices[0].message.content }),
    };

  } catch (error) {
    console.error("Error in chat function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to process chat request." }),
    };
  }
};
```

---

## File: netlify/functions/submit-audit.js
```javascript
export const handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // Retrieve key securely from environment configuration
  const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;

  if (!WEB3FORMS_ACCESS_KEY) {
    console.error("Missing WEB3FORMS_ACCESS_KEY environment variable.");
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server configuration error. API key missing." }),
    };
  }

  try {
    const payload = JSON.parse(event.body);
    
    // Inject the secure backend key
    payload.access_key = WEB3FORMS_ACCESS_KEY;

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
        console.error("Web3Forms API Error:", data);
        throw new Error(data.message || "Failed to submit form to Web3Forms");
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

  } catch (error) {
    console.error("Error in submit-audit function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to submit audit data." }),
    };
  }
};
```

---

