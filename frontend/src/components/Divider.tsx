export default function Divider() {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-transparent px-3 text-base font-semibold leading-6 text-gray-900">Articles</span>
      </div>
    </div>
  )
}
