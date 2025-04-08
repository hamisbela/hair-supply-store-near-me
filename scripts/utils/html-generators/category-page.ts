import { Category } from '../models.js';
import { pageWrapper, generateBreadcrumbs, generateListingsGrid } from './layout.js';

export function generateCategoryPage(category: Category): string {
  const salons = category.salons || [];
  const salonCount = category.salonCount || salons.length;
  
  // Build meta description
  const metaDescription = `Find ${category.category.toLowerCase()} specializing in hair care products and supplies. Browse our directory of professional beauty supply stores.`;

  const breadcrumbs = generateBreadcrumbs([
    { label: 'Home', url: '/' },
    { label: 'Categories', url: '/categories/' },
    { label: category.category }
  ]);

  // Format the main content
  const content = `
  ${breadcrumbs}
  
  <main class="container mx-auto px-4 py-6">
    <header class="mb-12 text-center">
      <h1 class="text-4xl font-bold text-indigo-900">
        ${category.category}
      </h1>
      <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
        Browse our directory of ${category.category.toLowerCase()} specializing in hair care products and beauty supplies.
      </p>
      <div class="mt-2 text-indigo-600 font-medium">
        <span class="inline-flex items-center">
          <i class="fas fa-list-ul mr-2"></i>
          ${salonCount} listing${salonCount !== 1 ? 's' : ''} found
        </span>
      </div>
    </header>

    ${salons.length > 0 
      ? generateListingsGrid(salons, `${category.category} Listings`)
      : `
        <div class="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 class="text-2xl font-bold text-indigo-800 mb-4">No Listings Found</h2>
          <p class="text-gray-600 mb-6">We couldn't find any ${category.category.toLowerCase()} listings at this time.</p>
          <a href="/add-a-listing/" class="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
            Add Your Business
          </a>
        </div>
      `
    }

    <div class="mt-16 bg-indigo-50 p-8 rounded-lg">
      <h2 class="text-2xl font-bold text-indigo-800 mb-4">About ${category.category}</h2>
      <p class="text-gray-700 mb-4">
        ${category.category} offer a comprehensive range of hair care products, styling tools, and accessories to meet all your hair styling needs. These specialized stores provide access to professional-grade products and expert advice.
      </p>
      <p class="text-gray-700 mb-4">
        When choosing a ${category.category.toLowerCase()}, look for retailers with a wide selection of brands and products for your specific hair type and styling goals. Many shops have knowledgeable staff who can provide personalized recommendations.
      </p>
      <p class="text-gray-700">
        Browse our listings to find quality ${category.category.toLowerCase()} in your area. Visit them directly to explore their selection of products and to get expert advice for your hair care needs.
      </p>
    </div>
  </main>`;

  return pageWrapper(`${category.category} - Hair Supply Store Directory`, metaDescription, content);
}