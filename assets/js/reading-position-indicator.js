// **************READING POSITION INDICATOR 
// credits to: https://codepen.io/pankajparashar/pen/towxF 

$(document).ready(function(){
    
    var getMax = function(){
        return $(document).height() - $(window).height();
    }
    
    var getValue = function(){
        return $(window).scrollTop();
    }
    
    if('max' in document.createElement('progress')){
        // Browser supports progress element
        var progressbar = $('progress');
        
        // Set the Max attr for the first time
        progressbar.attr({ max: getMax() });

        $(document).on('scroll', function(){
            // On scroll only Value attr needs to be calculated
            progressbar.attr({ value: getValue() });
        });
      
        $(window).resize(function(){
            // On resize, both Max/Value attr needs to be calculated
            progressbar.attr({ max: getMax(), value: getValue() });
        });   
    }
    else {
        var progressbar = $('.progress-bar'), 
            max = getMax(), 
            value, width;
        
        var getWidth = function(){
            // Calculate width in percentage
            value = getValue();            
            width = (value/max) * 100;
            width = width + '%';
            return width;
        }
        
        var setWidth = function(){
            progressbar.css({ width: getWidth() });
        }
        
        $(document).on('scroll', setWidth);
        $(window).on('resize', function(){
            // Need to reset the Max attr
            max = getMax();
            setWidth();
        });
    }
});

$(document).ready(function(){
  
  $('#single').addClass("active");
  $('#progressbar').addClass('single');
    
  $('#single').on('click', function(){
    $('#progressbar').removeClass().addClass('single');
    $('a').removeClass();
    $(this).addClass('active');
    $(this).preventDefault();
  });

  $(document).on('scroll', function(){

      maxAttr = $('#progressbar').attr('max');
      valueAttr = $('#progressbar').attr('value');
      percentage = (valueAttr/maxAttr) * 100;    
  });
  
});


// ************** HOME ANIMATION

 

