'use client';

import { useState } from 'react';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { siteDetails } from '@/data/siteDetails';
import { PageAnswerBlock, PageFaq, PageSeo } from '@/components/seo/PageSeo';
import { getPageAnswer } from '@/data/page-answers';

const pageAnswer = getPageAnswer('/contact');

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // TODO: Implement form submission to API
    // For now, just simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <PageSeo page={pageAnswer}>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary-accent to-secondary text-white py-20">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Contact a Las Vegas Luxury Realtor
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Call or text {siteDetails.contact.primaryPhone}. Summerlin estates, 55+ communities, and home valuations.
          </p>
        </Container>
      </section>
      <PageAnswerBlock />

      {/* Contact Methods */}
      <Section
        id="contact-methods"
        title="Contact Dr. Jan Duffy - Your Las Vegas Real Estate Expert"
        description="Choose the way that works best for you. I'm here to help with all your Las Vegas real estate needs."
      >
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-foreground-accent mb-6 text-lg">
            Ready to start your Las Vegas real estate journey? Whether you're buying your first home, selling a property, exploring investment opportunities, or planning a move to a 55+ community, I'm here to help. With {siteDetails.agent.experience} of experience and {siteDetails.agent.familiesServed} families served, I bring the expertise and personalized service you deserve.
          </p>
          <p className="text-foreground-accent text-lg">
            Choose the contact method that's most convenient for you. I typically respond to calls and texts within a few hours, and emails within 24 hours. For urgent matters or time-sensitive opportunities, calling or texting is the fastest way to reach me.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">📞</div>
            <h3 className="font-bold mb-2 font-display text-lg">Call or Text</h3>
            <p className="text-sm text-foreground-accent mb-4">
              Ready to get started? Call or text me directly for immediate assistance with your Las Vegas real estate questions or to schedule a consultation.
            </p>
            <a
              href={`tel:${siteDetails.contact.primaryPhone}`}
              className="text-primary font-semibold hover:underline text-lg"
            >
              {siteDetails.contact.primaryPhone}
            </a>
            <p className="text-xs text-foreground-accent mt-2">
              Available for calls and texts 7 days a week
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">📧</div>
            <h3 className="font-bold mb-2 font-display text-lg">Email</h3>
            <p className="text-sm text-foreground-accent mb-4">
              Send me a detailed message about your real estate goals, questions, or property inquiries. I'll respond within 24 hours.
            </p>
            <a
              href={`mailto:${siteDetails.contact.email}`}
              className="text-primary font-semibold hover:underline"
            >
              {siteDetails.contact.email}
            </a>
            <p className="text-xs text-foreground-accent mt-2">
              Best for detailed questions and documentation
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">🏢</div>
            <h3 className="font-bold mb-2 font-display text-lg">Office</h3>
            <p className="text-sm text-foreground-accent mb-4">
              Professional inquiries, broker cooperation, and business partnerships. Reach me through my Berkshire Hathaway HomeServices Nevada Properties office.
            </p>
            <a
              href={`tel:${siteDetails.contact.professionalPhone}`}
              className="text-primary font-semibold hover:underline"
            >
              {siteDetails.contact.professionalPhone}
            </a>
            <p className="text-xs text-foreground-accent mt-2">
              {siteDetails.agent.brokerage}
            </p>
          </div>
        </div>
      </Section>

      {/* Contact Form */}
      <Section
        id="contact-form"
        title="Send a Message"
        description="Fill out the form below and I'll get back to you soon"
        className="bg-warm-gray"
      >
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-md space-y-6">
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                Thank you! I'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                There was an error. Please try calling or emailing directly.
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-semibold mb-2">
                I'm interested in
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="">Select an option</option>
                <option value="buying">Buying a Home</option>
                <option value="selling">Selling a Home</option>
                <option value="luxury">Luxury Homes</option>
                <option value="55plus">55+ Communities</option>
                <option value="new-construction">New Construction</option>
                <option value="investment">Investment Properties</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Tell me about your real estate goals..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white hover:bg-primary-accent px-8 py-4 rounded-full font-semibold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            <p className="text-xs text-center text-foreground-accent">
              By submitting this form, you agree to be contacted about your
              real estate inquiry. We respect your privacy and will never share
              your information.
            </p>
          </form>
        </div>
      </Section>

      {/* What to Expect Section */}
      <Section
        id="what-to-expect"
        title="What to Expect When You Contact Dr. Jan Duffy"
        description="Your first step toward achieving your Las Vegas real estate goals"
        className="bg-warm-gray"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-3 font-display">Initial Consultation</h3>
              <p className="text-slate text-sm mb-3">
                When you reach out, I'll take time to understand your real estate goals, timeline, budget, and preferences. This initial conversation helps me tailor my approach to your unique situation.
              </p>
              <ul className="list-disc list-inside text-sm text-slate space-y-1">
                <li>Discussion of your real estate goals and timeline</li>
                <li>Understanding your budget and financing situation</li>
                <li>Identifying preferred neighborhoods and property types</li>
                <li>Answering your questions about the Las Vegas market</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-3 font-display">Personalized Service Plan</h3>
              <p className="text-slate text-sm mb-3">
                Based on our conversation, I'll create a customized service plan that addresses your specific needs. Whether you're buying, selling, or investing, you'll have a clear roadmap.
              </p>
              <ul className="list-disc list-inside text-sm text-slate space-y-1">
                <li>Customized property search or marketing strategy</li>
                <li>Market analysis and pricing recommendations</li>
                <li>Timeline and next steps clearly outlined</li>
                <li>Regular communication schedule established</li>
              </ul>
            </div>
          </div>
          <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-gold">
            <h3 className="text-xl font-bold text-primary mb-3 font-display">No Pressure, Just Help</h3>
            <p className="text-slate text-sm">
              My approach is consultative, not salesy. I'm here to provide expert guidance and help you make informed decisions. There's never any pressure—just honest advice and professional service designed to help you achieve your real estate goals in Las Vegas.
            </p>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section id="map" title="Office Location and Service Area" description="Serving Las Vegas, Henderson, Summerlin, and surrounding areas">
        <div className="max-w-4xl mx-auto">
          <div className="bg-warm-gray rounded-xl p-8 text-center mb-6">
            <h3 className="text-xl font-bold text-primary mb-4 font-display">{siteDetails.agent.brokerage}</h3>
            <p className="text-foreground-accent mb-2">
              License: {siteDetails.agent.license}
            </p>
            <p className="text-foreground-accent mb-6">
              Serving {siteDetails.contact.officeAddress.city}, {siteDetails.contact.officeAddress.state} and surrounding areas
            </p>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-6">
              <p className="text-foreground-accent">
                Google Map Embed - Add map embed code here
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${siteDetails.contact.primaryPhone}`}
                className="inline-block bg-primary text-white hover:bg-primary-accent px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Call {siteDetails.contact.primaryPhone}
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
          <div className="bg-cream rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-3 font-display">Service Areas</h3>
            <p className="text-slate text-sm mb-3">
              I serve clients throughout the greater Las Vegas area, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-slate">
              <div>
                <h4 className="font-semibold mb-1">Las Vegas</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Summerlin</li>
                  <li>• Centennial Hills</li>
                  <li>• Northwest</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Henderson</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Green Valley</li>
                  <li>• Anthem</li>
                  <li>• Seven Hills</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Other Areas</h4>
                <ul className="space-y-1 text-xs">
                  <li>• North Las Vegas</li>
                  <li>• Boulder City</li>
                  <li>• Southern Highlands</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Specialties</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Luxury Estates</li>
                  <li>• 55+ Communities</li>
                  <li>• New Construction</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <PageFaq />
    </PageSeo>
  );
}
