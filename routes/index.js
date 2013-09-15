
// clearly new to Node here - this seems too low level and verbose

exports.index = function(req, res){
    res.render('splash', { title: 'genMC - Generation Minecraft' });
};

exports.summary = function(req, res) {
    res.render('summary', { layout: 'views/layouts/application.html', title: "genMC - Opportunities, challenges, and options"})
}

exports.credits = function(req, res){
    res.render('credits', { layout: 'views/layouts/application.html', title: 'genMC - Shoulders stood upon' });
};

exports.technologies = function(req, res){
    res.render('technologies', { layout: 'views/layouts/application.html', title: "genMC - what's behind the curtain?"});
};

exports.resources = function(req, res){
    res.render('resources', { layout: 'views/layouts/application.html', title: 'genMC - a few things that worked for us' });
};

exports.miscellaneous = function(req, res){
    res.render('miscellaneous', { layout: 'views/layouts/application.html', title: 'genMC - a grab bag of stuff' });
};

exports.kids_picks = function(req, res){
    res.render('kids_picks', { layout: 'views/layouts/application.html', title: 'genMC - the Minecraft community has a lot of neat people' });
};

exports.biography = function(req, res){
    res.render('biography', { layout: 'views/layouts/application.html', title: 'genMC - biography' });
};
