import { useState } from "react";
import NewsCard from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const NewsroomPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Business",
    "Campaigns",
    "Editorials",
    "Food delivery",
    "Infographics",
    "Merchants",
    "panda ads",
    "pandago",
    "Press Releases",
    "Q-commerce",
    "Riders",
    "Tech",
  ];

  const featuredNews = [
    {
      image: "https://www.foodpanda.com/wp-content/uploads/2025/12/EDW_0166-1.jpg",
      category: "Merchants",
      date: "17 Dec 2025",
      title: "foodpanda strengthens merchant care with record onboarding milestone in Asia",
    },
    {
      image: "https://www.foodpanda.com/wp-content/uploads/2025/11/Key-KV.jpg",
      category: "Press Releases",
      date: "25 Nov 2025",
      title: "foodpanda expands ‘panda hearts’ programme, reports 30% drop in rider accidents across Asia",
    },
    {
      image: "https://www.foodpanda.com/wp-content/uploads/2025/12/Ride_Hailing_Release___Key_Visual-v2.jpg",
      category: "Business",
      date: "21 Nov 2025",
      title: "foodpanda brings unmatched value to pandapro members with one-of-a-kind ride-hailing partnerships across Asia",
    },
  ];

  const newsItems = [
    {
      image: "https://www.foodpanda.com/wp-content/uploads/2025/12/EDW_0166-1.jpg",
      category: "APAC",
      date: "17.12.2025",
      title: "foodpanda strengthens merchant care with record onboarding milestone in Asia",
    },
    {
      image: "https://www.foodpanda.com/wp-content/uploads/2025/11/Key-KV.jpg",
      category: "APAC",
      date: "25.11.2025",
      title: "foodpanda expands ‘panda hearts’ programme, reports 30% drop in rider accidents across Asia",
    },
    {
      image: "https://www.foodpanda.com/wp-content/uploads/2025/12/Ride_Hailing_Release___Key_Visual-v2.jpg",
      category: "APAC",
      date: "21.11.2025",
      title: "foodpanda brings unmatched value to pandapro members with one-of-a-kind ride-hailing partnerships across Asia",
    },
    {
      image: "https://www.foodpanda.com/wp-content/uploads/2025/04/Image-1-scaled-e1745809628641.jpg",
      category: "Singapore",
      date: "25.04.2025",
      title: "foodpanda Singapore strengthens support for delivery partners through signed MOU with NDCA",
    },
    {
      image: "https://www.foodpanda.com/wp-content/uploads/2024/10/website_banner_1440x480px.webp",
      category: "APAC",
      date: "31.01.2025",
      title: "foodpanda delivered 2024",
    },
    {
      image: "https://www.foodpanda.com/wp-content/uploads/2024/10/fp-about-2.webp",
      category: "APAC",
      date: "23.10.2024",
      title: "foodpanda Partners with Fiserv to Enable More Streamlined and Secure eCommerce Payments Across Asia",
    },
    {
      image: "https://www.foodpanda.com/wp-content/uploads/2024/10/fp-singapore.webp",
      category: "Singapore",
      date: "07.10.2024",
      title: "foodpanda Singapore launches inaugural Rider Safety Month in partnership with Traffic Police",
    },
    {
      image: "https://www.foodpanda.com/wp-content/uploads/2024/08/foodpanda-Malaysia-launches-Jejak-Panda-to-provide-accessible-income-opportunities.webp",
      category: "Malaysia",
      date: "13.08.2024",
      title: "foodpanda Malaysia launches ‘Jejak Panda’ to provide accessible income opportunities",
    },
    {
      image: "https://www.foodpanda.com/wp-content/uploads/2024/10/foodpanda-gives-Yew-Tee-unlimited-free-deliveries-scaled-1.webp",
      category: "Singapore",
      date: "12.08.2024",
      title: "Finally, something in Yew Tee – foodpanda spices up Singapore’s “most dull” neighbourhood with unlimited free deliveries",
    },
    {
      image: "https://www.foodpanda.com/wp-content/uploads/2024/10/IMG_5209-1-scaled-1.webp",
      category: "Philippines",
      date: "30.07.2024",
      title: "foodpanda Philippines partners with Jia to extend support to partner vendors",
    },
    {
      image: "https://www.foodpanda.com/wp-content/uploads/2024/07/Jonathan-Borenstein-Head-of-Logistics-foodpanda-Singapore-L-and-Toshit-Bharara-Managing-Director-foodpanda-Singapore-R-launching-panda-hearts-scaled.jpg",
      category: "Singapore",
      date: "30.07.2024",
      title: "foodpanda Singapore awards $10,500 in bursaries to delivery partners and their families",
    },
    {
      image: "https://www.foodpanda.com/wp-content/uploads/2024/05/02.jpg",
      category: "APAC",
      date: "25.07.2024",
      title: "foodpanda partners with Cybersource to drive business growth in Asia Pacific through enhanced customer checkout experience",
    },
  ];

  return (
    <>
      {/* Header Section with Carousel */}
      <section className="pt-16 pb-8 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Press Releases</h1>
          <Carousel className="w-full">
            <CarouselContent>
              {featuredNews.map((news, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col md:flex-row bg-muted rounded-2xl overflow-hidden h-full md:min-h-[400px]">
                    <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center order-2 md:order-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-primary font-bold uppercase text-sm">
                          {news.category}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {news.date}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-6">
                        {news.title}
                      </h3>
                      <Button variant="panda" className="w-fit">
                        Read more
                      </Button>
                    </div>
                    <div className="md:w-1/2 order-1 md:order-2">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover aspect-video md:aspect-auto"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 z-20 flex gap-2">
              <CarouselPrevious className="static translate-y-0 h-10 w-10" />
              <CarouselNext className="static translate-y-0 h-10 w-10" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Filters and News Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-6 mb-12">
            <h2 className="text-2xl font-bold">Discover latest news</h2>
            <div className="flex flex-nowrap overflow-x-auto gap-2 pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-start scrollbar-hide">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                    activeFilter === filter
                      ? "bg-panda-dark text-white border-panda-dark"
                      : "bg-transparent text-foreground border-muted-foreground/30 hover:border-panda-dark"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="posts-listing">
            {newsItems.map((item, index) => (
              <NewsCard key={index} {...item} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-16">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-panda-dark text-white text-sm font-bold">
              1
            </span>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted text-sm font-medium transition-colors">
              2
            </button>
            <button className="w-10 h-10 hidden sm:flex items-center justify-center rounded-full hover:bg-muted text-sm font-medium transition-colors">
              3
            </button>
            <span className="px-2">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted text-sm font-medium transition-colors">
              13
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsroomPage;