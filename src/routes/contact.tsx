import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { pageMeta } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
export const Route = createFileRoute('/contact')({
  head: () => pageMeta('Contact — Hooked Home', 'Get in touch with Hooked Home for home inspiration, questions, and collaborations.'),
  component: ContactPage,
});
function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  return <main className="editorial-container content-page"><h1 className="page-title">Contact</h1><p className="article-body">We'd love to hear from you.</p><form className="contact-form" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}><label>Name<input required value={name} onChange={e => setName(e.target.value)} autoComplete="name" /></label><label>Email<input type="email" required value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" /></label><label>Message<textarea required rows={6} value={message} onChange={e => setMessage(e.target.value)} /></label><div><Button type="submit"><Mail /> Send message</Button></div>{submitted && <p role="status" className="text-sm text-muted-foreground">This replica does not send messages yet. Please contact Hooked Home through its original website.</p>}</form></main>;
}