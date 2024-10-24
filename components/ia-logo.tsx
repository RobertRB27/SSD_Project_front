import Image from "next/image";
import IAlogo from "@/images/IAlogo.avif"

export default function IALogo() {
    return (
      <Image src={IAlogo} alt="UG Logo" width={140} height={30} />
    );
  }