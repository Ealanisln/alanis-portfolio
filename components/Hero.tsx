import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero body-font bg-base-100">
      <div className="hero-content mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold">
            Crafting dynamic web experiences with Next.js
          </h1>
          <div className="mb-8 leading-relaxed">
            Welcome to my portfolio! I&apos;m Emmanuel, a web developer who is
            passionate about creating impactful and dynamic experiences on the
            web.
            <br />
            <br />I specialize in React, Next.js, and NodeJS, and I am
            constantly seeking opportunities to enhance my skills and broaden my
            knowledge.
          </div>
          <div className="flex justify-center">
            <Link href="/contact" className="btn btn-primary text-center">
              Get Started
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            alt="hero-icon"
            src="/hero1.svg"
            className="object-cover object-center rounded"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
