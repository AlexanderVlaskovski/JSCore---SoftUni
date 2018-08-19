class Contact {
    constructor(firstName, lastName, phone, email) {
        this.element = this.createElement(firstName, lastName, phone, email);
        this.online = false;
    }


    get online() {
        return this._online;
    }

    set online(value) {
        if(value === false){
            this.element.find('.title').removeClass('online')
            return this._online = value;
        }
        else{
           this.element.find('.title').addClass('online');
            // $(`.info`).removeClass('title').addClass('title online');
            return this._online = value;
        }
    }

    createElement(firstName, lastName, phone, email) {

        let currEl = $(`<article>`);
        let titleEl = $(`<div class="title">${firstName} ${lastName}</div>`);
        let infoEl = $(`<div class="info">`);
        infoEl.hide();
        infoEl.append(`<span>&phone; ${phone}</span>`);
        infoEl.append(`<span>&#9993; ${email}</span>`)
        let infoBtn = $(`<button>&#8505;</button>`).click(() => {
           // $(`.info`).css('display', 'block');
           //$(event.target).parent().css('display', 'block');

            infoEl.toggle();
        });
        titleEl.append(infoBtn);
        currEl.append(titleEl);
        currEl.append(infoEl);

        return currEl;
    }



    render(id) {
        let el = this.element;
        $(`#${id}`).append(el);

    }
}