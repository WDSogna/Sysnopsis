import { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ChevronDown, Sword, Shield, Sparkles, Building2, Users, Map, MonitorPlay, ShoppingBag, Coffee, BookOpen, PenTool, DoorOpen, Handshake, X } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'synopsis' | 'site-analysis' | 'concept'>('home');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMapExpanded, setIsMapExpanded] = useState(false);
  const [showCombinedArts, setShowCombinedArts] = useState(false);
  const [showIpExpansion, setShowIpExpansion] = useState(false);
  const [isCreativeStudioExpanded, setIsCreativeStudioExpanded] = useState(false);
  const [isCentralizedHubExpanded, setIsCentralizedHubExpanded] = useState(false);
  const [isNarrativeExpanded, setIsNarrativeExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  if (showCombinedArts) {
    return (
      <div className="min-h-screen font-sans selection:bg-red-900/50 selection:text-white bg-zinc-950 text-zinc-400">
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
          <button 
            onClick={() => setShowCombinedArts(false)}
            className="text-white hover:text-red-500 transition-colors flex items-center gap-2 font-medium"
          >
            ← BACK TO SYNOPSIS
          </button>
        </nav>
        
        <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
          <FadeIn>
            <h1 className="font-display text-5xl md:text-6xl text-white mb-6">종합 예술로서의 게임</h1>
            <p className="text-xl max-w-3xl mb-20 leading-relaxed">
              오늘날의 게임은 단순한 오락을 넘어 Art, Audio, Story & Play Design 등 다양한 예술 분야가 집약된 디지털 종합 예술(Digital Combined Arts)로 진화했습니다.
            </p>
          </FadeIn>

          {/* 2D Art */}
          <FadeIn delay={0.1} className="mb-24">
            <h2 className="font-display text-3xl text-white mb-2">2D Art</h2>
            <p className="text-red-500 tracking-widest text-sm mb-8 uppercase">concept art, Illustration, Animation</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img src="https://i.postimg.cc/d0jxT0Cd/image.png" alt="2D Art 1" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img src="https://i.postimg.cc/9FwgYbTW/image.png" alt="2D Art 2" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img src="https://i.postimg.cc/2652b7mW/image.png" alt="2D Art 3" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
            </div>
          </FadeIn>

          {/* 3D Art */}
          <FadeIn delay={0.2} className="mb-24">
            <h2 className="font-display text-3xl text-white mb-2">3D Art</h2>
            <p className="text-red-500 tracking-widest text-sm mb-8 uppercase">Modeling, Render, Cutscene, Motion</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img src="https://i.postimg.cc/jSbVWm18/image.png" alt="3D Art 1" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img src="https://i.postimg.cc/MTXg2Scq/image.png" alt="3D Art 2" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img src="https://i.postimg.cc/05MhV9RC/image.png" alt="3D Art 3" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
            </div>
          </FadeIn>

          {/* Audio */}
          <FadeIn delay={0.3} className="mb-24">
            <h2 className="font-display text-3xl text-white mb-2">Audio</h2>
            <p className="text-red-500 tracking-widest text-sm mb-8 uppercase">Original Score, Song/Theme, Opening/Ending, Sound Effect</p>
            <div className="w-full overflow-hidden rounded-2xl border border-white/10">
              <img src="https://i.postimg.cc/Gm7Q0svk/image.png" alt="Audio" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
            </div>
          </FadeIn>

          {/* Story & Play Design */}
          <FadeIn delay={0.4} className="mb-24">
            <h2 className="font-display text-3xl text-white mb-8">Story & Play Design</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img src="https://i.postimg.cc/6p3rh5FR/image.png" alt="Story & Play 1" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img src="https://i.postimg.cc/FRDFGm2w/image.png" alt="Story & Play 2" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
            </div>
          </FadeIn>
        </main>
      </div>
    );
  }

  if (showIpExpansion) {
    return (
      <div className="min-h-screen font-sans selection:bg-red-900/50 selection:text-white bg-zinc-950 text-zinc-400">
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
          <button 
            onClick={() => setShowIpExpansion(false)}
            className="text-white hover:text-red-500 transition-colors flex items-center gap-2 font-medium"
          >
            ← BACK TO SYNOPSIS
          </button>
        </nav>
        
        <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
          <FadeIn>
            <h1 className="font-display text-5xl md:text-6xl text-white mb-6">무한한 세계관의 확장</h1>
            <p className="text-xl max-w-3xl mb-20 leading-relaxed">
              강력한 IP(Intellectual Property)를 바탕으로 여러 개의 Series는 물론, Comic, Animation, Theme Cafe, Concert, Goods 등 다채로운 문화 콘텐츠로 그 영역을 끝없이 확장하고 있습니다.
            </p>
          </FadeIn>

          {/* Series */}
          <FadeIn delay={0.1} className="mb-24">
            <h2 className="font-display text-3xl text-white mb-8">Series</h2>
            <div className="w-full overflow-hidden rounded-2xl border border-white/10">
              <img src="https://i.postimg.cc/mgs58MBm/image.png" alt="Series" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
            </div>
          </FadeIn>

          {/* Comic & Animation */}
          <FadeIn delay={0.2} className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display text-3xl text-white mb-8">Comic</h2>
                <div className="overflow-hidden rounded-2xl border border-white/10">
                  <img src="https://i.postimg.cc/CKvrhQkg/image.png" alt="Comic" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div>
                <h2 className="font-display text-3xl text-white mb-8">Animation</h2>
                <div className="overflow-hidden rounded-2xl border border-white/10">
                  <img src="https://i.postimg.cc/7hzKNPcr/image.png" alt="Animation" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Concert & Theme cafe */}
          <FadeIn delay={0.3} className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display text-3xl text-white mb-8">Concert</h2>
                <div className="overflow-hidden rounded-2xl border border-white/10">
                  <img src="https://i.postimg.cc/J4WxLLv1/image.png" alt="Concert" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div>
                <h2 className="font-display text-3xl text-white mb-8">Theme cafe</h2>
                <div className="overflow-hidden rounded-2xl border border-white/10">
                  <img src="https://i.postimg.cc/hGhbrPzw/image.png" alt="Theme cafe" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Goods */}
          <FadeIn delay={0.4} className="mb-24">
            <h2 className="font-display text-3xl text-white mb-8">Goods</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img src="https://i.postimg.cc/9QZWKy66/image.png" alt="Goods 1" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img src="https://i.postimg.cc/qqKJrnt4/image.png" alt="Goods 2" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img src="https://i.postimg.cc/xCwQ6C6F/image.png" alt="Goods 3" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
            </div>
          </FadeIn>
        </main>
      </div>
    );
  }

  if (currentPage === 'home') {
    return (
      <div className="min-h-screen font-sans selection:bg-red-900/50 selection:text-white bg-zinc-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-screen" />
        
        <div className="relative z-10 w-full max-w-5xl">
          <FadeIn className="text-center mb-20">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tighter">
              ARCADIA
            </h1>
            <p className="text-xl text-zinc-400 font-light tracking-widest uppercase">
              Square Enix Office Architecture Project
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div 
                className="group relative overflow-hidden rounded-3xl bg-zinc-900/50 border border-white/10 p-12 cursor-pointer hover:border-red-500/50 transition-all duration-500 h-full"
                onClick={() => {
                  setCurrentPage('synopsis');
                  window.scrollTo(0, 0);
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h2 className="font-display text-4xl text-white mb-4 flex items-center gap-4">
                  <span className="text-red-500">01.</span> Synopsis
                </h2>
                <p className="text-zinc-400 text-lg">
                  프로젝트의 배경, 컨셉, 프로그램 및 레퍼런스 분석
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div 
                className="group relative overflow-hidden rounded-3xl bg-zinc-900/50 border border-white/10 p-12 cursor-pointer hover:border-red-500/50 transition-all duration-500 h-full"
                onClick={() => {
                  setCurrentPage('site-analysis');
                  window.scrollTo(0, 0);
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h2 className="font-display text-4xl text-white mb-4 flex items-center gap-4">
                  <span className="text-red-500">02.</span> Site Analysis
                </h2>
                <p className="text-zinc-400 text-lg">
                  대상지 분석 및 환경 조사
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div 
                className="group relative overflow-hidden rounded-3xl bg-zinc-900/50 border border-white/10 p-12 cursor-pointer hover:border-red-500/50 transition-all duration-500 h-full"
                onClick={() => {
                  setCurrentPage('concept');
                  window.scrollTo(0, 0);
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h2 className="font-display text-4xl text-white mb-4 flex items-center gap-4">
                  <span className="text-red-500">03.</span> Concept
                </h2>
                <p className="text-zinc-400 text-lg">
                  프로젝트의 핵심 디자인 컨셉 및 방향성
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'concept') {
    return (
      <div className="min-h-screen font-sans selection:bg-red-900/50 selection:text-white bg-zinc-950 text-zinc-400">
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-white hover:text-red-500 transition-colors flex items-center gap-2 font-medium"
          >
            ← BACK TO HOME
          </button>
        </nav>
        
        <main className="pt-20 pb-24">
          <div className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden rounded-b-[3rem] border-b border-white/10">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://i.postimg.cc/RVv78xns/image.png" 
                alt="Concept Background" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
              <FadeIn>
                <div className="inline-flex items-center justify-center gap-6 mb-6">
                  <span className="text-red-500 font-display text-4xl md:text-6xl">03.</span>
                  <div className="h-px w-16 bg-red-500/50" />
                </div>
                <h1 className="font-display text-7xl md:text-9xl text-white mb-8 tracking-tighter drop-shadow-2xl uppercase">
                  Concept
                </h1>
                <p className="text-xl md:text-2xl text-zinc-300 font-light tracking-widest uppercase drop-shadow-lg">
                  Core Design Direction & Philosophy
                </p>
              </FadeIn>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 mt-32">
            <FadeIn>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                <div className="lg:col-span-3 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src="https://i.postimg.cc/DyGmpJzH/Enscape-2026-03-12-14-32-54.png" 
                    alt="Concept Introduction" 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="lg:col-span-2 flex flex-col justify-center">
                  <h2 className="font-display text-4xl md:text-5xl text-white mb-6">The Beginning of Arcadia</h2>
                  <div className="w-12 h-1 bg-red-500 mb-8" />
                  <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="text-lg text-zinc-400 leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="max-w-7xl mx-auto px-6 mt-32">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl md:text-5xl text-white mb-6">Design Process</h2>
                <div className="w-12 h-1 bg-red-500 mx-auto" />
              </div>
              <div className="flex flex-col gap-16 items-center">
                <div className="w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/20">
                  <img 
                    src="https://i.postimg.cc/0jw2rDp1/image.png" 
                    alt="Design Process 1" 
                    className="w-full h-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/20">
                  <img 
                    src="https://i.postimg.cc/mgGywG22/image.png" 
                    alt="Design Process 2" 
                    className="w-full h-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-full mt-8">
                  <div 
                    className="flex justify-between items-center mb-8 border-b border-white/10 pb-4 cursor-pointer group"
                    onClick={() => setIsCentralizedHubExpanded(!isCentralizedHubExpanded)}
                  >
                    <h3 className="text-2xl text-white font-medium group-hover:text-red-400 transition-colors">Centralized Hub</h3>
                    <ChevronDown className={`w-6 h-6 text-zinc-500 transition-transform duration-300 ${isCentralizedHubExpanded ? 'rotate-180' : ''}`} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5 hover:border-white/20 transition-colors">
                      <h4 className="text-white font-medium mb-2">Image Studio Division</h4>
                      <p className="text-sm text-zinc-500">모션 캡처, 시네마틱 제작, 게임 비주얼 지원</p>
                    </div>

                    <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5 hover:border-white/20 transition-colors">
                      <h4 className="text-white font-medium mb-2">Audio Studio</h4>
                      <p className="text-sm text-zinc-500">음악, 효과음</p>
                    </div>

                    <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5 hover:border-white/20 transition-colors">
                      <h4 className="text-white font-medium mb-2">Sales & Distribution / Customer Experience</h4>
                      <p className="text-sm text-zinc-500">마케팅, 퍼블리싱, 온라인 서비스</p>
                    </div>

                    <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5 hover:border-white/20 transition-colors">
                      <h4 className="text-white font-medium mb-2">Core Service & IT/QA</h4>
                      <p className="text-sm text-zinc-500">기술 연구/개발/관리, 게임 검수</p>
                    </div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ height: isCentralizedHubExpanded ? 'auto' : 0, opacity: isCentralizedHubExpanded ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    {/* Desktop Tree Lines */}
                    <div className="hidden md:flex flex-col items-center pt-4">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: isCentralizedHubExpanded ? 32 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-0.5 bg-red-500/50"
                      />
                      <div className="w-full relative">
                        <motion.div 
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: isCentralizedHubExpanded ? 1 : 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="h-0.5 bg-red-500/50 w-[66.66%] mx-auto origin-center"
                        />
                        <div className="flex justify-between w-[66.66%] mx-auto h-8">
                          <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: isCentralizedHubExpanded ? 1 : 0 }} transition={{ duration: 0.2, delay: 0.5 }} className="w-0.5 h-full bg-red-500/50 origin-top" />
                          <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: isCentralizedHubExpanded ? 1 : 0 }} transition={{ duration: 0.2, delay: 0.5 }} className="w-0.5 h-full bg-red-500/50 origin-top" />
                          <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: isCentralizedHubExpanded ? 1 : 0 }} transition={{ duration: 0.2, delay: 0.5 }} className="w-0.5 h-full bg-red-500/50 origin-top" />
                        </div>
                      </div>
                    </div>

                    {/* Mobile Tree Lines */}
                    <div className="md:hidden flex flex-col items-center pt-4">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: isCentralizedHubExpanded ? 32 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-0.5 bg-red-500/50"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
                      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: isCentralizedHubExpanded ? 0 : 20, opacity: isCentralizedHubExpanded ? 1 : 0 }} transition={{ delay: 0.6 }} className="bg-zinc-900/80 p-6 rounded-xl border border-red-500/20 relative">
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-500 hidden md:block" />
                        <h4 className="text-white font-medium mb-3">초대형 스튜디오<br/><span className="text-sm text-red-400">Creative Studio 1, 3</span></h4>
                        <p className="text-sm text-zinc-400 leading-relaxed">하이엔드 대규모 게임을 개발하는 핵심 스튜디오. Creative Studio 중 60% 면적과 400명 규모의 인원.</p>
                      </motion.div>
                      
                      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: isCentralizedHubExpanded ? 0 : 20, opacity: isCentralizedHubExpanded ? 1 : 0 }} transition={{ delay: 0.7 }} className="bg-zinc-900/80 p-6 rounded-xl border border-red-500/20 relative">
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-500 hidden md:block" />
                        <h4 className="text-white font-medium mb-3">중대형 스튜디오<br/><span className="text-sm text-red-400">Creative Studio 2, 4</span></h4>
                        <p className="text-sm text-zinc-400 leading-relaxed">외부 개발사와의 코워크 비중 높음. Creative Studio 중 25% 면적과 200명 규모의 인원.</p>
                      </motion.div>
                      
                      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: isCentralizedHubExpanded ? 0 : 20, opacity: isCentralizedHubExpanded ? 1 : 0 }} transition={{ delay: 0.8 }} className="bg-zinc-900/80 p-6 rounded-xl border border-red-500/20 relative">
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-500 hidden md:block" />
                        <h4 className="text-white font-medium mb-3">중소형 집중 스튜디오<br/><span className="text-sm text-red-400">Creative Studio 5</span></h4>
                        <p className="text-sm text-zinc-400 leading-relaxed">레트로 감성의 HD-2D 게임 개발. Creative Studio 중 15% 면적과 50-100명 규모의 인원.</p>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                <div className="w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/20">
                  <img 
                    src="https://i.postimg.cc/xd6GnJGG/image.png" 
                    alt="Design Process 3" 
                    className="w-full h-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/20">
                  <img 
                    src="https://i.postimg.cc/DZqxFyzN/image.png" 
                    alt="Design Process 4" 
                    className="w-full h-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="max-w-7xl mx-auto px-6 mt-32 mb-32">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl md:text-5xl text-white mb-6">Narrative of Arcadia</h2>
                <div className="w-12 h-1 bg-red-500 mx-auto" />
              </div>

              <div className="flex flex-col items-center">
                {/* Main Image */}
                <div 
                  className="w-full max-w-5xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/20 cursor-pointer group relative"
                  onClick={() => setIsNarrativeExpanded(!isNarrativeExpanded)}
                >
                  <img 
                    src="https://i.postimg.cc/tRsMYyMN/image.png" 
                    alt="Narrative of Arcadia Main" 
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                    <span className="text-white text-sm">Click to expand</span>
                    <ChevronDown className={`w-4 h-4 text-white transition-transform duration-500 ${isNarrativeExpanded ? 'rotate-180' : ''}`} />
                  </div>
                </div>

                {/* Expandable Content */}
                <motion.div
                  initial={false}
                  animate={{ height: isNarrativeExpanded ? 'auto' : 0, opacity: isNarrativeExpanded ? 1 : 0 }}
                  className="overflow-hidden w-full max-w-5xl mt-12"
                >
                  {/* Horizontal Line Container */}
                  <div className="relative w-full h-1 bg-zinc-800 rounded-full mb-12">
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isNarrativeExpanded ? 1 : 0 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="absolute top-0 left-0 h-full bg-red-500 rounded-full origin-left"
                    />
                  </div>

                  {/* 4 Images Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      "https://i.postimg.cc/rwHdy10Q/Enscape-2026-03-13-22-20-08.png",
                      "https://i.postimg.cc/RCTNJ5Jt/Enscape-2026-03-12-12-39-33.png",
                      "https://i.postimg.cc/cJdzHnpL/Enscape-2026-03-12-12-41-45.png",
                      "https://i.postimg.cc/V5yGcrqx/Enscape-2026-03-12-12-43-07.png"
                    ].map((src, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: isNarrativeExpanded ? 1 : 0, 
                          y: isNarrativeExpanded ? 0 : 20 
                        }}
                        transition={{ 
                          duration: 0.5, 
                          delay: isNarrativeExpanded ? 0.3 + (index * 0.3) : 0 
                        }}
                        className="rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-zinc-900/50"
                      >
                        <img 
                          src={src} 
                          alt={`Narrative Sequence ${index + 1}`} 
                          className="w-full h-auto object-cover aspect-video cursor-pointer hover:opacity-80 transition-opacity"
                          referrerPolicy="no-referrer"
                          onClick={() => setSelectedImage(src)}
                        />
                        <div className="p-4 text-center border-t border-white/5">
                          <span className="text-zinc-500 font-mono text-sm">Phase 0{index + 1}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>

          {/* Ending Image Container */}
          <div className="max-w-7xl mx-auto px-6 mt-32 mb-32">
            <FadeIn>
              <div className="w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/20">
                <img 
                  src="https://i.postimg.cc/RVv78xns/image.png" 
                  alt="Concept Ending" 
                  className="w-full h-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </FadeIn>
          </div>
        </main>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-default"
                onClick={(e) => e.stopPropagation()}
                referrerPolicy="no-referrer"
              />
              <button
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  if (currentPage === 'site-analysis') {
    return (
      <div className="min-h-screen font-sans selection:bg-red-900/50 selection:text-white bg-zinc-950 text-zinc-400">
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-white hover:text-red-500 transition-colors flex items-center gap-2 font-medium"
          >
            ← BACK TO HOME
          </button>
        </nav>
        
        <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
          <FadeIn className="text-center mb-20">
            <h1 className="font-display text-5xl md:text-6xl text-white mb-6">Site Analysis</h1>
            <p className="text-xl text-zinc-400">
              대상지 분석 및 환경 조사
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mb-24">
              <h2 className="font-display text-4xl text-white mb-8 border-b border-white/10 pb-4">Urban Context</h2>
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="https://i.postimg.cc/yxL1WtgX/image.png" alt="Urban Context" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
              <div>
                <h2 className="font-display text-4xl text-white mb-8 border-b border-white/10 pb-4">Sight</h2>
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img src="https://i.postimg.cc/KYh2cxqq/image.png" alt="Sight Analysis" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div>
                <h2 className="font-display text-4xl text-white mb-8 border-b border-white/10 pb-4">Node</h2>
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white">
                  <img src="https://i.postimg.cc/6Q8YPvLH/image.png" alt="Node Analysis" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </FadeIn>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans selection:bg-red-900/50 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
        <button 
          onClick={() => setCurrentPage('home')}
          className="font-display font-bold text-xl tracking-widest text-white hover:text-red-500 transition-colors flex items-center gap-2"
        >
          ← HOME
        </button>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-zinc-400">
          <a href="#prologue" className="hover:text-white transition-colors">PROLOGUE</a>
          <a href="#concept" className="hover:text-white transition-colors">CONCEPT</a>
          <a href="#characters" className="hover:text-white transition-colors">CHARACTERS</a>
          <a href="#program" className="hover:text-white transition-colors">PROGRAM</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/x86D0MJ4/image.png" 
            alt="Square Enix Representative" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-zinc-950/60 to-zinc-950" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h2 className="text-red-500 font-medium tracking-[0.2em] text-sm md:text-base mb-6 uppercase">
              SQUARE ENIX 복합 문화 오피스
            </h2>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tighter">
              ARCADIA
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
              SQUARE ENIX의 판타지 세계를<br/>메타포한 복합 문화 공간
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-zinc-500"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 opacity-50" />
        </motion.div>
      </section>

      {/* Prologue Section */}
      <section id="prologue" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Company Origin */}
          <FadeIn className="mb-32">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl text-white mb-4">THE ORIGIN</h2>
              <p className="text-zinc-400">두 거장의 만남, 그리고 새로운 전설의 시작</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative">
              {/* Plus Icon in the middle (desktop) */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-zinc-950 border border-white/10 rounded-full items-center justify-center z-10 text-zinc-500 text-2xl font-light">
                +
              </div>

              {/* SQUARE */}
              <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-10 flex flex-col items-center text-center hover:border-white/10 transition-colors">
                <div className="h-16 flex items-center justify-center mb-6">
                  <img src="https://i.postimg.cc/SKknKqwR/image.png" alt="SQUARE Logo" className="max-h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-2xl text-white mb-4 font-display">SQUARE</h3>
                <p className="text-zinc-400 leading-relaxed">
                  첨단 기술과 장인 정신, 자체 개발을 통한 완벽하고 고도화된 종합 예술로서의 게임 개발.
                </p>
              </div>

              {/* ENIX */}
              <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-10 flex flex-col items-center text-center hover:border-white/10 transition-colors">
                <div className="h-16 flex items-center justify-center mb-6">
                  <img src="https://i.postimg.cc/R0S0BdHr/image.png" alt="ENIX Logo" className="max-h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-2xl text-white mb-4 font-display">ENIX</h3>
                <p className="text-zinc-400 leading-relaxed">
                  크리에이터 발굴 및 프로듀싱 중심으로 계속해서 성장하는 컴퓨터 엔터테인먼트 회사를 추구.
                </p>
              </div>
            </div>

            {/* SQUARE ENIX */}
            <div 
              className="bg-gradient-to-b from-zinc-900/80 to-zinc-950 border border-red-500/20 rounded-3xl p-10 md:p-16 flex flex-col items-center text-center relative overflow-hidden cursor-pointer group transition-all duration-500"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <div className="absolute inset-0 bg-red-500/5 mix-blend-overlay group-hover:bg-red-500/10 transition-colors" />
              <div className="h-20 flex items-center justify-center mb-6 relative z-10">
                <img src="https://i.postimg.cc/3xJRM9pg/image.png" alt="SQUARE ENIX Logo" className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-3xl text-white mb-6 font-display relative z-10">SQUARE ENIX</h3>
              <p className="text-zinc-300 leading-relaxed max-w-3xl relative z-10 text-lg">
                2003년 합병. 자체 제작한 최고 퀄리티의 콘텐츠를 직접 유통, 관리까지 진행하여 게임 지주 회사 및 엔터테인먼트 복합 기업으로 거듭남.
              </p>

              <motion.div 
                initial={false}
                animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                className="overflow-hidden w-full relative z-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 mt-8 border-t border-white/10">
                  <img src="https://i.postimg.cc/rmBXzMQg/image.png" alt="Representative IP 1" className="w-full h-auto rounded-xl object-cover shadow-2xl hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <img src="https://i.postimg.cc/2jWNML5C/image.png" alt="Representative IP 2" className="w-full h-auto rounded-xl object-cover shadow-2xl hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <img src="https://i.postimg.cc/bwNMyZp4/image.png" alt="Representative IP 3" className="w-full h-auto rounded-xl object-cover shadow-2xl hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
              </motion.div>

              {!isExpanded && (
                <div className="absolute bottom-4 text-red-500/50 text-sm flex items-center gap-2 animate-pulse">
                  <span>Click to reveal IPs</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              )}
            </div>
          </FadeIn>

          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="font-display text-4xl md:text-5xl text-white mb-8">
                  "무한한 상상력으로<br/>새로운 세계를 만들어내자."
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-8">
                  100% 자체 첨단 기술력을 바탕으로 고유한 세계관과 완벽한 퀄리티의 게임을 추구하는 장인 정신의 SQUARE와 시대에 따라 끊임 없이 성장하려는 컴퓨터 엔터테인먼트 ENIX의 결합으로 탄생한 기업이다.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  고유한 하이 판타지 세계관을 창조하여 소비자들이 즐길 수 있도록 만드는 환상향의 경영 집단이다.
                </p>
                <p className="text-white font-medium text-lg mt-8 border-l-2 border-red-500 pl-4 leading-relaxed">
                  업무 상으로는 첨단과 지속적인 발전을 추구하나, 창작하는 세계는 환상과 새로움으로 가득 차 있다.
                </p>
              </div>
              <div className="relative h-[400px] w-full mt-12 lg:mt-0 group">
                <img src="https://i.postimg.cc/0N15jgyM/image.png" alt="High Fantasy 1" className="absolute top-0 left-0 w-[65%] h-64 object-cover rounded-2xl shadow-2xl border border-white/10 z-10 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-500" referrerPolicy="no-referrer" />
                <img src="https://i.postimg.cc/DZjKqRng/image.png" alt="High Fantasy 2" className="absolute bottom-0 right-0 w-[65%] h-64 object-cover rounded-2xl shadow-2xl border border-white/10 z-20 group-hover:translate-y-2 group-hover:translate-x-2 transition-transform duration-500" referrerPolicy="no-referrer" />
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                  <div className="bg-zinc-950/80 backdrop-blur-md border border-white/10 p-6 rounded-3xl text-center shadow-2xl">
                    <Sparkles className="w-8 h-8 text-red-500 mx-auto mb-3" />
                    <h4 className="font-display text-xl text-white mb-2 tracking-widest">HIGH FANTASY</h4>
                    <p className="text-zinc-400 text-sm">현실과의 완벽한 분리,<br/>웅장한 스케일, 환상의 극대화</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div 
                className="bg-zinc-900/40 border border-white/5 rounded-3xl p-10 hover:border-white/10 transition-colors cursor-pointer group"
                onClick={() => {
                  setShowCombinedArts(true);
                  window.scrollTo(0, 0);
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-red-500 font-medium tracking-widest text-sm">COMBINED ARTS</h4>
                  <span className="text-white/30 group-hover:text-white/60 transition-colors text-sm">자세히 보기 →</span>
                </div>
                <h3 className="text-2xl text-white font-display">종합 예술로서의 게임</h3>
              </div>
              <div 
                className="bg-zinc-900/40 border border-white/5 rounded-3xl p-10 hover:border-white/10 transition-colors cursor-pointer group"
                onClick={() => {
                  setShowIpExpansion(true);
                  window.scrollTo(0, 0);
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-red-500 font-medium tracking-widest text-sm">IP EXPANSION</h4>
                  <span className="text-white/30 group-hover:text-white/60 transition-colors text-sm">자세히 보기 →</span>
                </div>
                <h3 className="text-2xl text-white font-display">무한한 세계관의 확장</h3>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="mt-32">
            <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                  <img src="https://i.postimg.cc/R0718zY9/image.png" alt="SQUARE ENIX Value 1" className="w-full h-full object-cover rounded-2xl shadow-2xl border border-white/10 aspect-square" referrerPolicy="no-referrer" />
                  <img src="https://i.postimg.cc/Pf3W0yS1/image.png" alt="SQUARE ENIX Value 2" className="w-full h-full object-cover rounded-2xl shadow-2xl border border-white/10 mt-8 aspect-square" referrerPolicy="no-referrer" />
                </div>
                <div className="order-1 lg:order-2">
                  <h4 className="text-red-500 font-medium tracking-widest mb-4 text-sm">ULTIMATE VALUE</h4>
                  <h3 className="text-3xl md:text-4xl text-white mb-6 font-display">SQUARE ENIX 게임의 궁극적 가치</h3>
                  <p className="text-zinc-400 leading-relaxed text-lg">
                    스퀘어 에닉스가 현재 주력으로 삼고 있는 3D 고품질 RPG의 진정한 목표는 제작자와 플레이어 가릴 것 없이 세계관 속 인물이나 상황에 스스로를 이입하도록 하는 것에 있다. 단순 콘텐츠의 제작과 플레이가 아닌 세계관에 대한 <span className="text-white">몰입</span>과 <span className="text-white">애정</span>이 게임에 대한 그들의 궁극적인 가치이자 게임과 문화 콘텐츠가 상호작용하여 서로를 지속적으로 확장 및 소비시키는 원동력이다.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} className="mt-32">
            <div className="bg-red-950/20 border border-red-900/30 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h4 className="text-red-400 font-medium tracking-widest mb-6">THE PROBLEM</h4>
                <h3 className="text-2xl md:text-3xl text-white mb-8 leading-relaxed">
                  오피스 공간에서의 IP 경험 부재<br/>
                  창작하는 공간과 소비하는 공간의 <span className="text-red-500">분리</span>
                </h3>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  IP 분위기와 현실 공간 사이의 괴리로 인해 새로운 소비자 유입이 저하되고 있습니다.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group overflow-hidden rounded-2xl border border-white/10">
                  <img src="https://i.postimg.cc/13wgz3BG/image.png" alt="Office Space Problem" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent flex items-end p-6">
                    <p className="text-white font-medium">현실적인 오피스 공간</p>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl border border-white/10">
                  <img src="https://i.postimg.cc/G2h9zJRC/image.png" alt="Exhibition Space Problem" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent flex items-end p-6">
                    <p className="text-white font-medium">분리된 소비 공간</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="py-32 px-6 bg-zinc-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl text-white mb-6">판타지 세계의 구축과 인식</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-16">
              "Arcadia가 보여주었으면 하는 모습은 판타지 세계, 그 자체의 메타포이다."
            </p>

            <div className="max-w-5xl mx-auto">
              {/* Fantasy Map Image */}
              <div 
                className="relative cursor-pointer group rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-12"
                onClick={() => setIsMapExpanded(!isMapExpanded)}
              >
                <img 
                  src="https://i.postimg.cc/s2bLsyjw/image.png" 
                  alt="판타지 지도" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  {!isMapExpanded && (
                    <div className="bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full text-white flex items-center gap-2 animate-pulse">
                      <span>Click to reveal concept diagrams</span>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>

              {/* Expandable Parti Diagrams */}
              <motion.div 
                initial={false}
                animate={{ height: isMapExpanded ? 'auto' : 0, opacity: isMapExpanded ? 1 : 0 }}
                className="overflow-hidden w-full"
              >
                <div className="flex flex-col gap-16 mb-12 pt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                      <img src="https://i.postimg.cc/0yqMH565/image.png" alt="World in Office" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="text-left md:pl-8">
                      <h3 className="font-display text-3xl text-white mb-4">World in Office</h3>
                      <p className="text-zinc-400 leading-relaxed">
                        오피스 내에 SQUARE ENIX의 IP를 등장인물로써 몰입할 수 있으며, 외부와 분리된 세계로 인식될 수 있는 공간을 형성한다.
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                      <img src="https://i.postimg.cc/3RwDCLkZ/image.png" alt="Panorama of Spaces" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="text-left md:pl-8">
                      <h3 className="font-display text-3xl text-white mb-4">Panorama of Spaces</h3>
                      <p className="text-zinc-400 leading-relaxed">
                        공간들을 서로 연결하고 중심 공간을 파노라마처럼 감싸 다채로운 요소가 서로 관계를 맺으며 동시에 인식되는 효과를 연출한다.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                      <img src="https://i.postimg.cc/FsFFF4pV/image.png" alt="Narrative Sequence" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="text-left md:pl-8">
                      <h3 className="font-display text-3xl text-white mb-4">Narrative Sequence</h3>
                      <p className="text-zinc-400 leading-relaxed">
                        스토리의 서사 구조처럼 오피스 속 세계에 점진적으로 몰입할 수 있도록 시퀀스를 구성한다. 진입부에는 많은 사람들이 쉽게 접근할 수 있는 가벼운 공간을, 안쪽으로 진입할수록 IP에 깊게 몰입할 수 있는 공간을 설계할 예정이다.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Text Content */}
              <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 md:p-12 text-left">
                <h4 className="text-2xl text-white mb-4 font-display">'무언가를 세계로 인식하기 위한 조건'</h4>
                <p className="text-zinc-400 leading-relaxed text-lg">
                  세계를 인식하기 위해서는 서로 다른 위치와, 특징, 성격을 가진 다채로운 지역, 사물, 사람이 서로 관계를 맺으며 우리를 둘러싸 동시적으로 느끼고 경험할 수 있어야 한다.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Building2, title: "프로그램 = 지역", desc: "영역 및 매스로 삼아 각 공간의 고유성과 독립성 부여" },
              { icon: Map, title: "공백 = 세계의 넓이", desc: "비어 있는 공백을 파노라마처럼 넓은 스케일로 둘러쌈" },
              { icon: Users, title: "사람 = 등장인물", desc: "연결된 건물 전체를 자신이 속한 세계로써 인식" }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.2}>
                <div className="p-8 rounded-2xl bg-zinc-950 border border-white/5 h-full hover:border-red-500/30 transition-colors">
                  <item.icon className="w-10 h-10 text-red-500 mb-6" />
                  <h4 className="text-xl text-white mb-4 font-medium">{item.title}</h4>
                  <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <iframe 
                  src="https://player.vimeo.com/video/1171270381?autoplay=1&loop=1&muted=1&background=1" 
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl text-white mb-6 leading-tight">
                  공간 경험으로써의 판타지<br />
                  <span className="text-2xl text-zinc-300 mt-2 inline-block">: 현대적 디자인과 비일상적 연출</span>
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  추구하는 것은 판타지 속 디자인 형태를 차용하거나 분위기를 그대로 표현하는 것이 아니다. 현대 건축에서 쓰이고 있거나 필요로 하는 기능, 프로그램, 디자인 등을 비일상적으로 표현하고 조합하여 시각만이 아닌 공감각적으로 창작자와 소비자가 원하는 환상을 경험할 수 있는 세계를 구축한다.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl text-white mb-6">Arcadia 세계의 등장인물</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-16">
              창작자와 소비자는 IP에 속해 있는 존재들이며<br/>Arcadia는 그들이 등장인물로서 몰입할 수 있는 공간적 메타포이다.
            </p>
            
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-20">
              <img 
                src="https://i.postimg.cc/yYTCjqL2/image.png" 
                alt="Arcadia 세계의 등장인물" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 p-10 h-full">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <PenTool className="w-32 h-32 text-white" />
                </div>
                <div className="relative z-10">
                  <h3 className="font-display text-3xl text-white mb-6 flex items-center gap-4">
                    <span className="text-red-500">01.</span> 창작자
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-lg">
                    경영하는 세계와 경험하는 세계의 조화를 통한 연속적인 몰입과 영감. 창작한 IP를 소비자들이 다양한 방식으로 즐기는 것을 보고, 가까운 거리에서 소통하며 의욕 고취 및 빠른 피드백.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 p-10 h-full">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <BookOpen className="w-32 h-32 text-white" />
                </div>
                <div className="relative z-10">
                  <h3 className="font-display text-3xl text-white mb-6 flex items-center gap-4">
                    <span className="text-red-500">02.</span> 소비자
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-lg">
                    현실에서 분리되어 판타지 세계에 완전히 몰입할 수 있는 환상 향유의 공간. SQUARE ENIX의 IP를 게임, 그림, 영상, 코스플레이, 공연, 음악, 굿즈, 그리고 공간 경험 등의 방식으로 즐길 수 있는 복합 문화 공간.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 p-10 h-full">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <DoorOpen className="w-32 h-32 text-white" />
                </div>
                <div className="relative z-10">
                  <h3 className="font-display text-3xl text-white mb-6 flex items-center gap-4">
                    <span className="text-red-500">03.</span> 유입 인원
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-lg">
                    게임에 관심이 없으나 그 외 다양한 관심사를 가진 여러 사람들도 끌어들일 수 있도록 다양한 문화 콘텐츠와 시설을 갖춘 도시 광장. 이들을 끌어들임으로써 신규 유저 유입 가능성 강화.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.7}>
              <div className="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 p-10 h-full">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Handshake className="w-32 h-32 text-white" />
                </div>
                <div className="relative z-10">
                  <h3 className="font-display text-3xl text-white mb-6 flex items-center gap-4">
                    <span className="text-red-500">04.</span> 협력자
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-lg">
                    게임은 타 기업 간의 콜라보가 활발하고, 특히 스퀘어 에닉스의 경우에는 대형 퍼블리셔로서 본사의 게임만이 아니라 타사의 게임 유통도 활발하게 진행. 이런 타 기업과의 콜라보 행사나 게임 홍보, 합동 작업 등이 활발하게 이루어질 수 있는 공간의 규모와 유연성을 충분히 갖추어 게임 산업의 중심지로 발전.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-32 px-6 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')] opacity-5 bg-cover bg-center mix-blend-screen" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn className="mb-20">
            <h2 className="font-display text-5xl md:text-6xl text-white mb-6">Program Setting</h2>
            <div className="w-24 h-1 bg-red-500" />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Work Facilities */}
            <FadeIn delay={0.1} className="flex flex-col gap-6">
              <h3 className="text-2xl text-white font-medium border-b border-white/10 pb-4">주요 업무 시설</h3>
              
              <div 
                className="bg-zinc-900/50 p-6 rounded-xl border border-white/5 cursor-pointer hover:border-white/20 transition-colors"
                onClick={() => setIsCreativeStudioExpanded(!isCreativeStudioExpanded)}
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-white font-medium flex items-center gap-2"><MonitorPlay className="w-4 h-4 text-red-500"/> Creative Studio</h4>
                  <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${isCreativeStudioExpanded ? 'rotate-180' : ''}`} />
                </div>
                <p className="text-sm text-zinc-500">기획, 프로그래밍, 3D/2D 아트 디자인</p>
                
                <motion.div
                  initial={false}
                  animate={{ height: isCreativeStudioExpanded ? 'auto' : 0, opacity: isCreativeStudioExpanded ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col gap-4 pt-4 mt-4 border-t border-white/10">
                    <div>
                      <h5 className="text-white text-sm font-medium mb-1">초대형 스튜디오 (Creative Studio 1, 3)</h5>
                      <p className="text-xs text-zinc-400 leading-relaxed">하이엔드 대규모 게임을 개발하는 핵심 스튜디오. Creative Studio 중 60% 면적과 400명 규모의 인원.</p>
                    </div>
                    <div>
                      <h5 className="text-white text-sm font-medium mb-1">중대형 스튜디오 (Creative Studio 2, 4)</h5>
                      <p className="text-xs text-zinc-400 leading-relaxed">외부 개발사와의 코워크 비중 높음. Creative Studio 중 25% 면적과 200명 규모의 인원.</p>
                    </div>
                    <div>
                      <h5 className="text-white text-sm font-medium mb-1">중소형 집중 스튜디오 (Creative Studio 5)</h5>
                      <p className="text-xs text-zinc-400 leading-relaxed">레트로 감성의 HD-2D 게임 개발. Creative Studio 중 15% 면적과 50-100명 규모의 인원.</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
                <h4 className="text-white font-medium mb-2">Image Studio Division</h4>
                <p className="text-sm text-zinc-500">모션 캡처, 시네마틱 제작, 게임 비주얼 지원</p>
              </div>

              <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
                <h4 className="text-white font-medium mb-2">Audio Studio</h4>
                <p className="text-sm text-zinc-500">음악, 효과음</p>
              </div>

              <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
                <h4 className="text-white font-medium mb-2">Sales & Distribution / Customer Experience</h4>
                <p className="text-sm text-zinc-500">마케팅, 퍼블리싱, 온라인 서비스</p>
              </div>

              <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
                <h4 className="text-white font-medium mb-2">Core Service & IT/QA</h4>
                <p className="text-sm text-zinc-500">기술 연구/개발/관리, 게임 검수</p>
              </div>

              <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
                <h4 className="text-white font-medium mb-2">IP Business</h4>
                <p className="text-sm text-zinc-500">IP 기반의 문화 콘텐츠 및 상품 제작</p>
              </div>
            </FadeIn>

            {/* Consumer Facilities */}
            <FadeIn delay={0.3} className="flex flex-col gap-6">
              <h3 className="text-2xl text-white font-medium border-b border-white/10 pb-4">소비 시설</h3>
              
              <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
                <h4 className="text-white font-medium mb-2 flex items-center gap-2"><ShoppingBag className="w-4 h-4 text-red-500"/> Showroom</h4>
                <p className="text-sm text-zinc-500">IP 관련 아트와 음악 그리고 출판물 등 전시, 게임 시연</p>
              </div>
              
              <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
                <h4 className="text-white font-medium mb-2">Small Stage & Media Panel</h4>
                <p className="text-sm text-zinc-500">음악 공연, 코스플레이, 쇼케이스, 시네마틱</p>
              </div>

              <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
                <h4 className="text-white font-medium mb-2">Lounge</h4>
                <p className="text-sm text-zinc-500">소비자의 휴게 공간</p>
              </div>

              <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
                <h4 className="text-white font-medium mb-2">Goods Shop</h4>
                <p className="text-sm text-zinc-500">IP 관련 굿즈 구매 및 전시</p>
              </div>
            </FadeIn>

            {/* Other Facilities */}
            <FadeIn delay={0.5} className="flex flex-col gap-6">
              <h3 className="text-2xl text-white font-medium border-b border-white/10 pb-4">기타</h3>
              
              <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
                <h4 className="text-white font-medium mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4 text-red-500"/> Reference Library</h4>
                <p className="text-sm text-zinc-500">과거의 원화나 설정집 보관, 참고자료 보관</p>
              </div>
              
              <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
                <h4 className="text-white font-medium mb-2 flex items-center gap-2"><Users className="w-4 h-4 text-red-500"/> Meeting Room</h4>
                <p className="text-sm text-zinc-500">회의</p>
              </div>

              <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
                <h4 className="text-white font-medium mb-2 flex items-center gap-2"><Handshake className="w-4 h-4 text-red-500"/> Co-working Space</h4>
                <p className="text-sm text-zinc-500">타사와의 협력 작업/미팅</p>
              </div>

              <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
                <h4 className="text-white font-medium mb-2 flex items-center gap-2"><Coffee className="w-4 h-4 text-red-500"/> Wellness Zone</h4>
                <p className="text-sm text-zinc-500">직원의 휴게 및 취미</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Reference Section */}
      <section className="py-32 px-6 bg-zinc-900/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-20">
            <h2 className="font-display text-5xl md:text-6xl text-white mb-6">Reference</h2>
            <p className="text-xl text-zinc-400">건축적 영감을 준 사례들</p>
          </FadeIn>

          <div className="space-y-32">
            {/* Ford Foundation */}
            <FadeIn>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl text-white mb-6 font-display">Ford Foundation HQ</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    전면의 탁 트인 외부 경관부터 시작해서, 테라리움, 사무 공간들이 비대한 스케일의 공간을 3차원적으로 감싸듯 설계되어 있다. 메인 공간에서 건물 전체를 동시에 인식하고 경험할 수 있다. 그리고 테라리움 공간까지 대중에게 개방되어 도시 속 공원의 역할을 수행하면서 동시에 사무 공간은 테라리움과 시각적으로는 연결되지만 공간적으로는 완전히 분리되어 소리, 접근은 차단함으로써 집중할 수 있는 환경을 갖추고, 압도적인 스케일을 통해 거리감을 형성하여 업무 보안을 해결했다.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img src="https://i.postimg.cc/7LFS9jcv/image.png" alt="Ford Foundation HQ Architecture" className="rounded-xl opacity-70 hover:opacity-100 transition-opacity object-cover aspect-square" referrerPolicy="no-referrer" />
                  <img src="https://i.postimg.cc/XqVGDWkd/image.png" alt="Ford Foundation HQ Interior" className="rounded-xl opacity-70 hover:opacity-100 transition-opacity mt-8 object-cover aspect-square" referrerPolicy="no-referrer" />
                </div>
              </div>
            </FadeIn>

            {/* Qatar Media HQ */}
            <FadeIn>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                  <img src="https://i.postimg.cc/kgYfcwKR/image.png" alt="Qatar Media HQ Architecture" className="rounded-xl opacity-70 hover:opacity-100 transition-opacity object-cover aspect-square" referrerPolicy="no-referrer" />
                  <div className="grid grid-rows-2 gap-4">
                    <img src="https://i.postimg.cc/8CrBbG1k/image.png" alt="Qatar Media HQ Interior" className="rounded-xl opacity-70 hover:opacity-100 transition-opacity object-cover w-full h-full" referrerPolicy="no-referrer" />
                    <img src="https://i.postimg.cc/yx7mBS08/image.png" alt="Qatar Media HQ Detail" className="rounded-xl opacity-70 hover:opacity-100 transition-opacity object-cover w-full h-full" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-3xl text-white mb-6 font-display">Qatar Media HQ</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    동선 역할을 하는 외부의 형성된 거대한 스케일의 공간을 케노피를 통해 영역화하여 마을, 혹은 시장과 같은 분위기를 연출했다. 공간 자체는 실외이나 마치 오피스 내의 공간을 공공 공간으로 내놓은 것과 같은 효과를 내며, 분절된 매스들이 다층적인 외부 데크 공간을 만들고, 캐노피 안쪽을 향한 커튼월 유리는 시각적 연결을 제공하여 대중과 직원 간의 소통은 유지하면서 보안을 확보했다. 이때 각 매스에 서로 다른 미디어 영상을 제공하는 패널을 부착하여 시각적 이야기를 제공함으로써 각 매스의 고유성을 강조했다. 이러한 미디어 패널은 내부로의 시선은 차단하면서도 지루하거나 답답하게 느껴지지 않도록 한다.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* La Fabrica */}
            <FadeIn>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl text-white mb-6 font-display">La Fabrica</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    내가 원하는 공간적 성격, 건축적 디자인을 모두 담은 사례이다. 시멘트 공장을 개조하여 만든 Ricardo Bofill의 건축 스튜디오 겸 주거 공간으로 대성당을 추구한 공간감, 폐공장 특유의 투박한 분위기가 건물의 용도와 모순을 형성한다. 외관에서는 도심 속에서 자연적 요소가 인공적 요소를 장악하고 있는 모습을 보이는데, 이와 같은 디자인 개념들은 건축물에 비일상성과 초현실감을 부여한다.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img src="https://i.postimg.cc/mrrTFH5n/image.png" alt="La Fabrica Exterior" className="rounded-xl opacity-70 hover:opacity-100 transition-opacity object-cover aspect-square" referrerPolicy="no-referrer" />
                  <div className="grid grid-rows-2 gap-4">
                    <img src="https://i.postimg.cc/7hS4yM56/image.png" alt="La Fabrica Interior 1" className="rounded-xl opacity-70 hover:opacity-100 transition-opacity object-cover w-full h-full" referrerPolicy="no-referrer" />
                    <img src="https://i.postimg.cc/L5FdvYxX/image.png" alt="La Fabrica Interior 2" className="rounded-xl opacity-70 hover:opacity-100 transition-opacity object-cover w-full h-full" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <div className="font-display text-2xl text-white mb-4">ARCADIA</div>
        <p className="text-zinc-600 text-sm">SQUARE ENIX Office Architecture Project Synopsis</p>
      </footer>
    </div>
  );
}
