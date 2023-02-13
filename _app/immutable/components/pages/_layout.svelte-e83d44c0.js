import { S as SvelteComponent, i as init, s as safe_not_equal, D as create_slot, k as element, a as space, q as text, E as svg_element, x as create_component, l as claim_element, m as children, h as detach, c as claim_space, r as claim_text, F as claim_svg_element, y as claim_component, G as src_url_equal, n as attr, b as insert_hydration, H as append_hydration, z as mount_component, I as listen, u as set_data, J as update_slot_base, K as get_all_dirty_from_scope, L as get_slot_changes, f as transition_in, t as transition_out, d as check_outros, M as destroy_each, A as destroy_component, C as noop, g as group_outros } from "../../chunks/index-858fda85.js";
import { S as SvelteMarkdown } from "../../chunks/SvelteMarkdown-6743e4fc.js";
const app = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[7] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[7] = list[i];
  return child_ctx;
}
function create_each_block_1(ctx) {
  let div;
  let a;
  let t_value = (
    /*mi*/
    ctx[7].title + ""
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
      a = claim_element(div_nodes, "A", { class: true, href: true });
      var a_nodes = children(a);
      t = claim_text(a_nodes, t_value);
      a_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(
        a,
        "class",
        /*mi*/
        ctx[7].class ? (
          /*mi*/
          ctx[7].class
        ) : "hover:underline"
      );
      attr(
        a,
        "href",
        /*mi*/
        ctx[7].url
      );
      attr(div, "class", "hidden md:block");
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
function create_if_block_1(ctx) {
  let div;
  let each_value = (
    /*menu*/
    ctx[2]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
      }
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "w-full md:hidden p-4");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*menu, navbar*/
      6) {
        each_value = /*menu*/
        ctx2[2];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_each_block(ctx) {
  let div;
  let a;
  let button;
  let t0_value = (
    /*mi*/
    ctx[7].title + ""
  );
  let t0;
  let t1;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      a = element("a");
      button = element("button");
      t0 = text(t0_value);
      t1 = space();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      a = claim_element(div_nodes, "A", { href: true });
      var a_nodes = children(a);
      button = claim_element(a_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t0 = claim_text(button_nodes, t0_value);
      button_nodes.forEach(detach);
      a_nodes.forEach(detach);
      t1 = claim_space(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(
        button,
        "class",
        /*mi*/
        ctx[7].class + " uppercase text-xl"
      );
      attr(
        a,
        "href",
        /*mi*/
        ctx[7].url
      );
      attr(div, "class", "my-3 mx-4");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, a);
      append_hydration(a, button);
      append_hydration(button, t0);
      append_hydration(div, t1);
      if (!mounted) {
        dispose = listen(
          a,
          "click",
          /*click_handler_1*/
          ctx[6]
        );
        mounted = true;
      }
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block(ctx) {
  let div;
  let sveltemarkdown;
  let current;
  sveltemarkdown = new SvelteMarkdown({
    props: { source: (
      /*data*/
      ctx[0].config.license
    ) }
  });
  return {
    c() {
      div = element("div");
      create_component(sveltemarkdown.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(sveltemarkdown.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "mt-4 text-supermild");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(sveltemarkdown, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const sveltemarkdown_changes = {};
      if (dirty & /*data*/
      1)
        sveltemarkdown_changes.source = /*data*/
        ctx2[0].config.license;
      sveltemarkdown.$set(sveltemarkdown_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(sveltemarkdown.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(sveltemarkdown.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(sveltemarkdown);
    }
  };
}
function create_fragment(ctx) {
  let div20;
  let div5;
  let div4;
  let div3;
  let div1;
  let div0;
  let a0;
  let img0;
  let img0_src_value;
  let img0_alt_value;
  let a0_href_value;
  let t0;
  let div2;
  let button;
  let t1;
  let t2;
  let t3;
  let t4;
  let div12;
  let div11;
  let div10;
  let div6;
  let t5_value = (
    /*data*/
    ctx[0].config.shortname + ""
  );
  let t5;
  let t6;
  let div7;
  let t7_value = (
    /*data*/
    ctx[0].config.date + ""
  );
  let t7;
  let t8;
  let div8;
  let t9_value = (
    /*data*/
    ctx[0].config.venue + ""
  );
  let t9;
  let t10;
  let div9;
  let p0;
  let t11_value = (
    /*data*/
    ctx[0].config.slogan + ""
  );
  let t11;
  let t12;
  let p1;
  let a1;
  let t13_value = (
    /*data*/
    ctx[0].config.aggregator + ""
  );
  let t13;
  let a1_href_value;
  let t14;
  let t15;
  let footer;
  let div19;
  let div18;
  let div14;
  let div13;
  let a2;
  let img1;
  let img1_src_value;
  let img1_alt_value;
  let a2_href_value;
  let t16;
  let div17;
  let div15;
  let a3;
  let svg;
  let path;
  let a3_href_value;
  let t17;
  let a4;
  let t18;
  let t19_value = (
    /*data*/
    ctx[0].config.twitter + ""
  );
  let t19;
  let a4_href_value;
  let t20;
  let div16;
  let sveltemarkdown;
  let t21;
  let current;
  let mounted;
  let dispose;
  let each_value_1 = (
    /*menu*/
    ctx[2]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  let if_block0 = (
    /*navbar*/
    ctx[1] && create_if_block_1(ctx)
  );
  const default_slot_template = (
    /*#slots*/
    ctx[4].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[3],
    null
  );
  sveltemarkdown = new SvelteMarkdown({
    props: { source: (
      /*data*/
      ctx[0].config.authors
    ) }
  });
  let if_block1 = (
    /*data*/
    ctx[0].config.license && create_if_block(ctx)
  );
  return {
    c() {
      div20 = element("div");
      div5 = element("div");
      div4 = element("div");
      div3 = element("div");
      div1 = element("div");
      div0 = element("div");
      a0 = element("a");
      img0 = element("img");
      t0 = space();
      div2 = element("div");
      button = element("button");
      t1 = text("☰");
      t2 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t3 = space();
      if (if_block0)
        if_block0.c();
      t4 = space();
      div12 = element("div");
      div11 = element("div");
      div10 = element("div");
      div6 = element("div");
      t5 = text(t5_value);
      t6 = space();
      div7 = element("div");
      t7 = text(t7_value);
      t8 = space();
      div8 = element("div");
      t9 = text(t9_value);
      t10 = space();
      div9 = element("div");
      p0 = element("p");
      t11 = text(t11_value);
      t12 = space();
      p1 = element("p");
      a1 = element("a");
      t13 = text(t13_value);
      t14 = space();
      if (default_slot)
        default_slot.c();
      t15 = space();
      footer = element("footer");
      div19 = element("div");
      div18 = element("div");
      div14 = element("div");
      div13 = element("div");
      a2 = element("a");
      img1 = element("img");
      t16 = space();
      div17 = element("div");
      div15 = element("div");
      a3 = element("a");
      svg = svg_element("svg");
      path = svg_element("path");
      t17 = space();
      a4 = element("a");
      t18 = text("@");
      t19 = text(t19_value);
      t20 = space();
      div16 = element("div");
      create_component(sveltemarkdown.$$.fragment);
      t21 = space();
      if (if_block1)
        if_block1.c();
      this.h();
    },
    l(nodes) {
      div20 = claim_element(nodes, "DIV", { class: true });
      var div20_nodes = children(div20);
      div5 = claim_element(div20_nodes, "DIV", { class: true });
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
      img0 = claim_element(a0_nodes, "IMG", { src: true, alt: true });
      a0_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t0 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      button = claim_element(div2_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t1 = claim_text(button_nodes, "☰");
      button_nodes.forEach(detach);
      t2 = claim_space(div2_nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div2_nodes);
      }
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      t3 = claim_space(div5_nodes);
      if (if_block0)
        if_block0.l(div5_nodes);
      div5_nodes.forEach(detach);
      t4 = claim_space(div20_nodes);
      div12 = claim_element(div20_nodes, "DIV", { class: true });
      var div12_nodes = children(div12);
      div11 = claim_element(div12_nodes, "DIV", { class: true });
      var div11_nodes = children(div11);
      div10 = claim_element(div11_nodes, "DIV", { class: true });
      var div10_nodes = children(div10);
      div6 = claim_element(div10_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      t5 = claim_text(div6_nodes, t5_value);
      div6_nodes.forEach(detach);
      t6 = claim_space(div10_nodes);
      div7 = claim_element(div10_nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      t7 = claim_text(div7_nodes, t7_value);
      div7_nodes.forEach(detach);
      t8 = claim_space(div10_nodes);
      div8 = claim_element(div10_nodes, "DIV", { class: true });
      var div8_nodes = children(div8);
      t9 = claim_text(div8_nodes, t9_value);
      div8_nodes.forEach(detach);
      t10 = claim_space(div10_nodes);
      div9 = claim_element(div10_nodes, "DIV", { class: true });
      var div9_nodes = children(div9);
      p0 = claim_element(div9_nodes, "P", {});
      var p0_nodes = children(p0);
      t11 = claim_text(p0_nodes, t11_value);
      p0_nodes.forEach(detach);
      t12 = claim_space(div9_nodes);
      p1 = claim_element(div9_nodes, "P", {});
      var p1_nodes = children(p1);
      a1 = claim_element(p1_nodes, "A", { href: true, target: true, class: true });
      var a1_nodes = children(a1);
      t13 = claim_text(a1_nodes, t13_value);
      a1_nodes.forEach(detach);
      p1_nodes.forEach(detach);
      div9_nodes.forEach(detach);
      div10_nodes.forEach(detach);
      div11_nodes.forEach(detach);
      div12_nodes.forEach(detach);
      t14 = claim_space(div20_nodes);
      if (default_slot)
        default_slot.l(div20_nodes);
      t15 = claim_space(div20_nodes);
      footer = claim_element(div20_nodes, "FOOTER", { class: true });
      var footer_nodes = children(footer);
      div19 = claim_element(footer_nodes, "DIV", { class: true });
      var div19_nodes = children(div19);
      div18 = claim_element(div19_nodes, "DIV", { class: true });
      var div18_nodes = children(div18);
      div14 = claim_element(div18_nodes, "DIV", { class: true });
      var div14_nodes = children(div14);
      div13 = claim_element(div14_nodes, "DIV", { class: true });
      var div13_nodes = children(div13);
      a2 = claim_element(div13_nodes, "A", { href: true });
      var a2_nodes = children(a2);
      img1 = claim_element(a2_nodes, "IMG", { src: true, alt: true });
      a2_nodes.forEach(detach);
      div13_nodes.forEach(detach);
      div14_nodes.forEach(detach);
      t16 = claim_space(div18_nodes);
      div17 = claim_element(div18_nodes, "DIV", { class: true });
      var div17_nodes = children(div17);
      div15 = claim_element(div17_nodes, "DIV", { class: true });
      var div15_nodes = children(div15);
      a3 = claim_element(div15_nodes, "A", { class: true, href: true });
      var a3_nodes = children(a3);
      svg = claim_svg_element(a3_nodes, "svg", { viewBox: true, fill: true, xmlns: true });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", { d: true, fill: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      a3_nodes.forEach(detach);
      t17 = claim_space(div15_nodes);
      a4 = claim_element(div15_nodes, "A", { href: true, class: true });
      var a4_nodes = children(a4);
      t18 = claim_text(a4_nodes, "@");
      t19 = claim_text(a4_nodes, t19_value);
      a4_nodes.forEach(detach);
      div15_nodes.forEach(detach);
      t20 = claim_space(div17_nodes);
      div16 = claim_element(div17_nodes, "DIV", { class: true });
      var div16_nodes = children(div16);
      claim_component(sveltemarkdown.$$.fragment, div16_nodes);
      div16_nodes.forEach(detach);
      t21 = claim_space(div17_nodes);
      if (if_block1)
        if_block1.l(div17_nodes);
      div17_nodes.forEach(detach);
      div18_nodes.forEach(detach);
      div19_nodes.forEach(detach);
      footer_nodes.forEach(detach);
      div20_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img0.src, img0_src_value = /*data*/
      ctx[0].config.logo))
        attr(img0, "src", img0_src_value);
      attr(img0, "alt", img0_alt_value = /*data*/
      ctx[0].config.parent);
      attr(a0, "href", a0_href_value = /*data*/
      ctx[0].config.parentUrl);
      attr(div0, "class", "w-16 py-2");
      attr(div1, "class", "flex items-center gap-4 grow");
      attr(button, "class", "md:hidden text-3xl");
      attr(div2, "class", "flex items-center gap-6 uppercase text-xl");
      attr(div3, "class", "flex");
      attr(div4, "class", "middle-pane-big bg-black");
      attr(div5, "class", "fixed w-full h-18 bg-black pt-2 pb-2 z-40");
      attr(div6, "class", "text-5xl md:text-8xl font-bold uppercase mb-4 md:mb-8");
      attr(div7, "class", "text-3xl md:text-5xl md:mb-4");
      attr(div8, "class", "text-3xl md:text-5xl uppercase");
      attr(a1, "href", a1_href_value = /*data*/
      ctx[0].config.aggregatorUrl);
      attr(a1, "target", "_blank");
      attr(a1, "class", "underline hover:no-underline external external-mild");
      attr(div9, "class", "mt-8 text-lg text-mild mx-4");
      attr(div10, "class", "mx-auto px-4");
      attr(div11, "class", "w-full h-full flex items-center text-center");
      attr(div12, "class", "w-full h-screen");
      if (!src_url_equal(img1.src, img1_src_value = /*data*/
      ctx[0].config.logo))
        attr(img1, "src", img1_src_value);
      attr(img1, "alt", img1_alt_value = /*data*/
      ctx[0].config.parent);
      attr(a2, "href", a2_href_value = /*data*/
      ctx[0].config.parentUrl);
      attr(div13, "class", "w-32 sm:w-40");
      attr(div14, "class", "grow");
      attr(path, "d", "M28.0266 3.12733C26.9955 3.62938 25.8872 3.96853 24.7242 4.12112C25.9113 3.34005 26.8231 2.10325 27.2524 0.629411C26.1413 1.35279 24.9107 1.87791 23.6009 2.16092C22.5522 0.934264 21.0578 0.167969 19.4039 0.167969C16.2285 0.167969 13.6538 2.99367 13.6538 6.47907C13.6538 6.97373 13.7047 7.45548 13.8028 7.91738C9.02398 7.6542 4.78719 5.14151 1.95117 1.3231C1.45622 2.25521 1.17259 3.33929 1.17259 4.49596C1.17259 6.68564 2.18771 8.61738 3.73058 9.74913C2.78804 9.71637 1.90142 9.43244 1.1262 8.95977C1.12555 8.98607 1.12555 9.01252 1.12555 9.03913C1.12555 12.0969 3.1076 14.6476 5.73804 15.2278C5.25556 15.3721 4.74758 15.4491 4.2232 15.4491C3.85268 15.4491 3.49255 15.4095 3.14137 15.3359C3.87315 17.8432 5.99658 19.6679 8.51282 19.7187C6.54493 21.4115 4.06569 22.4206 1.37163 22.4206C0.907503 22.4206 0.449828 22.3906 0 22.3323C2.54468 24.1231 5.56708 25.168 8.81424 25.168C19.3905 25.168 25.1742 15.5511 25.1742 7.21076C25.1742 6.93712 25.1686 6.66503 25.1576 6.39416C26.2809 5.50451 27.2556 4.39306 28.0265 3.12733H28.0266Z");
      attr(path, "fill", "white");
      attr(svg, "viewBox", "0 0 29 26");
      attr(svg, "fill", "none");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(a3, "class", "inline-block w-5 mr-1");
      attr(a3, "href", a3_href_value = "https://twitter.com/" + /*data*/
      ctx[0].config.twitter);
      attr(a4, "href", a4_href_value = "https://twitter.com/" + /*data*/
      ctx[0].config.twitter);
      attr(a4, "class", "text-2xl no-underline hover:underline");
      attr(div15, "class", "");
      attr(div16, "class", "mt-4 text-mild");
      attr(div17, "class", "text-right");
      attr(div18, "class", "flex gap-4");
      attr(div19, "class", "middle-pane-big pt-10 mx-auto");
      attr(footer, "class", "pb-16 bg-black");
      attr(div20, "class", "relative w-full min-h-screen text-white");
    },
    m(target, anchor) {
      insert_hydration(target, div20, anchor);
      append_hydration(div20, div5);
      append_hydration(div5, div4);
      append_hydration(div4, div3);
      append_hydration(div3, div1);
      append_hydration(div1, div0);
      append_hydration(div0, a0);
      append_hydration(a0, img0);
      append_hydration(div3, t0);
      append_hydration(div3, div2);
      append_hydration(div2, button);
      append_hydration(button, t1);
      append_hydration(div2, t2);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div2, null);
      }
      append_hydration(div5, t3);
      if (if_block0)
        if_block0.m(div5, null);
      append_hydration(div20, t4);
      append_hydration(div20, div12);
      append_hydration(div12, div11);
      append_hydration(div11, div10);
      append_hydration(div10, div6);
      append_hydration(div6, t5);
      append_hydration(div10, t6);
      append_hydration(div10, div7);
      append_hydration(div7, t7);
      append_hydration(div10, t8);
      append_hydration(div10, div8);
      append_hydration(div8, t9);
      append_hydration(div10, t10);
      append_hydration(div10, div9);
      append_hydration(div9, p0);
      append_hydration(p0, t11);
      append_hydration(div9, t12);
      append_hydration(div9, p1);
      append_hydration(p1, a1);
      append_hydration(a1, t13);
      append_hydration(div20, t14);
      if (default_slot) {
        default_slot.m(div20, null);
      }
      append_hydration(div20, t15);
      append_hydration(div20, footer);
      append_hydration(footer, div19);
      append_hydration(div19, div18);
      append_hydration(div18, div14);
      append_hydration(div14, div13);
      append_hydration(div13, a2);
      append_hydration(a2, img1);
      append_hydration(div18, t16);
      append_hydration(div18, div17);
      append_hydration(div17, div15);
      append_hydration(div15, a3);
      append_hydration(a3, svg);
      append_hydration(svg, path);
      append_hydration(div15, t17);
      append_hydration(div15, a4);
      append_hydration(a4, t18);
      append_hydration(a4, t19);
      append_hydration(div17, t20);
      append_hydration(div17, div16);
      mount_component(sveltemarkdown, div16, null);
      append_hydration(div17, t21);
      if (if_block1)
        if_block1.m(div17, null);
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[5]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & /*data*/
      1 && !src_url_equal(img0.src, img0_src_value = /*data*/
      ctx2[0].config.logo)) {
        attr(img0, "src", img0_src_value);
      }
      if (!current || dirty & /*data*/
      1 && img0_alt_value !== (img0_alt_value = /*data*/
      ctx2[0].config.parent)) {
        attr(img0, "alt", img0_alt_value);
      }
      if (!current || dirty & /*data*/
      1 && a0_href_value !== (a0_href_value = /*data*/
      ctx2[0].config.parentUrl)) {
        attr(a0, "href", a0_href_value);
      }
      if (dirty & /*menu*/
      4) {
        each_value_1 = /*menu*/
        ctx2[2];
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div2, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_1.length;
      }
      if (
        /*navbar*/
        ctx2[1]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_1(ctx2);
          if_block0.c();
          if_block0.m(div5, null);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if ((!current || dirty & /*data*/
      1) && t5_value !== (t5_value = /*data*/
      ctx2[0].config.shortname + ""))
        set_data(t5, t5_value);
      if ((!current || dirty & /*data*/
      1) && t7_value !== (t7_value = /*data*/
      ctx2[0].config.date + ""))
        set_data(t7, t7_value);
      if ((!current || dirty & /*data*/
      1) && t9_value !== (t9_value = /*data*/
      ctx2[0].config.venue + ""))
        set_data(t9, t9_value);
      if ((!current || dirty & /*data*/
      1) && t11_value !== (t11_value = /*data*/
      ctx2[0].config.slogan + ""))
        set_data(t11, t11_value);
      if ((!current || dirty & /*data*/
      1) && t13_value !== (t13_value = /*data*/
      ctx2[0].config.aggregator + ""))
        set_data(t13, t13_value);
      if (!current || dirty & /*data*/
      1 && a1_href_value !== (a1_href_value = /*data*/
      ctx2[0].config.aggregatorUrl)) {
        attr(a1, "href", a1_href_value);
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        8)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[3],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[3]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[3],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*data*/
      1 && !src_url_equal(img1.src, img1_src_value = /*data*/
      ctx2[0].config.logo)) {
        attr(img1, "src", img1_src_value);
      }
      if (!current || dirty & /*data*/
      1 && img1_alt_value !== (img1_alt_value = /*data*/
      ctx2[0].config.parent)) {
        attr(img1, "alt", img1_alt_value);
      }
      if (!current || dirty & /*data*/
      1 && a2_href_value !== (a2_href_value = /*data*/
      ctx2[0].config.parentUrl)) {
        attr(a2, "href", a2_href_value);
      }
      if (!current || dirty & /*data*/
      1 && a3_href_value !== (a3_href_value = "https://twitter.com/" + /*data*/
      ctx2[0].config.twitter)) {
        attr(a3, "href", a3_href_value);
      }
      if ((!current || dirty & /*data*/
      1) && t19_value !== (t19_value = /*data*/
      ctx2[0].config.twitter + ""))
        set_data(t19, t19_value);
      if (!current || dirty & /*data*/
      1 && a4_href_value !== (a4_href_value = "https://twitter.com/" + /*data*/
      ctx2[0].config.twitter)) {
        attr(a4, "href", a4_href_value);
      }
      const sveltemarkdown_changes = {};
      if (dirty & /*data*/
      1)
        sveltemarkdown_changes.source = /*data*/
        ctx2[0].config.authors;
      sveltemarkdown.$set(sveltemarkdown_changes);
      if (
        /*data*/
        ctx2[0].config.license
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*data*/
          1) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div17, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      transition_in(sveltemarkdown.$$.fragment, local);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      transition_out(sveltemarkdown.$$.fragment, local);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div20);
      destroy_each(each_blocks, detaching);
      if (if_block0)
        if_block0.d();
      if (default_slot)
        default_slot.d(detaching);
      destroy_component(sveltemarkdown);
      if (if_block1)
        if_block1.d();
      mounted = false;
      dispose();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { data } = $$props;
  let navbar = false;
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
  const click_handler = () => $$invalidate(1, navbar = !navbar);
  const click_handler_1 = () => $$invalidate(1, navbar = false);
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(0, data = $$props2.data);
    if ("$$scope" in $$props2)
      $$invalidate(3, $$scope = $$props2.$$scope);
  };
  return [data, navbar, menu, $$scope, slots, click_handler, click_handler_1];
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
