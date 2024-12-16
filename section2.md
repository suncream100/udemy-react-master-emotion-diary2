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
