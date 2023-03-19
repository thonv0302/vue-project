const directive = {
  mounted(el, binding) {
    el.__ClickOutsodeHandler__ = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event);
      }
    };
    document.body.addEventListener('click', el.__ClickOutsodeHandler__);
  },
  unmounted() {
    document.body.removeEventListener('click', el.__ClickOutsodeHandler__);
  },
};

export default directive;
