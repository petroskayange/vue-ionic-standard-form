export function scrollNearestParentIntoView(el: HTMLElement, buffer = 20): void {
  let parent = el.parentElement;
  while (parent) {
    if (parent.tagName === "ION-CONTENT" && typeof (parent as any).scrollToPoint === "function") {
      const content = parent as any;
      void content.getScrollElement().then((scrollEl: HTMLElement) => {
        const top = el.getBoundingClientRect().top - scrollEl.getBoundingClientRect().top + scrollEl.scrollTop;
        content.scrollToPoint(0, top - buffer, 300);
      });
      return;
    }
    const style = getComputedStyle(parent);
    if (parent.scrollHeight > parent.clientHeight && ["auto", "scroll"].includes(style.overflowY)) {
      const top = el.getBoundingClientRect().top - parent.getBoundingClientRect().top + parent.scrollTop;
      parent.scrollTo({ top: top - buffer, behavior: "smooth" });
      return;
    }
    parent = parent.parentElement;
  }
}
