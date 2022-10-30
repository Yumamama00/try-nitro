export default eventHandler((event) => {
  const test = useMethod(event);
  console.log(test);

  return {
    nitro: "Is Awesome",
  };
});
