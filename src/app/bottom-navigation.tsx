import { Home, Menu, ShoppingBag, Ticket, User } from "lucide-react";
import React, { FC } from "react";

export const BottomNavigation: FC = () => (
  <div className="bg-black border-t border-gray-800 pb-6">
    <div className="grid grid-cols-5 text-center py-2">
      <a
        href="#"
        className="flex flex-col items-center justify-center text-lime-500"
      >
        <Home className="w-5 h-5" />
        <span className="text-xs mt-1">Home</span>
      </a>
      <a
        href="#"
        className="flex flex-col items-center justify-center text-gray-400"
      >
        <Ticket className="w-5 h-5" />
        <span className="text-xs mt-1">Tickets</span>
      </a>
      <a
        href="#"
        className="flex flex-col items-center justify-center text-gray-400"
      >
        <ShoppingBag className="w-5 h-5" />
        <span className="text-xs mt-1">Shop</span>
      </a>
      <a
        href="#"
        className="flex flex-col items-center justify-center text-gray-400"
      >
        <User className="w-5 h-5" />
        <span className="text-xs mt-1">MyCircle</span>
      </a>
      <a
        href="#"
        className="flex flex-col items-center justify-center text-gray-400"
      >
        <Menu className="w-5 h-5" />
        <span className="text-xs mt-1">Meer</span>
      </a>
    </div>
  </div>
);
