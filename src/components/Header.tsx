import Image from "next/image";
import Link from "next/link";
import { Jua } from "next/font/google";

const jua = Jua({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <header className="w-full max-w-[1320px] mx-auto flex items-center justify-between p-[10px]">
      <div className="h-[72px] shrink-0 w-[226px] relative">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>
      </div>

      <div className="flex gap-[8px] items-center shrink-0">
        <nav
          className={`bg-[#e5effe] flex gap-[28px] items-center px-[28px] py-[12px] rounded-[15px] font-sans`}
        >
          <Link
            href="#faq"
            className="text-[#353973] text-[18px] whitespace-nowrap hover:opacity-80 transition-opacity"
          >
            FAQ
          </Link>
          <Link
            href="#shop"
            className="text-[#353973] text-[18px] whitespace-nowrap hover:opacity-80 transition-opacity"
          >
            Shop
          </Link>
          <Link
            href="#projects"
            className="text-[#353973] text-[18px] whitespace-nowrap hover:opacity-80 transition-opacity"
          >
            Projects
          </Link>
        </nav>

        <Link
          href="#rsvp"
          className={`bg-[#1fa1dd] flex items-center px-[24px] py-[12px] rounded-[15px] text-white text-[18px] hover:opacity-90 transition-opacity font-sans`}
        >
          RSVP NOW
        </Link>
      </div>
    </header>
  );
}
