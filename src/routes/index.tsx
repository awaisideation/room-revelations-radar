import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Link } from '@tanstack/react-router';
import { articles, pageMeta } from '@/lib/content';
import { ArticleCard, Byline } from '@/components/article-card';
import heroBg from '@/assets/hero-bg.jpg';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, House, Hammer, Armchair, Trees, Grid2X2, ChevronRight } from 'lucide-react';

export const Route = createFileRoute("/")({
  head: () => pageMeta('Quick Home Experts — Ideas for Every Home Project', 'Explore home improvement, outdoor living, decorating ideas, and honest reviews with Quick Home Experts.'),
  component: Index,
});

function Index() {
  const featured = articles[0];
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const projectCategories = [
    { name: 'Home improvement', slug: 'home-improvement', icon: Hammer, image: articles[6]?.image },
    { name: 'Home decor', slug: 'home-decor', icon: Armchair, image: articles[10]?.image },
    { name: 'Outdoor living', slug: 'outdoor-2', icon: Trees, image: articles[11]?.image },
    { name: 'Home exteriors', slug: 'home-decor', icon: House, image: articles[2]?.image },
    { name: 'Reviews & guides', slug: 'reviews', icon: Grid2X2, image: featured?.image },
  ];
  if (!featured) return null;
  return <main className="thumb-home">
    <section className="hero">
      <img className="hero-background" src={heroBg} alt="A modern backyard deck with comfortable outdoor seating at sunset" fetchPriority="high" />
      <div className="hero-content">
        <h1>For everything<br />home could be.</h1>
        <p className="hero-tagline">Fresh ideas for repairs, upgrades, and projects big or small — all in one place.</p>
        <form className="hero-search" onSubmit={(e) => { e.preventDefault(); navigate({ to: '/search', search: { q: query } }); }}>
          <div className="hero-search-top">
            <Search aria-hidden="true" />
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="What’s on your home to-do list?" aria-label="Search home projects" />
          </div>
          <div className="hero-search-bottom">
            <span className="hero-search-caption"><House size={18} /> Your next project starts here</span>
            <Button type="submit" className="hero-cta">Find ideas <ArrowRight /></Button>
          </div>
        </form>
        <div className="hero-popular"><span>Popular:</span>{['Flooring', 'Home decor', 'Kitchen'].map(term => <Button key={term} variant="ghost" onClick={() => navigate({ to: '/search', search: { q: term } })}>{term} <ChevronRight size={14} /></Button>)}</div>
      </div>
    </section>
    <section className="home-projects home-container">
      <div className="home-section-heading"><h2>What’s next for your home?</h2><Button asChild variant="link"><Link to="/search" search={{ q: '' }}>Explore all <ArrowRight /></Link></Button></div>
      <div className="home-category-grid">{projectCategories.map(category => <Link key={category.name} to="/category/$category" params={{ category: category.slug }} className="home-category"><img src={category.image} alt={category.name} loading="lazy" /><span><category.icon size={19} />{category.name}<ChevronRight size={16} /></span></Link>)}</div>
    </section>
    <div className="editorial-container home-container">
      <div className="home-section-heading"><h2>A little inspiration. A big difference.</h2><Button asChild variant="link"><Link to="/category/$category" params={{ category: 'home-decor' }}>Home decor <ArrowRight /></Link></Button></div>
      <article className="featured-story"><img src={featured.image} alt="Pelonis dehumidifier in a home" /><div className="featured-caption"><Link className="category-tag" to="/category/$category" params={{ category: 'reviews' }}>Reviews</Link><h2><Link className="article-title" to="/$slug" params={{ slug: featured.slug }}>{featured.title}</Link></h2><Byline article={featured} /></div></article>
      <div className="article-grid">{articles.slice(1, 10).map(article => <ArticleCard key={article.slug} article={article} />)}</div>
      <h2 className="section-title">Explore Our Latest Posts</h2>
      <div className="article-grid">{articles.slice(10).map(article => <ArticleCard key={article.slug} article={article} />)}</div>
    </div>
  </main>;
}
