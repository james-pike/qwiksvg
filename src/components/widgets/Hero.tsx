import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

const coverImage =
  "https://images.unsplash.com/photo-1590767950092-42b8362368da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80";

export default component$(() => {
  return (
    <section class="relative h-[85vh] w-full not-prose overflow-hidden">
      {/* Lottie Background */}
      <div class="absolute inset-0 w-full h-full z-0">
        <script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"></script>
        <div class="w-full h-full">
          <dotlottie-player
            src="https://lottie.host/31d07d4e-e255-4bfe-b875-3c165b58d6b0/YKqfIcJWuT.json"
            background="transparent"
            speed="1"
            direction="1"
            playMode="normal"
            loop
            autoplay
            style="width: 100%; height: 100%;"
          ></dotlottie-player>
        </div>
      </div>

      {/* Hero Content */}
      <div class="relative z-10 flex items-center justify-center h-full">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
              Free template for <br class="hidden lg:block" />{" "}
              <span class="hidden lg:inline">create a website using </span> <span class="text-[#039de1]">Qwik</span> +{" "}
              <span class="sm:whitespace-nowrap text-[#039de1]">Tailwind CSS</span>
            </h1>
            <div class="max-w-3xl mx-auto lg:max-w-none">
              <p class="text-xl text-muted mb-6 dark:text-slate-300">
                <span class="font-semibold underline decoration-wavy decoration-1 decoration-secondary-600 underline-offset-2">
                  Qwind
                </span>{" "}
                is a production ready template to start your new website using <em>Qwik</em> + <em>Tailwind CSS</em>. It
                has been designed following Best Practices, SEO, Accessibility,{" "}
                <span class="inline md:hidden">...</span>
                <span class="hidden md:inline">
                  Dark Mode, Great Page Speed, image optimization, sitemap generation and more.
                </span>
              </p>

              <div class="flex justify-center gap-4 lg:justify-start">
                <a
                  class="btn btn-primary sm:mb-0 w-full sm:w-auto"
                  href="https://github.com/onwidget/qwind"
                  target="_blank"
                  rel="noopener"
                >
                  Get template
                </a>
                <button class="btn bg-gray-50 dark:bg-transparent w-full sm:w-auto">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
