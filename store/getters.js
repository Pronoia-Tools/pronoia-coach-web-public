
export const getWorkbooks = (state) => {
  console.log({state})
  const workbooks = state.workbooks;
  // console.log(workbooks)
  if (!workbooks) return;

  return workbooks;
};

export const getWorkbookById = (state) => (idWokbook) => {
  const workbook = state.workbooks.find(workbook => workbook.id === parseInt(idWokbook));
  console.log(workbook,idWokbook)
  if (!workbook) return;

  return workbook;
};

export const getWorkBookFilter = (state) => (
  title = "",
  author = "",
  language = "",
  category = "",
  price1 = "",
  price2 = "",
  arrangeBy = ""
) => {
  // console.log(price1, price2);
  if (
    title.length === 0 &&
    language.length === 0 &&
    author.length === 0 &&
    category.length === 0 &&
    price1.length === 0 &&
    price2.length === 0 &&
    arrangeBy.length === 0
  )
    return state.workbooks;

  const result = state.workbooks.filter((workbook) => {
    if (
      (workbook.title.toLowerCase().includes(title.toLowerCase()) &&
        title !== "") ||
      workbook.language === language ||
      (workbook.author.firstName.toLowerCase().includes(author.toLowerCase()) &&
        author !== {}) ||
      workbook.category === category ||
      (workbook.price > parseInt(price1, 10) &&
        workbook.price < parseInt(price2, 10))
    ) {
      // console.log(workbook);
      return workbook;
    }
  });

  if (arrangeBy.length !== 0) {
    const orderNewest = (res) => {
      return res.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
      });
    };
    const orderCheapest = (res) => {
      return res.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    };

    if (arrangeBy === "Newest" && result.length !== 0) {
      console.log(result.length , "Newest")
      return orderNewest(result);
    }
    if (arrangeBy === "Newest" && result.length === 0) {
      console.log(result.length , "Newest")
      return orderNewest(state.workbooks);
    }
    if (arrangeBy === "Cheapest" && result.length !== 0) {
      console.log(result.length , "Cheapest")
      return orderCheapest(result);
    }
    if (arrangeBy === "Cheapest" && result.length === 0) {
      console.log(result.length , "Cheapest")
      return orderCheapest(state.workbooks);
    }
  } else {
    return result;
  }
};