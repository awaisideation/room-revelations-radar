import { useState } from "useState";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Link } from '@tanstack/react-router';
import { articles, pageMeta } from '@/lib/content';
import { ArticleCard, Byline } from '@/components/article-card';
import heroBg from '@/assets/hero-bg.jpg';

export const Route = createFileRoute("/")({
  head: () => pageMeta('Hooked Home — Let’s Convert Houses Into Homes', 'Meet Julie Ambrose and discover home decorating ideas, practical DIY fixes, honest reviews, and inspiration for your home.'),
  component: Index,
});

function Index() {
  const featured = articles[0];
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [zip, setZip] = useState('07666');
  if (!featured) return null;
  return <main>
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-content">
        <h1>For everything<br />home could be.</h1>
        <p className="hero-tagline">Find local pros for repairs, upgrades, and projects big or small — all in one place.</p>
        <form className="hero-search" onSubmit={(e) => { e.preventDefault(); navigate({ to: '/search', search: { q: query } }); }}>
          <div className="hero-search-top">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Describe your project or problem — be as detailed as you'd like!" aria-label="Search" />
          </div>
          <div className="hero-search-bottom">
            <div className="hero-zip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
              <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} maxLength={10} aria-label="Zip code" />
            </div>
            <button type="submit" className="hero-cta">Find a pro
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </button>
          </div>
        </form>
        <p className="hero-trust">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
          No calls or text until you message a pro.
        </p>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-value">4.9 <svg className="hero-star" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg></span>
            <span className="hero-stat-label">from 15M+ reviews</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">300K+</span>
            <span className="hero-stat-label">local pros</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">100M+</span>
            <span className="hero-stat-label">home projects</span>
          </div>
        </div>
      </div>
    </section>
    <div className="editorial-container">
      <article className="featured-story"><img src={featured.image} alt="Pelonis dehumidifier in a home" /><div className="featured-caption"><Link className="category-tag" to="/category/$category" params={{ category: 'reviews' }}>Reviews</Link><h2><Link className="article-title" to="/$slug" params={{ slug: featured.slug }}>{featured.title}</Link></h2><Byline article={featured} /></div></article>
      <div className="article-grid">{articles.slice(1, 10).map(article => <ArticleCard key={article.slug} article={article} />)}</div>
      <h2 className="section-title">Explore Our Latest Posts</h2>
      <div className="article-grid">{articles.slice(10).map(article => <ArticleCard key={article.slug} article={article} />)}</div>
    </div>
  </main>;
}
