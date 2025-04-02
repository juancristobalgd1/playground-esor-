 
  import { component, html, signal } from "https://unpkg.com/esor/dist/esor.min.js";

component('my-counter', () => {
  const count = signal(0);

  return html`
      <button onclick=${()=>count(count() - 1)}>-</button>
      <span>${count}</span>
      <button onclick=${()=>count(count() + 1)}>+</button>

      <style>
        * {
          font-size: 200%;
        }
    
        span {
          width: 4rem;
          display: inline-block;
          text-align: center;
        }
    
        button {
          width: 4rem;
          height: 4rem;
          border: none;
          border-radius: 10px;
          background-color: seagreen;
          color: white;
        }
      </style>
  `;
});
