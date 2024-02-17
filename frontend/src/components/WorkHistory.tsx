import { UserIcon } from "@heroicons/react/20/solid";
import Highlight from "../images/highlight.jpeg";
import Release from "../images/release.jpeg";
import TrueCar from "../images/truecar.jpeg";

const timeline = [
  {
    id: 1,
    content: "Solutions Architect",
    target: "Highlight",
    href: "#",
    date: "2023 - now",
    datetime: "2020-09-20",
    icon: UserIcon,
    iconBackground: "bg-gray-400",
    image: Highlight,
  },
  {
    id: 2,
    content: "Software Engineer 4",
    target: "TrueCar",
    href: "#",
    date: "2023 - 2023",
    datetime: "2020-09-22",
    icon: UserIcon,
    iconBackground: "bg-blue-500",
    image: TrueCar,
  },
  {
    id: 3,
    content: "Solutions Architect",
    target: "Release",
    href: "#",
    date: "2022 - 2023",
    datetime: "2020-09-28",
    icon: UserIcon,
    iconBackground: "bg-green-500",
    image: Release,
  },
  {
    id: 4,
    content: "Manager, Software Engineering",
    target: "TrueCar",
    href: "#",
    date: "2021 - 2022",
    datetime: "2020-09-30",
    icon: UserIcon,
    iconBackground: "bg-blue-500",
    image: TrueCar,
  },
  {
    id: 5,
    content: "Software Engineer 4",
    target: "TrueCar",
    href: "#",
    date: "2020 - 2021",
    datetime: "2020-09-22",
    icon: UserIcon,
    iconBackground: "bg-blue-500",
    image: TrueCar,
  },
  {
    id: 6,
    content: "Software Engineer 3",
    target: "TrueCar",
    href: "#",
    date: "2017 - 2020",
    datetime: "2020-09-22",
    icon: UserIcon,
    iconBackground: "bg-blue-500",
    image: TrueCar,
  },
  {
    id: 7,
    content: "Software Engineer 2",
    target: "TrueCar",
    href: "#",
    date: "2015 - 2017",
    datetime: "2020-09-22",
    icon: UserIcon,
    iconBackground: "bg-blue-500",
    image: TrueCar,
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function WorkHistory() {
  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span
                  className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <img
                    src={`${event.image}`}
                    alt="work history logo"
                    className={classNames(
                      "object-contain h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-solarized-base3",
                    )}
                  />
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-solarized-base01 font-medium">
                      {event.content}
                      <br />
                      <a
                        href={event.href}
                        className="font-medium text-solarized-base01"
                      >
                        {event.target}
                      </a>
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-solarized-base01">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
