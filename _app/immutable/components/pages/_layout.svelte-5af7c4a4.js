import { S as SvelteComponent, i as init, s as safe_not_equal, D as create_slot, k as element, a as space, q as text, E as svg_element, l as claim_element, m as children, h as detach, c as claim_space, r as claim_text, F as claim_svg_element, G as src_url_equal, n as attr, b as insert_hydration, H as append_hydration, u as set_data, I as update_slot_base, J as get_all_dirty_from_scope, K as get_slot_changes, f as transition_in, t as transition_out, L as destroy_each, C as noop } from "../../chunks/index-dc145a1c.js";
const app = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  return child_ctx;
}
function create_each_block(ctx) {
  let div;
  let a;
  let t_value = (
    /*mi*/
    ctx[4].title + ""
  );
  let t;
  return {
    c() {
      div = element("div");
      a = element("a");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      a = claim_element(div_nodes, "A", { href: true });
      var a_nodes = children(a);
      t = claim_text(a_nodes, t_value);
      a_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(
        a,
        "href",
        /*mi*/
        ctx[4].url
      );
      attr(
        div,
        "class",
        /*mi*/
        ctx[4].class
      );
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, a);
      append_hydration(a, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment(ctx) {
  let div21;
  let div12;
  let div5;
  let div4;
  let div3;
  let div1;
  let div0;
  let a0;
  let img0;
  let img0_src_value;
  let t0;
  let div2;
  let t1;
  let div11;
  let div10;
  let div9;
  let div6;
  let t2_value = (
    /*data*/
    ctx[0].config.shortname + ""
  );
  let t2;
  let t3;
  let div7;
  let t4_value = (
    /*data*/
    ctx[0].config.date + ""
  );
  let t4;
  let t5;
  let div8;
  let t6_value = (
    /*data*/
    ctx[0].config.venue + ""
  );
  let t6;
  let t7;
  let t8;
  let div20;
  let div19;
  let div18;
  let div14;
  let div13;
  let a1;
  let img1;
  let img1_src_value;
  let t9;
  let div17;
  let div15;
  let a2;
  let svg;
  let path;
  let t10;
  let div16;
  let t11;
  let a3;
  let t12;
  let t13;
  let current;
  let each_value = (
    /*menu*/
    ctx[1]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const default_slot_template = (
    /*#slots*/
    ctx[3].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[2],
    null
  );
  return {
    c() {
      div21 = element("div");
      div12 = element("div");
      div5 = element("div");
      div4 = element("div");
      div3 = element("div");
      div1 = element("div");
      div0 = element("div");
      a0 = element("a");
      img0 = element("img");
      t0 = space();
      div2 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t1 = space();
      div11 = element("div");
      div10 = element("div");
      div9 = element("div");
      div6 = element("div");
      t2 = text(t2_value);
      t3 = space();
      div7 = element("div");
      t4 = text(t4_value);
      t5 = space();
      div8 = element("div");
      t6 = text(t6_value);
      t7 = space();
      if (default_slot)
        default_slot.c();
      t8 = space();
      div20 = element("div");
      div19 = element("div");
      div18 = element("div");
      div14 = element("div");
      div13 = element("div");
      a1 = element("a");
      img1 = element("img");
      t9 = space();
      div17 = element("div");
      div15 = element("div");
      a2 = element("a");
      svg = svg_element("svg");
      path = svg_element("path");
      t10 = space();
      div16 = element("div");
      t11 = text("💛 Organized by ");
      a3 = element("a");
      t12 = text("ETHBrno");
      t13 = text(" team");
      this.h();
    },
    l(nodes) {
      div21 = claim_element(nodes, "DIV", { class: true });
      var div21_nodes = children(div21);
      div12 = claim_element(div21_nodes, "DIV", { class: true });
      var div12_nodes = children(div12);
      div5 = claim_element(div12_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      a0 = claim_element(div0_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      img0 = claim_element(a0_nodes, "IMG", { src: true });
      a0_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t0 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div2_nodes);
      }
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      t1 = claim_space(div12_nodes);
      div11 = claim_element(div12_nodes, "DIV", { class: true });
      var div11_nodes = children(div11);
      div10 = claim_element(div11_nodes, "DIV", { class: true });
      var div10_nodes = children(div10);
      div9 = claim_element(div10_nodes, "DIV", { class: true });
      var div9_nodes = children(div9);
      div6 = claim_element(div9_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      t2 = claim_text(div6_nodes, t2_value);
      div6_nodes.forEach(detach);
      t3 = claim_space(div9_nodes);
      div7 = claim_element(div9_nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      t4 = claim_text(div7_nodes, t4_value);
      div7_nodes.forEach(detach);
      t5 = claim_space(div9_nodes);
      div8 = claim_element(div9_nodes, "DIV", { class: true });
      var div8_nodes = children(div8);
      t6 = claim_text(div8_nodes, t6_value);
      div8_nodes.forEach(detach);
      div9_nodes.forEach(detach);
      div10_nodes.forEach(detach);
      div11_nodes.forEach(detach);
      div12_nodes.forEach(detach);
      t7 = claim_space(div21_nodes);
      if (default_slot)
        default_slot.l(div21_nodes);
      t8 = claim_space(div21_nodes);
      div20 = claim_element(div21_nodes, "DIV", { class: true });
      var div20_nodes = children(div20);
      div19 = claim_element(div20_nodes, "DIV", { class: true });
      var div19_nodes = children(div19);
      div18 = claim_element(div19_nodes, "DIV", { class: true });
      var div18_nodes = children(div18);
      div14 = claim_element(div18_nodes, "DIV", { class: true });
      var div14_nodes = children(div14);
      div13 = claim_element(div14_nodes, "DIV", { class: true });
      var div13_nodes = children(div13);
      a1 = claim_element(div13_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      img1 = claim_element(a1_nodes, "IMG", { src: true });
      a1_nodes.forEach(detach);
      div13_nodes.forEach(detach);
      div14_nodes.forEach(detach);
      t9 = claim_space(div18_nodes);
      div17 = claim_element(div18_nodes, "DIV", { class: true });
      var div17_nodes = children(div17);
      div15 = claim_element(div17_nodes, "DIV", { class: true });
      var div15_nodes = children(div15);
      a2 = claim_element(div15_nodes, "A", { href: true });
      var a2_nodes = children(a2);
      svg = claim_svg_element(a2_nodes, "svg", {
        width: true,
        height: true,
        viewBox: true,
        fill: true,
        xmlns: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", { d: true, fill: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      a2_nodes.forEach(detach);
      div15_nodes.forEach(detach);
      t10 = claim_space(div17_nodes);
      div16 = claim_element(div17_nodes, "DIV", { class: true });
      var div16_nodes = children(div16);
      t11 = claim_text(div16_nodes, "💛 Organized by ");
      a3 = claim_element(div16_nodes, "A", { href: true, class: true });
      var a3_nodes = children(a3);
      t12 = claim_text(a3_nodes, "ETHBrno");
      a3_nodes.forEach(detach);
      t13 = claim_text(div16_nodes, " team");
      div16_nodes.forEach(detach);
      div17_nodes.forEach(detach);
      div18_nodes.forEach(detach);
      div19_nodes.forEach(detach);
      div20_nodes.forEach(detach);
      div21_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img0.src, img0_src_value = "/web3privacy.png"))
        attr(img0, "src", img0_src_value);
      attr(a0, "href", "https://web3privacy.info");
      attr(div0, "class", "w-20");
      attr(div1, "class", "flex items-center gap-4 grow");
      attr(div2, "class", "flex items-center gap-6 uppercase text-xl");
      attr(div3, "class", "flex");
      attr(div4, "class", "middle-pane-big bg-black");
      attr(div5, "class", "fixed w-full h-18 bg-black pt-6 md:pt-2 pb-2");
      attr(div6, "class", "text-7xl font-bold uppercase mb-8");
      attr(div7, "class", "text-5xl mb-4");
      attr(div8, "class", "text-5xl");
      attr(div9, "class", "mx-auto");
      attr(div10, "class", "w-full h-full flex items-center text-center");
      attr(div11, "class", "w-full h-full");
      attr(div12, "class", "w-full h-screen");
      if (!src_url_equal(img1.src, img1_src_value = "/web3privacy.png"))
        attr(img1, "src", img1_src_value);
      attr(a1, "href", "https://web3privacy.info");
      attr(div13, "class", "w-48");
      attr(div14, "class", "grow");
      attr(path, "d", "M28.0266 3.12733C26.9955 3.62938 25.8872 3.96853 24.7242 4.12112C25.9113 3.34005 26.8231 2.10325 27.2524 0.629411C26.1413 1.35279 24.9107 1.87791 23.6009 2.16092C22.5522 0.934264 21.0578 0.167969 19.4039 0.167969C16.2285 0.167969 13.6538 2.99367 13.6538 6.47907C13.6538 6.97373 13.7047 7.45548 13.8028 7.91738C9.02398 7.6542 4.78719 5.14151 1.95117 1.3231C1.45622 2.25521 1.17259 3.33929 1.17259 4.49596C1.17259 6.68564 2.18771 8.61738 3.73058 9.74913C2.78804 9.71637 1.90142 9.43244 1.1262 8.95977C1.12555 8.98607 1.12555 9.01252 1.12555 9.03913C1.12555 12.0969 3.1076 14.6476 5.73804 15.2278C5.25556 15.3721 4.74758 15.4491 4.2232 15.4491C3.85268 15.4491 3.49255 15.4095 3.14137 15.3359C3.87315 17.8432 5.99658 19.6679 8.51282 19.7187C6.54493 21.4115 4.06569 22.4206 1.37163 22.4206C0.907503 22.4206 0.449828 22.3906 0 22.3323C2.54468 24.1231 5.56708 25.168 8.81424 25.168C19.3905 25.168 25.1742 15.5511 25.1742 7.21076C25.1742 6.93712 25.1686 6.66503 25.1576 6.39416C26.2809 5.50451 27.2556 4.39306 28.0265 3.12733H28.0266Z");
      attr(path, "fill", "white");
      attr(svg, "width", "29");
      attr(svg, "height", "26");
      attr(svg, "viewBox", "0 0 29 26");
      attr(svg, "fill", "none");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(a2, "href", "https://twitter.com/web3privacy");
      attr(div15, "class", "inline-block");
      attr(a3, "href", "https://ethbrno.cz");
      attr(a3, "class", "underline hover:no-underline");
      attr(div16, "class", "mt-4");
      attr(div17, "class", "text-right");
      attr(div18, "class", "flex items-center");
      attr(div19, "class", "middle-pane-medium pt-6 mx-auto");
      attr(div20, "class", "pb-16 bg-black");
      attr(div21, "class", "relative w-full min-h-screen");
    },
    m(target, anchor) {
      insert_hydration(target, div21, anchor);
      append_hydration(div21, div12);
      append_hydration(div12, div5);
      append_hydration(div5, div4);
      append_hydration(div4, div3);
      append_hydration(div3, div1);
      append_hydration(div1, div0);
      append_hydration(div0, a0);
      append_hydration(a0, img0);
      append_hydration(div3, t0);
      append_hydration(div3, div2);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div2, null);
      }
      append_hydration(div12, t1);
      append_hydration(div12, div11);
      append_hydration(div11, div10);
      append_hydration(div10, div9);
      append_hydration(div9, div6);
      append_hydration(div6, t2);
      append_hydration(div9, t3);
      append_hydration(div9, div7);
      append_hydration(div7, t4);
      append_hydration(div9, t5);
      append_hydration(div9, div8);
      append_hydration(div8, t6);
      append_hydration(div21, t7);
      if (default_slot) {
        default_slot.m(div21, null);
      }
      append_hydration(div21, t8);
      append_hydration(div21, div20);
      append_hydration(div20, div19);
      append_hydration(div19, div18);
      append_hydration(div18, div14);
      append_hydration(div14, div13);
      append_hydration(div13, a1);
      append_hydration(a1, img1);
      append_hydration(div18, t9);
      append_hydration(div18, div17);
      append_hydration(div17, div15);
      append_hydration(div15, a2);
      append_hydration(a2, svg);
      append_hydration(svg, path);
      append_hydration(div17, t10);
      append_hydration(div17, div16);
      append_hydration(div16, t11);
      append_hydration(div16, a3);
      append_hydration(a3, t12);
      append_hydration(div16, t13);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & /*menu*/
      2) {
        each_value = /*menu*/
        ctx2[1];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div2, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if ((!current || dirty & /*data*/
      1) && t2_value !== (t2_value = /*data*/
      ctx2[0].config.shortname + ""))
        set_data(t2, t2_value);
      if ((!current || dirty & /*data*/
      1) && t4_value !== (t4_value = /*data*/
      ctx2[0].config.date + ""))
        set_data(t4, t4_value);
      if ((!current || dirty & /*data*/
      1) && t6_value !== (t6_value = /*data*/
      ctx2[0].config.venue + ""))
        set_data(t6, t6_value);
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        4)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[2],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[2]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[2],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div21);
      destroy_each(each_blocks, detaching);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { data } = $$props;
  const menu = [
    { title: "About", url: "#about" },
    { title: "Speakers", url: "#speakers" },
    { title: "Program", url: "#program" },
    { title: "Sponsors", url: "#sponsors" },
    {
      title: "Ticket",
      url: "#ticket",
      class: "button"
    }
  ];
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(0, data = $$props2.data);
    if ("$$scope" in $$props2)
      $$invalidate(2, $$scope = $$props2.$$scope);
  };
  return [data, menu, $$scope, slots];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { data: 0 });
  }
}
export {
  Layout as default
};
