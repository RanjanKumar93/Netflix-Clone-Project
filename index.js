const allQuestion = document.querySelectorAll(".faqQuestion");

allQuestion.forEach((question, i) =>
  question.addEventListener("click", function () {
    question.nextElementSibling.classList.toggle("h-[auto]");
    question.nextElementSibling.classList.toggle("scale-y-100");
    question.nextElementSibling.classList.toggle("p-[20px]");
    question.children[1].classList.toggle("rotate-45");

    allQuestion.forEach((el, index) => {
      if (index !== i) {
        el.nextElementSibling.classList.remove(
          "h-[auto]",
          "scale-y-100",
          "p-[20px]"
        );
        el.children[1].classList.remove("rotate-45");
      }
    });
  })
);
