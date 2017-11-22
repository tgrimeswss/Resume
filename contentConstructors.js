function appendElements(element) {
  showInfo = $('.showInfo');
  id = element.id;
  info = element.info;

  function skills () {
    var skills = $('.skills');
    for (var i = 0; i < info.length; i++) {//This loop will construct each skill content
      skills.append('<h3 class="subHeader">'+info[i].skillName+'</h3>');//Append the header
      skills.append('<p class="description">'+info[i].experience+'</p>');//Append the description
      skills.append('<p class="additional">'+info[i].additional+'</p>');//Append the description
      arrow(skills,i);
    }
  }

  function experience () {
    var experience = $('.experience');
    for (var i = 0; i < info.length; i++) {
      experience.append('<h3 class="subHeader">'+info[i].title+'<span class="dates">'+ info[i].dates +'</span></h3>');
      experience.append('<span><p class="description">'+info[i].description+'</p></span>');
      arrow(experience,i);
    }
  }

  function education () {
    var education = $('.education');
    for (var i = 0; i < info.length; i++) {
      education.append('<h3 class="subHeader">'+info[i].title+'<span class="dates">'+ info[i].dates +'</span></h3>');
      education.append('<p class="sub2Header">' + info[i].school +' - ' + info[i].cert + '</p>');
      education.append('<p class="description">' + info[i].description + '</p>')
      for (var x = 0; x < info[i].skillsLearned.length; x++) {
        education.append('<li class="listElements">' + info[i].skillsLearned[x] + '</li>')
      }
      arrow(education,i);
    }
  }

  function projects (element) {
    var projects = $('.projects');
    for (var i = 0; i < info.length; i++) {
      projects.append('<h3 class="subHeader">'+info[i].title+'<span class="dates">'+info[i].dates+'</span></h3>');
      projects.append('<p class="description">' + info[i].description + '</p>');
      arrow(projects,i);
    }
  }

  function clientReviews (element) {
    var clientReviews = $('.clientReviews');
    for (var i = 0; i < info.length; i++) {
      clientReviews.append('<h3 class="subHeader">'+info[i].name+'</h3>');
      clientReviews.append('<span class="sub2Header">' +rating(i) + ' - ' + '<span><em>'+info[i].testimonial+ '</em></span></span>');
      arrow(clientReviews,i);
    }
  }

  function arrow (element,iterator) {
    if (iterator+1 != info.length) {
      element.append('<hr>');
    } else if (iterator+1 === info.length) {
        arrow = element.append('<h2 class="upArrow">^</h2>');
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
  }
}
