    //대표이미지 - String => titileImg : './portfolio/big/ad/1.jpg
    //썸네일이미지들  - Array   => ThumImg: ['./portfolio/thum/ad/1.jpg','./portfolio/thum/ad/2.jpg','./portfolio/thum/ad/3.jpg']
    //제목              - String -> descriptionH2 : '봄날의 포트폴리오'
    //구체적인 설명 - String  ->description : '이렇게 저렇게'
    //링크들  - Object -> p_linkinfo : ['사이트주소','깃주소, '피그마주소']

    const portfolioDB = [
    {
        titileImg : 'portfolio/big/ad/1.jpg',
        ThumImg: [
            'portfolio/thumb/ad/1.jpg',
            'portfolio/thumb/ad/2.jpg',
            'portfolio/thumb/ad/3.jpg'],
        descriptionH2 : '봄날의 웹 포트폴리오',
        description : '사용성 개선을 위한 UI작업(반응형)으로 제작하였으며 유지보수가 원활하도록 JSON DB화 하였다<br> #bootstrap #sacc #javascript #jQuery #Adobe Illustrator/photoshap 깃에 있는 프로그램 사용 퍼센트',
        pLinkinfo : ['https://pindrop.cafe24.com','https://github.com/jiniddo', '피그마주소']
    
    },

    {
        titileImg : 'portfolio/big/ad/2.jpg',
        ThumImg: [
            'portfolio/thumb/ad/4.jpg',
            'portfolio/thumb/ad/5.jpg',
            'portfolio/thumb/ad/6.jpg'],
        descriptionH2 : '봄날의 리엑트 포트폴리오',
        description : '리엑트 리엑트 어떻게 만들면 잘 만드는 걸까? #React-bootstrap #sacc #javascript #jQuery #Adobe Illustrator/photoshap 깃에 있는 프로그램 사용 퍼센트',
        pLinkinfo : ['구글ppt','https://github.com/jiniddo', '노션']

    },
    {
        titileImg : 'portfolio/big/ad/3.jpg',
        ThumImg: [
            'portfolio/thumb/ad/7.jpg',
            'portfolio/thumb/ad/8.jpg',
            'portfolio/thumb/ad/9.jpg'],
        descriptionH2 : '봄날의 포트폴리오 기획서',
        description : '기획서는 피그마로 만들었으며 해당 이미지는 사이트에 바로 적용할 수 있는 상태로 가공하였다. 배너의 경우 모바일에서도 인스타에서도 바로 쓸수 있도록 1024사이즈로 제작하였다',
        pLinkinfo : ['https://pindrop.cafe24.com', '피그마주소']
    }
];


$(function(){
    var starNum = $('.p_tabNm .active').index();
    $('#portfolio .description h2').html(portfolioDB[starNum].descriptionH2)
    $('#portfolio .description p').html(portfolioDB[starNum].description)
    $('#portfolio .titileImg img').attr('src',portfolioDB[starNum].titileImg) 
    //태그중심 개발
    $('#portfolio .thumbImg img').each((index, item) => {
       $(item).attr('src',portfolioDB[starNum].ThumImg[index])
    })
    //DB중심 개발 (arry , 실행)
    var linkinfor = '';
    $.each(portfolioDB[starNum].pLinkinfo, (index, item) => {
        linkinfor += `<li><a>${portfolioDB[starNum].pLinkinfo[index]}</a><li>`;
    })
    $('#portfolio .pLinkinfo').html(linkinfor);
    //for in 구문
    // for(let i in portfolioDB[starNum].pLinkinfo)
    //매개인자 
    function portload(starNum){

    }


})







//    for (let i in portfolioDB[0].ThumImg) {
//         $(1.ThumImg li:eq(${i}) img`).attr('src',portfolioDB[0],thumbImg[i]);
//    }


// $(function(){
//    $('.titileImg img').attr('src',portfolioDB[0].titileImg)


//     $('.thumbImg img').each((index, item) => {
//         //console.log(a,b);  찍어서 each안의 매개인자를 확인한다.
//         $(item).attr('src', portfolioDB[0].ThumImg[index])
//     })
//     $('.description h2').html(portfolioDB[0].descriptionH2)
//     $('.description p').html(portfolioDB[0].description)
//     $('.p-linkinfo a').each((index, item) => {
//          $(item).attr('href', portfolioDB[0].pLinkinfo[index])

//     })

// })