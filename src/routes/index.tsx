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
          <img class="h-full w-full" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1021%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M1390.3612471051254 56.817188662723005L1366.271010414456 153.04706682897285 1450.0321498724404 130.60333715409524z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1116.47%2c153.474C1153.171%2c156.367%2c1190.01%2c138.774%2c1208.373%2c106.866C1226.698%2c75.025%2c1220.989%2c35.882%2c1202.373%2c4.21C1184.033%2c-26.993%2c1152.649%2c-48.468%2c1116.47%2c-49.495C1078.432%2c-50.575%2c1038.318%2c-35.145%2c1021.68%2c-0.922C1006.33%2c30.65%2c1028.282%2c64.199%2c1046.65%2c94.117C1063.78%2c122.018%2c1083.831%2c150.901%2c1116.47%2c153.474' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M287.11975225315916 72.30437335544599L174.4185868249428 113.32424293842794 328.13962183614115 185.00553878366236z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1275.8359422117333 84.76319111902166L1274.7102487831496 149.25412445058126 1372.0094954947808 118.69719792767702z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1064.3906296127213 74.13075145196254L1147.459534685634 93.30871930492701 1166.6375025385985 10.239814232014282 1083.5685974656858-8.938153620950189z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1339.1625721720134 467.44036102177364L1443.445135654319 421.01077238194273 1292.7329835321825 363.1577975394679z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1190.4766474488783 397.0081024809607L1136.6058979232043 494.19350723754195 1233.7913026797855 548.0642567632159 1287.6620522054595 450.87885200663465z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M713.713%2c743.218C764.376%2c740.704%2c807.681%2c712.847%2c835.696%2c670.56C867.692%2c622.265%2c895.922%2c561.828%2c867.228%2c511.501C838.379%2c460.901%2c771.951%2c455.674%2c713.713%2c456.609C657.631%2c457.509%2c598.669%2c469.009%2c568.505%2c516.297C536.321%2c566.751%2c536.533%2c633.397%2c568.789%2c683.805C598.95%2c730.939%2c657.824%2c745.991%2c713.713%2c743.218' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1208.776323223513 18.07013141353365L1231.4402266580285 135.26198257639004 1311.3710218432943 68.19208181672681z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1193.004749945486 81.1911378044485L1105.807683260004-9.104068021985938 1015.5124774335696 78.09299866349609 1102.7095441190515 168.38820448993053z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1447.204%2c689.486C1486.837%2c688.141%2c1519.615%2c662.311%2c1539.692%2c628.113C1560.067%2c593.408%2c1567.219%2c551.817%2c1549.136%2c515.865C1529.136%2c476.102%2c1491.714%2c444.106%2c1447.204%2c444.232C1402.865%2c444.357%2c1367.511%2c477.521%2c1346.263%2c516.437C1325.995%2c553.559%2c1321.854%2c598.248%2c1343.165%2c634.782C1364.324%2c671.056%2c1405.234%2c690.91%2c1447.204%2c689.486' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M69.77155342491422 371.75388631926825L170.29927085329717 354.02813742760776 152.5735219616367 253.5004199992248 52.045804533253715 271.2261688908853z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M78.61545071203756 397.53127222817415L-40.73520073755503 393.36345564021303-44.90301732551616 512.7141070898056 74.44763412407643 516.8819236777667z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1482.2013091680924 310.9110784575157L1341.795510874812 333.14917223851666 1364.033604655813 473.55497053179704 1504.4394029490934 451.3168767507961z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M318.9224949100933 497.00018629696626L342.18849998370865 403.68533674816143 248.87365043490385 380.4193316745461 225.60764536128846 473.7341812233509z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1182.5020801608684 149.49882969377825L1079.5585633431879 63.118962699970325 993.17869634938 166.0624795176509 1096.1222131670606 252.44234651145882z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1021'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e"/>
        {/* <script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"></script><dotlottie-player src="https://lottie.host/a746769e-b3c0-49f1-8db7-2e32d6cf2aee/B87BeustR2.json" background="transparent" speed="1" style="width: 100%; height: 100%" direction="1" playMode="normal" loop autoplay></dotlottie-player> */}
          {/* <dotlottie-player
            src="/animations/hero-animation.json"
            background="transparent"
            speed="3"
            direction="1"
            playMode="normal"
            loop
            autoplay
            class="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100vw] h-auto"
          ></dotlottie-player> */}

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
