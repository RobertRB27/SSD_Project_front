import UGLogo from "@/components/ug-logo";
import IALogo from "@/components/ia-logo";

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-8 justify-center items-center">
        <a
          href="https://www.ug.edu.ec/"
          target="_blank"
          rel="noreferrer"
        >
          <UGLogo />
        </a>
          <IALogo />
      </div>
      <h1 className="sr-only">Proyecto SSD</h1>
      <p className="text-3xl lg:text-5xl !leading-tight mx-auto max-w-xl text-center font-medium">
          Sistemas de Soporte a la Desición
      </p>
      
    </div>
  );
}
