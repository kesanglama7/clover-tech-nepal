import { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef      = useRef<SVGSVGElement>(null);
  const nwRef       = useRef<SVGGElement>(null);
  const neRef       = useRef<SVGGElement>(null);
  const swRef       = useRef<SVGGElement>(null);
  const seRef       = useRef<SVGGElement>(null);
  const crossRef    = useRef<SVGGElement>(null);
  const dotRef      = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const nw     = nwRef.current!;
    const ne     = neRef.current!;
    const sw     = swRef.current!;
    const se     = seRef.current!;
    const cross  = crossRef.current!;
    const dot    = dotRef.current!;

    // --- Set initial hidden states BEFORE making container visible ---
    gsap.set(nw,    { scale: 0, opacity: 0, transformOrigin: "17px 17px" });
    gsap.set(ne,    { scale: 0, opacity: 0, transformOrigin: "54px 17px" });
    gsap.set(sw,    { scale: 0, opacity: 0, transformOrigin: "17px 54px" });
    gsap.set(se,    { scale: 0, opacity: 0, transformOrigin: "54px 54px" });
    gsap.set(cross, { scale: 0, opacity: 0, transformOrigin: "35px 35px" });
    gsap.set(dot,   { scale: 0, opacity: 0, transformOrigin: "35px 36px" });
    gsap.set(".preloader-letter", { opacity: 0, y: 18, rotateZ: -4 });
    gsap.set(".preloader-sub",    { opacity: 0, y: 8 });

    // Now reveal the container — everything inside is already hidden
    gsap.set(containerRef.current, { visibility: "visible" });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.7,
          ease: "power2.inOut",
          onComplete,
        });
      },
    });

    tl.to(nw,    { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" }, 0.0);
    tl.to(ne,    { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" }, 0.15);
    tl.to(sw,    { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" }, 0.30);
    tl.to(se,    { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" }, 0.45);
    tl.to(cross, { scale: 1, opacity: 1, duration: 0.35, ease: "power2.out" }, 0.65);
    tl.to(dot,   { scale: 1, opacity: 1, duration: 0.3,  ease: "back.out(1.4)" }, 0.80);

    tl.to(".preloader-letter", {
      opacity: 1, y: 0, rotateZ: 0,
      duration: 0.11, stagger: 0.05,
      ease: "power3.out",
    }, 0.9);

    tl.to(".preloader-sub", { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }, "-=0.15");
    tl.to({}, { duration: 0.85 });

    return () => { tl.kill(); };
  }, [onComplete]);

  const title = "CLOVER TECH NEPAL";

  return (
    // Key fix: start as visibility:hidden so browser paints nothing.
    // GSAP reveals it only after setting all child states to hidden.
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      style={{ visibility: "hidden" }}
    >
      <svg
        ref={svgRef}
        width="140"
        height="140"
        viewBox="0 0 71 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-5"
        style={{ overflow: "visible" }}
      >
        <g ref={nwRef}>
          <path d="M13.4917 14.1869L13.5825 14.2916L33.5216 36.0824C33.9671 35.6168 34.2259 35.0014 34.2481 34.3548L34.0276 9.73713C34.0276 9.73713 33.0934 0.117788 23.1694 0C21.6037 0.133341 20.0846 0.604286 18.7149 1.381C17.3452 2.15771 16.1568 3.22207 15.23 4.50211C14.2774 5.90038 13.6299 7.48672 13.3302 9.15623C13.0306 10.8258 13.0856 12.5404 13.4917 14.1869Z" fill="#00AAA9"/>
          <path d="M13.323 12.4332L13.4139 12.5248L34.1703 33.5566C33.7506 34.0179 33.1685 34.295 32.5487 34.3287L9.26257 34.1716C9.26257 34.1716 0.18162 33.2032 0 22.72C0.102127 21.1053 0.52581 19.5278 1.24575 18.0819C1.96569 16.6361 2.96711 15.3514 4.19021 14.3047C5.46249 13.2961 6.95095 12.6016 8.53668 12.2766C10.1224 11.9517 11.7615 12.0053 13.323 12.4332Z" fill="#0D9BA1"/>
        </g>

        <g ref={neRef}>
          <path d="M57.0803 14.2523L56.9894 14.357L37.0503 36.1479C36.6048 35.6823 36.346 35.0669 36.3238 34.4203L36.5442 9.73714C36.5442 9.73714 37.4783 0.117788 47.4025 0C48.9659 0.135158 50.4824 0.606974 51.8497 1.38361C53.2172 2.16025 54.4034 3.22365 55.3289 4.50211C56.2929 5.90747 56.9477 7.50451 57.2498 9.18612C57.5519 10.8678 57.494 12.5951 57.0803 14.2523Z" fill="#2B707E"/>
          <path d="M57.2357 12.5117L57.145 12.6033L36.3885 33.635C36.8082 34.0963 37.3904 34.3734 38.0102 34.4071L61.2962 34.25C61.2962 34.25 70.3771 33.2816 70.5589 22.7985C70.4567 21.1837 70.033 19.6063 69.313 18.1604C68.5931 16.7145 67.5916 15.4299 66.3687 14.3832C65.0963 13.3746 63.6078 12.68 62.0222 12.3551C60.4364 12.0301 58.7972 12.0838 57.2357 12.5117Z" fill="#038089"/>
        </g>

        <g ref={swRef}>
          <path d="M13.4916 56.7869L13.5824 56.6821L31.1347 37.5089C31.5801 37.9744 34.0053 36.8621 34.0275 37.5088V61.2629C34.0275 61.2629 33.0935 70.8821 23.1693 71C21.6057 70.8697 20.088 70.4029 18.7184 69.6308C17.3489 68.8586 16.1593 67.7993 15.23 66.524C14.2701 65.1192 13.6184 63.5241 13.3187 61.8447C13.0189 60.1656 13.0778 58.4413 13.4916 56.7869Z" fill="#8EB192"/>
          <path d="M13.323 58.5406L13.4139 58.449L33.7293 37.9539C33.3095 37.4924 33.1685 36.6788 32.5487 36.6451H9.08094C9.08094 36.6451 0.181618 37.7706 0 48.2537C0.102127 49.8686 0.525821 51.4459 1.24576 52.8918C1.96571 54.3377 2.96713 55.6223 4.19021 56.669C5.46251 57.6777 6.95095 58.3723 8.53669 58.6971C10.1224 59.0221 11.7615 58.9685 13.323 58.5406Z" fill="#5EA089"/>
        </g>

        <g ref={seRef}>
          <path d="M57.5212 56.5513L57.4303 56.4466L37.4912 34.6558C37.0457 35.1212 36.7869 35.7368 36.7647 36.3834L36.9853 61.0272C36.9853 61.0272 37.9193 70.6466 47.8435 70.7643C49.4071 70.6342 50.9248 70.1672 52.2944 69.395C53.664 68.6229 54.8536 67.5636 55.7828 66.2884C56.7427 64.8837 57.3943 63.2883 57.6941 61.6092C57.9939 59.93 57.935 58.2056 57.5212 56.5513Z" fill="#A9B888"/>
          <path d="M57.677 58.2919L57.5861 58.2003L36.8297 37.1685C37.2494 36.7072 37.8315 36.4301 38.4513 36.3964L61.7375 36.5535C61.7375 36.5535 70.8184 37.5219 71 48.0051C70.8979 49.6198 70.4742 51.1972 69.7543 52.6431C69.0344 54.089 68.0329 55.3736 66.8098 56.4203C65.5376 57.4289 64.0491 58.1234 62.4633 58.4484C60.8775 58.7734 59.2385 58.7198 57.677 58.2919Z" fill="#BFBE7A"/>
        </g>

        <g ref={crossRef}>
          <path d="M36.9853 31.41H31.1346V37.3126H36.9853V31.41Z" fill="#5EA089"/>
          <path d="M28.6047 48.8787L47.8041 29.5095C49.4354 27.8638 49.4354 25.1954 47.8041 23.5498C46.1727 21.904 43.5278 21.904 41.8966 23.5498L22.6971 42.919C21.0659 44.5647 21.0659 47.2329 22.6971 48.8787C24.3285 50.5245 26.9734 50.5245 28.6047 48.8787Z" fill="white"/>
          <path d="M48.0196 42.4871L28.1813 23.7848C26.4958 22.1957 23.8525 22.286 22.2773 23.9865C20.702 25.6871 20.7917 28.3539 22.4772 29.9428L42.3155 48.6453C44.0012 50.2345 46.6445 50.1441 48.2197 48.4435C49.7948 46.743 49.7053 44.0763 48.0196 42.4871Z" fill="white"/>
        </g>

        <circle ref={dotRef} cx="35.2469" cy="36.2263" r="4.1384" fill="#00AAA9" />
      </svg>

      <div className="flex items-center gap-0.5">
        {title.split("").map((letter, i) => (
          <span
            key={i}
            className="preloader-letter font-heading font-bold text-4xl md:text-5xl leading-tight text-foreground inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>

      <p className="preloader-sub font-body text-base text-muted-foreground mt-2 tracking-wider">
        Build With Us
      </p>
    </div>
  );
};

export default Preloader;