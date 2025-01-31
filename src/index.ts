const WORLD = 'JS-World';

export function hello(who: string = WORLD): string
{
    return` Hello ${who} ... Hot reload`;
}

console.log('JS-ready');
window.addEventListener("load", function(_) {
    document.body.textContent = hello();
});

