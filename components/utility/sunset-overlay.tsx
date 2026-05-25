import Link from "next/link"
import { IconArrowRight } from "@tabler/icons-react"

export function SunsetOverlay() {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-start justify-center overflow-y-auto bg-black px-6 py-10 text-white antialiased [background-image:radial-gradient(circle_at_50%_0%,#18181b_0%,transparent_60%)]">
      <div className="relative w-full max-w-[680px] animate-[fadeIn_0.8s_ease-out] rounded-[12px] border border-[#18181b] bg-[#09090b] p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] sm:p-14">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)]" />

        <h1 className="mb-8 text-[26px] font-normal tracking-[-0.02em] text-white sm:text-[28px]">
          Great things must evolve to become extraordinary.
        </h1>

        <div className="mb-10 flex flex-col gap-6">
          <p className="text-[16px] font-light leading-[1.8] text-[#a1a1aa]">
            <strong className="font-medium text-[#e4e4e7]">
              PixelVerseAI Chats
            </strong>{" "}
            was the first product we ever launched, built on top of the
            open-source project ChatbotUI. It allowed us to expand and learn,
            launching new features, testing capabilities, and pushing the limits
            of what AI could do at that time.
          </p>

          <p className="text-[16px] font-light leading-[1.8] text-[#a1a1aa]">
            Now, with the latest developments in frontier agentic intelligence,
            it&apos;s time to design and engineer a new, next-generation
            powerhouse for consumer AI.{" "}
            <strong className="font-medium text-[#e4e4e7]">
              Our first step into this new era is HelloAI, and we invite you to
              try it out.
            </strong>
          </p>

          <p className="text-[16px] font-light leading-[1.8] text-[#a1a1aa]">
            Thank you to everyone who has supported our journey. You were part
            of our first ever product, and we can&apos;t wait for you to
            experience what we&apos;ve built next.
          </p>

          <p className="text-[16px] font-light leading-[1.8] text-[#a1a1aa]">
            <strong className="font-medium text-[#e4e4e7]">P.S.</strong>{" "}
            Customers of PixelVerseAI Chats can reach out to our team for a
            special thank-you gift token of appreciation.
          </p>
        </div>

        <Link
          href="https://myaichat.com.au"
          target="_blank"
          rel="noreferrer"
          className="mb-12 inline-flex w-fit items-center justify-center gap-2 rounded-[6px] bg-white px-6 py-3 text-[14px] font-medium text-black transition-all duration-200 hover:-translate-y-px hover:bg-[#e4e4e7]"
        >
          Try HelloAI
          <IconArrowRight className="size-4 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>

        <hr className="mb-9 border-t border-[#18181b]" />

        <div className="flex flex-col items-start">
          <span className="text-[16px] font-normal text-white">
            With gratitude,
          </span>
          <img
            src="https://company.pixelverse.tech/assets/hk-sig-white-svg-DFpZ6Ctu.svg"
            alt="Founder Signature"
            className="pointer-events-none max-h-[90px] max-w-[350px] select-none object-contain opacity-95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] sm:max-h-[75px]"
          />
          <span className="text-[14px] font-light text-[#a1a1aa]">
            Hayden - Founder, PIXELVERSE DIGITAL [AI]
          </span>
        </div>
      </div>
    </div>
  )
}
