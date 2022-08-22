import LoginButton from "../../components/LoginButton";
import StoreCard from "./StoreCard";

export default function Store() {
  const tests = [
    {
      title: "Janitorial Service",
      desc: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    },
    {
      title: "House Keeping",
      desc: "uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Air Conditioner Cleaning",
      desc: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    },
    {
      title: "Cook",
      desc: "uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Electronics Repair",
      desc: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    },
    {
      title: "Something I dunno",
      desc: "sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Blabla Blablabla",
      desc: "sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Janitorial Service",
      desc: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    },
    {
      title: "House Keeping",
      desc: "uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Air Conditioner Cleaning",
      desc: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    },
    {
      title: "Cook",
      desc: "uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Electronics Repair",
      desc: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    },
    {
      title: "Something I dunno",
      desc: "sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Blabla Blablabla",
      desc: "sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  const fillCards = () => {
    return tests.map(({ title, desc }) => (
      <StoreCard title={title} desc={descLimiter(desc)} />
    ));
  };

  const descLimiter = (string) => {
    return string.length > 50 ? string.slice(0, 50).trim() + "..." : string;
  };

  return (
    <div className="flex h-screen flex-col gap-8 p-4 lg:px-36 lg:py-8 ">
      <ul className="flex flex-row items-center justify-between">
        <li className="flex gap-4 text-h6">
          <div className="h-8 w-8 rounded-full bg-gradientBlue-start"></div>
          Something
        </li>
        <li className="bg-slate-100 ">
          <LoginButton />
        </li>
      </ul>
      <div className="grid grow grid-cols-1 gap-5 md:grid-cols-3 xl:grid-cols-5">
        {fillCards()}
      </div>
    </div>
  );
}
