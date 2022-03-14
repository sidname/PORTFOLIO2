$(function(){
    $(window).on('load',function(){
      new WOW().init();
    });
  });//wow plugin 초기화
  
  $(function(){
    //var
    var $header = $('header');
    var $mnu = $('header>.con>nav>.gnb>li>a');
    var $tag = $('#aboutme>.content1-right>.tag>ul>li>a');
    var scrollTop = 0;
    var nowIdx = 0;
    var arrTopVal = [];
  
    $('section').each(function(idx){
      arrTopVal[idx] = $(this).offset().top;
    });
  
    //header
    $mnu.on('click',function(event){
      event.preventDefault();
      nowIdx = $mnu.index(this);
  
      $mnu.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
      $('html,body').stop().animate({
        scrollTop : arrTopVal[nowIdx]
      },1000,'easeInOutCubic');
    });
  
    $(window).on('scroll',function(){
      scrollTop = $(this).scrollTop();
  
      if(scrollTop>arrTopVal[0]){
        $header.addClass('active');
      }else{
        $header.removeClass('active');
      }
  
      for(var i=0; i<5; i++){
        if(scrollTop>=arrTopVal[i]){ 
          $mnu.eq(i).parent().addClass('on').siblings().removeClass('on');
        }
      }
    });//end of header ecent
  
    //tag
    $tag.on('click',function(event){
      tagIdx = $(this).attr('href');
  
      if(tagIdx=='sub.html'){
        $('#aboutme>.content1-left>a').trigger("click");
  
      }else{
        event.preventDefault();
  
        $('html,body').stop().animate({
          scrollTop : arrTopVal[tagIdx]
        },1000,'easeInOutCubic');
      }
    });
  
  });//end of header handler
  
  $(function(){
    //var
    var $mePrev = $('#aboutme>.content1-right>.profile>.prev');
    var $meNext = $('#aboutme>.content1-right>.profile>.next');
    var $aboutme = $('#aboutme>.content1-right>.profile>ul>li');
    var $tag = $('#aboutme>.content1-right>.tag>ul>li');
  
    var $list = $('#portfolio>.con>.mnu>li>a');
    var $listImg = $('#portfolio>.con>.view>li');
    var $viewOpen = $('.viewOpen');
    var $viewClose = $('.viewClose');
    var $viewImg = $('#portfolio>.portfolio_bg>.portfolio_img');
    var $view = $('#portfolio>.portfolio_bg');

    var nowIdx = 0;
  
    //about me
    $mePrev.on('click',function(){
      if(nowIdx>0){
        nowIdx--;
        $mePrev.addClass('on');
      }else{
        $mePrev.removeClass('on');
        $meNext.addClass('on');
      }
  
      $aboutme.eq(nowIdx).fadeIn().siblings().fadeOut();
    });
  
    $meNext.on('click',function(){
      if(nowIdx<1){
        nowIdx++;
        $meNext.addClass('on');
      }else{
        nowIdx = 1;
        $meNext.removeClass('on');
        $mePrev.addClass('on');
      }
  
      $aboutme.eq(nowIdx).fadeIn().siblings().fadeOut();
    });
  
    //aboutme random tag
    $(window).on('load',function(){
      var randNum = Math.floor(Math.random()*3);
      $tag.eq(randNum).addClass('on').siblings().removeClass('on');
    });//end of about me
  
    //portfolio
    $list.on('click',function(event){
      event.preventDefault();
      nowIdx = $list.index(this);
  
      $list.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
  
      $listImg.fadeOut();
      $listImg.eq(nowIdx).fadeIn();
    });
  
  
    $viewOpen.on('click',function(event){
  
      event.preventDefault();
      var src = $(this).attr('href');
  
      $viewImg.find('a').css({
        backgroundImage : 'url('+src+')'
      });
  
      $viewImg.parent().fadeIn();
    });
  
    $viewClose.on('click',function(event){
      event.preventDefault();
      $viewImg.scrollTop(0)
      $view.fadeOut();
    });
    
    $view.on('click',function(){
      $viewImg.scrollTop(0)
      $view.fadeOut();
    });
    //end of portfolio
  });//end of section handler