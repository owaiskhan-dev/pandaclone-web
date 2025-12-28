import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PandaAdsCaseStudiesPage = () => {
  const caseStudies = [
    {
      tag: "CPG | AWARENESS & SALES",
      title: "Driving growth: Coca-Cola leveraged retail media channels to boost sales",
      desc: "While The Coca-Cola Company has numerous ongoing partnerships with foodpanda in the Philippines, one campaign that really stood out in increasing the brand's penetration, transactions and sales across online and offline platforms was its #BetterwithCoke campaign on foodpanda.",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_coca-cola-1.jpeg",
      link: "/pandaads/resources/case-studies/coca-cola",
      reverse: false
    },
    {
      tag: "ENTERTAINMENT | ACQUISITION",
      title: "Amazon Prime Video and foodpanda's impressive entertainment strategy",
      desc: "We have all experienced the combination of binge watching while munching on our favourite snacks and meals during the holiday season. The entertainment giant decided to jump on board foodpanda's platform to raise the brand's visibility in the lives of the local people.",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_Screenshot-2024-08-08-at-11.26.00-AM-1024x534.jpeg",
      link: "/pandaads/resources/case-studies/amazon-prime",
      reverse: true
    },
    {
      tag: "CPG | PRODUCT LAUNCH",
      title: "Mars Wrigley found the perfect audience for its new product with panda ads",
      desc: "Eclipse mints are made by Mars Wrigley, the world's leading manufacturer of chocolate, chewing gum, mints and fruity confections. When it came to launching a fresh new product in the range in Hong Kong, they knew they needed a fresh and creative solution. That's where panda ads came in to serve up the right mix of audience targeting and creative media to get consumers buying.",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_PandaAds_Eclipse_Thumbnail_v2-1024x576.jpeg",
      link: "/pandaads/resources/case-studies/mars-wrigley",
      reverse: false
    },
    {
      tag: "SPORTS | BRAND AWARENESS",
      title: "Under Armour teamed up with panda ads to drive awareness and brand love",
      desc: "Under Armour partnered with panda ads for a situational marketing campaign that took full advantage of the excitement of one of the world's most-watched sporting events through a full-funnel approach that maximised brand visibility, fan buzz, and connections with audiences at key moments.",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/11/panda_ads_underarmour_customerstory_blogheader-1-1024x576.jpg",
      link: "/pandaads/resources/case-studies/under-armour-taiwan",
      reverse: true
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Discover case studies
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl">
              Explore success stories from our brand partners across verticals like CPG (FMCG), banking & finance, travel, retail, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-24">
            {caseStudies.map((study, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-12 ${study.reverse ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full">
                  <img src={study.image} alt={study.title} className="w-full h-auto rounded-lg shadow-md" />
                </div>
                <div className="flex-1 space-y-6">
                  <span className="text-primary font-bold tracking-wider text-sm uppercase">
                    {study.tag}
                  </span>
                  <h3 className="text-3xl font-bold text-foreground leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {study.desc}
                  </p>
                  <Button variant="panda" className="rounded-full px-8" asChild>
                    <Link to={study.link}>Read more</Link>
                  </Button>
                </div>
              </div>
            ))}
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
            <Button variant="pandaWhite" size="lg" className="rounded-full px-12 text-primary hover:bg-white/90" asChild>
              <Link to="/pandaads/contact">Get in touch!</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PandaAdsCaseStudiesPage;
