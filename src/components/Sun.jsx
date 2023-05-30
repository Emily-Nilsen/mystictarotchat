import Image from 'next/image';

export function Sun() {
  return (
    <div className="relative w-64 h-80">
      <Image
        width={640}
        height={894}
        src="/sun.png"
        alt="The Sun"
        className="object-cover"
      />
    </div>
  );
}
