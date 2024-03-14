function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// debouncefun=debouce(getapi, 500)

// onclick=debouce
