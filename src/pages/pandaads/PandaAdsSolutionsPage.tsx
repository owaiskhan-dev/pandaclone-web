import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PandaAdsSolutionsPage = () => {
  const inAppAds = [
    {
      title: "Homescreen ad",
      desc: "Reach millions of customers at the beginning of their purchase journey",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_homescreen-edited.png"
    },
    {
      title: "Order tracking page ad",
      desc: "Drive engagement and results without disrupting their ordering experience",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_tracking-1-edited.png"
    },
    {
      title: "Shopping ad",
      desc: "Boost conversion on pandamart and foodpanda shops",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_citrus-ad-1-edited.png"
    }
  ];

  const offAppAds = [
    {
      title: "Marketing channels",
      desc: "Extend your reach with foodpanda’s digital networks",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_marketing-channels.png"
    },
    {
      title: "Rider bags",
      desc: "Put your brand in the fast lane with O2O campaigns",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_rider-bags.png"
    },
    {
      title: "Product sampling",
      desc: "Boost product awareness and drive sales",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_product-sampling.png"
    }
  ];

  const considerationFeatures = [
    {
      id: "full-page",
      label: "Full-page pop-up",
      title: "Full-page pop-up",
      desc: "Engage foodpanda customers through high-impact, disruptive formats",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_full-page-takeover-900x602.png"
    },
    {
      id: "carousel",
      label: "Carousel banner",
      title: "Carousel banner",
      desc: "A unique solution that helps drive consideration & conversion for brands",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_carousel-900x602.png"
    },
    {
      id: "cart",
      label: "Cart upsell",
      title: "Cart upsell",
      desc: "Tap into the big spending appetitte and capture impulse purchases",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_cart-upsell-900x603.png"
    },
    {
      id: "payment",
      label: "Payment switch",
      title: "Payment switch",
      desc: "Become a foodpanda payment provider of choice at checkout",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_payment-switch-900x603.png"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Boost your brand with our retail media solutions
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl">
              Harness the power of first-party retail data to connect with millions of high-value customers within and beyond the app.
            </p>
          </div>
        </div>
      </section>

      {/* In-App Ads */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            Reach high-value customers <br />with in-app display ads
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {inAppAds.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="mb-8 overflow-hidden rounded-xl shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                  <img src={item.image} alt={item.title} className="w-full h-auto object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-lg text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consideration & Conversion (Tabs) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Boost in-app consideration and conversions
          </h2>
          
          <Tabs defaultValue="full-page" className="w-full max-w-5xl mx-auto">
            <TabsList className="w-full flex flex-wrap justify-center h-auto gap-4 bg-transparent p-0 mb-12">
              {considerationFeatures.map((feature) => (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className="rounded-full border border-primary text-primary bg-transparent px-6 py-3 text-sm md:text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-primary/10 transition-all"
                >
                  {feature.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {considerationFeatures.map((feature) => (
              <TabsContent key={feature.id} value={feature.id} className="mt-0">
                <div className="flex flex-col md:flex-row items-center gap-12 bg-transparent rounded-2xl overflow-hidden">
                  <div className="flex-1 md:text-left text-center space-y-6 md:pl-8">
                    <h3 className="text-3xl font-bold text-foreground">{feature.title}</h3>
                    <p className="text-xl text-muted-foreground">{feature.desc}</p>
                  </div>
                  <div className="flex-1 w-full">
                    <img src={feature.image} alt={feature.title} className="w-full h-auto rounded-xl shadow-lg" />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Off-App Ads */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            Amplify your campaigns <br />with off-app advertising solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {offAppAds.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="mb-8 overflow-hidden rounded-xl shadow-lg transition-transform duration-300 group-hover:-translate-y-2 w-full">
                  <img src={item.image} alt={item.title} className="w-full aspect-[3/2] object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-lg text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="flex-1 space-y-6 md:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Get your custom <br />panda ads media kit
              </h2>
              <p className="text-lg text-muted-foreground">
                Share your next campaign with us and receive a tailored media kit straight to your inbox <br className="hidden md:block" />– easy peasy!
              </p>
              <Button variant="panda" className="rounded-full px-8 h-12 font-bold shadow-md" asChild>
                <a href="https://mediakit-pandaads.foodpanda.com/" target="_blank" rel="noopener noreferrer">
                  Get started
                </a>
              </Button>
            </div>
            <div className="flex-1 flex justify-center">
              <img 
                src="https://pandaads.foodpanda.com/wp-content/uploads/2024/11/rocket-800-min.png" 
                alt="Rocket" 
                className="w-full max-w-sm h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Start advertising with panda ads today!
            </h2>
            <Button variant="pandaWhite" size="lg" className="rounded-full px-12 text-primary hover:bg-white/90 font-bold" asChild>
              <Link to="/pandaads/contact">Get in touch!</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PandaAdsSolutionsPage;