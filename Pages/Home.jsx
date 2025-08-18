
import React, { useState } from 'react';
import { Wifi, Zap, MapPin, ExternalLink, Star, Coffee, Users, Clock, Phone, Calendar } from 'lucide-react';

// Utilities
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// Menu data
const menuItems = [
  {
    id: 1,
    name: "Iced Spanish Latte",
    price: "₱175",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop",
    badges: ["Signature", "Cold Brew"],
    category: "drinks"
  },
  {
    id: 2,
    name: "Fresh Fruit Juice",
    price: "₱145",
    image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop",
    badges: ["Fresh Daily", "Vitamin C"],
    category: "drinks"
  },
  {
    id: 3,
    name: "Beef Bulgogi",
    price: "₱325",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/234c092ca_image.png",
    badges: ["High Protein", "Signature"],
    category: "mains"
  }
];

const branches = [
  {
    id: 1,
    name: "North Commons",
    address: "Ground Floor, Phase 2, Vistamall Del Rosario, Naga City",
    hours: "10:00 AM - 09:00 PM",
    status: "Open"
  },
  {
    id: 2,
    name: "Evia Lifestyle Center",
    address: "Phase 2, Level 1, Vistamall Iloilo, Brgy. Polo Maestra Bita",
    hours: "09:00 AM - 08:00 PM",
    status: "Open"
  },
  {
    id: 3,
    name: "NOMO",
    address: "CT Montalban, Brgy Villa Kananga, Butuan City",
    hours: "07:00 AM - 09:00 PM",
    status: "Open"
  }
];

// Service data
const services = [
  { icon: Wifi, label: "Free Wi-Fi", desc: "Lorem ipsum dolor sit amet consectetur" },
  { icon: Zap, label: "Power Outlets", desc: "Lorem ipsum dolor sit amet consectetur" },
  { icon: Users, label: "Clean Restrooms", desc: "Lorem ipsum dolor sit amet consectetur" }
];

// Components
const Hero = () => (
  <section className="relative min-h-screen bg-gradient-to-br from-sage-base via-cream to-sage-base overflow-hidden">
    <div className="absolute inset-0 bg-pattern opacity-40"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-3">
            <img src="/logo.png" alt="Dear Joe logo" className="w-14 h-14 rounded-xl object-cover shadow-sm" />
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-forest font-montserrat leading-tight">
                Dear Joe
              </h1>
              <p className="text-lg text-forest/80 font-montserrat font-medium">Coffee & Juice</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl lg:text-3xl font-semibold text-ink font-montserrat leading-relaxed">
              Fresh, cozy, and always welcoming.
            </h2>
            <p className="text-lg text-ink/70 font-inter leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => scrollToSection('menu')} className="bg-forest text-cream px-8 py-4 rounded-2xl font-semibold font-inter text-lg hover:bg-forest/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              View Menu
            </button>
            <button onClick={() => scrollToSection('branches')} className="border-2 border-forest text-forest px-8 py-4 rounded-2xl font-semibold font-inter text-lg hover:bg-forest hover:text-cream transition-all duration-300 hover:scale-105">
              Find a Branch
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-[4/5] bg-cream rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=750&fit=crop"
              alt="Dear Joe café interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent-yellow rounded-full flex items-center justify-center transform -rotate-12 shadow-lg">
            <Coffee className="w-8 h-8 text-forest" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="py-20 bg-cream">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-sage-base">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-sage-base rounded-full px-4 py-2">
            <Users className="w-5 h-5 text-forest" />
            <span className="font-semibold text-forest font-inter">Community</span>
          </div>
          
          <h3 className="text-3xl lg:text-4xl font-bold text-ink font-montserrat leading-tight">
            Lorem ipsum dolor sit amet
          </h3>
          
          <p className="text-lg text-ink/70 font-inter leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 pt-6">
            <div className="flex items-center space-x-2 text-forest">
              <Wifi className="w-5 h-5" />
              <span className="font-medium font-inter">Free Wi-Fi</span>
            </div>
            <div className="flex items-center space-x-2 text-forest">
              <Zap className="w-5 h-5" />
              <span className="font-medium font-inter">Power Outlets</span>
            </div>
            <div className="flex items-center space-x-2 text-forest">
              <MapPin className="w-5 h-5" />
              <span className="font-medium font-inter">Always Welcoming</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MenuHighlights = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  
  return (
    <section id="menu" className="py-20 bg-sage-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h3 className="text-3xl lg:text-4xl font-bold text-forest font-montserrat">
            Our Signature Drinks & More
          </h3>
          <p className="text-lg text-forest/70 font-inter max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:ring-4 hover:ring-leaf/20 group ${
                item.category === 'drinks' && index < 2 ? 'md:scale-110 ring-2 ring-accent-yellow/30' : ''
              }`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 right-4 bg-accent-yellow rounded-full p-2 transform rotate-12 group-hover:rotate-0 transition-transform duration-300`}>
                  <Coffee className="w-4 h-4 text-forest" />
                </div>
                {item.category === 'drinks' && index < 2 && (
                  <div className="absolute top-4 left-4 bg-forest text-cream text-xs px-3 py-1 rounded-full font-bold">
                    HERO DRINK
                  </div>
                )}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {item.badges.map((badge, badgeIndex) => (
                    <span 
                      key={badgeIndex}
                      className="bg-forest/90 text-cream text-xs px-2 py-1 rounded-full font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="font-bold text-lg text-ink font-montserrat mb-2 group-hover:text-forest transition-colors">
                  {item.name}
                </h4>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-forest font-montserrat">
                    {item.price}
                  </span>
                  <button onClick={() => scrollToSection('order')} className={`${
                    item.category === 'drinks' ? 'bg-accent-yellow text-forest' : 'bg-sage-base text-forest'
                  } px-4 py-2 rounded-xl font-semibold hover:bg-leaf hover:text-white transition-all duration-300`}>
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 space-y-4">
          <p className="text-forest/70 font-inter text-sm">
            Our signature drinks are crafted fresh daily with premium ingredients
          </p>
          <button onClick={() => scrollToSection('menu')} className="bg-forest text-cream px-6 py-3 rounded-xl font-semibold hover:bg-forest/90 transition-all duration-300">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

const Services = () => (
  <section className="py-16 bg-cream">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h3 className="text-2xl lg:text-3xl font-bold text-ink font-montserrat mb-8">
        Stay a while
      </h3>
      
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div key={index} className="space-y-4 group">
              <div className="w-16 h-16 bg-sage-base rounded-2xl flex items-center justify-center mx-auto group-hover:bg-leaf group-hover:scale-110 transition-all duration-300">
                <IconComponent className="w-8 h-8 text-forest group-hover:text-white" />
              </div>
              <h4 className="font-bold text-lg text-ink font-montserrat">
                {service.label}
              </h4>
              <p className="text-ink/70 font-inter">
                {service.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const OrderOnline = () => (
  <section id="order" className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="space-y-6">
        <h3 className="text-3xl lg:text-4xl font-bold text-ink font-montserrat">
          Order your favorites, delivered
        </h3>
        <p className="text-lg text-ink/70 font-inter max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <a 
            href="https://www.foodpanda.ph/"
            target="_blank" rel="noopener noreferrer"
            className="bg-pink-600 text-white px-8 py-4 rounded-2xl font-semibold font-inter text-lg hover:bg-pink-700 transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center space-x-3"
          >
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/2363cf9cb_image.png" 
              alt="Foodpanda" 
              className="w-8 h-8 bg-white rounded-lg p-1"
            />
            <span>Foodpanda</span>
          </a>
          
          <a 
            href="https://www.grab.com/ph/food/"
            target="_blank" rel="noopener noreferrer"
            className="bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold font-inter text-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center space-x-3"
          >
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/87e317cb2_image.png" 
              alt="GrabFood" 
              className="w-8 h-8 bg-white rounded-lg p-1"
            />
            <span>GrabFood</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const ReservationSection = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', guests: 2, notes: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
    }, 1200);
  };

  return (
    <section id="reserve" className="py-20 bg-sage-base">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-sage-base rounded-full px-4 py-2">
              <Calendar className="w-5 h-5 text-forest" />
              <span className="font-semibold text-forest font-inter">Reserve</span>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-ink font-montserrat leading-tight">
              Make a Reservation
            </h3>
            
            <p className="text-lg text-ink/70 font-inter leading-relaxed max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a href="tel:+631234567890" className="bg-forest text-cream px-8 py-4 rounded-2xl font-semibold font-inter text-lg hover:bg-forest/90 transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>Call to Reserve</span>
              </a>
              <button onClick={() => setOpen(true)} className="border-2 border-forest text-forest px-8 py-4 rounded-2xl font-semibold font-inter text-lg hover:bg-forest hover:text-cream transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-3">
                <Calendar className="w-5 h-5" />
                <span>Book Online</span>
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-sage-base rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-forest" />
                </div>
                <h4 className="font-bold text-ink font-montserrat mb-1">Call Us</h4>
                <p className="text-ink/70 font-inter text-sm">+63 123 456 7890</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-sage-base rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-forest" />
                </div>
                <h4 className="font-bold text-ink font-montserrat mb-1">Book Ahead</h4>
                <p className="text-ink/70 font-inter text-sm">Reserve your table online</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-sage-base rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-forest" />
                </div>
                <h4 className="font-bold text-ink font-montserrat mb-1">Walk-ins</h4>
                <p className="text-ink/70 font-inter text-sm">Welcome anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-bold text-ink font-montserrat">Book a Table</h4>
              <button onClick={() => setOpen(false)} className="text-ink/60 hover:text-ink">✕</button>
            </div>
            {submitted ? (
              <div className="text-center py-6">
                <p className="text-forest font-semibold font-inter">Reservation submitted! We will confirm shortly.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
                <input name="name" required value={form.name} onChange={onChange} placeholder="Full Name" className="border border-sage-base rounded-xl px-4 py-3 outline-none focus:ring-2 ring-leaf" />
                <input name="phone" required value={form.phone} onChange={onChange} placeholder="Phone Number" className="border border-sage-base rounded-xl px-4 py-3 outline-none focus:ring-2 ring-leaf" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="date" name="date" required value={form.date} onChange={onChange} className="border border-sage-base rounded-xl px-4 py-3 outline-none focus:ring-2 ring-leaf" />
                  <input type="time" name="time" required value={form.time} onChange={onChange} className="border border-sage-base rounded-xl px-4 py-3 outline-none focus:ring-2 ring-leaf" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input type="number" min="1" max="20" name="guests" value={form.guests} onChange={onChange} className="border border-sage-base rounded-xl px-4 py-3 outline-none focus:ring-2 ring-leaf" placeholder="Guests" />
                  <input name="notes" value={form.notes} onChange={onChange} className="border border-sage-base rounded-xl px-4 py-3 outline-none focus:ring-2 ring-leaf" placeholder="Notes (optional)" />
                </div>
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button type="button" onClick={() => setOpen(false)} className="px-4 py-2 rounded-xl border-2 border-forest text-forest hover:bg-forest hover:text-cream transition-colors">Cancel</button>
                  <button type="submit" className="px-5 py-2 rounded-xl bg-forest text-cream hover:bg-forest/90">Submit</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

const BranchLocator = () => {
  const [selectedBranch, setSelectedBranch] = useState(0);
  
  return (
    <section id="branches" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h3 className="text-3xl lg:text-4xl font-bold text-forest font-montserrat">
            Find Your Nearest Dear Joe
          </h3>
          <p className="text-lg text-forest/70 font-inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="relative">
            <div className="aspect-[4/3] bg-white rounded-3xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.8172099797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f4a315%3A0x33c5d3a1b0e6f8a5!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sph!4v1699123456789!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-3xl"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            {branches.map((branch, index) => (
              <div
                key={branch.id}
                className={`bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  selectedBranch === index 
                    ? 'ring-4 ring-leaf shadow-xl scale-105' 
                    : 'shadow-lg hover:shadow-xl hover:scale-102'
                }`}
                onClick={() => setSelectedBranch(index)}
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-lg text-ink font-montserrat">
                    {branch.name}
                  </h4>
                  <span className="bg-leaf text-white text-xs px-2 py-1 rounded-full font-semibold">
                    {branch.status}
                  </span>
                </div>
                
                <p className="text-ink/70 font-inter mb-2">
                  {branch.address}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2 text-forest">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium font-inter text-sm">
                      {branch.hours}
                    </span>
                  </div>
                  
                  <button onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`, '_blank', 'noopener')} className="text-forest hover:text-leaf transition-colors inline-flex items-center space-x-1 font-semibold text-sm">
                    <span>Open in Maps</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white border-t border-leaf">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Dear Joe logo" className="w-12 h-12 rounded-xl object-cover shadow-sm" />
            <div>
              <h4 className="font-bold text-forest font-montserrat text-lg">Dear Joe</h4>
              <p className="text-forest/70 font-inter text-sm">Coffee & Juice</p>
            </div>
          </div>
          <p className="text-ink/70 font-inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-bold text-ink font-montserrat">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-sage-base rounded-xl flex items-center justify-center text-forest hover:bg-leaf hover:text-white transition-colors">
              <span className="font-bold">f</span>
            </a>
            <a href="#" className="w-10 h-10 bg-sage-base rounded-xl flex items-center justify-center text-forest hover:bg-leaf hover:text-white transition-colors">
              <span className="font-bold">@</span>
            </a>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-bold text-ink font-montserrat">Contact</h4>
          <p className="text-ink/70 font-inter">
            hello@dearjoe.ph
          </p>
          <p className="text-ink/70 font-inter">
            +63 123 456 7890
          </p>
        </div>
      </div>
      
      <div className="border-t border-sage-base mt-8 pt-8 text-center">
        <p className="text-ink/70 font-inter">
          © 2024 Dear Joe Coffee & Juice. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <MenuHighlights />
      <Services />
      <OrderOnline />
      <ReservationSection />
      <BranchLocator />
      <Footer />
    </div>
  );
}
