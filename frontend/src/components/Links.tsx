import GitHub from "../images/github.png";
import LinkedIn from "../images/linkedin.png";
import Medium from "../images/medium.png";

export default function Links() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
        <div className="bg-transparent p-8 sm:p-10">
          <a
            href="https://github.com/joshdirkx"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="max-h-12 w-full object-contain"
              src={GitHub}
              alt="GitHub"
              width={158}
              height={48}
            />
          </a>
        </div>
        <div className="bg-transparent p-6 sm:p-10">
          <a
            href="https://www.linkedin.com/in/joshdirkx/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="max-h-12 w-full object-contain"
              src={LinkedIn}
              alt="LinkedIn"
              width={158}
              height={48}
            />
          </a>
        </div>
        <div className="bg-transparent p-6 sm:p-10">
          <a
            href="https://medium.com/@joshdirkx"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="max-h-12 w-full object-contain"
              src={Medium}
              alt="Medium"
              width={158}
              height={48}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
