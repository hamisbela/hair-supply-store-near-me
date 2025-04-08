import React from 'react';
import { Helmet } from 'react-helmet';
import { Search, Users, TrendingUp, Star, Scissors, Info, MapPin, Phone } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Hair Supply Store Near Me | Our Mission & Services</title>
        <meta name="description" content="Learn about HairSupplyStoreNearMe.com, the premier resource for finding professional hair supply stores and beauty shops in your local area." />
      </Helmet>

      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-900">About HairSupplyStoreNearMe.com</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Your comprehensive resource for finding quality hair supply stores and beauty shops in your local area
          </p>
        </header>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At HairSupplyStoreNearMe.com, our mission is to connect individuals seeking quality hair care products with professional beauty supply stores in their local area. We believe everyone deserves access to professional-grade hair products and tools from shops that understand their specific needs.
            </p>
            <p className="text-gray-700">
              We've created the most comprehensive online directory of hair supply stores, making it easy to find the right shop near you. Our platform allows you to browse listings by location, read detailed business profiles, and make informed decisions about where to purchase your hair care products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-indigo-800 mb-4">For Customers</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Search className="text-indigo-600 mt-1 mr-3" size={20} />
                  <span>Find quality hair supply stores in your local area</span>
                </li>
                <li className="flex items-start">
                  <Info className="text-indigo-600 mt-1 mr-3" size={20} />
                  <span>Access detailed store profiles with products, brands, and contact information</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="text-indigo-600 mt-1 mr-3" size={20} />
                  <span>Browse by location to find convenient options near you</span>
                </li>
                <li className="flex items-start">
                  <Phone className="text-indigo-600 mt-1 mr-3" size={20} />
                  <span>Connect directly with beauty supply stores</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-indigo-800 mb-4">For Businesses</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Search className="text-indigo-600 mt-1 mr-3" size={20} />
                  <span>Increase your online visibility to potential customers</span>
                </li>
                <li className="flex items-start">
                  <Users className="text-indigo-600 mt-1 mr-3" size={20} />
                  <span>Showcase your products, brands, and business details</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="text-indigo-600 mt-1 mr-3" size={20} />
                  <span>Grow your customer base with targeted exposure</span>
                </li>
                <li className="flex items-start">
                  <Star className="text-indigo-600 mt-1 mr-3" size={20} />
                  <span>Stand out in a specialized, niche directory</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Why Hair Supply Stores Matter</h2>
            <p className="text-gray-700 mb-4">
              Hair supply stores provide access to professional-grade products that are often not available in regular retail stores. These specialty shops offer a wide range of high-quality hair care products, tools, and accessories designed for both professionals and consumers.
            </p>
            <p className="text-gray-700 mb-4">
              Professional beauty supply stores stock products for all hair types and styling needs, from shampoos and conditioners to specialized styling tools, hair color, extensions, and more. Their staff members typically have extensive knowledge about hair care and can provide valuable recommendations.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">Professional Hair Supply Stores</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Scissors className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Professional-grade products</span>
                  </li>
                  <li className="flex items-start">
                    <Scissors className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Extensive product selection</span>
                  </li>
                  <li className="flex items-start">
                    <Scissors className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Expert staff knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <Scissors className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Specialized tools and equipment</span>
                  </li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">Regular Retail Stores</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Scissors className="text-gray-500 mt-1 mr-2" size={16} />
                    <span>Limited selection of brands</span>
                  </li>
                  <li className="flex items-start">
                    <Scissors className="text-gray-500 mt-1 mr-2" size={16} />
                    <span>Fewer specialized products</span>
                  </li>
                  <li className="flex items-start">
                    <Scissors className="text-gray-500 mt-1 mr-2" size={16} />
                    <span>Less expertise from staff</span>
                  </li>
                  <li className="flex items-start">
                    <Scissors className="text-gray-500 mt-1 mr-2" size={16} />
                    <span>Basic consumer-grade tools</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              HairSupplyStoreNearMe.com was founded by a team of digital marketing professionals who recognized the need for a specialized platform connecting hair supply stores with customers seeking quality hair products in their local communities.
            </p>
            <p className="text-gray-700 mb-4">
              After speaking with both store owners and customers, we discovered a gap in the market for a dedicated, comprehensive resource focused specifically on beauty supply stores. Many quality shops were difficult to find online, and customers struggled to locate professional-grade products in their areas.
            </p>
            <p className="text-gray-700">
              Today, HairSupplyStoreNearMe.com is the premier online resource for hair supply stores across the United States. We continue to expand our listings and improve our platform to better serve both beauty supply shops and their customers.
            </p>
          </div>
          
          <div className="bg-indigo-900 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Directory</h2>
            <p className="text-lg mb-6">
              Are you a hair supply store owner? Add your business to our directory and connect with potential customers in your area today.
            </p>
            <a href="/add-a-listing/" className="inline-block bg-white text-indigo-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Add Your Listing
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;