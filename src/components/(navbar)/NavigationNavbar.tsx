"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import Link from "next/link";
import React from "react";

const NavigationNavbar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="font-playfair-semi-bold-italic textNav text-black dark:text-white">
        <nav className="flex h-24 items-end space-x-15">
          <NavigationMenuItem className="h-full">
            <NavigationMenuTrigger asChild className="flex h-24 items-end">
              <Link href="/" className="group relative">
                <span>Live fully in Vietnam</span>
                <span className="absolute bottom-[-2px] left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="textMenuBar absolute mt-0.5 w-full rounded-b-lg bg-white p-6 shadow-md dark:bg-black dark:text-white">
                <div className="flex gap-8">
                  <div className="w-64">
                    <h3 className="font-playfair-semi-bold-italic mb-4 border-b pb-2">
                      Explore Vietnam
                    </h3>
                    <ul>
                      {[
                        {
                          href: "/liveFullyInVietNamese/vietNamNow",
                          label: "Vietnam now",
                        },
                        {
                          href: "/liveFullyInVietNamese/whyNotVietNam",
                          label: "Why not Vietnam",
                        },
                        {
                          href: "/liveFullyInVietNamese/myVietNam",
                          label: "My Vietnam",
                        },
                        {
                          href: "/liveFullyInVietNamese/virtualVietNam",
                          label: "Virtual Vietnam",
                        },
                      ].map((item) => (
                        <li
                          key={item.href}
                          className="group/item relative transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-red-500 opacity-0 transition-opacity duration-200 group-hover/item:opacity-100"></div>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block w-full px-3 py-3 transition-colors"
                            >
                              {item.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="w-[500px]">
                    <h3 className="font-playfair-semi-bold-italic mb-4 border-b pb-2">
                      <Link
                        href="/liveFullyInVietNamese/sea"
                        className="transition-colors hover:text-red-500"
                      >
                        Vietnam&#39;s East Sea
                      </Link>
                    </h3>

                    <div className="mt-5">
                      <ResizablePanelGroup
                        direction="horizontal"
                        className="max-w-md rounded-lg border md:min-w-[450px]"
                      >
                        <ResizablePanel defaultSize={50}>
                          <div className="flex h-[200px] items-center justify-center p-6">
                            <span className="font-semibold">One</span>
                          </div>
                        </ResizablePanel>
                        <ResizableHandle />
                        <ResizablePanel defaultSize={50}>
                          <ResizablePanelGroup direction="vertical">
                            <ResizablePanel defaultSize={25}>
                              <div className="flex h-full items-center justify-center p-6">
                                <span className="font-semibold">Two</span>
                              </div>
                            </ResizablePanel>
                            <ResizableHandle />
                            <ResizablePanel defaultSize={75}>
                              <div className="flex h-full items-center justify-center p-6">
                                <span className="font-semibold">Three</span>
                              </div>
                            </ResizablePanel>
                          </ResizablePanelGroup>
                        </ResizablePanel>
                      </ResizablePanelGroup>
                    </div>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="h-full">
            <NavigationMenuTrigger asChild className="flex h-24 items-end">
              <Link href="/placesToGo" className="group relative">
                <span>Places to go</span>
                <span className="absolute bottom-[-2px] left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="textMenuBar fixed top-24 right-0 left-0 z-50 mt-0.5 w-screen bg-white p-6 shadow-md dark:bg-black dark:text-white">
                <div className="mx-auto max-w-7xl">
                  <div className="grid grid-cols-3 gap-10">
                    <div>
                      <h3 className="mb-4 border-b pb-2 text-lg font-bold">
                        Northern Vietnam
                      </h3>
                      <ul className="space-y-3">
                        <li className="transition-colors hover:text-red-500">
                          <NavigationMenuLink asChild>
                            <Link href="/placesToGo/Northern" className="block">
                              Northern
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="transition-colors hover:text-red-500">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/placesToGo/Northern/Hanoi"
                              className="block"
                            >
                              Hanoi
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="transition-colors hover:text-red-500">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/placesToGo/Northern/Sapa"
                              className="block"
                            >
                              Sapa
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-4 border-b pb-2 text-lg font-bold">
                        Central Vietnam
                      </h3>
                      <ul className="space-y-3">
                        <li className="transition-colors hover:text-red-500">
                          <NavigationMenuLink asChild>
                            <Link href="/placesToGo/Central" className="block">
                              Central
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="transition-colors hover:text-red-500">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/placesToGo/Central/DaNang"
                              className="block"
                            >
                              Da Nang
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="transition-colors hover:text-red-500">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/placesToGo/Central/HoiAn"
                              className="block"
                            >
                              Hoi An
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-4 border-b pb-2 text-lg font-bold">
                        Southern Vietnam
                      </h3>
                      <ul className="space-y-3">
                        <li className="transition-colors hover:text-red-500">
                          <NavigationMenuLink asChild>
                            <Link href="/placesToGo/Southern" className="block">
                              Southern
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="transition-colors hover:text-red-500">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/placesToGo/Southern/HoChiMinh"
                              className="block"
                            >
                              Ho Chi Minh City
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-4 gap-4">
                    <div className="h-40 overflow-hidden rounded-lg bg-gray-100"></div>
                    <div className="h-40 overflow-hidden rounded-lg bg-gray-100"></div>
                    <div className="h-40 overflow-hidden rounded-lg bg-gray-100"></div>
                    <div className="h-40 overflow-hidden rounded-lg bg-gray-100"></div>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="h-full">
            <NavigationMenuTrigger asChild className="flex h-24 items-end">
              <Link href="/vietnameseTraditions" className="group relative">
                <span>Vietnamese traditions</span>
                <span className="absolute bottom-[-2px] left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="textMenuBar fixed top-24 right-0 left-0 z-50 mt-0.5 w-screen bg-white p-6 shadow-md dark:bg-black dark:text-white">
                <div className="mx-auto max-w-7xl">
                  <div className="grid grid-cols-3 gap-10">
                    <div>
                      <h3 className="mb-4 border-b pb-2 text-lg font-bold">
                        Cultural Events
                      </h3>
                      <ul className="space-y-3">
                        <li className="transition-colors hover:text-red-500">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/vietnameseTraditions/highlights"
                              className="block"
                            >
                              Highlights
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="transition-colors hover:text-red-500">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/vietnameseTraditions/holidays"
                              className="block"
                            >
                              Holidays
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-4 border-b pb-2 text-lg font-bold">
                        Local Cuisine
                      </h3>
                      <ul className="space-y-3">
                        <li className="transition-colors hover:text-red-500">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/vietnameseTraditions/cuisine/north"
                              className="block"
                            >
                              Northern Cuisine
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="transition-colors hover:text-red-500">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/vietnameseTraditions/cuisine/south"
                              className="block"
                            >
                              Southern Cuisine
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-4 border-b pb-2 text-lg font-bold">
                        Arts & Crafts
                      </h3>
                      <ul className="space-y-3">
                        <li className="transition-colors hover:text-red-500">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/vietnameseTraditions/arts"
                              className="block"
                            >
                              Traditional Arts
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-4">
                    <div className="h-40 overflow-hidden rounded-lg bg-gray-100"></div>
                    <div className="h-40 overflow-hidden rounded-lg bg-gray-100"></div>
                    <div className="h-40 overflow-hidden rounded-lg bg-gray-100"></div>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="h-full">
            <NavigationMenuTrigger asChild className="flex h-24 items-end">
              <Link href="/planYourTrip" className="group relative">
                <span>Plan your trip</span>
                <span className="absolute bottom-[-2px] left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="textMenuBar fixed top-24 right-0 left-0 z-50 mt-0.5 w-screen bg-white p-6 shadow-md dark:bg-black dark:text-white">
                <div className="mx-auto max-w-7xl">
                  <div className="grid grid-cols-3 gap-10">
                    <div>
                      <h3 className="mb-4 border-b pb-2 text-lg font-bold">
                        Before You Go
                      </h3>
                      <ul className="space-y-3">
                        <li className="transition-colors hover:text-red-500">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/planYourTrip/eVisaApplications"
                              className="block"
                            >
                              eVisa Applications
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="transition-colors hover:text-red-500">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/planYourTrip/visaRequirements"
                              className="block"
                            >
                              Visa Requirements
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="transition-colors hover:text-red-500">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/planYourTrip/healthyAndSafety"
                              className="block"
                            >
                              Healthy and Safety
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-4 border-b pb-2 text-lg font-bold">
                        Transportation
                      </h3>
                      <ul className="space-y-3">
                        <li className="transition-colors hover:text-red-500">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/planYourTrip/gettingToVietnam"
                              className="block"
                            >
                              Getting to Vietnam
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="transition-colors hover:text-red-500">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/planYourTrip/gettingAroundVietnam"
                              className="block"
                            >
                              Getting Around Vietnam
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-4 border-b pb-2 text-lg font-bold">
                        Useful Resources
                      </h3>
                      <ul className="space-y-3">
                        <li className="transition-colors hover:text-red-500">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/planYourTrip/itineraries"
                              className="block"
                            >
                              Itineraries
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="transition-colors hover:text-red-500">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/planYourTrip/vietnamesePhrases"
                              className="block"
                            >
                              Vietnamese Phrases
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="h-full">
            <NavigationMenuLink asChild className="flex h-24 items-end">
              <Link href="/travelOffers" className="group relative">
                <span>Travel offers</span>
                <span className="absolute bottom-[-2px] left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </nav>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationNavbar;
