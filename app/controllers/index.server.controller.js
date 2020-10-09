exports.render = function(req, res) {
    if(req.session.lastVisit){
        console.log(req.session.lastVist);
    }

    req.session.lastVisit = new Date();
    
    res.render('index', {
        title: 'Hello World'
    })
};