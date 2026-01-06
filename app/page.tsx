import Image from "next/image";

export default function Home() {

  const menu = [{
    title: "Home", path: "#", key: "home"
  },
  {
    title: "Skills", path: "#", key: "skills"
  },
  {
    title: "Projects", path: "#", key: "projects"
  },
  {
    title: "Contact", path: "#", key: "contact"
  }
  ]

  return (
    <div className="">
      <header className="grid grid-cols-3 border-b-4 py-4 px-8 bg-[#f06292]">
        {/* <div className="flex items-center gap-16 "> */}
        <div className="flex items-end gap-2 h-max">
          <Image
            alt="title"
            width={42}
            height={42}
            src={"/assets/media/github-loading.gif"}
          />
          <h1 className="heading-bit8 text-3xl font-bold leading-6">
            <span className="font-bold">
              {`>_`}
            </span>
            {`Sararmjalal`}
          </h1>
        </div>
        <ul className="flex items-center gap-16">
          {
            menu.map(item => {
              return (
                <li key={item.key} className="font-black text-xl cursor-pointer underline">
                  {item.title}
                </li>
              )
            })
          }
        </ul>
        {/* </div> */}
        <button className="pixel-btn max-w-max ms-auto me-0">
          {`LET'S DO THIS`}
        </button>
      </header>
    </div>
  );
}
