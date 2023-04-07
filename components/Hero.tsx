import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-base-400 dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Crafting dynamic web experiences with Next.js
          </h1>
          <br />
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Welcome to my portfolio! I&apos;m Emmanuel, a web developer who is
            passionate about creating impactful and dynamic experiences on the
            web. <br />
            <br />I specialize in React, Next.js, and NodeJS, and I am
            constantly seeking opportunities to enhance my skills and broaden my
            knowledge.
          </p>

          <Link href="/contact" className="btn btn-primary text-center">
            Get Started
          </Link>
        </div>
        <br/>
        <div className="align-center lg:mt-0 lg:col-span-5 lg:flex ">
          <Image
            alt="hero-icon"
            src="/hero1.svg"
            className="w-full h-full top-0 left-0 object-cover rounded-2xl"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
