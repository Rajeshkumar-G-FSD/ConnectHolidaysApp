/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Users, 
  CheckCircle2, 
  Volume2, 
  VolumeX, 
  MessageSquare, 
  Send, 
  X, 
  Globe, 
  Award, 
  Compass, 
  Umbrella, 
  Clock, 
  Sparkles,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Slide {
  id: number;
  subtitle: string;
  title: string;
  videoUrl: string;
  fallbackImage: string;
  description: string;
}

interface Package {
  id: number;
  title: string;
  location: string;
  price: string;
  duration: string;
  rating: number;
  image: string;
  tag: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    subtitle: "Your Dream Vacation, Crafted to Perfection",
    title: "Discover the world's wonders",
    videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fc2d2c35f9501ebb0497599e05c0&profile_id=139&oauth2_token_id=57447761",
    fallbackImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    description: "Embark on an unforgettable tropical escape where sun-kissed beaches meet crystal clear turquoise waters."
  },
  {
    id: 2,
    subtitle: "Experience the Ultimate Alpine Escape",
    title: "Conquer the snow-capped peaks",
    videoUrl: "https://player.vimeo.com/external/434045526.sd.mp4?s=c1b0aa46ae9958f00cf06c3f15cb68d181057796&profile_id=139&oauth2_token_id=57447761",
    fallbackImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
    description: "Indulge in cozy fireside luxury and breathtaking mountain slopes designed for the ultimate winter enthusiast."
  },
  {
    id: 3,
    subtitle: "Journey Through the Sands of Time",
    title: "Unearth ancient mysteries",
    videoUrl: "https://player.vimeo.com/external/459389137.sd.mp4?s=89e70198e3b4d61845184a441e97bbfa88c538cb&profile_id=139&oauth2_token_id=57447761",
    fallbackImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1920&q=80",
    description: "Wander through historic cliffside villages and step back into centuries of cultural heritage and coastal elegance."
  }
];

const PACKAGES: Package[] = [
  {
    id: 1,
    title: "Overwater Maldives Sanctuary",
    location: "Maldives, Indian Ocean",
    price: "$2,499",
    duration: "7 Days / 6 Nights",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=80",
    tag: "Romantic Getaway"
  },
  {
    id: 2,
    title: "Swiss Alps Luxury Ski Tour",
    location: "St. Moritz, Switzerland",
    price: "$3,150",
    duration: "6 Days / 5 Nights",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1482867996988-2faec3cbb4f9?auto=format&fit=crop&w=800&q=80",
    tag: "Adventure Peak"
  },
  {
    id: 3,
    title: "Amalfi Coastline Serenity",
    location: "Positano, Italy",
    price: "$1,890",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    tag: "Cultural Luxury"
  }
];

interface CarouselCountry {
  id: number;
  name: string;
  listings: string;
  image: string;
}

const CAROUSEL_COUNTRIES: CarouselCountry[] = [
  {
    id: 1,
    name: "Malaysia",
    listings: "4 Listing",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Dubai",
    listings: "3 Listing",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Hong Kong",
    listings: "5 Listing",
    image: "https://images.unsplash.com/photo-1506970113724-bc41e013be7b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Singapore",
    listings: "6 Listing",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Thailand",
    listings: "7 Listing",
    image: "https://images.unsplash.com/photo-1528181304800-2f1258bb9f35?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Japan",
    listings: "8 Listing",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "Italy",
    listings: "6 Listing",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    name: "Switzerland",
    listings: "5 Listing",
    image: "https://images.unsplash.com/photo-1482867996988-2faec3cbb4f9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    name: "Greece",
    listings: "4 Listing",
    image: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    name: "Maldives",
    listings: "9 Listing",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80"
  }
];

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(true);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  
  // Custom interactive state for WhatsApp mini-chat
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string; time: string }>>([
    { sender: 'bot', text: "Hello! Welcome to The Fun Tours 🌍. I am your virtual travel concierge. How can I help you plan your dream holiday today?", time: "Just now" }
  ]);
  const [chatInput, setChatInput] = useState('');

  // Booking wizard states
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    destination: '',
    date: '',
    guests: '2 Guests',
    name: '',
    email: '',
    phone: ''
  });
  const [bookingSuccessId, setBookingSuccessId] = useState('');

  // 3D Carousel state & controls
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide for 3D Carousel every 2 seconds
  useEffect(() => {
    if (isCarouselHovered) return;
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % CAROUSEL_COUNTRIES.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isCarouselHovered]);

  const videoRef = useRef<HTMLVideoElement>(null);
  const activeSlide = SLIDES[currentSlideIndex];

  // Auto-slide transition interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % SLIDES.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  // Update video mute state when state change occurs
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isAudioMuted;
    }
  }, [isAudioMuted, currentSlideIndex]);

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAudioMuted(!isAudioMuted);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    setChatMessages(prev => [...prev, { sender: 'user', text: userMsg, time: now }]);
    setChatInput('');

    setTimeout(() => {
      let botText = "That sounds like a magical getaway! Use our 'Book Now' tool at the top to secure a priority callback with an expert holiday designer!";
      if (userMsg.toLowerCase().includes('beach') || userMsg.toLowerCase().includes('maldives')) {
        botText = "🌊 Our Maldives overwater villas are currently offering a 15% booking discount. Shall we pre-reserve your luxury villa?";
      } else if (userMsg.toLowerCase().includes('ski') || userMsg.toLowerCase().includes('swiss')) {
        botText = "🏔️ The Swiss Alps are breathtaking. St. Moritz bookings include 5-star ski pass upgrades this week!";
      } else if (userMsg.toLowerCase().includes('italy') || userMsg.toLowerCase().includes('amalfi')) {
        botText = "🍋 Italy's Amalfi Coast is pure poetry. Private yacht tours and Positano cliff stays are part of our premium curated packages!";
      }
      setChatMessages(prev => [...prev, { sender: 'bot', text: botText, time: now }]);
    }, 1000);
  };

  const handleQuickBook = (packageName: string) => {
    setBookingData(prev => ({ ...prev, destination: packageName }));
    setBookingStep(1);
    setActiveModal('booking');
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookingStep < 3) {
      setBookingStep(prev => prev + 1);
    } else {
      const generatedId = `FT-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingSuccessId(generatedId);
      setBookingStep(4);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col font-sans select-none bg-white overflow-x-hidden">
      
      {/* 1. Header Navigation Bar (Faithful to Screenshot) */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 lg:px-16 py-4 flex items-center justify-between transition-all duration-300 shadow-sm">
        
        {/* Custom Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group" id="brand-logo">
          <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-tr from-blue-600 to-sky-400 rounded-xl shadow-md transform group-hover:scale-105 transition-all duration-300">
            <Compass className="w-6 h-6 text-white stroke-[2]" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline">
              <span className="text-xl font-extrabold tracking-tight text-slate-800">The</span>
              <span className="text-xl font-extrabold tracking-tight text-blue-600 ml-1">Fun</span>
              <span className="text-xl font-extrabold tracking-tight text-slate-800 ml-1">Tours</span>
            </div>
            <span className="text-[8px] font-bold tracking-widest text-slate-400 uppercase leading-none mt-0.5">
              Discover the World, Your Way
            </span>
          </div>
        </a>

        {/* Navigation Menu Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600" id="nav-links">
          <button 
            onClick={() => { setCurrentSlideIndex(0); }}
            className={`cursor-pointer hover:text-blue-600 transition-colors py-1 relative ${currentSlideIndex === 0 ? 'text-blue-600 font-bold' : ''}`}
          >
            Home
            {currentSlideIndex === 0 && (
              <motion.div layoutId="underline" className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-600 rounded-full" />
            )}
          </button>
          
          <button 
            onClick={() => setActiveModal('about')}
            className="cursor-pointer hover:text-blue-600 transition-colors py-1"
          >
            About
          </button>

          <button 
            onClick={() => setActiveModal('services')}
            className="cursor-pointer hover:text-blue-600 transition-colors py-1"
          >
            Services
          </button>

          <button 
            onClick={() => setActiveModal('destination')}
            className="cursor-pointer hover:text-blue-600 transition-colors py-1"
          >
            Destination
          </button>

          <button 
            onClick={() => setActiveModal('packages')}
            className="cursor-pointer hover:text-blue-600 transition-colors py-1"
          >
            Packages
          </button>

          <button 
            onClick={() => setActiveModal('contact')}
            className="cursor-pointer hover:text-blue-600 transition-colors py-1"
          >
            Contact
          </button>
        </nav>

        {/* CTA Button: "Book Now" */}
        <div className="flex items-center gap-4">
          <button 
            id="btn-header-book"
            onClick={() => { setBookingStep(1); setBookingSuccessId(''); setActiveModal('booking'); }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <span>Book Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* 2. Main Hero Section (Big Screen Focus with background video) */}
      <main className="relative flex-1 w-full flex items-center overflow-hidden min-h-[calc(100vh-73px)] lg:h-[800px]" id="hero-container">
        
        {/* Background Video Wrapper */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-slate-950">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeSlide.id}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.0 }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Overlay with subtle blur and dark vignette */}
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/65 via-black/40 to-black/20" />
              <div className="absolute inset-0 z-10 bg-black/20 backdrop-brightness-95" />

              {/* Fallback image (visible until video triggers play) */}
              <img 
                src={activeSlide.fallbackImage} 
                alt="Scenic holiday backdrop" 
                className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${isVideoPlaying ? 'opacity-0' : 'opacity-100'}`}
              />

              {/* Looping background video */}
              <video
                ref={videoRef}
                key={activeSlide.videoUrl}
                autoPlay
                loop
                muted={isAudioMuted}
                playsInline
                onPlay={() => setIsVideoPlaying(true)}
                className="absolute inset-0 w-full h-full object-cover z-0"
              >
                <source src={activeSlide.videoUrl} type="video/mp4" />
              </video>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Ambient Sound Accent controller */}
        <div className="absolute top-6 right-8 lg:right-16 z-20">
          <button 
            onClick={handleMuteToggle}
            className="flex items-center gap-2 px-3.5 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-xs font-semibold backdrop-blur-md transition-all duration-300 cursor-pointer"
          >
            {isAudioMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-slate-300" />
                <span>Muted</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span className="text-emerald-300 font-bold">Nature Sound On</span>
              </>
            )}
          </button>
        </div>

        {/* Content Container (Faithful to Screenshot Typography / Positioning) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 py-16 md:py-24 flex flex-col justify-center h-full">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeSlide.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl"
            >
              {/* Elegant script text subtitle */}
              <motion.span 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="block font-script text-white text-3xl md:text-5xl drop-shadow-md tracking-wide leading-relaxed"
              >
                {activeSlide.subtitle}
              </motion.span>

              {/* Bold sans-serif Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white drop-shadow-xl mt-3 mb-6 font-sans leading-[1.05]"
              >
                {activeSlide.title}
              </motion.h1>

              {/* Description Paragraph */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="text-slate-200 text-base md:text-lg max-w-xl mb-10 drop-shadow-sm font-medium leading-relaxed"
              >
                {activeSlide.description}
              </motion.p>

              {/* Action Buttons: "Explore Tours" & "Our Services" */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap items-center gap-4"
              >
                <button 
                  id="btn-hero-explore"
                  onClick={() => setActiveModal('packages')}
                  className="bg-[#1a82e2] hover:bg-[#156cb8] text-white px-8 py-4 rounded-full font-bold text-base flex items-center gap-3 shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
                >
                  <span>Explore Tours</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>

                <button 
                  id="btn-hero-services"
                  onClick={() => setActiveModal('services')}
                  className="bg-transparent hover:bg-white/10 text-white border border-white/60 hover:border-white px-8 py-4 rounded-full font-semibold text-base flex items-center gap-3 backdrop-blur-sm transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
                >
                  <span>Our Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3. Right Side Vertical Slider Indicators */}
        <div className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-6" id="slide-indicators">
          <span className="text-[10px] font-bold text-white/50 tracking-widest uppercase rotate-90 mb-4 select-none">
            Slide
          </span>
          <div className="flex flex-col gap-5">
            {SLIDES.map((slide, idx) => {
              const isActive = idx === currentSlideIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className="relative group p-1 flex items-center justify-center cursor-pointer"
                  title={`Go to Slide ${slide.id}`}
                >
                  <div className={`absolute w-8 h-8 rounded-full border border-white/20 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ${isActive ? 'opacity-40 scale-100' : ''}`} />
                  <div className="flex items-center gap-2">
                    <span className={`text-[9px] font-extrabold font-mono transition-all duration-300 ${isActive ? 'text-blue-400 scale-110' : 'text-white/40 opacity-0 group-hover:opacity-100'}`}>
                      0{slide.id}
                    </span>
                    <div className={`w-1 h-8 rounded-full transition-all duration-500 origin-center ${isActive ? 'bg-[#1a82e2] scale-y-125 shadow-[0_0_8px_rgba(26,130,226,0.6)]' : 'bg-white/40 group-hover:bg-white/70'}`} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom decorative stats strip inside Hero */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent pt-12 pb-6 px-6 lg:px-16 hidden md:flex items-center justify-between">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-white/80 text-xs">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>120+ Countries Travelled</span>
              </div>
              <div className="w-1 h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>4.9 / 5 Average Star Score</span>
              </div>
            </div>
            <div className="font-mono text-white/60">
              Active Experience • 2026 Season
            </div>
          </div>
        </div>
      </main>

      {/* 3D Popular Destination Carousel Section */}
      <section 
        className="py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden relative w-full flex flex-col items-center justify-center border-b border-slate-100"
        id="popular-destinations"
      >
        <div className="text-center mb-10 px-6">
          <span className="block font-script text-sky-500 text-3xl md:text-5xl drop-shadow-sm tracking-wide leading-relaxed">
            Your Dream Vacation
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-red-600 mt-2 mb-4 font-sans uppercase">
            Popular Destination
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mt-4" />
        </div>

        {/* 3D Carousel Container */}
        <div 
          className="relative w-full flex items-center justify-center h-[520px] md:h-[620px] overflow-hidden select-none"
          onMouseEnter={() => setIsCarouselHovered(true)}
          onMouseLeave={() => setIsCarouselHovered(false)}
        >
          {/* Manual controls */}
          <button 
            onClick={() => setCarouselIndex((prev) => (prev - 1 + CAROUSEL_COUNTRIES.length) % CAROUSEL_COUNTRIES.length)}
            className="absolute left-4 md:left-8 lg:left-12 z-40 bg-white hover:bg-slate-50 text-slate-800 p-3.5 rounded-full shadow-lg border border-slate-100 hover:scale-110 active:scale-95 transition-all duration-300"
            title="Previous Destination"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          <button 
            onClick={() => setCarouselIndex((prev) => (prev + 1) % CAROUSEL_COUNTRIES.length)}
            className="absolute right-4 md:right-8 lg:right-12 z-40 bg-white hover:bg-slate-50 text-slate-800 p-3.5 rounded-full shadow-lg border border-slate-100 hover:scale-110 active:scale-95 transition-all duration-300"
            title="Next Destination"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Cards Track */}
          <div className="relative w-full max-w-7xl h-full flex items-center justify-center">
            {CAROUSEL_COUNTRIES.map((country, idx) => {
              let offset = idx - carouselIndex;
              const N = CAROUSEL_COUNTRIES.length;
              if (offset < -N / 2) offset += N;
              if (offset > N / 2) offset -= N;

              const isCenter = offset === 0;
              const isNearLeft = offset === -1;
              const isNearRight = offset === 1;
              const isFarLeft = offset === -2;
              const isFarRight = offset === 2;
              const isVisible = Math.abs(offset) <= 2;

              if (!isVisible) return null;

              // Spacing shift values
              const isMobile = windowWidth < 640;
              const isTablet = windowWidth >= 640 && windowWidth < 1024;

              let shift = 280;
              if (isMobile) {
                shift = 110;
              } else if (isTablet) {
                shift = 190;
              }

              let farShift = 500;
              if (isMobile) {
                farShift = 190;
              } else if (isTablet) {
                farShift = 330;
              }

              let xPosition = 0;
              let scale = 0.55;
              let zIndex = 0;
              let opacity = 0;
              let blurValue = "blur(8px)";

              if (isCenter) {
                xPosition = 0;
                scale = 1.05;
                zIndex = 30;
                opacity = 1;
                blurValue = "blur(0px)";
              } else if (isNearLeft) {
                xPosition = -shift;
                scale = isMobile ? 0.8 : 0.85;
                zIndex = 20;
                opacity = isMobile ? 0.35 : 0.7;
                blurValue = isMobile ? "blur(3px)" : "blur(2px)";
              } else if (isNearRight) {
                xPosition = shift;
                scale = isMobile ? 0.8 : 0.85;
                zIndex = 20;
                opacity = isMobile ? 0.35 : 0.7;
                blurValue = isMobile ? "blur(3px)" : "blur(2px)";
              } else if (isFarLeft) {
                if (isMobile) return null; // hide far cards on mobile
                xPosition = -farShift;
                scale = 0.7;
                zIndex = 10;
                opacity = 0.4;
                blurValue = "blur(4px)";
              } else if (isFarRight) {
                if (isMobile) return null; // hide far cards on mobile
                xPosition = farShift;
                scale = 0.7;
                zIndex = 10;
                opacity = 0.4;
                blurValue = "blur(4px)";
              }

              return (
                <motion.div
                  key={country.id}
                  animate={{ 
                    x: xPosition, 
                    scale: scale, 
                    opacity: opacity, 
                    zIndex: zIndex,
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 26 
                  }}
                  onClick={() => {
                    if (!isCenter) {
                      setCarouselIndex(idx);
                    }
                  }}
                  style={{
                    filter: blurValue,
                    transformOrigin: "center center",
                    pointerEvents: "auto",
                  }}
                  className={`absolute w-[250px] h-[370px] sm:w-[280px] sm:h-[420px] md:w-[320px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer select-none`}
                >
                  {/* Card Background Image */}
                  <img 
                    src={country.image} 
                    alt={country.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

                  {/* Card Content Footer */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end text-white text-left pointer-events-auto">
                    <div className="flex items-end justify-between w-full">
                      <div className="flex flex-col">
                        <span className="text-xl md:text-3xl font-extrabold tracking-tight leading-tight">{country.name}</span>
                        <span className="text-xs md:text-sm text-slate-300 font-semibold mt-1 leading-none">{country.listings}</span>
                      </div>
                      
                      {isCenter && (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setBookingData(prev => ({ 
                              ...prev, 
                              destination: `${country.name} Featured Package` 
                            }));
                            setBookingStep(1);
                            setBookingSuccessId('');
                            setActiveModal('booking');
                          }}
                          className="border border-white/60 hover:border-white hover:bg-white/10 px-4 py-2 rounded-full text-xs md:text-sm font-extrabold text-white flex items-center gap-1.5 backdrop-blur-sm transition-all duration-300 transform active:scale-95 shrink-0"
                        >
                          <span>View All</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Floating WhatsApp Concierge Widget (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end" id="whatsapp-concierge">
        <AnimatePresence>
          {isWhatsAppOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.9 }}
              className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 border border-slate-100 overflow-hidden mb-4"
            >
              {/* Chat Header */}
              <div className="bg-[#128C7E] text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80" 
                      alt="Travel Agent Concierge" 
                      className="w-10 h-10 rounded-full object-cover border-2 border-white/40"
                    />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm leading-tight">Sarah from The Fun Tours</h4>
                    <p className="text-[11px] text-emerald-100 flex items-center gap-1 mt-0.5">
                      <span className="inline-block w-1.5 h-1.5 bg-emerald-300 rounded-full animate-ping" />
                      Online • Custom Vacation Expert
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsWhatsAppOpen(false)}
                  className="hover:bg-black/10 p-1.5 rounded-full transition-colors text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Chat Body messages */}
              <div className="h-64 p-4 overflow-y-auto bg-slate-50 flex flex-col gap-3">
                {chatMessages.map((msg, index) => (
                  <div 
                    key={index}
                    className={`flex flex-col max-w-[80%] ${msg.sender === 'user' ? 'self-end items-end' : 'self-start items-start'}`}
                  >
                    <div className={`p-3 rounded-2xl text-xs shadow-sm ${msg.sender === 'user' ? 'bg-[#128C7E] text-white rounded-tr-none' : 'bg-white text-slate-800 rounded-tl-none border border-slate-100'}`}>
                      <p>{msg.text}</p>
                    </div>
                    <span className="text-[9px] text-slate-400 mt-1 px-1">{msg.time}</span>
                  </div>
                ))}
              </div>

              {/* Interactive Quick-Suggestions */}
              <div className="px-3 py-2 bg-slate-100 border-t border-slate-200 flex gap-2 overflow-x-auto text-[10px]">
                <button 
                  onClick={() => setChatInput("🌊 Maldives Beach Package inquiry")}
                  className="bg-white hover:bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full text-slate-700 whitespace-nowrap cursor-pointer transition-colors"
                >
                  🏝️ Beach Travel
                </button>
                <button 
                  onClick={() => setChatInput("🏔️ Swiss Alps Ski tour pricing")}
                  className="bg-white hover:bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full text-slate-700 whitespace-nowrap cursor-pointer transition-colors"
                >
                  🏔️ Ski slopes
                </button>
              </div>

              {/* Chat Input Field */}
              <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-100 flex gap-2 items-center bg-white">
                <input 
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type a travel inquiry..."
                  className="flex-1 bg-slate-100 rounded-full px-4 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#128C7E] border-none text-slate-800"
                />
                <button 
                  type="submit"
                  className="bg-[#128C7E] hover:bg-[#0e7065] text-white p-2 rounded-full transition-colors cursor-pointer flex items-center justify-center"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Button Badge */}
        <button 
          onClick={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
          className="relative bg-[#25D366] hover:bg-[#20ba59] text-white p-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer group"
          id="btn-whatsapp"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-75 group-hover:opacity-100" />
          <MessageSquare className="w-7 h-7 relative z-10 fill-white stroke-[1.5]" />
          {!isWhatsAppOpen && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow-md">
              1
            </span>
          )}
        </button>
      </div>

      {/* =========================================
          INTERACTIVE OVERLAY MODALS & DRAWERS
          ========================================= */}
      <AnimatePresence>
        
        {/* A. ABOUT MODAL */}
        {activeModal === 'about' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveModal(null)} className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" />
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative z-10 border border-slate-100">
              <div className="h-44 relative bg-gradient-to-r from-blue-600 to-sky-400">
                <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80" alt="About" className="w-full h-full object-cover opacity-35 mix-blend-overlay" />
                <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white backdrop-blur-sm transition-colors cursor-pointer"><X className="w-5 h-5" /></button>
                <div className="absolute bottom-4 left-6 text-white">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm uppercase tracking-wider">Our Story</span>
                  <h3 className="text-2xl font-extrabold tracking-tight mt-2">The Fun Tours</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-6">
                  For over 15 years, we have designed customized journeys for demanding travelers. Our agency combines local partnerships, premium transport assets, and professional guides to ensure absolute vacation perfection.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-50 rounded-2xl p-4 text-center border border-slate-100">
                    <span className="block text-2xl font-black text-blue-600">15+</span>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Years of Craft</span>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-4 text-center border border-slate-100">
                    <span className="block text-2xl font-black text-blue-600">25K+</span>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Happy Guests</span>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-4 text-center border border-slate-100">
                    <span className="block text-2xl font-black text-blue-600">120+</span>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Unique Lands</span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button onClick={() => setActiveModal(null)} className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer transition-colors">Close</button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* B. SERVICES MODAL */}
        {activeModal === 'services' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveModal(null)} className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" />
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative z-10 border border-slate-100 p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-extrabold tracking-widest text-blue-600 uppercase">Premium Offerings</span>
                  <h3 className="text-2xl font-extrabold text-slate-800 mt-1">Our Services</h3>
                </div>
                <button onClick={() => setActiveModal(null)} className="bg-slate-100 hover:bg-slate-200 p-2 rounded-full text-slate-500 cursor-pointer"><X className="w-5 h-5" /></button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0"><Sparkles className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Tailor-Made Itineraries</h4>
                    <p className="text-slate-500 text-xs mt-1">Completely personalized destination pacing, activities, and schedules.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0"><Award className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Luxury Lodging VIP</h4>
                    <p className="text-slate-500 text-xs mt-1">Direct rates with over 2,000 top boutique hotels, villas, and resorts.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-sky-500 rounded-2xl p-5 text-white flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h5 className="font-bold text-base">Looking for custom trip planning?</h5>
                  <p className="text-white/80 text-xs">Chat directly with Sarah via the WhatsApp concierge at the bottom right.</p>
                </div>
                <button onClick={() => { setActiveModal(null); setIsWhatsAppOpen(true); }} className="bg-white text-blue-600 hover:bg-blue-50 px-5 py-2 rounded-full font-bold text-xs cursor-pointer transition-colors">Chat Now</button>
              </div>
            </motion.div>
          </div>
        )}

        {/* C. DESTINATION MODAL */}
        {activeModal === 'destination' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveModal(null)} className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" />
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl relative z-10 border border-slate-100 p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-extrabold tracking-widest text-blue-600 uppercase">Interactive Explorer</span>
                  <h3 className="text-2xl font-extrabold text-slate-800 mt-1">Top Holiday Destinations</h3>
                </div>
                <button onClick={() => setActiveModal(null)} className="bg-slate-100 hover:bg-slate-200 p-2 rounded-full text-slate-500 cursor-pointer"><X className="w-5 h-5" /></button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="group relative rounded-2xl overflow-hidden aspect-video shadow-md cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" alt="Maldives" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <span className="absolute bottom-3 left-3 text-white font-bold text-sm z-20">The Maldives</span>
                </div>
                <div className="group relative rounded-2xl overflow-hidden aspect-video shadow-md cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=400&q=80" alt="Italy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <span className="absolute bottom-3 left-3 text-white font-bold text-sm z-20">Amalfi Coast, Italy</span>
                </div>
                <div className="group relative rounded-2xl overflow-hidden aspect-video shadow-md cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1482867996988-2faec3cbb4f9?auto=format&fit=crop&w=400&q=80" alt="Switzerland" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <span className="absolute bottom-3 left-3 text-white font-bold text-sm z-20">Swiss Alps</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* D. PACKAGES MODAL */}
        {activeModal === 'packages' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveModal(null)} className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" />
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl relative z-10 border border-slate-100 p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-extrabold tracking-widest text-blue-600 uppercase">Season Highlights</span>
                  <h3 className="text-2xl font-extrabold text-slate-800 mt-1">Our Featured Holiday Packages</h3>
                </div>
                <button onClick={() => setActiveModal(null)} className="bg-slate-100 hover:bg-slate-200 p-2 rounded-full text-slate-500 cursor-pointer"><X className="w-5 h-5" /></button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {PACKAGES.map((pkg) => (
                  <div key={pkg.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm flex flex-col group">
                    <div className="h-36 relative overflow-hidden">
                      <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <span className="absolute top-2.5 left-2.5 bg-blue-600 text-white text-[9px] font-extrabold px-2.5 py-0.5 rounded-full">{pkg.tag}</span>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold"><MapPin className="w-3 h-3 text-blue-500" /><span>{pkg.location}</span></div>
                        <h4 className="font-bold text-slate-800 text-sm mt-1">{pkg.title}</h4>
                        <div className="flex items-center gap-1.5 mt-1.5 text-[11px] text-slate-500">
                          <Star className="w-3 h-3 text-amber-500 fill-current" />
                          <span className="font-extrabold text-slate-700">{pkg.rating}</span>
                          <span>• {pkg.duration}</span>
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <span className="text-[9px] text-slate-400 block uppercase font-bold">Per person</span>
                          <span className="text-base font-black text-slate-800">{pkg.price}</span>
                        </div>
                        <button onClick={() => { setActiveModal(null); handleQuickBook(pkg.title); }} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer">Book</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {/* E. CONTACT MODAL */}
        {activeModal === 'contact' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveModal(null)} className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" />
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative z-10 border border-slate-100 p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-extrabold text-slate-800">Reach Us</h3>
                <button onClick={() => setActiveModal(null)} className="bg-slate-100 hover:bg-slate-200 p-2 rounded-full text-slate-500 cursor-pointer"><X className="w-5 h-5" /></button>
              </div>
              <form onSubmit={(e) => { e.preventDefault(); alert("Sent!"); setActiveModal(null); }} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-1">Full Name</label>
                  <input type="text" required placeholder="Jane Doe" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-850 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-1">Email</label>
                  <input type="email" required placeholder="jane@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-850 focus:outline-none" />
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-xs cursor-pointer">Submit Message</button>
              </form>
            </motion.div>
          </div>
        )}

        {/* F. WIZARD: BOOK NOW */}
        {activeModal === 'booking' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveModal(null)} className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" />
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative z-10 border border-slate-100">
              <div className="bg-slate-50 p-6 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-extrabold text-slate-800">Plan & Secure Holiday</h3>
                  <p className="text-[10px] text-slate-400 mt-0.5">Quick 3-step vacation reserve planner</p>
                </div>
                <button onClick={() => setActiveModal(null)} className="bg-slate-200 hover:bg-slate-300 p-1.5 rounded-full text-slate-500 cursor-pointer"><X className="w-4 h-4" /></button>
              </div>

              {bookingStep <= 3 && (
                <div className="px-6 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold ${bookingStep >= 1 ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>1</div>
                    <span className="text-[11px] font-bold text-slate-700">Destination</span>
                  </div>
                  <div className="flex-1 h-0.5 bg-slate-100 mx-2" />
                  <div className="flex items-center gap-2">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold ${bookingStep >= 2 ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>2</div>
                    <span className="text-[11px] font-bold text-slate-600">Guests</span>
                  </div>
                  <div className="flex-1 h-0.5 bg-slate-100 mx-2" />
                  <div className="flex items-center gap-2">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold ${bookingStep >= 3 ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>3</div>
                    <span className="text-[11px] font-bold text-slate-600">Secure</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleBookingSubmit} className="p-6">
                {bookingStep === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1.5">Destination</label>
                      <select 
                        value={bookingData.destination}
                        onChange={(e) => setBookingData({ ...bookingData, destination: e.target.value })}
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none font-semibold"
                      >
                        <option value="">-- Choose target sanctuary --</option>
                        <option value="Overwater Maldives Sanctuary">Maldives, Indian Ocean ($2,499)</option>
                        <option value="Swiss Alps Luxury Ski Tour">St. Moritz, Switzerland ($3,150)</option>
                        <option value="Amalfi Coastline Serenity">Positano, Italy ($1,890)</option>
                        <option value="Custom Bespoke Itinerary">Other Location</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1.5">Departure Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input 
                          type="date"
                          required
                          value={bookingData.date}
                          onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-xs text-slate-800 focus:outline-none font-semibold"
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button 
                        type="button"
                        disabled={!bookingData.destination || !bookingData.date}
                        onClick={() => setBookingStep(2)}
                        className="bg-blue-600 disabled:opacity-50 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-xs font-bold flex items-center gap-2 cursor-pointer transition-colors"
                      >
                        <span>Next</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {bookingStep === 2 && (
                  <div className="space-y-4">
                    <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-2">Travelers count</label>
                    <div className="grid grid-cols-2 gap-3">
                      {['1 Guest', '2 Guests', '3-4 Guests', '5+ Group'].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setBookingData({ ...bookingData, guests: option })}
                          className={`p-4 rounded-xl border text-center font-bold text-xs cursor-pointer transition-all ${bookingData.guests === option ? 'border-blue-600 bg-blue-50/50 text-blue-600' : 'border-slate-100 bg-slate-50 text-slate-700'}`}
                        >
                          <Users className="w-4 h-4 mx-auto mb-1 text-slate-500" />
                          <span>{option}</span>
                        </button>
                      ))}
                    </div>

                    <div className="pt-4 flex justify-between items-center">
                      <button type="button" onClick={() => setBookingStep(1)} className="text-xs font-bold text-slate-400">Back</button>
                      <button type="button" onClick={() => setBookingStep(3)} className="bg-blue-600 text-white px-5 py-2 rounded-full text-xs font-bold flex items-center gap-2 cursor-pointer"><span>Next</span><ArrowRight className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                )}

                {bookingStep === 3 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1">Full Legal Name</label>
                      <input type="text" required value={bookingData.name} onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })} placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1">Email</label>
                      <input type="email" required value={bookingData.email} onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })} placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none" />
                    </div>

                    <div className="pt-4 flex justify-between items-center">
                      <button type="button" onClick={() => setBookingStep(2)} className="text-xs font-bold text-slate-400">Back</button>
                      <button type="submit" className="bg-[#25d366] hover:bg-[#20ba59] text-white px-6 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 cursor-pointer"><span>Reserve Spot</span><CheckCircle2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                )}

                {bookingStep === 4 && (
                  <div className="text-center py-6">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                    </div>
                    <h4 className="font-extrabold text-slate-800 text-base">Booking Confirmed!</h4>
                    <p className="text-slate-500 text-xs mt-1.5 max-w-[280px] mx-auto">We have registered your holiday inquiry code:</p>
                    <div className="bg-slate-50 p-3 rounded-xl border border-dashed border-slate-200 my-4 inline-block font-mono text-sm font-black text-slate-800">{bookingSuccessId}</div>
                    <p className="text-[10px] text-slate-400">Sarah from Concierge is reviewing your itinerary details.</p>
                    <button type="button" onClick={() => setActiveModal(null)} className="mt-4 bg-slate-900 text-white font-bold text-xs px-5 py-2 rounded-full cursor-pointer">Back to Site</button>
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
