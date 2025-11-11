"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Atom, Bike, BookOpen, Hand, Handshake, HelpCircle, Layers3, Mail, MessageCircle, Mountain, Package, Settings2, Star, Zap } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="large"
      sizing="medium"
      background="fluid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Bikes", id: "products" },
            { name: "Technology", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Giant Bicycles"
          button={{
            text: "Find Dealer",
            href: "https://www.giant-bicycles.com/us/dealer-locator"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Ride Beyond Limits"
          description="Experience the perfect blend of innovation, performance, and reliability with Giant bicycles. From mountain trails to city streets, we've got your ride covered."
          tag="World's Leading Bicycle Brand"
          tagIcon={Mountain}
          buttons={[
            { text: "Explore Bikes", href: "products" },
            { text: "Find Dealer", href: "https://www.giant-bicycles.com/us/dealer-locator" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://pixabay.com/get/g9d925068ce6216d302626b31827bbfbe27e6b6eec90ea3ba2a61fdf90eaff28d32c04501ca7c467ade0762a89c9e64b45cba38f49a103c447fe93ed8616441d8_1280.jpg",
              imageAlt: "Giant mountain bike in action"
            },
            {
              imageSrc: "https://pixabay.com/get/g3b52dec24e83584215e69f48bf1dd8704017c04723792234a6e7d54bcda280b7610a6c6d29b48300b89c147743999e14e7098d44d002c07fb182ae3ef44cdb81_1280.jpg",
              imageAlt: "Mountain bike trail riding"
            },
            {
              imageSrc: "https://pixabay.com/get/g54a4621ef7ceb23abbe79aa99b89d6033181202a1d71402ab1710677700bd84b1b46f91a063d501cafacbf2ce7661a18b8dd45d9621a80098c15a2990b81fcac_1280.jpg",
              imageAlt: "Road bike racing"
            },
            {
              imageSrc: "https://pixabay.com/get/g1088f8c1ddcbde6ae59f88c2a208b1d06d6bc56d4c786c889729d5921c12b8a0a901e79160a83ba5a32ad6ca1970bf81bc79803502e630ea8333abbff6e4682d_1280.jpg",
              imageAlt: "Electric bike urban commuting"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Giant Heritage"
          description={[
            "For over 50 years, Giant has been crafting bicycles that push the boundaries of what's possible. From our humble beginnings in Taiwan to becoming the world's largest bicycle manufacturer, we've never stopped innovating.",
            "Our commitment to quality, performance, and rider experience drives everything we do. Whether you're a weekend warrior or a professional athlete, Giant bicycles are engineered to help you achieve your cycling goals."
          ]}
          buttons={[
            { text: "Our Story", href: "about" },
            { text: "Innovation Lab", href: "https://www.giant-bicycles.com/us/innovation" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFour
          title="Advanced Cycling Technology"
          description="Discover the cutting-edge innovations that make Giant bicycles stand out"
          tag="Innovation"
          tagIcon={Zap}
          textboxLayout="default"
          animationType="blur-reveal"
          features={[
            {
              title: "ALUXX Aluminum",
              description: "Our proprietary aluminum alloy technology delivers the perfect balance of lightweight performance and lasting durability for every ride",
              icon: Atom
            },
            {
              title: "Advanced Composite",
              description: "Carbon fiber construction using our Advanced-Grade composite materials for ultimate stiffness-to-weight ratio and responsive handling",
              icon: Layers3
            },
            {
              title: "Maestro Suspension",
              description: "Four-bar linkage system engineered for optimal traction, control, and efficiency across all terrain types and riding conditions",
              icon: Settings2
            },
            {
              title: "Contact Points",
              description: "Ergonomically designed saddles, grips, and pedals that maximize comfort and power transfer for longer, more enjoyable rides",
              icon: Hand
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Our Bicycle Collection"
          description="Explore our complete range of high-performance bicycles designed for every rider"
          tag="2024 Models"
          tagIcon={Bike}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "trance-x",
              name: "Trance X Advanced Pro",
              price: "$4,200",
              imageSrc: "https://pixabay.com/get/g3b52dec24e83584215e69f48bf1dd8704017c04723792234a6e7d54bcda280b7610a6c6d29b48300b89c147743999e14e7098d44d002c07fb182ae3ef44cdb81_1280.jpg",
              imageAlt: "Giant Trance X mountain bike",
              onProductClick: () => window.open('https://www.giant-bicycles.com/us/trance-x-advanced-pro-0', '_blank')
            },
            {
              id: "propel-advanced",
              name: "Propel Advanced SL",
              price: "$5,800",
              imageSrc: "https://pixabay.com/get/g54a4621ef7ceb23abbe79aa99b89d6033181202a1d71402ab1710677700bd84b1b46f91a063d501cafacbf2ce7661a18b8dd45d9621a80098c15a2990b81fcac_1280.jpg",
              imageAlt: "Giant Propel road bike",
              onProductClick: () => window.open('https://www.giant-bicycles.com/us/propel-advanced-sl-0', '_blank')
            },
            {
              id: "explore-e",
              name: "Explore E+ Pro",
              price: "$3,400",
              imageSrc: "https://pixabay.com/get/g1088f8c1ddcbde6ae59f88c2a208b1d06d6bc56d4c786c889729d5921c12b8a0a901e79160a83ba5a32ad6ca1970bf81bc79803502e630ea8333abbff6e4682d_1280.jpg",
              imageAlt: "Giant Explore E+ electric bike",
              onProductClick: () => window.open('https://www.giant-bicycles.com/us/explore-e-plus-pro', '_blank')
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Bike Packages"
          description="Choose the perfect Giant bicycle package for your riding style and budget"
          tag="Packages"
          tagIcon={Package}
          textboxLayout="default"
          animationType="scale-rotate"
          plans={[
            {
              id: "essential",
              price: "$800 - $1,500",
              name: "Essential Series",
              buttons: [
                { text: "View Bikes", href: "products" },
                { text: "Find Dealer", href: "https://www.giant-bicycles.com/us/dealer-locator" }
              ],
              features: ["ALUXX aluminum frame", "Reliable components", "Perfect for beginners", "2-year warranty"]
            },
            {
              id: "performance",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$1,500 - $3,000",
              name: "Performance Series",
              buttons: [
                { text: "View Bikes", href: "products" },
                { text: "Find Dealer", href: "https://www.giant-bicycles.com/us/dealer-locator" }
              ],
              features: ["Advanced-Grade composite", "Premium components", "Race-ready performance", "Extended warranty"]
            },
            {
              id: "pro",
              price: "$3,000+",
              name: "Pro Series",
              buttons: [
                { text: "View Bikes", href: "products" },
                { text: "Find Dealer", href: "https://www.giant-bicycles.com/us/dealer-locator" }
              ],
              features: ["Top-tier carbon construction", "Professional components", "Competition ready", "Lifetime frame warranty"]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Giant by the Numbers"
          description="Our commitment to cycling excellence reflected in our achievements"
          tag="Achievements"
          tagIcon={Award}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="opacity"
          metrics={[
            { id: "1", value: "50+", description: "Years of Innovation" },
            { id: "2", value: "#1", description: "Global Bicycle Brand" },
            { id: "3", value: "12M+", description: "Bikes Sold Annually" },
            { id: "4", value: "50+", description: "Countries Worldwide" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Riders Love Giant"
          description="Hear from cyclists who trust Giant for their adventures"
          tag="Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Professional Mountain Biker",
              testimonial: "My Giant Trance has been incredible on every trail. The Maestro suspension system gives me confidence on technical descents while still being efficient on climbs. It's the perfect all-mountain bike.",
              imageSrc: "https://pixabay.com/get/gb7c0274b3ebc8786bef8bd98206d99058c22f383fc3703fdb43416e392811a0afd3fccef1c439f6f1499b370fbbcb63e3138256394d1abf25f4be5b8d718e97d_1280.jpg",
              imageAlt: "Sarah Johnson cycling"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Cycling Enthusiast",
              testimonial: "I've put over 15,000 miles on my Giant Propel and it still rides like new. The aerodynamic design and Advanced-Grade composite frame make every ride smooth and fast.",
              imageSrc: "https://pixabay.com/get/g06949d1ebc5dbb29e402f21a5cb24782d7c9f9efe7865c487c398f8e4f9f2f16b420f00c975b2798a45802e6607d747eed40917638c94e66d9fdf471d2b97bf7_1280.jpg",
              imageAlt: "Michael Chen with road bike"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Commuter & Weekend Rider",
              testimonial: "The Explore E+ has completely transformed my daily commute. The motor assistance is perfectly balanced, and the battery easily gets me to work and back with power to spare.",
              imageSrc: "https://pixabay.com/get/g953d076d629352694f541b0187c3946de363511feb72e102d1a0ad6bdc35f5d3e39eb71a11ec5b9cfaed72eea141204930ec5be441ff9036ec4db104554c9cab_1280.jpg",
              imageAlt: "Emily Rodriguez on electric bike"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Bike Shop Owner",
              testimonial: "Giant bicycles are consistently our top sellers because of their quality and reliability. Customers return year after year because they trust the Giant name and performance.",
              imageSrc: "https://pixabay.com/get/ge7ab074a5a8ecd3c2fd3a0b0a0161e4a2d9a7c3f8cc22b5756bed2cbd4c3446d85bf62841dd5c767f8f29ebf252ff280e9d8a3c1e935e070398e302531edda18_1280.jpg",
              imageAlt: "David Kim in bike shop"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Leading Cycling Brands"
          description="Join the community of world-class cyclists and brands who choose Giant"
          tag="Partners"
          tagIcon={Handshake}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g21ff435a4c77233097e2e33f9e878f01ac814b310b184b497986e06a41b0b08b0a83f0b8ace725b10337ad7e05d7dd958cdf9689f8cfae8cd74c3368b4ab7c1e_1280.jpg",
            "https://pixabay.com/get/g5a41a90b3e30c931b63720828033c2090929de6abb3c710886b19c4eb0f3fb8eaa2dea8532c8fc022aa982c3e23f4f9c9bf8f2a3957c5cafb71727509ec85f06_1280.jpg",
            "https://pixabay.com/get/g472212870a28befb87e7118ad9949ea144fea89c513df95cf076370cabab8c37dbdbab348d0469ea6a9e1bb684c76a8e4b44726e7cb339bbfce69e800cd2b067_1280.jpg",
            "https://pixabay.com/get/g3b4023a3d815258b9969abbc4f8f2d24f398f714bd39abc27ffa9ddfc722ef9fae46693bb26985d6afd376ca6bab811d9c323a88338c4ec26f8b09c78e097aa4_1280.jpg",
            "https://pixabay.com/get/g08f6a3ace056cfc07a4833713ea2d71cffa53cbde52029fe955fc9a372a149b8f57bb7abc46574328508a2b3cee5ef2d0c9c82f69f3861cba605e84fd4dbff5b_1280.jpg",
            "https://pixabay.com/get/g11ece1bec71d10c16ce55070aa4cb8f28540df2b3be7b3449d67547eee9f6316d677816842842531ecd048f6b7f7432bc2870b00714427b5f85972672085e08a_1280.jpg",
            "https://pixabay.com/get/gcd504689896963999c8fb2a39a349a0f8b159a92e64df0c7257131b9db0a131ddd714d9531e1693ea97c51f9a9f30494a19f88f799569af244cbb4062d5a2bcc_1280.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about Giant bicycles and our services"
          tag="Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What makes Giant bicycles different?",
              content: "Giant combines 50+ years of innovation with advanced manufacturing techniques. Our proprietary technologies like ALUXX aluminum and Advanced-Grade composite, plus our Maestro suspension system, deliver unmatched performance and reliability."
            },
            {
              id: "2",
              title: "How do I choose the right Giant bike?",
              content: "Consider your riding style, terrain, and budget. Our Essential Series is perfect for beginners, Performance Series for enthusiasts, and Pro Series for competitive riders. Visit a local dealer for professional fitting and advice."
            },
            {
              id: "3",
              title: "What warranty do Giant bikes come with?",
              content: "All Giant bicycles come with a comprehensive warranty. Essential and Performance series include a 2-year warranty, while Pro series bikes feature a lifetime frame warranty. Components are covered separately by their manufacturers."
            },
            {
              id: "4",
              title: "Where can I buy Giant bicycles?",
              content: "Giant bicycles are available through our network of authorized dealers worldwide. Use our dealer locator to find the nearest Giant retailer for expert advice, test rides, and professional service."
            },
            {
              id: "5",
              title: "Do you offer electric bikes?",
              content: "Yes! Our E+ series includes urban commuter bikes, mountain e-bikes, and road e-bikes. All feature Giant's EnergyPak battery systems and SyncDrive motors for natural, powerful assistance."
            },
            {
              id: "6",
              title: "What maintenance do Giant bikes require?",
              content: "Regular maintenance includes checking tire pressure, cleaning and lubricating the chain, and periodic tune-ups at an authorized dealer. Our bikes are designed for durability and easy maintenance to keep you riding longer."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Cycling Insights"
          description="Tips, stories, and updates from the world of cycling"
          tag="Blog"
          tagIcon={BookOpen}
          textboxLayout="default"
          animationType="blur-reveal"
          blogs={[
            {
              id: "1",
              category: "Maintenance",
              title: "Essential Bike Maintenance Tips",
              excerpt: "Keep your Giant bicycle running smoothly with these expert maintenance tips and tricks for maximum performance and longevity.",
              imageSrc: "https://pixabay.com/get/gd4f1b5a1fa0db72228841bf4301e15975ac0e18d33e17aaecd26aa929aa65f29b5f84e797ebeb07eaf8a87aa359cc809083a8d07414935c697b18f4581c3286e_1280.jpg",
              imageAlt: "Bike maintenance tools",
              authorName: "Tech Team Giant",
              authorAvatar: "https://pixabay.com/get/ge7ab074a5a8ecd3c2fd3a0b0a0161e4a2d9a7c3f8cc22b5756bed2cbd4c3446d85bf62841dd5c767f8f29ebf252ff280e9d8a3c1e935e070398e302531edda18_1280.jpg",
              date: "March 15, 2024",
              onBlogClick: () => window.open('https://www.giant-bicycles.com/us/campaigns/maintenance-tips', '_blank')
            },
            {
              id: "2",
              category: "Safety",
              title: "Cycling Safety Essentials",
              excerpt: "Stay safe on every ride with our comprehensive guide to cycling safety gear, visibility, and road awareness techniques.",
              imageSrc: "https://pixabay.com/get/g6509609d5133dfe84b9f986c855328be13b2392133edbb2a15d7632490ece20eb402ba09563006c1c187e0919e73c0b223bcbcf58629717b5854c15077fe950a_1280.jpg",
              imageAlt: "Cycling safety gear",
              authorName: "Safety Experts",
              authorAvatar: "https://pixabay.com/get/g953d076d629352694f541b0187c3946de363511feb72e102d1a0ad6bdc35f5d3e39eb71a11ec5b9cfaed72eea141204930ec5be441ff9036ec4db104554c9cab_1280.jpg",
              date: "March 10, 2024",
              onBlogClick: () => window.open('https://www.giant-bicycles.com/us/campaigns/safety-guide', '_blank')
            },
            {
              id: "3",
              category: "Adventure",
              title: "Epic Cycling Routes Worldwide",
              excerpt: "Discover breathtaking cycling routes around the globe perfect for your next Giant bicycle adventure and exploration journey.",
              imageSrc: "https://pixabay.com/get/gd3dcb756463aeb7a578a2753851d9838b2d52f6d04c88dd7d790121e5682f63d34080f934cd1eca7eae16432fc5c8869e8e64bd7eb10ecc5b0378377c466ffac_1280.jpg",
              imageAlt: "Scenic cycling route",
              authorName: "Adventure Team",
              authorAvatar: "https://pixabay.com/get/g06949d1ebc5dbb29e402f21a5cb24782d7c9f9efe7865c487c398f8e4f9f2f16b420f00c975b2798a45802e6607d747eed40917638c94e66d9fdf471d2b97bf7_1280.jpg",
              date: "March 5, 2024",
              onBlogClick: () => window.open('https://www.giant-bicycles.com/us/campaigns/adventure-routes', '_blank')
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Connected"
          title="Join the Giant Community"
          description="Get the latest updates on new bikes, technology innovations, cycling tips, and exclusive offers delivered straight to your inbox."
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive marketing emails from Giant. You can unsubscribe at any time."
          onSubmit={(email) => console.log('Newsletter signup:', email)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Giant"
          columns={[
            {
              items: [
                { label: "Mountain Bikes", href: "https://www.giant-bicycles.com/us/bikes/mountain" },
                { label: "Road Bikes", href: "https://www.giant-bicycles.com/us/bikes/road" },
                { label: "Electric Bikes", href: "https://www.giant-bicycles.com/us/bikes/electric" },
                { label: "Urban Bikes", href: "https://www.giant-bicycles.com/us/bikes/urban" }
              ]
            },
            {
              items: [
                { label: "Technology", href: "https://www.giant-bicycles.com/us/innovation" },
                { label: "Sustainability", href: "https://www.giant-bicycles.com/us/sustainability" },
                { label: "Racing", href: "https://www.giant-bicycles.com/us/racing" },
                { label: "Gear", href: "https://www.giant-bicycles.com/us/gear" }
              ]
            },
            {
              items: [
                { label: "Dealer Locator", href: "https://www.giant-bicycles.com/us/dealer-locator" },
                { label: "Support", href: "https://www.giant-bicycles.com/us/support" },
                { label: "Warranty", href: "https://www.giant-bicycles.com/us/warranty" },
                { label: "Manuals", href: "https://www.giant-bicycles.com/us/support/manuals" }
              ]
            },
            {
              items: [
                { label: "About Giant", href: "https://www.giant-bicycles.com/us/about-giant" },
                { label: "Careers", href: "https://www.giant-bicycles.com/us/careers" },
                { label: "Press", href: "https://www.giant-bicycles.com/us/press" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}