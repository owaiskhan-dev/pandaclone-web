import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const PandaAdsInsightsPage = () => {
  const insights = [
    {
      title: "Whitepaper: Retail media – the revolution of advertising in Asia",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_Screenshot-2024-06-20-at-10.45.27 AM-copy-900x506.jpeg",
      link: "/pandaads/resources/insights/retail-media-whitepaper",
      buttonText: "Download"
    },
    {
      title: "Report: Delivery & retail trends in APAC 2023",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_Screenshot-2024-09-13-at-10.44.51-AM-900x507.jpeg",
      link: "/pandaads/resources/insights/delivery-and-retail-trends-apac-report/",
      buttonText: "Download"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Discover the latest insights
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl">
              Tap into the pulse of the advertising industry with the latest trends and consumer insights.
            </p>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {insights.map((insight, i) => (
              <div key={i} className="flex flex-col h-full bg-white group">
                <div className="relative h-[300px] overflow-hidden rounded-2xl shadow-lg mb-6">
                  <img 
                    src={insight.image} 
                    alt={insight.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-8 leading-tight">
                    {insight.title}
                  </h3>
                  <div className="mt-auto">
                    <Button variant="panda" className="rounded-full px-8" asChild>
                      <Link to={insight.link}>{insight.buttonText}</Link>
                    </Button>
                  </div>
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

export default PandaAdsInsightsPage;
