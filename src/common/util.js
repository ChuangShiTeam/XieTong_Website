function scrollToTop(number) {
    document.documentElement.scrollTop = number;
    document.body.scrollTop = number;
}

function setTitle(title) {
    document.title = title + ' - 佛山协同(国际)学校';
}

export default {
    scrollToTop: scrollToTop,
    setTitle: setTitle
};