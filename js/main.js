// Strict mode を有効化
'use strict';

// 画面初期化
window.addEventListener('DOMContentLoaded', onDOMContentLoaded());

/**
 * 画面初期化
 */
function onDOMContentLoaded() {
    // <main>を追加
    let main = document.createElement("main");
    document.body.appendChild(main);
    
    // テスト用に<p>Hello World</p>を表示
    let text = document.createTextNode("Hello World");
    let textElement = document.createElement("p");
    textElement.appendChild(text)
    main.appendChild(textElement);
}