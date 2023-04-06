import React from "react";
import twitter from "../public/twitter.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <div>
            <Image
              alt="twitter-icon"
              src="/twitter.svg"
              height={30}
              width={30}
            />
          </div>
          <div>
            {" "}
            <Image alt="github-icon" src="/github.svg" height={30} width={30} />
          </div>
          <div></div>
        </div>
      </div>
      <div>
        <h4>Copyright © 2023 - All right reserved by Alanis Web Dev</h4>
      </div>
    </footer>
  );
};

export default Footer;
