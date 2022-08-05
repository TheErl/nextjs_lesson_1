export default function myCustomApiService() {
  return {
    getTodos: () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            { id: 1, title: "Todo 1", completed: false },
            { id: 2, title: "Todo 2", completed: true },
          ]);
        }, 1000);
      });
    },
  };
}