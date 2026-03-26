function debounce(fn, delay) {
    let timeout = null;

    return function (...args) {
        if (timeout) return;

        timeout = setTimeout(() => {
            timeout = null;
        }, delay);

        fn.apply(this, args);
    };
}

module.exports = { debounce };
