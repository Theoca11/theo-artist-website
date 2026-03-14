import { Button } from "@/components/ui/button";
import { Mail, Music, MapPin, ExternalLink, Instagram, Youtube } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * THEO Artist Website - Cinematic Minimalism Design
 * 
 * Design Philosophy:
 * - Monochromatic palette with burnt sienna accents
 * - Playfair Display for bold, elegant headings
 * - Roboto Light for clean body text
 * - Large cinematic photography with film grain
 * - Generous whitespace and slow scroll animations
 * - Fade-in and parallax effects for emotional impact
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-xl font-bold tracking-tight">THEO</div>
          <div className="flex gap-8 items-center">
            <a href="#music" className="text-sm hover:text-accent transition-colors">Music</a>
            <a href="#live" className="text-sm hover:text-accent transition-colors">Live</a>
            <a href="#about" className="text-sm hover:text-accent transition-colors">About</a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <source
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663429085971/igUmJg5nFrjZPq2TFev36u/f9d7196f-f333-4ec8-adcb-60690b8f8a86_b09e571c.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 text-center animate-fade-in-up">
          <h1 className="text-8xl md:text-9xl font-bold tracking-tighter mb-6">THEO</h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 font-light">
            Singer • Songwriter • Performer
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg"
          >
            Listen Now
          </Button>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-32 bg-background">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="mb-6">Latest Release</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-accent mb-6">Another Door</h3>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed font-light">
                A powerful new single exploring themes of introspection and emotional vulnerability. 
                Another Door marks a new chapter in THEO's artistic journey, blending indie rock 
                sensibilities with cinematic songwriting.
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="https://open.spotify.com/artist/6UwbXsC4zpzw4nOf1VU5Wm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                >
                  <Music size={20} />
                  Listen on Spotify
                  <ExternalLink size={16} />
                </a>
                <a
                  href="https://music.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                >
                  <Music size={20} />
                  Apple Music
                  <ExternalLink size={16} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCtPRGOSBtGT2U_ucdpCnb2w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                >
                  <Youtube size={20} />
                  YouTube
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
            <div
              className="relative h-96 md:h-full rounded-sm overflow-hidden animate-fade-in"
              style={{
                backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663429085971/igUmJg5nFrjZPq2TFev36u/theo-close-up-performance-Hui6ajTqZkkWiuq5n7jDCb.webp')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </section>

      {/* Live Session Section */}
      <section className="py-32 bg-secondary/20">
        <div className="container max-w-6xl">
          <div className="animate-fade-in-up">
            <h2 className="mb-16 text-center">Live Session</h2>
            <div className="relative w-full aspect-video bg-black rounded-sm overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="THEO Live Session"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-background">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div
              className="relative h-96 md:h-full rounded-sm overflow-hidden animate-fade-in"
              style={{
                backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663429085971/igUmJg5nFrjZPq2TFev36u/theo-studio-portrait-8E6rBKDHs49Tfe6GnmfzxA.webp')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="animate-fade-in-up">
              <h2 className="mb-8">About THEO</h2>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed font-light">
                THEO is a Portuguese singer-songwriter from Guimarães, blending indie rock, 
                alternative rock, and cinematic songwriting into a distinctive artistic voice. 
                His music is deeply emotional, introspective, and poetic—exploring themes of 
                love, loss, and human connection.
              </p>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed font-light">
                Performing with his band and currently releasing music under the project 
                "Theo & The Dons," THEO is preparing his upcoming album "Love Hate," 
                which promises to be his most ambitious work to date. His live performances 
                are known for their raw intensity and emotional authenticity.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed font-light">
                With influences ranging from classic indie rock to contemporary singer-songwriters, 
                THEO crafts music that resonates on a deeply human level, inviting listeners 
                into intimate moments of vulnerability and strength.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Band Section */}
      <section className="py-32 bg-secondary/20">
        <div className="container max-w-6xl">
          <div className="animate-fade-in-up">
            <h2 className="mb-16 text-center">Theo & The Dons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div
                className="relative h-96 md:h-full rounded-sm overflow-hidden"
                style={{
                  backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663429085971/igUmJg5nFrjZPq2TFev36u/theo-band-live-hQBW3YQzZkfXsdRA9kouvz.webp')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div>
                <p className="text-lg text-foreground/70 mb-6 leading-relaxed font-light">
                  Theo & The Dons represents a full-band evolution of THEO's solo work, 
                  bringing dynamic energy and collaborative creativity to his cinematic songwriting. 
                  The ensemble amplifies the emotional depth of each composition while maintaining 
                  the intimate vulnerability that defines THEO's artistic identity.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed font-light">
                  Together, they create a powerful live experience that bridges the gap between 
                  introspective indie rock and stadium-ready performances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Dates Section */}
      <section id="live" className="py-32 bg-background">
        <div className="container max-w-4xl">
          <h2 className="mb-16 text-center animate-fade-in-up">Upcoming Shows</h2>
          <div className="space-y-8">
            {[
              { date: "April 15, 2026", venue: "Sala Ibérica", city: "Guimarães, Portugal" },
              { date: "May 3, 2026", venue: "Coliseu do Porto", city: "Porto, Portugal" },
              { date: "May 20, 2026", venue: "Capitólio", city: "Lisboa, Portugal" },
              { date: "June 10, 2026", venue: "Sala Apolo", city: "Barcelona, Spain" },
            ].map((show, idx) => (
              <div
                key={idx}
                className="border-b border-border pb-8 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="text-accent font-semibold mb-2">{show.date}</p>
                    <p className="text-xl font-light">{show.venue}</p>
                    <p className="text-foreground/60 flex items-center gap-2 mt-1">
                      <MapPin size={16} />
                      {show.city}
                    </p>
                  </div>
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                    Get Tickets
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section className="py-32 bg-secondary/20">
        <div className="container max-w-4xl">
          <h2 className="mb-16 text-center animate-fade-in-up">Press & Media</h2>
          <div className="space-y-12">
            {[
              {
                quote: "THEO's cinematic approach to songwriting sets him apart as one of Portugal's most promising indie rock artists.",
                source: "Blitz Magazine",
              },
              {
                quote: "With 'Love Hate,' THEO crafts an album that feels both intimate and expansive—a true artistic statement.",
                source: "Sonic Scope",
              },
              {
                quote: "His live performances are raw, emotional, and utterly captivating. THEO is an artist worth following.",
                source: "Público",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border-l-2 border-accent pl-6 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <p className="text-lg text-foreground/80 mb-4 italic font-light">
                  "{item.quote}"
                </p>
                <p className="text-accent font-semibold text-sm">— {item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-background">
        <div className="container max-w-4xl text-center animate-fade-in-up">
          <h2 className="mb-8">Get in Touch</h2>
          <p className="text-lg text-foreground/70 mb-12 font-light">
            For booking inquiries, press, or collaboration opportunities
          </p>
          <a
            href="mailto:contact@theomusic.pt"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-lg"
          >
            <Mail size={24} />
            contact@theomusic.pt
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 py-16 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="font-semibold mb-4">Follow</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/theo_music_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://youtube.com/@theomusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="https://open.spotify.com/artist/6UwbXsC4zpzw4nOf1VU5Wm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  <Music size={20} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#music" className="hover:text-accent transition-colors">Music</a></li>
                <li><a href="#live" className="hover:text-accent transition-colors">Live Dates</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-sm text-foreground/60">
                <a href="mailto:contact@theomusic.pt" className="hover:text-accent transition-colors">
                  contact@theomusic.pt
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/50">
            <p>&copy; 2026 THEO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
