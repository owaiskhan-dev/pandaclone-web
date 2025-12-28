import { Button } from "@/components/ui/button";
import { useState } from "react";

const PandaAdsContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

  return (
    <section className="section bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <h1 className="text-4xl font-bold text-foreground mb-8 text-center">Contact panda ads</h1>
        <form className="space-y-6">
          <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-lg border border-border bg-background" />
          <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-border bg-background" />
          <input type="text" placeholder="Company" className="w-full px-4 py-3 rounded-lg border border-border bg-background" />
          <textarea placeholder="Message" rows={5} className="w-full px-4 py-3 rounded-lg border border-border bg-background resize-none" />
          <Button variant="panda" size="lg" className="w-full">Submit</Button>
        </form>
      </div>
    </section>
  );
};
export default PandaAdsContactPage;
