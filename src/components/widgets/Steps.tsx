import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

import IconStar from "~/components/icons/IconStar";
const sideImg =
  "https://images.unsplash.com/photo-1583195648430-18b2681307e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80";

export default component$(() => {
  const stepsData = {
    title: "Our Process for Building Tailored, High-Performance Websites",
    items: [
      {
        title: "Discovery & Planning",
        description:
          "We start by understanding your unique goals and audience. Our team conducts thorough research to design a strategy that aligns with your brand and drives results.",
        icon: IconStar,
      },
      {
        title: "Custom Design & Prototyping",
        description:
          "From wireframes to polished prototypes, we craft a design that not only looks stunning but is also optimized for usability and performance on all devices.",
        icon: IconStar,
      },
      {
        title: "Development & Integration",
        description:
          "Our developers bring the design to life, building a secure, fast-loading, custom-coded solution tailored to your needs, with seamless integrations where required.",
        icon: IconStar,
      },
      {
        title: "Launch & Ongoing Optimization",
        description:
          "After rigorous testing, your site goes live! We continue to monitor and fine-tune to ensure optimal performance, keeping your website secure and up-to-date.",
        icon: IconStar,
      },
    ],
    image: {
      src: sideImg,
      alt: "Custom website development process",
    },
  };
  
  const { title, items, image } = stepsData;

  return (
    <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div class="row-gap-10 grid gap-6 md:grid-cols-2">
        <div class="mb-4 md:mb-0 md:py-4 md:pr-16">
          {title && <h2 class="font-heading mb-8 text-3xl font-bold lg:text-4xl">{title}</h2>}
          {Array.isArray(items) &&
            items.length &&
            items.map(({ title, description, icon: Icon }, index) => (
              <div key={`item-steps-${index}`} class="flex">
                <div class="mr-4 flex flex-col items-center">
                  <div>
                    {index !== items.length - 1 ? (
                      <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900">
                        {typeof Icon !== "undefined" ? (
                          <Icon class="h-6 w-6 text-primary-800 dark:text-slate-200" />
                        ) : (
                          <IconStar class="h-6 w-6 text-primary-800 dark:text-slate-200" />
                        )}
                      </div>
                    ) : (
                      <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900 bg-primary-900">
                        {typeof Icon !== "undefined" ? (
                          <Icon class="h-6 w-6 text-white dark:text-slate-200" />
                        ) : (
                          <IconStar class="h-6 w-6 text-white dark:text-slate-200" />
                        )}
                      </div>
                    )}
                  </div>
                  {index !== items.length - 1 && <div class="h-full w-px bg-gray-300 dark:bg-slate-500"></div>}
                </div>
                <div class={`pt-1 ${index !== items.length - 1 ? "pb-8" : ""}`}>
                  {title && <p class="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">{title}</p>}
                  {description && <p class="text-gray-600 dark:text-slate-400">{description}</p>}
                </div>
              </div>
            ))}
        </div>
        <div class="relative">
          {typeof image !== "undefined" && (
            <Image
              layout="constrained"
              src={image.src}
              width={532}
              height={704}
              alt={image.alt}
              class="inset-0 w-full rounded-md bg-gray-500 object-cover object-top shadow-lg dark:bg-slate-700 md:absolute md:h-full"
              breakpoints={[320, 480, 640, 1024]}
            />
          )}
        </div>
      </div>
    </section>
  );
});
