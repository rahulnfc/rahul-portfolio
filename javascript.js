// $("#submit-form").submit((e)=>{
//     e.preventDefault()
//     $.ajax({
//         url:"https://script.google.com/macros/s/AKfycbxDKckfuhDn_fYSNqBGtv3REiGvf1lY5I3BuZ3Lse-m-qcVQf4rF1Bd4w/exec",
//         data:$("#submit-form").serialize(),
//         method:"post",
//         success:function (response){
//             alert("Form submitted successfully")
//             window.location.reload()
//         },
//         error:function (err){
//             alert("Something Error")
//         }
//     })
// })
$("#submit-form").validate({
    rules:{
        Name:{
            required: true,
            minlength:3,
            maxlength:10
        },
        Place:{
            required: true,
            minlength:3,
            maxlength:10
        },
        Email:{
            required: true,
            email: true
        },
        Mobile:{
            required: true,
            number: true,
            minlength:10,
            maxlength:10
        },
        Message:{
            required: true
        }
    },
    submitHandler:(form, e)=>{
    e.preventDefault();
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxDKckfuhDn_fYSNqBGtv3REiGvf1lY5I3BuZ3Lse-m-qcVQf4rF1Bd4w/exec",
        data:$("form").serialize(),
        method:"POST",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
        },
        error:function (err){
            alert("Something Error")
        }
    })
}
});