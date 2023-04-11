import * as React from 'react';

const UseManyVariables = () => {
  const [list, setList] = React.useState({ contador: 0, show: true });

  const handleClick = () => {
    setList({ contador: list.contador + 1, show: list.show });
  };

  const handleShow = () => {
    setList({ contador: list.contador, show: !list.show });
  };

  return (
    <>
      <button onClick={handleShow}>
        {list.show ? 'Ocultar' : 'Mostrar'} contador
      </button>

      {list.show && <p>{list.contador}</p>}
      <button onClick={handleClick}>+</button>
    </>
  );
};

export default UseManyVariables;
