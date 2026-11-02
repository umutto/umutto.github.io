import Image from "next/image";

import { Icon } from "@/components";
import { localeKey } from "@/config";
import { getTranslator } from "@/utils/localization";

export default async function Hero({ locale }: { locale: localeKey }) {
  const t = await getTranslator(locale, ["home", "hero"]);

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
            {t("Title")}
          </div>
          <p className="py-6 lg:max-w-xl lg:mx-4 xl:mx-6">{t("Description")}</p>
          <div className="flex gap-2 justify-center flex-wrap md:flex-nowrap">
            <a
              href="#contact"
              className="btn btn-neutral md:btn-lg rounded-full shadow-md btn-wide"
            >
              {t("Say hello!")}
            </a>
            <a
              href={`/files/${t("CV file")}`}
              className="btn btn-outline md:btn-lg rounded-full font-light btn-wide"
              download
            >
              <Icon name="Download" /> {t("Download CV")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
