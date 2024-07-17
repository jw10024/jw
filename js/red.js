// $(document).ready(function() {
//     $('#fullpage').fullpage({
//         autoScrolling: true,
//         scrollHorizontally: false,
//         anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
//         menu: '.sidemenu',
//         navigationTooltips: ['Section 1', 'Section 2', 'Section 3', 'Section 4', 'Footer'],
//         showActiveTooltip: true,
//         afterLoad: function(origin, destination, direction) {
//             if(destination.index >= 1) {
//                 $('.sidemenu').css('left', '20px'); // 오른쪽으로 나타나도록 설정
//             } else {
//                 $('.sidemenu').css('left', '-250px'); // 왼쪽으로 숨기도록 설정
//             }
//         }
//     });
// });
$(document).ready(function() {
    $('#fullpage').fullpage({
        autoScrolling: true,
        scrollHorizontally: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        menu: '.sidemenu',
        navigationTooltips: ['Section 1', 'Section 2', 'Section 3', 'Section 4', 'Footer'],
        showActiveTooltip: true,
        afterLoad: function(origin, destination, direction) {
            $('.sidemenu a[href="#' + destination.anchor + '"]').addClass('active') // 현재 페이지에 해당하는 메뉴 항목에 active 클래스 추가

            if (destination.index >= 1) {
                $('.sidemenu').css('left', '20px'); // 오른쪽으로 나타나도록 설정
            } else {
                $('.sidemenu').css('left', '-250px'); // 왼쪽으로 숨기도록 설정
            }
        }
    });
});
