import './Main.css';

const Main = () => {
  const user = {
    name: '아무개',
    isLogin: true,
  }
  // 조건문 1 (삼항연산자)
  // style을 inline으로 작성할 경우 속성이 많아지면 사용하기 불편할 수 있음
  return (
    <>
    {user.isLogin ? (
      <div style={{
        backgroundColor: 'red',
        borderBottom: '5px solid blue',
      }}>로그아웃</div>
    ) : (
      <div className="login">로그인</div>
    )}
    </>
  )

  // 조건문 2 (if..else..)
  // if(user.isLogin) {
  //   return <div>로그아웃</div>
  // } else {
  //   return <div>로그인</div>
  // }
}

export default Main;