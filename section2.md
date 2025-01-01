# JavaScript 심화
## Truthy와 Falsy
- 명시적인 참, 거짓이 아닌 값도 참, 거짓으로 평가한다.
- 참이나 거짓을 의미하지 않는 값도, 조건문 내에서 참이나 거짓으로 평가하는 특징
- js의 모든 값은 Truthy 하거나 Falsy 함
  - 이를 이용하면 조건문을 간결하게 만들 수 있음

### Falsy
`undefined`, `null`, `0`, `-0`, `NaN`, `""`, `0n`

### Truthy
Falsy 값을 제외한 모든 값

### 활용 사례
```
// 인수로 undefined가 전달되어 에러가 나는 것을 방지하기 위해 person 매개변수가 Falsy한 값일 때 함수가 종료되도록 함
function printName(person) {
  if (!person) {
    console.log(person의 값이 없음);
    return;
  }
  console.log(person.name);
}
let person = { name: "아무개" };
printName(person);
```

<br>

## 단락 평가
`&&`, `||` 와 같은 논리 연산식에서 첫 번째 피연산자의 값만으로도 해당 연산의 결과를 확정할 수 있는 js의 특징 

### `&&`
- AND 연산자 첫 번째 피연산자가 false일 경우 첫 번째 피연산자만 반환함
- true일 경우 두 번째 피연산자 반환
- 둘 다 false일 경우 첫 번째 피연산자 반환

### `||`
- OR 연산자 첫번째 피연산자가 true일 경우 첫 번째 피연산자만 반환함
- false일 경우 두 번째 피연산자 반환
- 둘 다 true일 경우 두 번째 피연산자 반환

### 활용 사례
```
// 인수로 undefined가 전달되어 에러가 나는 것을 방지하기 위해 person 매개변수가 Falsy한 값일 때 함수가 종료되도록 함
function printName(person) {
 const name = person && person.name
  console.log(name || "person의 값이 없음");
}
printName();
printName({ name: "아무개" });
```

<br>

## 구조 분해 할당
### 배열의 구조 분해 할당
배열의 순서에 따라 값을 변수에 할당
```
const arr = [1, 2, 3];
const [a, b, c] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```
#### 기본값 설정
```
const [x, y, z = 5] = [10, 20];
console.log(z); // 5
```
#### 나머지 요소 가져오기
```
const [first, ...rest] = [1, 2, 3, 4];
console.log(rest); // [2, 3, 4]
```
### 객체의 구조 분해 할당
객체의 키에 따라 값을 변수에 할당
```
const obj = { name: "Alice", age: 25 };
const { name, age } = obj;

console.log(name); // "Alice"
console.log(age);  // 25
```
#### 기본값 설정
```
const { city = "seoul" } = obj;
console.log(city); // "seoul"
```
#### 다른 변수 이름으로 할당
```
const { name: userName, age: userAge } = obj;
console.log(userName); // "Alice"
console.log(userAge);  // 25
```

### 함수 매개변수에서 구조 분해 할당
함수 호출 시 전달되는 객체를 구조 분해하여 매개변수로 사용할 수 있음
```
function greet({ name, age }) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

const user = { name: "Bob", age: 30 };
greet(user); // "Hello, my name is Bob and I am 30 years old."
```

<br>

## Spread 연산자 & Rest 매개변수
### Spread 연산자
객체나 배열에 저장된 여러개의 값을 개발로 펼쳐주는 역할
```
// 배열
let arr1 = [1,2,3];
let arr2 = [4,5,6, ...arr1];

// 객체
let obj1 = {a: 1, b: 2};
let obj2 = {...obj1, c: 3, 4: 2};

// 인수
function funcA(p1, p2, p3) {
 console.log(p1, p2 ,p3)
}
funcA(...arr1);
```

### Rest 매개변수
함수를 호출할 때 전달된 여러 개의 인수를 배열 형태로 처리할 수 있음  
- spread 연산자가 아니니 주의
- rest 매개변수는 항상 마지막에 작성
- 배열 형태로 제공되므로 배열 메서드를 바로 사용할 수 있음
```
function introduce(name, ...hobbies) {
  console.log(`안녕하세요, 저는 ${name}입니다.`);
  console.log(`취미는 ${hobbies.join(", ")}입니다.`);
}

introduce("Alice", "독서", "영화 감상", "요리");
// 안녕하세요, 저는 Alice입니다.
// 취미는 독서, 영화 감상, 요리입니다.
```

## 원시타입 VS 객체타입
원시타입과 객체타입은 값이 저장되거나 복사되는 과정이 서로 다르기 때문

### 원시타입
값 자체는 변경 불가능하며, 변수에 값을 직접 저장
- 변수를 복사하면 값 자체가 복사
- 객체가 아니어서 속성이나 메서드 추가가 불가
- **불변성**. 값을 변경하면 새로운 값을 생성
```
let x = 10;
let y = x;  // 값 복사
x = 20;

console.log(y); // 10 (x를 변경해도 y는 영향받지 않음)
```

### 객체타입
참조값을 통해 변수에 저장되고 복사
- 변수를 복사하면 참조(주소)만 복사
- 객체에 동적으로 속성이나 메서드를 추가하거나 삭제 가능
- **가변성**. 객체의 속성 값을 변경할 수 있음

### 객체 타입 주의사항
- 얕은 복사일 경우 의도치 않게 값이 수정될 수 있어 새로운 객체로 복사(깊은 복사)하여 사용해야 함
- 객체간의 비교는 기본적으로 참조값을 기준으로 이루어짐
```
let a1 = { name: "아무개" };
let a2 = a1;
let a3 = { ...a1 };

// 참조값을 기준으로 비교
console.log(o1 === o2); // true
console.log(o1 === o3); // false

// 객체 값 기준으로 비교하려면 형 변환 메서드를 이용해야 함
console.log(JSON.stringify(a1) === JSON.stringify(a3));
```
- 배열과 함수도 객체이기 때문에 프로퍼티와 메서드를 가지고 있음

<br>

## 반복문으로 배열과 객체 순회하기
### 배열 인덱스
```
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
  //   console.log(arr2[i]);
}
```
### for of 반복문
```
for (let item of arr) {
  //   console.log(item);
}
```
### 객체 순회
```
let person = {
  name: "아무개",
  age: 30,
  hobby: "영화감상",
};
```
### Object.keys 사용
객체에서 key 값들만 뽑아서 새로운 배열로 반환
```
let keys = Object.keys(person);

for (let key of keys) {
  const value = person[key];
  //   console.log(key, value);
}
```
### Object.values
객체에서 value 값들만 뽑아서 새로운 배열로 반환
```
let values = Object.values(person);

for (let value of values) {
  //   console.log(value);
}
```
### for in
```
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
```

<br>

## 배열 메서드
### 배열 요소 조작
#### push
배열의 맨 뒤에 새로운 요소를 추가하는 메서드
```
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);
```

#### pop
배열의 맨 뒤에 있는 요소를 제거하고, 반환
```
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop(); // 3
```

#### shift
배열의 맨 앞에 있는 요소를 제거, 반환
```
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift(); // 1
```

#### unshift
배열의 맨 앞에 새로운 요소를 추가하는 메서드, 배열의 길이를 반환
```
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0); // 4
```

#### slice
배열의 특정 범위를 잘라내서 원본 배열은 수정되지 않고, 새로운 배열로 반환
```
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // [3, 4, 5]
let sliced2 = arr5.slice(2); // [3]
let sliced3 = arr5.slice(-3); // [2]
```

#### concat
두개의 서로 다른 배열을 이어 붙여서 원본 배열은 수정되지 않고, 새로운 배열을 반환
```
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr); // [1, 2, 3, 4]
```

### 배열 순회와 탐색
#### forEach
모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
```
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  // console.log(idx, item * 2); // 0 2 // 1 4 // 2 6
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2); // [2, 4, 6]
});
```

#### includes
배열에 특정 요소가 있는지 확인하는 메서드
```
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10); // false
```

#### indexOf
특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
```
let arr3 = [2, 2, 2];
let index = arr3.indexOf(20); // -1

let objectArr = [
  { name: "아무개" },
  { name: "홍길동" },
];

console.log(
  objectArr.indexOf({ name: "아무개" })
); // -1. 얕은 비교여서 property 기준으로 비교는 하지 않음

console.log(
  objectArr.findIndex(
  (item) => item.name === "아무개"
  )
); // 0. 깊은 비교를 하려면 findIndex를 사용해야 함
```

#### findIndex
모든 요소를 순회하면서, 콜백함수를 만족하는 특정 요소의 인덱스(위치)를 반환하는 메서드
```
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex(
  (item) => item === 999
);

console.log(findedIndex); // -1
```

#### find
모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
```
let arr5 = [
  { name: "아무개" },
  { name: "홍길동" },
];

const finded = arr5.find(
  (item) => item.name === "아무개"
);

console.log(finded); // { name: "아무개" }
```

### 배열 변형
#### filter
기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
```
let arr1 = [
  { name: "아무개", hobby: "테니스" },
  { name: "개똥이", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr1.filter(
  (item) => item.hobby === "테니스" // [{ name: "아무개", hobby: "테니스" }, { name: "개똥이", hobby: "테니스" }]
);
```

#### map
배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
```
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

let names = arr1.map((item) => item.name); // ['아무개', '개똥이', '홍길동']
```

#### sort
배열을 사전순으로 정렬  
숫자의 대소관계 기준 정렬이 아니기 때문에 콜백함수에 조건을 넣어주어야 함
```
let arr3 = [10, 3, 5];
arr3.sort((a, b) => {
  if (a > b) {
    // a가 b 앞에 와라
    return -1;
  } else if (a < b) {
    // b가 a 앞에 와라
    return 1;
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0;
  }
});
console.log(arr3); // [10, 5, 3]. 내림차순
```

#### toSorted
정렬된 새로운 배열을 반환  
`sort`와 같은 기능을 하는 메서드지만 `sort` 메서드는 원본배열 자체를 변경시키고, `toSorted` 메서드는 원본 배열은 놔두고 새로운 배열을 반환함
```
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();
console.log(arr5); // ['c', 'a', 'b']
console.log(sorted); // ['a', 'b', 'o']
```

#### join
배열의 모든 요소를 하나의 문자열로 합쳐서 반환
```
let arr6 = ["I", "love", "it"];
const joined = arr6.join(" ");
console.log(joined); // I love it
```

<br>

## Date 객체와 날짜
### Date 객체를 생성
Date라는 내장함수를 호출하여 생성할 수 있음
```
let date1 = new Date(); // 생성자. 인수가 없으면 현재시간 기준으로 출력
let date2 = new Date("2024/12/24/23:59:59");
let date3 = new Date(2024, 12, 24, 23, 59, 59);
```

### 타임 스탬프
특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
```
let ts1 = date1.getTime();
let date4 = new Date(ts1);
console.log(date4);
```

### 시간 요소 추출
```
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 자바스크립트의 1월은 0으로 표기되기 때문
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();
```

### 시간 수정
```
date1.setFullYear(2025);
date1.setMonth(11); // 실제론 12월
date1.setDate(24);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);
```

### 시간을 여러 포맷으로 출력하기
```
console.log(date1.toDateString());
console.log(date1.toLocaleString());
```

<br>

## 동기와 비동기
### 동기
- 여러개의 작업을 순서대로, 하나씩 처리하는 방식
- JavaScript는 '동기'적으로 코드를 실행함
- 동기 방식에는 치명적인 단점이 존재한다
  - 순서대로 처리하기 때문에 시간이 오래 걸리는 작업이 있다면 전체 프로그램의 성능이 악화됨
- 자바스크립트 엔진에는 쓰레드가 1개 밖에 없으므로 멀티쓰레드 방식으로는 문제를 해결할 수 없음

### 비동기
- 동기적이지 않다는 뜻
- 작업을 순서대로 처리하지 않음
- 비동기 작업들은 자바스크립트 엔진이 아닌 Web APIs(브라우저가 직접 관리하는 별도의 영역)에서 실행됨

#### 비동기적으로 처리하는 경우
데이터 요청이나 파일 읽기 같은 작업은 시간이 걸릴 수 있기 때문에 동기적으로 작업한다면 메인 스레드가 멈춰버린다.  
이를 방지하기 위해 비동기적 처리가 필요하다.
- Ajax Web API 요청 : 서버쪽에서 데이터를 받아와야 하는 경우
- 파일 읽기 : 서버에서 파일을 읽어야 하는 경우
- 암호화/복호화 : 바로 처리 되지 않고, 시간이 어느정도 걸리는 경우
- 작업 예약 : setTimeout을 사용하여 비동기 처리하는 경우

### 비동기 작업 처리하기
#### 콜백 함수
단순한 비동기 작업에서는 직관적이고 가벼운 콜백함수를 사용하는 편이 유용하다.

##### 🤔그렇다면 콜백함수 자체가 비동기적인 작업인걸까?
[chatGPT](https://chatgpt.com/share/67754cdb-07c8-800e-809a-ec289047ce84)

#### Promise
- 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
- 비동기 작업을 감싸는 객체

##### Promise의 기능
- 비동기 작업 실행
- 비동기 작업 상태 관리
- 비동기 작업 결과 저장
- 비동기 작업 병렬 실행
- 비동기 작업 다시 실행

##### Promise의 상태
- Pending(대기) : 아직 작업이 완료되지 않은 상태
- Fulfilled(성공) : 비동기 작업이 성공적으로 마무리 된 상태. resolve(해결)됨.
- Rejected(실패) : 비동기 작업이 실패한 상태. reject(거부)됨.

##### Promise 예제
**executor**: Promise의 콜백함수. 자동으로 실행되며 처리가 끝나면 성공 여부에 따라 resolve나 reject를 호출함
- executor의 인수 `resolve`, `reject`는 자바스크립트가 자체적으로 제공하는 콜백함수
  - `resolve` : 작업이 성공적으로 끝난 경우, 그 결과를 나타내는 value를 함께 호출
  - `reject` : 에러 발생 시 에러 객체를 나타내는 error를 함께 호출
- Promise 체이닝
  - `then` : 작업이 끝나고 또 다른 작업을 실행하는 메서드. `then` 메서드는 성공했을 때만 실행
  - `catch` : 작업이 실패했을 때 실행하는 메서드
  - `then`, `catch` 메서드는 Promise를 다시 반환하기 때문에 체이닝으로 사용이 가능함
```
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
    }, 2000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result); // 10
    return add10(result); // 결과값(인수)이 담긴 새로운 Promise 반환
  })
  .then((result) => {
    console.log(result); // 20
    return add10(undefined); // reject
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

#### async/await
##### async
- 어떤 함수를 비동기 함수로 만들어주는 키워드
- 함수가 프로미스를 반환하도록 반환해주는 키워드

##### await
- async 함수 내부에서만 사용이 가능한 키워드
- 비동기 함수가 다 처리되기를 기다리는 역할
- `then` 메서드를 복잡하게 사용할 필요 없이 함수앞에 async와 await를 사용하면 getData 함수가 반환하는 프로미스가 종료되기를 기다렸다가 자동으로 결과값을 반환함

```
async function getData() { // getData 함수가 async 키워드를 만나면서 비동기 함수로 변환되고, 프로미스 객체를 반환함
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "아무개",
        id: "amugae",
      });
    }, 1500);
  });
}

async function printData() {
  const data = await getData();
  console.log(data);
}

printData();
```
