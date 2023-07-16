import React, { useState } from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "../Desktop/styles.module.css";
import { NavbarSecondaryMenuFiller } from "@docusaurus/theme-common";

function BlogSidebarMobileSecondaryMenu({ sidebar, onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const excludedPermalinks = [
    "/wikis/submit",
    "/wikis/guidelines",
    "/wikis/tags",
    "es/wikis/submit",
    "es/wikis/guidelines",
    "es/wikis/tags",
    "fr/wikis/submit",
    "fr/wikis/guidelines",
    "fr/wikis/tags",
    "ar/wikis/submit",
    "ar/wikis/guidelines",
    "ar/wikis/tags",
    "ru/wikis/submit",
    "ru/wikis/guidelines",
    "ru/wikis/tags",
    "uk/wikis/submit",
    "uk/wikis/guidelines",
    "uk/wikis/tags",
    "tr/wikis/submit",
    "tr/wikis/guidelines",
    "tr/wikis/tags",
    "de/wikis/submit",
    "de/wikis/guidelines",
    "de/wikis/tags",
  ];
  
  const sortedItems = sidebar?.items
    .filter((item) => !excludedPermalinks.includes(item.permalink))
    .sort((a, b) => a.title.localeCompare(b.title));
  const [filteredItems, setFilteredItems] = useState(sortedItems);

  const capitalizeFirstChar = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = sortedItems.filter((item) =>
      item.title.toLowerCase().includes(query)
    );
    setFilteredItems(filtered);
    setSearchQuery(query);
  };

  return (
    <ul className="menu__list">
      <div className="menu__title">Introduction</div>
      <li key="/wikis/guidelines" className="menu__list-item">
        <Link
          isNavLink
          to="/wikis/guidelines"
          className="menu__link"
          activeClassName="menu__link--active"
        >
          Wiki Guidelines
        </Link>
      </li>
      <li key="/wikis/submit" className="menu__list-item">
        <Link
          isNavLink
          to="/wikis/submit"
          className="menu__link"
          activeClassName="menu__link--active"
        >
          Submit Wiki
        </Link>
      </li>
      <li key="/wikis/tags" className="menu__list-item">
        <Link
          isNavLink
          to="/wikis/tags"
          className="menu__link"
          activeClassName="menu__link--active"
        >
          Tags
        </Link>
      </li>
      <div
        className="menu__title"
        style={{ marginTop: "25px", marginBottom: "15px" }}
      >
        Wikis
      </div>
      <div className={styles.searchContainer}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search Wikis..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      {filteredItems.map((item) => (
        <li key={item.permalink} className="menu__list-item">
          <Link
            isNavLink
            to={item.permalink}
            className="menu__link"
            activeClassName="menu__link--active"
          >
            {capitalizeFirstChar(item.title)}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function BlogSidebarMobile({ sidebar, onSearch }) {
  const excludedPermalinks = [
    "/wikis/submit",
    "/wikis/guidelines",
    "/wikis/tags",
  ];
  const sortedItems = sidebar?.items
    .filter((item) => !excludedPermalinks.includes(item.permalink))
    .sort((a, b) => a.title.localeCompare(b.title));

  const capitalizeFirstChar = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <NavbarSecondaryMenuFiller
      component={BlogSidebarMobileSecondaryMenu}
      props={{
        sidebar: {
          ...sidebar,
          items: sortedItems.map((item) => ({
            ...item,
            title: capitalizeFirstChar(item.title),
          })),
        },
      }}
    />
  );
}