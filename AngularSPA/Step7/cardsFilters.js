mainApp.filter("filterCards", function () {
    return function (cards, count, query) {
        if (!cards) {
            return [];
        }

        if (!query) {
            return cards.slice(0, count);
        }

        return cards.filter(function (i) {
            return i.id.toString().indexOf(query) !== -1;
        });
    };
});