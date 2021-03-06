/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let max = 0;
  let n = s.length;
  let dp = new Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    if (s[i] == ")") {
      // 右括号前边是左括号
      if (s[i - 1] == "(") {
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
      }
      // 当前右括号前边是右括号，并且前一个合法子序列的前边是左括号和当前右括号组成一对，则最长子序列个数加2
      else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] == "(") {
        dp[i] =
          dp[i - 1] + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
      }
      max = Math.max(max, dp[i]);
    }
  }
  return max;
};
// @lc code=end
