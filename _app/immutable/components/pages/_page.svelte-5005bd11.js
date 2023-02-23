import { S as SvelteComponent, i as init, s as safe_not_equal, e as empty, b as insert_hydration, f as transition_in, g as group_outros, d as check_outros, t as transition_out, M as destroy_each, h as detach, k as element, a as space, q as text, l as claim_element, m as children, c as claim_space, r as claim_text, G as src_url_equal, n as attr, H as append_hydration, I as listen, u as set_data, x as create_component, y as claim_component, z as mount_component, A as destroy_component, _ as head_selector, N as run_all } from "../../chunks/index-a23f1e07.js";
import { a as animateText, S as SvelteMarkdown, b as animateSection } from "../../chunks/helpers-27ee569e.js";
import { l as client } from "../../chunks/singletons-a9453c75.js";
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[5] = list[i];
  return child_ctx;
}
function create_if_block$1(ctx) {
  let div;
  let sveltemarkdown;
  let current;
  sveltemarkdown = new SvelteMarkdown({
    props: { source: (
      /*item*/
      ctx[5].caption
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
      attr(div, "class", "mt-2 text-base text-supermild");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(sveltemarkdown, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const sveltemarkdown_changes = {};
      if (dirty & /*items*/
      1)
        sveltemarkdown_changes.source = /*item*/
        ctx2[5].caption;
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
function create_each_block$1(ctx) {
  let div3;
  let div0;
  let img;
  let img_src_value;
  let t0;
  let div1;
  let t1_value = (
    /*item*/
    ctx[5].name.toUpperCase() + ""
  );
  let t1;
  let t2;
  let div2;
  let a;
  let t3;
  let t4_value = (
    /*item*/
    ctx[5].twitter + ""
  );
  let t4;
  let a_href_value;
  let t5;
  let t6;
  let div3_class_value;
  let current;
  let mounted;
  let dispose;
  let if_block = (
    /*item*/
    ctx[5].caption && create_if_block$1(ctx)
  );
  return {
    c() {
      div3 = element("div");
      div0 = element("div");
      img = element("img");
      t0 = space();
      div1 = element("div");
      t1 = text(t1_value);
      t2 = space();
      div2 = element("div");
      a = element("a");
      t3 = text("@");
      t4 = text(t4_value);
      t5 = space();
      if (if_block)
        if_block.c();
      t6 = space();
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", {});
      var div0_nodes = children(div0);
      img = claim_element(div0_nodes, "IMG", { src: true, class: true });
      div0_nodes.forEach(detach);
      t0 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t1 = claim_text(div1_nodes, t1_value);
      div1_nodes.forEach(detach);
      t2 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      a = claim_element(div2_nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      t3 = claim_text(a_nodes, "@");
      t4 = claim_text(a_nodes, t4_value);
      a_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      t5 = claim_space(div3_nodes);
      if (if_block)
        if_block.l(div3_nodes);
      t6 = claim_space(div3_nodes);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = "/people/" + /*item*/
      ctx[5].img))
        attr(img, "src", img_src_value);
      attr(img, "class", "grayscale invert aspect-square object-cover w-full");
      attr(div1, "class", "mt-4 speaker-name animate-speaker text-xl");
      attr(a, "href", a_href_value = twitterLink(
        /*item*/
        ctx[5].twitter
      ));
      attr(a, "class", "hover:underline animate-speaker");
      attr(div2, "class", "text-lg text-mild");
      attr(div3, "class", div3_class_value = "hover:bg-white hover:text-black p-2 " + /*size*/
      (ctx[1] === "small" ? "w-2/3 sm:w-48" : "w-2/3 sm:w-64") + " person-item");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div0);
      append_hydration(div0, img);
      append_hydration(div3, t0);
      append_hydration(div3, div1);
      append_hydration(div1, t1);
      append_hydration(div3, t2);
      append_hydration(div3, div2);
      append_hydration(div2, a);
      append_hydration(a, t3);
      append_hydration(a, t4);
      append_hydration(div3, t5);
      if (if_block)
        if_block.m(div3, null);
      append_hydration(div3, t6);
      current = true;
      if (!mounted) {
        dispose = listen(
          div3,
          "mouseenter",
          /*animateSpeaker*/
          ctx[3]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (!current || dirty & /*items*/
      1 && !src_url_equal(img.src, img_src_value = "/people/" + /*item*/
      ctx2[5].img)) {
        attr(img, "src", img_src_value);
      }
      if ((!current || dirty & /*items*/
      1) && t1_value !== (t1_value = /*item*/
      ctx2[5].name.toUpperCase() + ""))
        set_data(t1, t1_value);
      if ((!current || dirty & /*items*/
      1) && t4_value !== (t4_value = /*item*/
      ctx2[5].twitter + ""))
        set_data(t4, t4_value);
      if (!current || dirty & /*items*/
      1 && a_href_value !== (a_href_value = twitterLink(
        /*item*/
        ctx2[5].twitter
      ))) {
        attr(a, "href", a_href_value);
      }
      if (
        /*item*/
        ctx2[5].caption
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*items*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div3, t6);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (!current || dirty & /*size*/
      2 && div3_class_value !== (div3_class_value = "hover:bg-white hover:text-black p-2 " + /*size*/
      (ctx2[1] === "small" ? "w-2/3 sm:w-48" : "w-2/3 sm:w-64") + " person-item")) {
        attr(div3, "class", div3_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      if (if_block)
        if_block.d();
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$1(ctx) {
  let each_1_anchor;
  let current;
  let each_value = (
    /*items*/
    ctx[0].map(
      /*getPerson*/
      ctx[2]
    )
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & /*size, animateSpeaker, items, getPerson, twitterLink*/
      15) {
        each_value = /*items*/
        ctx2[0].map(
          /*getPerson*/
          ctx2[2]
        );
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function twitterLink(handle) {
  return `https://twitter.com/${handle}`;
}
function instance$1($$self, $$props, $$invalidate) {
  let { items } = $$props;
  let { people } = $$props;
  let { size = "normal" } = $$props;
  function getPerson(id) {
    return people.find((p) => p.id === id);
  }
  function animateSpeaker(el) {
    for (const e of el.target.getElementsByClassName("animate-speaker")) {
      animateText({ target: e });
    }
  }
  $$self.$$set = ($$props2) => {
    if ("items" in $$props2)
      $$invalidate(0, items = $$props2.items);
    if ("people" in $$props2)
      $$invalidate(4, people = $$props2.people);
    if ("size" in $$props2)
      $$invalidate(1, size = $$props2.size);
  };
  return [items, size, getPerson, animateSpeaker, people];
}
class PeopleList extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { items: 0, people: 4, size: 1 });
  }
}
client.disable_scroll_handling;
const goto = client.goto;
client.invalidate;
client.invalidateAll;
client.preload_data;
client.preload_code;
client.before_navigate;
client.after_navigate;
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
}
function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  return child_ctx;
}
function get_each_context_3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[12] = list[i];
  return child_ctx;
}
function get_each_context_4(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[15] = list[i];
  return child_ctx;
}
function get_each_context_5(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  return child_ctx;
}
function create_each_block_5(ctx) {
  let div2;
  let div0;
  let t0_value = (
    /*ti*/
    ctx[9].title.toUpperCase() + ""
  );
  let t0;
  let t1;
  let div1;
  let sveltemarkdown;
  let t2;
  let current;
  let mounted;
  let dispose;
  sveltemarkdown = new SvelteMarkdown({ props: { source: (
    /*ti*/
    ctx[9].desc
  ) } });
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      t0 = text(t0_value);
      t1 = space();
      div1 = element("div");
      create_component(sveltemarkdown.$$.fragment);
      t2 = space();
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
      claim_component(sveltemarkdown.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      t2 = claim_space(div2_nodes);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "text-2xl animate-section");
      attr(div1, "class", "mt-4 text-lg text-mild markdown");
      attr(div2, "class", "bg-[#0d1117] hover:text-black hover:bg-white px-4 py-6 topic-item");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, t0);
      append_hydration(div2, t1);
      append_hydration(div2, div1);
      mount_component(sveltemarkdown, div1, null);
      append_hydration(div2, t2);
      current = true;
      if (!mounted) {
        dispose = listen(div2, "mouseenter", animateSection(35));
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if ((!current || dirty & /*data*/
      1) && t0_value !== (t0_value = /*ti*/
      ctx2[9].title.toUpperCase() + ""))
        set_data(t0, t0_value);
      const sveltemarkdown_changes = {};
      if (dirty & /*data*/
      1)
        sveltemarkdown_changes.source = /*ti*/
        ctx2[9].desc;
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
        detach(div2);
      destroy_component(sveltemarkdown);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_6(ctx) {
  let div;
  let t_value = (
    /*data*/
    ctx[0].config.speakersNote + ""
  );
  let t;
  return {
    c() {
      div = element("div");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      t = claim_text(div_nodes, t_value);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "text-xl text-supermild");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*data*/
      1 && t_value !== (t_value = /*data*/
      ctx2[0].config.speakersNote + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block_5(ctx) {
  let div;
  let t_value = (
    /*data*/
    ctx[0].config.programNote + ""
  );
  let t;
  return {
    c() {
      div = element("div");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      t = claim_text(div_nodes, t_value);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "text-lg text-supermild mb-16");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*data*/
      1 && t_value !== (t_value = /*data*/
      ctx2[0].config.programNote + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block_4(ctx) {
  let div;
  let sveltemarkdown;
  let current;
  sveltemarkdown = new SvelteMarkdown({ props: { source: (
    /*pi*/
    ctx[15].desc
  ) } });
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
      attr(div, "class", "mt-2 text-base description text-mild markdown");
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
        sveltemarkdown_changes.source = /*pi*/
        ctx2[15].desc;
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
function create_each_block_4(ctx) {
  var _a;
  let tr;
  let td0;
  let raw_value = (
    /*pi*/
    ctx[15].time.split("-").map(func_2).join('<div class="xl:inline-block hidden mx-1">-</div>') + ""
  );
  let td0_class_value;
  let t0;
  let td1;
  let div;
  let span;
  let t1_value = (
    /*pi*/
    ctx[15].title + ""
  );
  let t1;
  let span_class_value;
  let t2;
  let t3_value = (
    /*pi*/
    ctx[15].speakers ? "― " + /*pi*/
    ((_a = ctx[15].speakers[0]) == null ? void 0 : _a.name) : ""
  );
  let t3;
  let t4;
  let t5;
  let current;
  let mounted;
  let dispose;
  let if_block = (
    /*pi*/
    ctx[15].desc && create_if_block_4(ctx)
  );
  return {
    c() {
      tr = element("tr");
      td0 = element("td");
      t0 = space();
      td1 = element("td");
      div = element("div");
      span = element("span");
      t1 = text(t1_value);
      t2 = space();
      t3 = text(t3_value);
      t4 = space();
      if (if_block)
        if_block.c();
      t5 = space();
      this.h();
    },
    l(nodes) {
      tr = claim_element(nodes, "TR", { class: true });
      var tr_nodes = children(tr);
      td0 = claim_element(tr_nodes, "TD", { class: true });
      var td0_nodes = children(td0);
      td0_nodes.forEach(detach);
      t0 = claim_space(tr_nodes);
      td1 = claim_element(tr_nodes, "TD", { class: true });
      var td1_nodes = children(td1);
      div = claim_element(td1_nodes, "DIV", { class: true });
      var div_nodes = children(div);
      span = claim_element(div_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t1 = claim_text(span_nodes, t1_value);
      span_nodes.forEach(detach);
      t2 = claim_space(div_nodes);
      t3 = claim_text(div_nodes, t3_value);
      div_nodes.forEach(detach);
      t4 = claim_space(td1_nodes);
      if (if_block)
        if_block.l(td1_nodes);
      td1_nodes.forEach(detach);
      t5 = claim_space(tr_nodes);
      tr_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(td0, "class", td0_class_value = "text-right time xl:whitespace-nowrap sm:w-16 xl:w-36 " + /*pi*/
      (ctx[15].type === "other" ? "text-mild" : ""));
      attr(span, "class", span_class_value = "animate-section " + /*pi*/
      (ctx[15].type === "other" ? "text-mild" : ""));
      attr(div, "class", "text-xl");
      attr(td1, "class", "text-left");
      attr(tr, "class", "");
    },
    m(target, anchor) {
      insert_hydration(target, tr, anchor);
      append_hydration(tr, td0);
      td0.innerHTML = raw_value;
      append_hydration(tr, t0);
      append_hydration(tr, td1);
      append_hydration(td1, div);
      append_hydration(div, span);
      append_hydration(span, t1);
      append_hydration(div, t2);
      append_hydration(div, t3);
      append_hydration(td1, t4);
      if (if_block)
        if_block.m(td1, null);
      append_hydration(tr, t5);
      current = true;
      if (!mounted) {
        dispose = listen(tr, "mouseenter", animateSection(35));
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      var _a2;
      if ((!current || dirty & /*data*/
      1) && raw_value !== (raw_value = /*pi*/
      ctx2[15].time.split("-").map(func_2).join('<div class="xl:inline-block hidden mx-1">-</div>') + ""))
        td0.innerHTML = raw_value;
      if (!current || dirty & /*data*/
      1 && td0_class_value !== (td0_class_value = "text-right time xl:whitespace-nowrap sm:w-16 xl:w-36 " + /*pi*/
      (ctx2[15].type === "other" ? "text-mild" : ""))) {
        attr(td0, "class", td0_class_value);
      }
      if ((!current || dirty & /*data*/
      1) && t1_value !== (t1_value = /*pi*/
      ctx2[15].title + ""))
        set_data(t1, t1_value);
      if (!current || dirty & /*data*/
      1 && span_class_value !== (span_class_value = "animate-section " + /*pi*/
      (ctx2[15].type === "other" ? "text-mild" : ""))) {
        attr(span, "class", span_class_value);
      }
      if ((!current || dirty & /*data*/
      1) && t3_value !== (t3_value = /*pi*/
      ctx2[15].speakers ? "― " + /*pi*/
      ((_a2 = ctx2[15].speakers[0]) == null ? void 0 : _a2.name) : ""))
        set_data(t3, t3_value);
      if (
        /*pi*/
        ctx2[15].desc
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*data*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_4(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(td1, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(tr);
      if (if_block)
        if_block.d();
      mounted = false;
      dispose();
    }
  };
}
function create_each_block_3(ctx) {
  let div1;
  let div0;
  let t0_value = (
    /*stage*/
    ctx[12].name + ""
  );
  let t0;
  let t1;
  let table;
  let thead;
  let tr;
  let th0;
  let t2;
  let t3;
  let th1;
  let t4;
  let t5;
  let tbody;
  let t6;
  let current;
  let each_value_4 = (
    /*stage*/
    ctx[12].program
  );
  let each_blocks = [];
  for (let i = 0; i < each_value_4.length; i += 1) {
    each_blocks[i] = create_each_block_4(get_each_context_4(ctx, each_value_4, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      t0 = text(t0_value);
      t1 = space();
      table = element("table");
      thead = element("thead");
      tr = element("tr");
      th0 = element("th");
      t2 = text("time");
      t3 = space();
      th1 = element("th");
      t4 = text("topic");
      t5 = space();
      tbody = element("tbody");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t6 = space();
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
      table = claim_element(div1_nodes, "TABLE", { class: true });
      var table_nodes = children(table);
      thead = claim_element(table_nodes, "THEAD", {});
      var thead_nodes = children(thead);
      tr = claim_element(thead_nodes, "TR", {});
      var tr_nodes = children(tr);
      th0 = claim_element(tr_nodes, "TH", { class: true });
      var th0_nodes = children(th0);
      t2 = claim_text(th0_nodes, "time");
      th0_nodes.forEach(detach);
      t3 = claim_space(tr_nodes);
      th1 = claim_element(tr_nodes, "TH", { class: true });
      var th1_nodes = children(th1);
      t4 = claim_text(th1_nodes, "topic");
      th1_nodes.forEach(detach);
      tr_nodes.forEach(detach);
      thead_nodes.forEach(detach);
      t5 = claim_space(table_nodes);
      tbody = claim_element(table_nodes, "TBODY", {});
      var tbody_nodes = children(tbody);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(tbody_nodes);
      }
      tbody_nodes.forEach(detach);
      table_nodes.forEach(detach);
      t6 = claim_space(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "text-3xl font-bold mb-4");
      attr(th0, "class", "text-right");
      attr(th1, "class", "text-left");
      attr(table, "class", "table-auto table-custom w-full mx-0 lg:mx-8");
      attr(div1, "class", "w-auto xl:w-1/2 mb-10 xl:mb-0");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, t0);
      append_hydration(div1, t1);
      append_hydration(div1, table);
      append_hydration(table, thead);
      append_hydration(thead, tr);
      append_hydration(tr, th0);
      append_hydration(th0, t2);
      append_hydration(tr, t3);
      append_hydration(tr, th1);
      append_hydration(th1, t4);
      append_hydration(table, t5);
      append_hydration(table, tbody);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(tbody, null);
      }
      append_hydration(div1, t6);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & /*data*/
      1) && t0_value !== (t0_value = /*stage*/
      ctx2[12].name + ""))
        set_data(t0, t0_value);
      if (dirty & /*animateSection, data*/
      1) {
        each_value_4 = /*stage*/
        ctx2[12].program;
        let i;
        for (i = 0; i < each_value_4.length; i += 1) {
          const child_ctx = get_each_context_4(ctx2, each_value_4, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block_4(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(tbody, null);
          }
        }
        group_outros();
        for (i = each_value_4.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value_4.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_each_block_2(ctx) {
  let li;
  let t_value = (
    /*ti*/
    ctx[9] + ""
  );
  let t;
  return {
    c() {
      li = element("li");
      t = text(t_value);
    },
    l(nodes) {
      li = claim_element(nodes, "LI", {});
      var li_nodes = children(li);
      t = claim_text(li_nodes, t_value);
      li_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      append_hydration(li, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*data*/
      1 && t_value !== (t_value = /*ti*/
      ctx2[9] + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(li);
    }
  };
}
function create_if_block_3(ctx) {
  let div;
  let t_value = (
    /*tt*/
    ctx[6].note + ""
  );
  let t;
  return {
    c() {
      div = element("div");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      t = claim_text(div_nodes, t_value);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "mt-10 text-base");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*data*/
      1 && t_value !== (t_value = /*tt*/
      ctx2[6].note + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block_2(ctx) {
  let div;
  let sveltemarkdown;
  let current;
  sveltemarkdown = new SvelteMarkdown({ props: { source: (
    /*tt*/
    ctx[6].hint
  ) } });
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
      attr(div, "class", "mt-10 markdown text-base");
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
        sveltemarkdown_changes.source = /*tt*/
        ctx2[6].hint;
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
function create_each_block_1(ctx) {
  let div2;
  let div0;
  let a0;
  let t0_value = (
    /*tt*/
    ctx[6].title + ""
  );
  let t0;
  let a0_href_value;
  let t1;
  let div1;
  let a1;
  let t2_value = (
    /*tt*/
    ctx[6].price + ""
  );
  let t2;
  let a1_href_value;
  let t3;
  let ul;
  let t4;
  let t5;
  let t6;
  let div2_class_value;
  let current;
  let mounted;
  let dispose;
  let each_value_2 = (
    /*tt*/
    ctx[6].includes
  );
  let each_blocks = [];
  for (let i = 0; i < each_value_2.length; i += 1) {
    each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }
  let if_block0 = (
    /*tt*/
    ctx[6].note && create_if_block_3(ctx)
  );
  let if_block1 = (
    /*tt*/
    ctx[6].hint && create_if_block_2(ctx)
  );
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      a0 = element("a");
      t0 = text(t0_value);
      t1 = space();
      div1 = element("div");
      a1 = element("a");
      t2 = text(t2_value);
      t3 = space();
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t4 = space();
      if (if_block0)
        if_block0.c();
      t5 = space();
      if (if_block1)
        if_block1.c();
      t6 = space();
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      a0 = claim_element(div0_nodes, "A", { href: true, class: true });
      var a0_nodes = children(a0);
      t0 = claim_text(a0_nodes, t0_value);
      a0_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      a1 = claim_element(div1_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t2 = claim_text(a1_nodes, t2_value);
      a1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t3 = claim_space(div2_nodes);
      ul = claim_element(div2_nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(ul_nodes);
      }
      ul_nodes.forEach(detach);
      t4 = claim_space(div2_nodes);
      if (if_block0)
        if_block0.l(div2_nodes);
      t5 = claim_space(div2_nodes);
      if (if_block1)
        if_block1.l(div2_nodes);
      t6 = claim_space(div2_nodes);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", a0_href_value = /*data*/
      ctx[0].config.ticketingUrl);
      attr(a0, "class", "animate-section");
      attr(div0, "class", "text-3xl uppercase");
      attr(a1, "href", a1_href_value = /*data*/
      ctx[0].config.ticketingUrl);
      attr(div1, "class", "text-xl mt-6 font-bold");
      attr(ul, "class", "mt-6 text-lg text-left list-disc px-6");
      attr(div2, "class", div2_class_value = "bg-[#0d1117] hover:border-0 py-10 px-10 hover:text-black hover:bg-white " + /*data*/
      (ctx[0].config.ticketing ? "cursor-pointer" : ""));
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, a0);
      append_hydration(a0, t0);
      append_hydration(div2, t1);
      append_hydration(div2, div1);
      append_hydration(div1, a1);
      append_hydration(a1, t2);
      append_hydration(div2, t3);
      append_hydration(div2, ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
      append_hydration(div2, t4);
      if (if_block0)
        if_block0.m(div2, null);
      append_hydration(div2, t5);
      if (if_block1)
        if_block1.m(div2, null);
      append_hydration(div2, t6);
      current = true;
      if (!mounted) {
        dispose = [
          listen(div2, "mouseenter", animateSection(40)),
          listen(
            div2,
            "click",
            /*click_handler*/
            ctx[2]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if ((!current || dirty & /*data*/
      1) && t0_value !== (t0_value = /*tt*/
      ctx2[6].title + ""))
        set_data(t0, t0_value);
      if (!current || dirty & /*data*/
      1 && a0_href_value !== (a0_href_value = /*data*/
      ctx2[0].config.ticketingUrl)) {
        attr(a0, "href", a0_href_value);
      }
      if ((!current || dirty & /*data*/
      1) && t2_value !== (t2_value = /*tt*/
      ctx2[6].price + ""))
        set_data(t2, t2_value);
      if (!current || dirty & /*data*/
      1 && a1_href_value !== (a1_href_value = /*data*/
      ctx2[0].config.ticketingUrl)) {
        attr(a1, "href", a1_href_value);
      }
      if (dirty & /*data*/
      1) {
        each_value_2 = /*tt*/
        ctx2[6].includes;
        let i;
        for (i = 0; i < each_value_2.length; i += 1) {
          const child_ctx = get_each_context_2(ctx2, each_value_2, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_2(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_2.length;
      }
      if (
        /*tt*/
        ctx2[6].note
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_3(ctx2);
          if_block0.c();
          if_block0.m(div2, t5);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*tt*/
        ctx2[6].hint
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*data*/
          1) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_2(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div2, t6);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (!current || dirty & /*data*/
      1 && div2_class_value !== (div2_class_value = "bg-[#0d1117] hover:border-0 py-10 px-10 hover:text-black hover:bg-white " + /*data*/
      (ctx2[0].config.ticketing ? "cursor-pointer" : ""))) {
        attr(div2, "class", div2_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      destroy_each(each_blocks, detaching);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_1(ctx) {
  let div;
  let a;
  let button;
  let t;
  let a_href_value;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      a = element("a");
      button = element("button");
      t = text("Buy a ticket");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      a = claim_element(div_nodes, "A", { href: true });
      var a_nodes = children(a);
      button = claim_element(a_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t = claim_text(button_nodes, "Buy a ticket");
      button_nodes.forEach(detach);
      a_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "py-2 px-5 bg-white text-black hover:bg-black border border-bg-white hover:text-white");
      attr(a, "href", a_href_value = /*data*/
      ctx[0].config.ticketingUrl);
      attr(div, "class", "mt-10");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, a);
      append_hydration(a, button);
      append_hydration(button, t);
      if (!mounted) {
        dispose = listen(button, "mouseenter", animateText);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*data*/
      1 && a_href_value !== (a_href_value = /*data*/
      ctx2[0].config.ticketingUrl)) {
        attr(a, "href", a_href_value);
      }
    },
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
  let t_value = (
    /*data*/
    ctx[0].config.ticketsNote + ""
  );
  let t;
  return {
    c() {
      div = element("div");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      t = claim_text(div_nodes, t_value);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "mt-8 text-xl");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*data*/
      1 && t_value !== (t_value = /*data*/
      ctx2[0].config.ticketsNote + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_each_block(ctx) {
  let div2;
  let div0;
  let t0_value = (
    /*fi*/
    ctx[3].title + ""
  );
  let t0;
  let t1;
  let div1;
  let sveltemarkdown;
  let t2;
  let current;
  let mounted;
  let dispose;
  sveltemarkdown = new SvelteMarkdown({ props: { source: (
    /*fi*/
    ctx[3].text
  ) } });
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      t0 = text(t0_value);
      t1 = space();
      div1 = element("div");
      create_component(sveltemarkdown.$$.fragment);
      t2 = space();
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
      claim_component(sveltemarkdown.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      t2 = claim_space(div2_nodes);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "text-2xl font-bold mb-6 animate-section");
      attr(div1, "class", "text-lg markdown");
      attr(div2, "class", "py-10 px-4 hover:bg-white hover:text-black");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, t0);
      append_hydration(div2, t1);
      append_hydration(div2, div1);
      mount_component(sveltemarkdown, div1, null);
      append_hydration(div2, t2);
      current = true;
      if (!mounted) {
        dispose = listen(div2, "mouseenter", animateSection(15));
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if ((!current || dirty & /*data*/
      1) && t0_value !== (t0_value = /*fi*/
      ctx2[3].title + ""))
        set_data(t0, t0_value);
      const sveltemarkdown_changes = {};
      if (dirty & /*data*/
      1)
        sveltemarkdown_changes.source = /*fi*/
        ctx2[3].text;
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
        detach(div2);
      destroy_component(sveltemarkdown);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment(ctx) {
  let title_value;
  let meta0;
  let meta0_content_value;
  let meta1;
  let meta2;
  let meta2_content_value;
  let meta3;
  let meta3_content_value;
  let meta4;
  let meta4_content_value;
  let meta5;
  let meta5_content_value;
  let t0;
  let div4;
  let div3;
  let div0;
  let sveltemarkdown;
  let t1;
  let div1;
  let t2;
  let t3;
  let div2;
  let t4;
  let div9;
  let div8;
  let div5;
  let t5;
  let t6;
  let div7;
  let div6;
  let peoplelist0;
  let t7;
  let t8;
  let div14;
  let div13;
  let div10;
  let t9;
  let t10;
  let div12;
  let div11;
  let peoplelist1;
  let t11;
  let div18;
  let div17;
  let div15;
  let t12;
  let t13;
  let t14;
  let div16;
  let t15;
  let div22;
  let div21;
  let div19;
  let t16;
  let t17;
  let div20;
  let a;
  let button;
  let t18;
  let a_href_value;
  let t19;
  let div27;
  let div26;
  let div23;
  let t20;
  let t21;
  let div24;
  let t22_value = (
    /*data*/
    ctx[0].config.ticketsIntro + ""
  );
  let t22;
  let t23;
  let div25;
  let t24;
  let t25;
  let t26;
  let div31;
  let div30;
  let div28;
  let t27;
  let t28;
  let div29;
  let current;
  let mounted;
  let dispose;
  document.title = title_value = /*data*/
  ctx[0].config.title + " | " + /*data*/
  ctx[0].config.date;
  sveltemarkdown = new SvelteMarkdown({
    props: { source: (
      /*data*/
      ctx[0].config.intro
    ) }
  });
  let each_value_5 = (
    /*data*/
    ctx[0].config.themes
  );
  let each_blocks_3 = [];
  for (let i = 0; i < each_value_5.length; i += 1) {
    each_blocks_3[i] = create_each_block_5(get_each_context_5(ctx, each_value_5, i));
  }
  const out = (i) => transition_out(each_blocks_3[i], 1, 1, () => {
    each_blocks_3[i] = null;
  });
  peoplelist0 = new PeopleList({
    props: {
      items: (
        /*data*/
        ctx[0].config.speakers
      ),
      people: (
        /*data*/
        ctx[0].config.people
      )
    }
  });
  let if_block0 = (
    /*data*/
    ctx[0].config.speakersNote && create_if_block_6(ctx)
  );
  peoplelist1 = new PeopleList({
    props: {
      items: (
        /*data*/
        ctx[0].config.hosts
      ),
      people: (
        /*data*/
        ctx[0].config.people
      ),
      size: "small"
    }
  });
  let if_block1 = (
    /*data*/
    ctx[0].config.programNote && create_if_block_5(ctx)
  );
  let each_value_3 = (
    /*data*/
    ctx[0].config.stages.map(
      /*func*/
      ctx[1]
    ).filter(func_1)
  );
  let each_blocks_2 = [];
  for (let i = 0; i < each_value_3.length; i += 1) {
    each_blocks_2[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
  }
  const out_1 = (i) => transition_out(each_blocks_2[i], 1, 1, () => {
    each_blocks_2[i] = null;
  });
  let each_value_1 = (
    /*data*/
    ctx[0].config.tickets
  );
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  const out_2 = (i) => transition_out(each_blocks_1[i], 1, 1, () => {
    each_blocks_1[i] = null;
  });
  let if_block2 = (
    /*data*/
    ctx[0].config.ticketing && create_if_block_1(ctx)
  );
  let if_block3 = (
    /*data*/
    ctx[0].config.ticketsNote && create_if_block(ctx)
  );
  let each_value = (
    /*data*/
    ctx[0].config.faq
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out_3 = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      meta0 = element("meta");
      meta1 = element("meta");
      meta2 = element("meta");
      meta3 = element("meta");
      meta4 = element("meta");
      meta5 = element("meta");
      t0 = space();
      div4 = element("div");
      div3 = element("div");
      div0 = element("div");
      create_component(sveltemarkdown.$$.fragment);
      t1 = space();
      div1 = element("div");
      t2 = text("Key themes");
      t3 = space();
      div2 = element("div");
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        each_blocks_3[i].c();
      }
      t4 = space();
      div9 = element("div");
      div8 = element("div");
      div5 = element("div");
      t5 = text("Speakers");
      t6 = space();
      div7 = element("div");
      div6 = element("div");
      create_component(peoplelist0.$$.fragment);
      t7 = space();
      if (if_block0)
        if_block0.c();
      t8 = space();
      div14 = element("div");
      div13 = element("div");
      div10 = element("div");
      t9 = text("Hosts");
      t10 = space();
      div12 = element("div");
      div11 = element("div");
      create_component(peoplelist1.$$.fragment);
      t11 = space();
      div18 = element("div");
      div17 = element("div");
      div15 = element("div");
      t12 = text("Program");
      t13 = space();
      if (if_block1)
        if_block1.c();
      t14 = space();
      div16 = element("div");
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].c();
      }
      t15 = space();
      div22 = element("div");
      div21 = element("div");
      div19 = element("div");
      t16 = text("Sponsors");
      t17 = space();
      div20 = element("div");
      a = element("a");
      button = element("button");
      t18 = text("Become a Sponsor");
      t19 = space();
      div27 = element("div");
      div26 = element("div");
      div23 = element("div");
      t20 = text("Ticket");
      t21 = space();
      div24 = element("div");
      t22 = text(t22_value);
      t23 = space();
      div25 = element("div");
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      t24 = space();
      if (if_block2)
        if_block2.c();
      t25 = space();
      if (if_block3)
        if_block3.c();
      t26 = space();
      div31 = element("div");
      div30 = element("div");
      div28 = element("div");
      t27 = text("FAQ");
      t28 = space();
      div29 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-1xuttk2", document.head);
      meta0 = claim_element(head_nodes, "META", { name: true, content: true });
      meta1 = claim_element(head_nodes, "META", { name: true, content: true });
      meta2 = claim_element(head_nodes, "META", { name: true, content: true });
      meta3 = claim_element(head_nodes, "META", { name: true, content: true });
      meta4 = claim_element(head_nodes, "META", { name: true, content: true });
      meta5 = claim_element(head_nodes, "META", { name: true, content: true });
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      div4 = claim_element(nodes, "DIV", { class: true, id: true });
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(sveltemarkdown.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t1 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t2 = claim_text(div1_nodes, "Key themes");
      div1_nodes.forEach(detach);
      t3 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        each_blocks_3[i].l(div2_nodes);
      }
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      t4 = claim_space(nodes);
      div9 = claim_element(nodes, "DIV", { class: true, id: true });
      var div9_nodes = children(div9);
      div8 = claim_element(div9_nodes, "DIV", { class: true });
      var div8_nodes = children(div8);
      div5 = claim_element(div8_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      t5 = claim_text(div5_nodes, "Speakers");
      div5_nodes.forEach(detach);
      t6 = claim_space(div8_nodes);
      div7 = claim_element(div8_nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      div6 = claim_element(div7_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      claim_component(peoplelist0.$$.fragment, div6_nodes);
      div6_nodes.forEach(detach);
      div7_nodes.forEach(detach);
      t7 = claim_space(div8_nodes);
      if (if_block0)
        if_block0.l(div8_nodes);
      div8_nodes.forEach(detach);
      div9_nodes.forEach(detach);
      t8 = claim_space(nodes);
      div14 = claim_element(nodes, "DIV", { id: true });
      var div14_nodes = children(div14);
      div13 = claim_element(div14_nodes, "DIV", { class: true });
      var div13_nodes = children(div13);
      div10 = claim_element(div13_nodes, "DIV", { class: true });
      var div10_nodes = children(div10);
      t9 = claim_text(div10_nodes, "Hosts");
      div10_nodes.forEach(detach);
      t10 = claim_space(div13_nodes);
      div12 = claim_element(div13_nodes, "DIV", { class: true });
      var div12_nodes = children(div12);
      div11 = claim_element(div12_nodes, "DIV", { class: true });
      var div11_nodes = children(div11);
      claim_component(peoplelist1.$$.fragment, div11_nodes);
      div11_nodes.forEach(detach);
      div12_nodes.forEach(detach);
      div13_nodes.forEach(detach);
      div14_nodes.forEach(detach);
      t11 = claim_space(nodes);
      div18 = claim_element(nodes, "DIV", { class: true, id: true });
      var div18_nodes = children(div18);
      div17 = claim_element(div18_nodes, "DIV", { class: true });
      var div17_nodes = children(div17);
      div15 = claim_element(div17_nodes, "DIV", { class: true });
      var div15_nodes = children(div15);
      t12 = claim_text(div15_nodes, "Program");
      div15_nodes.forEach(detach);
      t13 = claim_space(div17_nodes);
      if (if_block1)
        if_block1.l(div17_nodes);
      t14 = claim_space(div17_nodes);
      div16 = claim_element(div17_nodes, "DIV", { class: true });
      var div16_nodes = children(div16);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].l(div16_nodes);
      }
      div16_nodes.forEach(detach);
      div17_nodes.forEach(detach);
      div18_nodes.forEach(detach);
      t15 = claim_space(nodes);
      div22 = claim_element(nodes, "DIV", { class: true, id: true });
      var div22_nodes = children(div22);
      div21 = claim_element(div22_nodes, "DIV", { class: true });
      var div21_nodes = children(div21);
      div19 = claim_element(div21_nodes, "DIV", { class: true });
      var div19_nodes = children(div19);
      t16 = claim_text(div19_nodes, "Sponsors");
      div19_nodes.forEach(detach);
      t17 = claim_space(div21_nodes);
      div20 = claim_element(div21_nodes, "DIV", {});
      var div20_nodes = children(div20);
      a = claim_element(div20_nodes, "A", { href: true });
      var a_nodes = children(a);
      button = claim_element(a_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t18 = claim_text(button_nodes, "Become a Sponsor");
      button_nodes.forEach(detach);
      a_nodes.forEach(detach);
      div20_nodes.forEach(detach);
      div21_nodes.forEach(detach);
      div22_nodes.forEach(detach);
      t19 = claim_space(nodes);
      div27 = claim_element(nodes, "DIV", { class: true, id: true });
      var div27_nodes = children(div27);
      div26 = claim_element(div27_nodes, "DIV", { class: true });
      var div26_nodes = children(div26);
      div23 = claim_element(div26_nodes, "DIV", { class: true });
      var div23_nodes = children(div23);
      t20 = claim_text(div23_nodes, "Ticket");
      div23_nodes.forEach(detach);
      t21 = claim_space(div26_nodes);
      div24 = claim_element(div26_nodes, "DIV", { class: true });
      var div24_nodes = children(div24);
      t22 = claim_text(div24_nodes, t22_value);
      div24_nodes.forEach(detach);
      t23 = claim_space(div26_nodes);
      div25 = claim_element(div26_nodes, "DIV", { class: true });
      var div25_nodes = children(div25);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].l(div25_nodes);
      }
      div25_nodes.forEach(detach);
      t24 = claim_space(div26_nodes);
      if (if_block2)
        if_block2.l(div26_nodes);
      t25 = claim_space(div26_nodes);
      if (if_block3)
        if_block3.l(div26_nodes);
      div26_nodes.forEach(detach);
      div27_nodes.forEach(detach);
      t26 = claim_space(nodes);
      div31 = claim_element(nodes, "DIV", { class: true, id: true });
      var div31_nodes = children(div31);
      div30 = claim_element(div31_nodes, "DIV", { class: true });
      var div30_nodes = children(div30);
      div28 = claim_element(div30_nodes, "DIV", { class: true });
      var div28_nodes = children(div28);
      t27 = claim_text(div28_nodes, "FAQ");
      div28_nodes.forEach(detach);
      t28 = claim_space(div30_nodes);
      div29 = claim_element(div30_nodes, "DIV", { class: true });
      var div29_nodes = children(div29);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div29_nodes);
      }
      div29_nodes.forEach(detach);
      div30_nodes.forEach(detach);
      div31_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(meta0, "name", "description");
      attr(meta0, "content", meta0_content_value = /*data*/
      ctx[0].config.desc);
      attr(meta1, "name", "twitter:card");
      attr(meta1, "content", "summary");
      attr(meta2, "name", "twitter:site");
      attr(meta2, "content", meta2_content_value = "@" + /*data*/
      ctx[0].config.twitter);
      attr(meta3, "name", "twitter:title");
      attr(meta3, "content", meta3_content_value = /*data*/
      ctx[0].config.title);
      attr(meta4, "name", "twitter:description");
      attr(meta4, "content", meta4_content_value = /*data*/
      ctx[0].config.desc);
      attr(meta5, "name", "twitter:image");
      attr(meta5, "content", meta5_content_value = "https://" + /*data*/
      ctx[0].config.domain + /*data*/
      ctx[0].config.image);
      attr(div0, "class", "py-16 md:py-32 md:w-2/3 mx-auto markdown multiline");
      attr(div1, "class", "section-header");
      attr(div2, "class", "grid md:grid-cols-3 gap-4 md:gap-10");
      attr(div3, "class", "middle-pane-medium pb-16 text-xl text-center mx-auto");
      attr(div4, "class", "bg-black");
      attr(div4, "id", "about");
      attr(div5, "class", "section-header");
      attr(div6, "class", "pb-12 flex flex-wrap justify-center gap-6");
      attr(div7, "class", "mx-auto");
      attr(div8, "class", "middle-pane-medium pt-16 text-xl text-center mx-auto mb-8");
      attr(div9, "class", "");
      attr(div9, "id", "speakers");
      attr(div10, "class", "section-header");
      attr(div11, "class", "pb-16 flex flex-wrap justify-center gap-6");
      attr(div12, "class", "mx-auto");
      attr(div13, "class", "middle-pane-medium pt-0 text-xl text-center mx-auto");
      attr(div14, "id", "hosts");
      attr(div15, "class", "section-header");
      attr(div16, "class", "program xl:flex gap-10 xl:gap-4");
      attr(div17, "class", "middle-pane-medium pt-16 text-xl text-center mx-auto pb-32");
      attr(div18, "class", "bg-black");
      attr(div18, "id", "program");
      attr(div19, "class", "section-header");
      attr(button, "class", "py-2 px-5 bg-white text-black hover:bg-black border border-bg-white hover:text-white");
      attr(a, "href", a_href_value = /*data*/
      ctx[0].config.sponsorUrl);
      attr(div21, "class", "middle-pane-medium pt-16 text-xl text-center mx-auto pb-32");
      attr(div22, "class", "");
      attr(div22, "id", "sponsors");
      attr(div23, "class", "section-header");
      attr(div24, "class", "mb-8 text-lg text-mild");
      attr(div25, "class", "grid lg:grid-cols-2 gap-10 md:w-2/3 mx-auto");
      attr(div26, "class", "middle-pane-medium pt-16 text-xl text-center mx-auto pb-32");
      attr(div27, "class", "bg-black");
      attr(div27, "id", "ticket");
      attr(div28, "class", "section-header");
      attr(div29, "class", "grid md:grid-cols-2 gap-2 md:gap-10");
      attr(div30, "class", "middle-pane-medium pt-20 text-xl text-center mx-auto");
      attr(div31, "class", "mb-36");
      attr(div31, "id", "faq");
    },
    m(target, anchor) {
      append_hydration(document.head, meta0);
      append_hydration(document.head, meta1);
      append_hydration(document.head, meta2);
      append_hydration(document.head, meta3);
      append_hydration(document.head, meta4);
      append_hydration(document.head, meta5);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div4, anchor);
      append_hydration(div4, div3);
      append_hydration(div3, div0);
      mount_component(sveltemarkdown, div0, null);
      append_hydration(div3, t1);
      append_hydration(div3, div1);
      append_hydration(div1, t2);
      append_hydration(div3, t3);
      append_hydration(div3, div2);
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        each_blocks_3[i].m(div2, null);
      }
      insert_hydration(target, t4, anchor);
      insert_hydration(target, div9, anchor);
      append_hydration(div9, div8);
      append_hydration(div8, div5);
      append_hydration(div5, t5);
      append_hydration(div8, t6);
      append_hydration(div8, div7);
      append_hydration(div7, div6);
      mount_component(peoplelist0, div6, null);
      append_hydration(div8, t7);
      if (if_block0)
        if_block0.m(div8, null);
      insert_hydration(target, t8, anchor);
      insert_hydration(target, div14, anchor);
      append_hydration(div14, div13);
      append_hydration(div13, div10);
      append_hydration(div10, t9);
      append_hydration(div13, t10);
      append_hydration(div13, div12);
      append_hydration(div12, div11);
      mount_component(peoplelist1, div11, null);
      insert_hydration(target, t11, anchor);
      insert_hydration(target, div18, anchor);
      append_hydration(div18, div17);
      append_hydration(div17, div15);
      append_hydration(div15, t12);
      append_hydration(div17, t13);
      if (if_block1)
        if_block1.m(div17, null);
      append_hydration(div17, t14);
      append_hydration(div17, div16);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].m(div16, null);
      }
      insert_hydration(target, t15, anchor);
      insert_hydration(target, div22, anchor);
      append_hydration(div22, div21);
      append_hydration(div21, div19);
      append_hydration(div19, t16);
      append_hydration(div21, t17);
      append_hydration(div21, div20);
      append_hydration(div20, a);
      append_hydration(a, button);
      append_hydration(button, t18);
      insert_hydration(target, t19, anchor);
      insert_hydration(target, div27, anchor);
      append_hydration(div27, div26);
      append_hydration(div26, div23);
      append_hydration(div23, t20);
      append_hydration(div26, t21);
      append_hydration(div26, div24);
      append_hydration(div24, t22);
      append_hydration(div26, t23);
      append_hydration(div26, div25);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].m(div25, null);
      }
      append_hydration(div26, t24);
      if (if_block2)
        if_block2.m(div26, null);
      append_hydration(div26, t25);
      if (if_block3)
        if_block3.m(div26, null);
      insert_hydration(target, t26, anchor);
      insert_hydration(target, div31, anchor);
      append_hydration(div31, div30);
      append_hydration(div30, div28);
      append_hydration(div28, t27);
      append_hydration(div30, t28);
      append_hydration(div30, div29);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div29, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(div1, "mouseenter", animateText),
          listen(div5, "mouseenter", animateText),
          listen(div10, "mouseenter", animateText),
          listen(div15, "mouseenter", animateText),
          listen(div19, "mouseenter", animateText),
          listen(button, "mouseenter", animateText),
          listen(div23, "mouseenter", animateText),
          listen(div28, "mouseenter", animateText)
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & /*data*/
      1) && title_value !== (title_value = /*data*/
      ctx2[0].config.title + " | " + /*data*/
      ctx2[0].config.date)) {
        document.title = title_value;
      }
      if (!current || dirty & /*data*/
      1 && meta0_content_value !== (meta0_content_value = /*data*/
      ctx2[0].config.desc)) {
        attr(meta0, "content", meta0_content_value);
      }
      if (!current || dirty & /*data*/
      1 && meta2_content_value !== (meta2_content_value = "@" + /*data*/
      ctx2[0].config.twitter)) {
        attr(meta2, "content", meta2_content_value);
      }
      if (!current || dirty & /*data*/
      1 && meta3_content_value !== (meta3_content_value = /*data*/
      ctx2[0].config.title)) {
        attr(meta3, "content", meta3_content_value);
      }
      if (!current || dirty & /*data*/
      1 && meta4_content_value !== (meta4_content_value = /*data*/
      ctx2[0].config.desc)) {
        attr(meta4, "content", meta4_content_value);
      }
      if (!current || dirty & /*data*/
      1 && meta5_content_value !== (meta5_content_value = "https://" + /*data*/
      ctx2[0].config.domain + /*data*/
      ctx2[0].config.image)) {
        attr(meta5, "content", meta5_content_value);
      }
      const sveltemarkdown_changes = {};
      if (dirty & /*data*/
      1)
        sveltemarkdown_changes.source = /*data*/
        ctx2[0].config.intro;
      sveltemarkdown.$set(sveltemarkdown_changes);
      if (dirty & /*animateSection, data*/
      1) {
        each_value_5 = /*data*/
        ctx2[0].config.themes;
        let i;
        for (i = 0; i < each_value_5.length; i += 1) {
          const child_ctx = get_each_context_5(ctx2, each_value_5, i);
          if (each_blocks_3[i]) {
            each_blocks_3[i].p(child_ctx, dirty);
            transition_in(each_blocks_3[i], 1);
          } else {
            each_blocks_3[i] = create_each_block_5(child_ctx);
            each_blocks_3[i].c();
            transition_in(each_blocks_3[i], 1);
            each_blocks_3[i].m(div2, null);
          }
        }
        group_outros();
        for (i = each_value_5.length; i < each_blocks_3.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      const peoplelist0_changes = {};
      if (dirty & /*data*/
      1)
        peoplelist0_changes.items = /*data*/
        ctx2[0].config.speakers;
      if (dirty & /*data*/
      1)
        peoplelist0_changes.people = /*data*/
        ctx2[0].config.people;
      peoplelist0.$set(peoplelist0_changes);
      if (
        /*data*/
        ctx2[0].config.speakersNote
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_6(ctx2);
          if_block0.c();
          if_block0.m(div8, null);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      const peoplelist1_changes = {};
      if (dirty & /*data*/
      1)
        peoplelist1_changes.items = /*data*/
        ctx2[0].config.hosts;
      if (dirty & /*data*/
      1)
        peoplelist1_changes.people = /*data*/
        ctx2[0].config.people;
      peoplelist1.$set(peoplelist1_changes);
      if (
        /*data*/
        ctx2[0].config.programNote
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_5(ctx2);
          if_block1.c();
          if_block1.m(div17, t14);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (dirty & /*data, animateSection*/
      1) {
        each_value_3 = /*data*/
        ctx2[0].config.stages.map(
          /*func*/
          ctx2[1]
        ).filter(func_1);
        let i;
        for (i = 0; i < each_value_3.length; i += 1) {
          const child_ctx = get_each_context_3(ctx2, each_value_3, i);
          if (each_blocks_2[i]) {
            each_blocks_2[i].p(child_ctx, dirty);
            transition_in(each_blocks_2[i], 1);
          } else {
            each_blocks_2[i] = create_each_block_3(child_ctx);
            each_blocks_2[i].c();
            transition_in(each_blocks_2[i], 1);
            each_blocks_2[i].m(div16, null);
          }
        }
        group_outros();
        for (i = each_value_3.length; i < each_blocks_2.length; i += 1) {
          out_1(i);
        }
        check_outros();
      }
      if (!current || dirty & /*data*/
      1 && a_href_value !== (a_href_value = /*data*/
      ctx2[0].config.sponsorUrl)) {
        attr(a, "href", a_href_value);
      }
      if ((!current || dirty & /*data*/
      1) && t22_value !== (t22_value = /*data*/
      ctx2[0].config.ticketsIntro + ""))
        set_data(t22, t22_value);
      if (dirty & /*data, animateSection, goto*/
      1) {
        each_value_1 = /*data*/
        ctx2[0].config.tickets;
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
            transition_in(each_blocks_1[i], 1);
          } else {
            each_blocks_1[i] = create_each_block_1(child_ctx);
            each_blocks_1[i].c();
            transition_in(each_blocks_1[i], 1);
            each_blocks_1[i].m(div25, null);
          }
        }
        group_outros();
        for (i = each_value_1.length; i < each_blocks_1.length; i += 1) {
          out_2(i);
        }
        check_outros();
      }
      if (
        /*data*/
        ctx2[0].config.ticketing
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
        } else {
          if_block2 = create_if_block_1(ctx2);
          if_block2.c();
          if_block2.m(div26, t25);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
      if (
        /*data*/
        ctx2[0].config.ticketsNote
      ) {
        if (if_block3) {
          if_block3.p(ctx2, dirty);
        } else {
          if_block3 = create_if_block(ctx2);
          if_block3.c();
          if_block3.m(div26, null);
        }
      } else if (if_block3) {
        if_block3.d(1);
        if_block3 = null;
      }
      if (dirty & /*animateSection, data*/
      1) {
        each_value = /*data*/
        ctx2[0].config.faq;
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div29, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out_3(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(sveltemarkdown.$$.fragment, local);
      for (let i = 0; i < each_value_5.length; i += 1) {
        transition_in(each_blocks_3[i]);
      }
      transition_in(peoplelist0.$$.fragment, local);
      transition_in(peoplelist1.$$.fragment, local);
      for (let i = 0; i < each_value_3.length; i += 1) {
        transition_in(each_blocks_2[i]);
      }
      for (let i = 0; i < each_value_1.length; i += 1) {
        transition_in(each_blocks_1[i]);
      }
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      transition_out(sveltemarkdown.$$.fragment, local);
      each_blocks_3 = each_blocks_3.filter(Boolean);
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        transition_out(each_blocks_3[i]);
      }
      transition_out(peoplelist0.$$.fragment, local);
      transition_out(peoplelist1.$$.fragment, local);
      each_blocks_2 = each_blocks_2.filter(Boolean);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        transition_out(each_blocks_2[i]);
      }
      each_blocks_1 = each_blocks_1.filter(Boolean);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        transition_out(each_blocks_1[i]);
      }
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      detach(meta0);
      detach(meta1);
      detach(meta2);
      detach(meta3);
      detach(meta4);
      detach(meta5);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div4);
      destroy_component(sveltemarkdown);
      destroy_each(each_blocks_3, detaching);
      if (detaching)
        detach(t4);
      if (detaching)
        detach(div9);
      destroy_component(peoplelist0);
      if (if_block0)
        if_block0.d();
      if (detaching)
        detach(t8);
      if (detaching)
        detach(div14);
      destroy_component(peoplelist1);
      if (detaching)
        detach(t11);
      if (detaching)
        detach(div18);
      if (if_block1)
        if_block1.d();
      destroy_each(each_blocks_2, detaching);
      if (detaching)
        detach(t15);
      if (detaching)
        detach(div22);
      if (detaching)
        detach(t19);
      if (detaching)
        detach(div27);
      destroy_each(each_blocks_1, detaching);
      if (if_block2)
        if_block2.d();
      if (if_block3)
        if_block3.d();
      if (detaching)
        detach(t26);
      if (detaching)
        detach(div31);
      destroy_each(each_blocks, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
const func_1 = (s) => s.program;
const func_2 = (x) => x;
function instance($$self, $$props, $$invalidate) {
  let { data } = $$props;
  const func = (s) => ({ ...s, program: data.config.program[s.id] });
  const click_handler = () => data.config.ticketing ? goto(data.config.ticketingUrl) : false;
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(0, data = $$props2.data);
  };
  return [data, func, click_handler];
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
