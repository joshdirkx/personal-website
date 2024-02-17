import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";

export default function Article() {
  return (
    <div className="bg-solarized-base3 px-6 py-32 lg:px-8 rounded-lg">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Resume
        </h1>
        <p className="mt-6 text-xl leading-8">
          Customer obsessed problem solver with a background in Software
          Engineering, Software Engineering Management, and Solution
          Architecture. Skilled at working on cross-functional teams to deliver
          simple solutions to complex, esoteric business needs.
        </p>
        <div className="mt-10 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Experience
          </h2>
          <ul role="list" className="mt-8 max-w-4xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">
                  Consultant // Series A Startup
                </strong>{" "}
                – Seattle, WA (05.2023 - present)
                <ul>
                  <li>Placeholder</li>
                  <li>Placeholder</li>
                  <li>Placeholder</li>
                </ul>
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">
                  Software Engineer // TrueCar
                </strong>{" "}
                – Seattle, WA (02.2023 - 09.2023)
                <ul>
                  <li>Placeholder</li>
                </ul>
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">
                  Solutions Architect // Release
                </strong>{" "}
                – Seattle, WA (03.2022 - 01.2023)
                <ul>
                  <li>Placeholder</li>
                </ul>
              </span>
            </li>
          </ul>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Certifications
          </h2>
          <p className="mt-6">
            <div>AWS Solutions Architect - Associate</div>
            <div>Certified Scrum Master</div>
          </p>
        </div>
      </div>
    </div>
  );
}
