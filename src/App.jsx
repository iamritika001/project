//updating value of number

// import React, { useState } from "react";

// function App() {
//   let [count, setCount] = useState(0);

//   let Data = () => {
//     setCount(count - 1);
//   };
//   return (
//     <div>
//       {count}
//       <button onClick={Data}> click me to update a value</button>
//     </div>
//   );
// }

//hide and show

// export default App;

// import React, { useState } from "react";

// function App() {
//   let temp = "";
//   let [pshow, phide] = useState(true);
//   if (pshow) {
//     temp = (
//       <>
//         <h1> hello web page</h1>
//         <button onClick={() => phide(!pshow)}>button</button>
//       </>
//     );
//   } else {
//     temp = (
//       <>
//         <button onClick={() => phide(!pshow)}>button</button>
//       </>
//     );
//   }
//   return <>{temp}</>
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   let [first, second] = useState();
//   return (
//     <>
//       <div>
//         {first ? (
//           <>
//             <button onClick ={() => second(!first)}>button</button>
//             <h1>hyyy world</h1>
//           </>
//         ) : (
//           <>
//             <button onClick={() => second(!first)}>button</button>
//             <h1>helloooooooooo</h1>
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   let [nav, navbar] = useState(false);
//   return (
//     <>
//       <button className="icon" onClick={() => navbar(!nav)}>
//         &#9776;
//       </button>
//       <div className={`Menu ${nav ? "ActiveMenu" : ""}`}>
//         <ul>
//           <li>home </li>
//           <li>blog</li>
//           <li>pages</li>
//           <li>services</li>
//           <li>contact us </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// export default App;

// //password
// import React from "react";
// import { useState } from "react";

// function App() {
//   let [show, hide] = useState(true);
//   return (
//     <div>
//       <input type={show ? "text" : "password"} />
//       <button onClick={() => hide(!show)}>{show ? "text" : "password"}</button>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { Question } from "./data/Data";
import "./App.css";

function App() {
  let [show, Setshow] = useState(Question[0].id);
  return (
    <>
      <div>
        <h1 className="head">frequently asked question</h1>
        <div className="faqQuoter">
          {Question.map((faq, i) => {
            return (
              <>
                <div className="faqItems">
                  <h2 onClick={() => Setshow(faq.id)}>{faq.question}</h2>
                  <p className={show == faq.id ? "ActiveAns" : ""}>
                    {faq.answer}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
