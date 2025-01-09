# JavaScript 기본
## JavaScript란?
JavaScript는 오늘날 가장 많이 사용되는 프로그래밍 언어.

### Web 페이지를 개발하기 위해 필요한 언어
- HTML : 요소들의 내용, 배치, 모양을 정하기 위해 사용하는 언어
- CSS : 요소들의 색상, 크기 등의 스타일을 설정
- JavaScript : 웹 내부에서 발생하는 다양한 기능을 만들 수 있는 언어

### JavaScript 실행
JavaScript는 JavaScript 엔진에 의해 실행  
JavaScript 엔진은 브라우저에 기본 탑재되어 있음

## 변수, 상수
값을 저장하는 박스, 저장소

### 변수
- let으로 변수를 선언, 초기화 할 수 있음  
  `let age = 27;`
- 변수의 값은 변경될 수 있기 때문에 초기값이 없는 변수도 선언가능  
  결과는 `undefined`

### 상수
- const로 선언
- 변수와는 달리 초기화 이후에는 값을 변경할 수 없음
- 초기화가 반드시 필요함

### 변수 명명규칙(네이밍 규칙)
- `$`, `_` 를 제외한 기호는 사용할 수 없다.
- 숫자로 시작할 수 없다.
- 예약어를 사용할 수 없다. ex) `let`, `const`, `if`

### 변수 명명 가이드
- 누가 봐도 이해할 수 있는 의미있는 단어로 명명하는 것이 좋음

<br>

## 자료형
자료형은 집합이다.

### 원시 타입
- 기본형 타입이라고도 불림
- 프로그래밍에 있어 가장 기본적인 값들의 타입

#### Number 타입
- 숫자, 소수, 음수
- 기본적인 사칙연산 모두 지원
- `Infinity` : 무한 양수값
- `-Infinity` : 무한 음수값
- `NaN` : 숫자 연산이 실패했을 경우 반환되는 값. Not a Number

#### String 타입
- 문자열을 모두 포함하는 타입
- `''`, `""` 따옴표로 감싸서 사용
- 덧셈 연산을 지원
- 템플릿 리터럴 문법 : `백틱`을 이용해 변수값도 문자열에 포함시킬 수 있음

#### Boolean 타입
- true, false
- 현재의 상태를 의미할 때 주로 사용

#### Null 타입
- 변수에 아무 값도 들어있지 않은 것을 나타냄

#### Undefined 타입
- 변수를 선언하고 초기화하지 않았을 때 자동으로 할당되는 값
- null은 명시적으로 할당해주는 것이기 때문에 자동으로 할당되는 값인 undefined와는 다름

### 객체 타입
- 원시 타입이 아닌 객체 타입의 자료형
- 여러가지 값을 동시에 저장할 수 있는 자료형

<br>

## 형변환
어떤 값의 타입을 다른 타입으로 변경하는 것. Type Casting

**묵시적 형 변환** : 암묵적 형변환이라고도 함. 개발자가 직접 설정하지 않아도 자바스크립트 엔진이 알아서 형 변환 하는 것  
**명시적 형 변환** : 개발자가 직접 함수 등을 이용해 형 변환을 일으킴

### 명시적 형 변환
- `Number()` : 문자열을 숫자로 형 변환하는 내장함수
- `parseInt()` : 문자열이 포함된 숫자도 숫자로 형 변환하는 내장함수. 숫자가 앞쪽에 있어야 함
- `String()` : 숫자에서 문자열로 형 변환하는 내장함수

<br>

## 연산자
프로그래밍에서의 다양한 연산을 위한 기호, 키워드를 말함

- `=` : 대입 연산자
- `+`, `-`, `*`, `/`, '%' : 산술 연산자  
  `*`, `/`, `%` 연산자는 우선순위가 더 높음. `()`안에 있는 연산자의 우선순위가 가장 높음
- `+=`, `-=` 등 : 복합 대입 연산자. 모든 산술 연산자 사용 가능
- `++`, `--` 등 : 증감 연산자. 모든 산술 연산자 사용 가능  
  변수명 앞(전위 연산), 뒤(후위 연산)에 위치 가능
- `||`, `&&`, `!` : 논리 연산자. boolean 타입 반환
- `===`, `!==`, `>`, `<`, `<=`, `>=` : 비교 연산자
- `??` : null 병합 연산자  
  null, undefined가 아닌 값을 찾아내는 연산자. 둘 다 값이 있을 경우 앞에 있는 값이 반환
- `typeof` : 값의 타입을 문자열로 반환하는 기능을 하는 연산자
- `{조건문} ? {참일 때 반환값} : {거짓일 때 반환값}` : 삼항 연산자. 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환

<br>

## 조건문
특정 조건을 만족했을 때만 실행되는 코드를 작성하기 위한 문법. 대표적으로 `if`, `switch` 문이 있음

### if 문
- 소괄호에 조건식을 넣고, 중괄호에 참일 때 실행할 코드 작성
- `else` 문에 조건식을 만족하지 않을 때 실행할 코드 작성

### switch 문
- 다수의 조건을 처리할 때 if보다 더 직관적임
- 일치하는 케이스를 만나게 되면 이후 모든 코드를 실행
- `break` 문으로 스위치문을 종료시킬 수 있음. 필수적으로 사용해야 함
- `default` 문으로 모든 조건이 거짓일 때 실행시킬 코드를 작성할 수 있음
```
switch(animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("고양이");
    break;
  }
  case "bear": {
    console.log("고양이");
    break;
  }
  case "snake": {
    console.log("고양이");
    break;
  }
  case "tiger": {
    console.log("고양이");
    break;
  }
  default: {
    console.log("그런 동물은 없습니다");
  }
}
```

<br>

## 반복문
어떠한 동작을 반복해서 수행할 수 있도록 만들어 주는 문법

### for 문
```
for (let 초기값; 조건식; 증감식) {
  // 반복 실행할 코드
}
```

### for 문
- 조건식이 아니더라도 강제로 종료해야 하는 상황이 있을 경우 `break`를 사용한다
- 특정 회차를 건너뛰고 싶을 때 조건문을 이용해 `continue`를 사용한다
```
for (let 초기값; 조건식; 증감식) {
  // 반복 실행할 코드
  if (조건문) {
    break;
  }
  if (조건문) {
    continue;
  }
}
```

<br>

## 함수
일련의 작업을 수행하거나 값을 반환하는 재사용 가능한 코드 블록

### 함수 선언문
- 일반적인 방식으로 함수를 정의
- 호이스팅의 영향을 받음
```
function 함수명(인수1, 인수2) {
  // 코드
  return 
}
함수명(인수1, 인수2);
```
| 구분 | 매개변수 (Parameter) | 인수 (Argument) |
| --- | ------------------ | ------------------ |
| 정의 | 함수 선언 시 정의된 변수 | 함수 호출 시 전달되는 값 |
| 위치 | 함수 선언부 | 함수 호출부 |
| 예시 | function greet(name) | greet('Alice') |

#### 호이스팅
- 호이스팅은 자바스크립트의 실행 컨텍스트에서 변수, 함수 선언을 코드 실행 전에 메모리로 끌어올리는 동작을 의미
- 함수 선언문은 코드 실행 전에 메모리에 올라가므로, 선언 전에 함수 호출이 가능

### 함수 표현식
- 함수를 변수에 할당하여 정의
- 호이스팅의 영향을 받지 않음
```
const 변수명 = function () {
  // 코드
};
변수명();
```

### 화살표 함수
- 짧은 문법으로 함수를 정의
- `this`가 정적으로 바인딩됩니다(상위 스코프를 가리킴)
- 한 줄 작성 : **암묵적 반환**. `return`을 명시할 필요 없이 결과값이 자동으로 반환
- 여러줄 작성 : 중괄호를 사용해야하며 자동 반환이 되지 않기 때문에 `return`을 사용해야 값이 반환됨
```
// 한 줄 작성
const 변수명 = () => // 코드
변수명(); // "Hello!"

// 여러 줄 작성
const 변수명 = () => {
  // 코드
  return 코드;
}
변수명();
```

### 콜백함수
- 다른 함수에 인수로 전달되어 나중에 실행되는 함수
- 호출 시점을 다른 함수가 결정
- 다른 함수에 작업이 끝난 후 실행할 코드를 전달할 때 사용
- 보통 비동기 작업(예: 데이터 가져오기, 타이머, 이벤트 처리)에서 많이 사용됨
```
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback(); // 콜백 함수 실행
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
// Hello, Alice!
// Goodbye!
```
```
// 비동기 콜백 함수
console.log("시작");

setTimeout(() => {
  console.log("3초 후 실행");
}, 3000);

console.log("끝");
// 시작
// 끝
// 3초 후 실행
```
```
// 배열 메서드에서 콜백 함수 활용
// 예제: 배열의 각 요소를 출력
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
  console.log(num); // 배열의 각 요소를 출력
});

// 예제: 배열 요소를 제곱한 새 배열 만들기
const squares = numbers.map((num) => num * num);
console.log(squares); // [1, 4, 9, 16, 25]
```

<br>

## 스코프
범위. 변수나 함수에 접근하거나 호출할 수 있는 범위를 말함

### 전역 스코프
- 코드 전체에서 접근 가능
- 전역 스코프에 변수를 선언하면 전역 객체(브라우저 환경에서는 window)의 속성이 됨
```
const globalVar = "I am global"; // 전역 변수

function printGlobal() {
  console.log(globalVar); // 접근 가능
}

printGlobal(); // "I am global"
```

### 지역 스코프
- 특정 코드 블록(함수, 조건문, 반복문 등) 내에서만 접근 가능
- 지역 스코프에서 선언된 변수는 해당 블록을 벗어나면 접근할 수 없음
- `{}` 밖에서는 접근할 수 없음
- 내부 스코프에서 변수를 찾지 못하면 외부 스코프를 순차적으로 탐색함
```
// 내부 스코프에 변수가 없을 때
const outerVar = "I am outer";

function innerFunction() {
  console.log(outerVar); // 외부 스코프의 변수 접근 가능
}

innerFunction(); // "I am outer"
```

<br>

## 객체
객체는 키와 값의 쌍으로 이루어진 데이터 구조로, 관련된 데이터를 하나로 묶어서 관리할 때 사용

### 객체 생성
#### 객체 리터럴 방식
가장 간단하고 일반적인 방법
```
const person = {
  name: "Alice", // 키: 값
  age: 25,
  greet: function() {
    console.log("Hello, I'm " + this.name);
  }
};

console.log(person.name); // "Alice"
person.greet(); // "Hello, I'm Alice"
```
#### 생성자 함수
```
const person = new Object(); // Object 키워드
person.name = "Alice";
person.age = 25;

console.log(person.name); // "Alice"
```

### 객체 조작
#### 1. 프로퍼티 접근
- 점 표기법 : `object.key`
- 대괄호 표기법 : `object["key"]` (동적으로 키를 설정할 때 유용)
```
console.log(person.name);       // 점 표기법
console.log(person["name"]);    // 대괄호 표기법
```
#### 2. 프로퍼티 추가/수정
```
// 점 표기법, 대괄호 표기법 모두 사용 가능
person.gender = "female"; // 새로운 키 추가
person.age = 26;          // 기존 값 수정
```
#### 3. 프로퍼티 삭제
```
delete person.age;
```
#### 4. 프로퍼티 존재 유무 확인
```
let result = "name" in person;
console.log(result1); // true or false
```

### 상수 객체
const로 선언 객체 자체의 참조(주소)를 고정하지만 객체 내부의 값(프로퍼티)는 변경 가능

### 메서드
객체에 정의된 함수
```
// 함수 호출
person.sayHi();
person["sayHi"]();
```

<br>

## 배열
여러개의 값을 순차적으로 담을 수 있는 자료형

### 배열 생성
#### 배열 리터럴 방식
가장 간단하고 일반적인 방법
```
const fruits = ["Apple", "Banana", "Cherry"];
```
#### 생성자 배열
```
const numbers = new Array(1, 2, 3, 4, 5); // Array 키워드
```

### 배열 조작
#### 1. 요소 접근
인덱스로 접근 가능
```
arr[0];
```
#### 2. 프로퍼티 추가/수정
```
arr[0] = "hello";
```