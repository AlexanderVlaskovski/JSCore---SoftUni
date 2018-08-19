class PaymentManager {
    constructor(title) {
        this.element = this.createElement(title);
    }

    createElement(title) {

        let currElement = $(`<table>`);
        $(`<caption>${title} Payment Manager</caption>`).appendTo(currElement);
        let thead = $(`<thead>`);
        thead.append($(`<tr>\n<th class="name">Name</th>\n<th class="category">Category</th>\n<th class="price">Price</th>\n<th>Actions</th>\n</tr>`));
        currElement.append(thead);
        let tbody = $(`<tbody class="payments">`);

        let tfoot = $(`<tfoot class="input-data">`);
        let trF = $("<tr>");

        let nameTd = $(`<td><input name="name" type="text"></td>`);
        trF.append(nameTd);

        let categoryTd = $(`<td><input name="category" type="text"></td>`);
        trF.append(categoryTd);

        let priceTd = $(`<td><input name="price" type="number"></td>`);
        trF.append(priceTd);

        let addTd = $(`<td>`);
        let addBtn = $(`<button>Add</button>`).click(() => {
            let name = $(`input[name='name']`).val();
            let category = $(`input[name='category']`).val();
            let price = $(`input[name='price']`).val();

            if (name.length > 0 && category.length > 0 && price.length > 0) {
                let rowToAdd = $(`<tr>`);
                rowToAdd.append($(`<td>${name}</td>`));
                rowToAdd.append($(`<td>${category}</td>`));
                rowToAdd.append($(`<td>${Math.round(Number(price) * 100000) / 100000}</td>`));
                let tdDel = $(`<td>`);
                let delBtn = $(`<button>Delete</button>`).click(() => {
                    rowToAdd.remove();
                });
                tdDel.append(delBtn);
                rowToAdd.append(tdDel);
                tbody.append(rowToAdd);

                $(`input[name='name']`).val('');
                $(`input[name='category']`).val('')
                $(`input[name='price']`).val('')
            }

        });
        addTd.append(addBtn);
        trF.append(addTd);
        tfoot.append(trF);
        currElement.append(tbody);
        currElement.append(tfoot);

        return currElement;

    }

    render(id) {
        let ele = this.element;

        $(`#${id}`).append(ele);

    }
}
