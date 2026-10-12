import { Link, useNavigate, useRouterState } from '@tanstack/react-router';
import { useState } from 'react';
import { ChevronDown, Mail, Menu, Search, X, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { brandLogo, categories, slugify } from '@/lib/content';

export function SiteHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const isHome = useRouterState({ select: state => state.location.pathname === '/' });
  if (isHome) return <header className="home-header">
    <Link to="/" className="home-logo" aria-label="Quick Home Experts homepage"><img src={brandLogo} alt="Quick Home Experts" /></Link>
    <nav aria-label="Main navigation" className="home-header-links">
      <Button asChild variant="ghost"><Link to="/category/$category" params={{ category: 'home-improvement' }}>Home projects</Link></Button>
      <Button asChild variant="ghost"><Link to="/category/$category" params={{ category: 'reviews' }}>Reviews</Link></Button>
      <Button asChild variant="outline"><Link to="/contact">Contact us <Mail size={16} /></Link></Button>
    </nav>
  </header>;
  return <>
    <header className="site-header">
      <Button asChild className="contact-link"><Link to="/contact"><Mail size={12} /> Contact</Link></Button>
      <Button variant="ghost" size="icon" className="mobile-menu-control" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
      <Link to="/" className="site-logo" aria-label="Hooked Home homepage"><img src={brandLogo} alt="Hooked Home" /></Link>
      <div className="social-links">
        <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noreferrer">f</a>
        <a href="https://www.pinterest.com/" aria-label="Pinterest" target="_blank" rel="noreferrer">Ⓟ</a>
        <a href="https://www.youtube.com/" aria-label="YouTube" target="_blank" rel="noreferrer"><Youtube /></a>
        <Button variant="ghost" size="icon" aria-label={searchOpen ? 'Close search' : 'Open search'} title="Search" onClick={() => setSearchOpen(!searchOpen)}>{searchOpen ? <X /> : <Search />}</Button>
      </div>
    </header>
    <div className="nav-band"><nav aria-label="Main navigation" className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
      {categories.map(category => <div className="nav-item" key={category.slug}>
        <Link className="nav-link" to="/category/$category" params={{ category: category.slug }} onClick={() => setMenuOpen(false)}>{category.name}{category.children.length > 0 && <ChevronDown />}</Link>
        {category.children.length > 0 && <div className="dropdown">{category.children.map(child => <Link key={child} to="/category/$category" params={{ category: slugify(child) }} onClick={() => setMenuOpen(false)}>{child}</Link>)}</div>}
      </div>)}
    </nav></div>
    {searchOpen && <div className="search-panel"><form className="search-form" onSubmit={e => { e.preventDefault(); navigate({ to: '/search', search: { q: query } }); setSearchOpen(false); }}><input autoFocus className="search-input" aria-label="Search articles" placeholder="Search…" value={query} onChange={e => setQuery(e.target.value)} /><Button type="submit" aria-label="Submit search"><Search /></Button></form></div>}
  </>;
}
export function SiteFooter() {
  return <footer className="site-footer"><Link to="/"><img className="footer-logo" src={brandLogo} alt="Hooked Home" /></Link><div className="footer-links"><Link to="/">Home</Link><Link to="/category/$category" params={{ category: 'home-decor' }}>Home Decor</Link><Link to="/category/$category" params={{ category: 'home-improvement' }}>Home Improvement</Link><Link to="/contact">Contact</Link></div><p className="copyright">© {new Date().getFullYear()} Hooked Home. All rights reserved.</p></footer>;
}