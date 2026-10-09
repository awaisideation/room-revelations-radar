import { createFileRoute, Link } from '@tanstack/react-router';
import { articles, categories, slugify, pageMeta } from '@/lib/content';
import { ArticleCard } from '@/components/article-card';

function categoryName(slug: string) { return categories.find(c => c.slug === slug)?.name ?? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); }
export const Route = createFileRoute('/category/$category')({
  head: ({ params }) => pageMeta(`${categoryName(params.category)} — Hooked Home`, `Discover ${categoryName(params.category).toLowerCase()} ideas, inspiration, and guides from Hooked Home.`),
  component: CategoryPage,
});
function CategoryPage() {
  const { category } = Route.useParams();
  const matches = articles.filter(a => a.group === category || slugify(a.category) === category);
  return <main className="editorial-container content-page"><div className="breadcrumb-line"><Link to="/">Home</Link> / {categoryName(category)}</div><h1 className="page-title">{categoryName(category)}</h1>{matches.length > 0 ? <div className="article-grid">{matches.map(article => <ArticleCard key={article.slug} article={article} />)}</div> : <p className="empty-results">No posts in this category yet.</p>}</main>;
}