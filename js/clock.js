// 즉시 실행 함수를 사용하여 함수스코프를 지정해주어 다른 자바스크립트 파일에서는 접근할 수 없게 된다.
(function () {
  const dateElement = document.getElementById("date");
  const timeElement = document.getElementById("time");

  const modifyNumber = (number) => {
    return parseInt(number) < 10 ? "0" + number : number;
  };
  const getNowDate = () => {
    const nowDate = new Date();
    const week = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ];

    let month = modifyNumber(nowDate.getMonth() + 1);
    let date = modifyNumber(nowDate.getDate());
    let day = nowDate.getDay();
    setNowDate(month, date, week[day]);
  };

  const setNowDate = (month, date, day) => {
    dateElement.textContent = `${month}월 ${date}일 ${day}`;
  };

  const getNowTime = () => {
    const nowDate = new Date();
    let hour = modifyNumber(nowDate.getHours());
    let minute = modifyNumber(nowDate.getMinutes());
    setNowTime(hour, minute);
  };

  const setNowTime = (hour, minute) => {
    timeElement.textContent = `${hour} : ${minute}`;
  };
  getNowDate();
  getNowTime();

  setInterval(getNowTime, 1000);
})();
