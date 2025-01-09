# React.js 입문
## React 컴포넌트
- React 컴포넌트는 함수형으로 생성한다.
  - 함수선언식, 화살표함수로 작성 가능
- 함수명은 반드시 대문자로 시작해야 한다.
- 컴포넌트는 계층 구조를 가지고 있다.
  - **루트 컴포넌트** : App과 같은 최상위 조상 컴포넌트
  - **부모 컴포넌트** : return을 하는 컴포넌트
  - **자식 컴포넌트** : return문 안에 포함되는 컴포넌트
- 비트로 만든 컴포넌트는 import할 때 파일 확장자는 생략이 가능하다.

## JSX
JSX(JavaScript Extensions): 확장된 자바스크립트의 문법  
자바스크립트에서는 함수가 html을 리턴할 수 없음 하지만 확장된 자바스크립트 문법에서는 html을 리턴할 수 있음

### JSX 주의사항
- 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
  - 표현식 : 문자열, 숫자, 삼항연산자..
- 숫자, 문자열, 배열 값, 객체 값만 렌더링 된다.
  - 객체 자체, `Boolean`, `undefined`, `null`은 렌더링 되지 않음
- 모든 태그는 닫혀 있어야 한다.
- 최상위 태그는 반드시 하나여야만 한다.
  - 최상위 태그가 의미없는 태그라면 빈태그(`<></>`)를 사용한다.
- style의 속성을 작성할 때 카멜케이스를 사용한다
- CSS파일을 만들고 연결시켜 사용할 수 있다.
  - style을 inline으로 작성할 경우 속성이 많아지면 사용하기 불편할 수 있기 때문
- `class`는 html의 예약어이기 때문에 `className`을 사용한다.

## Props
- 컴포넌트 간 값을 이름을 붙여서 전달하는 방식
- 컴포넌트 매개변수로 props를 객체형태로 전달받을 수 있음
  `const Counter = (props) => {}`
- props 기본값을 설정할 수 있음
    ```jsx
    const Button = (props) => {
      return (
        <button style={{ color: props.color }}>
          {props.text} - {props.color.toUpperCase()}
        </button>
      );
    };

    Button.defaultProps = {
      color: 'black',
    }
    ```
- props를 매개변수로 설정할 때 구조분해할당을 이용해 바로 변수로 지정할 수 있다.
    ```jsx
    const Button = ({ text, color }) => {
      return (
        <button style={{ color: color }}>
          {text} - {color.toUpperCase()}
        </button>
      );
    };
    ```
- prop을 여러개 전달할 때는 객체로 만들어 spread 연산자를 이용해 전달해도 좋다.
    ```jsx
    const buttonProps = {
      text: '메일',
      color: 'red',
    }
    return (
      <>
        <Button {...buttonProps} />
      </>
    )
    ```
- 자식요소는 `children` prop으로 자동 전달 된다.
  - 컴포넌트도 `children`으로 전달할 수 있다.
    ```jsx
    function App() {
      return (
        <>
          <Button text={'카페'}>
            <div>자식요소는 children prop으로 자동 전달됨</div>
          </Button>
          <Button text={'블로그'}>
            <Header />
          </Button>
        </>
      );
    }

    const Button = ({ text, color, children }) => {...}
    ```
- 컴포넌트가 전달받은 prop이 변경될 때 리렌더링 한다.
  - 부모 컴포넌트가 변경될 때도 리렌더링 한다.

## Event Handling
- **이벤트 핸들러** : 이벤트를 실질적으로 처리하는 함수
- 함수가 길어진다면 선언식을 만들어서 함수명으로 사용 가능
  ```jsx
  const Button = ({ text, color, children }) => {
    const onClickButton = () => {
      console.log(text);
    }
    return (
      <button
        onClick={onClickButton}
        style={{ color: color }}
      >
        {text} - {color.toUpperCase()}
        {children}
      </button>
    );
  };
  ```

### 이벤트 객체
- 모든 이벤트는 이벤트 객체를 제공함. 합성 이벤트
  ```jsx
  const onClickButton = (e) => { // e는 이벤트 객체
    console.log(e);
    console.log(text);
  }
  ```
- 브라우저 별 이벤트 객체 스펙이 달라서 리액트에서 합성 이벤트를 제공하여 모든 브라우저에서 동일하게 사용할 수 있도록 하는 이벤트 객체임
