import AboutHeroSection from "@/components/main/about/hero";
import AboutProcessSection from '../../components/main/about/process';
import AboutExpertiseSection from '../../components/main/about/expertise';

export default function About() {

    return (
        <div className="min-h-screen bg-[var(--color-background)]">
            <AboutHeroSection />
            <AboutProcessSection />
            <AboutExpertiseSection />
        </div>
    )
}