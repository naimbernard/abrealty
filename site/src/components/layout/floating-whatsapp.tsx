import { MessageCircle } from "lucide-react";
import { waLinks } from "@/lib/whatsapp";

export function FloatingWhatsapp() {
  return (
    <a
      href={waLinks.general()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Amar on WhatsApp"
      className="group fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-105 sm:right-8 sm:bottom-8"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50 [animation-duration:2.5s] motion-reduce:hidden" />
      <MessageCircle size={26} className="relative" />
    </a>
  );
}
