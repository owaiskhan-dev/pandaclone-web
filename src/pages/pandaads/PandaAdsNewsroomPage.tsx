import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Assuming Swiper for carousel, but will use simple state for now
// and simulate carousel behavior for featured news
const PandaAdsNewsroomPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredNews = [
    {
      category: "Industry insights",
      date: "11 Dec 2024",
      title: "Maximising omnichannel campaigns with retail media networks",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/12/jpeg-optimizer_Maximising-omnichannel-campaigns-with-Retail-Media-Networks.png",
      link: "https://pandaads.foodpanda.com/newsroom/maximising-omnichannel-campaigns-with-retail-media-networks/"
    },
    {
      category: "Industry insights",
      date: "07 Nov 2024",
      title: "5 Effective ways to leverage retail media networks this holiday season",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/11/jpeg-optimizer_blog-visual.png",
      link: "https://pandaads.foodpanda.com/newsroom/5-effective-ways-to-leverage-retail-media-networks-this-holiday-season/"
    },
    {
      category: "Industry insights",
      date: "07 Nov 2024",
      title: "Cookies are here to stay but first-party data still takes the cake",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/11/jpeg-optimizer_blog-header_v2.png",
      link: "https://pandaads.foodpanda.com/newsroom/cookies-are-here-to-stay-but-first-party-data-still-takes-the-cake/"
    }
  ];

  const newsCategories = [
    { name: "All", link: "/newsroom/#posts-listing", active: true },
    { name: "Consumer trends", link: "https://pandaads.foodpanda.com/category/consumer-trends/?post_type=newsroom#posts-listing" },
    { name: "Industry insights", link: "https://pandaads.foodpanda.com/category/industry-insights/?post_type=newsroom#posts-listing" },
    { name: "panda ads", link: "https://pandaads.foodpanda.com/category/panda-ads/?post_type=newsroom#posts-listing" },
  ];

  const allNews = [
    {
      title: "Maximising omnichannel campaigns with retail media networks",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/12/jpeg-optimizer_Maximising-omnichannel-campaigns-with-Retail-Media-Networks.png",
      date: "11.12.2024",
      link: "https://pandaads.foodpanda.com/newsroom/maximising-omnichannel-campaigns-with-retail-media-networks/"
    },
    {
      title: "5 Effective ways to leverage retail media networks this holiday season",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/11/jpeg-optimizer_blog-visual.png",
      date: "07.11.2024",
      link: "https://pandaads.foodpanda.com/newsroom/5-effective-ways-to-leverage-retail-media-networks-this-holiday-season/"
    },
    {
      title: "Cookies are here to stay but first-party data still takes the cake",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/11/jpeg-optimizer_blog-header_v2.png",
      date: "07.11.2024",
      link: "https://pandaads.foodpanda.com/newsroom/cookies-are-here-to-stay-but-first-party-data-still-takes-the-cake/"
    },
    {
      title: "6 Ways to reach high-value customers with panda ads",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/08/foodpanda-panda-ads-6-ways-to-help-brands-blog-header.webp",
      date: "08.08.2024",
      link: "https://pandaads.foodpanda.com/newsroom/6-ways-to-reach-high-value-customers-with-panda-ads/"
    },
    {
      title: "APAC food delivery and Q-commerce insights",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/08/panda-ads-foodpanda-Shopper-Trends-Blog-Header-Image.webp",
      date: "30.07.2024",
      link: "https://pandaads.foodpanda.com/newsroom/apac-food-delivery-and-q-commerce-insights/"
    },
    {
      title: "Retail media 101: The new frontier in digital advertising",
      image: "https://pandaads.foodpanda.com/wp-content/uploads/2024/08/foodpanda-panda-ads-Retail-media-trends-header-scaled.webp",
      date: "30.07.2024",
      link: "https://pandaads.foodpanda.com/newsroom/retail-media-101-the-new-frontier-in-digital-advertising/"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredNews.length) % featuredNews.length);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Discover latest news
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl">
              Stay up-to-date with the latest news, press releases, and announcements from panda ads.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News Carousel */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Press Releases</h2>
          <div className="relative">
            <div className="overflow-hidden relative">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredNews.map((news, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="flex flex-col md:flex-row bg-muted/30 rounded-lg overflow-hidden shadow-lg">
                      <div className="md:w-1/2 order-0 md:order-1">
                        <a href={news.link} className="block h-full">
                          <img src={news.image} alt={`Image for ${news.title}`} className="object-cover w-full h-full" />
                        </a>
                      </div>
                      <div className="md:w-1/2 md:p-12 p-6 flex flex-col justify-center order-1 md:order-0">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="text-primary font-bold uppercase text-sm">{news.category}</span>
                          <span className="opacity-75 text-sm text-muted-foreground">{news.date}</span>
                        </div>
                        <a href={news.link}>
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                            {news.title}
                          </h3>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Carousel Navigation */}
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 flex gap-4 z-10">
              <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full bg-white/80 hover:bg-white">
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full bg-white/80 hover:bg-white">
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Latest News */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 md:mb-0">Discover latest news</h3>
            <div className="flex flex-wrap gap-2">
              {newsCategories.map((category, i) => (
                <a
                  key={i}
                  href={category.link}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                    category.active
                      ? "bg-primary text-white border-primary"
                      : "bg-transparent text-foreground border-muted hover:bg-muted/50"
                  }`}
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {allNews.map((news, i) => (
              <a key={i} href={news.link} className="group block h-full rounded-lg bg-muted/30 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <img src={news.image} alt={news.title} className="aspect-video object-cover w-full group-hover:scale-105 transition-transform duration-300" />
                <div className="p-6">
                  <h3 className="pt-4 text-xl font-bold text-foreground leading-tight">
                    {news.title}
                  </h3>
                  <div className="flex gap-2 p-4 text-muted-foreground text-sm">
                    <span>{news.date}</span>
                  </div>
                </div>
              </a>
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

export default PandaAdsNewsroomPage;