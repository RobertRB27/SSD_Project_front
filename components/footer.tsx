

export default function Footer() {
    return (
        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-6">
                <p>
                  Todos los derechos reservados{" "}
                  <a
                    href="https://www.roberto-robles.com"
                    target="_blank"
                    className="font-bold hover:underline"
                    rel="noreferrer"
                  >
                    Roberto Robles
                  </a>
                </p>
        </footer>
    );
}