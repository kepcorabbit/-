import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Play, Pause, Mail, ArrowRight, Menu, ChevronDown, Sun, Moon } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

interface NavbarHeroProps {
  brandName?: React.ReactNode;
  heroTitle?: React.ReactNode;
  heroSubtitle?: React.ReactNode;
  heroDescription?: React.ReactNode;
  backgroundImage?: string;
  backgroundAlt?: string;
  /** 비워두면 재생 버튼이 숨겨지고 이미지만 노출됩니다. */
  videoUrl?: string;
  emailPlaceholder?: string;
  navItems?: NavItem[];
  loginLabel?: string;
  loginHref?: string;
  ctaLabel?: string;
  ctaHref?: string;
  submitLabel?: string;
  inputType?: React.HTMLInputTypeAttribute;
  inputLabel?: string;
  inputIcon?: LucideIcon;
  onSubmit?: (value: string) => void;
  showThemeToggle?: boolean;
  className?: string;
}

const defaultNavItems: NavItem[] = [
  { label: 'About', href: '#' },
  { label: 'Resources', children: [{ label: 'Submenu 1', href: '#' }, { label: 'Submenu 2', href: '#' }] },
  { label: 'Blog', href: '#' },
  { label: 'Plans & Pricing', children: [{ label: 'Plan A', href: '#' }, { label: 'Plan B', href: '#' }] },
];

const NavbarHero: React.FC<NavbarHeroProps> = ({
  brandName = "nexus",
  heroTitle = "Innovation Meets Simplicity",
  heroSubtitle,
  heroDescription = "Discover cutting-edge solutions designed for the modern digital landscape.",
  backgroundImage = "https://cdn.21st.dev/assets/mirror/ed/ed875f1e75349c119d95e98931e7f8131d4665641767371c12be6964264f14d0.jpg",
  backgroundAlt = "Earth from space at night",
  videoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  emailPlaceholder = "enter@email.com",
  navItems = defaultNavItems,
  loginLabel = "Login",
  loginHref = "#",
  ctaLabel = "Get Started",
  ctaHref = "#",
  submitLabel = "Join Now",
  inputType = "email",
  inputLabel = "Email",
  inputIcon: InputIcon = Mail,
  onSubmit,
  showThemeToggle = true,
  className,
}) => {
  const [email, setEmail] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEmailSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (onSubmit) onSubmit(email);
    else console.log('Email submitted:', email);
  };

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPlaying(true);
      setIsVideoPaused(false);
    }
  };

  const handlePauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsVideoPaused(true);
    }
  };

  const handleResumeVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPaused(false);
    }
  };

  const handleVideoEnded = () => {
    setIsVideoPlaying(false);
    setIsVideoPaused(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const ThemeToggleButton = () => {
    if (!mounted) return <div className="w-10 h-10" />;
    return (
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="bg-muted hover:bg-border flex-shrink-0 p-2.5 rounded-full transition-colors"
        aria-label="Toggle theme"
      >
        {theme === "light" ? <Moon className="h-5 w-5 text-foreground" /> : <Sun className="h-5 w-5 text-foreground" />}
      </button>
    );
  };

  return (
    <main className={cn("absolute inset-0 bg-background overflow-y-auto", className)}>
      <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* --- Navbar --- */}
        <div className="py-2 relative z-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a href="#" className="font-bold text-2xl pb-1 text-foreground cursor-pointer flex-shrink-0">
              {brandName}
            </a>
            <nav className="hidden lg:flex text-muted-foreground font-medium">
              <ul className="flex items-center space-x-2">
                {navItems.map((item) =>
                  item.children ? (
                    <li key={item.label} className="relative">
                      <button onClick={() => toggleDropdown(`desktop-${item.label}`)} className="flex items-center hover:text-foreground px-3 py-2 text-sm transition-colors rounded-lg">
                        {item.label}<ChevronDown className={`h-4 w-4 ml-1 transition-transform ${openDropdown === `desktop-${item.label}` ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === `desktop-${item.label}` && (
                        <ul className="absolute top-full left-0 mt-2 p-2 bg-card border border-border shadow-lg rounded-xl z-20 w-48">
                          {item.children.map((child) => (
                            <li key={child.label}><a href={child.href} onClick={() => setOpenDropdown(null)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg">{child.label}</a></li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ) : (
                    <li key={item.label}><a href={item.href ?? '#'} className="hover:text-foreground px-3 py-2 text-sm transition-colors rounded-lg">{item.label}</a></li>
                  )
                )}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-3">
              {loginLabel && (
                <a href={loginHref} className="text-foreground hover:text-muted-foreground cursor-pointer py-2 px-4 text-sm capitalize font-medium transition-colors rounded-xl">{loginLabel}</a>
              )}
              <a href={ctaHref} className="bg-foreground hover:bg-muted-foreground text-background py-2.5 px-5 text-sm rounded-xl capitalize font-medium transition-colors flex items-center gap-2">
                {ctaLabel}<ArrowRight className="h-4 w-4" />
              </a>
            </div>
            {showThemeToggle && <ThemeToggleButton />}
            <div className="lg:hidden relative">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="메뉴 열기" aria-expanded={isMobileMenuOpen} className="bg-transparent hover:bg-muted border-none p-2 rounded-xl transition-colors text-foreground">
                <Menu className="h-6 w-6" />
              </button>
              {isMobileMenuOpen && (
                <ul className="absolute top-full right-0 mt-2 p-2 shadow-lg bg-card border border-border rounded-xl w-56 z-30">
                  {navItems.map((item) =>
                    item.children ? (
                      <li key={item.label}>
                        <button onClick={() => toggleDropdown(`mobile-${item.label}`)} className="w-full flex items-center justify-between px-3 py-2 text-sm text-foreground hover:bg-muted rounded-lg">
                          {item.label}<ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === `mobile-${item.label}` ? 'rotate-180' : ''}`} />
                        </button>
                        {openDropdown === `mobile-${item.label}` && (
                          <ul className="ml-4 mt-1 border-l border-border pl-3">
                            {item.children.map((child) => (
                              <li key={child.label}><a href={child.href} onClick={closeMobileMenu} className="block px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg">{child.label}</a></li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ) : (
                      <li key={item.label}><a href={item.href ?? '#'} onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-lg">{item.label}</a></li>
                    )
                  )}
                  <li className="border-t border-border mt-2 pt-2 space-y-2">
                    {loginLabel && (
                      <a href={loginHref} onClick={closeMobileMenu} className="block w-full text-center px-3 py-2 text-sm text-foreground hover:bg-muted rounded-lg">{loginLabel}</a>
                    )}
                    <a href={ctaHref} onClick={closeMobileMenu} className="w-full bg-foreground text-background hover:bg-muted-foreground px-3 py-2.5 text-sm rounded-lg flex items-center justify-center gap-2 font-medium">
                      {ctaLabel}<ArrowRight className="h-4 w-4" />
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* --- Hero Section --- */}
        <div className="pt-4 pb-10 sm:pt-6 sm:pb-12 text-center">
          <div className="max-w-2xl mx-auto">
            {heroSubtitle && (
              <div className="mb-5 inline-flex items-center rounded-full bg-muted px-4 py-1.5 text-sm font-semibold text-foreground">{heroSubtitle}</div>
            )}
            <h1 className="text-3xl sm:text-5xl md:text-5xl text-foreground font-bold tracking-tight">{heroTitle}</h1>
            <p className="mt-6 text-lg text-muted-foreground">{heroDescription}</p>
            <form onSubmit={handleEmailSubmit} className="mt-8 flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
              <div className="relative">
                <InputIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                <input type={inputType} aria-label={inputLabel} placeholder={emailPlaceholder} value={email} onChange={(e) => setEmail(e.target.value)} className="w-full max-w-xs bg-muted border-border text-foreground placeholder-muted-foreground font-medium pl-10 pr-4 py-2 text-sm sm:pl-11 sm:py-3 sm:text-base rounded-full focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <button type="submit" className="bg-foreground hover:bg-muted-foreground text-background px-5 py-2 text-sm sm:px-6 sm:py-3 sm:text-base rounded-full normal-case font-medium transition-colors flex items-center gap-2">
                {submitLabel}<ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* --- Media Header --- */}
        <header className="relative w-full aspect-video rounded-3xl overflow-hidden">
          <img src={backgroundImage} alt={backgroundAlt} className={`w-full h-full absolute inset-0 object-cover transition-opacity duration-500 ${isVideoPlaying ? 'opacity-0' : 'opacity-100'}`} />
          {videoUrl && (
            <>
              <video ref={videoRef} src={videoUrl} className={`w-full h-full absolute inset-0 object-cover transition-opacity duration-500 ${isVideoPlaying ? 'opacity-100' : 'opacity-0'}`} onEnded={handleVideoEnded} playsInline muted />
              <div className="absolute bottom-5 right-5 z-10">
                {!isVideoPlaying ? (
                  <button onClick={handlePlayVideo} aria-label="영상 재생" className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-200 shadow-lg">
                    <Play className="h-7 w-7 text-white fill-white ml-1" />
                  </button>
                ) : (
                  <button onClick={isVideoPaused ? handleResumeVideo : handlePauseVideo} aria-label={isVideoPaused ? "영상 재생" : "영상 일시정지"} className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-200 shadow-lg">
                    {isVideoPaused ? <Play className="h-7 w-7 text-white fill-white ml-1" /> : <Pause className="h-7 w-7 text-white fill-white" />}
                  </button>
                )}
              </div>
            </>
          )}
        </header>
      </div>
    </main>
  );
};

export { NavbarHero };
export type { NavbarHeroProps, NavItem };
