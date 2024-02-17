import { Popover } from "@headlessui/react";
import Background from "./Background";
import WorkHistory from "./WorkHistory";
// import ArticleList from "./ArticleList";
import Header from "./Header";
// const navigation = [
//   { name: "About", href: "#", current: true },
//   { name: "Articles", href: "#", current: false },
// ];

// function classNames(...classes: any[]) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Layout() {
  return (
    <>
      <div className="min-h-full">
        <Popover as="header" className="bg-transparent pb-24">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <Header />
                {/*<div className="hidden border-t border-white border-opacity-20 py-5 lg:block">*/}
                {/*  <div className="grid grid-cols-3 items-center gap-8">*/}
                {/*    <div className="col-span-2">*/}
                {/*      <nav className="flex space-x-4">*/}
                {/*        {navigation.map((item) => (*/}
                {/*          <a*/}
                {/*            key={item.name}*/}
                {/*            href={item.href}*/}
                {/*            className={classNames(*/}
                {/*              item.current ? "text-white" : "text-indigo-100",*/}
                {/*              "rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10",*/}
                {/*            )}*/}
                {/*            aria-current={item.current ? "page" : undefined}*/}
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
                    About
                  </h2>
                  <div className="overflow-hidden rounded-lg bg-solarized-base3 shadow">
                    <div className="p-6">
                      <div className="flex">
                        <div className="pb-4 pl-10 text-solarized-base02">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Tellus orci ac auctor augue
                          mauris augue neque gravida in. Cursus turpis massa
                          tincidunt dui ut ornare lectus sit. Quis viverra nibh
                          cras pulvinar mattis nunc sed blandit libero. Arcu
                          bibendum at varius vel pharetra vel turpis nunc. Sed
                          blandit libero volutpat sed cras ornare arcu. Eget
                          duis at tellus at urna condimentum mattis. Et tortor
                          consequat id porta. In egestas erat imperdiet sed
                          euismod nisi. Molestie a iaculis at erat pellentesque
                          adipiscing commodo elit. Vehicula ipsum a arcu cursus
                          vitae congue. Id ornare arcu odio ut sem nulla. Sed
                          vulputate mi sit amet mauris commodo quis. Ac turpis
                          egestas integer eget aliquet nibh. Vitae tempus quam
                          pellentesque nec nam. Et malesuada fames ac turpis
                          egestas sed tempus. Viverra ipsum nunc aliquet
                          bibendum enim facilisis. Tortor id aliquet lectus
                          proin nibh nisl. Turpis egestas maecenas pharetra
                          convallis posuere morbi leo urna molestie. Urna nec
                          tincidunt praesent semper feugiat nibh sed.
                          <br />
                          <br />
                          Felis bibendum ut tristique et egestas quis. Vivamus
                          at augue eget arcu dictum. Sem et tortor consequat id
                          porta nibh. Amet nulla facilisi morbi tempus iaculis
                          urna id. Lacus suspendisse faucibus interdum posuere
                          lorem ipsum dolor sit. Consequat ac felis donec et.
                          Sit amet tellus cras adipiscing enim eu turpis. At
                          volutpat diam ut venenatis tellus in metus vulputate.
                          Vitae congue eu consequat ac felis donec et odio. Sed
                          cras ornare arcu dui vivamus arcu felis bibendum ut.
                          Lectus sit amet est placerat in. Pretium nibh ipsum
                          consequat nisl vel pretium lectus quam. Egestas tellus
                          rutrum tellus pellentesque eu tincidunt. Et molestie
                          ac feugiat sed lectus vestibulum mattis ullamcorper.
                          Ornare massa eget egestas purus. Eu lobortis elementum
                          nibh tellus molestie nunc. Enim nunc faucibus a
                          pellentesque sit amet porttitor. Sed vulputate odio ut
                          enim blandit volutpat maecenas volutpat. Odio aenean
                          sed adipiscing diam.
                          <br />
                          <br />
                          Cursus metus aliquam eleifend mi in nulla. A diam
                          sollicitudin tempor id eu nisl nunc mi. Massa placerat
                          duis ultricies lacus sed turpis tincidunt id aliquet.
                          Eget nullam non nisi est sit amet facilisis magna.
                          Turpis massa tincidunt dui ut. Purus in mollis nunc
                          sed id semper risus in. A diam sollicitudin tempor id
                          eu. Commodo quis imperdiet massa tincidunt nunc
                          pulvinar sapien. Felis bibendum ut tristique et
                          egestas. Tempor orci dapibus ultrices in iaculis nunc
                          sed augue. Quam lacus suspendisse faucibus interdum
                          posuere lorem ipsum dolor. Porta nibh venenatis cras
                          sed felis eget velit aliquet. Tellus elementum
                          sagittis vitae et leo duis ut diam quam. Tellus rutrum
                          tellus pellentesque eu tincidunt tortor aliquam. Odio
                          morbi quis commodo odio aenean sed adipiscing diam. In
                          hendrerit gravida rutrum quisque non. At volutpat diam
                          ut venenatis tellus. Ornare arcu dui vivamus arcu
                          felis bibendum ut tristique et.
                          <br />
                          <br />
                          Auctor neque vitae tempus quam pellentesque nec nam
                          aliquam sem. Eget arcu dictum varius duis. Cum sociis
                          natoque penatibus et magnis dis. Faucibus vitae
                          aliquet nec ullamcorper sit amet risus. Purus viverra
                          accumsan in nisl nisi. Pellentesque diam volutpat
                          commodo sed egestas egestas. Eu scelerisque felis
                          imperdiet proin. Id aliquet lectus proin nibh nisl
                          condimentum id venenatis a. Sed risus ultricies
                          tristique nulla aliquet. Non blandit massa enim nec
                          dui. A diam maecenas sed enim ut sem viverra aliquet
                          eget. Aliquet nibh praesent tristique magna sit amet
                          purus. Eget nulla facilisi etiam dignissim diam quis
                          enim lobortis scelerisque.
                          <br />
                          <br />
                          Sit amet dictum sit amet justo donec enim diam
                          vulputate. Augue mauris augue neque gravida in
                          fermentum. Ullamcorper sit amet risus nullam eget
                          felis eget. Sodales neque sodales ut etiam sit amet
                          nisl. Vulputate eu scelerisque felis imperdiet proin
                          fermentum leo. Euismod quis viverra nibh cras
                          pulvinar. Ligula ullamcorper malesuada proin libero
                          nunc consequat interdum varius sit. Placerat orci
                          nulla pellentesque dignissim. Arcu cursus vitae congue
                          mauris. Fusce ut placerat orci nulla pellentesque. Sed
                          velit dignissim sodales ut eu sem integer vitae. Amet
                          mattis vulputate enim nulla aliquet porttitor.
                          Pellentesque habitant morbi tristique senectus et.
                          Auctor eu augue ut lectus. Libero volutpat sed cras
                          ornare arcu dui vivamus. Varius vel pharetra vel
                          turpis nunc eget lorem dolor.
                        </div>
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
                  <div className="overflow-hidden rounded-lg bg-solarized-base3 shadow">
                    <div className="p-6">
                      <WorkHistory />
                    </div>
                  </div>
                </section>
              </div>
            </div>
            {/*<ArticleList />*/}
          </div>
        </main>
      </div>
    </>
  );
}
