const saveShow = async (event) => {
  event.preventDefault();
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ show: eventsState[event.target.id] }),
  };
  await fetch("/api/save", requestOptions);
};

export default saveShow;
