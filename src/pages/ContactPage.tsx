import { useState } from "react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Form submitted! (Check console for data)");
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Contact us"
        backgroundImage="https://www.foodpanda.com/wp-content/uploads/2025/07/fp-contact.webp"
        height="min-h-[40svh] md:min-h-[50vh]"
      />

      {/* Contact Form Section */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-24">
            {/* Form */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center md:text-left">
                Contact form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="font-bold text-gray-700">
                      Name <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      name="firstName"
                      placeholder="First"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="h-12 rounded-xl border-gray-200 focus:ring-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="lastName"
                      className="font-bold text-gray-700 opacity-0 hidden sm:block"
                    >
                      Last
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      name="lastName"
                      placeholder="Last"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="h-12 rounded-xl border-gray-200 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-bold text-gray-700">
                    Email <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-gray-200 focus:ring-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-bold text-gray-700">
                    Your message <span className="text-primary">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="rounded-xl border-gray-200 focus:ring-primary resize-none"
                    required
                  />
                </div>

                <Button variant="panda" size="lg" type="submit" className="w-full md:w-fit px-12 h-14 rounded-full shadow-pink text-lg font-bold">
                  Submit
                </Button>
              </form>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <div className="relative w-full max-w-md">
                 <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl scale-110" />
                 <img
                  src="https://www.foodpanda.com/wp-content/uploads/2025/07/pau-pau.webp"
                  alt="Pau Pau mascot"
                  className="w-full h-auto rounded-3xl relative z-10 drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Centre Info Section */}
      <section className="py-16 md:py-24 bg-muted/30 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-50">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
              Got a question about your order? <br />
              Need help with some of your app features? <br />
              Contact <strong className="text-foreground text-primary">Help Centre</strong> via{" "}
              <strong className="text-foreground text-primary">app</strong> menu.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;