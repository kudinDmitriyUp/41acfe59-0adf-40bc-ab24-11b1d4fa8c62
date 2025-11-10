"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { BookOpen, Coffee, HelpCircle, Heart, MapPin, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="small"
      sizing="large"
      background="gradientBars"
      cardStyle="glass-elevated"
      primaryButtonStyle="flat"
      secondaryButtonStyle="minimal"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Blog", id: "blog" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="https://pixabay.com/get/g22d7931e551f09a495aba4b3bde049c968aee91f3dfe98f5672730a4a41abd6f3a39bad49396d82f457b108f39201b5a238289bade82e9d38c2ae92454408db6_1280.jpg"
          logoAlt="Sweet Dreams Bakery Logo"
          brandName="Sweet Dreams"
          button={{
            text: "Order Now",
            href: "https://orders.sweetdreamsbakery.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Fresh Baked Daily"
          description="Experience the finest artisan breads, pastries, and cakes made with love and traditional recipes passed down through generations."
          tag="Sweet Dreams Bakery"
          tagIcon={Coffee}
          buttons={[
            { text: "View Menu", href: "products" },
            { text: "Visit Store", href: "contact" }
          ]}
          imageSrc="https://pixabay.com/get/ge74a7522d5cbcb134aa37751711f0dc154db68aef4bf3a720389c504966571955136737ef4736688b949deb95c93664753178de0f18363df6e0b7fa5727013c4_1280.jpg"
          imageAlt="Fresh baked artisan breads and pastries"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "Founded in 1985, Sweet Dreams Bakery has been serving our community with the finest baked goods for nearly four decades.",
            "We combine traditional baking techniques with the freshest local ingredients to create breads, pastries, and cakes that bring joy to every table."
          ]}
          buttons={[
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Fresh Daily Selections"
          description="Discover our signature baked goods made fresh every morning with premium ingredients"
          tag="Our Products"
          tagIcon={Sparkles}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "croissants",
              name: "Butter Croissants",
              price: "$3.50",
              imageSrc: "https://pixabay.com/get/g14ee0edceb819e8365571dd04ed90296fa316b0120f7fc575010003b8faa0f084a4d3284327723d7507903293df50757697ce19b2e71796f1747a618fdacd8ab_1280.jpg",
              imageAlt: "Fresh butter croissants"
            },
            {
              id: "sourdough",
              name: "Artisan Sourdough",
              price: "$6.95",
              imageSrc: "https://pixabay.com/get/gd664da20167d49f5ecbe7f52b2edaa5a908939906d3dd379f9e3cde2fbdcb8d8a5f473148ecdca9adcd7d083cb267074a9c36180c745b94a6b60a991eab80503_1280.jpg",
              imageAlt: "Handcrafted sourdough bread"
            },
            {
              id: "cakes",
              name: "Custom Cakes",
              price: "$35.00",
              imageSrc: "https://pixabay.com/get/g875016c2f12cd377bbb4e77571d0d62abdbfdb8cb3274ccae0a74c98ee187aa2b42b862224a4640ac020ffd004169683883e01fe7804b2d88d82ce2fee69b52c_1280.jpg",
              imageAlt: "Beautiful custom celebration cakes"
            }
          ]}
          buttons={[
            { text: "View Full Menu", href: "https://menu.sweetdreamsbakery.com" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Hear from the families and food lovers who make our bakery special"
          tag="Reviews"
          tagIcon={Heart}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Regular Customer",
              testimonial: "The croissants here are absolutely divine! They taste just like the ones I had in Paris. Sweet Dreams has become our family's weekend tradition.",
              imageSrc: "https://pixabay.com/get/gee7b78fa226873ff5e32a698d2904d77ba89d7cf400d4046cefa28009b2cc123a42c1d3495c4bcd3983e32429803c3b6_1280.jpg",
              imageAlt: "Sarah Johnson customer photo"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Local Food Blogger",
              testimonial: "As someone who reviews bakeries professionally, I can say Sweet Dreams sets the gold standard. Their sourdough is perfection.",
              imageSrc: "https://pixabay.com/get/g9552d29b762d5722b860330886e5a69f9941220251457d82c09823d0bcc168508d1c128dec063f889e04c6edb0481e3a2da0a9c46a9e367c58e14a1946481c00_1280.jpg",
              imageAlt: "Michael Chen customer photo"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Party Planner",
              testimonial: "I've ordered custom cakes for dozens of events. Sweet Dreams never disappoints - beautiful designs and incredible taste every time.",
              imageSrc: "https://pixabay.com/get/gecf89d0605962501edde5fc09db9db19213fa4b2032d43af37435e83d086dd3c31e91661e70bace7cb86aad4939deaed6731e579d23820ef8f1fed5e7d0fa7b7_1280.jpg",
              imageAlt: "Emily Rodriguez customer photo"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Coffee Shop Owner",
              testimonial: "We partner with Sweet Dreams for all our pastries. Their consistency and quality help make our customers' mornings special.",
              imageSrc: "https://pixabay.com/get/ge77ea16ce5e297034638732de3654a1c5c11f1bc093d62367dee605697e20c721a09ef2a93ca02eab8626f2f72709e2f7fc87d28664642f27cec9d35a3eb206f_1280.jpg",
              imageAlt: "David Kim customer photo"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about our bakery, orders, and services"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          faqs={[
            {
              id: "1",
              title: "What time do you open and what are your hours?",
              content: "We're open Tuesday through Sunday, 7:00 AM to 7:00 PM. We're closed on Mondays to give our bakers a well-deserved rest!"
            },
            {
              id: "2",
              title: "Do you take custom cake orders?",
              content: "Absolutely! We love creating custom cakes for birthdays, weddings, and special events. Please give us at least 48 hours notice for custom orders."
            },
            {
              id: "3",
              title: "Are your products made fresh daily?",
              content: "Yes! All of our breads, pastries, and baked goods are made fresh every morning starting at 4:00 AM. We never sell day-old items."
            },
            {
              id: "4",
              title: "Do you offer gluten-free options?",
              content: "We have a selection of gluten-free breads and pastries available. Please call ahead to confirm availability as these items are made in limited quantities."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Baking Tips & Stories"
          description="Learn baking secrets, seasonal recipes, and stories from our kitchen"
          tag="Blog"
          tagIcon={BookOpen}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Tips",
              title: "5 Secrets to Perfect Bread at Home",
              excerpt: "Learn the professional techniques our bakers use to create perfect loaves every time",
              imageSrc: "https://pixabay.com/get/g900e64e816f4eea0082ef1b4eaf2aef9d8a3b666bf352d4dc173ffec032f59834c3da73d033f406b7401733a0458f92a740c13646089f1ff09ef8678c0c09158_1280.jpg",
              imageAlt: "Baker kneading bread dough",
              authorName: "Chef Marie",
              authorAvatar: "https://pixabay.com/get/gee7b78fa226873ff5e32a698d2904d77ba89d7cf400d4046cefa28009b2cc123a42c1d3495c4bcd3983e32429803c3b6_1280.jpg",
              date: "Dec 15, 2024"
            },
            {
              id: "2",
              category: "Seasonal",
              title: "Holiday Cookie Decorating Guide",
              excerpt: "Step-by-step techniques for creating beautiful holiday cookies that look professional",
              imageSrc: "https://pixabay.com/get/g580f6d03ccfebf80fb2d8473adcfd541a5271f4ea83610bea0b56c2c0b52821f160d96f515bbd076d17f78c8349fb0effca8e9aa2ad7cb588cae671c19986ed2_1280.jpg",
              imageAlt: "Decorated holiday cookies",
              authorName: "Pastry Team",
              authorAvatar: "https://pixabay.com/get/g9552d29b762d5722b860330886e5a69f9941220251457d82c09823d0bcc168508d1c128dec063f889e04c6edb0481e3a2da0a9c46a9e367c58e14a1946481c00_1280.jpg",
              date: "Dec 8, 2024"
            },
            {
              id: "3",
              category: "Ingredients",
              title: "Why We Choose Local Flour",
              excerpt: "Discover how sourcing the finest local ingredients makes all the difference in our baking",
              imageSrc: "https://pixabay.com/get/g1c65c023d18938a370f2a2be3dfc31115b85270a8dc003b4ae6f954724fac9398e2706cf71295b4d35ce0bf556293ecda3dd8ce94dab1d4520d4ae987a6e7d0d_1280.jpg",
              imageAlt: "Fresh baking ingredients",
              authorName: "Head Baker Tom",
              authorAvatar: "https://pixabay.com/get/ge77ea16ce5e297034638732de3654a1c5c11f1bc093d62367dee605697e20c721a09ef2a93ca02eab8626f2f72709e2f7fc87d28664642f27cec9d35a3eb206f_1280.jpg",
              date: "Nov 28, 2024"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Visit Us"
          title="Sweet Dreams Awaits You"
          description="Stop by our bakery for the freshest baked goods, or sign up for our newsletter to get weekly specials and baking tips delivered to your inbox."
          tagIcon={MapPin}
          inputPlaceholder="Your email address"
          buttonText="Subscribe"
          termsText="We respect your privacy and will only send you our weekly newsletter with specials and baking tips."
          imageSrc="https://pixabay.com/get/gc18fd46e236b60881a45c63d30c7778773898e2cb0985f3d6d013f27f06a353f69bfd7b6e705417fbb317b3a900ba3ffad78ffab9e0400c61b5ba9f5a96135c5_1280.jpg"
          imageAlt="Sweet Dreams Bakery interior"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Sweet Dreams Bakery"
          columns={[
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "about" },
                { label: "Visit Store", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Fresh Breads", href: "products" },
                { label: "Pastries", href: "products" },
                { label: "Custom Cakes", href: "products" }
              ]
            },
            {
              items: [
                { label: "Baking Tips", href: "blog" },
                { label: "Recipes", href: "blog" },
                { label: "Newsletter", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}