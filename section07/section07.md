# 라이프사이클

## 라이프사이클이란?

라이프사이클 = 생애주기

### 리액트 컴포넌트의 라이프사이클

- **Mount** : 컴포넌트가 탄생하는 순간. 화면에 처음 렌더링 되는 순간
- **Update** : 컴포넌트가 다시 렌더링 되는 순간. 리렌더링 될 때를 의미
- **UnMount** : 컴포넌트가 화면에서 사라지는 순간. 렌더링에서 제외되는 순간을 의미

## useEffect

리액트 컴포넌트의 사이드 이펙트를 제어하는 새로운 리액트 훅

> 사이드 이펙트: 컴포넌트 동작에 따라 파생되는 효과

`useEffect(()=>{}, [])`

```jsx
useEffect(() => {
  console.log(`count: ${count} / input: ${input}`);
}, [count, input]);
```

- 두번째 인수로 들어간 배열에 들어가 있는 값이 바뀌게 되면 첫번째 인자인 콜백함수를 실행시킨다.
- 두번째 인수인 배열은 의존성 배열. = dependency array, = deps 라고 함
  - 값은 여러개가 들어갈 수 있음

### useEffect의 라이프사이클 제어

```jsx
const isMount = useRef(false);

// 1. 마운트 : 탄생 - 두번째 인수를 빈배열로
useEffect(() => {
  console.log("mount");
}, []);

// 2. 업데이트 : 변화, 리렌더링 - 두번째 인수를 생략
useEffect(() => {
  if (!isMount.current) {
    isMount.current = true;
    return;
  }
  console.log("update");
});

// 3. 언마운트 : 죽음 - 두번째 인수를 빈배열로
useEffect(() => {
  // 클린업, 정리함수
  // return 뒤에 실행되는 함수
  return () => {
    console.log("unmount");
  };
}, []);
```
