import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.querySelector("#add-text").value;
  document.querySelector("#add-text").value = "";

  // li生成
  const li = document.createElement("li");
  li.className = "incomplete-item";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // divタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);

  // 未完了の子要素に各要素を設定
  document.querySelector("#incomplete-list").appendChild(li);
};

document
  .querySelector("#add-button")
  .addEventListener("click", () => onClickAdd());
