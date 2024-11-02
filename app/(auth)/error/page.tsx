import Hero from "@/components/hero";
import Footer from "@/components/footer";
import CardSignIn from "@/components/card-sign-in";
import { Card, CardContent } from "@/components/ui/card";

export default function ErrorPage() {
    return(
      <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col md:flex-row items-center justify-center mx-auto gap-9">
        <Hero />
        <div className="flex flex-col w-[350px]">
          <CardSignIn />
          <Card className="mt-5"> 
            <CardContent className="mt-5">
              <p className="">Lo sentimos, el usuario o contraseña son incorrectos, por favor inténtalo de nuevo</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>


    ) 
    
    
    
  }