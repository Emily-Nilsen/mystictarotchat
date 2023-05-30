import Image from 'next/image';

export function Back() {
  return (
    <div className="relative w-64 h-80">
      <Image
        width={640}
        height={894}
        src="/back.png"
        alt="The Back"
        className="object-cover"
      />
    </div>
  );
}
