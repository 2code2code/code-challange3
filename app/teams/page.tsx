import RandomUsers from "@/components/randomuser";
import Image from "next/image";

export default function Teams() {
  return (
    <div>
      <div className="bg-gradient-to-r from-amber-200 to-yellow-400 ">
        <h1 className=" text-black font-extrabold text-center text-4xl p-10 ">
          Teams
        </h1>
        <div className="text-center flex justify-center text-lg ">
          <p className="p-5 text-center">
            The ZeusChain team comprises a diverse group of professionals with
            expertise in blockchain development, cryptography, software
            engineering, marketing, community engagement, and business
            development
          </p>
        </div>
      </div>
      <div>
        <RandomUsers />
      </div>
    </div>
  );
}
