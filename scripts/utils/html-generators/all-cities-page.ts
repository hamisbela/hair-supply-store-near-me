import { City } from '../models.js';
import { pageWrapper, getCityUrl } from './layout.js';

export function generateAllCitiesPage(cities: City[]): string {
  // Sort cities alphabetically
  const sortedCities = [...cities]
    .filter(city => city.salonCount && city.salonCount > 0)
    .sort((a, b) => {
      // First sort by state
      const stateA = a.state?.state || '';
      const stateB = b.state?.state || '';
      const stateCompare = stateA.localeCompare(stateB);
      
      // If states are the same, sort by city name
      if (stateCompare === 0) {
        return a.city.localeCompare(b.city);
      }
      
      return stateCompare;
    });
  
  // Group cities by state
  const citiesByState = sortedCities.reduce((acc, city) => {
    const stateName = city.state?.state || 'Unknown';
    if (!acc[stateName]) {
      acc[stateName] = [];
    }
    acc[stateName].push(city);
    return acc;
  }, {} as Record<string, City[]>);
  
  // Get list of states with cities
  const statesWithCities = Object.keys(citiesByState).sort();
  
  // Build meta description
  const metaDescription = "Browse hair supply stores by city. Find beauty supply shops with professional hair products in cities across the United States.";

  // Calculate total listings
  const totalListings = cities.reduce((sum, city) => sum + (city.salonCount || 0), 0);
  const totalCities = sortedCities.length;

  // Format the main content
  const content = `
  <main class="container mx-auto px-4 py-6">
    <header class="mb-12 text-center">
      <h1 class="text-4xl font-bold text-indigo-900">
        Browse Hair Supply Stores by City
      </h1>
      <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
        Find professional hair supply stores in cities across the United States. Browse by city to discover beauty supply shops in your area.
      </p>
      <div class="mt-2 text-indigo-600 font-medium">
        <span class="inline-flex items-center">
          <i class="fas fa-list-ul mr-2"></i>
          ${totalListings} listing${totalListings !== 1 ? 's' : ''} across ${totalCities} cities
        </span>
      </div>
    </header>

    <div class="bg-white p-8 rounded-lg shadow-md mb-12">
      <h2 class="text-2xl font-bold text-indigo-800 mb-6">All Cities with Hair Supply Stores</h2>
      
      <div class="space-y-8">
        ${statesWithCities.map(stateName => {
          const stateCities = citiesByState[stateName];
          
          return `
          <div>
            <h3 class="text-xl font-bold text-indigo-700 mb-4 border-b border-gray-200 pb-2">${stateName}</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              ${stateCities.map(city => {
                const citySlug = city.slug || '';
                const listingsCount = city.salonCount || 0;
                
                return `
                <a href="${getCityUrl(citySlug)}" class="block bg-gray-50 p-3 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
                  <h4 class="font-semibold text-indigo-700">${city.city}</h4>
                  <p class="text-xs text-gray-500 mt-1">${listingsCount} listing${listingsCount !== 1 ? 's' : ''}</p>
                </a>
              `}).join('')}
            </div>
          </div>
        `}).join('')}
      </div>
    </div>

    <div class="bg-indigo-50 p-8 rounded-lg">
      <h2 class="text-2xl font-bold text-indigo-800 mb-4">Choosing a Hair Supply Store in Your City</h2>
      <p class="text-gray-700 mb-4">
        When selecting a hair supply store in your city, consider their product selection, brand variety, and customer reviews. Professional beauty supply stores should offer high-quality products for all hair types and needs.
      </p>
      <p class="text-gray-700 mb-4">
        Many stores have knowledgeable staff who can provide personalized recommendations based on your hair type and styling goals. This expertise is especially valuable when purchasing professional-grade products.
      </p>
      <p class="text-gray-700">
        Browse our city listings to find quality hair supply stores near you. Visit them directly to explore their selection of products, tools, and accessories for all your hair care needs.
      </p>
    </div>
  </main>`;

  return pageWrapper("Browse Hair Supply Stores by City - National Directory", metaDescription, content);
}