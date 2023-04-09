import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-100 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <Link href="https://www.twitter.com/ealanisln">
            <Image
              alt="twitter-icon"
              src="/twitter.svg"
              height={30}
              width={30}
            />
          </Link>
          <Link href="https://www.github.com/ealanisln">
           <Image 
              alt="github-icon" 
              src="/github.svg" 
              height={30} 
              width={30} />
          </Link>
          <div>
          </div>
        </div>
      </div>
      <div>
        <h4>Copyright © 2023 - All right reserved, made with ❤️ by Emmanuel.</h4>
      </div>
    </footer>
  );
};

export default Footer;
