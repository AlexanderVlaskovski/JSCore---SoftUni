function attachEvents() {
    let textArea = $(`#messages`);
    let inputName = $('#author');
    let inputMsg = $('#content');
    let sendBtn = $('#submit');
    let refreshBtn = $('#refresh');

    refreshPage();

    sendBtn.on('click', sendMsg);
    refreshBtn.on('click', refreshPage);

    function refreshPage() {
        $.ajax({
            method: "GET",
            url: "https://messenger-df841.firebaseio.com/messenger.json",
            success: loadMsgs,
            error: handleErr
        });
    }

    function sendMsg() {
        if (inputName.val() !== '' && inputMsg.val() !== '') {

            let author = inputName.val();
            let content = inputMsg.val();
            let timestamp = Number(Date.now().toString());

            $.ajax({
                method: 'POST',
                url: 'https://messenger-df841.firebaseio.com/messenger.json',
                data: JSON.stringify({author, content, timestamp}),
                success: () => {
                    inputMsg.val('');
                    inputName.val('');
                },
                error: handleErr
            })
        }

    }


    function loadMsgs(msgs) {

        let text = '';
        let keys = Object.keys(msgs);

        keys.sort((a, b) => msgs[a].timestamp - msgs[b].timestamp);

        for (let key of keys) {
            text += `${msgs[key].author}: ${msgs[key].content}\n`;
        }
        textArea.text(text.trim());
    }

    function handleErr(err) {
        console.log(err);
    }
}

