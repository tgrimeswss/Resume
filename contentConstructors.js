function appendElements(element) {
  showInfo = $('.showInfo');
  id = element.id;
  info = element.info;
  thisElement = $('.'+id);

  function bio() {
    for (var i = 0; i < info.length; i++) {
      thisElement.append('<div class="row"><div class="col-md-6"><img class="bioPic" src="'+info[i].picture+'"></div>'+
      '<div class="col-md-6 bioInfo"><h3 class="centerText">'+info[i].header+'</h3><p style="padding:10px;" class="centerText"><em>'+
      info[i].description+'</em></p></div></div>');
      arrow(thisElement,i);
    }
    for (var x = 0; x < info[0].bio.length;x++) {
      $('.bioInfo').append('<p style="margin-left: 30px;"><span>'+info[0].bio[x].name+'</span><span>'+info[0].bio[x].content+'</span></p>');
    }
  }

  function skills () {
    for (var i = 0; i < info.length; i++) {//This loop will construct each skill content
      thisElement.append('<h3 class="subHeader">'+info[i].skillName+'</h3>');//Append the header
      thisElement.append('<p class="description">'+info[i].experience+'</p>');//Append the description
      thisElement.append('<p class="additional">'+info[i].additional+'</p>');//Append the description
      arrow(thisElement,i);
    }
  }

  function experience () {
    for (var i = 0; i < info.length; i++) {
      thisElement.append('<h3 class="subHeader">'+info[i].title+'<span class="dates">'+ info[i].dates +'</span></h3>');
      thisElement.append('<span><p class="description">'+info[i].description+'</p></span>');
      arrow(thisElement,i);
    }
  }

  function education () {
    for (var i = 0; i < info.length; i++) {
      thisElement.append('<h3 class="subHeader">'+info[i].title+'<span class="dates">'+ info[i].dates +'</span></h3>');
      thisElement.append('<p class="sub2Header">' + info[i].school +' - ' + info[i].cert + '</p>');
      if(i === 0 || i === 1) {
        thisElement.append('<h3 style="text-align:center;">' + info[i].description + '</h3>');
      }
      else {
        thisElement.append('<p class="description">' + info[i].description + '</p>');
      }
      for (var x = 0; x < info[i].skillsLearned.length; x++) {
        thisElement.append('<li style="margin-left: 50px;">' + info[i].skillsLearned[x] + '</li>')
      }
      arrow(thisElement,i);
    }
  }

  function projects (element) {
    for (var i = 0; i < info.length; i++) {
      thisElement.append('<h3 class="subHeader">'+info[i].title+'<span class="dates">'+info[i].dates+'</span></h3>');
      thisElement.append('<p class="description">' + info[i].description + '</p>');
      arrow(thisElement,i);
    }
  }

  function clientReviews (element) {
    for (var i = 0; i < info.length; i++) {
      thisElement.append('<h3 class="subHeader">'+info[i].name+'</h3>');
      thisElement.append('<span class="sub2Header">' +rating(i) + ' - ' + '<span><em>'+info[i].testimonial+ '</em></span></span>');
      arrow(thisElement,i);
    }
  }

  function arrow (element,iterator) {
    if (iterator+1 != info.length) {
      element.append('<hr>');
    } else if (iterator+1 === info.length) {
        arrow = element.append('<h2 class="upArrow" style="margin:0;">^</h2>');
        $('.upArrow').click(function() {
          ViewModel.toggleVisibility(element);
        })
        element.append('<hr>');
      }
  }

  function rating(iterator) {
    star = '<span>&starf;</span>';
    starList = [];
    for (var x = 0; x < info[iterator].rating; x++) {
      starList.push(star);
    }
    result = starList.join('');
    return(result);
  }

  function headerData(element) {
    id = $('.'+element.id);
    if (element.id === 'gitHub') {
      id.append('<a href="'+element.title+'">tgrimessWSS</a>');
    } else {
      id.append('<p>'+element.title+'</p>')
    }
  }

  if(id === 'skills') {
    skills (element);
  } else if (id === 'experience') {
    experience (element);
  } else if (id === 'education') {
    education(element);
  } else if (id === 'projects') {
    projects (element);
  } else if (id === 'clientReviews') {
    clientReviews (element);
  } else if (id === 'gitHub' || id === 'phone' || id === 'email') {
    headerData (element);
  } else if (id === 'bio') {
    bio (element);
  }
}
