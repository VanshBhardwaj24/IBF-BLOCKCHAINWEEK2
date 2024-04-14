import Image from "next/image";
import DoraLogo from "public/sponsors/DoraLogo.jpg";
import PolygonLogo from "public/sponsors/PolygonLogo.png";
import OpenBuildLogo from "public/sponsors/OpenBuildLogo.svg";

export default function SponsorCards() {
  return (
    <div className="pt-3">
      <h2 className="text-left text-5xl font-semibold w-1/3 text-white">
        Sponsors
      </h2>
      <div className="mt-5 mb-5 w-32 h-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-md" />

      <section className="pt-1 md:grid grid-cols-3 ">
        <a
          href="https://www.polygon.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="w-56 my-5 md:mx-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
            src={PolygonLogo}
            alt="polygon Logo"
          />
        </a>
        <a
          href="https://dorahacks.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="w-56 my-5 md:mx-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            src={DoraLogo}
            alt="Shardeum Logo"
          />
        </a>
        <a
          href="https://openbuild.xyz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="w-56 my-5 md:mx-auto transition duration-500 ease-in-out mt-20 mb-10 transform hover:-translate-y-1 hover:scale-110"
            src={OpenBuildLogo}
            alt="Spheron Logo"
            style={{ backgroundColor: "white" }}
          />
        </a>
      </section>
    </div>
  );
}
