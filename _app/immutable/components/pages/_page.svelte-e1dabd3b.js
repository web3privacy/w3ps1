import { S as SvelteComponent, i as init, s as safe_not_equal, a as space, k as element, q as text, N as head_selector, h as detach, c as claim_space, l as claim_element, m as children, r as claim_text, n as attr, b as insert_hydration, H as append_hydration, C as noop, L as destroy_each, u as set_data } from "../../chunks/index-dc145a1c.js";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  return child_ctx;
}
function create_each_block_1(ctx) {
  let div2;
  let div0;
  let t0_value = (
    /*ti*/
    ctx[4].title + ""
  );
  let t0;
  let t1;
  let div1;
  let t2;
  let t3;
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      t0 = text(t0_value);
      t1 = space();
      div1 = element("div");
      t2 = text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum tincidunt eros eu malesuada. Vivamus in urna at ex dictum pretium quis a erat.");
      t3 = space();
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, t0_value);
      div0_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t2 = claim_text(div1_nodes, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum tincidunt eros eu malesuada. Vivamus in urna at ex dictum pretium quis a erat.");
      div1_nodes.forEach(detach);
      t3 = claim_space(div2_nodes);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "text-black text-2xl uppercase");
      attr(div1, "class", "text-black mt-4 text-lg");
      attr(div2, "class", "bg-white px-4 py-6");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, t0);
      append_hydration(div2, t1);
      append_hydration(div2, div1);
      append_hydration(div1, t2);
      append_hydration(div2, t3);
    },
    p(ctx2, dirty) {
      if (dirty & /*data*/
      1 && t0_value !== (t0_value = /*ti*/
      ctx2[4].title + ""))
        set_data(t0, t0_value);
    },
    d(detaching) {
      if (detaching)
        detach(div2);
    }
  };
}
function create_each_block(ctx) {
  let div1;
  let div0;
  let t0_value = (
    /*tt*/
    ctx[1].title + ""
  );
  let t0;
  let t1;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      t0 = text(t0_value);
      t1 = space();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, t0_value);
      div0_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "text-2xl");
      attr(div1, "class", "border px-3 py-10");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, t0);
      append_hydration(div1, t1);
    },
    p(ctx2, dirty) {
      if (dirty & /*data*/
      1 && t0_value !== (t0_value = /*tt*/
      ctx2[1].title + ""))
        set_data(t0, t0_value);
    },
    d(detaching) {
      if (detaching)
        detach(div1);
    }
  };
}
function create_fragment(ctx) {
  let title_value;
  let t0;
  let div4;
  let div3;
  let div0;
  let t1;
  let t2;
  let div1;
  let t3;
  let t4;
  let div2;
  let t5;
  let div8;
  let div7;
  let div5;
  let t6;
  let t7;
  let div6;
  let t8;
  let div11;
  let div10;
  let div9;
  let t9;
  let t10;
  let div14;
  let div13;
  let div12;
  let t11;
  let t12;
  let div18;
  let div17;
  let div15;
  let t13;
  let t14;
  let div16;
  document.title = title_value = /*data*/
  ctx[0].config.title;
  let each_value_1 = (
    /*data*/
    ctx[0].config.themes
  );
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  let each_value = (
    /*data*/
    ctx[0].config.tickets
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      t0 = space();
      div4 = element("div");
      div3 = element("div");
      div0 = element("div");
      t1 = text("For the first time in the internet’s history, web3 has made meaningful ownership of our own data possible. DeData Salon will bring 18th Century salons up to speed, inviting leaders in the space to discuss what data ownership will mean in the Web3 economy.");
      t2 = space();
      div1 = element("div");
      t3 = text("Key themes");
      t4 = space();
      div2 = element("div");
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      t5 = space();
      div8 = element("div");
      div7 = element("div");
      div5 = element("div");
      t6 = text("Speakers");
      t7 = space();
      div6 = element("div");
      t8 = space();
      div11 = element("div");
      div10 = element("div");
      div9 = element("div");
      t9 = text("Program");
      t10 = space();
      div14 = element("div");
      div13 = element("div");
      div12 = element("div");
      t11 = text("Sponsors");
      t12 = space();
      div18 = element("div");
      div17 = element("div");
      div15 = element("div");
      t13 = text("Ticket");
      t14 = space();
      div16 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-smlx4f", document.head);
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      div4 = claim_element(nodes, "DIV", { class: true, id: true });
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t1 = claim_text(div0_nodes, "For the first time in the internet’s history, web3 has made meaningful ownership of our own data possible. DeData Salon will bring 18th Century salons up to speed, inviting leaders in the space to discuss what data ownership will mean in the Web3 economy.");
      div0_nodes.forEach(detach);
      t2 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t3 = claim_text(div1_nodes, "Key themes");
      div1_nodes.forEach(detach);
      t4 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].l(div2_nodes);
      }
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      t5 = claim_space(nodes);
      div8 = claim_element(nodes, "DIV", { class: true, id: true });
      var div8_nodes = children(div8);
      div7 = claim_element(div8_nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      div5 = claim_element(div7_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      t6 = claim_text(div5_nodes, "Speakers");
      div5_nodes.forEach(detach);
      t7 = claim_space(div7_nodes);
      div6 = claim_element(div7_nodes, "DIV", { class: true });
      children(div6).forEach(detach);
      div7_nodes.forEach(detach);
      div8_nodes.forEach(detach);
      t8 = claim_space(nodes);
      div11 = claim_element(nodes, "DIV", { class: true, id: true });
      var div11_nodes = children(div11);
      div10 = claim_element(div11_nodes, "DIV", { class: true });
      var div10_nodes = children(div10);
      div9 = claim_element(div10_nodes, "DIV", { class: true });
      var div9_nodes = children(div9);
      t9 = claim_text(div9_nodes, "Program");
      div9_nodes.forEach(detach);
      div10_nodes.forEach(detach);
      div11_nodes.forEach(detach);
      t10 = claim_space(nodes);
      div14 = claim_element(nodes, "DIV", { class: true, id: true });
      var div14_nodes = children(div14);
      div13 = claim_element(div14_nodes, "DIV", { class: true });
      var div13_nodes = children(div13);
      div12 = claim_element(div13_nodes, "DIV", { class: true });
      var div12_nodes = children(div12);
      t11 = claim_text(div12_nodes, "Sponsors");
      div12_nodes.forEach(detach);
      div13_nodes.forEach(detach);
      div14_nodes.forEach(detach);
      t12 = claim_space(nodes);
      div18 = claim_element(nodes, "DIV", { class: true, id: true });
      var div18_nodes = children(div18);
      div17 = claim_element(div18_nodes, "DIV", { class: true });
      var div17_nodes = children(div17);
      div15 = claim_element(div17_nodes, "DIV", { class: true });
      var div15_nodes = children(div15);
      t13 = claim_text(div15_nodes, "Ticket");
      div15_nodes.forEach(detach);
      t14 = claim_space(div17_nodes);
      div16 = claim_element(div17_nodes, "DIV", { class: true });
      var div16_nodes = children(div16);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div16_nodes);
      }
      div16_nodes.forEach(detach);
      div17_nodes.forEach(detach);
      div18_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "py-32 w-1/2 mx-auto");
      attr(div1, "class", "section-header");
      attr(div2, "class", "grid grid-cols-3 gap-10");
      attr(div3, "class", "middle-pane-medium pb-20 text-xl text-center mx-auto");
      attr(div4, "class", "bg-black");
      attr(div4, "id", "about");
      attr(div5, "class", "section-header");
      attr(div6, "class", "h-screen");
      attr(div7, "class", "middle-pane-medium pt-20 text-xl text-center mx-auto");
      attr(div8, "class", "");
      attr(div8, "id", "speakers");
      attr(div9, "class", "section-header");
      attr(div10, "class", "middle-pane-medium pt-20 text-xl text-center mx-auto");
      attr(div11, "class", "");
      attr(div11, "id", "program");
      attr(div12, "class", "section-header");
      attr(div13, "class", "middle-pane-medium pt-20 text-xl text-center mx-auto");
      attr(div14, "class", "");
      attr(div14, "id", "sponsors");
      attr(div15, "class", "section-header");
      attr(div16, "class", "grid grid-cols-2 mb-48 gap-10 w-2/3 mx-auto");
      attr(div17, "class", "middle-pane-medium pt-20 text-xl text-center mx-auto");
      attr(div18, "class", "");
      attr(div18, "id", "ticket");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div4, anchor);
      append_hydration(div4, div3);
      append_hydration(div3, div0);
      append_hydration(div0, t1);
      append_hydration(div3, t2);
      append_hydration(div3, div1);
      append_hydration(div1, t3);
      append_hydration(div3, t4);
      append_hydration(div3, div2);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].m(div2, null);
      }
      insert_hydration(target, t5, anchor);
      insert_hydration(target, div8, anchor);
      append_hydration(div8, div7);
      append_hydration(div7, div5);
      append_hydration(div5, t6);
      append_hydration(div7, t7);
      append_hydration(div7, div6);
      insert_hydration(target, t8, anchor);
      insert_hydration(target, div11, anchor);
      append_hydration(div11, div10);
      append_hydration(div10, div9);
      append_hydration(div9, t9);
      insert_hydration(target, t10, anchor);
      insert_hydration(target, div14, anchor);
      append_hydration(div14, div13);
      append_hydration(div13, div12);
      append_hydration(div12, t11);
      insert_hydration(target, t12, anchor);
      insert_hydration(target, div18, anchor);
      append_hydration(div18, div17);
      append_hydration(div17, div15);
      append_hydration(div15, t13);
      append_hydration(div17, t14);
      append_hydration(div17, div16);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div16, null);
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*data*/
      1 && title_value !== (title_value = /*data*/
      ctx2[0].config.title)) {
        document.title = title_value;
      }
      if (dirty & /*data*/
      1) {
        each_value_1 = /*data*/
        ctx2[0].config.themes;
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
          } else {
            each_blocks_1[i] = create_each_block_1(child_ctx);
            each_blocks_1[i].c();
            each_blocks_1[i].m(div2, null);
          }
        }
        for (; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].d(1);
        }
        each_blocks_1.length = each_value_1.length;
      }
      if (dirty & /*data*/
      1) {
        each_value = /*data*/
        ctx2[0].config.tickets;
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div16, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div4);
      destroy_each(each_blocks_1, detaching);
      if (detaching)
        detach(t5);
      if (detaching)
        detach(div8);
      if (detaching)
        detach(t8);
      if (detaching)
        detach(div11);
      if (detaching)
        detach(t10);
      if (detaching)
        detach(div14);
      if (detaching)
        detach(t12);
      if (detaching)
        detach(div18);
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { data } = $$props;
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(0, data = $$props2.data);
  };
  return [data];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { data: 0 });
  }
}
export {
  Page as default
};
