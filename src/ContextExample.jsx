import React from 'react';

function ContextExample() {
  return (
    <Toolbar theme="red"/>
  );
}
function Toolbar(props) {
  return (
    <div>
      <ThemedButton theme={props.theme}/>
    </div>
  )
}

class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme}/>
  }
}

function Button(props) {
  const { theme } = props
  return <button style={{color: theme}} type="button">Click</button>
}

export default ContextExample