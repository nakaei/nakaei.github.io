const darkLightBtn = document.querySelector('#dark-light-btn');
const darkLightText = document.querySelector('#dark-light-text');
const menuOpen = document.querySelector('#menu-open');
const menuPanel = document.querySelector('#menu-panel');

darkLightBtn.addEventListener('click', () => {
    // 全要素のテーマを変更
    document.body.classList.toggle('dark-theme');

    if (darkLightText.textContent === 'Dark Mode') {
        // ダークモードに変更する場合、文字列をライトモードに変更
        darkLightText.textContent = 'Light Mode'
    } else {
        // ライトモードに変更する場合、文字列をダークモードに変更
        darkLightText.textContent = 'Dark Mode';
    }
    // メニューを開くアイコンのテーマを変更
    menuOpen.classList.toggle('dark-theme');
})

const menuClose = document.querySelector('#menu-close');
const menuOptions = {
    duration: 1400,
    easing: 'ease',
    fill: 'forwards'
}

// メニューを開く
menuOpen.addEventListener('click', () => {
    menuPanel.animate({translate: ['100vw', 0]}, menuOptions);
})

// メニューを閉じる
menuClose.addEventListener('click', () => {
    menuPanel.animate({translate: [0, '100vw']}, menuOptions);
})