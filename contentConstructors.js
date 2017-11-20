function appendElements(element) {
  showInfo = $('.showInfo');
  id = element.id;
  info = element.info;

  if(id === 'skills') {
    skills(element);
  } else if (id === 'education') {
    education(element);
  } else if (id === 'projects') {
    projects(element);
  } else if (id === 'clientReviews') {
    clientReviews(element);
  } else if (id === 'references') {
    references(element);
  }

  function skills () {
    var skills = $('.skills');
    for (var i = 0; i < info.length; i++) {//This loop will construct each skill content
      skills.append('<h3 class="subHeader">'+info[i].skillName+'</h3>');//Append the header
      skills.append('<p class="description">'+info[i].experience+'</p>');//Append the description
      skills.append('<p class="additional">'+info[i].additional+'</p>');//Append the description
    }
  }

  function projects () {
  }

  function education () {
    var education = $('.education');
    education.append('<h1>' + info[1] + '</h1>')
  }

  function clientReviews () {
    console.log(element);
  }

  function references (element) {
    console.log(element);
  }


}
