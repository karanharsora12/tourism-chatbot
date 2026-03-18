import React from "react";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  MapPin,
  Calendar,
  Compass,
  ChevronRight,
} from "lucide-react";

const PLACES = [
  {
    id: 1,
    name: "Statue of Unity",
    location: "Kevadia",
    bestTime: "Oct to March",
    image: "/images/statue_of_unity_1773853258842.png",
    description:
      "The world's tallest statue, dedicated to the Indian independence activist Sardar Vallabhbhai Patel.",
  },
  {
    id: 2,
    name: "Rann of Kutch",
    location: "Kutch",
    bestTime: "Nov to Feb",
    image: "/images/rann_of_kutch_1773853276001.png",
    description:
      "A large area of salt marshes that span the borders between India and Pakistan in Gujarat.",
  },
  {
    id: 3,
    name: "Gir National Park",
    location: "Talala Gir",
    bestTime: "Dec to March",
    image: "/images/gir_national_park_1773853294971.png",
    description:
      "The only place in the world where you can spot the Asiatic Lion in the wild.",
  },
  {
    id: 4,
    name: "Dwarkadhish Temple",
    location: "Dwarka",
    bestTime: "Oct to March",
    image: "/images/dwarkadhish_temple_1773853319667.png",
    description:
      "An important Hindu pilgrimage site, part of the Char Dham yatra, dedicated to Lord Krishna.",
  },
  {
    id: 5,
    name: "Somnath Temple",
    location: "Prabhas Patan",
    bestTime: "Sep to March",
    image: "/images/somnath_temple_1773853341589.png",
    description:
      "First among the twelve Jyotirlinga shrines of Shiva, located on the western coast of Gujarat.",
  },
  {
    id: 6,
    name: "Champaner",
    location: "Panchmahal",
    bestTime: "Oct to Feb",
    image: "/images/champaner_1773853361995.png",
    description:
      "A UNESCO World Heritage Site featuring palaces, mosques, and forts dating back to the 8th century.",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="/images/hero_bg_gujarat_1773853379592.png"
          alt="Gujarat"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg tracking-tight">
            Discover <span className="text-amber-400">Gujarat</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-10 drop-shadow-md font-light">
            Embark on a journey through vibrant cultures, untouched landscapes,
            and ancient histories.
          </p>
          <Link
            to="/chat"
            className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white transition-colors bg-emerald-600 rounded-full hover:bg-emerald-500"
          >
            <MessageSquare className="w-4 h-4" />
            Ask AI Assistant
          </Link>
        </div>
      </div>

      {/* Destinations Section */}
      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-3 flex items-center justify-center gap-2">
            <Compass className="w-5 h-5" /> Explore
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900">
            Top Destinations
          </h3>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Experience the architectural grandeur, wildlife safaris, and
            spiritual awakening that makes Gujarat truly incredible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PLACES.map((place) => (
            <div
              key={place.id}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col h-[420px]"
            >
              <div className="relative h-64 overflow-hidden w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out"
                />

                {/* Overlay details */}
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                  {place.bestTime}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 z-20 relative bg-white">
                <div className="flex items-center gap-1.5 text-emerald-600 text-sm font-medium mb-2">
                  <MapPin className="w-4 h-4" />
                  {place.location}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  {place.name}
                </h4>
                <p className="text-slate-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                  {place.description}
                </p>
                <div className="mt-auto flex items-center text-emerald-600 font-semibold group-hover:text-amber-500 transition-colors">
                  <span className="text-sm">Explore Details</span>
                  <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-32 relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-emerald-900 z-0"></div>
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
            src="/images/hero_bg_gujarat_1773853379592.png"
            alt="Pattern"
          />
          <div className="relative z-10 py-16 px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:max-w-xl text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to plan your trip?
              </h3>
              <p className="text-lg text-emerald-100">
                Tell our AI assistant what you like, and get a personalized
                itinerary for your Gujarat adventure in seconds.
              </p>
            </div>
            <Link
              to="/chat"
              className="bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-lg shadow-white/20 whitespace-nowrap"
            >
              Start Planning Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
