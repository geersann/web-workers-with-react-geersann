// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
class Worker {
  constructor() {
    // `onmessage` should be overwritten by the code using the worker.
    this.onmessage = () => {};
  }

  postMessage(data) {
    this.onmessage({ data: Math.pow(data.data, 2) });
  }
}
window.Worker = Worker;
