import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PandaAdsHomePage = () => {
  const stats = [
    { number: "125M", label: "app downloads" },
    { number: "11", label: "markets" },
    { number: "400+", label: "cities" },
  ];

  const features = [
    {
      title: "Maximise your reach",
      desc: "Amplify your campaign by connecting with your target customers right where they shop",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_72_New-arrivals.png"
    },
    {
      title: "Engage high-value audiences",
      desc: "Leverage our first-party data and advanced targeting to connect with the right audience",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_73_Weekly-Highlights_04_.png"
    },
    {
      title: "Get personalised support",
      desc: "Achieve your marketing goals and drive growth with personalised support, insights, and more",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_56_stationary-1.png"
    }
  ];

  const solutions = [
    {
      title: "In-app advertising",
      desc: "Increase brand visibility with native display ads across different categories on the foodpanda app",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_in-app-1024x683.png",
      link: "/pandaads/solutions",
      reverse: false
    },
    {
      title: "Off-app advertising",
      desc: "Amplify your campaigns with foodpanda, from email marketing and social media to rider bag ads and product sampling",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_panda-ads-website-homepage-off-app-solutions-highres-1024x683.png",
      link: "/pandaads/solutions",
      reverse: true
    },
    {
      title: "Strategic partnerships",
      desc: "Execute integrated campaigns for maximum impact, with tailored solutions like vouchers, data partnerships and consumer insights",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_panda-ads-website-homepage-strategic-partnerships-highres-1024x685.png",
      link: "/pandaads/solutions",
      reverse: false
    },
    {
      title: "Go beyond basic targeting with panda ads",
      desc: "Maximise your ROI and connect with a broader, more relevant audience through precise targeting powered by our first-party data.",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_audience-targeting-1024x683.png",
      link: "/pandaads/solutions",
      reverse: true
    }
  ];

  const caseStudies = [
    {
      title: "Coca-Cola leveraged retail media channels to boost sales and drive growth",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_coca-cola-1-900x507.jpeg",
      link: "/pandaads/resources/case-studies/coca-cola"
    },
    {
      title: "Mars Wrigley finds the perfect audience for its new product with panda ads",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_PandaAds_Eclipse_Thumbnail_v2-900x506.jpeg",
      link: "/pandaads/resources/case-studies/mars-wrigley"
    },
    {
      title: "Amazon Prime Video and foodpanda’s impressive entertainment strategy",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_amazon.jpeg",
      link: "/pandaads/resources/case-studies/amazon-prime"
    }
  ];

  const testimonials = [
    {
      quote: "We were looking for a large APAC-wide partner with premium O&O mobile ad inventory that could connect us to our target audiences. panda ads were able to be that partner and have delivered beyond our campaign's target KPIs. We look forward to expanding our business with them.",
      author: "Luke Addison",
      role: "Managing Director",
      logo: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/egentics-Photoroom.png"
    },
    {
      quote: "As one of the goals from 2023 was to accelerate quick commerce growth through new activations and media, tapping into panda ads helped us grow our quick commerce business and deliver on our KPIs.",
      author: "Jayson Lopez",
      role: "Senior Media and Digital Marketing Manager",
      logo: "https://pandaads.foodpanda.com/wp-content/uploads/2024/08/Universal-Robina-Logo-1024x576.png"
    },
    {
      quote: "The collaboration with foodpanda through panda ads greatly enhanced our customer acquisition initiatives, by capturing our audience's interest and fostering heightened user engagement.",
      author: "Jessica Faye Tan",
      role: "Head of Commercial",
      logo: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/moneymax_owler_20201020_015917_original-1024x261.png"
    }
  ];

  const brands = [
    "https://pandaads.foodpanda.com/wp-content/uploads/2024/08/1.png",
    "https://pandaads.foodpanda.com/wp-content/uploads/2024/08/2.png",
    "https://pandaads.foodpanda.com/wp-content/uploads/2024/08/3.png",
    "https://pandaads.foodpanda.com/wp-content/uploads/2024/08/4.png",
    "https://pandaads.foodpanda.com/wp-content/uploads/2024/08/5.png",
    "https://pandaads.foodpanda.com/wp-content/uploads/2024/08/6.png",
    "https://pandaads.foodpanda.com/wp-content/uploads/2024/08/7.png",
    "https://pandaads.foodpanda.com/wp-content/uploads/2024/08/8.png",
    "https://pandaads.foodpanda.com/wp-content/uploads/2024/08/9.png",
    "https://pandaads.foodpanda.com/wp-content/uploads/2024/08/10.png",
    "https://pandaads.foodpanda.com/wp-content/uploads/2024/08/11.png",
    "https://pandaads.foodpanda.com/wp-content/uploads/2024/08/12.png",
    "https://pandaads.foodpanda.com/wp-content/uploads/2024/08/13.png",
    "https://pandaads.foodpanda.com/wp-content/uploads/2024/08/14.png",
    "https://pandaads.foodpanda.com/wp-content/uploads/2024/08/15.png",
    "https://pandaads.foodpanda.com/wp-content/uploads/2024/08/16.png",
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative min-h-[60svh] md:min-h-[600px] flex items-center bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://pandaads.foodpanda.com/wp-content/uploads/2024/05/foodpanda-panda-ads.webp)" }}
        />
        <div className="container relative z-10 px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-xl text-white text-left">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-balance drop-shadow-lg">
              Reach millions <br className="hidden md:block" />with panda ads
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-95 text-balance">
              Advertise with foodpanda and connect with millions of <br className="hidden md:block" />
              ready-to-shop customers within and beyond the foodpanda app.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-12 h-14 text-lg font-bold shadow-xl" asChild>
              <Link to="/pandaads/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 text-foreground text-balance">
            Boost your brand with Asia's largest <br className="hidden md:block" />
            food and grocery delivery network*
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group transition-transform hover:scale-105">
                <div className="text-6xl md:text-8xl font-extrabold text-primary mb-4 tracking-tighter">{stat.number}</div>
                <div className="text-xl md:text-2xl text-foreground font-bold uppercase tracking-widest opacity-70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visibility Section */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-foreground text-balance">
            Power up your visibility & engagement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {features.map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="h-32 flex items-center justify-center mb-8">
                  <img src={feature.image} alt={feature.title} className="max-h-full w-auto object-contain" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground leading-snug">{feature.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 md:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 md:mb-32 text-foreground text-balance">
            Customised retail media advertising solutions for your brand's needs
          </h2>
          <div className="space-y-24 md:space-y-40">
            {solutions.map((solution, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${solution.reverse ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full">
                  <img src={solution.image} alt={solution.title} className="rounded-3xl shadow-2xl w-full transform hover:scale-[1.02] transition-transform duration-500" />
                </div>
                <div className="flex-1 space-y-8 text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">{solution.title}</h3>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{solution.desc}</p>
                  <Button variant="panda" size="lg" className="rounded-full px-12 h-14 text-lg font-bold shadow-pink" asChild>
                    <Link to={solution.link}>Explore solutions</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-foreground text-balance">
            Proven impact with panda ads
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {caseStudies.map((study, i) => (
              <Card key={i} className="overflow-hidden border-none shadow-xl flex flex-col h-full bg-white rounded-[2rem] hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="aspect-[16/10] overflow-hidden">
                   <img src={study.image} alt={study.title} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
                </div>
                <CardContent className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-8 flex-1 text-foreground leading-tight">
                    {study.title}
                  </h3>
                  <Button variant="pandaOutline" className="w-full md:w-fit rounded-full px-8 border-2" asChild>
                    <Link to={study.link}>Read more</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-foreground text-balance">
            What our customers are saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
            {testimonials.map((t, i) => (
              <div key={i} className="flex flex-col items-center text-center relative group">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-primary/10 text-9xl font-serif select-none group-hover:text-primary/20 transition-colors">"</div>
                <p className="text-xl italic mb-10 text-foreground leading-relaxed relative z-10">
                  {t.quote}
                </p>
                <div className="mt-auto">
                  <p className="font-bold text-2xl text-foreground mb-1">{t.author}</p>
                  <p className="text-sm md:text-base text-muted-foreground mb-8 font-medium uppercase tracking-wider">{t.role}</p>
                  <img src={t.logo} alt="Company logo" className="h-16 w-auto object-contain mx-auto grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-[#FFF0F5]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="space-y-4 relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                Start advertising with <br className="hidden md:block" />panda ads today!
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">Unlock Asia's largest delivery network for your brand.</p>
            </div>
            <Button variant="panda" size="xl" className="rounded-full px-16 h-16 text-xl font-bold shadow-pink relative z-10" asChild>
              <Link to="/pandaads/contact">Get in touch!</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Gallery */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 text-foreground text-balance">
            Brands excelling with us
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-8 md:gap-12">
            {brands.map((brand, i) => (
              <div key={i} className="flex items-center justify-center p-4 group transition-all">
                <img src={brand} alt="Brand logo" className="max-w-full h-auto grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" />
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-20 opacity-50">*outside of China</p>
        </div>
      </section>
    </div>
  );
};

export default PandaAdsHomePage;