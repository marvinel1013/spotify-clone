function useGreeting() {
  const date = new Date();
  const currentTime = date.getHours();

  let greeting;

  if (currentTime >= 0 && currentTime <= 12) {
    greeting = "Good Morning, ";
  } else if (currentTime > 12 && currentTime <= 18) {
    greeting = "Good Afternoon, ";
  } else {
    greeting = "Good Evening, ";
  }
  return { greeting };
}

export default useGreeting;
