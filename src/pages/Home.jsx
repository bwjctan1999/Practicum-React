import DesignTeamwork from "../assets/svgs/DesignTeamwork.svg";
import LoginButton from "../components/LoginButton";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="flex h-screen flex-col p-4 lg:px-36 lg:py-8 ">
      <ul className="flex flex-row items-center justify-between">
        <li className="flex gap-4 text-h6 items-center">
          <div className="h-8 w-8 rounded-full bg-primaryGradient-start"></div>
          <p className="text-lg">Something</p>
        </li>
        <LoginButton />
      </ul>

      <div className="item-center flex grow flex-col-reverse justify-evenly lg:flex-row">
        <div className="flex flex-col justify-center gap-8 text-center lg:text-left">
          <h2>Lorem ipsum dolor sit amet</h2>
          <h5>
            onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </h5>
          <div className="w-52 self-center lg:self-start">
            <Button
              text="Let's Go"
              bgcolor="bg-gradient-to-r from-primaryGradient-start to-primaryGradient-end"
            />
          </div>
        </div>
        <div className="lg:m-auto">
          <img src={DesignTeamwork} alt="team work svg" class="shrink" />
        </div>
      </div>
    </div>
  );
}
