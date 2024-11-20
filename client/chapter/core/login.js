// const accuratePassword = "TheMaster";
// const accessibleUser= "Admin";

// let password;

// let userName = prompt("Who's there");

// if (
//   (userName != accessibleUser? true : false) ||
//   (userName == accessibleUser? true : false) ||
//   (userName == null ? true : false)
// ) {
//   userName != accessibleUser&& alert("난 널 몰라");
//   userName == accessibleUser&& alert("환영합니다.");
//   userName == null && alert("비어있습니다.");
// }

// let a = 15;

// switch (a) {
//   case 10:
//   case 13:
//     console.log("비교하려는 값보다 작습니다.");
//     break;
//   case 15:
//     console.log("정확한 값입니다.");
//     break;
//   case 20:
//     console.log("비교하려는 값보다 큽니다.");
//     break;
//   default:
//     break;
// }

// const MORNING = "아침",
//   LUNCH = "점심",
//   DINNER = "저녁",
//   NIGHT = "밤",
//   LATE_NIGHT = "심야",
//   DAWN = "새벽";

// let thisTime = LUNCH;

// switch (thisTime) {
//   case MORNING:
//     console.log("뉴스 기사 글을 읽는다.");
//     break;
//   case LUNCH:
//     console.log("자주 가는 식당에 가서 식사를 한다.");
//     break;
//   case DINNER:
//     console.log("동네 한 바퀴를 조깅한다.");
//     break;
//   case NIGHT:
//     console.log("친구에게 전화를 걸어 수다를 떤다.");
//     break;
//   case LATE_NIGHT:
//   case DAWN:
//     console.log("한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.");
//     break;
// }

// if (thisTime == MORNING) {
//   console.log("뉴스 기사 글을 읽는다.");
// } else if (thisTime == LUNCH) {
//   console.log("자주 가는 식당에 가서 식사를 한다.");
// } else if (thisTime == DINNER) {
//   console.log("동네 한 바퀴를 조깅한다.");
// } else if (thisTime == NIGHT) {
//   console.log("친구에게 전화를 걸어 수다를 떤다.");
// } else if (thisTime == LATE_NIGHT && thisTime == DAWN) {
//   console.log("한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.");
// }

let n = +prompt("숫자를 입력하세요(0~6)");
let week = ["일", "월", "화", "수", "목", "금", "토"];

switch (n) {
  case 0:
    console.log("일");
    console.log("주말입니다.");
    break;
  case 1:
    console.log("월");
    console.log("평일입니다.");
    break;
  case 2:
    console.log("화");
    console.log("평일입니다.");
    break;
  case 3:
    console.log("수");
    console.log("평일입니다.");
    break;
  case 4:
    console.log("목");
    console.log("평일입니다.");
    break;
  case 5:
    console.log("금");
    console.log("평일입니다.");
    break;
  case 6:
    console.log("토");
    console.log("주말입니다.");
    break;
  default:
    console.log("0~6아닌데요?");
    break;
}
