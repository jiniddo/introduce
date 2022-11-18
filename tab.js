$(function(){
    $.ajax({
        type: "GET",
        url: "/javascript/json/portfolioDB.json",
        dataType : "json",
        success:  function(portfolioDB){
        var activeNum = $('.p_tabNm .active').index();
        var thumbImg = '';
        var linkinfor = '';
    
        $.each(portfolioDB[activeNum].thumbImg, (index, item) => {
            thumbImg += `<li ><img class="img-fluid" src="${item}" / ></li>`;
        });

        $.each(portfolioDB[activeNum].pLinkinfo, (index, item) => {
            linkinfor += `<li class ="${item.linkAdd}" ><a href = "${item.linkAdd}" > ${item.Linkname}</a></li>`;
        });

        
        $('#portfolio .description h2').html(portfolioDB[activeNum].descriptionH2);
            $('#portfolio .description p').html(portfolioDB[activeNum].description);
            $('#portfolio .titileImg img').attr('src', portfolioDB[activeNum].titileImg); 
            
        $('.thumbImg').html(thumbImg)
                
        $('#portfolio .pLinkinfo').html(linkinfor);
    
 function portload(activeNum){ }

        },
        error: function(){}
    })
});


        