((d) => {
    const $articleTitle = d.querySelectorAll(".article__title"),
      $articleText = d.querySelectorAll(".article__text"),
      $icon = d.querySelectorAll(".icon");
    for (let i = 0; i < $articleTitle.length; i++) {
      $articleTitle[i].addEventListener("click", (e) => {
        $articleTitle[i].classList.toggle("article__title--active");
        $articleText[i].classList.toggle("article__text--active");
        $icon[i].classList.toggle('icon--active');
      });


    }
  })(document)


  
    // ((d) => {
    //   const $articleTitle = d.querySelector(".article__title"),
    //     $articleText = d.querySelector(".article__text"),
    //     $icon = d.querySelector(".icon");
    //     $articleTitle.addEventListener("click", (e) => {
    //     $articleTitle.classList.toggle("article__title--active");
    //     $articleText.classList.toggle("article__text--active");
    //     $icon.classList.toggle("icon--active");
    //   });
    // })(document);