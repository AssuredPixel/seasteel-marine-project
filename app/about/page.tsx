import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero 
          title="About Seasteel Marine"
          subtitle="Engineering Excellence Since 2012"
          breadcrumb="About Us"
          backgroundImage="/images/about-port.png"
        />
        <section className="bg-white py-24 min-h-[400px]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-navy text-3xl font-heading font-bold mb-8">Our Heritage</h2>
            <p className="text-steel/70 font-body text-lg leading-relaxed">
              Founded in Eket, Akwa Ibom State, Seasteel Marine & Offshore Services Limited 
              began as a vision to provide world-class technical solutions for the Nigerian 
              maritime sector. We are built on a foundation of safety, precision, and Nigerian resilience.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
