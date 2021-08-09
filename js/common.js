$(document).ready(function(){
    $('.kvBtn,.nav1').click(function(){
        $('html,body').animate({
            scrollTop: $('.step1').offset().top - 50
        }, 700);
    });
    $('.nav1,.nav2,.nav3').click(function(){
        if($('.mbNavBtn').hasClass('on')){
            $('.mbNavBtn,.navList').removeClass('on');
        }
    });
    $('.nav2').click(function(){
        $('html,body').animate({
            scrollTop: $('.step2').offset().top - 50
        }, 700);
    });
    $('.nav3').click(function(){
        $('html,body').animate({
            scrollTop: $('.step3').offset().top - 50
        }, 700);
    });
    $('.goTop').click(function(){
        $('html,body').animate({
            scrollTop: $('.kv').offset().top - 50
        }, 700);
    });
    $('.mbNavBtn').click(function(){
        if($(this).hasClass('on')){
            $('.mbNavBtn,.navList').removeClass('on');
        } else{
            $('.mbNavBtn,.navList').toggleClass('on');
        }
    });
    // $(window).scroll(function () {
    //     var p1 = $('.kv').height() * .8;
    //     if (getScrollTop() > p1) {
    //         $('.page1 .part1').addClass('on');
    //     } else {
    //         $('.page1 .part1').removeClass('on');
    //     }
    // });
    // function getScrollTop() {
    //     var bodyTop = 0;
    //     if (typeof window.pageY0ffset != "undefined") {
    //         bodyTop = window.pageY0ffset;
    //     } else if (typeof document.compatMode != "undefined" &&
    //         document.compatMode != "BackCompat") {
    //         bodyTop = document.documentElement.scrollTop;
    //     } else if (typeof document.body != "undefined") {
    //         bodyTop = document.body.scrollTop;
    //     }
    //     return bodyTop;
    // }
    $(window).resize(function () { });
    var mySwiper1 = new Swiper('.swiper-container1', {
        initialSlide:0,
        observer:true,
        observeParents:true,
        effect: 'slide',
        slidesPerView: 2.5,
        spaceBetween:20,
        centeredSlides: true,
        // loop: true,
        initialSlide: 0,
        autoplay:true,
        // freeMode: true,
        navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1',
        },
        pagination: {
            el: '.swiper-pagination1',
        },
        speed: 400,
        preloadImages: true,
        breakpoints:{
            1100:{
                slidesPerView: 1.5,
            }
        }

    }); 
        
    $(function () { 
        
        var data1 = [
            {label: "33%：擴編", data:33},
            {label: "2.1%：縮編", data: 2.1},
            {label: "64.9%：維持不變", data: 64.9}
        ];
    
        $.plot('.flotcontainer1', data1, {
            series: {
                pie: { 
                    show: true,
                    radius: 1,
                    label: {
                        show: false,
                        radius: 2/3,
                        background: { 
                            opacity: .8,
                            color: '#fff',
                        }
                    },
                },
                
            },
            legend: {
                show: true
            },
            colors: ["#d2a53d", "#99b7ec","#242c5f"],
        });

        var data2 = [
            {label: "1.4%：縮編1~30%", data:1.4},
            {label: "4.8%：縮編31~60%", data: 4.8},
            {label: "8.2%：縮編61%以上", data: 8.2},
            {label: "51.4%：維持不變", data: 51.4}
        ];
    
        $.plot('.flotcontainer2', data2, {
            series: {
                pie: { 
                    show: true,
                    radius: 1,
                    label: {
                        show: false,
                        radius: 1/2,
                        background: { 
                            opacity: .8,
                            color: '#fff',
                        }
                    },
                },
                
            },
            legend: {
                show: true
            },
            colors: ["#d2a53d", "#99b7ec","#242c5f","#524646"],
        });

        var data3 = [
            {label: "9.4%：先前並無數位轉型", data: 9.4},
            {label: "2.9%：沒用處", data:2.9},
            {label: "35%：有一點用處", data: 35},
            {label: "38%：有用", data: 38},
            {label: "14.6%：非常有用", data: 14.6},
        ];
    
        $.plot('.flotcontainer3', data3, {
            series: {
                pie: { 
                    show: true,
                    radius: 1,
                    label: {
                        show: false,
                        radius: 1/2,
                        background: { 
                            opacity: .8,
                            color: '#fff',
                        }
                    },
                },
                
            },
            legend: {
                show: true
            },
            colors: ["#d2a53d", "#99b7ec","#242c5f","#524646","#4c86ed"],
        });

        var data5 = [
            {label: "10.9%：不考慮", data: 10.9},
            {label: "39.1%：否，已有專責單位", data:39.1},
            {label: "17.9%：是，考慮新設單位", data: 19.9},
            {label: "32.1%：是，再設單位負責", data: 32.1},
        ];
    
        $.plot('.flotcontainer5', data5, {
            series: {
                pie: { 
                    show: true,
                    radius: 1,
                    label: {
                        show: false,
                        radius: 1/2,
                        background: { 
                            opacity: .8,
                            color: '#fff',
                        }
                    },
                },
                
            },
            legend: {
                show: true
            },
            colors: ["#d2a53d", "#99b7ec","#242c5f","#524646"],
        });


        var data6 = [
        
            {label: "14.4%：是", data: 14.4},
            {label: "19.6%：否，提升但未至一級主管", data:19.6},
            {label: "20.3%：否，不考慮提高階層", data: 20.3},
            {label: "45.7%：否，已有一級主管", data: 45.7},
        ];
    
        $.plot('.flotcontainer6', data6, {
            series: {
                pie: { 
                    show: true,
                    radius: 1,
                    label: {
                        show: false,
                        radius: 1/2,
                        background: { 
                            opacity: .8,
                            color: '#fff',
                        }
                    },
                },
                
            },
            legend: {
                show: true
            },
            colors: ["#d2a53d", "#99b7ec","#242c5f","#524646"],
        });

        
        Chart.defaults.global.defaultFontFamily = "Lato";

        var horizontalBarChart = new Chart(horizontalBarChartCanvas, {
        type: 'horizontalBar',
        data: {
            labels: ["內部人員不熟悉數位相關事務", "公司缺乏對數位轉型的全面性規劃", "外聘數位人才困難", "數位工具/系統，導入不容易", "組織工作固化，推動新事務進程緩慢", "跨部門間的協調機制不完善", "需投入的成本過高", "成效衡量(KPI)不明確", "與既有業務產生摩擦與衝突", "小範圍試驗的專案，價值不明顯", "決策層對數位轉型內容的共識不足", "公司沒有專職數位轉型的部門", "企業最高主管的參與度低", "其他"],
            datasets: [{
                data: [35.2, 34.5, 32.7, 32.7, 32.7, 32.1, 28.5,25.5,17,17,15.2,13.9,8.5,1.8],
                backgroundColor: ["#4c86ed", "#99b7ec", "#99b7ec", "#99b7ec", "#99b7ec", "#99b7ec", "#99b7ec", "#99b7ec", "#99b7ec", "#99b7ec", "#99b7ec", "#99b7ec", "#99b7ec", "#99b7ec"], 
            }]
        },
        options: {
            tooltips: {
                enabled: false
            },
            responsive: true,
            legend: {
                display: false,
                position: 'bottom',
                fullWidth: true,
                labels: {
                    boxWidth: 30,
                    padding: 50
                }
            },
            scales: {
                yAxes: [{
                barPercentage: 1,
                gridLines: {
                    display: true,
                    drawTicks: true,
                    drawOnChartArea: false
                },
                ticks: {
                    fontColor: '#555759',
                    fontFamily: 'Lato',
                    fontSize: 12
                }
                    
                }],
                xAxes: [{
                    gridLines: {
                    display: true,
                    drawTicks: false,
                    tickMarkLength: 5,
                    drawBorder: false
                    },
                ticks: {
                    padding: 5,
                    beginAtZero: true,
                    fontColor: '#555759',
                    fontFamily: 'Lato',
                    fontSize: 12,
                    callback: function(label, index, labels) {
                    return label/100;
                    }
                    
                },
                    scaleLabel: {
                    display: true,
                    padding: 10,
                    fontFamily: 'Lato',
                    fontColor: '#555759',
                    fontSize: 16,
                    fontStyle: 700,
                    labelString: '員工不熟悉數位事務，讓企業轉型卡關(%)'
                    },
                
                }]
            }
        }
        });


        var horizontalBarChart = new Chart(horizontalBarChartCanvas1, {
            type: 'horizontalBar',
            data: {
                labels: ["接入新的數位工具", "公司軟硬體設備升級", "培訓員工", "投入新的經費", "新聘數位相關人員", "其他", "沒有"],
                datasets: [{
                    data: [63.7, 54.4, 43.9, 32.2, 15.2, 5.3, 12.3],
                    backgroundColor: ["#4c86ed", "#99b7ec", "#99b7ec", "#99b7ec", "#99b7ec", "#99b7ec", "#99b7ec", "#99b7ec", "#99b7ec", "#99b7ec", "#99b7ec", "#99b7ec", "#99b7ec", "#99b7ec"], 
                }]
            },
            options: {
                tooltips: {
                    enabled: false
                },
                responsive: true,
                legend: {
                    display: false,
                    position: 'bottom',
                    fullWidth: true,
                    labels: {
                        boxWidth: 30,
                        padding: 50
                    }
                },
                scales: {
                    yAxes: [{
                    barPercentage: 1,
                    gridLines: {
                        display: true,
                        drawTicks: true,
                        drawOnChartArea: false
                    },
                    ticks: {
                        fontColor: '#555759',
                        fontFamily: 'Lato',
                        fontSize: 12
                    }
                        
                    }],
                    xAxes: [{
                        gridLines: {
                        display: true,
                        drawTicks: false,
                        tickMarkLength: 5,
                        drawBorder: false
                        },
                    ticks: {
                        padding: 5,
                        beginAtZero: true,
                        fontColor: '#555759',
                        fontFamily: 'Lato',
                        fontSize: 12,
                        callback: function(label, index, labels) {
                        return label/100;
                        }
                        
                    },
                        scaleLabel: {
                        display: true,
                        padding: 10,
                        fontFamily: 'Lato',
                        fontColor: '#555759',
                        fontSize: 16,
                        fontStyle: 700,
                        // labelString: '員工不熟悉數位事務，讓企業轉型卡關(%)'
                        },
                    
                    }]
                }
            }
            });

        var data10 = {
            labels: [
                "錢",
                "人",
                "任務"
            ],
            datasets: [
                {
                    data: [4.3, 38.7,55.8],
                    backgroundColor: [
                        "#d2a53d",
                        "#99b7ec",
                        "#4c86ed"
                    ],
                    hoverBorderColor: [
                        "#eee","#eee"														
                    ]
                }]
        };
       


        var piectx = document.getElementById("piechart").getContext("2d");
        var pieChart = new Chart(piectx,{
        type: 'pie',
        data: data10,
            options: { 
                showAllTooltips: true,
                animation: {
                    animateRotate: true,
                    animateScale: true
                }, 
                elements: {
                    arc: {
                    borderColor: "#fff"
                }
            },
            
            title: {
                // display: false,
                text: 'Custom Chart Title',
                fontSize: 18,
                padding: 20,
                fontColor: "#999",
                fontStyle: 'Normal',
                fontFamily: "Montserrat",
                fullWidth: true
            },
            tooltips: {
                enabled: true,
                bodyFontColor: "#efefef",
                fontStyle: 'Normal',
                bodyFontFamily: "Montserrat",
                cornerRadius: 3,
                backgroundColor: "#333",
                xPadding: 7,
                yPadding: 7,
                caretSize: 5,
                bodySpacing: 10
            },
					
            }
        });

    });
});