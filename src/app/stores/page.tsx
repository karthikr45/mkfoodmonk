import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import StoreCard from "@/components/StoreCard";
import { stores } from "@/lib/data";

export const metadata = {
  title: "Stores — mkfoodmonk",
  description: "Browse every premium kitchen and artisan store on mkfoodmonk.",
};

export default function StoresPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-cream-deep py-20">
        <div className="container-px">
          <SectionHeading
            eyebrow="All stores"
            title={
              <>
                Every premium kitchen,{" "}
                <span className="text-saffron">in one place</span>
              </>
            }
            subtitle="Hand-picked stores and chefs, curated for taste and craft."
          />
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {stores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
