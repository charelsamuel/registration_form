$(document).ready(() => {
    let url = "http://127.0.0.1:3000/api/v1";
    
    $.get(url + '/date/get-days', (data) => {
        $.each(data, (index, day) => {
            $('#birthDay').append(new Option(day, day, false, false));
        });
    })

    $.get(url + '/date/get-months', (data) => {
        $.each(data, (index, month) => {
            $('#birthMonth').append(new Option(month.name, month.id, false, false));
        });
    })

    $.get(url + '/date/get-years', (data) => {
        $.each(data, (index, year) => {
            $('#birthYear').append(new Option(year, year, false, false));
        });
    })

    $("#btn-register").click(() => {
        let params = $("#form-register").serialize();
        $('.form-control').removeClass('is-invalid');

        $("#fieldset-register").attr("disabled", true);
        
        $.post(url + "/account/register", params, data => {
            $('#btn-login').removeClass('invisible');
        }).fail(message => {
            $("#fieldset-register").attr("disabled", false);
            $.each(message.responseJSON.attributes, (index, error) => {
                $('#' + error.name).addClass('is-invalid');
                $('#' + error.name + 'Feedback').text(error.message);
            })
        }).done();
    });
});
