/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {

	console.log('home');

	var user = {
	  firstName: 'Dan',
	  lastName: 'Tacci',
	  key: 'danieltacci@gmail.com',
	  custom: {
	    groups: 'beta_testers'
	  }
	};

  ldclient.variation('new-header', {key: 'danieltacci@gmail.com'}, false, function(err, showFeature) {
    if (showFeature) {

      console.log('Showing your new header ' + user.key );

      res.render('home', {
		    title: 'Home',
		    showHeader: true
		  }, function(err, html) {
  			res.send(html);}
  		);
    } else {

      console.log('NOT showing your new header to ' + user.key);

      res.render('home', {
		    title: 'Home',
		    showHeader: false
		  }, function(err, html) {
  			res.send(html);}
  		);
 
    }

    ldclient.flush(function() {
      ldclient.close();
    });
  });

 //  console.log(showHeader);
  // res.render('home', {
  //   title: 'Home'
  // });
};
