import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function HeroSection() {
    return (
        <ScrollReveal className="section--hero" id="hero">
            <div className="section__split">
                <div className="section__image" id="hero-image">
                    <Image
                        src="/images/matcha-drinks.png"
                        alt="Three beautiful matcha drinks - iced matcha lattes and blended beverages"
                        width={720}
                        height={520}
                        priority
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
                <div className="section__content section__content--sage" id="hero-content">
                    <h1 className="section__title">Bold new matcha menu</h1>
                    <p className="section__desc">
                        Meet the matcha edit: delicious matcha made from shade-grown green tea
                        leaves, layered with flavors of banana bread, double berry and Dubai
                        chocolate.
                    </p>
                    <a href="#" className="btn btn--dark" id="hero-cta">
                        Order from the matcha menu
                    </a>
                </div>
            </div>
        </ScrollReveal>
    );
}
