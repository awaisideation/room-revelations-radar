import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { articles, pageMeta } from '@/lib/content';
import { Byline, ArticleCard } from '@/components/article-card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
export const Route = createFileRoute('/$slug')({
  loader: ({ params }) => { const article = articles.find(a => a.slug === params.slug); if (!article) throw notFound(); return article; },
  head: ({ loaderData }) => pageMeta(loaderData ? `${loaderData.title} — Hooked Home` : 'Article Not Found — Hooked Home', loaderData?.excerpt ?? 'The requested article is unavailable.'),
  component: ArticlePage,
});
function ArticlePage() {
  const article = Route.useLoaderData();
  return <main className="editorial-container content-page"><div className="breadcrumb-line"><Link to="/">Home</Link> / <Link to="/category/$category" params={{ category: article.group }}>{article.category}</Link></div><h1 className="page-title">{article.title}</h1><Byline article={article} avatar /><img className="article-cover" src={article.image} alt={article.title} /><div className="article-body"><p>{article.excerpt}</p><Button asChild variant="outline" className="mt-6"><a href={`https://hookedhome.com/${article.slug}/`} target="_blank" rel="noreferrer">Read the full original article <ArrowUpRight /></a></Button></div><h2 className="section-title">You might also like</h2><div className="article-grid">{articles.filter(a => a.group === article.group && a.slug !== article.slug).slice(0, 3).map(a => <ArticleCard key={a.slug} article={a} />)}</div></main>;
}