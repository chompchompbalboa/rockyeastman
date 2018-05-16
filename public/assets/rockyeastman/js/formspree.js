$('#formspree').submit(function(e) {
    e.preventDefault();
    // Replace text
    $('#formspree_submit').val("Sending ...");

    // Collect form data
    var values = {};
    $.each($('#formspree').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });
    console.log(values);

    // Send form data
    $.ajax({
        url: "https://formspree.io/eastmanrjr@gmail.com", 
        method: "POST",
        data: {
            Name: values.name,
            Email: values.email,
            Message: values.message
        },
        dataType: "json",
    })
    .done(function() {
        // Replace the form with thank you
        $('#formspree_submit').val("Sent!");
    });
})
