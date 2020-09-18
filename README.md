# React Context API and Redux

## 1. ThemedButton using props
- prop 을 이용한 값 전달.
- 만약 depth 가 깊다면?

## 2. context 를 사용하는 세가지 방법
- class component 에서 contextType
- Consumer
- function component 에서 useContext

## 3. Todo App using Context API and useReducer
- Context API 와 useReducer 를 이용한 TodoApp

## 4. Todo App refactoring #1 
- Provider 를 state 용과 와 dispatch 용 두개를 이용해서 불필요한 리렌더링 방지

## 5. Todo App refactoring #2
- custom hook 을 이용해서 좀 더 단순하게 context 사용

## 6. Basic Redux Todo App
- 기본적인 Todo app 을 redux 를 이용해서 구현
- createStore(reducer, [preloadedState], [enhancer])
- applyMiddleware(...middlewares)
- combineReducers(reducers)