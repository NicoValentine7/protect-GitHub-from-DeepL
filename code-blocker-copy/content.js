(() => {
  "use strict";
  class e {
    static isElement(e) {
      return 1 === e.nodeType;
    }
  }
  const t = (e, t) => {
    const n = [...e.childNodes];
    for (; n.length; ) {
      const e = n.shift();
      if (!e) break;
      if (t(e)) return !0;
      n.concat(e.childNodes ? [...e.childNodes] : []);
    }
    return !1;
  };
  [
    ...[...document.getElementsByTagName("code")].filter(
      (n) => !t(n, (t) => e.isElement(t) && "PRE" === t.tagName)
    ),
    ...[...document.getElementsByTagName("pre")].filter(
      (n) => !t(n, (t) => e.isElement(t) && "CODE" === t.tagName)
    ),
  ].forEach((e) =>
    ((e) => {
      ((e) => {
        const t = (e) => {
            const t = window.getComputedStyle(e);
            [
              "background-color",
              "display",
              "color",
              "letter-spacing",
              "line-height",
              "content-wrap",
              "font-size",
              "font-weight",
              "font",
            ].forEach((n) => {
              e.style.setProperty(n, t.getPropertyValue(n));
            });
          },
          n = [{ element: e, visited: !1 }];
        for (; n.length; ) {
          const e = n.pop();
          if (!e) continue;
          const o = [...e.element.children].flatMap((e) =>
            e instanceof HTMLElement ? [e] : []
          );
          if (e.visited || !o.length) t(e.element);
          else {
            const t = [
              { element: e.element, visited: !0 },
              ...o.map((e) => ({ element: e, visited: !1 })),
            ];
            n.push(...t);
          }
        }
      })(e);
      const t = document.createElement("div");
      (t.style.display = window.getComputedStyle(e).display),
        (t.attachShadow({ mode: "closed" }).innerHTML = e.outerHTML),
        e.replaceWith(t);
    })(e)
  );
})();
