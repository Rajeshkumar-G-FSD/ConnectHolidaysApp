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
  ChevronRight,
  Plus,
  Eye,
  Facebook,
  Instagram
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

interface Service {
  id: number;
  title: string;
  image: string;
  bookingPreset: string;
}

const SERVICES_WE_PROVIDE: Service[] = [
  {
    id: 1,
    title: "Travel packages",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    bookingPreset: "Travel packages"
  },
  {
    id: 2,
    title: "Travel Visa",
    image: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?auto=format&fit=crop&w=800&q=80",
    bookingPreset: "Travel Visa"
  },
  {
    id: 3,
    title: "Passport New",
    image: "https://images.unsplash.com/photo-1544016768-982d1554f0b9?auto=format&fit=crop&w=800&q=80",
    bookingPreset: "Passport New"
  },
  {
    id: 4,
    title: "Passport Renewal",
    image: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=800&q=80",
    bookingPreset: "Passport Renewal"
  },
  {
    id: 5,
    title: "Hotel & Resort Booking",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    bookingPreset: "Hotel & Resort Booking"
  },
  {
    id: 6,
    title: "Flight Ticket",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
    bookingPreset: "Flight Ticket"
  },
  {
    id: 7,
    title: "Currency Exchange",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80",
    bookingPreset: "Currency Exchange"
  },
  {
    id: 8,
    title: "Group Tours",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    bookingPreset: "Group Tours"
  }
];

interface PopularTrip {
  id: number;
  title: string;
  image: string;
  rating: number;
  duration: string;
  bookingPreset: string;
}

const POPULAR_TRIPS: PopularTrip[] = [
  {
    id: 1,
    title: "Honeymoon Tour Package",
    image: "https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    duration: "7 Days",
    bookingPreset: "Honeymoon Tour Package"
  },
  {
    id: 2,
    title: "Cruise Tour Package",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    duration: "7 Days",
    bookingPreset: "Cruise Tour Package"
  },
  {
    id: 3,
    title: "Domestic Tour Package",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    duration: "7 Days",
    bookingPreset: "Domestic Tour Package"
  },
  {
    id: 4,
    title: "International Tour package",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    duration: "7 Days",
    bookingPreset: "International Tour package"
  }
];

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Kaviraj",
    role: "Traveller",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    quote: "Our family trip exceeded my expectations with their personalized service and attention to every single detail. An amazing agency!"
  },
  {
    id: 2,
    name: "Ramya",
    role: "Traveller",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    quote: "I had an incredible experience with TheFunTours. Their knowledgeable staff and well-planned itineraries made my trip unforgettable"
  },
  {
    id: 3,
    name: "Nithish",
    role: "Traveller",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    quote: "TheFunTours provided excellent value for money and went above and beyond to ensure my satisfaction"
  },
  {
    id: 4,
    name: "Dinesh",
    role: "Traveller",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    quote: "TheFunTours exceeded my expectations with their personalized service and attention to detail."
  },
  {
    id: 5,
    name: "Aishwarya",
    role: "Traveller",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    quote: "Our Swiss family vacation was absolutely wonderful! The hotels, transfers, and activities were seamlessly organized."
  },
  {
    id: 6,
    name: "Rohit",
    role: "Traveller",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    quote: "Premium guides, spectacular boutique stays, and wonderful personalized support. I wouldn't travel with anyone else!"
  },
  {
    id: 7,
    name: "Meera",
    role: "Traveller",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    quote: "They made sure everything was absolutely pristine. The customer support on WhatsApp was lightning fast and so helpful."
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
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(2);

  // Book A Tour Contact Form State
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactTourType, setContactTourType] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    // Auto reset after 5 seconds
    setTimeout(() => {
      setContactSubmitted(false);
      setContactName('');
      setContactEmail('');
      setContactTourType('');
      setContactMessage('');
    }, 5000);
  };

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

      {/* Services We Provide Section */}
      <section 
        className="py-20 bg-white relative w-full flex flex-col items-center justify-center border-b border-slate-100"
        id="services-provide"
      >
        <div className="text-center mb-12 px-6">
          <span className="block font-script text-[#1a82e2] text-3xl md:text-5xl drop-shadow-sm tracking-wide leading-relaxed">
            The Right Solution for Your Needs
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-red-600 mt-2 mb-4 font-sans uppercase">
            Services We Provide
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mt-2 font-medium">
            From iconic landmarks to hidden gems, our curated tours promise adventure, comfort, and memories that last a lifetime.
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mt-4" />
        </div>

        {/* 8 Services Grid */}
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_WE_PROVIDE.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => {
                  setBookingData(prev => ({ 
                    ...prev, 
                    destination: service.bookingPreset 
                  }));
                  setBookingStep(1);
                  setBookingSuccessId('');
                  setActiveModal('booking');
                }}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100 cursor-pointer transition-all duration-300 flex flex-col"
              >
                {/* Image Container */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/5 hover:bg-black/0 transition-colors duration-300" />
                </div>
                
                {/* Title Container */}
                <div className="bg-[#f0f7fc] py-4 px-6 flex items-center justify-center border-t border-slate-50 flex-1">
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base text-center tracking-tight">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Most Popular Trips Section */}
      <section 
        className="py-20 bg-[#e4f3f7] relative w-full flex flex-col items-center justify-center border-b border-slate-100 overflow-hidden"
        id="popular-trips"
      >
        {/* Decorative Background Icons to simulate travel line doodles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.05] text-[#1a82e2]">
          <Compass className="absolute top-10 left-[8%] w-16 h-16 rotate-12" />
          <Globe className="absolute top-20 right-[10%] w-20 h-20 -rotate-12" />
          <Umbrella className="absolute bottom-12 left-[12%] w-22 h-22 rotate-45" />
          <MapPin className="absolute bottom-16 right-[15%] w-18 h-18 -rotate-45" />
          <Clock className="absolute top-1/2 left-[25%] w-14 h-14 rotate-12" />
          <Sparkles className="absolute top-16 left-[65%] w-10 h-10" />
          <Users className="absolute bottom-8 right-[30%] w-20 h-20 rotate-6" />
          <Calendar className="absolute top-1/3 right-[5%] w-16 h-16 -rotate-12" />
        </div>

        <div className="relative z-10 text-center mb-12 px-6">
          <span className="block font-script text-[#1a82e2] text-3xl md:text-5xl drop-shadow-sm tracking-wide leading-relaxed">
            The Ideal Place for Your Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-red-600 mt-2 mb-4 font-sans uppercase">
            Most Popular Trips
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mt-2 font-medium">
            Discover the world's most iconic destinations with our curated tours. From ancient wonders to modern marvels, we have the perfect trip for you.
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mt-4" />
        </div>

        {/* 4 Trips Cards Grid */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {POPULAR_TRIPS.map((trip) => (
              <motion.div
                key={trip.id}
                whileHover={{ y: -8 }}
                onClick={() => {
                  setBookingData(prev => ({ 
                    ...prev, 
                    destination: trip.bookingPreset 
                  }));
                  setBookingStep(1);
                  setBookingSuccessId('');
                  setActiveModal('booking');
                }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-slate-100 cursor-pointer transition-all duration-300 flex flex-col group"
              >
                {/* Image Container */}
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={trip.image} 
                    alt={trip.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
                </div>
                
                {/* Info Container */}
                <div className="p-6 flex flex-col flex-grow text-left">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-2.5">
                    {[...Array(trip.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-slate-800 text-base md:text-lg tracking-tight mb-6 line-clamp-2 min-h-[3.5rem] group-hover:text-red-600 transition-colors">
                    {trip.title}
                  </h3>

                  {/* Bottom Row */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                    {/* Duration */}
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold">
                      <Clock className="w-4 h-4 text-sky-500" />
                      <span>{trip.duration}</span>
                    </div>

                    {/* Button */}
                    <button className="border border-slate-200 group-hover:border-red-500 group-hover:text-red-500 rounded-full px-4 py-2 text-xs font-extrabold flex items-center gap-1.5 transition-all duration-300 transform active:scale-95 text-slate-700 bg-white shadow-sm shrink-0">
                      <span>Book Now</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-500 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Gallery Section */}
      <section 
        className="py-20 bg-white relative w-full flex flex-col items-center justify-center border-b border-slate-100 overflow-hidden"
        id="recent-gallery"
      >
        <div className="relative z-10 text-center mb-12 px-6">
          <span className="block font-script text-[#1a82e2] text-3xl md:text-5xl drop-shadow-sm tracking-wide leading-relaxed">
            Make Your Trip Extraordinary
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-red-600 mt-2 mb-4 font-sans uppercase">
            Recent Gallery
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Symmetrical responsive gallery layout matching the screenshot */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
            
            {/* Column 1 - Leftmost Single Card */}
            <div className="col-span-1 flex flex-col justify-center h-full min-h-[280px]">
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => setSelectedGalleryImage("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80")}
                className="relative group rounded-3xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 border border-slate-100 h-[280px] w-full"
              >
                <img 
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" 
                  alt="Tropical Beach" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Plus glass zoom overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/95 text-slate-800 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100">
                    <Plus className="w-6 h-6 stroke-[2.5]" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Column 2 - Stack of Two Cards */}
            <div className="col-span-1 flex flex-col gap-4 h-full">
              {/* Top Card */}
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => setSelectedGalleryImage("https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80")}
                className="relative group rounded-3xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 border border-slate-100 h-[210px] w-full"
              >
                <img 
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80" 
                  alt="Lake Bridge View" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/95 text-slate-800 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100">
                    <Plus className="w-6 h-6 stroke-[2.5]" />
                  </div>
                </div>
              </motion.div>

              {/* Bottom Card */}
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => setSelectedGalleryImage("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80")}
                className="relative group rounded-3xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 border border-slate-100 h-[210px] w-full"
              >
                <img 
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80" 
                  alt="Scenic Mountains Trail" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/95 text-slate-800 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100">
                    <Plus className="w-6 h-6 stroke-[2.5]" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Column 3 - Center Tall Single Card */}
            <div className="col-span-1 flex flex-col justify-center h-full min-h-[440px]">
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => setSelectedGalleryImage("https://images.unsplash.com/photo-1551698618-1ffdfe0700ff?auto=format&fit=crop&w=1200&q=80")}
                className="relative group rounded-3xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 border border-slate-100 h-[440px] w-full"
              >
                <img 
                  src="https://images.unsplash.com/photo-1551698618-1ffdfe0700ff?auto=format&fit=crop&w=600&q=80" 
                  alt="Ski Slopes snowy peak" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/95 text-slate-800 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100">
                    <Plus className="w-6 h-6 stroke-[2.5]" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Column 4 - Stack of Two Cards */}
            <div className="col-span-1 flex flex-col gap-4 h-full">
              {/* Top Card */}
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => setSelectedGalleryImage("https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&w=1200&q=80")}
                className="relative group rounded-3xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 border border-slate-100 h-[210px] w-full"
              >
                <img 
                  src="https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&w=600&q=80" 
                  alt="European Columns Architecture" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/95 text-slate-800 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100">
                    <Plus className="w-6 h-6 stroke-[2.5]" />
                  </div>
                </div>
              </motion.div>

              {/* Bottom Card */}
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => setSelectedGalleryImage("https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80")}
                className="relative group rounded-3xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 border border-slate-100 h-[210px] w-full"
              >
                <img 
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80" 
                  alt="Yellow dress cliff ocean view" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/95 text-slate-800 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100">
                    <Plus className="w-6 h-6 stroke-[2.5]" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Column 5 - Rightmost Single Card */}
            <div className="col-span-1 flex flex-col justify-center h-full min-h-[280px]">
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => setSelectedGalleryImage("https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80")}
                className="relative group rounded-3xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 border border-slate-100 h-[280px] w-full"
              >
                <img 
                  src="https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=600&q=80" 
                  alt="Luxury Cruise Ship" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/95 text-slate-800 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100">
                    <Plus className="w-6 h-6 stroke-[2.5]" />
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        className="py-20 bg-white relative w-full flex flex-col items-center justify-center border-b border-slate-100 overflow-hidden"
        id="testimonials"
      >
        {/* Decorative Background Icons to simulate travel line doodles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.05] text-[#1a82e2]">
          <Globe className="absolute top-12 left-[10%] w-20 h-20 rotate-12" />
          <Compass className="absolute top-24 right-[12%] w-16 h-16 -rotate-12" />
          <Umbrella className="absolute bottom-16 left-[15%] w-18 h-18 rotate-45" />
          <Clock className="absolute bottom-12 right-[8%] w-14 h-14 rotate-12" />
          <MapPin className="absolute top-1/2 left-[5%] w-16 h-16 -rotate-12" />
          <Sparkles className="absolute top-20 left-[60%] w-10 h-10" />
        </div>

        <div className="relative z-10 text-center mb-12 px-6">
          <span className="block font-script text-[#1a82e2] text-3xl md:text-5xl drop-shadow-sm tracking-wide leading-relaxed">
            Testimonial
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-red-600 mt-2 mb-4 font-sans uppercase">
            Discover Why Clients Love Us
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Carousel Slider */}
        <div className="relative z-10 w-full overflow-hidden py-10">
          <motion.div 
            className="flex gap-4 lg:gap-6 px-4"
            animate={{ x: (windowWidth / 2) - (activeTestimonialIndex * (windowWidth >= 1024 ? 440 + 24 : 310 + 16)) - ((windowWidth >= 1024 ? 440 : 310) / 2) }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            style={{ width: 'max-content' }}
          >
            {TESTIMONIALS.map((item, idx) => {
              const isActive = idx === activeTestimonialIndex;
              return (
                <motion.div
                  key={item.id}
                  onClick={() => setActiveTestimonialIndex(idx)}
                  whileHover={{ y: isActive ? -4 : 0 }}
                  className={`shrink-0 rounded-3xl p-6 md:p-8 relative transition-all duration-500 border cursor-pointer flex flex-col justify-between ${
                    isActive 
                      ? 'w-[310px] md:w-[440px] bg-[#f0f9fc] border-sky-100 shadow-xl scale-100 opacity-100' 
                      : 'w-[290px] md:w-[420px] bg-white border-slate-100 shadow-md scale-95 opacity-50 hover:opacity-80'
                  }`}
                  style={{ minHeight: '220px' }}
                >
                  {/* Top Row: Avatar & Name & Stars */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img 
                          src={item.avatar} 
                          alt={item.name} 
                          className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-white shadow-md"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 border-2 border-white rounded-full" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-extrabold text-red-600 text-sm md:text-base leading-tight">
                          {item.name}
                        </h4>
                        <p className="text-slate-400 text-xs mt-0.5 font-bold">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex gap-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                  </div>

                  {/* Quote Body text */}
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed text-left font-medium mt-4 italic mb-4">
                    “{item.quote}”
                  </p>

                  {/* Centered Overlapping Quote Badge */}
                  <div className={`absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300 z-10 border ${
                    isActive 
                      ? 'bg-[#1a82e2] text-white border-sky-400' 
                      : 'bg-white text-[#1a82e2] border-slate-100 hover:bg-slate-50'
                  }`}>
                    <span className="font-serif text-3xl font-bold leading-none select-none -mt-1">”</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-4 z-10">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTestimonialIndex(idx)}
              className={`rounded-full transition-all duration-300 cursor-pointer w-3.5 h-3.5 ${
                idx === activeTestimonialIndex 
                  ? 'bg-[#1a82e2]' 
                  : 'border-2 border-[#1a82e2]/40 hover:border-[#1a82e2] bg-white'
              }`}
              title={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Book A Tour Section */}
      <section 
        className="py-20 bg-gradient-to-br from-[#f8fdff] to-[#e8f6fa] relative w-full overflow-hidden border-b border-slate-100"
        id="book-a-tour"
      >
        {/* Background decorative path lines / particles */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] text-sky-500">
          <Globe className="absolute top-8 right-12 w-32 h-32 rotate-45" />
          <Compass className="absolute bottom-10 left-10 w-24 h-24 -rotate-12" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-5 text-left bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-sky-100/50">
              <span className="block font-sans text-xs font-extrabold text-blue-600 uppercase tracking-widest mb-2">
                Plan Your Vacation
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-red-600 font-sans uppercase mb-6 tracking-tight">
                Book A Tour
              </h2>

              {contactSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center flex flex-col items-center gap-3"
                >
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <h4 className="font-extrabold text-sm uppercase">Inquiry Received!</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Thank you, <strong className="text-slate-800">{contactName}</strong>. Our custom travel concierge has received your request for a <strong className="text-slate-800">{contactTourType || 'Custom'} Tour</strong> and will reach out to you within 2 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  {/* Name field */}
                  <div className="relative">
                    <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1.5 px-1">First Name</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input 
                        type="text" 
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Your First Name" 
                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#1a82e2] focus:bg-white rounded-xl pl-11 pr-4 py-3 text-xs text-slate-800 focus:outline-none font-semibold transition-all"
                      />
                    </div>
                  </div>

                  {/* Mail field */}
                  <div className="relative">
                    <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1.5 px-1">Your Mail</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input 
                        type="email" 
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="Your Email Address" 
                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#1a82e2] focus:bg-white rounded-xl pl-11 pr-4 py-3 text-xs text-slate-800 focus:outline-none font-semibold transition-all"
                      />
                    </div>
                  </div>

                  {/* Tour Type field */}
                  <div className="relative">
                    <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1.5 px-1">Select Tour Type</label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      <select 
                        required
                        value={contactTourType}
                        onChange={(e) => setContactTourType(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#1a82e2] focus:bg-white rounded-xl pl-11 pr-10 py-3 text-xs text-slate-800 focus:outline-none font-semibold transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select Tour Type</option>
                        <option value="International">International Package</option>
                        <option value="Domestic">Domestic Package</option>
                        <option value="Honeymoon">Honeymoon Special</option>
                        <option value="Cruise">Luxury Cruise Voyage</option>
                        <option value="Custom Bespoke">Bespoke Custom Plan</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l border-slate-200 pl-3">
                        <ArrowRight className="w-3.5 h-3.5 rotate-90 text-slate-400" />
                      </div>
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="relative">
                    <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1.5 px-1">Your Message</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                      <textarea 
                        rows={3}
                        required
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        placeholder="Describe your destination dream or general inquiry..." 
                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#1a82e2] focus:bg-white rounded-xl pl-11 pr-4 py-3 text-xs text-slate-800 focus:outline-none font-semibold transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button 
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs px-8 py-3.5 rounded-full shadow-lg hover:shadow-blue-200 transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 cursor-pointer w-fit"
                    >
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: High-Fidelity 3D Travel Vector Illustration */}
            <div className="lg:col-span-7 flex items-center justify-center">
              <div className="relative w-full max-w-xl h-[400px] md:h-[480px] flex items-center justify-center bg-transparent">
                
                {/* 1. Base decorative world map grid */}
                <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#1a82e2_1.5px,transparent_1.5px)] [background-size:20px_20px] rounded-[3rem]" />
                
                {/* 2. Rotating Globe Compass background */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.12] pointer-events-none z-0">
                  <Globe className="w-80 h-80 text-blue-500 animate-[spin_100s_linear_infinite]" />
                </div>

                {/* 3. Deep shadow base backing */}
                <div className="absolute bottom-6 w-4/5 h-10 bg-slate-900/10 blur-2xl rounded-full z-0" />

                {/* 4. Large Suitcase (Teal Green) */}
                <motion.div 
                  initial={{ y: 30, rotate: -6 }}
                  animate={{ y: 0, rotate: -4 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="absolute bottom-14 right-10 w-[240px] h-[300px] bg-gradient-to-br from-cyan-400 to-teal-500 rounded-[2.5rem] shadow-2xl border-4 border-white flex flex-col justify-between p-6 overflow-hidden z-10"
                >
                  {/* Suitcase vertical grooves */}
                  <div className="absolute inset-0 flex justify-around opacity-20 pointer-events-none px-6 py-8">
                    <div className="w-1 bg-white h-full rounded-full" />
                    <div className="w-1 bg-white h-full rounded-full" />
                    <div className="w-1 bg-white h-full rounded-full" />
                    <div className="w-1 bg-white h-full rounded-full" />
                  </div>
                  {/* Suitcase handle */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-14 border-4 border-slate-300 rounded-t-xl opacity-80" />
                  
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="bg-white/20 backdrop-blur-md rounded-lg px-2.5 py-1 text-white text-[9px] font-bold tracking-wider font-mono uppercase">
                      The Fun Tours
                    </span>
                    <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
                  </div>
                  <div className="relative z-10 text-white font-black text-lg tracking-wider">
                    EXPLORE
                  </div>
                </motion.div>

                {/* 5. Medium Suitcase (Deep Blue with straps) */}
                <motion.div 
                  initial={{ y: 50, rotate: 12 }}
                  animate={{ y: 0, rotate: 8 }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                  className="absolute bottom-10 left-8 w-[210px] h-[240px] bg-gradient-to-tr from-blue-600 to-indigo-700 rounded-[2rem] shadow-xl border-4 border-white flex flex-col justify-between p-5 overflow-hidden z-20"
                >
                  {/* Darker luggage straps */}
                  <div className="absolute top-0 bottom-0 left-8 w-4 bg-amber-900/40 border-l border-r border-amber-950/20" />
                  <div className="absolute top-0 bottom-0 right-8 w-4 bg-amber-900/40 border-l border-r border-amber-950/20" />
                  
                  <div className="relative z-10 flex justify-between items-start">
                    <Compass className="w-6 h-6 text-white opacity-90 animate-spin-slow" />
                  </div>
                  <div className="relative z-10 text-white font-bold text-xs tracking-wider opacity-90">
                    PACK & GO
                  </div>
                </motion.div>

                {/* 6. Realistic 3D floating plane card */}
                <motion.div 
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [12, 10, 12]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute top-14 left-10 z-30 drop-shadow-[0_15px_15px_rgba(0,0,0,0.2)]"
                >
                  <div className="bg-white/95 backdrop-blur-sm px-4.5 py-3.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
                    <div className="w-9 h-9 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center font-bold">
                      ✈️
                    </div>
                    <div className="text-left">
                      <span className="block text-[9px] text-slate-400 font-extrabold uppercase tracking-widest leading-none">Status</span>
                      <span className="block text-xs font-black text-slate-800 mt-1 leading-none">Flight Approved</span>
                    </div>
                  </div>
                </motion.div>

                {/* 7. Umbrella / Palm accents */}
                <motion.div 
                  animate={{ rotate: [-3, 3, -3] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-28 right-24 z-25 text-emerald-500 pointer-events-none drop-shadow-md"
                >
                  <Umbrella className="w-20 h-20 -rotate-12 stroke-[1.5]" />
                </motion.div>
                
                {/* Ambient dots/sparkles */}
                <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-ping pointer-events-none" />
                <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-sky-400 rounded-full animate-pulse pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Styled Responsive Footer Section */}
      <footer 
        className="bg-[#0b1d33] text-white pt-20 pb-10 border-t border-slate-800"
        id="footer"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
            
            {/* Column 1: Brand / Description */}
            <div className="lg:col-span-4 text-left flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="text-3xl">✈️</span>
                <span className="font-sans font-black text-xl tracking-tight text-white uppercase flex items-center">
                  The <span className="text-red-500 ml-1.5 font-sans">Fun</span> <span className="text-sky-400 ml-1.5 font-sans">Tours</span>
                </span>
              </div>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
                Discover the world with our premier travel agency. Explore countless destinations and create unforgettable memories with customized, high-luxury itineraries.
              </p>
              
              {/* Social Icons */}
              <div className="flex items-center gap-3.5 mt-2">
                <a 
                  href="#" 
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-500 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                  title="Follow us on Facebook"
                >
                  <Facebook className="w-4 h-4 fill-current" />
                </a>
                <a 
                  href="#" 
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-pink-600 border border-white/10 hover:border-pink-500 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                  title="Follow us on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://wa.me/919865051388" 
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-emerald-600 border border-white/10 hover:border-emerald-500 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                  title="Chat on WhatsApp Support"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-2 text-left flex flex-col gap-4">
              <h4 className="text-sm font-extrabold uppercase tracking-widest text-sky-400 border-l-2 border-red-500 pl-3 leading-none">
                Quick Links
              </h4>
              <nav className="flex flex-col gap-2.5 text-xs text-slate-300 font-bold">
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                  className="hover:text-red-500 transition-colors text-left cursor-pointer hover:translate-x-1 duration-200"
                >
                  Home
                </button>
                <button 
                  onClick={() => setActiveModal('about')} 
                  className="hover:text-red-500 transition-colors text-left cursor-pointer hover:translate-x-1 duration-200"
                >
                  About
                </button>
                <button 
                  onClick={() => setActiveModal('services')} 
                  className="hover:text-red-500 transition-colors text-left cursor-pointer hover:translate-x-1 duration-200"
                >
                  Service
                </button>
                <button 
                  onClick={() => setActiveModal('destination')} 
                  className="hover:text-red-500 transition-colors text-left cursor-pointer hover:translate-x-1 duration-200"
                >
                  Destination
                </button>
                <button 
                  onClick={() => setActiveModal('contact')} 
                  className="hover:text-red-500 transition-colors text-left cursor-pointer hover:translate-x-1 duration-200"
                >
                  Contact
                </button>
              </nav>
            </div>

            {/* Column 3: Contact & suggested hours */}
            <div className="lg:col-span-3 text-left flex flex-col gap-4">
              <h4 className="text-sm font-extrabold uppercase tracking-widest text-sky-400 border-l-2 border-red-500 pl-3 leading-none">
                Erode Branch
              </h4>
              <div className="flex flex-col gap-4 text-xs font-semibold text-slate-300">
                
                {/* Physical Location Address */}
                <div className="flex gap-3 items-start leading-relaxed">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>
                    Muthuram Complex, 314/L, Brough Rd,<br />
                    Erode Fort, Erode,<br />
                    Tamil Nadu 638001
                  </span>
                </div>

                {/* Primary phone */}
                <div className="flex gap-3 items-center">
                  <Phone className="w-4 h-4 text-[#1a82e2] shrink-0" />
                  <a href="tel:09865051388" className="hover:text-red-400 transition-colors">
                    098650 51388
                  </a>
                </div>

                {/* Suggested operating hours */}
                <div className="flex gap-3 items-start pt-1 border-t border-slate-800/60">
                  <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold leading-none">Office Hours</span>
                    <span className="block text-slate-200 text-[11px] leading-tight">
                      Mon - Sat: 9:30 AM - 8:30 PM<br />
                      Sunday: 10:00 AM - 6:00 PM
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-500/20 font-bold w-fit mt-1 leading-none">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                      Online Concierge: 24/7 Active
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Column 4: Instagram Post (Interactive Grid) */}
            <div className="lg:col-span-3 text-left flex flex-col gap-4">
              <h4 className="text-sm font-extrabold uppercase tracking-widest text-sky-400 border-l-2 border-red-500 pl-3 leading-none">
                Instagram Post
              </h4>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 1, img: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=150&h=150&q=80", title: "Tropical Beach Resort" },
                  { id: 2, img: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?auto=format&fit=crop&w=150&h=150&q=80", title: "Cruise Pool & Deck" },
                  { id: 3, img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=150&h=150&q=80", title: "Amalfi Cliffside Village" },
                  { id: 4, img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=150&h=150&q=80", title: "Luxury Overwater Oasis" },
                  { id: 5, img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=150&h=150&q=80", title: "Scenic Cliff Boating" },
                  { id: 6, img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=150&h=150&q=80", title: "Eiffel Tower Paris" }
                ].map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => setSelectedGalleryImage(item.img)}
                    className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer border border-white/5 bg-slate-800 shadow-md transform active:scale-95 transition-all hover:shadow-lg"
                    title={`Zoom view: ${item.title}`}
                  >
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-xs font-bold font-mono">🔍</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Subfooter bottom line */}
          <div className="mt-16 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-bold">
            <div>
              &copy; {new Date().getFullYear()} The Fun Tours. All Rights Reserved.
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-red-400 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-red-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

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
                        <optgroup label="Our Services">
                          <option value="Travel packages">Travel packages Assistance</option>
                          <option value="Travel Visa">Travel Visa Assistance</option>
                          <option value="Passport New">New Passport Processing</option>
                          <option value="Passport Renewal">Passport Renewal Processing</option>
                          <option value="Hotel & Resort Booking">Hotel & Resort Booking</option>
                          <option value="Flight Ticket">Flight Ticket Booking</option>
                          <option value="Currency Exchange">Currency Exchange Assistance</option>
                          <option value="Group Tours">Group Tours Package</option>
                        </optgroup>
                        <optgroup label="Popular Destinations">
                          <option value="Malaysia Featured Package">Malaysia Package</option>
                          <option value="Dubai Featured Package">Dubai Package</option>
                          <option value="Hong Kong Featured Package">Hong Kong Package</option>
                          <option value="Singapore Featured Package">Singapore Package</option>
                          <option value="Thailand Featured Package">Thailand Package</option>
                          <option value="Japan Featured Package">Japan Package</option>
                          <option value="Italy Featured Package">Italy Package</option>
                          <option value="Switzerland Featured Package">Switzerland Package</option>
                          <option value="Greece Featured Package">Greece Package</option>
                          <option value="Maldives Featured Package">Maldives Package</option>
                        </optgroup>
                        <optgroup label="Popular Trips">
                          <option value="Honeymoon Tour Package">Honeymoon Tour Package</option>
                          <option value="Cruise Tour Package">Cruise Tour Package</option>
                          <option value="Domestic Tour Package">Domestic Tour Package</option>
                          <option value="International Tour package">International Tour Package</option>
                        </optgroup>
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

      {/* Gallery Lightbox Preview Modal */}
      <AnimatePresence>
        {selectedGalleryImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedGalleryImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-md cursor-pointer"
          >
            <button
              onClick={() => setSelectedGalleryImage(null)}
              className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors p-3 bg-white/10 hover:bg-white/20 rounded-full cursor-pointer z-50"
              title="Close Preview"
            >
              <X className="w-6 h-6 stroke-[2.5]" />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <img
                src={selectedGalleryImage}
                alt="Recent Gallery Zoom"
                className="max-w-full max-h-[85vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
