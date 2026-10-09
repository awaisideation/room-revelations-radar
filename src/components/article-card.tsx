import { Link } from '@tanstack/react-router';
import { Clock, MessageCircle } from 'lucide-react';
import { portraits, slugify, type Article } from '@/lib/content';

export function Byline({ article, avatar = false }: { article: Article; avatar?: boolean }) {
  return <div className="byline">{avatar && <img className="author-avatar" src={portraits[article.author]} alt={article.author} />}<span>by <strong>{article.author}</strong></span><Clock /><span>{article.date}</span>{avatar && <><MessageCircle /><span>0</span></>}</div>;
}
export function ArticleCard({ article }: { article: Article }) {
  return <article className="article-card"><Link className="article-image" to="/$slug" params={{ slug: article.slug }}><img loading="lazy" src={article.image} alt={article.title} /></Link><Link className="category-tag" to="/category/$category" params={{ category: article.category === 'Home Decor' ? article.group : slugify(article.category) }}>{article.category}</Link><h3 className="article-title"><Link to="/$slug" params={{ slug: article.slug }}>{article.title}</Link></h3><Byline article={article} avatar /></article>;
}