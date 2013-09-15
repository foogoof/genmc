exports.list = function(req, res){
  res.render('credits', { layout: 'views/layouts/application.html', title: 'Credit where credit is due' });
};
