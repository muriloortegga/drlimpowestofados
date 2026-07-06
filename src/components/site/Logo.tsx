import type { SVGProps } from "react";

interface LogoProps extends SVGProps<SVGSVGElement> {
  mode?: "color" | "currentColor" | "white";
  size?: number;
}

export function Logo({ mode = "color", size, className = "", ...props }: LogoProps) {
  // Ajusta as cores baseado no modo solicitado pelo design system
  const dropColor = mode === "color" ? "#2F56A6" : mode === "white" ? "#FFFFFF" : "currentColor";

  // No modo "white", o rosto (olhos e nariz) deve ser escuro ou transparente.
  // No modo "color", os olhos/nariz são brancos.
  // No modo "currentColor", os olhos/nariz podem ser transparentes ou da cor de fundo (vamos usar o fundo ou deixar sem preenchimento para herdar).
  // Para manter a fidelidade visual, usaremos var(--bg) ou transparente nos olhos se não for colorido.
  const eyeColor = mode === "color" ? "#FFFFFF" : "var(--bg, #0b1420)";
  const noseColor = mode === "color" ? "#FFFFFF" : "var(--bg, #0b1420)";

  const width = size || props.width || 200;
  const height = size ? (size * 240) / 200 : props.height || 240;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Corpo principal (A gota) */}
      <path
        fill={dropColor}
        d="M100 0C100 0 28 92 28 152C28 196 60 230 100 230C140 230 172 196 172 152C172 92 100 0 100 0Z"
      />
      {/* Alças laterais ("Orelhas") */}
      <ellipse cx="14" cy="128" rx="20" ry="16" fill={dropColor} />
      <ellipse cx="186" cy="128" rx="20" ry="16" fill={dropColor} />

      {/* Rosto (Olhos e Nariz) */}
      <circle cx="68" cy="138" r="22" fill={eyeColor} />
      <circle cx="132" cy="138" r="22" fill={eyeColor} />
      <path
        d="M101 118 L94 165 L112 175"
        stroke={noseColor}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default Logo;
