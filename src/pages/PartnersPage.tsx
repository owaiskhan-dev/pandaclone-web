import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PartnersPage = () => {
  const countryContent = [
    {
      country: "Malaysia",
      title: "Are you ready to reach more customers?",
      text: "Don't miss out on earnings. Join foodpanda to reach more customers and increase revenue.",
      buttonText: "Let's get started!",
      image: "https://www.foodpanda.com/wp-content/uploads/2025/07/mehdi-ben-BOhxVT-VCRs-unsplash-900x600.webp",
      link: "https://partner.foodpanda.my/en",
    },
    {
      country: "Philippines",
      title: "Are you ready to expand your reach and connect with new customers?",
      text: "Let more customers find you. Partner with foodpanda and increase online visibility.",
      buttonText: "Get Started",
      image: "https://www.foodpanda.com/wp-content/uploads/2025/07/sj-Q4aFSPmYjNE-unsplash-900x600.webp",
      link: "https://partner.foodpanda.ph/en",
    },
    {
      country: "Bangladesh",
      title: "Ready to expand your reach to more customers?",
      text: "Don't just serve locals, serve your city. Let foodpanda connect you to new customers.",
      buttonText: "Get Started",
      image: "https://www.foodpanda.com/wp-content/uploads/2025/07/johnyvino-P-900x600.webp",
      link: "https://partner.foodpanda.com.bd/en",
    },
    {
      country: "Hong Kong",
      title: "Would you like to increase your customer base and brand reach?",
      text: "foodpanda's campaigns and offers puts your restaurant in front of thousands of customers.",
      buttonText: "Get started!",
      image: "https://www.foodpanda.com/wp-content/uploads/2025/07/mche-lee-kGA-900x600.webp",
      link: "https://partner.foodpanda.hk/en",
    },
    {
      country: "Pakistan",
      title: "Ready to expand your reach?",
      text: "Don't miss out on earnings. Join foodpanda to reach more customers and increase revenue.",
      buttonText: "Get started now!",
      image: "https://www.foodpanda.com/wp-content/uploads/2025/07/polly-sadler-900x600.webp",
      link: "https://partner.foodpanda.pk/en",
    },
    {
      country: "Singapore",
      title: "Are you ready to reach new customers?",
      text: "Boost your profits. Get more orders and better margins when you partner with foodpanda.",
      buttonText: "Sign Up Now",
      image: "https://www.foodpanda.com/wp-content/uploads/2025/07/abillion-97i3-900x600.webp",
      link: "https://partner.foodpanda.sg/en",
    },
    {
      country: "Taiwan",
      title: "Would you like to boost customer reach and revenue?",
      text: "Don't miss out on earnings. Join foodpanda to reach more customers and increase revenue.",
      buttonText: "Start now!",
      image: "https://www.foodpanda.com/wp-content/uploads/2025/07/daniel-honies-qJX_J6U5Vm4-unsplash-900x600.webp",
      link: "https://partner.foodpanda.com.tw/zh_TW",
    },
    {
      country: "Cambodia",
      title: "Looking to grow your business with your customers?",
      text: "Don't wait - Sign up now to start growing your business with deliveries!",
      buttonText: "Get Started Now!",
      image: "https://www.foodpanda.com/wp-content/uploads/2025/07/jane-Ikax-633x900.webp",
      link: "https://partner.foodpanda.com.kh/s/?language=km",
    },
    {
      country: "Laos",
      title: "Are you ready to take your success further?",
      text: "Achieve more success and sales by delivering your food and products out to your customers!",
      buttonText: "Start now!",
      image: "https://www.foodpanda.com/wp-content/uploads/2025/07/doan-anh-afK-900x600.webp",
      link: "https://partner.foodpanda.la/s/?language=en_SG",
    },
    {
      country: "Myanmar",
      title: "Do you want your business to go further?",
      text: "Don't wait - Sign up now to be our partner and reach further with your business!",
      buttonText: "Start now!",
      image: "https://www.foodpanda.com/wp-content/uploads/2025/07/tatiana-demelo-a22j2b-900x600.webp",
      link: "https://partner.foodpanda.com.mm/s/?language=my",
    },
  ];

  const whyPartner = [
    {
      title: "REACH NEW CUSTOMERS",
      image: "https://www.foodpanda.com/wp-content/uploads/2025/07/Riders_C-SM_photo_static_horizontal_retouch-batch-2_V02_SJ-900x600.webp",
    },
    {
      title: "BOOST YOUR ORDER VOLUME",
      image: "https://www.foodpanda.com/wp-content/uploads/2021/05/foodpanda-3-scaled-1-900x596.jpg",
    },
    {
      title: "DRIVE MORE SALES",
      image: "https://www.foodpanda.com/wp-content/uploads/2023/02/foodpanda-home-2-900x506.jpg",
    },
    {
      title: "INCREASE CUSTOMER SATISFACTION",
      image: "https://www.foodpanda.com/wp-content/uploads/2021/09/【新聞圖片3】foodpanda-精選多家高人氣烤肉餐廳，經典美食一鍵到府幫你解解饞！-1-900x600.jpg",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      image: "https://www.foodpanda.com/wp-content/uploads/2025/07/foodora-partners-design2-83x90-1.webp",
      text: "The customer adds their delivery address in the app or on the website and then selects a store or restaurant in their area.",
    },
    {
      step: "2",
      image: "https://www.foodpanda.com/wp-content/uploads/2025/07/foodora-design-riders-1-90x72-1.webp",
      text: "You accept the order with the reading tablet and prepare it for the collection time.",
    },
    {
      step: "3",
      image: "https://www.foodpanda.com/wp-content/uploads/2025/07/independence-74x90-1.webp",
      text: "A rider will come to you at the specified time and collect the order. It is then delivered directly to the customer!",
    },
    {
      step: "4",
      image: "https://www.foodpanda.com/wp-content/uploads/2025/07/income-74x90-1.webp",
      text: "Twice per month you receive payments for the orders you have received via foodora. You automatically receive a basis for the deposit and a detailed insight into your sales statistics.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            Get more orders with<br />
            with foodpanda
          </>
        }
        backgroundImage="https://www.foodpanda.com/wp-content/uploads/2025/07/join-panda-partner-to-grow-restaurant-sales.png"
        height="min-h-[50svh] md:min-h-[60vh]"
      >
        <Button variant="hero" size="lg" asChild>
          <a href="#partners">Become a Partner!</a>
        </Button>
      </HeroSection>

      {/* Intro Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Become a restaurant or local shop partner
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Take your business to new heights by partnering with foodpanda, the leading delivery service trusted by businesses large and small. <br />
            We dare to always go further, helping you reach untapped customer bases, boost order volume, and drive more sales.
          </p>
        </div>
      </section>

      {/* Country Selector (Tabs) */}
      <section className="section bg-background" id="partners">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="Malaysia" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="flex flex-nowrap overflow-x-auto h-auto bg-transparent gap-3 justify-start md:justify-center w-full pb-4 scrollbar-hide -mx-4 px-4 md:mx-0">
                {countryContent.map((item) => (
                  <TabsTrigger
                    key={item.country}
                    value={item.country}
                    className="border border-primary text-primary hover:bg-primary/10 data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-6 py-2 transition-all duration-300 text-sm md:text-base font-semibold whitespace-nowrap shrink-0"
                  >
                    {item.country}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            {countryContent.map((item) => (
              <TabsContent key={item.country} value={item.country} className="mt-0">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                  <div className="md:w-1/2 space-y-6 text-center md:text-left order-2 md:order-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                      {item.title}
                    </h2>
                    <p className="text-lg text-muted-foreground text-balance">
                      {item.text}
                    </p>
                    <Button variant="panda" size="lg" asChild className="shadow-pink rounded-full px-8 font-bold">
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.buttonText}
                      </a>
                    </Button>
                  </div>
                  <div className="md:w-1/2 order-1 md:order-2">
                    <img
                      src={item.image}
                      alt={item.country}
                      className="rounded-2xl shadow-lg w-full max-w-full"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why partner with foodpanda?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {whyPartner.map((item, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[3/4] group shadow-md"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h4 className="text-white font-bold text-xl uppercase leading-tight drop-shadow-md">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="section bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How does it work?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="h-24 flex items-center justify-center mb-6">
                  <img src={item.image} alt={`Step ${item.step}`} className="max-h-full" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{item.step}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Have more questions? Check it out here
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-bold text-left">
                How can I receive orders?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                There are two ways to receive orders. Via a tablet, or if you have some kind of restaurant software (POS provider), it is also possible to connect it. In this case, indicate this during the connection process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-bold text-left">
                Are there any costs if I register on the site?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                There is no cost for registering on the site. foodpanda only charges a commission if a sale has taken place. So you only have to pay when you sell something.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-bold text-left">
                What are the opening hours like?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Choose your specific opening hours and temporarily close our service if you have a lot to do. We are there when you need us!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default PartnersPage;