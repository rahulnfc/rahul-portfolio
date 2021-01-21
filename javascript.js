$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxDKckfuhDn_fYSNqBGtv3REiGvf1lY5I3BuZ3Lse-m-qcVQf4rF1Bd4w/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
        },
        error:function (err){
            alert("Something Error")
        }
    })
})
