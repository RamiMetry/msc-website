import Hero from "@/sections/landing/hero";
import AppHead from "@/components/app-head";
import LandingBanner from "@/sections/landing/landing-banner";
import AboutUsSection from "@/sections/landing/about-us";
import ServicesSection from "@/sections/landing/services";
import OurCommitment from "@/sections/landing/our-commitment";
import useFetch from "@/hooks/useFetch";
import WhyChooseUs from "@/sections/landing/why-choose-us";

export default function Home() {
  const { data, loading } = useFetch("api/landing-page/?populate[faq]=*&populate[hero_image]=*");

  const { data: services } = useFetch("api/services/?populate[card_image]=*");
  return (
    <>
      <AppHead />
      {data && (
        <main
          style={{
            backgroundColor: "var(--whiteBackground)",
            paddingBottom: "48px",
          }}
        >
          <Hero
            welcome={data?.attributes.hero_welcome_text}
            title={data?.attributes.hero_welcome_text}
            image_url={data?.attributes.hero_image.data.attributes.url}
          />
          <LandingBanner />
          <AboutUsSection
            title={data?.attributes.about_us_title}
            text={data?.attributes.about_us_text}
          />
          <ServicesSection
            title={data?.attributes.services_title}
            services={services}
          />
          <OurCommitment
            title={data?.attributes.commitment_title}
            text={data?.attributes.commitment_text}
          />
          <WhyChooseUs
            small_title={data?.attributes.why_choose_us_small_title}
            title={data?.attributes.why_choose_us_title}
            text={data?.attributes.why_choose_us_text}
            faq={data?.attributes.faq}
          />
        </main>
      )}
    </>
  );
}
