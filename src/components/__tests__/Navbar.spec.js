import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Navbar from "../Navbar.vue";

describe("Navbar", () => {
  it("renders a nav element", () => {
    const wrapper = mount(Navbar);
    expect(wrapper.find("nav").exists()).toBe(true);
  });

  it("renders navigation links", () => {
    const links = [
      { text: "Blog", href: "/blog" },
      { text: "Books", href: "/books" },
      { text: "CV", href: "/cv" },
    ];
    const wrapper = mount(Navbar, { props: { links } });
    links.forEach((link) => {
      expect(wrapper.text()).toContain(link.text);
      expect(wrapper.html()).toContain(`href="${link.href}"`);
    });
  });
});
