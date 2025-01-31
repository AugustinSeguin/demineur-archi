const WORLD = 'JS-World';
export function hello(who = WORLD) {
    return ` Hello ${who} ... Hot reload`;
}
console.log('JS-ready');
window.addEventListener("load", function (_) {
    document.body.textContent = hello();
});
