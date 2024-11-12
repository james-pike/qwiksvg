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
      <div class="-mt-20">
       

        <div class="relative w-full h-[55vh] sm:h-[90vh] overflow-hidden">
        {/* <script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"></script><dotlottie-player src="https://lottie.host/a746769e-b3c0-49f1-8db7-2e32d6cf2aee/B87BeustR2.json" background="transparent" speed="1" style="width: 100%; height: 100%" direction="1" playMode="normal" loop autoplay></dotlottie-player> */}
          <dotlottie-player
            src="/animations/hero-animation.json"
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
<div class="flex justify-center gap-4 pt-1">
                <a
                  class="btn btn-primary"
                  href="https://github.com/onwidget/qwind"
                  target="_blank"
                  rel="noopener"
                >
                  Get Started
                </a>
                <button class="btn bg-gray-50 dark:bg-transparent">Learn more</button>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <svg class="-mt-12 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="#2B5EFF"><path d="M0 0v100l500-48 500 48V0H0z" opacity=".5"></path><path d="M0 0h1000v52H0z" opacity=".5"></path><path d="M0 0v4l500 48 500-48V0H0z" opacity=".5"></path><path d="M0 0v4l500 48 500-48V0H0z"></path></svg>   */}
    <Features highlight="Features"
  title="What You Get with Our Custom-Coded Solutions"
  subtitle="Unlock the full potential of your online presence with tailored, high-performance websites designed to meet your exact needs."
  items={[
    {
      title: "High-Performance, Hand-Coded Designs",
      description:
        "Every website we build is custom-coded to achieve top performance and optimal functionality, making your site stand out from the competition.",
      icon: IconRocket,
    },
    {
      title: "Tailored UI/UX Components",
      description:
        "Custom-built components specifically designed to enhance user engagement and create seamless interactions on any device.",
      icon: IconApps,
    },
    {
      title: "Cutting-Edge Best Practices",
      description:
        "We utilize the latest web development techniques to ensure your site remains secure, efficient, and adaptable to future changes.",
      icon: IconBrandTailwind,
    },
    {
      title: "Lightning-Fast Loading Speeds",
      description:
        "Page speed is key to maximizing conversions and boosting SEO. Our custom builds are optimized for rapid load times on all devices.",
      icon: IconRocket,
    },
    {
      title: "SEO-Optimized for Visibility",
      description:
        "Our sites are structured to enhance search engine visibility, helping you rank higher and attract more of the right audience.",
      icon: IconBrandGoogle,
    },
    {
      title: "Collaborative Approach",
      description:
        "We welcome and integrate your ideas, ensuring that the final product is a true reflection of your vision and business goals.",
      icon: IconBulb,
    },
  ]}
/>

<Steps  />
   
<FAQs
  title="Frequently Asked Questions"
  subtitle="Find answers to common questions about our premium web design and custom development services."
  highlight="FAQs"
  items={[
    {
      title: "What do I need to get started?",
      description:
        "All we need is an idea of what you're aiming to achieve. Whether you have a clear vision or need guidance, our team will work with you to bring your project to life.",
    },
    {
      title: "What makes custom-coded solutions better?",
      description:
        "Custom coding allows us to tailor every element to your brand's needs, providing unparalleled flexibility, performance, and a unique design that can’t be replicated by template-based sites.",
    },
    {
      title: "How does the design process work?",
      description:
        "We start with an in-depth consultation to understand your vision, followed by wireframes and design mockups. Once approved, we move to development, keeping you updated every step of the way.",
    },
    {
      title: "Will my website be optimized for SEO?",
      description:
        "Absolutely. From structure to page speed, we implement SEO best practices so that your site can gain visibility in search engine results.",
    },
    {
      title: "Can I make updates to my site after it’s built?",
      description:
        "Yes! We build with scalability in mind, allowing for easy updates and enhancements as your business grows.",
    },
    {
      title: "How do you ensure my site’s security?",
      description:
        "Security is a top priority. We implement the latest security protocols and regular updates to keep your site protected against threats.",
    },
  ]}
/>


      <Stats />
      <CallToAction />
    </div>
  );
});
