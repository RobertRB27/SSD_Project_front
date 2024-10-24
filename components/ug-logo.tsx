import Image from "next/image";
import LogoUGcolor from "@/images/LogoUGcolor.avif"

export default function UGLogo() {
    return (
      <Image src={LogoUGcolor} alt="UG Logo" width={140} height={30} />
    );
  }
  