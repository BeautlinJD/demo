import { useContext } from 'react';
import { Mycontext } from './Mycontext';
function Abcd(){
    const { text, setText } = useContext(Mycontext);
    return(
        <div>
<h1>{text}</h1>
<button onClick={() => setText('hi')}>
        Click me
      </button>
        </div>
    );
}
export default Abcd;