import { City } from '../models.js';
import { pageWrapper, generateBreadcrumbs, generateListingsGrid, getStateUrl } from './layout.js';

export function generateCityPage(city: City): string {
  const stateName = city.state?.state || 'Unknown State';
  const stateSlug = city.state?.slug || '';
  const salons = city.salons || [];
  const salonCount = city.salonCount || salons.length;
  
  // Build meta description
  const metaDescription = `Find hair supply stores in ${city.city}, ${stateName}. Browse our listings of top-rated beauty supply shops with professional hair products.`;

  const breadcrumbs = generateBreadcrumbs([
    { label: 'Home', url: '/' },
    { label: stateName, url: getStateUrl(stateSlug) },
    { label: city.city }
  ]);

  // Format the main content
  const content = `
  ${breadcrumbs}
  
  <main class="container mx-auto px-4 py-6">
    <header class="mb-12 text-center">
      <h1 class="text-4xl font-bold text-indigo-900">
        Hair Supply Stores in ${city.city}, ${stateName}
      </h1>
      <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
        Find professional hair supply stores in ${city.city}. Browse our comprehensive directory of local beauty supply shops.
      </p>
      <div class="mt-2 text-indigo-600 font-medium">
        <span class="inline-flex items-center">
          <i class="fas fa-list-ul mr-2"></i>
          ${salonCount} listing${salonCount !== 1 ? 's' : ''} found
        </span>
      </div>
    </header>

    ${salons.length > 0 
      ? generateListingsGrid(salons, `Hair Supply Stores in ${city.city}`)
      : `
        <div class="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 class="text-2xl font-bold text-indigo-800 mb-4">No Listings Found</h2>
          <p class="text-gray-600 mb-6">We couldn't find any hair supply stores in ${city.city} at this time.</p>
          <a href="/add-a-listing/" class="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
            Add Your Business
          </a>
        </div>
      `
    }

    <div class="mt-16 bg-indigo-50 p-8 rounded-lg">
      <h2 class="text-2xl font-bold text-indigo-800 mb-4">About Hair Supply Stores in ${city.city}</h2>
      <p class="text-gray-700 mb-4">
        Hair supply stores offer a comprehensive selection of professional-grade hair care products, styling tools, and accessories. ${city.city}, ${stateName} is home to a range of quality beauty supply shops to help you achieve your desired hairstyle.
      </p>
      <p class="text-gray-700 mb-4">
        Professional beauty supply stores in ${city.city} provide access to high-quality brands and specialized products that may not be available in regular retail stores. Their knowledgeable staff can offer expert advice for all hair types and styling needs.
      </p>
      <p class="text-gray-700">
        Browse our listings to find hair supply stores in ${city.city}. Visit them directly to explore their selection of products, brands, and to get personalized recommendations for your hair care needs.
      </p>
    </div>
  </main>`;

  return pageWrapper(`Hair Supply Stores in ${city.city}, ${stateName} - Directory`, metaDescription, content);
}