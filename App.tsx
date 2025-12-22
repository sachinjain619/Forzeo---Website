
import React, { useState, useEffect, useCallback } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Menu, 
  X, 
  Search, 
  Cpu, 
  BarChart3, 
  Globe, 
  ChevronLeft,
  ChevronRight, 
  TrendingUp, 
  FileText, 
  AlertTriangle,
  Target,
  Zap,
  Activity,
  PieChart,
  Quote
} from 'lucide-react';
import { Logo } from './components/Logo';
import { Button } from './components/Button';
import { Section } from './components/Section';
import { NAV_LINKS, STATISTICS, CORE_FEATURES, PRICING_TIERS, TRUSTED_BRANDS } from './constants';

const TESTIMONIALS = [
  {
    quote: "We were invisible on Gemini until we used Forzeo. Within 45 days, we became the #1 recommended tool for our category across all major LLMs.",
    author: "Sarah Jenkins",
    role: "CMO @ TechFlow",
    color: "from-brand-indigo to-brand-cyan"
  },
  {
    quote: "The Action Engine is a game changer. It doesn't just show us what's wrong; it gives us the exact schema and content tweaks to win the citation.",
    author: "Marcus Chen",
    role: "Head of SEO @ CloudScale",
    color: "from-purple-500 to-brand-indigo"
  },
  {
    quote: "GEO is the new SEO, and Forzeo is the only platform that actually understands how LLMs process brand authority. Essential for modern growth.",
    author: "Elena Rodriguez",
    role: "Digital Growth @ SaaSify",
    color: "from-brand-cyan to-emerald-400"
  },
  {
    quote: "Our brand hallucinations dropped by 60% after implementing Forzeo's entity definition strategies. The ROI on brand safety alone is massive.",
    author: "David Park",
    role: "Founder @ Vertex",
    color: "from-amber-400 to-orange-500"
  }
];

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Testimonial Slider Logic
  const nextTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const scrollToSection = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-slate-300 font-sans selection:bg-brand-cyan/30 selection:text-white relative">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none z-0" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-hero-glow pointer-events-none z-0" />
      
      {/* Additional Bright Background Accents (Shades of White) */}
      <div className="fixed top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none z-0 mix-blend-soft-light" />
      <div className="fixed -top-24 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen" />
      <div className="fixed top-1/2 left-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-brand-dark/80 backdrop-blur-md border-white/10 py-4' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Logo />
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button variant="primary" size="sm" onClick={(e) => scrollToSection(e, '#audit')}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-brand-dark border-b border-white/10 p-6 flex flex-col gap-4 md:hidden">
            {NAV_LINKS.map(link => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-lg font-medium text-slate-300"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="primary" className="w-full" onClick={(e) => scrollToSection(e, '#audit')}>Get Started</Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-sm font-medium backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
              </span>
              The New Standard for GEO
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-white leading-tight">
              See How AI Search <br />
              <span className="text-gradient drop-shadow-[0_0_25px_rgba(34,211,238,0.2)]">Talks About You.</span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
              Your Brand reveals your visibility across ChatGPT, Gemini, Perplexity, and Copilot—and gives you clear actions to dominate generated answers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="secondary" 
                size="lg" 
                icon={<ArrowRight size={18} />}
                onClick={(e) => scrollToSection(e, '#audit')}
              >
                Run AI Visibility Audit
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={(e) => scrollToSection(e, '#solutions')}
              >
                View Sample Reports
              </Button>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-slate-500 mb-4">Trusted by marketers at</p>
              <div className="flex flex-wrap gap-6 text-slate-400 font-display font-bold text-lg opacity-60">
                {TRUSTED_BRANDS.map(brand => (
                  <span key={brand} className="hover:text-white transition-colors cursor-default">{brand}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Visual - Abstract Dashboard */}
          <div className="lg:col-span-6 relative">
            <div className="relative glass-panel rounded-2xl p-6 shadow-2xl border-t border-l border-white/20 animate-fade-in-up bg-brand-surface/60">
              {/* Fake Dashboard Header */}
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="px-3 py-1 rounded bg-black/20 text-xs font-mono text-brand-cyan border border-brand-cyan/20">
                  STATUS: OPTIMIZED
                </div>
              </div>

              {/* Fake Metrics Row */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-brand-dark/40 p-4 rounded-lg border border-white/5">
                  <div className="text-slate-400 text-xs mb-1">Total Mentions</div>
                  <div className="text-2xl font-display font-bold text-white">14,205</div>
                  <div className="text-emerald-400 text-xs mt-1 flex items-center gap-1">
                    <TrendingUp size={12} /> +12.5%
                  </div>
                </div>
                <div className="bg-brand-dark/40 p-4 rounded-lg border border-white/5">
                  <div className="text-slate-400 text-xs mb-1">Sentiment Score</div>
                  <div className="text-2xl font-display font-bold text-white">92.4</div>
                  <div className="text-brand-cyan text-xs mt-1 flex items-center gap-1">
                    <CheckCircle size={12} /> Excellent
                  </div>
                </div>
              </div>

              {/* Fake Conversation/Code Stream */}
              <div className="space-y-3 font-mono text-sm bg-black/30 p-4 rounded-lg border border-white/5">
                <div className="flex gap-2">
                  <span className="text-blue-400">user:</span>
                  <span className="text-slate-300">Compare top CRM tools for enterprise.</span>
                </div>
                <div className="h-px bg-white/5 my-2" />
                <div className="flex gap-2">
                  <span className="text-purple-400">ai:</span>
                  <span className="text-slate-300">
                    Based on recent data, <span className="text-white bg-brand-indigo/60 px-1 rounded shadow-[0_0_10px_rgba(79,70,229,0.3)]">Forzeo</span> is a leading choice due to robust security. Key competitors include...
                  </span>
                </div>
              </div>

              {/* Floating Badge - Positioned Bottom Right to Avoid Text Overlap */}
              <div className="absolute -bottom-6 -right-6 glass-panel px-6 py-4 rounded-xl flex items-center gap-3 shadow-xl animate-bounce-slow bg-brand-surface/90 border border-white/10">
                <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Optimization Score</div>
                  <div className="text-lg font-bold text-white">98/100</div>
                </div>
              </div>
            </div>
            
            {/* Background Glow behind dashboard */}
            <div className="absolute -inset-10 bg-brand-indigo/20 blur-3xl rounded-full -z-10 mix-blend-screen" />
          </div>
        </div>
      </section>

      {/* Problem Section - Split Screen */}
      <Section darker id="problem">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            SEO Alone Isn't Enough.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Traditional search is declining. AI assistants now answer queries directly, often without sending users to your website. If you aren't in the training data, you don't exist.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Old Way */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/5 relative overflow-hidden group hover:border-red-500/30 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Search size={100} />
            </div>
            <h3 className="text-xl font-bold text-slate-300 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Traditional SEO
            </h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <X className="text-red-500 shrink-0 mt-1" size={16} />
                <span>Optimizes for 10 blue links</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="text-red-500 shrink-0 mt-1" size={16} />
                <span>Relies on keywords & backlinks</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="text-red-500 shrink-0 mt-1" size={16} />
                <span>Losing traffic to zero-click searches</span>
              </li>
            </ul>
          </div>

          {/* New Way */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-indigo/20 to-brand-cyan/10 border border-brand-cyan/20 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu size={100} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_10px_#22d3ee]" />
              Generative Optimization (GEO)
            </h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-brand-cyan shrink-0 mt-1" size={16} />
                <span>Optimizes for AI Answers & Chat</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-brand-cyan shrink-0 mt-1" size={16} />
                <span>Focuses on entities & authority</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-brand-cyan shrink-0 mt-1" size={16} />
                <span>Captures intent before the click</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section id="features">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            The Fastest Way to Improve <br/>
            Your <span className="text-gradient">AI Visibility.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_FEATURES.map((feature, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-xl bg-brand-surface border border-white/5 hover:border-brand-indigo/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mb-6 group-hover:bg-brand-indigo group-hover:text-white transition-colors">
                <feature.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Deep Dive 1: Competitor Intel */}
      <Section darker className="border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            {/* Abstract Graphic */}
            <div className="relative z-10 grid gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-brand-surface border border-white/10 p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-white/10" />
                    <div className="w-24 h-2 bg-white/10 rounded" />
                  </div>
                  <div className={`text-sm font-mono ${i === 1 ? 'text-green-400' : 'text-slate-500'}`}>
                    {i === 1 ? '+14% Share' : '-2% Share'}
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute inset-0 bg-brand-cyan/20 blur-3xl -z-0 transform translate-x-10 translate-y-10" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="text-brand-cyan font-mono text-sm mb-4">COMPETITOR INTELLIGENCE</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              See Exactly Where Competitors Are Winning.
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Don't guess why they are recommended. Forzeo analyzes competitor mentions, identifies the authority sites feeding the AI, and highlights content gaps you need to fill.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-slate-300">
                <Target size={18} className="text-brand-indigo" />
                Identify authority sources citation flow
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Target size={18} className="text-brand-indigo" />
                Spot missing semantic angles
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Target size={18} className="text-brand-indigo" />
                Benchmark share of voice
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Deep Dive 2: Content Optimization */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-brand-indigo font-mono text-sm mb-4">CONTENT OPTIMIZATION</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Turn AI Insights Into High-Performing Content.
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              We don't just tell you the problem; we fix it. Our Action Engine generates specific schema updates, paragraph rewrites, and entity definitions to align with LLM preferences.
            </p>
            <Button variant="outline" icon={<ChevronRight size={16} />}>
              Explore Optimization Tools
            </Button>
          </div>
          <div className="relative">
            <div className="bg-brand-dark border border-white/10 rounded-xl p-6 relative z-10">
              <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                <AlertTriangle className="text-yellow-500" size={20} />
                <span className="text-white font-medium">Missing Entity Connection</span>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                Your pricing page lacks clear connection to "Enterprise Security" entities, causing generic output in ChatGPT queries for "secure enterprise tools".
              </p>
              <div className="bg-brand-indigo/10 border border-brand-indigo/20 p-3 rounded text-sm text-brand-cyan">
                Suggestion: Add structured data for ISO 27001 compliance...
              </div>
            </div>
            <div className="absolute -inset-4 bg-brand-indigo/20 blur-2xl -z-0" />
          </div>
        </div>
      </Section>

      {/* Social Proof with Testimonial Slider */}
      <Section darker className="text-center">
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {STATISTICS.map((stat, idx) => (
            <div key={idx} className="p-6 border-r border-white/5 last:border-0">
              <div className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="relative max-w-5xl mx-auto px-12">
          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border border-white/10 bg-brand-surface/50 hover:bg-brand-indigo hover:border-brand-indigo transition-all duration-300 group shadow-lg"
          >
            <ChevronLeft size={24} className="text-slate-400 group-hover:text-white" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border border-white/10 bg-brand-surface/50 hover:bg-brand-indigo hover:border-brand-indigo transition-all duration-300 group shadow-lg"
          >
            <ChevronRight size={24} className="text-slate-400 group-hover:text-white" />
          </button>

          <div className="bg-gradient-to-r from-brand-indigo/10 to-transparent p-1 rounded-3xl">
            <div className="bg-brand-surface p-12 lg:p-16 rounded-3xl relative overflow-hidden glass-panel">
              {/* Background Decoration */}
              <div className="absolute top-10 right-10 opacity-5 pointer-events-none">
                <Quote size={200} className="text-white" />
              </div>
              
              <div className="relative z-10 transition-all duration-500 ease-in-out">
                {TESTIMONIALS.map((t, idx) => (
                  <div 
                    key={idx}
                    className={`transition-all duration-700 absolute inset-0 flex flex-col items-center justify-center ${
                      idx === activeTestimonial 
                        ? 'opacity-100 translate-y-0 relative' 
                        : 'opacity-0 translate-y-8 absolute pointer-events-none'
                    }`}
                  >
                    <p className="text-2xl md:text-3xl text-slate-200 font-light italic leading-relaxed mb-10 max-w-3xl">
                      "{t.quote}"
                    </p>
                    
                    <div className="flex flex-col items-center gap-4">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${t.color} p-0.5 shadow-lg`}>
                        <div className="w-full h-full rounded-full bg-brand-dark flex items-center justify-center overflow-hidden">
                           <span className="text-white font-display font-bold text-xl">{t.author.charAt(0)}</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-white font-display font-bold text-xl tracking-wide">{t.author}</div>
                        <div className="text-brand-cyan font-medium text-sm mt-1">{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  idx === activeTestimonial ? 'w-8 bg-brand-cyan' : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Sample Reports */}
      <Section id="solutions">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-white">Actionable Intelligence</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Comprehensive dashboards that translate complex AI behavior into clear growth strategies.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Card 1: AI Visibility Snapshot */}
          <div className="group relative rounded-xl overflow-hidden bg-brand-surface border border-white/10 hover:border-brand-cyan/30 transition-all duration-300 shadow-lg flex flex-col">
            <div className="p-6 flex-1 flex flex-col relative z-10 bg-gradient-to-b from-brand-surface to-brand-dark">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <Activity size={16} className="text-brand-cyan" />
                  <h4 className="text-slate-300 font-medium text-sm tracking-wide uppercase">Visibility Index</h4>
                </div>
                <div className="flex items-center text-emerald-400 text-xs font-mono bg-emerald-400/10 px-2 py-0.5 rounded">
                  <TrendingUp size={10} className="mr-1" /> +24%
                </div>
              </div>
              
              {/* Mockup Chart */}
              <div className="flex-1 min-h-[140px] relative">
                 {/* Chart Grid Lines */}
                 <div className="absolute inset-0 flex flex-col justify-between opacity-10">
                    <div className="w-full h-px bg-white"></div>
                    <div className="w-full h-px bg-white"></div>
                    <div className="w-full h-px bg-white"></div>
                    <div className="w-full h-px bg-white"></div>
                 </div>
                 
                 {/* CSS SVG Chart */}
                 <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="gradientChart" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,100 C20,90 40,95 60,60 C80,30 100,40 120,20 C140,10 160,25 200,5 L200,140 L0,140 Z" fill="url(#gradientChart)" />
                    <path d="M0,100 C20,90 40,95 60,60 C80,30 100,40 120,20 C140,10 160,25 200,5" fill="none" stroke="#22D3EE" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                 </svg>

                 {/* Floating Points */}
                 <div className="absolute top-[5px] right-0 w-3 h-3 bg-brand-cyan rounded-full shadow-[0_0_10px_#22D3EE] border-2 border-brand-surface"></div>
              </div>

              <div className="flex justify-between text-[10px] text-slate-500 mt-4 font-mono uppercase">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
              </div>
            </div>
            
            <div className="p-4 bg-brand-dark/50 border-t border-white/5">
               <h3 className="text-white font-bold text-lg mb-1">AI Visibility Snapshot</h3>
               <p className="text-slate-400 text-xs">Track your ranking trajectory across models.</p>
            </div>
          </div>

          {/* Card 2: Competitor Scorecard */}
          <div className="group relative rounded-xl overflow-hidden bg-brand-surface border border-white/10 hover:border-brand-indigo/40 transition-all duration-300 shadow-lg flex flex-col">
             <div className="p-6 flex-1 flex flex-col relative z-10 bg-gradient-to-b from-brand-surface to-brand-dark">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <Target size={16} className="text-brand-indigo" />
                    <h4 className="text-slate-300 font-medium text-sm tracking-wide uppercase">Share of Voice</h4>
                  </div>
                </div>

                {/* Mockup Bars */}
                <div className="space-y-4 flex-1">
                   {/* Brand Bar */}
                   <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-white font-bold">Forzeo</span>
                        <span className="text-brand-cyan">68%</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full w-[68%] bg-brand-cyan shadow-[0_0_10px_rgba(34,211,238,0.5)] rounded-full"></div>
                      </div>
                   </div>
                   {/* Comp 1 */}
                   <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-400">Competitor A</span>
                        <span className="text-slate-500">42%</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full w-[42%] bg-slate-600 rounded-full"></div>
                      </div>
                   </div>
                   {/* Comp 2 */}
                   <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-400">Competitor B</span>
                        <span className="text-slate-500">21%</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full w-[21%] bg-slate-700 rounded-full"></div>
                      </div>
                   </div>
                </div>
             </div>
             
             <div className="p-4 bg-brand-dark/50 border-t border-white/5">
               <h3 className="text-white font-bold text-lg mb-1">Competitor Scorecard</h3>
               <p className="text-slate-400 text-xs">Benchmark your presence against rivals.</p>
            </div>
          </div>

          {/* Card 3: Mention Breakdown */}
          <div className="group relative rounded-xl overflow-hidden bg-brand-surface border border-white/10 hover:border-brand-indigo/40 transition-all duration-300 shadow-lg flex flex-col">
             <div className="p-6 flex-1 flex flex-col relative z-10 bg-gradient-to-b from-brand-surface to-brand-dark">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <PieChart size={16} className="text-purple-400" />
                    <h4 className="text-slate-300 font-medium text-sm tracking-wide uppercase">Mention Types</h4>
                  </div>
                </div>

                {/* Mockup Content */}
                <div className="flex items-center gap-4 flex-1">
                   {/* CSS Donut */}
                   <div className="relative w-20 h-20 shrink-0">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <path className="text-slate-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                        <path className="text-brand-indigo" strokeDasharray="60, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                        <path className="text-purple-500" strokeDasharray="25, 100" strokeDashoffset="-60" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white">
                        Total
                      </div>
                   </div>

                   {/* Legend */}
                   <div className="space-y-2 text-xs flex-1">
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-brand-indigo"></span>
                            <span className="text-slate-300">Citations</span>
                         </div>
                         <span className="text-white font-mono">60%</span>
                      </div>
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                            <span className="text-slate-300">Direct Recs</span>
                         </div>
                         <span className="text-white font-mono">25%</span>
                      </div>
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                            <span className="text-slate-400">Neutral</span>
                         </div>
                         <span className="text-slate-500 font-mono">15%</span>
                      </div>
                   </div>
                </div>
             </div>
             
             <div className="p-4 bg-brand-dark/50 border-t border-white/5">
               <h3 className="text-white font-bold text-lg mb-1">Mention Breakdown</h3>
               <p className="text-slate-400 text-xs">Analyze sentiment & context sources.</p>
            </div>
          </div>

        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" darker>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Simple, Transparent Pricing.
          </h2>
          <p className="text-slate-400">Start auditing your visibility today.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {PRICING_TIERS.map((tier, idx) => (
            <div 
              key={idx} 
              className={`p-6 rounded-2xl border flex flex-col ${
                tier.recommended 
                  ? 'bg-brand-surface border-brand-indigo/50 shadow-[0_0_30px_rgba(79,70,229,0.15)] relative' 
                  : 'bg-brand-surface/30 border-white/5'
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-indigo text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
              <div className="text-3xl font-display font-bold text-white mb-4">{tier.price}<span className="text-sm text-slate-500 font-sans font-normal">/mo</span></div>
              <p className="text-slate-400 text-sm mb-6 h-10">{tier.description}</p>
              
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle size={14} className="text-brand-cyan mt-1 shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={tier.recommended ? 'primary' : 'outline'} 
                className="w-full"
                onClick={(e) => scrollToSection(e, '#audit')}
              >
                {tier.price === 'Custom' ? 'Contact Sales' : 'Start Free Audit'}
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <section id="audit" className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-brand-indigo/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
            Your Customers Ask AI Every Day. <br/>
            <span className="text-brand-cyan">Make Sure It Recommends You.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Run My Free AI Visibility Audit
            </Button>
            <Button variant="ghost" size="lg" className="w-full sm:w-auto border border-white/10">
              Book a Strategy Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="resources" className="border-t border-white/10 bg-brand-dark py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <Logo className="mb-6" />
            <p className="text-slate-500 text-sm">
              The first comprehensive Generative Engine Optimization platform for modern brands.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#features" onClick={(e) => scrollToSection(e, '#features')} className="hover:text-brand-cyan transition-colors">Features</a></li>
              <li><a href="#solutions" onClick={(e) => scrollToSection(e, '#solutions')} className="hover:text-brand-cyan transition-colors">Solutions</a></li>
              <li><a href="#pricing" onClick={(e) => scrollToSection(e, '#pricing')} className="hover:text-brand-cyan transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
             <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-cyan transition-colors">GEO Guide</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Case Studies</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center text-slate-600 text-sm">
          © {new Date().getFullYear()} Forzeo Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
