import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import {
  Chat,
  EmojiFlags,
  ExpandMoreOutlined,
  LocalHospital,
  People,
  Storefront,
  VideoLibrary,
} from "@material-ui/icons";
import { useStateValue } from "./StateProvider";

const Sidebar = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRow src={user?.photoURL} title={user?.displayName} />
      <SidebarRow title={"COVID-19 Information Center"} Icon={LocalHospital} />
      <SidebarRow title={"Pages"} Icon={EmojiFlags} />
      <SidebarRow title={"Friends"} Icon={People} />
      <SidebarRow title={"Messenger"} Icon={Chat} />
      <SidebarRow title={"Marketplace"} Icon={Storefront} />
      <SidebarRow title={"Videos"} Icon={VideoLibrary} />
      <SidebarRow title={"Marketplace"} Icon={ExpandMoreOutlined} />
    </div>
  );
};

export default Sidebar;
