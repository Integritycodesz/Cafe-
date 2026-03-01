import Header from "@/components/Header";
import Banner from "@/components/Banner";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />

      {/* Hero Section */}
      <HeroSection />

      {/* Caramel Protein Section */}
      <ContentSection
        id="menu"
        imageSrc="/images/caramel-protein.png"
        imageAlt="Caramel Protein Latte and Caramel Protein Matcha drinks"
        title="Caramel Protein power"
        description="Power up with the new Caramel Protein Latte and Caramel Protein Matcha. Handcrafted with Protein-boosted Milk for up to 31 grams of protein per grande. Available hot, iced and with sugar-free syrup."
        ctaText="Explore caramel protein"
        ctaClass="btn btn--outline-green"
        bgClass="section__content--cream"
        reverse
      />

      {/* Rewards Section */}
      <ContentSection
        id="rewards"
        imageSrc="/images/welcome-drink.png"
        imageAlt="Starbucks iced coffee drink being made"
        title="Free drink? It's yours."
        description={
          <>
            When you join, enjoy a <strong>free handcrafted drink</strong> with
            purchase. It&apos;s our way of welcoming you to Starbucks® Rewards
            during your first week.*
          </>
        }
        ctaText="Join now"
        ctaClass="btn btn--dark"
        bgClass="section__content--sage"
      />

      {/* Bakery Section */}
      <ContentSection
        id="bakery"
        imageSrc="/images/bakery-items.png"
        imageAlt="Fresh bakery items including matcha cake and pastries"
        title="A new era of bakery"
        description="Six new crave-worthy treats have arrived, blending inspiration and nostalgic flavors. Find them in our refreshed bakery case."
        ctaText="Order now"
        ctaClass="btn btn--outline-light"
        bgClass="section__content--dark-green"
        reverse
        lightTitle
        lightDesc
      />

      {/* Refills Section */}
      <ContentSection
        id="refills"
        imageSrc="/images/black-coffee.png"
        imageAlt="A steaming cup of brewed coffee on a wooden table"
        title="Grab a seat. Get free refills."
        description="When you stay to enjoy your favorite beverage in the café, refills of hot and iced brewed coffee or tea are on us.**"
        ctaText="Order now"
        ctaClass="btn btn--outline-green"
        bgClass="section__content--beige"
      />

      <Footer />
    </>
  );
}
