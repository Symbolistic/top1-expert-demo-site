'use client';

import { useState } from 'react';
import { SectionHeader, Input, Textarea, Label, Button } from '@/components/ui';

const INITIAL_STATE = { name: '', email: '', business: '', message: '' };

const CTA = ({
    eyebrow = 'Get in Touch',
    title = 'Let\'s Talk About Your Business',
    subtitle = "Tell us a bit about what you do and what you are looking for. We will get back to you within 24 hours.",
}) => {
    const [form, setForm] = useState(INITIAL_STATE);
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const formData = new FormData();
            formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY);
            formData.append('name', form.name);
            formData.append('email', form.email);
            formData.append('Business Name', form.business);
            formData.append('message', form.message);

            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });
            const data = await res.json();
            setStatus(data.success ? 'success' : 'error');
            if (data.success) setForm(INITIAL_STATE);
        } catch {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-[var(--spacing-section)] bg-surface">
            <div className="mx-auto max-w-2xl px-4">
                <SectionHeader
                    eyebrow={eyebrow}
                    title={title}
                    subtitle={subtitle}
                    className="mb-12"
                />

                {status === 'success' ? (
                    <div className="rounded-[var(--radius-lg)] border border-primary/20 bg-primary/5 p-8 text-center">
                        <p className="text-primary font-semibold text-lg">Message sent!</p>
                        <p className="text-muted text-sm mt-2">We'll be in touch within 24 hours.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <Label htmlFor="name">Your Name</Label>
                                <Input id="name" name="name" type="text" placeholder="John Smith" value={form.name} onChange={handleChange} required />
                            </div>
                            <div>
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" name="email" type="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="business">Business Name</Label>
                            <Input id="business" name="business" type="text" placeholder="Smith's Plumbing LLC" value={form.business} onChange={handleChange} />
                        </div>
                        <div>
                            <Label htmlFor="message">Tell Us About Your Project</Label>
                            <Textarea id="message" name="message" placeholder="What does your business do? What do you need from a website?" value={form.message} onChange={handleChange} required />
                        </div>

                        {status === 'error' && (
                            <p className="text-sm text-red-400">Something went wrong. Please try again or email us directly.</p>
                        )}

                        <Button type="submit" size="lg" disabled={status === 'loading'} className="self-start">
                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                        </Button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default CTA;
