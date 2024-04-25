import Image from "next/image";

import portfolio3D from "@/public/images/portfolio-01.png";
import portfolioCharacter from "@/public/images/portfolio-demo-character.jpg";
import portoflioMotion from "@/public/images/motion-design.jpg";
import webDesign from "@/public/images/web-design.jpg";
import dev from "@/public/images/dev.jpg";

export const metadata = {
  title: "Y Phan' Portfolios",
};

export default function Home() {
  const items = [
    {
      field: "3D Character Modelling",
      externalUrl:
        "https://drive.google.com/file/d/1sUxJxh5Sv3xrjyWSO4EiUukcukAoEIfo/view?usp=drive_link",
      lasteUpdate: new Date("2022-12-04"),
      image: portfolioCharacter,
      projectsCount: 3,
    },
    {
      field: "Motion Design Showreel",
      externalUrl:
        "https://drive.google.com/file/d/1sUxJxh5Sv3xrjyWSO4EiUukcukAoEIfo/view?usp=drive_link",
      lasteUpdate: new Date("2022-12-04"),
      image: portoflioMotion,
      projectsCount: 4,
    },
    {
      field: "Web interface, Webflow Design",
      externalUrl:
        "https://drive.google.com/file/d/1sUxJxh5Sv3xrjyWSO4EiUukcukAoEIfo/view?usp=drive_link",
      lasteUpdate: new Date("2022-12-04"),
      image: webDesign,
      projectsCount: 12,
    },
    {
      field: "WebApp Development",
      externalUrl:
        "https://drive.google.com/file/d/1sUxJxh5Sv3xrjyWSO4EiUukcukAoEIfo/view?usp=drive_link",
      lasteUpdate: new Date("2022-12-04"),
      image: dev,
      projectsCount: 2,
    },
    {
      field: "Graphic Design",
      externalUrl:
        "https://drive.google.com/file/d/13G9Lb7ho-t9AlVZBZo3giiuxPE6d8NII/view?usp=sharing",
      lasteUpdate: new Date("2024-04-25"),
      image: portfolio3D,
      projectsCount: 3,
    },
  ];

  return (
    <main className="flex flex-col">
      <ul className="py-2 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
        {items.map((item) => (
          <li key={item.field}>
            <a
              href={item.externalUrl}
              target="_blank"
              className="block border border-solid border-slate-300 rounded-2xl overflow-hidden"
            >
              <div
                style={{ paddingBottom: "55.7%" }}
                className="relative overflow-hidden"
              >
                <div className="absolute w-full h-full top-0 left-0 -z-10">
                  <Image src={item.image} width="100%" height="100%" />
                </div>
                <div className="absolute top-3 right-3 bg-slate-300 text-slate-800 font-bold py-1 px-3 rounded-full">
                  <span className="text-sm">{item.projectsCount || 0}</span>
                </div>
              </div>
              <div className="p-6">
                <span className="block">{item.field}</span>
                <span className="block text-gray-500 text-sm">
                  Last update:{" "}
                  {item.lasteUpdate.toLocaleString("default", {
                    month: "short",
                  })}{" "}
                  {item.lasteUpdate.getFullYear()}
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
