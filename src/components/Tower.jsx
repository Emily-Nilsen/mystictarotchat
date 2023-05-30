import Image from 'next/image';

export function Tower() {
  return (
    <div className="relative w-64 h-80">
      <Image
        width={640}
        height={894}
        src="/tower.png"
        alt="The Tower"
        className="object-cover"
      />
    </div>
  );
}
