import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // li生成
  const li = document.createElement("li");
  li.className = "incomplete-item";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = text;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押下された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.closest(".incomplete-item"));

    // 完了リストに追加する要素
    const addTarget = completeButton.closest(".incomplete-item");

    // TODO内容テキストを取得
    const text = addTarget.children[0].firstElementChild.innerText; // 他の指定方法あるはず

    // div以下を初期化
    addTarget.textContent = null;

    // li生成
    const li = document.createElement("li");
    li.className = "incomplete-item";

    // div生成
    const div = document.createElement("div");
    div.className = "list-row";

    // pタグ生成
    const p = document.createElement("p");
    p.innerText = text;

    // button(戻る)タグ生成
    const ｂａｃｋButton = document.createElement("button");
    ｂａｃｋButton.innerText = "戻す";
    ｂａｃｋButton.addEventListener("click", () => {
      // 押下された戻すボタンの親タグ(div)を完了リストから削除
      const deleteTarget = ｂａｃｋButton.closest(".incomplete-item");
      document.getElementById("complete-list").removeChild(deleteTarget);

      // TODO内容テキストを取得
      const text = ｂａｃｋButton.parentNode.firstElementChild.innerText; // 他の指定方法あるはず
      createIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(div);
    div.appendChild(p);
    div.appendChild(ｂａｃｋButton);

    // 完了の子要素に各要素を設定
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押下された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.closest(".incomplete-item"));
  });

  // divタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了の子要素に各要素を設定
  document.getElementById("incomplete-list").appendChild(li);

  // 未完了リストから指定の要素を削除
  const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  };
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
