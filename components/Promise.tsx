import React from 'react';
import Image from 'next/image'; 
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import Image1 from "../public/Placeholder.png"
export default function Billy() {
    return (
        <div className="flex flex-col md:flex-row items-start justify-start mt-8 w-full">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
            <Image src={Image1} alt="Medical AI" width={200} height={200} className="mt-4 w-full md:w-auto" />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h2 className="text-3xl font-bold mt-4 md:mt-16 mb-4">Our Commitment</h2>
            <p className="text-gray-700 text-left md:text-center lg:text-left max-w-md mx-auto md:mx-0">
              Welcome to the future of healthcare. Our platform leverages advanced AI to 
              <span className='font-bold'> enhance medical diagnostics </span> and assist healthcare professionals in 
              identifying diseases like brain tumors and lung cancer. Together, we aim to revolutionize 
              <span className='font-bold'> patient care and treatment. </span>
            </p>
            <h3 className="text-xl font-semibold mt-4">Your Trusted Partner in Healthcare</h3>
            <div className="flex items-center justify-center md:justify-start mt-4">
            <LoginButton  asChild>
            <Button variant="default" size="lg">
              Get Started 
            </Button>
          </LoginButton>
            </div>
          </div>
        </div>
    );
}
