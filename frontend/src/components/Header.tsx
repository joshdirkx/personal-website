import Headshot from "../images/headshot.png";

export default function Header() {
  return (
    <div className="overflow-hidden rounded-lg bg-solarized-base3 shadow mt-4 mb-4">
      <h2 className="sr-only" id="profile-overview-title">
        Profile Overview
      </h2>
      <div className="bg-solarized-base3 p-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="sm:flex sm:space-x-5">
            <div className="flex-shrink-0">
              <img
                className="mx-auto h-40 w-40 rounded-full"
                src={Headshot}
                alt=""
              />
            </div>
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <p className="text-2xl font-medium text-solarized-base02">
                Hey y'all, I'm
              </p>
              <p className="text-6xl font-bold text-solarized-base02 pt-2">
                Josh Dirkx
              </p>
              <p className="text-lg font-medium text-solarized-base02">
                Solutions Architect, Software Engineer, Leader
              </p>
              <p className="text-sm font-medium text-solarized-base02 pt-2">
                I deliver simple solutions to complex problems
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
