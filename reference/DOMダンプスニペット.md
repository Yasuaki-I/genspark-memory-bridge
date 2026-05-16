# DOM ダンプスニペット

5/2 の T0-3（DOM 構造解析）当日に Chrome のコンソールに貼り付けて実行する。
チャット領域の構造情報を自動で集めて、コピー可能な形で出力する。

## 使い方
1. Genspark のチャットページを Chrome で開く（解析したい会話が表示されている状態）
2. キーボードの **F12** を押す（DevTools が開く）
3. 上部タブの **Console** をクリック
4. 下記のスニペットを **全選択してコピー**
5. Console の入力欄に貼り付け（初回は警告が出る → 後述）
6. **Enter** で実行
7. 出力の最後に「=== コピー用 JSON ここから ===」と「=== ここまで ===」で囲まれたブロックが出る
8. その JSON ブロックを全選択コピーして Claude のチャットに貼り付ける

## 初回のみ：貼り付け警告の解除
Chrome は安全のため、初めてコンソールにコードを貼ると
「Allow pasting（貼り付けを許可）」と入力するよう警告を出す。

- 警告が出たら、Console 入力欄に **allow pasting** と手で打ち込んで Enter
- 一度許可すれば、その後は警告なしで貼れるようになる

## スニペット本体

```javascript
(() => {
  const report = {
    url: location.href,
    title: document.title,
    timestamp: new Date().toISOString(),
    bodyChildrenSample: [],
    candidateContainers: [],
    dataAttributes: new Set(),
    ariaRoles: new Set(),
    ariaLabels: new Set(),
    classNamePatterns: new Set(),
  };

  // 1. body 直下の主要要素を確認
  document.body.querySelectorAll(':scope > *').forEach(el => {
    report.bodyChildrenSample.push({
      tag: el.tagName.toLowerCase(),
      id: el.id || null,
      class: el.className?.toString?.().slice(0, 120) || null,
    });
  });

  // 2. チャットコンテナ候補を探す（role や aria 属性、それらしいクラス名）
  const candidates = document.querySelectorAll(
    '[role="log"],[role="main"],[role="article"],[role="listitem"],' +
    '[aria-live],[data-message-id],[data-testid*="message" i],' +
    '[class*="message" i],[class*="chat" i],[class*="conversation" i]'
  );

  candidates.forEach((el, i) => {
    if (i >= 30) return; // 多すぎる場合は先頭30件に制限
    const attrs = {};
    for (const a of el.attributes) {
      if (a.name.startsWith('data-') || a.name.startsWith('aria-') || a.name === 'role') {
        attrs[a.name] = a.value.slice(0, 80);
      }
    }
    report.candidateContainers.push({
      tag: el.tagName.toLowerCase(),
      class: el.className?.toString?.().slice(0, 120) || null,
      attrs,
      textPreview: (el.innerText || '').replace(/\s+/g, ' ').slice(0, 80),
      childCount: el.children.length,
      depth: (() => { let d = 0, n = el; while (n.parentElement) { d++; n = n.parentElement; } return d; })(),
    });
  });

  // 3. ページ全体から data-* 属性、role、aria-label の種類を収集
  document.querySelectorAll('*').forEach(el => {
    for (const a of el.attributes) {
      if (a.name.startsWith('data-')) report.dataAttributes.add(a.name);
      if (a.name === 'role') report.ariaRoles.add(a.value);
      if (a.name === 'aria-label') report.ariaLabels.add(a.value.slice(0, 40));
    }
    const cls = el.className?.toString?.() || '';
    cls.split(/\s+/).forEach(c => {
      if (c && /message|chat|conversation|bubble|turn|prompt|response/i.test(c)) {
        report.classNamePatterns.add(c.slice(0, 60));
      }
    });
  });

  // Set を Array に変換
  report.dataAttributes = [...report.dataAttributes].sort();
  report.ariaRoles = [...report.ariaRoles].sort();
  report.ariaLabels = [...report.ariaLabels].slice(0, 50);
  report.classNamePatterns = [...report.classNamePatterns].slice(0, 50);

  // 出力
  console.log('=== DOM ダンプ結果（人間が見る用）===');
  console.log(report);
  console.log('=== コピー用 JSON ここから ===');
  console.log(JSON.stringify(report, null, 2));
  console.log('=== ここまで ===');

  // クリップボードにも自動コピー（許可されていれば）
  try {
    navigator.clipboard.writeText(JSON.stringify(report, null, 2))
      .then(() => console.log('✅ クリップボードにコピー済み。そのまま Claude に貼り付け可'))
      .catch(() => console.log('⚠️ 自動コピー不可。JSON を手動で選択コピーしてください'));
  } catch (e) {
    console.log('⚠️ 自動コピー不可。JSON を手動で選択コピーしてください');
  }
})();
```

## このスニペットが集める情報
- ページ URL とタイトル
- body 直下の要素構成
- チャットらしき要素の候補（role / aria / data-* / 関連クラス名で検索）
- ページ全体に存在する data-* 属性の一覧
- ページ全体に存在する role の一覧
- 「message」「chat」「conversation」等を含むクラス名の一覧

## 集めない情報（プライバシー配慮）
- チャット本文の全文は取らない（候補要素の先頭80文字だけ）
- ログイン情報・Cookie・トークン類は一切取らない

## 当日の作業フロー（まとめ）
1. Genspark を開いて、ある程度会話が進んだチャットを表示
2. F12 → Console
3. 上記スニペットを貼って実行
4. 出力の JSON を Claude にチャットで貼る
5. Claude が JSON を読んで Go/No-Go 判断と推奨セレクタを返す
6. その結果を reference/Genspark-DOM解析.md に転記
