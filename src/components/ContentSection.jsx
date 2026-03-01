import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function ContentSection({
    id,
    imageSrc,
    imageAlt,
    title,
    description,
    ctaText,
    ctaClass = "btn btn--dark",
    bgClass = "section__content--sage",
    reverse = false,
    lightTitle = false,
    lightDesc = false,
    priority = false,
}) {
    return (
        <ScrollReveal id={id}>
            <div className={`section__split${reverse ? " section__split--reverse" : ""}`}>
                <div className="section__image" id={`${id}-image`}>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={720}
                        height={520}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        priority={priority}
                    />
                </div>
                <div className={`section__content ${bgClass}`} id={`${id}-content`}>
                    <h2 className={`section__title${lightTitle ? " section__title--light" : ""}`}>
                        {title}
                    </h2>
                    <p className={`section__desc${lightDesc ? " section__desc--light" : ""}`}>
                        {description}
                    </p>
                    <a href="#" className={ctaClass} id={`${id}-cta`}>
                        {ctaText}
                    </a>
                </div>
            </div>
        </ScrollReveal>
    );
}
