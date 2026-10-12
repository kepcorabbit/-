import { NavbarHero } from "@/components/ui/hero-with-video";

const DemoOne = () => {
  return <NavbarHero
          brandName="TechFlow"
          heroTitle="Innovation Meets Simplicity"
          heroSubtitle="Early Access Available"
          heroDescription="Discover cutting-edge solutions designed for the modern digital landscape."
          emailPlaceholder="enter@email.com"
          backgroundImage="https://cdn.21st.dev/assets/mirror/3c/3c326c81c8cd61af8909e83c6916f3b050ffb0fbbfe251a55bf8185cf227d66a.jpg"
          videoUrl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        />;
};

export { DemoOne };
