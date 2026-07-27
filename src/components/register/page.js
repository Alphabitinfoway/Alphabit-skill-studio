"use client";

import FeaturesSection from "@/components/register/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/register/StatsSection";
import DetailsSection from "@/components/register/DetailsSection";
import RegistrationForm from "@/components/register/RegistrationForm";

export default function RegisterPage() {
    return (
        <section>
            <HeroSection/>
            <StatsSection/>
            <FeaturesSection/>
            <DetailsSection/>
            <RegistrationForm/>
            
        </section>
    );
}