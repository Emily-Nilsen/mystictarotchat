import Image from 'next/image';

export function Fool() {
  return (
    <div className="relative w-64 h-80">
      <Image
        width={640}
        height={894}
        src="/fool.png"
        alt="The Fool"
        className="object-cover"
      />
    </div>
  );
}
