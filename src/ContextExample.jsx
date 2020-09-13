import React, { useContext} from 'react';

const ThemeContext = React.createContext('light');

function ContextExample() {
  return (
    <ThemeContext.Provider value="blue">
      <Toolbar/>
    </ThemeContext.Provider>
  );
}
function Toolbar() {
  return (
    <div>
      <ThemedButton/>
    </div>
  )
}

/**
 * context 를 사용하는 세가지 방법
 * 1. class type Component 에서 contextType 에 context 할당
 * 2. Consumer 사용
 * 3. useContext hook사용
 */
class ThemedButton extends React.Component {
  static contextType = ThemeContext
  render() {
    return <Button theme={this.context}/>
  }
}

// function ThemedButton() {
//   return (
//     <ThemeContext.Consumer>
//       {value => <Button theme={value}/>}
//     </ThemeContext.Consumer>
//   )
// }

// function ThemedButton() {
//   const context = useContext(ThemeContext)
  
//   return (
//     <Button theme={context}/>
//   )
// }

function Button(props) {
  const { theme } = props
  return <button style={{color: theme}} type="button">Click</button>
}

export default ContextExample