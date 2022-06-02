export async function dataFromServerFunc() {
  let danniy;

  const data = await fetch("config.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      danniy = data;
    });
  return danniy;
}
