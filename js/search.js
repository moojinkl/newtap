(function () {
  const searchInput = document.getElementById("search-input");

  const showSearchResult = () => {
    let searchWord = searchInput.value;
    //   사파리 검색 링크
    window.location.href = `https://www.google.com/search?&q=${searchWord}`;
    searchWord = "";
  };

  const enterKey = (event) => {
    if (event.code === "Enter") {
      showSearchResult();
    }
  };
  searchInput.addEventListener("keypress", (event) => {
    enterKey(event);
  });
})();
