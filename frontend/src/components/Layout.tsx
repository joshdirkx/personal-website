import { Popover } from "@headlessui/react";
import Background from "./Background";
import WorkHistory from "./WorkHistory";
// import ArticleList from "./ArticleList";
import Divider from "./Divider";
import Header from "./Header";
import Resume from "./Resume";
// import Contact from "./Contact";
// import Navigation from "./Navigation";
import Testimonial from "./Testimonial";
import Testimonials from "./Testimonials";
import Links from "./Links";

export default function Layout() {
  return (
    <>
      <div className="min-h-full">
        <Popover as="header" className="bg-transparent pb-24">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <Header />
                <div className="grid grid-cols-3 items-center gap-8 my-4">
                  <div className="col-span-2">{/*<Navigation />*/}</div>
                </div>
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
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <div className="p-6">
                      <div className="flex">
                        <div className="pb-4 px-5 text-solarized-base02 text-justify">
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
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <div className="p-6">
                      <WorkHistory />
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <Divider />
            <Resume />
            {/*<Divider />*/}
            {/*<ArticleList />*/}
            <Divider />
            <Testimonial />
            <Divider />
            <Testimonials />
            {/*<Divider />*/}
            {/*<Contact />*/}
            <Divider />
            <Links />
          </div>
        </main>
      </div>
    </>
  );
}
