import { State } from '../models.js';
import { pageWrapper, generateBreadcrumbs, generateListingsGrid, getCityUrl } from './layout.js';

export function generateStatePage(state: State): string {
  const cities = state.cities || [];
  const salons = state.salons || [];
  const salonCount = state.salonCount || salons.length;
  
  // Sort cities alphabetically
  cities.sort((a, b) => a.city.localeCompare(b.city));
  
  // Build meta description
  const metaDescription = `Find hair supply stores in ${state.state}. Browse our directory of beauty supply shops by city.`;

  const breadcrumbs = generateBreadcrumbs([
    { label: 'Home', url: '/' },
    { label: state.state }
  ]);

  // Format the main content
  const content = `
  ${breadcrumbs}
  
  <main class="container mx-auto px-4 py-6">
    <header class="mb-12 text-center">
      <h1 class="text-4xl font-bold text-indigo-900">
        Hair Supply Stores in ${state.state}
      </h1>
      <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
        Find professional hair supply stores across ${state.state}. Browse by city or view all listings.
      </p>
      <div class="mt-2 text-indigo-600 font-medium">
        <span class="inline-flex items-center">
          <i class="fas fa-list-ul mr-2"></i>
          ${salonCount} listing${salonCount !== 1 ? 's' : ''} across ${cities.length} cities
        </span>
      </div>
    </header>

    <!-- Cities List -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold text-indigo-800 mb-6">Cities in ${state.state}</h2>
      
      ${cities.length > 0 ? `
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        ${cities.map(city => {
          // Make sure we have a valid slug
          const citySlug = city.slug || '';
          const citySalonCount = city.salonCount || (city.salons ? city.salons.length : 0);
          return `
          <a href="${getCityUrl(citySlug)}" class="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 class="font-semibold text-indigo-700 hover:text-indigo-500">${city.city}</h3>
            <p class="text-sm text-gray-500 mt-1">${citySalonCount} listing${citySalonCount !== 1 ? 's' : ''}</p>
          </a>
        `}).join('')}
      </div>
      ` : `
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <p class="text-gray-600">No cities found in ${state.state}.</p>
      </div>
      `}
    </section>

    <!-- Featured Listings -->
    ${salons.length > 0 ? `
    <section class="mb-16">
      <h2 class="text-2xl font-bold text-indigo-800 mb-6">Featured Hair Supply Stores in ${state.state}</h2>
      ${generateListingsGrid(salons.slice(0, 6))}
      
      ${salons.length > 6 ? `
      <div class="text-center mt-8">
        <a href="#" class="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
          View All ${salons.length} Listings
        </a>
      </div>
      ` : ''}
    </section>
    ` : ''}

    <!-- About Section -->
    <section class="bg-indigo-50 p-8 rounded-lg">
      <h2 class="text-2xl font-bold text-indigo-800 mb-4">About Hair Supply Stores in ${state.state}</h2>
      <p class="text-gray-700 mb-4">
        Hair supply stores offer a comprehensive selection of professional-grade hair care products, styling tools, and accessories. In ${state.state}, you'll find quality beauty supply shops that cater to all your hair styling needs.
      </p>
      <p class="text-gray-700 mb-4">
        These specialized stores provide access to high-quality brands and products that may not be available in regular retail stores. From shampoos and conditioners to professional styling tools, hair color, extensions, and more, hair supply stores have everything you need for professional-quality hair care.
      </p>
      <p class="text-gray-700">
        Browse our directory to find hair supply stores near you in ${state.state}. Visit them directly to explore their selection of products and to get expert advice from knowledgeable staff who understand different hair types and styling needs.
      </p>
    </section>
  </main>`;

  return pageWrapper(`Hair Supply Stores in ${state.state} - Directory by City`, metaDescription, content);
}