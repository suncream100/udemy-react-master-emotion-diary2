# useReducer

## useReducer 소개

- 컴포넌트 내부에 새로운 State를 생성하는 리액트 훅
- 모든 `useState`는 `useReducer`로 대체 가능

## useReducer VS useState [🔗](https://ko.react.dev/learn/extracting-state-logic-into-a-reducer#comparing-usestate-and-usereducer)

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
- reducer 함수 안에서는 switch문으로 작성하는 것을 추천
  - 또, 각자 다른 `case` 속에서 선언된 변수들이 서로 충돌하지 않도록 `case` 블록을 중괄호인 `{`와 `}`로 감싸는 걸 추천

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
  const [state, dispatch] = useReducer(reducer, { name: "Taylor", age: 42 });

  function handleButtonClick() {
    dispatch({ type: "incremented_age" });
  }

  function handleInputChange(e) {
    dispatch({
      type: "changed_name",
      nextName: e.target.value,
    });
  }
  // ...
}
```

<br>
<br>

# 최적화

## useMemo

"메모이제이션" 기법을 기반으로 불 필요한 연산을 최적화 하는 리액트 훅

```jsx
useMemo(() => {}, []);
```

## React.memo

- 컴포넌트를 인수로 받아, 최적화된 컴포넌트로 만들어 반환
- 부모가 리렌더링 되더라도 자신의 Props가 바뀌지 않으면 리렌더링 되지 않음(불필요한 리렌더링 방지)
- 얕은 복사를 기준으로 비교

```jsx
const MemoizedComponent = memo(Component);
// 반환값 : 최적화된 컴포넌트
// Props를 기준으로 메모이제이션 됨
```

## useCallback

## 최적화의 시점

하나의 프로젝트를 완성했을 때 진행  
기능 완성 -> 최적화

## 최적화의 대상

꼭 최적화가 필요할 것 같은 연산, 컴포넌트에 적용

<br>
<br>

# Context

## Context

- 컴포넌트간의 데이터를 전달하는 또 다른 방법
- 기존의 Props가 가지고 있던 단점(Props Drilling)을 해결할 수 있음
  - 부모 -> 자식 으로만 데이터를 전달할 수 있기 때문에 계층구조가 2단계 이상이라면 Props를 바로 손자에게 전달할 수는 없음
- Context 데이터 보관소에 객체형태로 저장하여 다이렉트로 Props를 전달함
- 데이터를 저장하기 때문에 렌더링되는 컴포넌트 내부에 작성하지 않고 특별한 경우가 아니라면 컴포넌트 외부에 작성한다

## Context와 최적화

- 객체 자체가 다시 생성되면서 저장하기 떄문에 내부 props가 바뀌면 리렌더링이 발생하여 최적화가 적용되지 않음
- 변경될 수 있는 값과 변경되지 않는 값으로 컨텍스트를 분리하여 사용해야 함
- 변경되지 않는 값은 useMemo를 사용하여 한번만 함수를 생성하도록 함
