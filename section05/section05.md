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

## State & Props
- 현재 가지고 있는 형태나 모양을 정의. 변화할 수 있는 동적인 값
- 컴포넌트는 state를 가질 수 있고 State의 값에 따라 렌더링되는 UI가 결정된다.
- `useState()`는 인수로 초기값과 상태 변경 함수를 담은 배열을 리턴한다.
  - 구조 분해 할당으로 사용하는 것이 일반적임
  `const [state, setState] = useState(0);`
- 리렌더링
  - 컴포넌트의 state 값이 바뀌면 리렌더링 된다
  - state가 변경되지 않아도 부모의 props가 변경되면 리렌더링 된다
  - 부모 컴포넌트가 수정되면 자식 컴포넌트도 리렌더링 된다
    - 리렌더링을 방지하기 위해 관련이 없는 state를 함께 두지 않아 불필요한 렌더링을 막는다.

## useRef
- 새로운 Reference 객체를 생성하는 기능
- `useState`와 비슷하지만 값이 변경되면 컴포넌트가 리렌더링되는 것과 달리 `useRef`는 어떤 경우에도 리렌더링을 유발하지 않음
- 컴포넌트가 렌더링하는 특정 돔요소에 접근하여 요소를 조작하는 것이 가능함
- 컴포넌트 내부에서 렌더링의 영향을 미치지 않아야 하는 변수를 생성할 때 사용
- 리액트의 훅은 컴포넌트가 리렌더링 된다고해도 리셋이 되지 않기 때문에 일반 자바스크립트 변수로 생성하여 사용하는 것보다 안전함

## React Hooks
- 클래스 컴포넌트의 기능을 함수 컴포넌트에서도 이용할 수 있도록 해주는 메서드
  - 클래스 컴포넌트는 문법이 복잡하기 떄문에 함수 컴포넌트에서 클래스 컴포넌트의 기능을 사용하기 위해 React Hooks를 개발하게 됨
- 훅은 앞에 `use`라는 접두사가 붙음
- **함수 컴포넌트 내부에서만 호출이 가능**하며, 조건부, 반복문 내부에서는 호출이 불가
- `use`라는 접두사를 이용해 커스텀 훅도 제작 가능함
  ```jsx
  import useInput from "../hooks/useInput";

  const HookExam = () => {
    const [input, onChange] = useInput();
    return (
      <div>
        <input value={input} onChange={onChange} />
        {input}
      </div>
    );
  };

  export default HookExam;
  ```