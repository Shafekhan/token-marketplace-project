import React, { useEffect, useState } from "react";
import { Dropdown } from "@nextui-org/react";
import {
  ETH,
  COIN1,
  COIN2,
  COIN3,
  COIN4,
  COIN5,
  COIN6,
  COIN7,
  COIN8,
  DEFAULT_VALUE,
} from "../utils/saleToken";

const Selector = ({ defaultValue = DEFAULT_VALUE, ignoreValue, setToken, id }) => {
  const menu = [
    { key: ETH, name: ETH },
    { key: COIN1, name: COIN1 },
    { key: COIN2, name: COIN2 },
    { key: COIN3, name: COIN3 },
    { key: COIN4, name: COIN4 },
    { key: COIN5, name: COIN5 },
    { key: COIN6, name: COIN6 },
    { key: COIN7, name: COIN7 },
    { key: COIN8, name: COIN8 },
  ];

  const [selectedItem, setSelectedItem] = useState(defaultValue);
  const [menuItems, setMenuItems] = useState(menu);

  useEffect(() => {
    // Filter out the ignored token from the menu items
    const filteredMenu = ignoreValue ? menu.filter((item) => item.key !== ignoreValue) : menu;
    setMenuItems(filteredMenu);
  }, [ignoreValue]);

  useEffect(() => {
    setSelectedItem(defaultValue);
  }, [defaultValue]);

  const handleSelection = (key) => {
    setSelectedItem(key);
    setToken(key);
  };

  return (
    <Dropdown>
      <Dropdown.Button
        css={{
          backgroundColor: selectedItem === DEFAULT_VALUE ? "#7765F3" : "#2c2f36",
        }}
      >
        {selectedItem}
      </Dropdown.Button>

      <Dropdown.Menu
        aria-label="Token Selector"
        items={menuItems}
        onAction={handleSelection}
      >
        {menuItems.map((item) => (
          <Dropdown.Item
            key={item.key}
            aria-label={id || ""}
            color={item.key === "delete" ? "error" : "default"}
          >
            {item.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Selector;
