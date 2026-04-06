import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, MapPin, ArrowRight, Instagram, Linkedin, 
  Youtube, Leaf, Recycle, Trash2, Droplets, 
  Sprout, Trees, Globe, Sun, Bed, Bath, 
  Maximize, Check, Wifi, Car, Utensils, 
  Heart, Palette, HeadphonesIcon,
  Music, BookOpen, Users, Activity,
  Home, Eye, Handshake, Clock, Mail, Plus
} from 'lucide-react';

/* ─── Page transition hook ─── */
function usePageTransition(initialPage = 'home') {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [displayPage, setDisplayPage] = useState(initialPage);
  const [phase, setPhase] = useState('idle'); // 'idle' | 'exit' | 'enter'

  const navigate = (page) => {
    if (page === currentPage) return;
    setPhase('exit');
    setTimeout(() => {
      setCurrentPage(page);
      setDisplayPage(page);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setPhase('enter');
      setTimeout(() => setPhase('idle'), 500);
    }, 300);
  };

  return { currentPage, displayPage, phase, navigate };
}

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const { currentPage, displayPage, phase, navigate } = usePageTransition('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'visit', label: 'Visit' },
    { id: 'stay', label: 'Stay' },
    { id: 'contact', label: 'Contact' }
  ];

  /* ─── Reusable animated button styles ─── */
  const btnPrimary = "relative overflow-hidden bg-white text-black px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-[1.04] hover:shadow-lg active:scale-95";
  const btnOutlineWhite = "relative overflow-hidden bg-transparent border border-white text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-black hover:scale-[1.04] active:scale-95";
  const btnOutlineDark = "border border-black px-8 py-3 rounded-full transition-all duration-300 hover:bg-black hover:text-white hover:scale-[1.04] active:scale-95 inline-flex items-center gap-2";
  const btnDark = "bg-[#1a1a1a] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 hover:bg-black hover:scale-[1.04] hover:shadow-md active:scale-95 flex items-center gap-2";
  const btnGreen = "bg-[#7cb342] hover:bg-[#689f38] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-[1.04] hover:shadow-lg active:scale-95 text-lg";
  const btnCard = "w-full bg-[#1e2320] text-white py-4 rounded-xl font-medium transition-all duration-300 hover:bg-black hover:scale-[1.01] hover:shadow-md active:scale-95";

  /* ═══════════════════════════════════
       HOME PAGE
  ═══════════════════════════════════ */
  const renderHome = () => (
    <>
      {/* Hero Section */}
      <section className="px-4 md:px-8 mb-24 md:mb-32">
        <div className="relative w-full h-[70vh] min-h-[500px] md:h-[80vh] rounded-[2rem] overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Lush green luxury estate aerial view" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8000ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-3/4 lg:w-1/2 text-white">
            <span className="text-xs md:text-sm font-semibold tracking-widest uppercase mb-4 block animate-fade-up" style={{animationDelay:'0.1s'}}>
              Mannah Creative Village
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6 animate-fade-up" style={{animationDelay:'0.2s'}}>
              In Search of<br />the Future
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-lg leading-relaxed animate-fade-up" style={{animationDelay:'0.3s'}}>
              Creating a place where ideas and human connections come together — one story at a time.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{animationDelay:'0.4s'}}>
              <button onClick={() => navigate('stay')} className={btnPrimary}>
                Explore Now
              </button>
              <button onClick={() => navigate('contact')} className={btnOutlineWhite}>
                Contact
              </button>
            </div>
          </div>

          <div className="absolute bottom-12 right-8 hidden md:flex items-center gap-4 text-white transform rotate-90 origin-right">
            <span className="text-xs tracking-widest uppercase opacity-70">Scroll</span>
            <div className="w-12 h-[1px] bg-white/50"></div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="sticky top-40">
            <span className="text-[#5E9B4A] text-sm font-bold tracking-widest uppercase mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Where every corner tells <span className="font-serif italic font-normal text-gray-700">a story</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-md">
              Explore Mannah's ongoing journey — where art, nature, and human spirit come together in a creative city unlike any other.
            </p>
            <button onClick={() => navigate('visit')} className={btnOutlineDark}>
              See more stories
            </button>
          </div>

          <div className="flex flex-col gap-6">
            <div className="w-full h-64 md:h-80 rounded-[2rem] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80" alt="Modern home exterior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="h-48 md:h-64 rounded-[2rem] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Interior detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="h-48 md:h-64 rounded-[2rem] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=2067&q=80" alt="Community gathering" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-32">
        <p className="text-center text-sm md:text-base tracking-widest uppercase text-gray-500 mb-16">
          Discover the <span className="font-bold text-black">Foundation</span> guiding us toward a <span className="font-bold text-black">brighter future</span>
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden order-2 lg:order-1">
            <img src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Hands planting sapling" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-[#5E9B4A] text-sm font-bold tracking-widest uppercase mb-4 block">Purpose</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Our Mission<br />and Vision
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Mannah, we believe in the power of collective effort to create an ecosystem where ideas flourish, connections thrive, and meaningful change happens. We are building a vibrant place where creativity, collaboration, and positive change merge, fostering harmonious co-existence through education, resources, and collaborative platforms, we empower people in arts, technology, and design.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Our vision is a world where every individual has the tools and community to realize their full creative potential.
            </p>
            <button onClick={() => navigate('visit')} className={btnOutlineDark}>
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-[#5E9B4A] text-sm font-bold tracking-widest uppercase mb-4 block">Values</span>
            <h2 className="text-4xl md:text-5xl font-bold">Our Commitment</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105">Environment</button>
            <button className="bg-white border border-gray-200 text-gray-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-50 hover:scale-105 transition-all duration-200">Community</button>
            <button className="bg-white border border-gray-200 text-gray-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-50 hover:scale-105 transition-all duration-200">Economy</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { bg: '#eaf4eb', Icon: Leaf,    title: 'Green Space Commitment',    text: 'Preserving 25% of the site as living green space, integrating nature into every aspect of our creative city.' },
            { bg: '#eaf5f5', Icon: Recycle, title: 'Reforestation Initiative',   text: 'Actively planting native trees and restoring natural habitats to support Bali\'s rich biodiversity.' },
            { bg: '#fcf3eb', Icon: Trash2,  title: 'Waste Management',          text: 'Implementing zero waste policies with composting, recycling, and upcycling programs across the city.' },
            { bg: '#eef4f9', Icon: Droplets,title: 'Sustainable Water Bodies',  text: 'Designing water systems that conserve, recycle, and celebrate water as a precious community resource.' },
            { bg: '#f3efea', Icon: Sprout,  title: 'Enhanced Biodiversity',     text: 'Creating habitats and corridors that support local wildlife and plant species throughout the city.' },
            { bg: '#eaf5f5', Icon: Trees,   title: 'Mangrove Conservation',     text: 'Protecting and restoring mangrove ecosystems along the coastline to preserve marine biodiversity.' },
            { bg: '#f8f0ec', Icon: Globe,   title: 'Ecosystem Preservation',    text: 'Maintaining the natural balance of local ecosystems through careful planning and sustainable practices.' },
            { bg: '#fdf4e8', Icon: Sun,     title: 'Zero-emission Transition',  text: 'Transitioning to 100% renewable energy sources and eliminating carbon emissions across all operations.' },
          ].map(({ bg, Icon, title, text }) => (
            <div key={title} style={{ background: bg }} className="p-8 rounded-[2rem] aspect-square flex flex-col justify-between group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon size={18} className="text-gray-700" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-32">
        <span className="text-[#5E9B4A] text-sm font-bold tracking-widest uppercase mb-4 block">Results</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Mannah 2025 Impact</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Resort style homes in nature" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              2025 marked a turning point for Mannah, where long-term investments in community, creativity, and sustainability began yielding measurable results — highlighting what we can accomplish when we build together.
            </p>
            <div className="space-y-10">
              {[
                { stat: '94.8%', label: 'Visitor satisfaction rate' },
                { stat: 'IDR 5.6B', label: 'Economic impact generated' },
                { stat: '14,000+', label: 'Community members engaged' },
              ].map(({ stat, label }, i) => (
                <React.Fragment key={stat}>
                  {i > 0 && <hr className="border-gray-200" />}
                  <div className="group cursor-default">
                    <h3 className="text-5xl md:text-6xl font-serif text-[#2c3e35] mb-2 tracking-tight transition-all duration-300 group-hover:text-[#5E9B4A] group-hover:translate-x-2">{stat}</h3>
                    <p className="text-gray-600 uppercase tracking-wider text-sm font-medium">{label}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explore Illustration Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-32 text-center">
        <span className="text-[#5E9B4A] text-sm font-bold tracking-widest uppercase mb-4 block">Explore</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Welcome to Mannah Creative City</h2>
        <div className="relative w-full rounded-[2rem] overflow-hidden bg-[#e8eedd]">
          <img 
            src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Stylized village map" 
            className="w-full h-[400px] md:h-[600px] object-cover opacity-90"
            style={{ filter: 'contrast(1.1) saturate(1.2)' }}
          />
          <div className="absolute top-6 right-6 md:top-10 md:right-10 bg-white/95 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">
            <MapPin size={16} className="text-[#5E9B4A]" />
            <span className="font-semibold text-sm">Bali, Indonesia</span>
          </div>
        </div>
      </section>

      {/* Guided Experience CTA */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-32">
        <div className="flex flex-col lg:flex-row rounded-[2rem] overflow-hidden shadow-sm">
          <div className="bg-[#111] text-white p-12 md:p-20 lg:w-1/2 flex flex-col justify-center">
            <span className="text-gray-400 text-sm font-bold tracking-widest uppercase mb-6 block">Guided Experience</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Join our guided tour and explore <span className="font-serif italic font-normal text-gray-300">the heart of our</span> creative city.
            </h2>
          </div>
          <div className="bg-[#f0ece1] p-12 md:p-20 lg:w-1/2 flex flex-col justify-center">
            <span className="text-[#5E9B4A] text-sm font-bold tracking-widest uppercase mb-4 block">Be Our Guest!</span>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Start Your Journey</h3>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              At Mannah, we offer a curated tour for those who want to delve deeper into our core pillars and witness how our values come to life.
            </p>
            <p className="text-gray-700 text-lg mb-10 leading-relaxed">
              Our expert guides will take you through art installations, sustainable spaces, and community hubs — sharing the stories that make Mannah truly unique.
            </p>
            <div className="flex flex-wrap gap-4">
              {/* "Be our guide" → contact (partner inquiry) */}
              <button onClick={() => navigate('contact')} className={btnDark}>
                Be our guide <ArrowRight size={18} />
              </button>
              {/* "Get Ticket" → visit page */}
              <button onClick={() => navigate('visit')} className="bg-transparent border border-black text-black px-8 py-3.5 rounded-full font-medium transition-all duration-300 hover:bg-black hover:text-white hover:scale-[1.04] active:scale-95">
                Get Ticket
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News/Spotlight */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-32">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-[#5E9B4A] text-sm font-bold tracking-widest uppercase mb-2 block">Latest</span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Spotlight on <span className="font-serif italic font-normal text-gray-700">Our Story</span>
            </h2>
          </div>
          <button onClick={() => navigate('visit')} className="hidden md:flex items-center gap-2 font-medium hover:underline hover:text-[#5E9B4A] transition-colors">
            See more stories <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', tag: 'Events',    title: 'Mannah announces Art & Bali 2025 Dates and Lineup', date: 'March 01, 2025' },
            { img: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', tag: 'Culture',   title: 'Mannah Cultural Week Presents a Celebration of...', date: 'February 15, 2025' },
            { img: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', tag: 'Community', title: 'Mannah Creative Village Welcomes Rain of More...', date: 'January 28, 2025' },
          ].map(({ img, tag, title, date }) => (
            <div key={title} className="group cursor-pointer" onClick={() => navigate('visit')}>
              <div className="h-64 rounded-[1.5rem] overflow-hidden mb-6">
                <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span className="inline-block bg-[#eaf4eb] text-[#3f7a2d] text-xs font-bold px-3 py-1 rounded-md mb-4 uppercase tracking-wider">{tag}</span>
              <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-[#5E9B4A] transition-colors">{title}</h3>
              <p className="text-gray-500 text-sm">{date}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 md:hidden">
          <button onClick={() => navigate('visit')} className="flex items-center justify-center gap-2 font-medium hover:underline w-full">
            See more stories <ArrowRight size={16} />
          </button>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Subscribe to our newsletter</h2>
            <p className="text-gray-600 text-lg">Stay updated with the latest news, events, and stories from Mannah.</p>
          </div>
          <div className="md:w-1/2 w-full flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="flex-grow bg-[#f9f8f4] border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-[#5E9B4A]/20 transition-all"
            />
            <button className="bg-[#1a1a1a] text-white px-10 py-4 rounded-xl font-medium transition-all duration-300 hover:bg-[#5E9B4A] hover:scale-[1.02] hover:shadow-md active:scale-95 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );

  /* ═══════════════════════════════════
       STAY PAGE
  ═══════════════════════════════════ */
  const renderStay = () => (
    <>
      {/* Stay Hero */}
      <section className="relative w-full h-[65vh] min-h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Luxury villa pool at dusk" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 pt-16">
          <span className="text-xs md:text-sm font-semibold tracking-widest uppercase mb-4 animate-fade-up" style={{animationDelay:'0.1s'}}>Mannah Properties</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-up" style={{animationDelay:'0.2s'}}>Stay at Mannah</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-light animate-fade-up" style={{animationDelay:'0.3s'}}>
            Luxury villas and residences nestled within Bali's most inspiring creative city.
          </p>
        </div>
      </section>

      {/* Available Properties */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
        <div className="text-center mb-16">
          <span className="text-[#5E9B4A] text-sm font-bold tracking-widest uppercase mb-4 block">Available Properties</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1a1a1a]">Find Your Perfect Stay</h2>
          <p className="text-gray-600 text-lg">From intimate artist lofts to grand riverside estates — every property at<br className="hidden md:block" />Mannah is a sanctuary designed with intention.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Property cards */}
          {[
            { img: 'https://images.unsplash.com/photo-1613490908592-5d8be4019159?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', badge: 'Most Popular', type: 'Villa',      name: 'The Canopy Villa',     price: 'IDR 4,500,000', beds: 3, baths: 3, sqm: 320, features: ['Private infinity pool','Jungle canopy views','Outdoor living pavilion','Daily breakfast included'] },
            { img: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', badge: 'Best Value',   type: 'Villa',      name: 'The Garden Retreat',   price: 'IDR 2,800,000', beds: 2, baths: 2, sqm: 210, features: ['Private garden courtyard','Outdoor rain shower','Yoga deck','Artisan welcome kit'] },
            { img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', badge: 'Creative Stay', type: 'Residence',  name: 'The Artist Loft',      price: 'IDR 1,900,000', beds: 1, baths: 1, sqm: 95,  features: ['Studio workspace','Art collection walls','Rooftop terrace','Community kitchen access'] },
            { img: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', badge: 'Luxury',       type: 'Villa',      name: 'The Riverside Estate', price: 'IDR 7,200,000', beds: 5, baths: 5, sqm: 680, features: ['Private river frontage','Chef & butler service','Home cinema','Helipad access'] },
          ].map(({ img, badge, type, name, price, beds, baths, sqm, features }) => (
            <div key={name} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col group">
              <div className="relative h-72 w-full overflow-hidden">
                <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-[#1a1a1a] text-white text-xs font-semibold px-3 py-1.5 rounded-full">{badge}</div>
                <div className="absolute top-4 right-4 bg-white text-black text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">{type}</div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold">{name}</h3>
                  <div className="text-right">
                    <span className="font-bold text-xl block">{price}</span>
                    <span className="text-gray-400 text-sm">/ night</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-gray-600 text-sm mb-8 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2"><Bed size={16} /> {beds} Beds</div>
                  <div className="flex items-center gap-2"><Bath size={16} /> {baths} Baths</div>
                  <div className="flex items-center gap-2"><Maximize size={16} /> {sqm} m²</div>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                      <Check size={16} className="text-[#5E9B4A]" /> {f}
                    </li>
                  ))}
                </ul>
                {/* "Enquire Now" → contact page */}
                <button onClick={() => navigate('contact')} className={btnCard}>
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Included Features */}
      <section className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <span className="text-[#5E9B4A] text-sm font-bold tracking-widest uppercase mb-4 block">Included</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Every Stay Includes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {[
              { Icon: Wifi,           label: 'High-Speed WiFi' },
              { Icon: Car,            label: 'Private Parking' },
              { Icon: Utensils,       label: 'Farm-to-Table Dining' },
              { Icon: Heart,          label: 'Wellness Center Access' },
              { Icon: Palette,        label: 'Art Tour Included' },
              { Icon: Leaf,           label: 'Eco-Certified' },
              { Icon: HeadphonesIcon, label: '24/7 Concierge' },
              { Icon: Droplets,       label: 'Pool Access' },
            ].map(({ Icon, label }) => (
              <div key={label} className="flex flex-col items-center group cursor-default">
                <div className="w-16 h-16 bg-[#F9F8F4] rounded-[1.25rem] flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#eaf4eb] group-hover:scale-110 group-hover:shadow-md">
                  <Icon className="text-gray-700 transition-colors group-hover:text-[#5E9B4A]" size={24} strokeWidth={1.5} />
                </div>
                <span className="text-xs font-medium text-gray-800">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-32">
        <div className="text-center mb-16">
          <span className="text-[#5E9B4A] text-sm font-bold tracking-widest uppercase mb-4 block">Gallery</span>
          <h2 className="text-4xl md:text-5xl font-bold">Property Highlights</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-[2rem] overflow-hidden h-[400px] lg:h-[600px]">
            <img src="https://images.unsplash.com/photo-1542314831-c6a4d14ce8a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" alt="Villa exterior pool" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="grid grid-cols-2 gap-6 h-[400px] lg:h-[600px]">
            {[
              'https://images.unsplash.com/photo-1595521634568-15cd9251871a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
              'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
              'https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
              'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            ].map((src, i) => (
              <div key={i} className="rounded-[2rem] overflow-hidden">
                <img src={src} alt={`Gallery ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  /* ═══════════════════════════════════
       VISIT PAGE
  ═══════════════════════════════════ */
  const renderVisit = () => (
    <>
      {/* Visit Hero */}
      <section className="relative w-full h-[65vh] min-h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Lumina aerial view" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 pt-16">
          <span className="text-xs md:text-sm font-semibold tracking-widest uppercase mb-4 animate-fade-up" style={{animationDelay:'0.1s'}}>Experience Mannah</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-up" style={{animationDelay:'0.2s'}}>Visit & Explore</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-light animate-fade-up" style={{animationDelay:'0.3s'}}>
            Discover wellness, art, and nature woven into every corner of Mannah Creative City.
          </p>
        </div>
      </section>

      {/* Experiences */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-32">
        <div className="text-center mb-24">
          <span className="text-[#5E9B4A] text-sm font-bold tracking-widest uppercase mb-4 block">What Awaits You</span>
          <h2 className="text-4xl md:text-5xl font-bold">Experiences at Mannah</h2>
        </div>

        <div className="flex flex-col gap-24">
          {[
            { Icon: Activity, title: 'Integrated Wellness Centers', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', text: 'Immerse yourself in holistic healing at our world-class wellness centers. From yoga pavilions and meditation gardens to traditional Balinese healing rituals and modern spa therapies — every space is designed to restore balance and inner peace.', reverse: false },
            { Icon: Palette, title: 'Art Installations', img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', text: 'Wander through a living gallery of thought-provoking art installations scattered across the city. Local and international artists collaborate to create immersive works that respond to nature, culture, and community — transforming every path into a discovery.', reverse: true },
            { Icon: Leaf, title: 'Natural Green Spaces', img: 'https://images.unsplash.com/photo-1559628233-100c798642d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', text: 'Breathe deeply in our expansive natural green spaces — from bamboo forests and rice terraces to riverside walking trails and community gardens. Over 25% of Mannah is preserved as living green space, offering a sanctuary for both people and wildlife.', reverse: false },
          ].map(({ Icon, title, img, text, reverse }) => (
            <div key={title} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className={reverse ? 'order-2 lg:order-1 rounded-[2rem] overflow-hidden h-[400px] lg:h-[500px]' : ''}>
                {!reverse && (
                  <div>
                    <div className="w-12 h-12 bg-[#eaf4eb] rounded-xl flex items-center justify-center mb-8 hover:scale-110 transition-transform">
                      <Icon className="text-[#5E9B4A]" size={24} />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">{title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{text}</p>
                  </div>
                )}
                {reverse && <img src={img} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />}
              </div>
              <div className={reverse ? 'order-1 lg:order-2' : 'rounded-[2rem] overflow-hidden h-[400px] lg:h-[500px]'}>
                {!reverse && <img src={img} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />}
                {reverse && (
                  <div>
                    <div className="w-12 h-12 bg-[#eaf4eb] rounded-xl flex items-center justify-center mb-8 hover:scale-110 transition-transform">
                      <Icon className="text-[#5E9B4A]" size={24} />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">{title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{text}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Life */}
      <section className="bg-white py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#5E9B4A] text-sm font-bold tracking-widest uppercase mb-4 block">Community Life</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Be Part of Something Bigger</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Mannah is more than a destination — it's a living, breathing community where every visitor becomes part of the story.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { Icon: Users,    title: 'Creative Workshops',     text: 'Join hands-on workshops led by local artisans, chefs, and wellness practitioners.' },
              { Icon: Music,    title: 'Live Performances',      text: 'Experience live music, dance, and cultural performances in our open-air amphitheater.' },
              { Icon: Sprout,   title: 'Eco Programs',           text: 'Participate in reforestation drives, organic farming, and sustainability education.' },
              { Icon: Utensils, title: 'Farm-to-Table Dining',   text: 'Savor fresh, locally sourced meals at our community kitchen and garden café.' },
              { Icon: BookOpen, title: 'Learning Hub',           text: 'Attend talks, exhibitions, and educational programs at our community learning center.' },
              { Icon: Sun,      title: 'Sunrise Rituals',        text: 'Start your day with guided sunrise yoga and traditional Balinese blessing ceremonies.' },
            ].map(({ Icon, title, text }) => (
              <div key={title} className="bg-[#F9F8F4] p-10 rounded-[2rem] hover:bg-[#f0ece1] hover:-translate-y-1 hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-gray-800" size={20} />
                </div>
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1e2a24] text-white py-32">
        <div className="max-w-[800px] mx-auto px-6 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Ready to Visit Mannah?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 font-light">
            Plan your journey to Bali's most inspiring creative city. Tickets available online.
          </p>
          {/* "Get Your Ticket" → contact page */}
          <button onClick={() => navigate('contact')} className={btnGreen}>
            Get Your Ticket
          </button>
        </div>
      </section>
    </>
  );

  /* ═══════════════════════════════════
       CONTACT PAGE
  ═══════════════════════════════════ */
  const renderContact = () => (
    <>
      {/* Contact Hero */}
      <section className="relative w-full h-[65vh] min-h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1542640244-7e672d6cb466?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Bamboo forest path" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 pt-16">
          <span className="text-[#5E9B4A] text-xs md:text-sm font-bold tracking-widest uppercase mb-4 animate-fade-up" style={{animationDelay:'0.1s'}}>Get In Touch</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-up" style={{animationDelay:'0.2s'}}>
            Let's Start a <br className="md:hidden" /><span className="font-serif italic font-normal text-gray-200">Conversation</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-light animate-fade-up" style={{animationDelay:'0.3s'}}>
            Whether you're looking to rent, visit, or build something together — we're here for it.
          </p>
        </div>
      </section>

      {/* What brings you here */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
        <div className="text-center mb-16">
          <span className="text-[#5E9B4A] text-sm font-bold tracking-widest uppercase mb-4 block">How Can We Help?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">What brings you here?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { Icon: Home,      bg: '#eaf4eb', color: '#5E9B4A', title: 'Property Rental',      text: 'Interested in renting a villa or space at Mannah Creative Village? We would love to host you.' },
            { Icon: Eye,       bg: '#fdf4e8', color: '#d99b48', title: 'Property Viewing',     text: 'Schedule a guided tour of our available properties and experience the village firsthand.' },
            { Icon: Handshake, bg: '#f4f0ec', color: '#7d6b5d', title: 'Business Partnership', text: 'Explore collaboration opportunities — from co-creation to investment and brand partnerships.' },
          ].map(({ Icon, bg, color, title, text }) => (
            <div key={title} className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110" style={{ background: bg }}>
                <Icon style={{ color }} size={20} />
              </div>
              <h3 className="text-xl font-bold mb-4">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form & Info */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form */}
          <div className="lg:col-span-7 xl:col-span-8 bg-white p-8 md:p-12 rounded-[2rem] shadow-sm">
            <h2 className="text-3xl font-bold mb-2">Send Us an Inquiry</h2>
            <p className="text-gray-600 mb-10 text-sm">Fill in the form and our team will get back to you within 1-2 business days.</p>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Your full name" className="w-full bg-[#f9f8f4] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#5E9B4A] focus:ring-2 focus:ring-[#5E9B4A]/20 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" placeholder="your@email.com" className="w-full bg-[#f9f8f4] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#5E9B4A] focus:ring-2 focus:ring-[#5E9B4A]/20 transition-all" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input type="tel" placeholder="+62 xxx xxxx xxxx" className="w-full bg-[#f9f8f4] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#5E9B4A] focus:ring-2 focus:ring-[#5E9B4A]/20 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Inquiry Type <span className="text-red-500">*</span></label>
                  <select className="w-full bg-[#f9f8f4] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#5E9B4A] focus:ring-2 focus:ring-[#5E9B4A]/20 transition-all appearance-none text-gray-600">
                    <option>Select inquiry type</option>
                    <option>Property Rental</option>
                    <option>Property Viewing</option>
                    <option>Business Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Preferred Visit Date</label>
                <input type="date" className="w-full bg-[#f9f8f4] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#5E9B4A] focus:ring-2 focus:ring-[#5E9B4A]/20 transition-all text-gray-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Your Message <span className="text-red-500">*</span></label>
                <textarea rows="5" placeholder="Tell us more about what you're looking for..." className="w-full bg-[#f9f8f4] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#5E9B4A] focus:ring-2 focus:ring-[#5E9B4A]/20 transition-all resize-none"></textarea>
                <div className="text-right text-xs text-gray-400 mt-2">Max 500 characters</div>
              </div>
              <button type="button" className="w-full bg-[#1e2a24] text-white py-4 rounded-xl font-medium transition-all duration-300 hover:bg-[#5E9B4A] hover:scale-[1.01] hover:shadow-md active:scale-95">
                Send Inquiry
              </button>
            </div>
          </div>

          {/* Info & FAQ */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
            <div className="bg-[#1c2b26] text-white p-8 md:p-10 rounded-[2rem]">
              <h3 className="text-2xl font-bold mb-8">Visit Us</h3>
              <div className="space-y-8">
                {[
                  { Icon: MapPin,    label: 'Address',      content: 'Jalan Kedondong, Denpasar,\nBali, Indonesia', isLink: false },
                  { Icon: Clock,     label: 'Office Hours', content: 'Monday – Friday\n9:00 AM – 5:00 PM WITA', isLink: false },
                  { Icon: Mail,      label: 'Email',        content: 'hello@mannahvillage.com', isLink: true, href: 'mailto:hello@mannahvillage.com' },
                  { Icon: Instagram, label: 'Follow Us',    content: '@mannahvillage', isLink: true, href: '#' },
                ].map(({ Icon, label, content, isLink, href }) => (
                  <div key={label} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-[#2b3a35] rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#3d5248] group-hover:scale-110">
                      <Icon className="text-[#5E9B4A]" size={18} />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 tracking-widest uppercase mb-1 block">{label}</span>
                      {isLink
                        ? <a href={href} className="text-sm text-gray-200 hover:text-white hover:underline transition-colors">{content}</a>
                        : <p className="text-sm text-gray-200 leading-relaxed whitespace-pre-line">{content}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm">
              <h3 className="text-xl font-bold mb-6">Frequently Asked</h3>
              <div className="space-y-2">
                {[
                  { id: 1, q: 'How do I schedule a property viewing?',       a: 'You can schedule a property viewing by selecting "Property Viewing" in the inquiry form above and choosing your preferred date. Our team will contact you to confirm the appointment.' },
                  { id: 2, q: 'What rental options are available?',           a: 'We offer both short-term stays (nightly/weekly) and long-term residential leases. Check our Stay page for current availability.' },
                  { id: 3, q: 'What types of business partnerships do you consider?', a: 'We are open to brand collaborations, wellness retreat hostings, culinary pop-ups, and sustainable technology integrations.' },
                  { id: 4, q: 'How long does it take to receive a response?', a: 'Our dedicated team aims to respond to all inquiries within 1-2 business days.' },
                ].map((faq) => (
                  <div key={faq.id} className="border-b border-gray-100 pb-2 last:border-0">
                    <button
                      onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                      className="w-full flex justify-between items-center py-4 text-left group focus:outline-none"
                    >
                      <span className="text-sm font-medium text-gray-800 pr-4 group-hover:text-[#5E9B4A] transition-colors">{faq.q}</span>
                      <Plus size={16} className={`text-[#5E9B4A] shrink-0 transition-transform duration-300 ${openFaq === faq.id ? 'rotate-45' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === faq.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="pb-4 text-sm text-gray-600 leading-relaxed pr-6">{faq.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  /* ─── Page content wrapper animation ─── */
  const pageStyle = {
    opacity:   phase === 'exit' ? 0 : 1,
    transform: phase === 'exit' ? 'translateY(12px)' : phase === 'enter' ? 'translateY(0)' : 'translateY(0)',
    transition: 'opacity 0.3s ease, transform 0.3s ease',
  };

  return (
    <>
      {/* Keyframe animations injected once */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.6s ease both;
        }
      `}</style>

      <div className="min-h-screen bg-[#F9F8F4] text-[#1a1a1a] font-sans antialiased overflow-x-hidden">

        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#F9F8F4]/95 backdrop-blur-md shadow-sm py-4' : 'bg-[#F9F8F4] py-6'}`}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => navigate('home')}>
              <svg width="40" height="30" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black transition-transform duration-300 group-hover:scale-110">
                <path d="M10 20 L50 40 L90 20 L90 30 L50 50 L10 30 Z" fill="currentColor"/>
                <path d="M30 10 L50 20 L70 10 L70 20 L50 30 L30 20 Z" fill="currentColor"/>
              </svg>
              <span className="font-bold text-xl tracking-tight hidden sm:block">Mannah</span>
            </div>

            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <button 
                  key={link.id}
                  onClick={() => navigate(link.id)}
                  className={`relative font-medium transition-colors duration-200 group ${currentPage === link.id ? 'text-black' : 'text-gray-600 hover:text-black'}`}
                >
                  {link.label}
                  <span className={`absolute -bottom-2 left-1/2 h-1.5 rounded-full bg-[#5E9B4A] transform -translate-x-1/2 transition-all duration-300 ${currentPage === link.id ? 'w-1.5' : 'w-0 group-hover:w-1.5 group-hover:opacity-60'}`}></span>
                </button>
              ))}
            </div>

            <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`absolute top-full left-0 w-full bg-[#F9F8F4] shadow-lg py-4 px-6 flex flex-col gap-4 md:hidden border-t border-gray-200 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => { navigate(link.id); setIsMobileMenuOpen(false); }}
                className={`text-left text-lg transition-colors hover:text-[#5E9B4A] ${currentPage === link.id ? 'font-bold text-black' : 'text-gray-600'}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main 
          style={pageStyle}
          className={displayPage !== 'home' ? "pt-0" : "pt-24 md:pt-32"}
        >
          {displayPage === 'home'    && renderHome()}
          {displayPage === 'stay'    && renderStay()}
          {displayPage === 'visit'   && renderVisit()}
          {displayPage === 'contact' && renderContact()}
        </main>

        {/* Footer */}
        <footer className="bg-[#F9F8F4] pt-24 pb-8 border-t border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="mb-16">
              <div className="flex items-center gap-2 mb-8 cursor-pointer group" onClick={() => navigate('home')}>
                <svg width="40" height="30" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black transition-transform duration-300 group-hover:scale-110">
                  <path d="M10 20 L50 40 L90 20 L90 30 L50 50 L10 30 Z" fill="currentColor"/>
                  <path d="M30 10 L50 20 L70 10 L70 20 L50 30 L30 20 Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="mb-8">
                <p className="text-gray-600 leading-relaxed max-w-xs">
                  Jalan Kedondong, Denpasar,<br />Bali, Indonesia
                </p>
              </div>
              <div className="mb-10">
                <p className="text-sm text-gray-500 mb-2">General inquiries & business</p>
                <button onClick={() => navigate('contact')} className="font-medium hover:text-[#5E9B4A] hover:underline underline-offset-4 decoration-2 transition-colors">Contact us</button>
              </div>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: '#' },
                  { icon: Linkedin,  href: '#' },
                  { icon: Youtube,   href: '#' },
                ].map(({ icon: Icon, href }, i) => (
                  <a key={i} href={href} className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 transition-all duration-300 hover:border-black hover:text-black hover:scale-110 hover:shadow-sm">
                    <Icon size={18} />
                  </a>
                ))}
                <a href="#" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 transition-all duration-300 hover:border-black hover:text-black hover:scale-110 hover:shadow-sm font-bold text-sm">tk</a>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
              <p>Copyright Mannah Village</p>
              <div className="flex gap-6">
                <p>© 2025 Mannah Inc.</p>
                <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
