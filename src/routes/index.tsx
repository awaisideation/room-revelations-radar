import { createFileRoute } from "@tanstack/react-router";
import { Link } from '@tanstack/react-router';
import { articles, pageMeta } from '@/lib/content';
import { ArticleCard, Byline } from '@/components/article-card';
export const Route = createFileRoute("/")({
  head: () => pageMeta('Hooked Home — Let’s Convert Houses Into Homes', 'Meet Julie Ambrose and discover home decorating ideas, practical DIY fixes, honest reviews, and inspiration for your home.'),
  component: Index,
});
function Index() {
  const featured = articles[0];
  if (!featured) return null;
  return <main>
    <section className="intro"><h1>Let's convert houses into homes</h1><p>Meet Julie Ambrose, founder of hookedhome.com. She started this blog to help everyone decorate their home with daily ideas, tips, and guide.</p></section>
    <div className="editorial-container">
      <article className="featured-story"><img src={featured.image} alt="Pelonis dehumidifier in a home" /><div className="featured-caption"><Link className="category-tag" to="/category/$category" params={{ category: 'reviews' }}>Reviews</Link><h2><Link className="article-title" to="/$slug" params={{ slug: featured.slug }}>{featured.title}</Link></h2><Byline article={featured} /></div></article>
      <div className="article-grid">{articles.slice(1, 10).map(article => <ArticleCard key={article.slug} article={article} />)}</div>
      <h2 className="section-title">Explore Our Latest Posts</h2>
      <div className="article-grid">{articles.slice(10).map(article => <ArticleCard key={article.slug} article={article} />)}</div>
    </div>
  </main>;
}
