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
 * 
 * Artist: THEO (João Gonçalves)
 * Real name: João Gonçalves
 * Origin: Caldas das Taipas, Guimarães, Portugal
 * Genre: Indie rock, alternative rock, emotional songwriting
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
            <a href="#about" className="text-sm hover:text-accent transition-colors">About</a>
            <a href="#live" className="text-sm hover:text-accent transition-colors">Live</a>
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
          <p className="text-xl md:text-2xl text-foreground/80 mb-4 font-light">
            Portuguese singer-songwriter, composer and producer
          </p>
          <p className="text-lg md:text-xl text-foreground/70 mb-12 font-light max-w-2xl mx-auto">
            Raw songs, cinematic atmosphere and emotional truth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg"
            >
              Listen
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10 px-8 py-6 text-lg"
            >
              Contact / Booking
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Release Section */}
      <section id="music" className="py-32 bg-background">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="mb-6">Latest Release</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-accent mb-6">Another Door</h3>
              <p className="text-sm text-foreground/60 mb-6 font-light">Release date: January 16, 2026</p>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed font-light">
                "Another Door" is the first single from THEO's upcoming album "Love Hate". 
                Intimate and emotionally direct, the song opens the door to a new artistic chapter, 
                exploring vulnerability, tension and the contradictions of love.
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                >
                  <Music size={20} />
                  Spotify
                  <ExternalLink size={16} />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                >
                  <Music size={20} />
                  Apple Music
                  <ExternalLink size={16} />
                </a>
                <a
                  href="#"
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

      {/* About Section */}
      <section id="about" className="py-32 bg-secondary/20">
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
              <h2 className="mb-8">About</h2>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed font-light">
                THEO is the artistic name of João Gonçalves, a Portuguese musician, songwriter and producer 
                from Caldas das Taipas, Guimarães. His music is driven by emotion, identity, love, loss and inner conflict.
              </p>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed font-light">
                He has released four studio records: <span className="text-accent font-semibold">Sinner</span> (2020), 
                <span className="text-accent font-semibold"> The World is not The Same</span> (2021), 
                <span className="text-accent font-semibold"> Estilhaços</span> (2022), and 
                <span className="text-accent font-semibold"> Sombra</span> (2024). His music has received airplay on 
                national radio and positive attention from the Portuguese music press.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed font-light">
                He is currently working on the album <span className="text-accent font-semibold">"Love Hate"</span>, 
                an intimate English-language record that marks a new artistic direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Band Section */}
      <section className="py-32 bg-background">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="mb-8">Live Band</h2>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed font-light">
                For the stage, THEO expands his songs with a full band format that brings depth, 
                tension and dynamic intensity to the live experience.
              </p>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed font-light">
                The project moves between intimacy and impact, preserving the emotional core of the songs 
                while opening space for a bigger and more immersive sound.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed font-light">
                THEO currently performs live with a band operating under the name <span className="text-accent font-semibold">Theo & The Dons</span>.
              </p>
            </div>
            <div
              className="relative h-96 md:h-full rounded-sm overflow-hidden animate-fade-in"
              style={{
                backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663429085971/igUmJg5nFrjZPq2TFev36u/theo-band-live-hQBW3YQzZkfXsdRA9kouvz.webp')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </section>

      {/* Venues Section */}
      <section className="py-32 bg-secondary/20">
        <div className="container max-w-4xl">
          <h2 className="mb-16 text-center animate-fade-in-up">Notable Venues & Festivals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Centro Cultural Vila Flor",
              "Casa da Música",
              "Rock no Rio Febras",
              "Rock in Barco",
              "Maus Hábitos",
              "CLAV Live Sessions",
              "CAAA",
              "Banhos Velhos",
            ].map((venue, idx) => (
              <div
                key={idx}
                className="border-l-2 border-accent pl-6 py-4 animate-fade-in-up"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <p className="text-lg text-foreground/80 font-light">{venue}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Dates Section */}
      <section id="live" className="py-32 bg-background">
        <div className="container max-w-4xl">
          <h2 className="mb-16 text-center animate-fade-in-up">Live Dates</h2>
          <div className="text-center animate-fade-in-up">
            <p className="text-xl text-foreground/70 font-light">
              New live dates will be announced soon.
            </p>
          </div>
        </div>
      </section>

      {/* Press & Media Section */}
      <section className="py-32 bg-secondary/20">
        <div className="container max-w-4xl">
          <h2 className="mb-16 text-center animate-fade-in-up">Selected Highlights</h2>
          <div className="space-y-6">
            {[
              "Four studio records released between 2020 and 2024",
              "Airplay on Portuguese national radio",
              "Live performances in notable Portuguese venues and festivals",
              "Currently working on the upcoming album \"Love Hate\"",
            ].map((item, idx) => (
              <div
                key={idx}
                className="border-l-2 border-accent pl-6 py-4 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <p className="text-lg text-foreground/80 font-light">• {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-background">
        <div className="container max-w-4xl text-center animate-fade-in-up">
          <h2 className="mb-8">Booking & Contact</h2>
          <p className="text-lg text-foreground/70 mb-12 font-light">
            For concerts, collaborations and professional inquiries.
          </p>
          <a
            href="mailto:booking@theomusic.pt"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-lg"
          >
            <Mail size={24} />
            booking@theomusic.pt
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
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="#"
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
                <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#live" className="hover:text-accent transition-colors">Live</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-sm text-foreground/60">
                <a href="mailto:booking@theomusic.pt" className="hover:text-accent transition-colors">
                  booking@theomusic.pt
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
