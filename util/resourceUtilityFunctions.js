var resourceUtility = {
	
	'renderResourceNotFound' : function(req, res) {
		res.write('The ' + req.method + ' request for ' + req.path + 'could not be found, make sure' +
			        'you are trying to access a resource you have defined.');
	}

}

module.exports = resourceUtility;