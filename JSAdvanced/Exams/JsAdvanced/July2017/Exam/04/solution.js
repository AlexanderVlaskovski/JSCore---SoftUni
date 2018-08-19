function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);

    let inputText = $(`.custom-select`);
    let submitBtn = $('#submit');
    let priceInput = $('#price');
    let quantityInput = $('#quantity')
    let capacity = $('#capacity');
    let price = $(`#sum`);
    inputText.change(function () {
        submitBtn.prop('disabled', false)
    })
    submitBtn.click(function () {
    let textToAdd = $(`.display`);
    let text = $('<li>').text(`Product: ${inputText.val()} Price: ${priceInput.val()} Quantity: ${quantityInput.val()}`);
    textToAdd.append(text);
    price.val(`${Number(price.val()) + Number(priceInput.val())}`);
    capacity.val(`${Number(capacity.val()) + Number(quantityInput.val())}`);
    inputText.val('');
    priceInput.val('1');
    quantityInput.val('1');
    submitBtn.prop('disabled', true);

    if(Number(capacity.val()) >= 150){
        capacity.addClass('fullCapacity');
        capacity.val('full');
        inputText.prop('disabled', true);
        priceInput.prop('disabled', true);
        quantityInput.prop('disabled', true);
    }

    })


}
