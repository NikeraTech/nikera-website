import Logo from './Logo';

export default function HeroIllustration() {
  return (
    <div className="relative flex min-h-[390px] w-full items-center justify-center overflow-hidden">
      <div className="absolute left-0 top-5 h-64 w-40 opacity-35 [background-image:radial-gradient(#0d6efd_1px,transparent_1px)] [background-size:12px_12px]" />
      <div className="absolute right-[-70px] top-8 h-[350px] w-[350px] rounded-full border border-[#0d6efd]/10 opacity-60" />
      <div className="absolute bottom-8 h-[2px] w-[470px] max-w-[85%] bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_28px_8px_rgba(13,110,253,0.55)]" />
      <div className="absolute bottom-0 right-[-80px] h-56 w-[520px] opacity-40 [background-image:radial-gradient(#0d6efd_1.2px,transparent_1.2px)] [background-size:13px_13px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_68%)]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <Logo size={190} />
        <div className="mt-5 text-[54px] font-extrabold leading-none tracking-[0.36em] text-white drop-shadow-[0_4px_20px_rgba(255,255,255,0.16)] sm:text-[64px]">
          NIKERA
        </div>
        <div className="mt-5 flex items-center gap-4 text-[18px] font-medium tracking-[0.42em] text-white/90">
          <span className="h-px w-20 bg-white/70" />
          TECHNOLOGIES LTD
          <span className="h-px w-20 bg-white/70" />
        </div>
        <p className="mt-5 text-[15px] font-semibold uppercase tracking-[0.34em] text-cyan-300">
          Innovating for a Digital Future
        </p>
      </div>
    </div>
  );
}
