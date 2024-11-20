/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
// ++ 함수는 값으로 전달 될 수 있다 - 일급 객체, 일급 함수 
let calculateTotal = function () {
  // 함수 안에서만 접근 가능한 인수들의 집합 객체 존재 : arguments => 유사 배열 => 지역 변수

  let total = 0;
  // for문
  // for(let i = 0; i < arguments.length; i++){
  //   total += arguments[i];
  // }

  // for...of
  // for(const value of arguments){
  //   total += value;
  // }
  //argument안에 Symbol의 iterator가 있음

  // arguments => array

  // const arr = [...arguments]; // spread syntax
  // const arr = Array.from(arguments);  배열의 static method
  const arr = Array.prototype.slice.call(arguments); // 배열의 instance method

  // instance method

  // forEach => 배열을 순환 => 값을 반환하지 X
  // arr.forEach(function(price,){
  //   total += price
  // })

  // reduce => 배열을 순환 => 값을 반환 문자,숫자,불린,배열,객체.....
  // arr.reduce(function(acc,cur){
  //   return acc + cur
  // },0)

  // reduce + arrow function
  // return arr.reduce((acc,cur)=> acc + cur)

  // arguments
  // 한번만 빌려쓰는 방법

  // Array.prototype.forEach.call(arguments,function(price){
  //     total += price
  // })

  //arguments - 유사배열
  // 부모 바꿔치기
  arguments.__proto__ = Array.prototype;

  console.log(total);
};

// const obj = {
//   total:null,
//   item:[1000,2000,3000],
//   totalPrice(){

//     this.item.forEach((price)=>{
//       this.total += price
//     })
//   }
// }

// obj.totalPrice()

const result = calculateTotal(10000, 30000, 45000, 2500, 30000, 25000);

// Array instance method
//  forEach => 배열을 순환 => 값을 반환하지 X
//  reduce  => 배열을 순환 => 값을 반환 : 문자,숫자,불린,배열,객체.....
//  map     => 배열을 순환 => 값을 반환 : ⭐️ 새로운 배열 ⭐️

const friends = ["박혜미", "이강현", "공세현", "MJ"];

const f = friends.map(function (name, index) {
  return `<li data-order="${index + 1}"> 이름 : ${name} </li>`;
});

f.forEach(function (tag) {
  document.body.insertAdjacentHTML("beforebegin", tag);
});

console.log(result);

//insertAdjacentHTML - HtML 삽입에 용이한 메서드

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};
//정작 호출할 때는 hello로 호출할 수 없다.

// 콜백 함수 (표현)식
let cb = function (condition, success, fail) {
  if (condition) success();
  else fail();
};

cb(
  false,
  function () {
    console.log("성공입니다");
  },
  function () {
    console.log("실패입니다.");
  }
);

function movePage(url, success, fail) {
  if (url.includes("https")) {
    success(url);
  } else {
    fail();
  }
}

function movePage(url, success, fail) {
  if (url.includes("https")) {
    // 서버통신 끝나면 나중에 한 값을 함수로 호출 success(url)하면 끝에 보내줄 수 있다.
    //안쪽에 있는 데이터를 바깥쪽에 꺼내쓸 수 있다는 장점
    //주로 메서드를 썼을 때 콜백을 더 경험하게 된다.
    //단점 : 콜백지옥에 빠질 수도 있다
    //주로 화살표 함수로 사용 (가독성 용이)
    `${url} 사이트로 이동합니다.`;
  } else {
    fail();
  }
}

movePage(
  "https://www.daum.net",
  function (url) {
    console.log(
      `현재 입력하신 url은 ${url}입니다. 3초 뒤 해당 사이트로 이동합니다.`
    );
  },
  function () {
    console.log("잘못된 경로를 입력하셨습니다.");
  }
);

movePage(
  "https://www.daum.net",
  (url) => `현재 입력하신 url은 ${url}입니다. 3초 뒤 해당 사이트로 이동합니다.`,
  () => console.log("잘못된 경로입니다.")
);

//왜 함수로 난리 치느냐? > 비동기방식 때문에 딜레이가 있는데 단순 출력하면 그 시간차를어떻게 할수없음
//함수로 호출하면 알아서 3초뒤에 출력해준다.
//setTimeout으로 해결할 순 있는데 하드코딩일 뿐더러 컴퓨터마다 시간이 차이난다.

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// 함수가 선언됨과 동시에 실행되는 것을 말함

// 궁극적 목표 : encapsulation(캡슐화)
// Immediately Invoked Function Expression
let IIFE;
