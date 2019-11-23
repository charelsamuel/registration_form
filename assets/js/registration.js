$(document).ready(() => {
    let url = 'http://127.0.0.1:3000/api/v1'; 
    // $.get(url + '/account/test', (data) => {
    //     console.log(data);
    // });

    $('#btn-register').click(() => {
        let params = $("#form-register").serialize();
        
        $("#fieldset-register").attr("disabled", true);

        $.post(url + '/account/register', params, (data) => {
            console.log(data); 
            $("#fieldset-register").attr("disabled", false);
        });
    });
});