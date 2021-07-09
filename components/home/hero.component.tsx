import Image from 'next/image';
import Link from 'next/link';

export default function HeroComponent() {
  return (
    <section className="bg-blue-primary-light flex justify-between items-center px-6 py-12">
      <Image
        src="/images/ogtic-full-logo.png"
        width="200px"
        height="74px"
        alt="OGTIC logo"
      />
      <div className="text-white flex flex-col items-start w-2/5">
        <h3 className="text-2xl mb-4">Check out our API catalog</h3>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam
          fugiat amet aliquid debitis enim repellendus laborum quae, consequatur
          id!
        </p>
        <Link href="/apis">
          <a className="bg-green-600 px-4 py-2 rounded-md shadow-md">Explore APIs</a>
        </Link>
      </div>
    </section>
  );
}
