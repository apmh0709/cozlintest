import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <header className="App-header">
                <button>
                  <Link to="/login">로그인 / 회원가입</Link>
                </button>
              </header>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <div className="loginPage">
                <div className="loginPageLeft"></div>
                <div className="loginPageRight">
                  <div className="loginPageCenter">
                    <div className="inputBox">
                      <p> 일반회원</p>
                      <p> 기업회원</p>
                    </div>
                    <div className="loginBox">
                      <div>
                        <p>아이디(이메일)</p>
                        <input type="text" />
                      </div>
                      <div>
                        <p>비밀번호</p>
                        <input type="text" />
                      </div>
                      <button>로그인</button>
                    </div>
                  </div>
                </div>
              </div>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
