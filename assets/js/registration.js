$(document).ready(() => {
    let url = "http://127.0.0.1:3000/api/v1";

    $("#btn-register").click(() => {
        let params = $("#form-register").serialize();
        $('.form-control').removeClass('is-invalid');

        $("#fieldset-register").attr("disabled", true);
        
        $.post(url + "/account/register", params, data => {
            
        }).fail(message => {
            $("#fieldset-register").attr("disabled", false);
            $.each(message.responseJSON.attributes, (index, error) => {
                $('#' + error.name).addClass('is-invalid');
                $('#' + error.name + 'Feedback').text(error.message);
            })
        }) ;
    });
});
