import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#071B31] text-white">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_76%_58%,#0D335B_0%,#071B31_46%,#04172A_100%)]" />
      <div className="absolute bottom-0 right-0 -z-10 h-[48%] w-[64%] rounded-tl-[100%] bg-[#143250]/70 lg:hidden" />
      <div className="absolute bottom-0 left-[39%] -z-10 hidden h-[58%] w-[42%] rounded-tl-[100%] bg-[#153A5D]/70 lg:block" />

      <div className="relative mx-auto min-h-[calc(100svh-72px)] max-w-[1920px] px-6 py-16 sm:px-10 sm:py-20 lg:h-[min(678px,calc(100svh-7.34375vw))] lg:min-h-[534px] lg:max-h-[678px] lg:px-0 lg:py-0">
        <div className="relative z-10 max-w-[860px] lg:absolute lg:left-[5.95vw] lg:top-[18.1%] lg:max-w-[52vw]">
          <p className="mb-7 text-sm font-bold uppercase tracking-[0.16em] text-accent-light md:text-lg lg:mb-[1.75vw] lg:text-[clamp(20px,1.35vw,26px)] lg:leading-none">
            Webdesign Arbon · Thurgau · Ostschweiz
          </p>
          <h1 className="mb-7 text-[40px] font-extrabold leading-[1.2] tracking-normal text-white md:text-[52px] md:leading-[1.18] lg:mb-[1.72vw] lg:max-w-[920px] lg:text-[clamp(50px,3.42vw,66px)] lg:leading-[1.24]">
            Moderne Webseiten
            <br />
            für kleine Schweizer Firmen
          </h1>
          <p className="max-w-[820px] text-lg leading-[1.65] text-slate-100 md:text-xl lg:max-w-[39.1vw] lg:text-[clamp(21px,1.46vw,28px)] lg:leading-[1.55]">
            Ich modernisiere veraltete Firmenwebseiten und erstelle klare,
            schnelle und mobilfreundliche Webseiten für KMU, Handwerk und lokale
            Unternehmen.
          </p>
        </div>

        <div className="relative z-0 -mx-6 mt-10 sm:-mx-10 lg:absolute lg:right-[3.45vw] lg:top-[4.4%] lg:mx-0 lg:mt-0 lg:w-[47.916vw] lg:max-w-[920px]">
          <Image
            src="/brand/milan-hero-devices.png"
            alt=""
            width={920}
            height={649}
            priority
            sizes="(min-width: 1920px) 920px, (min-width: 1024px) 48vw, 100vw"
            className="h-auto w-full max-w-[min(100vw,1040px)] lg:max-w-none"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
