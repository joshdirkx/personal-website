function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "About", href: "#about", current: true },
  { name: "Resume", href: "#resume", current: false },
  { name: "Articles", href: "#articles", current: false },
  { name: "Contact", href: "#contact", current: false },
];

export default function Navigation() {
  return (
    <nav className="flex space-x-4">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            item.current ? "text-white" : "text-indigo-100",
            "rounded-md bg-white bg-opacity-0 px-3 py-2 text-lg font-medium hover:bg-opacity-10",
          )}
          aria-current={item.current ? "page" : undefined}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}
