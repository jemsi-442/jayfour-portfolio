"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Button from "@/components/ui/Button";
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon, WhatsAppIcon } from "@/components/icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject || `Message from ${name}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;
    window.open(mailtoLink, "_blank");
    setStatus("sent");
    setTimeout(() => setStatus(null), 3000);
  };

  const contactInfo = [
    {
      icon: MailIcon,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: PhoneIcon,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone}`,
    },
    {
      icon: WhatsAppIcon,
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: profile.social.whatsapp,
      target: "_blank",
    },
    {
      icon: MapPinIcon,
      label: "Location",
      value: profile.location,
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            title="Get in Touch"
            subtitle="Have a project in mind? Let's work together"
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <AnimateOnScroll animation="animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Let&apos;s Work Together
              </h3>
              <p className="text-foreground-secondary mb-8 leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision. Feel free to reach
                out through any of the channels below.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const isWhatsApp = item.label === "WhatsApp";
                  const content = (
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-surface/60 border border-border hover:border-accent/50 transition-all duration-300 group">
                      <div className={`p-3 rounded-lg transition-all duration-300 ${
                        isWhatsApp
                          ? "bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white"
                          : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white"
                      }`}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <div className="text-xs text-foreground-muted uppercase tracking-wider">
                          {item.label}
                        </div>
                        <div className="text-foreground font-medium">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  );

                  if (item.href) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block"
                        {...(item.target ? { target: item.target, rel: "noopener noreferrer" } : {})}
                      >
                        {content}
                      </a>
                    );
                  }
                  return <div key={item.label}>{content}</div>;
                })}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Contact form */}
          <AnimateOnScroll animation="animate-slide-in-right">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 p-6 md:p-8 rounded-2xl bg-surface/60 border border-border"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground-secondary mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground-secondary mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
                    placeholder="jayfour@email.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground-secondary mb-1.5"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
                  placeholder="Project discussion"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground-secondary mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                {status === "sent" ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message <SendIcon size={18} />
                  </>
                )}
              </Button>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
