import { createFileRoute } from '@tanstack/react-router';
import { articles, pageMeta } from '@/lib/content';
import { ArticleCard } from '@/components/article-card';
export const Route = createFileRoute('/search')({
  validateSearch: (search: Record<string, unknown>) => ({ q: typeof search['q'] === 'string' ? search['q'] : '' }),
  head: () => pageMeta('Search Home Ideas — Hooked Home', 'Search decorating inspiration, home improvement guides, and reviews on Hooked Home.'),
  component: SearchPage,
});
function SearchPage() {
  const { q } = Route.useSearch();
  const matches = articles.filter(a => `${a.title} ${a.category}`.toLowerCase().includes(q.toLowerCase()));
  return <main className="editorial-container content-page"><h1 className="page-title">Search results for: {q || 'All posts'}</h1>{matches.length ? <div className="article-grid">{matches.map(article => <ArticleCard key={article.slug} article={article} />)}</div> : <p className="empty-results">No results found. Try another search.</p>}</main>;
}