import { component$ } from "@builder.io/qwik";

import CallToAction from "~/components/widgets/CallToAction";
import FAQs from "~/components/widgets/FAQs";
import Features from "~/components/widgets/Features";
import Stats from "~/components/widgets/Stats";
import Steps from "~/components/widgets/Steps";

import { qwikSerialized } from "~/utils/qwikSerialized";

const IconBrandTailwind = qwikSerialized(() => import("../components/icons/IconBrandTailwind"));
const IconApps = qwikSerialized(() => import("../components/icons/IconApps"));
const IconRocket = qwikSerialized(() => import("../components/icons/IconRocket"));
const IconBrandGoogle = qwikSerialized(() => import("../components/icons/IconBrandGoogle"));
const IconBulb = qwikSerialized(() => import("../components/icons/IconBulb"));

export default component$(() => {
  return (
    <div>
    <section class="relative md:-mt-[76px] not-prose">
      <div class="-mt-18">
       

        <div class="relative w-full h-[54vh] overflow-hidden">
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
                Web Design & Development For Your Business<br class="hidden lg:block" />{" "}
                {/* <span class="hidden lg:inline">create a website using </span> <span class="text-[#039de1]">Qwik</span> &{" "}
                <span class="sm:whitespace-nowrap text-[#039de1]">Tailwind</span> */}
                
              </h1>
              {/* <p class="text-xl text-muted mb-6 dark:text-slate-300">
                <span class="font-semibold underline decoration-wavy decoration-1 decoration-secondary-600 underline-offset-2">
                  Qwind
                </span>{" "}
                is a production ready template to start your new website using <em>Qwik</em> + <em>Tailwind CSS</em>.
                It has been designed following Best Practices, SEO, Accessibility, Dark Mode, Great Page Speed, image optimization, sitemap generation and more.
              </p> */}
<div class="flex justify-center gap-4 pt-0">
                <a
                  class="btn btn-primary"
                  href="https://github.com/onwidget/qwind"
                  target="_blank"
                  rel="noopener"
                >
                  Get A Free Consultation
                </a>
                <button class="btn bg-gray-50 dark:bg-transparent">Learn more</button>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
    <Features
        highlight="Features"
        title="What you get with Qwind"
        subtitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae."
        items={[
          {
            title: "Qwik + Tailwind CSS Integration",
            description:
              "A seamless integration between two great frameworks that offer high productivity, performance and versatility.",
            icon: IconBrandTailwind,
          },
          {
            title: "Ready-to-use Components",
            description:
              "Widgets made with Tailwind CSS ready to be used in Marketing Websites, SaaS, Blogs, Personal Profiles, Small Business...",
            icon: IconApps,
          },
          {
            title: "Best Practices",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.",
          },
          {
            title: "Excellent Page Speed",
            description:
              "Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.",
            icon: IconRocket,
          },
          {
            title: "Search Engine Optimization (SEO)",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.",
            icon: IconBrandGoogle,
          },
          {
            title: "Open to new ideas and contributions",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.",
            icon: IconBulb
          },
        ]}
      />

      <Steps  />
      <FAQs
        title="Frequently Asked Questions"
        subtitle="Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar."
        highlight="FAQs"
        items={[
          {
            title: "What do I need to start?",
            description:
              "Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds. Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
          },
          {
            title: "How to install the Qwik + Tailwind CSS template?",
            description:
              "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows.",
          },
          {
            title: "What's something that you don't understand?",
            description:
              "A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear.",
          },
          {
            title: "What's an example of when you changed your mind?",
            description:
              "Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a world of criminals who operate above the law. Here he comes Here comes Speed Racer. He's a demon on wheels.",
          },
          {
            title: "What is something that you would like to try again?",
            description:
              "A business big enough that it could be listed on the NASDAQ goes belly up. Disappears! It ceases to exist without me. No, you clearly don't know who you're talking to, so let me clue you in.",
          },
          {
            title: "If you could only ask one question to each person you meet, what would that question be?",
            description:
              "This is not about revenge. This is about justice. A lot of things can change in twelve years, Admiral. Well, that's certainly good to know. About four years. I got tired of hearing how young I looked.",
          },
        ]}
      />

      <Stats />
      <CallToAction />
    </div>
  );
});
