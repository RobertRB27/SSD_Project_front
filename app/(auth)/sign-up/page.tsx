import Hero from "@/components/hero";
import Footer from "@/components/footer";
import CardSignIn from "@/components/card-sign-in";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col md:flex-row items-center justify-center mx-auto gap-9">
        <Hero />
        <div>
          <CardSignIn />
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}