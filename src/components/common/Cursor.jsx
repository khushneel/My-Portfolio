import { useCursor } from "@/hooks/useCursor";

export default function CustomCursor() {
  const { dotRef, ringRef, labelRef } = useCursor();

  return (
    <>
      <div ref={dotRef} className="cursor" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={labelRef} className="cursor-label" aria-hidden="true" />
    </>
  );
}
