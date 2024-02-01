import Image from "next/image";

import { Icon } from "@/components";

export default function Hero() {
  return (
    <section className="hero py-10 flex justify-center overflow-hidden border-b">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src="/images/umut.webp"
          alt="Umut Karakulak"
          width={420}
          height={420}
          className="max-w-72 w-full shadow-2xl md:max-w-md mask mask-circle"
          priority={true}
        />
        <div className="text-center lg:text-start my-auto lg:px-6 xl:px-8">
          <h1 className="text-3xl font-black uppercase md:text-7xl drop-shadow-lg">
            <span className="text-primary">Umut</span> Karakulak
          </h1>
          <div className="text-base-content/35 xl:text-end md:text-2xl lg:mx-6">
            Web Development & Machine Learning
          </div>
          <p className="py-6 lg:max-w-xl lg:mx-4 xl:mx-6">
            &emsp;Someone who is passionate about experimenting with innovative, state of
            the art technologies. Currently working as a full-stack developer with a touch
            of machine learning for good measure.
          </p>
          <div className="flex gap-2 justify-center flex-wrap md:flex-nowrap">
            <a
              href="#contact"
              className="btn btn-neutral md:btn-lg rounded-full shadow-md btn-wide"
            >
              👋 Say hello!
            </a>
            <a
              href="/"
              className="btn btn-outline md:btn-lg rounded-full font-light btn-wide"
            >
              <Icon name="Download" /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
