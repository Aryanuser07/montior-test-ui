"use client";

import React from "react";
import { FloatingNav, NavItem } from "@/components/ui/floating-navbar";
import { Home, ShieldCheck, Globe, CreditCard, FileText, Activity } from "lucide-react";

export function Navbar() {
  const navItems: NavItem[] = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="w-3.5 h-3.5" />,
    },
    {
      name: "Features",
      link: "#features",
      icon: <ShieldCheck className="w-3.5 h-3.5" />,
    },
    {
      name: "Network",
      link: "#global-network",
      icon: <Globe className="w-3.5 h-3.5" />,
    },
    {
      name: "Pricing",
      link: "#pricing",
      icon: <CreditCard className="w-3.5 h-3.5" />,
    },
    {
      name: "Docs",
      link: "/docs",
      icon: <FileText className="w-3.5 h-3.5" />,
    },
    {
      name: "Status",
      link: "/status",
      icon: <Activity className="w-3.5 h-3.5 text-emerald-400" />,
    },
  ];

  return <FloatingNav navItems={navItems} />;
}
