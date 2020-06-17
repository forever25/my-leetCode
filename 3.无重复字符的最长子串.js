/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (34.75%)
 * Likes:    3797
 * Dislikes: 0
 * Total Accepted:    524.8K
 * Total Submissions: 1.5M
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * 示例 1:
 *
 * 输入: "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 *
 * 示例 2:
 *
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 *
 * 示例 3:
 *
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let map = new Map(),
      max = 0,
      sLen = s.length;
      for(let i = j = 0; j < sLen; j ++) {
        if(map.has(s[j])) {
          i = Math.max(map.get(s[j]) + 1, i);
        }
        max = Math.max(max, j - i + 1);
        map.set(s[j], j);
        // console.log(i,j,max,map)
      }
      return max;
};
// @lc code=end

/*
输入abcabcbb
i j max map
0 0 1 Map(1) {"a" => 0}
0 1 2 Map(2) {"a" => 0, "b" => 1}0: {"a" => 6}1: {"b" => 4}2: {"c" => 5}
0 2 3 Map(3) {"a" => 0, "b" => 1, "c" => 2}
1 3 3 Map(3) {"a" => 3, "b" => 1, "c" => 2}
2 4 3 Map(3) {"a" => 3, "b" => 4, "c" => 2}
3 5 3 Map(3) {"a" => 3, "b" => 4, "c" => 5}
4 6 3 Map(3) {"a" => 6, "b" => 4, "c" => 5}

*/