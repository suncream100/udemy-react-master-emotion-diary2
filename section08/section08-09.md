# useReducer

## useReducer 소개

- 컴포넌트 내부에 새로운 State를 생성하는 리액트 훅
- 모든 `useState`는 `useReducer`로 대체 가능

## useState와 차이점

### useState

- 컴포넌트 내부에 상태 관리 코드를 작성해야 함
- 상태 관리 코드가 길어질 경우 컴포넌트의 가독성이 떨어지게 됨

### useReducer

- 컴포넌트 외부에 상태 관리 코드를 분리할 수 있음
- `dispatch`라는 상태 변화 함수 사용
  - `dispatch`: 상태 변화가 있어야 한다는 사실을 알리는 함수
  - 인수로 상태가 어떻게 변화되길 원하는지를 객체(= 액션 객체)로 전달  
    객체 내 프로퍼티는 type을 포함하는 것이 일반적임
- 상태로 실제로 변환시키는 변환기인 reducer 함수를 `useReducer` 인수로 전달한다
  - reducer 함수에서 state값을 변경하면 state가 변경됨
- 두번째 인수로는 state 초기값을 전달

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "incremented_age": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case "changed_name": {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}
```

```jsx
function Form() {
const [state, dispatch] = useReducer(reducer, { name: 'Taylor', age: 42 });

function handleButtonClick() {
  dispatch({ type: 'incremented_age' });
}

function handleInputChange(e) {
  dispatch({
    type: 'changed_name',
    nextName: e.target.value
  });
}
// ...
```
