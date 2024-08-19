self.onmessage = function (e) {
    const { data } = e.data;
  
    const result = data * data;
    postMessage(result);
  };
  