"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import CyclopsHero from '@/components/sections/layouts/hero/SplitHero';
import BaseAbout from '@/components/sections/layouts/about/BaseAbout';
import ImageFAQ from '@/components/sections/layouts/faq/ImageFAQ';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutSplitBottom 
          logoSrc="/favicon.ico" 
          logoWidth={100} 
          logoHeight={100} 
          buttonText="Buy MemeCoin" 
          onButtonClick={() => {}} 
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "FAQ", id: "faq" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" },
          ]}
        />
      </div>
      <div id="hero" data-section="hero" style={{ backgroundImage: "url(https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/theme-funandtrendy-section-hero-slot-con-1758880790246-d5dee170.jpg)" }}>
        <CyclopsHero 
          title="Welcome to MemeCoin Fiesta" 
          subtitle="Join the meme revolution!" 
          primaryButtonText="Buy Now" 
          secondaryButtonText="Learn More" 
          characterImage="/path/to/character.png" 
          characterImageAlt="Character illustration" 
          onPrimaryButtonClick={() => {}} 
          onSecondaryButtonClick={() => {}} 
        />
      </div>
      <div id="about" data-section="about">
        <BaseAbout 
          title="About MemeCoin Fiesta" 
          descriptions={[
            "MemeCoin Fiesta is a fun and engaging platform for exploring memecoins.",
            "We aim to create a strong community around our tokens.",
            "Get involved and share the memes!"
          ]} 
        />
      </div>
      <div id="faq" data-section="faq" style={{ backgroundImage: "none" }}>
        <ImageFAQ 
          title="Frequently Asked Questions" 
          description="Got questions? We have answers!" 
          image="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/theme-funandtrendy-section-faq-slot-cont-1758880792200-814f8b6f.jpg" 
          imageAlt="FAQ Visual" 
          items={[
            { title: "What is MemeCoin Fiesta?", content: "MemeCoin Fiesta is an innovative memecoin platform." },
            { title: "How can I buy tokens?", content: "You can buy tokens easily through our platform." },
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="reveal" />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <PatternTokenomics 
          title="Tokenomics" 
          description="Detailing our token distribution and economic model." 
          items={[
            { value: "$1M", description: "Total Supply" },
            { value: "50%", description: "Token Sale" },
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasisBackgroundGradient 
          logoSrc="/path/to/logo.png" 
          logoAlt="MemeCoin Fiesta Logo" 
          logoText="MemeCoin Fiesta" 
          items={[
            { label: "Privacy Policy", onClick: () => {} },
            { label: "Terms of Service", onClick: () => {} }
          ]} 
          className="footer-class" 
          containerClassName="container-class" 
        />
      </div>
    </SiteThemeProvider>
  );
}
