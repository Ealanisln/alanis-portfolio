import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="max-w-sm rounded-lg shadow-2xl" />
        <Image
          src="/hero.svg"
          alt="Picture of the author"
          width={250}
          height={250}
        />
        <div>
          <h1 className="text-2xl font-bold text-center">
            Crafting dynamic web experiences with Next.js
          </h1>
          <p className="py-6 text-center">
          Welcome to my portfolio! I&apos;m Emmanuel, a web developer who is
            passionate about creating impactful and dynamic experiences on the
            web. 
            <br/>
            <br/>
            I specialize in React, Next.js, and NodeJS, and I am constantly
            seeking opportunities to enhance my skills and broaden my knowledge.
          </p>
          <div className="flex justify-center">
            <button className="btn btn-primary text-center">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
