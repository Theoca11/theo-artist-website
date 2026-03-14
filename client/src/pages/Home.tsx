import { Button } from "@/components/ui/button";
import { Mail, Music, MapPin, ExternalLink, Instagram, Youtube, Facebook } from "lucide-react";
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
          <h1 className="text-8xl md:text-9xl font-bold tracking-tighter mb-4">THEO</h1>
          <p className="text-2xl md:text-3xl text-accent mb-6 font-light italic">
            Songs about love, conflict and the quiet battles within.
          </p>
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 font-light">
            Portuguese singer-songwriter, composer and producer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://open.spotify.com/intl-pt/artist/6UwbXsC4zpzw4nOf1VU5Wm?si=e8bRzewmQISp4909ld_8bg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg"
              >
                Listen to THEO
              </Button>
            </a>
            <a
              href="https://open.spotify.com/intl-pt/track/41V0INDv0XxVTMrk7Avbbi?si=14f12528783a434e"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 px-8 py-6 text-lg"
              >
                Latest Single — Another Door
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Latest Release Section */}
      <section id="music" className="py-32 bg-background">
        <div className="container max-w-6xl">
          <div className="mb-16 text-center animate-fade-in-up">
            <div className="inline-block bg-accent/20 border border-accent px-4 py-2 rounded-sm mb-6">
              <p className="text-accent font-semibold text-sm tracking-wide">NEW SINGLE OUT NOW</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="mb-6">Latest Release</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-accent mb-6">Another Door</h3>
              <p className="text-sm text-foreground/60 mb-6 font-light">Release date: January 16, 2026</p>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed font-light">
                "Another Door" is the first single from THEO's upcoming album "Love Hate". 
                An intimate and emotionally direct song that opens a new chapter in his artistic path, 
                exploring vulnerability, tension and the contradictions of love.
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="https://open.spotify.com/intl-pt/track/41V0INDv0XxVTMrk7Avbbi?si=14f12528783a434e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                >
                  <Music size={20} />
                  Listen on Spotify
                  <ExternalLink size={16} />
                </a>
                <a
                  href="https://music.apple.com/pt/artist/theo/1647384552"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                >
                  <Music size={20} />
                  Listen on Apple Music
                  <ExternalLink size={16} />
                </a>
                <a
                  href="https://www.youtube.com/@Theo-zc8wc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                >
                  <Youtube size={20} />
                  Watch on YouTube
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
            <div
              className="relative h-96 md:h-full rounded-sm overflow-hidden animate-fade-in"
              style={{
                backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663429085971/igUmJg5nFrjZPq2TFev36u/IMG_2816_39095f2b.jpeg')`,
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
                backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663429085971/igUmJg5nFrjZPq2TFev36u/E2D57E2D-78A5-4A34-85A4-B4D1C3430D8E_e3cda072.jpeg')`,
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
              <div className="mt-8 pt-8 border-t border-border/30">
                <h3 className="text-2xl font-semibold text-accent mb-4">THEO & THE DONS</h3>
                <p className="text-lg text-foreground/70 leading-relaxed font-light mb-4">
                  "The Dons" were originally my band more than twenty-five years ago. We were young, driven by the urgency of music, playing wherever we could and learning what it meant to be on a stage.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed font-light mb-4">
                  Years later, the name returned naturally — not as nostalgia, but as a continuation of that spirit.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed font-light">
                  Today, Theo & The Dons brings those songs back to life with the same honesty and intensity, expanding THEO's music into a powerful live experience where intimacy and energy coexist.
                </p>
              </div>
            </div>
            <div
              className="relative w-full rounded-sm overflow-hidden animate-fade-in"
              style={{
                backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663429085971/igUmJg5nFrjZPq2TFev36u/f8c936a0-dda0-4a2d-99ef-008d9961ea1a_ddb15841.jpg')`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                aspectRatio: "9/16",
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
            href="mailto:theomusico11@gmail.com"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-lg"
          >
            <Mail size={24} />
            theomusico11@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 py-16 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="font-semibold mb-4">Follow</h3>
              <div className="flex gap-6">
                <a
                  href="https://open.spotify.com/intl-pt/artist/6UwbXsC4zpzw4nOf1VU5Wm?si=e8bRzewmQISp4909ld_8bg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                  title="Spotify"
                >
                  <Music size={20} />
                </a>
                <a
                  href="https://music.apple.com/pt/artist/theo/1647384552"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                  title="Apple Music"
                >
                  <Music size={20} />
                </a>
                <a
                  href="https://www.youtube.com/@Theo-zc8wc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                  title="YouTube"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="https://www.instagram.com/theo_music_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                  title="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/theomusico11/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                  title="Facebook"
                >
                  <Facebook size={20} />
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
                <a href="mailto:theomusico11@gmail.com" className="hover:text-accent transition-colors">
                  theomusico11@gmail.com
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
