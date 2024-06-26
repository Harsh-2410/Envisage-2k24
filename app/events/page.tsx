"use client";

import Title from "@/app/components/Title";
import EventCard from "@/app/components/events/EventCard";
import { useAuthContext } from "@/context/AuthContext";
import events from "@/data/events.json";
import { User } from "firebase/auth";
import HomeLayout from "../(landing)/layout";
import UserLayout from "../(user)/layout";
export default function AboutPage() {
  const { user } = useAuthContext() as { user: User | null };

  if (user) {
    return (
      <UserLayout>
        <div>
        <title>Events - Envisage 24</title>
        <div className="all overflow-x-hidden" style={{backgroundImage: 'linear-gradient(white, #7f1d1d 50%)'}}>
          <div className="text-gray-600">
            <div className="container mx-auto px-4 py-24 pt-0">
              <div className="-m-4 mx-auto flex flex-wrap">
                {events.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </UserLayout>
    );
  } else {
    return (
      <HomeLayout>
        <title>Events - Envisage 24</title>
        <div>
          <Title title="Events" />
          <div className="text-gray-600">
            <div className="container mx-auto px-4  py-24 pt-0">
              <div className="-m-4 mx-auto flex flex-wrap">
                {events.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </HomeLayout>
    );
  }
}
