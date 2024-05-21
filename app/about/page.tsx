import Timeline from "@/components/ui/Timeline/Timeline";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="text-center bg-gradient-to-r from-amber-200 to-yellow-400">
        <a href="/about">
          <h1 className="text-black font-extrabold text-4xl p-10">About Us</h1>
        </a>

        <div className="flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            version="1.1"
            viewBox="0 0 473.935 473.935"
            xmlSpace="preserve"
          >
            <circle
              cx="236.967"
              cy="236.967"
              r="236.967"
              fill="#9CBDBF"
            ></circle>
            <path
              fill="#F1EB75"
              d="M313.289 193.634L246.565 192.56 316.424 42.189 194.64 102.196 157.473 241.364 199.778 224.571 171.045 348.581 207.359 331.698 180.631 431.716 296.395 293.816 255.19 293.154z"
            ></path>
          </svg>
          <h2 className="text-xl p-5">
            Welcome to <b className="font-bold text-black">Zeus Chain!</b>
          </h2>

          <p className="text-justify text-lg mt-4 mb-4 w-2/3 sm:w-2/3 md:w-2/3 lg:w-4/6">
            ZeusChain was founded in 2021 by a group of blockchain enthusiasts
            and industry veterans who recognized the limitations of existing
            blockchain platforms. The founders, led by CEO Dr. Athena Pallas,
            aimed to create a blockchain that could overcome these limitations
            and provide a robust foundation for the future of decentralized
            applications.
          </p>
        </div>
        <div className="flex flex-col items-center px-1 pt-10">
          <Image
            width="500"
            height="500"
            src="https://images.unsplash.com/photo-1698681908648-962c6048ec3e?auto=format&q=75&fit=crop&w=550&h=550"
            alt="Key Performance"
            className="m-1 p-5 "
          />
        </div>
        <div className="bg-black text-white text-lg mt-4 p-10 flex flex-col justify-center items-center ">
          <div className="w-2/3 md:w-2/3 ">
            <h1 className="text-white font-extrabold text-4xl mx-auto ">
              Company Culture
            </h1>
            <p className="p-5">
              At ZeusChain, we believe that our people are our greatest asset.
              Our company culture is built on the following core values:
            </p>
            <div className="text-lg mt-4  text-center ">
              <h2 className="font-bold text-center p-5">Innovation</h2>
              <p>
                We encourage creativity and out-of-the-box thinking. Our team is
                constantly exploring new ideas and technologies to push the
                boundaries of what is possible in the blockchain space.
              </p>
              <h2 className="font-bold text-center p-5">Collaboration</h2>
              <p>
                We foster a collaborative environment where team members work
                together to solve complex problems. We believe that diverse
                perspectives lead to better solutions.
              </p>
              <h2 className="font-bold text-center p-5">Transparency</h2>
              <p>
                We value open communication and transparency. Our team members
                are encouraged to share their thoughts and feedback, and we
                maintain an open-door policy at all levels of the organization.
              </p>
              <h2 className="font-bold text-center p-5">Integrity</h2>
              <p>
                We uphold the highest standards of integrity and ethical
                behavior. We are committed to building a trustworthy and
                reliable blockchain platform.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:w/2/3 p-20">
          <h1 className="text-black font-extrabold text-center text-4xl p-5">
            Roadmap
          </h1>
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default About;
