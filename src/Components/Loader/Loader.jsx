import React, { useState } from "react";
import {FadeLoader} from 'react-spinners'
function App() {
	const [count, setCount] = useState(0);

	return (
        <>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height:"50vh",
                }}
            >
                <FadeLoader color="#36d7b7" />
            </div>
			
		</>
	);
}

export default App;
