"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import React from "react";

const NavigationNavbar = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList className="font-playfair-semi-bold-italic flex h-24 w-full items-end justify-center">
          <NavigationMenuItem className="bg-menu-nav-hover h-full px-5">
            <NavigationMenuTrigger asChild>
              <Link href="/" className="flex h-full items-end">
                Live fully in Vietnam
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-menu-nav absolute top-full mt-0.5 w-full p-6 shadow-lg transition-all duration-300">
              <ul className="font-playfair-regular textMenuBar grid grid-cols-4 gap-6">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/liveFullyInVietNamese/vietNamNow">
                      Vietnam now
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/liveFullyInVietNamese/whyNotVietNam">
                      Why not Vietnam
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/liveFullyInVietNamese/myVietNam">
                      My Vietnam
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/liveFullyInVietNamese/virtualVietNam">
                      Virtual Vietnam
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="bg-menu-nav-hover h-full px-5">
            <NavigationMenuTrigger asChild>
              <Link href="/placesToGo" className="flex h-full items-end">
                Places to go
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-menu-nav absolute top-full mt-0.5 w-full p-6 shadow-lg transition-all duration-300">
              <ul className="font-playfair-regular textMenuBar grid grid-cols-2 gap-6 text-lg font-medium">
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
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="bg-menu-nav-hover h-full px-5">
            <NavigationMenuTrigger asChild>
              <Link
                href="/vietnameseTraditions"
                className="flex h-full items-end"
              >
                Vietnamese traditions
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-menu-nav absolute top-full mt-0.5 w-full p-6 shadow-lg transition-all duration-300">
              <ul className="font-playfair-regular textMenuBar grid grid-cols-2 gap-6 text-lg font-medium">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/vietnameseTraditions/highlights">
                      Highlights
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/vietnameseTraditions/holidays">Holidays</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="bg-menu-nav-hover h-full px-5">
            <NavigationMenuTrigger asChild>
              <Link href="/planYourTrip" className="flex h-full items-end">
                Plan your trip
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-menu-nav absolute top-full mt-0.5 w-full p-6 shadow-lg transition-all duration-300">
              <ul className="font-playfair-regular textMenuBar grid grid-cols-2 gap-6 text-lg font-medium">
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
                    <Link href="/planYourTrip/itineraries">Itineraries</Link>
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
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="bg-menu-nav-hover h-full px-5">
            <NavigationMenuLink asChild>
              <Link href="/travelOffers" className="flex h-full items-end">
                Travel offers
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavigationNavbar;
