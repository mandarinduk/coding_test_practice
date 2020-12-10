/**
 * [JS100제] 문제 53번
 * =================================================================
 * 괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')' 와 같은 것을 말한다.
 * 그 중 괄호의 모양이 바르게 구성된 문자열을 '바른 문자열', 그렇지 않은 문자열을 '바르지 않은 문자열'이라 부르도록 하자.
 *
 * (())와 같은 문자열은 바른 문자열이지만 ()()) 와 같은 문자열은 바르지 않은 문자열이다.
 *
 * 입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.
 * =================================================================
 */
const isRightBracket = (bracket) => {
  let count = 0;

  // 괄호 갯수 검증. 같지 않으면 "NO"
  for (let i = 0; i < bracket.length; i++) {
    if (bracket[i] === "(") {
      count++;
    } else if (bracket[i] === ")") {
      count--;
    }
  }

  if (count !== 0) {
    return "NO";
  }

  let temp = [];

  // 괄호 순서 검증.
  for (let i = 0; i < bracket.length; i++) {
    if (bracket[i] === "(") {
      temp.push("(");
    } else if (bracket[i] === ")") {
      if (!temp.length) {
        return "NO";
      }
      temp.pop();
    }
  }
  return "YES";
};
/**
 * =================================================================
 * 1. '(' 와 ')' 의 갯수가 맞는지 확인하기 위해 각각의 갯수가 짝수면 짝수, 홀수면 홀수인지 확인하려고 했지만 답안을 참고하여 count 변수를 통해 갯수 검증.
 * 2. '(' 와 ')' 의 순서를 검증하기 위해 temp라는 배열을 만들어 '(' 일 경우 temp에 추가, ')' 일 경우 temp에 있는 값을 제거. (temp는 '(' 가 추가, 제거되는 것을 반복)
 * 만약 temp에 값이 없는데 ')' 이 온다면 순서가 잘못 된 것이기 때문에 "NO"를 return.
 * =================================================================
 */
