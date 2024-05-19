function isPalindrome(s) {
  function isAlnum(c) {
    return (
      ("a" <= c && c <= "z") || ("A" <= c && c <= "Z") || ("0" <= c && c <= "9")
    );
  }

  function toLower(c) {
    return "A" <= c && c <= "Z" ? String.fromCharCode(c.charCodeAt(0) + 32) : c;
  }

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlnum(s[left])) {
      left++;
    }
    while (left < right && !isAlnum(s[right])) {
      right--;
    }
    if (toLower(s[left]) !== toLower(s[right])) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("racecar")); // Should return true
console.log(isPalindrome("hello")); // Should return false
