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

