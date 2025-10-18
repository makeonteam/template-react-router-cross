import { useTranslation } from "react-i18next";
import {
  Map as BoardsIcon,
  LayoutGridIcon as NotesIcon,
} from "lucide-react";

// sidebar menus
function sidebarAppsConfigs() {
  const { t: tMain } = useTranslation("main");

  const tMenu = (menu: string) => {
    return tMain(`common.sidebar.${menu}`);
  };

  const sidebarAppsConfigs = [
    {
      icon: BoardsIcon,
      label: tMenu("boards"),
      url: "/boards",
    },
    {
      icon: NotesIcon,
      label: tMenu("notes"),
      url: "/notes",
    },
  ];

  return sidebarAppsConfigs;
}

export { sidebarAppsConfigs };
