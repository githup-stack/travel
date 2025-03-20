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
    <div>
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
                  <div className="flex gap-10">
                    <div className="w-64">
                      <ul className="space-y-3">
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
                            className="transition-colors hover:text-red-500"
                          >
                            <NavigationMenuLink asChild>
                              <Link href={item.href} className="block">
                                {item.label}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="w-[500px]">
                      <span className="mb-4 border-b pb-2 text-lg font-bold">
                        <Link
                          href={"/liveFullyInVietNamese/sea"}
                          className="transition-colors hover:text-red-500"
                        >
                          Vietnam&#39;s East Sea
                        </Link>
                      </span>
                      <div className="mt-2">
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
                <div className="textMenuBar absolute mt-0.5 bg-white dark:bg-black dark:text-white">
                  <ul>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/placesToGo/Central">Central</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/placesToGo/Northern">Northern</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/placesToGo/Southern">Southern</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
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
                <div className="textMenuBar absolute mt-0.5 bg-white dark:bg-black dark:text-white">
                  <ul>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/vietnameseTraditions/highlights">
                          Highlights
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/vietnameseTraditions/holidays">
                          Holidays
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
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
                <div className="textMenuBar absolute mt-0.5 bg-white dark:bg-black dark:text-white">
                  <ul>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/planYourTrip/eVisaApplications">
                          eVisa Applications
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/planYourTrip/gettingAroundVietnam">
                          Getting Around Vietnam
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/planYourTrip/gettingToVietnam">
                          Getting to Vietnam
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/planYourTrip/healthyAndSafety">
                          Healthy and Safety
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/planYourTrip/itineraries">
                          Itineraries
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/planYourTrip/vietnamesePhrases">
                          Vietnamese Phrases
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/planYourTrip/visaRequirements">
                          Visa Requirements
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
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
    </div>
  );
};

export default NavigationNavbar;
