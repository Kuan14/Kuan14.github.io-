// 印出一個聖誕樹 (由'-' '*'符號組成) 高度:5 寬度:9
function printTree(treeHeight, treeGap) {
  let ans = "";
  //start
  for (let i = 0; i < treeHeight; i++) {
    let line = "";
    // 添加前面的空格
    for (let j = 0; j < treeHeight - i - 1; j++) {
      line += "-";
    }
    // 添加星號529h6_1.js
    for (let k = 0; k < 2 * i + 1; k++) {
      line += "*";
    }
    // 添加後面的空格
    for (let j = 0; j < treeHeight - i - 1; j++) {
      line += "-";
    }
    ans += line + "\n";
  }
  //end
  return ans;
}

const treeHeight = 5;
const treeGap = 2;
console.log(printTree(treeHeight, treeGap));
