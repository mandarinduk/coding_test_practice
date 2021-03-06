/**
 * [JS100제] 문제 63번
 * =================================================================
 * 한국 대학교의 김한국 교수님은 학생들과 친해지기 위해서 딸에게 줄임말을 배우기로 했습니다.
 * 딸은 '복잡한 세상 편하게 살자'라는 문장을 '복세편살'로 줄여 말합니다.
 *
 * 교수님이 줄임말을 배우기 위해 아래와 같이 어떤 입력이 주어지면 앞 글자만 줄여 출력하도록 해주세요.
 * 입력은 한글 혹은 영어로 입력되며, 띄어쓰기를 기준으로 하여 짧은 형태로 출력합니다.
 * =================================================================
 */
const abbreviate = (str) => {
  let result = "";

  // 띄어쓰기로 구분하여 배열로 만듭니다.
  const strArr = str.split(" ");
  // 배열을 순회하며 요소의 첫 글자를 result에 더해줍니다.
  strArr.forEach((str) => (result += str[0]));

  return result;
};

abbreviate("청춘은 바로 지금부터"); // 청바지

/**
 * [JS100제] 문제 64번
 * =================================================================
 * 정량 N에 정확히 맞춰야만 움직이는 화물용 엘리베이터가 있습니다.
 * 화물은 7kg, 3kg 두 가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다.
 *
 * 예를 들어 정량이 24kg이라면 3kg 8개를 옮기는 것보다는
 * 7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있습니다.
 * 입력: 정량 N이 입력됩니다.
 * 출력: 가장 적게 옮길 수 있는 횟수를 출력합니다.
 * 만약 어떻게 해도 정량이 N이 되지 않는다면 -1을 출력합니다.
 * =================================================================
 */
const calMin = (N) => {
  // 가장 적게 옮기기 위해 무거운 7kg을 기준으로 최대 몇번 옮길 수 있는지 계산하여 a에 할당합니다.
  const a = parseInt(N / 7, 10);

  for (let i = a; i >= 0; i--) {
    // 7kg을 i번 옮겼을 때, 남은 정량을 3kg을 기준으로 최대 몇번 옮길 수 있는지 계산하여 b에 할당합니다.
    let b = parseInt((N - 7 * i) / 3, 10);
    // 총 옮긴 무게가 정량인 N과 같다면 총 횟수를 출력합니다.
    if (7 * i + 3 * b === N) {
      return i + b;
    }

    // 어떠한 조합으로라도 정확히 정량을 맞출 수 없다면 -1을 출력합니다.
    return -1;
  }
};
