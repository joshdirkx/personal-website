import { Popover } from '@headlessui/react'
import Background from './Background'
import WorkHistory from './WorkHistory'
import Header from './Header'

const navigation = [
  // { name: 'About', href: '#', current: true },
  // { name: 'Articles', href: '#', current: false },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Layout() {
  return (
    <>
      <div className="min-h-full">
        <Popover as="header" className="bg-transparent pb-24">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="relative flex items-center justify-center py-5 lg:justify-between">
                  <div className="absolute left-0 flex-shrink-0 lg:static text-white">
                    joshdirkx.io
                  </div>
                </div>
                {/*<Header />*/}
                {/*<div className="hidden border-t border-white border-opacity-20 py-5 lg:block">*/}
                {/*  <div className="grid grid-cols-3 items-center gap-8">*/}
                {/*    <div className="col-span-2">*/}
                {/*      <nav className="flex space-x-4">*/}
                {/*        {navigation.map((item) => (*/}
                {/*          <a*/}
                {/*            key={item.name}*/}
                {/*            href={item.href}*/}
                {/*            className={classNames(*/}
                {/*              item.current ? 'text-white' : 'text-indigo-100',*/}
                {/*              'rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10'*/}
                {/*            )}*/}
                {/*            aria-current={item.current ? 'page' : undefined}*/}
                {/*          >*/}
                {/*            {item.name}*/}
                {/*          </a>*/}
                {/*        ))}*/}
                {/*      </nav>*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>
            </>
          )}
        </Popover>
        <main className="-mt-24 pb-8">
          <Background />
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="sr-only">Page title</h1>
            <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
              <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                <section aria-labelledby="section-1-title">
                  <h2 className="sr-only" id="section-1-title">
                    Section title
                  </h2>
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <div className="p-6">
                        <h2 className="pb-4">Howdy y'all, I'm Josh.</h2>
                        <div>
                          Customer obsessed Engineer.
                        </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <section aria-labelledby="section-2-title">
                  <h2 className="sr-only" id="section-2-title">
                    Work History
                  </h2>
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <div className="p-6">
                      <WorkHistory />
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="border-t border-gray-200 py-8 text-center text-sm text-white sm:text-left">
              <span className="block sm:inline">&copy; 2023 Josh Dirkx, Inc.</span>{' '}
              <span className="block sm:inline">All rights reserved.</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
