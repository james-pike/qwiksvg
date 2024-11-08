import { component$ } from "@builder.io/qwik";
import CallToAction from "~/components/widgets/CallToAction";

export default component$(() => {
  return (
    <div>
    <section class="relative md:-mt-[76px] not-prose">
      <div class="-mt-40">
       

        <div class="relative w-full h-[50vh] overflow-hidden">
          <dotlottie-player
            src="https://lottie.host/31d07d4e-e255-4bfe-b875-3c165b58d6b0/YKqfIcJWuT.json"
            background="transparent"
            speed="3"
            direction="1"
            playMode="normal"
            loop
            autoplay
            class="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100vw] h-auto"
          ></dotlottie-player>

          {/* Hero Text Container */}
          <div class="absolute inset-0 flex items-center justify-center text-center text-white px-4 sm:px-6">
            <div class="max-w-3xl mx-auto lg:max-w-none">
              <h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
                Free template for <br class="hidden lg:block" />{" "}
                <span class="hidden lg:inline">create a website using </span> <span class="text-[#039de1]">Qwik</span> +{" "}
                <span class="sm:whitespace-nowrap text-[#039de1]">Tailwind</span>
              </h1>
              {/* <p class="text-xl text-muted mb-6 dark:text-slate-300">
                <span class="font-semibold underline decoration-wavy decoration-1 decoration-secondary-600 underline-offset-2">
                  Qwind
                </span>{" "}
                is a production ready template to start your new website using <em>Qwik</em> + <em>Tailwind CSS</em>.
                It has been designed following Best Practices, SEO, Accessibility, Dark Mode, Great Page Speed, image optimization, sitemap generation and more.
              </p> */}

             
            </div>
          </div>
        </div>
      </div>
    </section>
    <CallToAction/>
    </div>
  );
});
