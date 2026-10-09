import logo from '@/assets/hooked-home-logo.png.asset.json';
import pelonis from '@/assets/pelonis.asset.json';
import blackHouse from '@/assets/black-house.asset.json';
import sageHouse from '@/assets/sage-house.asset.json';
import greyHouse from '@/assets/grey-house.asset.json';
import cake from '@/assets/cake.asset.json';
import brick from '@/assets/brick.asset.json';
import floor from '@/assets/floor.asset.json';
import city from '@/assets/city.asset.json';
import blocks from '@/assets/blocks.asset.json';
import kitchen from '@/assets/kitchen.asset.json';
import lisa from '@/assets/lisa.asset.json';
import julie from '@/assets/julie.asset.json';
import listing from '@/assets/listing.asset.json';
import recliner from '@/assets/recliner.asset.json';
import sofa from '@/assets/sofa.asset.json';

export const brandLogo = logo.url;
export const portraits = { Lisa: lisa.url, 'Julie Ambrose': julie.url };
export const categories = [
  { name: 'Home Decor', slug: 'home-decor', children: ['Backyard', 'Bedroom', 'Doors', 'Entryway', 'Garage Ideas', 'Home Exterior', 'Kids Room', 'Landscaping', 'Living Room', 'Office Room', 'Storage', 'Room Decor', 'Outdoor', 'Patio'] },
  { name: 'Home Improvement', slug: 'home-improvement', children: ['Bathroom', 'Cleaning', 'DIY Fixes', 'Flooring', 'HVAC', 'Organization', 'Pest', 'Plumbing', 'Renovation', 'Roofing', 'Troubleshooting', 'Wall', 'Kitchen', 'Construction'] },
  { name: 'Outdoor', slug: 'outdoor-2', children: ['Camping', 'Backyard', 'Fencing', 'Patio'] },
  { name: 'Gardening', slug: 'gardening', children: [] },
  { name: 'Real Estate', slug: 'real-estate', children: ['City Guide', 'House Price', 'Housing'] },
  { name: 'Reviews', slug: 'reviews', children: [] },
  { name: 'Size Guide', slug: 'size-guide', children: [] },
  { name: 'Art & Craft', slug: 'art-and-craft', children: [] },
];
export function slugify(value: string) { return value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
export type Article = { title: string; slug: string; category: string; group: string; image: string; author: 'Lisa' | 'Julie Ambrose'; date: string; excerpt: string };
export const articles: Article[] = [
  { title: 'Pelonis Dehumidifier Reviews: An Honest Review 2025', slug: 'pelonis-dehumidifier-reviews', category: 'Reviews', group: 'reviews', image: pelonis.url, author: 'Julie Ambrose', date: 'January 13, 2025', excerpt: 'A closer look at the Pelonis dehumidifier, its features, and how it fits into everyday life at home.' },
  { title: '10 Stylish Black House With Cedar Accents Ideas You Will Love', slug: 'black-house-with-cedar-accents', category: 'Home Decor', group: 'home-decor', image: blackHouse.url, author: 'Lisa', date: 'September 16, 2024', excerpt: 'Black exteriors and natural cedar bring together a striking contrast. Explore beautiful ways to pair warm wood with a bold, modern exterior.' },
  { title: '20 Stunning Sage Green House With Black Trim Ideas You Will Love', slug: 'sage-green-house-with-black-trim-ideas', category: 'Home Decor', group: 'home-decor', image: sageHouse.url, author: 'Lisa', date: 'September 10, 2024', excerpt: 'Soft sage green and crisp black trim create a welcoming exterior with plenty of character. Discover inspiration for your next home refresh.' },
  { title: '20 Beautiful Dark Grey House With Cedar Accents Ideas', slug: 'dark-grey-house-with-cedar-accents', category: 'Home Decor', group: 'home-decor', image: greyHouse.url, author: 'Lisa', date: 'September 7, 2024', excerpt: 'Natural cedar adds warmth and texture to dark grey siding. These exterior combinations offer inspiration for a timeless home.' },
  { title: '10 Best Lilo Stitch Cake Ideas For Next B’day Celebration', slug: 'stitch-cake-ideas', category: 'Art & Craft', group: 'art-and-craft', image: cake.url, author: 'Julie Ambrose', date: 'July 22, 2024', excerpt: 'Bring a little island-inspired fun to your next birthday celebration with colorful Stitch cake inspiration.' },
  { title: 'German Smear Gone Bad? A Step-By-Step DIY Fixes', slug: 'german-smear-gone-bad', category: 'DIY Fixes', group: 'home-improvement', image: brick.url, author: 'Julie Ambrose', date: 'July 9, 2024', excerpt: 'A German smear gives brick a soft, aged appearance. Find inspiration for correcting an uneven finish and refreshing your brickwork.' },
  { title: '10 Worst Vinyl Plank Flooring Brands – Detailed Review (2024)', slug: 'worst-vinyl-plank-flooring-brands', category: 'Flooring', group: 'home-improvement', image: floor.url, author: 'Julie Ambrose', date: 'June 4, 2024', excerpt: 'Choosing flooring means looking beyond the surface. Explore what to consider when comparing vinyl plank durability, finish, and value.' },
  { title: 'Why Is Benton Harbor So Dangerous? (Based On 2024 Data)', slug: 'why-is-benton-harbor-so-dangerous', category: 'City Guide', group: 'real-estate', image: city.url, author: 'Julie Ambrose', date: 'April 5, 2024', excerpt: 'A city guide looking at Benton Harbor and the considerations that matter when researching a place to live.' },
  { title: '10 Mega Bloks Ideas To Enhance The Creativity Of Your Kid', slug: 'mega-bloks-building-ideas', category: 'Art & Craft', group: 'art-and-craft', image: blocks.url, author: 'Julie Ambrose', date: 'March 22, 2024', excerpt: 'Simple, colorful building ideas to spark imagination and make creative play a part of everyday life.' },
  { title: 'What Is Granitium Nonstick Coating? Is It Better Than Teflon?', slug: 'granitium-nonstick-coating', category: 'Kitchen', group: 'home-improvement', image: kitchen.url, author: 'Julie Ambrose', date: 'February 15, 2024', excerpt: 'Explore the differences between nonstick cookware finishes and the questions to ask when choosing utensils for your kitchen.' },
  { title: 'How to Prepare Your Home for Listing Photos Without a Full Makeover', slug: 'how-to-prepare-your-home-for-listing-photos-without-a-full-makeover', category: 'Home Decor', group: 'home-decor', image: listing.url, author: 'Julie Ambrose', date: 'September 25, 2026', excerpt: "Listing photos are often a buyer’s first look at a home. Before anyone schedules a viewing, they may scroll through photos to get a feel for the space." },
  { title: 'Outdoor Recliner: The Ultimate Guide to Comfort and Relaxation Outdoors', slug: 'outdoor-recliner-the-ultimate-guide-to-comfort-and-relaxation-outdoors', category: 'Home Exterior', group: 'outdoor-2', image: recliner.url, author: 'Julie Ambrose', date: 'September 9, 2026', excerpt: 'Spending time outside is really great for relaxing. Having a comfortable chair can make it even more enjoyable.' },
  { title: 'Home Addition vs. Basement Remodel: Which Optimizes Space and Budget?', slug: 'home-addition-vs-basement-remodel-which-optimizes-space-and-budget', category: 'Home Improvement', group: 'home-improvement', image: sofa.url, author: 'Julie Ambrose', date: 'September 7, 2026', excerpt: 'When your home starts to feel too small, you usually have a few options. Either you move, build outward, or make more of the space you already have.' },
];
export function pageMeta(title: string, description: string) {
  return { meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}