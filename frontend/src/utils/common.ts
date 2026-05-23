/**
 * 防抖：在 wait 内，只有最后一次会执行
 * @param {*} func
 * @param {*} wait
 * @returns
 */
export function debounce(func: Function, wait: number) {
    let timeout: number;
    return function () {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(()=>{
            func.apply(this, arguments);
        }, wait);
    };
}

/**
 * 节流：wait 内，只执行一次
 * @param {*} func
 * @param {*} wait
 * @returns
 */
export function throttle(func: Function, delay: number) {
    let prev = 0
    return function() {
        let now = Date.now()
        if ((now - prev) >= delay) {
            func.apply(this, arguments)
            prev = Date.now()
        }
    }
}