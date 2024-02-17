export default function Divider() {
  return (
    <div className="relative m-4">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-solarized-base01" />
      </div>
      <div className="relative flex justify-center pt-10" />
    </div>
  );
}
